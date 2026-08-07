"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import * as THREE from "three";
import {
  createVeilContourGeometry,
  createVeilPointGeometry,
} from "@/components/home/hero-veil-geometry";
import {
  veilContourFragmentShader,
  veilContourVertexShader,
  veilFragmentShader,
  veilPointFragmentShader,
  veilPointVertexShader,
  veilVertexShader,
} from "@/components/home/hero-veil-shaders";
import {
  HOME_SCENE_CONFIG,
  type HomeScenePalette,
} from "@/config/home";
import { SITE_CONFIG } from "@/config/site";
import { useTheme } from "@/providers/theme-provider";

export function HeroVeilField() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointer = useRef(new THREE.Vector2());
  const scrollProgress = useRef(0);
  const palette = HOME_SCENE_CONFIG.palettes[theme];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const updatePointer = (event: PointerEvent) => {
      pointer.current.set(
        (event.clientX / Math.max(1, window.innerWidth)) * 2 - 1,
        -(event.clientY / Math.max(1, window.innerHeight)) * 2 + 1,
      );
    };
    const updateScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = THREE.MathUtils.clamp(
        window.scrollY / Math.max(1, available),
        0,
        1,
      );
    };

    updateMotion();
    updateScroll();
    motionQuery.addEventListener("change", updateMotion);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <Canvas
      camera={HOME_SCENE_CONFIG.camera}
      dpr={[1, HOME_SCENE_CONFIG.performance.maxDpr]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <color key={theme} attach="background" args={[palette.background]} />
      <VeilScene
        palette={palette}
        pointer={pointer}
        reducedMotion={reducedMotion}
        scrollProgress={scrollProgress}
      />
    </Canvas>
  );
}

function VeilScene({
  palette,
  pointer,
  reducedMotion,
  scrollProgress,
}: {
  palette: HomeScenePalette;
  pointer: RefObject<THREE.Vector2>;
  reducedMotion: boolean;
  scrollProgress: RefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const compact = useThree(
    (state) => state.size.width <= HOME_SCENE_CONFIG.breakpoint,
  );
  const smoothPointer = useMemo(() => new THREE.Vector2(), []);

  useFrame(() => {
    if (!group.current) return;
    smoothPointer.lerp(
      reducedMotion ? new THREE.Vector2() : pointer.current,
      reducedMotion ? 1 : HOME_SCENE_CONFIG.motion.pointerLerp,
    );
    const scroll = scrollProgress.current;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.24 + smoothPointer.y * 0.045 + scroll * 0.14,
      0.035,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      0.13 + smoothPointer.x * 0.07 - scroll * 0.1,
      0.035,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -0.08 + scroll * 0.16,
      0.025,
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      compact ? 0.46 : 0.7 + smoothPointer.x * 0.16,
      0.03,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (compact ? 0.52 : 0.28) + scroll * HOME_SCENE_CONFIG.motion.scrollDrift,
      0.03,
    );
  });

  return (
    <>
      <SceneReadySignal />
      <group ref={group} scale={compact ? 1.16 : 1.06}>
        <VeilMembrane
          palette={palette}
          pointer={smoothPointer}
          reducedMotion={reducedMotion}
          scrollProgress={scrollProgress}
        />
        <VeilContours
          palette={palette}
          pointer={smoothPointer}
          reducedMotion={reducedMotion}
          scrollProgress={scrollProgress}
        />
        <VeilParticles
          compact={compact}
          palette={palette}
          pointer={smoothPointer}
          reducedMotion={reducedMotion}
          scrollProgress={scrollProgress}
        />
      </group>
    </>
  );
}

function SceneReadySignal() {
  const dispatched = useRef(false);

  useFrame(() => {
    if (dispatched.current) return;
    dispatched.current = true;
    document.documentElement.dataset.visualReady = "true";
    window.dispatchEvent(new Event(SITE_CONFIG.events.visualReady));
  });

  return null;
}

function useVeilUniforms({
  palette,
  pointer,
  reducedMotion,
  scrollProgress,
}: {
  palette: HomeScenePalette;
  pointer: THREE.Vector2;
  reducedMotion: boolean;
  scrollProgress: RefObject<number>;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uPointer: { value: pointer },
      uScroll: { value: 0 },
      uTime: { value: 0 },
    }),
    [pointer],
  );

  useFrame((state) => {
    if (!material.current) return;
    uniforms.uTime.value = reducedMotion
      ? 0
      : state.clock.elapsedTime * HOME_SCENE_CONFIG.motion.speed;
    uniforms.uScroll.value = scrollProgress.current;
  });

  return { material, uniforms, palette };
}

function VeilMembrane({
  palette,
  pointer,
  reducedMotion,
  scrollProgress,
}: SceneLayerProps) {
  const { material, uniforms } = useVeilUniforms({
    palette,
    pointer,
    reducedMotion,
    scrollProgress,
  });
  const membraneUniforms = useMemo(
    () => ({
      ...uniforms,
      uAccent: { value: new THREE.Color(palette.accent) },
      uColor: { value: new THREE.Color(palette.membrane) },
      uOpacity: { value: 0.88 },
      uShadow: { value: new THREE.Color(palette.shadow) },
    }),
    [palette, uniforms],
  );

  return (
    <mesh frustumCulled={false} position={[0, 0, -0.34]}>
      <planeGeometry
        args={[
          HOME_SCENE_CONFIG.surface.width,
          HOME_SCENE_CONFIG.surface.height,
          ...HOME_SCENE_CONFIG.surface.segments,
        ]}
      />
      <shaderMaterial
        ref={material}
        depthWrite={false}
        fragmentShader={veilFragmentShader}
        side={THREE.DoubleSide}
        transparent
        uniforms={membraneUniforms}
        vertexShader={veilVertexShader}
      />
    </mesh>
  );
}

function VeilParticles({
  compact,
  palette,
  pointer,
  reducedMotion,
  scrollProgress,
}: SceneLayerProps & { compact: boolean }) {
  const geometry = useMemo(
    () =>
      createVeilPointGeometry(
        compact
          ? HOME_SCENE_CONFIG.performance.particles.mobile
          : HOME_SCENE_CONFIG.performance.particles.desktop,
        HOME_SCENE_CONFIG.surface.width,
        HOME_SCENE_CONFIG.surface.height,
      ),
    [compact],
  );
  const { material, uniforms } = useVeilUniforms({
    palette,
    pointer,
    reducedMotion,
    scrollProgress,
  });
  const particleUniforms = useMemo(
    () => ({
      ...uniforms,
      uColor: { value: new THREE.Color(palette.particle) },
      uOpacity: { value: compact ? 0.52 : 0.62 },
      uPointSize: { value: compact ? 1.18 : 1.08 },
    }),
    [compact, palette, uniforms],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <points frustumCulled={false} geometry={geometry}>
      <shaderMaterial
        ref={material}
        blending={THREE.NormalBlending}
        depthWrite={false}
        fragmentShader={veilPointFragmentShader}
        transparent
        uniforms={particleUniforms}
        vertexShader={veilPointVertexShader}
      />
    </points>
  );
}

function VeilContours({
  palette,
  pointer,
  reducedMotion,
  scrollProgress,
}: SceneLayerProps) {
  const geometry = useMemo(
    () =>
      createVeilContourGeometry(
        HOME_SCENE_CONFIG.surface.width,
        HOME_SCENE_CONFIG.surface.height,
      ),
    [],
  );
  const { material, uniforms } = useVeilUniforms({
    palette,
    pointer,
    reducedMotion,
    scrollProgress,
  });
  const contourUniforms = useMemo(
    () => ({
      ...uniforms,
      uColor: { value: new THREE.Color(palette.contour) },
      uOpacity: { value: 0.065 },
    }),
    [palette, uniforms],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineSegments frustumCulled={false} geometry={geometry}>
      <shaderMaterial
        ref={material}
        depthWrite={false}
        fragmentShader={veilContourFragmentShader}
        transparent
        uniforms={contourUniforms}
        vertexShader={veilContourVertexShader}
      />
    </lineSegments>
  );
}

type SceneLayerProps = {
  palette: HomeScenePalette;
  pointer: THREE.Vector2;
  reducedMotion: boolean;
  scrollProgress: RefObject<number>;
};
