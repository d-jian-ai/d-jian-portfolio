"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useTheme } from "@/providers/theme-provider";
import type { ColorTheme } from "@/types/theme";

const MODEL_URL = "/models/camera_01/Camera_01_1k.gltf";

type GalleryPalette = {
  accent: string;
  background: string;
  floor: string;
  key: string;
  rim: string;
};

const GALLERY_PALETTES: Record<ColorTheme, GalleryPalette> = {
  dark: {
    accent: "#e2866a",
    background: "#222824",
    floor: "#2b332e",
    key: "#fff8e9",
    rim: "#8dbcc0",
  },
  light: {
    accent: "#c96f57",
    background: "#eceee9",
    floor: "#d7dbd4",
    key: "#fffaf0",
    rim: "#74a3aa",
  },
};

export function HeroGalleryScene() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const palette = GALLERY_PALETTES[theme];

  return (
    <Canvas
      camera={{ far: 40, fov: 37, near: 0.1, position: [0, 0.35, 6.2] }}
      dpr={[1, 1.55]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      shadows
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = theme === "dark" ? 0.94 : 0.9;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <color key={theme} attach="background" args={[palette.background]} />
      <Suspense fallback={null}>
        <StudioEnvironment />
        <StudioLights palette={palette} />
        <InteractiveArtifact palette={palette} reducedMotion={reducedMotion} />
        <StudioFloor palette={palette} />
      </Suspense>
    </Canvas>
  );
}

function StudioEnvironment() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
    scene.environment = environment;

    return () => {
      scene.environment = null;
      environment.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  return null;
}

function StudioLights({ palette }: { palette: GalleryPalette }) {
  return (
    <>
      <hemisphereLight
        color={palette.key}
        groundColor={palette.floor}
        intensity={1.35}
      />
      <directionalLight
        castShadow
        color={palette.key}
        intensity={2.4}
        position={[-3.8, 4.8, 4.8]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.018}
        shadow-radius={4}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <rectAreaLight
        color={palette.rim}
        height={4}
        intensity={4.1}
        position={[4.4, 2.8, 2.8]}
        rotation={[0, -0.8, 0]}
        width={2.2}
      />
      <pointLight
        color={palette.accent}
        decay={1.6}
        distance={9}
        intensity={7.5}
        position={[1.7, -0.2, 2.8]}
      />
    </>
  );
}

function InteractiveArtifact({
  palette,
  reducedMotion,
}: {
  palette: GalleryPalette;
  reducedMotion: boolean;
}) {
  const gltf = useLoader(GLTFLoader, MODEL_URL);
  const group = useRef<THREE.Group>(null);
  const compact = useThree((state) => state.size.width <= 820);
  const model = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.castShadow = true;
      object.receiveShadow = true;

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      materials.forEach((material) => {
        if (!(material instanceof THREE.MeshStandardMaterial)) return;
        material.envMapIntensity = 1.15;
        material.needsUpdate = true;
        if (material.map) material.map.anisotropy = 8;
        if (material.normalMap) material.normalMap.anisotropy = 8;
        if (material.metalnessMap) material.metalnessMap.anisotropy = 8;
        if (material.roughnessMap) material.roughnessMap.anisotropy = 8;
      });
    });
    return clone;
  }, [gltf.scene]);

  useFrame((state, delta) => {
    if (!group.current) return;

    const elapsed = state.clock.elapsedTime;
    const pointerX = reducedMotion ? 0 : state.pointer.x;
    const pointerY = reducedMotion ? 0 : state.pointer.y;
    const response = 1 - Math.exp(-delta * 3.4);
    const baseX = compact ? 0 : 1.72;
    const baseY = compact ? 0.82 : 0.02;
    const baseScale = compact ? 8.2 : 11.2;

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      baseX + pointerX * (compact ? 0.06 : 0.18),
      response,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      baseY + (reducedMotion ? 0 : Math.sin(elapsed * 0.48) * 0.028),
      response,
    );
    group.current.scale.setScalar(
      THREE.MathUtils.lerp(group.current.scale.x, baseScale, response),
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.06 + pointerY * -0.055,
      response,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -0.16 + pointerX * 0.15 + (reducedMotion ? 0 : Math.sin(elapsed * 0.22) * 0.045),
      response,
    );

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointerX * 0.14,
      response * 0.42,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      0.35 + pointerY * 0.06,
      response * 0.42,
    );
    state.camera.lookAt(compact ? 0 : 0.38, compact ? 0.62 : 0.2, 0);
  });

  return (
    <group
      ref={group}
      position={[compact ? 0 : 1.72, compact ? 0.82 : 0.02, 0]}
      rotation={[-0.06, -0.16, 0.025]}
      scale={compact ? 8.2 : 11.2}
    >
      <primitive object={model} />
      <pointLight
        color={palette.accent}
        decay={2}
        distance={3.2}
        intensity={2.1}
        position={[0.12, 0.08, 0.24]}
      />
    </group>
  );
}

function StudioFloor({ palette }: { palette: GalleryPalette }) {
  const compact = useThree((state) => state.size.width <= 820);

  return (
    <mesh
      receiveShadow
      position={[0, compact ? 0.32 : -0.08, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[30, 30]} />
      <shadowMaterial
        color={palette.background}
        opacity={0.13}
        transparent
      />
    </mesh>
  );
}
