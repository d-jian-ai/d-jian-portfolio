"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type SceneVariant = "forest" | "mist" | "light" | "rain";

const palettes: Record<
  SceneVariant,
  { fog: string; ground: string; stem: string; glow: string; particle: string }
> = {
  forest: {
    fog: "#07110d",
    ground: "#08130f",
    stem: "#173329",
    glow: "#b5d27f",
    particle: "#e6efc9",
  },
  mist: {
    fog: "#101918",
    ground: "#0e1816",
    stem: "#344946",
    glow: "#d4dfd9",
    particle: "#f2f6f3",
  },
  light: {
    fog: "#17120b",
    ground: "#160f08",
    stem: "#463625",
    glow: "#f4bb68",
    particle: "#ffe6ad",
  },
  rain: {
    fog: "#091218",
    ground: "#071116",
    stem: "#183440",
    glow: "#7ec3d8",
    particle: "#cceaf1",
  },
};

export function ImmersiveScene({
  variant = "forest",
  interactive = true,
}: {
  variant?: SceneVariant;
  interactive?: boolean;
}) {
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
      camera={{ fov: 46, near: 0.1, far: 80, position: [0, 1.2, 8.5] }}
      dpr={[1, 1.6]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: interactive ? "auto" : "none" }}
    >
      <SceneContent
        interactive={interactive && !reducedMotion}
        reducedMotion={reducedMotion}
        variant={variant}
      />
    </Canvas>
  );
}

function SceneContent({
  variant,
  interactive,
  reducedMotion,
}: {
  variant: SceneVariant;
  interactive: boolean;
  reducedMotion: boolean;
}) {
  const palette = palettes[variant];
  const root = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    if (!root.current || reducedMotion) return;
    const pointerX = interactive ? state.pointer.x : 0;
    const pointerY = interactive ? state.pointer.y : 0;
    const scroll = Math.min(
      1,
      typeof window === "undefined" ? 0 : window.scrollY / window.innerHeight,
    );

    root.current.rotation.y = THREE.MathUtils.lerp(
      root.current.rotation.y,
      pointerX * 0.11 + scroll * 0.2,
      0.035,
    );
    root.current.rotation.x = THREE.MathUtils.lerp(
      root.current.rotation.x,
      pointerY * -0.025,
      0.035,
    );
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointerX * 0.7,
      0.025,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.2 + pointerY * 0.28 - scroll * 0.5,
      0.025,
    );
    state.camera.lookAt(0, 0.35, 0);

    if (light.current) {
      light.current.position.x = THREE.MathUtils.lerp(
        light.current.position.x,
        pointerX * 4,
        Math.min(1, delta * 2.5),
      );
      light.current.position.y = THREE.MathUtils.lerp(
        light.current.position.y,
        2 + pointerY * 2,
        Math.min(1, delta * 2.5),
      );
    }
  });

  return (
    <>
      <fog attach="fog" args={[palette.fog, 4.2, 20]} />
      <ambientLight intensity={0.55} color="#b9d1c4" />
      <directionalLight color="#d9e5c8" intensity={1.2} position={[-4, 7, 4]} />
      <pointLight
        ref={light}
        color={palette.glow}
        intensity={35}
        position={[0, 2, 3]}
        distance={12}
      />
      <group ref={root}>
        <DigitalForest palette={palette} reducedMotion={reducedMotion} />
        <SignalCore color={palette.glow} reducedMotion={reducedMotion} />
        <ParticleVeil
          color={palette.particle}
          rain={variant === "rain"}
          reducedMotion={reducedMotion}
        />
        <mesh position={[0, -2.25, -1.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[15, 64]} />
          <meshStandardMaterial
            color={palette.ground}
            metalness={0.1}
            roughness={0.88}
          />
        </mesh>
      </group>
    </>
  );
}

function DigitalForest({
  palette,
  reducedMotion,
}: {
  palette: (typeof palettes)[SceneVariant];
  reducedMotion: boolean;
}) {
  const forest = useRef<THREE.Group>(null);
  const stems = useMemo(
    () =>
      Array.from({ length: 44 }, (_, index) => {
        const side = index % 2 === 0 ? -1 : 1;
        const lane = 1.8 + ((index * 1.71) % 6.4);
        const depth = -1 - ((index * 2.31) % 13);
        const height = 2.4 + ((index * 0.83) % 5.8);
        return {
          x: side * lane,
          z: depth,
          height,
          width: 0.055 + (index % 5) * 0.018,
          lean: ((index % 7) - 3) * 0.018,
          phase: index * 0.47,
        };
      }),
    [],
  );

  useFrame((state) => {
    if (!forest.current || reducedMotion) return;
    forest.current.position.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.04;
  });

  return (
    <group ref={forest} position={[0, -1.5, 0]}>
      {stems.map((stem, index) => (
        <group
          key={`${stem.x}-${stem.z}`}
          position={[stem.x, stem.height / 2, stem.z]}
          rotation={[0, stem.phase, stem.lean]}
        >
          <mesh castShadow>
            <cylinderGeometry
              args={[stem.width * 0.55, stem.width, stem.height, 5]}
            />
            <meshStandardMaterial
              color={palette.stem}
              roughness={0.74}
              metalness={0.18}
            />
          </mesh>
          <mesh position={[0, stem.height * 0.2, 0]} rotation={[0.3, 0, 0.52]}>
            <boxGeometry args={[stem.height * 0.18, stem.width * 0.55, stem.width]} />
            <meshStandardMaterial
              color={palette.stem}
              roughness={0.8}
              metalness={0.12}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function SignalCore({
  color,
  reducedMotion,
}: {
  color: string;
  reducedMotion: boolean;
}) {
  const core = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!core.current || reducedMotion) return;
    core.current.rotation.y += delta * 0.11;
    core.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.24) * 0.09;
    core.current.position.y = 0.35 + Math.sin(state.clock.elapsedTime * 0.52) * 0.12;
  });

  return (
    <group ref={core} position={[0, 0.35, -1.2]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.32, 0.018, 8, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.58} />
      </mesh>
      <mesh rotation={[Math.PI / 2.8, Math.PI / 5, 0]}>
        <torusGeometry args={[0.95, 0.01, 8, 128]} />
        <meshBasicMaterial color="#f1f4eb" transparent opacity={0.38} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.26, 1]} />
        <meshStandardMaterial
          color="#dcebc0"
          emissive={color}
          emissiveIntensity={1.8}
          metalness={0.35}
          roughness={0.3}
          wireframe
        />
      </mesh>
    </group>
  );
}

function ParticleVeil({
  color,
  rain,
  reducedMotion,
}: {
  color: string;
  rain: boolean;
  reducedMotion: boolean;
}) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(360 * 3);
    for (let index = 0; index < 360; index += 1) {
      values[index * 3] = ((index * 73) % 100) / 6 - 8.3;
      values[index * 3 + 1] = ((index * 47) % 100) / 10 - 3.5;
      values[index * 3 + 2] = -((index * 61) % 180) / 10 + 4;
    }
    return values;
  }, []);

  useFrame((state, delta) => {
    if (!points.current || reducedMotion) return;
    points.current.rotation.y += delta * 0.008;
    points.current.position.y =
      Math.sin(state.clock.elapsedTime * (rain ? 1.2 : 0.18)) *
      (rain ? 0.2 : 0.08);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        opacity={rain ? 0.52 : 0.38}
        size={rain ? 0.035 : 0.026}
        sizeAttenuation
        transparent
      />
    </points>
  );
}
