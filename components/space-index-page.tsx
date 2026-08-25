"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { ExperimentalParticleField } from "@/components/experimental-particle-field";
import { PolySpeciesPreview } from "@/components/poly-species/poly-species-preview";
import {
  SPACE_EXPERIMENTS,
  type SpacePreviewKind,
} from "@/config/space";
import { useLanguage } from "@/providers/language-provider";

const VOXEL_EXPERIMENT_COPY = {
  zh: {
    category: "体素空间 / 网页交互",
    title: "数字街区",
    summary: "十二组经过镂空与错位处理的圆角体素建筑，组成一个可以旋转、查看并继续搭建的数字街区原型。",
    status: "可交互原型",
    previewLabel: "数字街区立方体预览，点击使立方体沿惯性自然滑停，再次点击从当前位置继续旋转",
  },
  en: {
    category: "Voxel space / Web interaction",
    title: "Taikoo Li Digital District",
    summary: "Twelve rounded voxel buildings, carved and offset into an explorable digital district that can still be inspected and extended.",
    status: "Interactive prototype",
    previewLabel: "Digital District cube preview. Click to let it coast to a stop, then click again to continue from the same orientation.",
  },
  fr: {
    category: "Espace voxel / Interaction web",
    title: "Quartier numérique Taikoo Li",
    summary: "Douze bâtiments en voxels arrondis, évidés et décalés, composent un quartier numérique à observer, faire tourner et prolonger.",
    status: "Prototype interactif",
    previewLabel: "Aperçu du cube Quartier numérique. Cliquer pour le laisser ralentir naturellement, puis cliquer à nouveau pour reprendre depuis la même orientation.",
  },
} as const;

export function SpaceIndexPage() {
  const { dictionary, locale } = useLanguage();
  const copy = dictionary.space;
  const voxelCopy = VOXEL_EXPERIMENT_COPY[locale];

  return (
    <section className="space-index-page">
      <header className="space-index-hero">
        <div className="space-index-heading" data-reveal>
          <p className="section-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
        </div>
        <div className="space-index-intro" data-reveal>
          <p>{copy.lead}</p>
          <span>
            {copy.collectionLabel} / {(SPACE_EXPERIMENTS.length + 1)
              .toString()
              .padStart(2, "0")}
          </span>
        </div>
      </header>

      <div className="space-experiment-list">
        {SPACE_EXPERIMENTS.map((experiment) => {
          const content = copy.experiments[experiment.key];

          return (
            <article className="space-experiment-item" key={experiment.slug}>
              <div className="space-experiment-preview" aria-hidden="true">
                <ExperimentPreview kind={experiment.preview} />
                <div className="space-preview-grid" />
                <span className="space-preview-code">{experiment.code}</span>
              </div>

              <div className="space-experiment-copy" data-reveal>
                <div className="space-experiment-meta">
                  <span>{experiment.code}</span>
                  <span>{content.category}</span>
                  <span>{experiment.year}</span>
                </div>
                <h2>{content.title}</h2>
                <p>{content.summary}</p>
                <div className="space-experiment-footer">
                  <span className="space-experiment-status">
                    <i aria-hidden="true" />
                    {content.status}
                  </span>
                  <Link className="space-experiment-link" href={experiment.href}>
                    {copy.open}
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}

        <article className="space-experiment-item" key="taikoo-li-voxel-district">
          <div
            className="space-experiment-preview space-voxel-preview"
            style={{ background: "#d9e3e1" }}
          >
            <VoxelDistrictCubePreview label={voxelCopy.previewLabel} />
            <span className="space-preview-code">03</span>
          </div>

          <div className="space-experiment-copy" data-reveal>
            <div className="space-experiment-meta">
              <span>03</span>
              <span>{voxelCopy.category}</span>
              <span>2023</span>
            </div>
            <h2>{voxelCopy.title}</h2>
            <p>{voxelCopy.summary}</p>
            <div className="space-experiment-footer">
              <span className="space-experiment-status">
                <i aria-hidden="true" />
                {voxelCopy.status}
              </span>
              <Link
                className="space-experiment-link"
                href="/work/taikoo-li-digital-district/editor"
              >
                {copy.open}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ExperimentPreview({ kind }: { kind: SpacePreviewKind }) {
  switch (kind) {
    case "particle-field":
      return <ExperimentalParticleField chapter={0} />;
    case "poly-species":
      return <PolySpeciesPreview />;
  }
}

function VoxelDistrictCubePreview({ label }: { label: string }) {
  const [stopped, setStopped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);
    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <button
      aria-label={label}
      aria-pressed={stopped}
      className="voxel-cube-stage"
      data-stopped={stopped}
      onClick={() => setStopped((value) => !value)}
      style={{ background: "#d9e3e1", color: "rgba(27, 47, 52, 0.62)" }}
      type="button"
    >
      <Canvas
        aria-hidden="true"
        camera={{ far: 30, fov: 34, near: 0.1, position: [0, 2.25, 5.7] }}
        dpr={[1, 1.6]}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
        shadows="variance"
        style={{ inset: 0, pointerEvents: "none", position: "absolute" }}
      >
        <color args={["#d9e3e1"]} attach="background" />
        <GlassEnvironment />
        <ambientLight intensity={0.42} />
        <hemisphereLight args={["#fff9e8", "#4d86ff", 1.15]} />
        <directionalLight
          castShadow
          color="#fffbed"
          intensity={2.25}
          position={[-2.8, 6.4, 4.4]}
          shadow-bias={-0.0004}
          shadow-blurSamples={18}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-radius={12}
        />
        <rectAreaLight
          color="#fff8dc"
          height={2.2}
          intensity={4.8}
          position={[-1.8, 4.6, 3.1]}
          rotation={[THREE.MathUtils.degToRad(-48), 0, 0]}
          width={5.4}
        />
        <rectAreaLight
          color="#a5f4ff"
          height={3.8}
          intensity={3.2}
          position={[-3.6, 0.2, 2.6]}
          rotation={[0, THREE.MathUtils.degToRad(-54), 0]}
          width={1.8}
        />
        <pointLight
          color="#3974ff"
          decay={1.25}
          distance={4.5}
          intensity={9}
          position={[0.45, -0.92, 1.75]}
        />
        <pointLight
          color="#67e7ef"
          decay={1.4}
          distance={4.5}
          intensity={3.5}
          position={[-2.4, -0.45, 2.1]}
        />
        <GlassDistrictCube reducedMotion={reducedMotion} stopped={stopped} />
        <mesh position={[0, -1.05, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[14, 14]} />
          <shadowMaterial color="#668988" opacity={0.2} transparent />
        </mesh>
      </Canvas>
      <span className="voxel-cube-hint">
        {stopped ? "CLICK / CONTINUE" : "CLICK / COAST"}
      </span>
    </button>
  );
}

function GlassEnvironment() {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    const pmremGenerator = new THREE.PMREMGenerator(gl);
    const environmentScene = new RoomEnvironment();
    const environmentMap = pmremGenerator.fromScene(environmentScene, 0.05).texture;
    const previousEnvironment = scene.environment;
    const previousIntensity = scene.environmentIntensity;

    scene.environment = environmentMap;
    scene.environmentIntensity = 0.68;

    return () => {
      scene.environment = previousEnvironment;
      scene.environmentIntensity = previousIntensity;
      environmentMap.dispose();
      environmentScene.dispose();
      pmremGenerator.dispose();
    };
  }, [gl, scene]);

  return null;
}

function GlassDistrictCube({
  reducedMotion,
  stopped,
}: {
  reducedMotion: boolean;
  stopped: boolean;
}) {
  const cube = useRef<THREE.Mesh>(null);
  const physics = useRef({
    yaw: THREE.MathUtils.degToRad(28),
    yawVelocity: THREE.MathUtils.degToRad(-26),
  });
  const bodyGeometry = useMemo(() => {
    const geometry = new RoundedBoxGeometry(1.52, 1.52, 1.52, 8, 0.13);
    const positions = geometry.getAttribute("position");
    const colors = new Float32Array(positions.count * 3);
    const bottomColor = new THREE.Color("#5372ff");
    const middleColor = new THREE.Color("#8adce3");
    const topColor = new THREE.Color("#fff8e8");
    const vertexColor = new THREE.Color();

    for (let index = 0; index < positions.count; index += 1) {
      const normalizedY = THREE.MathUtils.clamp(
        (positions.getY(index) + 0.76) / 1.52,
        0,
        1,
      );

      if (normalizedY < 0.52) {
        vertexColor.copy(bottomColor).lerp(middleColor, normalizedY / 0.52);
      } else {
        vertexColor
          .copy(middleColor)
          .lerp(topColor, (normalizedY - 0.52) / 0.48);
      }

      colors[index * 3] = vertexColor.r;
      colors[index * 3 + 1] = vertexColor.g;
      colors[index * 3 + 2] = vertexColor.b;
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useEffect(
    () => () => {
      bodyGeometry.dispose();
    },
    [bodyGeometry],
  );

  useFrame((_frameState, frameDelta) => {
    const cubeMesh = cube.current;
    if (!cubeMesh) return;

    const delta = Math.min(1 / 30, frameDelta);
    const state = physics.current;

    if (reducedMotion) {
      state.yawVelocity = 0;
      cubeMesh.rotation.y = state.yaw;
      return;
    }

    const cruiseVelocity = THREE.MathUtils.degToRad(-26);
    const targetVelocity = stopped ? 0 : cruiseVelocity;
    const velocityResponse = stopped ? 1.9 : 1.55;
    const velocityBlend = 1 - Math.exp(-velocityResponse * delta);

    state.yawVelocity = THREE.MathUtils.lerp(
      state.yawVelocity,
      targetVelocity,
      velocityBlend,
    );

    if (stopped && Math.abs(state.yawVelocity) < THREE.MathUtils.degToRad(0.035)) {
      state.yawVelocity = 0;
    }

    state.yaw += state.yawVelocity * delta;
    cubeMesh.rotation.y = state.yaw;
  });

  return (
    <mesh castShadow position={[0, -0.29, 0]} receiveShadow ref={cube}>
      <primitive attach="geometry" object={bodyGeometry} />
      <meshPhysicalMaterial
        attenuationColor="#8fcfff"
        attenuationDistance={0.72}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#ffffff"
        dispersion={0.1}
        envMapIntensity={1.18}
        ior={1.42}
        iridescence={0.16}
        iridescenceIOR={1.24}
        iridescenceThicknessRange={[120, 420]}
        metalness={0}
        opacity={1}
        roughness={0.2}
        specularIntensity={1}
        thickness={1.35}
        transmission={0.58}
        transparent
        vertexColors
      />
    </mesh>
  );
}
