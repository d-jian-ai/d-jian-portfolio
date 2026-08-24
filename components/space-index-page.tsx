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
    previewLabel: "数字街区立方体预览，点击使立方体阻尼落面，再次点击重新立起",
  },
  en: {
    category: "Voxel space / Web interaction",
    title: "Taikoo Li Digital District",
    summary: "Twelve rounded voxel buildings, carved and offset into an explorable digital district that can still be inspected and extended.",
    status: "Interactive prototype",
    previewLabel: "Digital District cube preview. Click to settle it on a face, then click again to raise it.",
  },
  fr: {
    category: "Espace voxel / Interaction web",
    title: "Quartier numérique Taikoo Li",
    summary: "Douze bâtiments en voxels arrondis, évidés et décalés, composent un quartier numérique à observer, faire tourner et prolonger.",
    status: "Prototype interactif",
    previewLabel: "Aperçu du cube Quartier numérique. Cliquer pour le poser sur une face, puis cliquer à nouveau pour le relever.",
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
            style={{ background: "#020403" }}
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
  const [resting, setResting] = useState(false);
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
      aria-pressed={resting}
      className="voxel-cube-stage"
      data-resting={resting}
      onClick={() => setResting((value) => !value)}
      style={{ background: "#020403" }}
      type="button"
    >
      <Canvas
        aria-hidden="true"
        camera={{ far: 30, fov: 35, near: 0.1, position: [0, 1.25, 6.05] }}
        dpr={[1, 1.6]}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
        shadows
        style={{ inset: 0, pointerEvents: "none", position: "absolute" }}
      >
        <color args={["#020403"]} attach="background" />
        <GlassEnvironment />
        <ambientLight intensity={0.08} />
        <hemisphereLight args={["#b9ddd5", "#020705", 0.28]} />
        <directionalLight
          color="#e1f5ef"
          intensity={1.25}
          position={[4.2, 5.2, 5.6]}
        />
        <directionalLight
          color="#64c6a6"
          intensity={0.55}
          position={[-4.2, 1.6, 3.4]}
        />
        <rectAreaLight
          color="#75b9a8"
          height={4.2}
          intensity={3}
          position={[-3.8, 1.4, 3.4]}
          rotation={[0, THREE.MathUtils.degToRad(-48), 0]}
          width={2.2}
        />
        <rectAreaLight
          color="#d6e7e5"
          height={1.6}
          intensity={2}
          position={[1.4, 4.2, 2.8]}
          rotation={[THREE.MathUtils.degToRad(-52), 0, 0]}
          width={5}
        />
        <GlassDistrictCube reducedMotion={reducedMotion} resting={resting} />
        <mesh position={[0, -1.15, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[14, 14]} />
          <shadowMaterial color="#000000" opacity={0.2} transparent />
        </mesh>
      </Canvas>
      <span className="voxel-cube-hint">
        {resting ? "CLICK / RISE" : "CLICK / SETTLE"}
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
    scene.environmentIntensity = 0.45;

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
  resting,
}: {
  reducedMotion: boolean;
  resting: boolean;
}) {
  const lift = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const physics = useRef({
    progress: 0,
    progressVelocity: 0,
    targetYaw: THREE.MathUtils.degToRad(-28),
    tiltX: THREE.MathUtils.degToRad(-13),
    tiltVelocityX: 0,
    tiltZ: THREE.MathUtils.degToRad(-7),
    tiltVelocityZ: 0,
    yaw: THREE.MathUtils.degToRad(28),
    yawVelocity: THREE.MathUtils.degToRad(22.5),
  });
  const bodyGeometry = useMemo(
    () => new RoundedBoxGeometry(1.62, 1.62, 1.62, 6, 0.075),
    [],
  );
  const rimGeometry = useMemo(
    () => new RoundedBoxGeometry(1.28, 1.28, 0.07, 5, 0.052),
    [],
  );
  const panelGeometry = useMemo(
    () => new RoundedBoxGeometry(1.12, 1.12, 0.055, 5, 0.045),
    [],
  );

  useEffect(() => {
    if (!resting) return;
    const state = physics.current;
    const displayOffset = THREE.MathUtils.degToRad(-28);
    const fullTurn = Math.PI * 2;
    state.targetYaw =
      Math.round((state.yaw - displayOffset) / fullTurn) * fullTurn + displayOffset;
  }, [resting]);

  useEffect(
    () => () => {
      bodyGeometry.dispose();
      panelGeometry.dispose();
      rimGeometry.dispose();
    },
    [bodyGeometry, panelGeometry, rimGeometry],
  );

  useFrame((frameState, frameDelta) => {
    const liftGroup = lift.current;
    const spinGroup = spin.current;
    const tiltGroup = tilt.current;
    if (!liftGroup || !spinGroup || !tiltGroup) return;

    const delta = Math.min(1 / 30, frameDelta);
    const state = physics.current;
    const targetProgress = resting ? 1 : 0;
    const targetTiltX = resting ? 0 : THREE.MathUtils.degToRad(-13);
    const targetTiltZ = resting ? 0 : THREE.MathUtils.degToRad(-7);

    if (reducedMotion) {
      state.progress = targetProgress;
      state.progressVelocity = 0;
      state.tiltX = targetTiltX;
      state.tiltVelocityX = 0;
      state.tiltZ = targetTiltZ;
      state.tiltVelocityZ = 0;
      if (resting) {
        state.yaw = state.targetYaw;
        state.yawVelocity = 0;
      }
    } else {
      [state.progress, state.progressVelocity] = stepDampedSpring(
        state.progress,
        state.progressVelocity,
        targetProgress,
        55,
        10.5,
        delta,
      );
      [state.tiltX, state.tiltVelocityX] = stepDampedSpring(
        state.tiltX,
        state.tiltVelocityX,
        targetTiltX,
        48,
        10.5,
        delta,
      );
      [state.tiltZ, state.tiltVelocityZ] = stepDampedSpring(
        state.tiltZ,
        state.tiltVelocityZ,
        targetTiltZ,
        48,
        10.5,
        delta,
      );

      if (resting) {
        [state.yaw, state.yawVelocity] = stepDampedSpring(
          state.yaw,
          state.yawVelocity,
          state.targetYaw,
          38,
          10.5,
          delta,
        );
      } else if (state.progress < 0.14) {
        const idleSpeed = THREE.MathUtils.degToRad(22.5);
        state.yawVelocity +=
          (idleSpeed - state.yawVelocity) * Math.min(1, delta * 4.8);
        state.yaw += state.yawVelocity * delta;
      } else {
        state.yaw += state.yawVelocity * delta;
        state.yawVelocity *= Math.exp(-delta * 5.4);
      }
    }

    const visibleProgress = THREE.MathUtils.clamp(state.progress, 0, 1);
    const compression = THREE.MathUtils.clamp(state.progress - 1, 0, 0.075);
    const idleBob =
      (1 - visibleProgress) * Math.sin(frameState.clock.elapsedTime * 1.08) * 0.045;

    liftGroup.position.y = THREE.MathUtils.lerp(0.5, -0.34, visibleProgress) + idleBob;
    liftGroup.scale.set(
      1 + compression * 0.52,
      1 - compression * 1.45,
      1 + compression * 0.52,
    );
    spinGroup.rotation.y = state.yaw;
    tiltGroup.rotation.x = state.tiltX;
    tiltGroup.rotation.z = state.tiltZ;
  });

  return (
    <group position={[0, 0.5, 0]} ref={lift}>
      <group ref={spin} rotation={[0, THREE.MathUtils.degToRad(28), 0]}>
        <group
          ref={tilt}
          rotation={[
            THREE.MathUtils.degToRad(-13),
            0,
            THREE.MathUtils.degToRad(-7),
          ]}
        >
          <mesh castShadow receiveShadow>
            <primitive attach="geometry" object={bodyGeometry} />
            <meshPhysicalMaterial
              attenuationColor="#174b39"
              attenuationDistance={0.82}
              clearcoat={1}
              clearcoatRoughness={0.07}
              color="#386b5d"
              emissive="#03100c"
              emissiveIntensity={0.03}
              envMapIntensity={1.25}
              iridescence={0.12}
              iridescenceIOR={1.2}
              iridescenceThicknessRange={[120, 360]}
              ior={1.46}
              metalness={0}
              opacity={1}
              roughness={0.09}
              specularIntensity={1}
              thickness={1.4}
              transmission={0.5}
              transparent
            />
          </mesh>

          <mesh castShadow position={[0, 0, 0.835]}>
            <primitive attach="geometry" object={rimGeometry} />
            <meshPhysicalMaterial
              clearcoat={1}
              clearcoatRoughness={0.08}
              color="#254d42"
              emissive="#041611"
              emissiveIntensity={0.05}
              envMapIntensity={1.35}
              metalness={0.12}
              roughness={0.12}
              transmission={0.12}
            />
          </mesh>

          <mesh castShadow position={[0, 0, 0.842]}>
            <primitive attach="geometry" object={panelGeometry} />
            <meshPhysicalMaterial
              attenuationColor="#0b2c20"
              attenuationDistance={0.75}
              clearcoat={1}
              clearcoatRoughness={0.09}
              color="#102f24"
              emissive="#010705"
              emissiveIntensity={0.02}
              envMapIntensity={1.2}
              ior={1.4}
              metalness={0.08}
              opacity={1}
              roughness={0.15}
              thickness={0.62}
              transmission={0.2}
              transparent
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function stepDampedSpring(
  value: number,
  velocity: number,
  target: number,
  stiffness: number,
  damping: number,
  delta: number,
): [number, number] {
  const acceleration = (target - value) * stiffness - velocity * damping;
  const nextVelocity = velocity + acceleration * delta;
  const nextValue = value + nextVelocity * delta;

  if (Math.abs(target - nextValue) < 0.0001 && Math.abs(nextVelocity) < 0.001) {
    return [target, 0];
  }

  return [nextValue, nextVelocity];
}
