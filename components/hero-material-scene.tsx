"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/providers/theme-provider";
import type { ColorTheme } from "@/types/theme";

type HeroPalette = {
  ambient: string;
  background: string;
  grid: string;
  keyLight: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

const HERO_PALETTES: Record<ColorTheme, HeroPalette> = {
  dark: {
    ambient: "#b7c9c0",
    background: "#1b2420",
    grid: "#91a49b",
    keyLight: "#f2f5eb",
    primary: "#cbd5cf",
    secondary: "#76b8c3",
    tertiary: "#d17b62",
  },
  light: {
    ambient: "#d7e2dc",
    background: "#e6ebe7",
    grid: "#405048",
    keyLight: "#fffdf4",
    primary: "#eef2ee",
    secondary: "#679da6",
    tertiary: "#c96d57",
  },
};

export function HeroMaterialScene() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <Canvas
      camera={{ far: 60, fov: 43, near: 0.1, position: [0, 0.25, 9.2] }}
      dpr={[1, 1.6]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.18;
      }}
    >
      <color attach="background" args={[HERO_PALETTES[theme].background]} />
      <MaterialSculpture
        palette={HERO_PALETTES[theme]}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

function MaterialSculpture({
  palette,
  reducedMotion,
}: {
  palette: HeroPalette;
  reducedMotion: boolean;
}) {
  const sculpture = useRef<THREE.Group>(null);
  const primaryRibbon = useRef<THREE.Mesh>(null);
  const secondaryRibbon = useRef<THREE.Mesh>(null);
  const tertiaryRibbon = useRef<THREE.Mesh>(null);
  const fragments = useRef<THREE.Group>(null);
  const pointerLight = useRef<THREE.PointLight>(null);
  const compact = useThree((state) => state.size.width <= 820);
  const primaryGeometry = useMemo(
    () => createRibbonGeometry({ phase: 0.18, segments: 300, width: 0.36 }),
    [],
  );
  const secondaryGeometry = useMemo(
    () => createRibbonGeometry({ phase: 2.1, segments: 260, width: 0.15 }),
    [],
  );
  const tertiaryGeometry = useMemo(
    () => createRibbonGeometry({ phase: 4.25, segments: 240, width: 0.09 }),
    [],
  );
  const fragmentLayout = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        position: [
          Math.cos(index * 1.71) * (2.7 + (index % 3) * 0.24),
          Math.sin(index * 1.17) * 1.65,
          -0.7 + (index % 4) * 0.48,
        ] as [number, number, number],
        rotation: [index * 0.31, index * 0.73, index * 0.19] as [
          number,
          number,
          number,
        ],
        scale: [
          0.1 + (index % 3) * 0.035,
          0.32 + (index % 4) * 0.08,
          0.055,
        ] as [number, number, number],
      })),
    [],
  );

  useFrame((state, delta) => {
    if (!sculpture.current) return;

    const elapsed = state.clock.elapsedTime;
    const pointerX = reducedMotion ? 0 : state.pointer.x;
    const pointerY = reducedMotion ? 0 : state.pointer.y;
    const scroll = reducedMotion
      ? 0
      : Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
    const response = 1 - Math.exp(-delta * 3.1);
    const baseX = compact ? 0 : 2.15;
    const baseY = compact ? 1.55 : 0.42;
    const baseScale = compact ? 0.72 : 1.04;

    sculpture.current.position.x = THREE.MathUtils.lerp(
      sculpture.current.position.x,
      baseX + pointerX * (compact ? 0.12 : 0.34),
      response,
    );
    sculpture.current.position.y = THREE.MathUtils.lerp(
      sculpture.current.position.y,
      baseY + pointerY * 0.18 - scroll * 0.38,
      response,
    );
    sculpture.current.scale.setScalar(
      THREE.MathUtils.lerp(sculpture.current.scale.x, baseScale, response),
    );
    sculpture.current.rotation.x = THREE.MathUtils.lerp(
      sculpture.current.rotation.x,
      pointerY * -0.16 + Math.sin(elapsed * 0.19) * 0.035,
      response,
    );
    sculpture.current.rotation.y = THREE.MathUtils.lerp(
      sculpture.current.rotation.y,
      pointerX * 0.28 + Math.sin(elapsed * 0.13) * 0.08,
      response,
    );

    if (!reducedMotion) {
      if (primaryRibbon.current) primaryRibbon.current.rotation.z = elapsed * 0.035;
      if (secondaryRibbon.current) {
        secondaryRibbon.current.rotation.x = elapsed * -0.028;
        secondaryRibbon.current.rotation.z = Math.sin(elapsed * 0.22) * 0.12;
      }
      if (tertiaryRibbon.current) {
        tertiaryRibbon.current.rotation.y = elapsed * 0.042;
      }
      if (fragments.current) {
        fragments.current.rotation.z = Math.sin(elapsed * 0.16) * 0.08;
        fragments.current.rotation.y = elapsed * -0.018;
      }
    }

    if (pointerLight.current) {
      pointerLight.current.position.x = THREE.MathUtils.lerp(
        pointerLight.current.position.x,
        pointerX * 4.8 + 1.4,
        response,
      );
      pointerLight.current.position.y = THREE.MathUtils.lerp(
        pointerLight.current.position.y,
        pointerY * 3.2 + 1.2,
        response,
      );
    }

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointerX * 0.3,
      response * 0.45,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      0.25 + pointerY * 0.15,
      response * 0.45,
    );
    state.camera.lookAt(0, 0.2, 0);
  });

  return (
    <>
      <hemisphereLight
        color={palette.ambient}
        groundColor={palette.background}
        intensity={2.4}
      />
      <directionalLight
        color={palette.keyLight}
        intensity={4.8}
        position={[-4, 6, 7]}
      />
      <directionalLight
        color={palette.secondary}
        intensity={2.6}
        position={[6, -2, 4]}
      />
      <pointLight
        ref={pointerLight}
        color={palette.tertiary}
        decay={1.5}
        distance={14}
        intensity={48}
        position={[1.4, 1.2, 4]}
      />

      <SignalGrid color={palette.grid} />

      <group
        ref={sculpture}
        position={[compact ? 0 : 2.15, compact ? 1.55 : 0.42, -0.35]}
        scale={compact ? 0.72 : 1.04}
      >
        <mesh ref={primaryRibbon} geometry={primaryGeometry}>
          <meshPhysicalMaterial
            clearcoat={1}
            clearcoatRoughness={0.08}
            color={palette.primary}
            iridescence={0.72}
            iridescenceIOR={1.38}
            metalness={0.18}
            roughness={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh
          ref={secondaryRibbon}
          geometry={secondaryGeometry}
          rotation={[0.65, -0.38, 0.24]}
          scale={1.08}
        >
          <meshPhysicalMaterial
            clearcoat={1}
            clearcoatRoughness={0.12}
            color={palette.secondary}
            metalness={0.5}
            roughness={0.17}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh
          ref={tertiaryRibbon}
          geometry={tertiaryGeometry}
          rotation={[-0.28, 0.72, -0.36]}
          scale={1.18}
        >
          <meshPhysicalMaterial
            clearcoat={0.9}
            color={palette.tertiary}
            metalness={0.34}
            roughness={0.22}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh position={[0.1, 0.08, 0.15]} rotation={[0.4, 0.7, 0.2]}>
          <octahedronGeometry args={[0.38, 2]} />
          <meshPhysicalMaterial
            clearcoat={1}
            color={palette.primary}
            iridescence={0.9}
            metalness={0.3}
            opacity={0.86}
            roughness={0.1}
            transparent
          />
        </mesh>

        <group ref={fragments}>
          {fragmentLayout.map((fragment, index) => (
            <mesh
              key={index}
              position={fragment.position}
              rotation={fragment.rotation}
              scale={fragment.scale}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshPhysicalMaterial
                clearcoat={0.85}
                color={index % 2 === 0 ? palette.secondary : palette.tertiary}
                metalness={0.42}
                roughness={0.24}
              />
            </mesh>
          ))}
        </group>
      </group>
    </>
  );
}

function SignalGrid({ color }: { color: string }) {
  const positions = useMemo(() => {
    const lines: number[] = [];
    for (let step = -8; step <= 8; step += 1) {
      lines.push(step, -5, -3.4, step, 5, -3.4);
    }
    for (let step = -5; step <= 5; step += 1) {
      lines.push(-8, step, -3.4, 8, step, -3.4);
    }
    return new Float32Array(lines);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        color={color}
        depthWrite={false}
        opacity={0.13}
        transparent
      />
    </lineSegments>
  );
}

function createRibbonGeometry({
  phase,
  segments,
  width,
}: {
  phase: number;
  segments: number;
  width: number;
}) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array((segments + 1) * 2 * 3);
  const uvs = new Float32Array((segments + 1) * 2 * 2);
  const indices: number[] = [];
  const center = new THREE.Vector3();
  const nextCenter = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const side = new THREE.Vector3();
  const up = new THREE.Vector3();

  function setCenter(target: THREE.Vector3, t: number) {
    target.set(
      Math.cos(t + phase) * 2.15 + Math.sin(t * 3 + phase) * 0.28,
      Math.sin(t * 2 + phase) * 0.88 + Math.cos(t * 3 - phase) * 0.16,
      Math.sin(t + phase) * 1.34 + Math.cos(t * 4 + phase) * 0.22,
    );
  }

  for (let index = 0; index <= segments; index += 1) {
    const progress = index / segments;
    const t = progress * Math.PI * 2;
    setCenter(center, t);
    setCenter(nextCenter, t + 0.01);
    tangent.subVectors(nextCenter, center).normalize();
    up.set(
      Math.cos(t * 2 + phase) * 0.24,
      1,
      Math.sin(t * 2 + phase) * 0.24,
    );
    side.crossVectors(tangent, up).normalize();
    side.applyAxisAngle(tangent, Math.sin(t * 3 + phase) * 0.58);

    const ribbonWidth = width * (0.78 + Math.sin(t * 2 - phase) * 0.22);
    const vertexOffset = index * 6;
    positions[vertexOffset] = center.x + side.x * ribbonWidth;
    positions[vertexOffset + 1] = center.y + side.y * ribbonWidth;
    positions[vertexOffset + 2] = center.z + side.z * ribbonWidth;
    positions[vertexOffset + 3] = center.x - side.x * ribbonWidth;
    positions[vertexOffset + 4] = center.y - side.y * ribbonWidth;
    positions[vertexOffset + 5] = center.z - side.z * ribbonWidth;

    const uvOffset = index * 4;
    uvs[uvOffset] = progress;
    uvs[uvOffset + 1] = 0;
    uvs[uvOffset + 2] = progress;
    uvs[uvOffset + 3] = 1;

    if (index < segments) {
      const vertex = index * 2;
      indices.push(vertex, vertex + 1, vertex + 2);
      indices.push(vertex + 1, vertex + 3, vertex + 2);
    }
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}
