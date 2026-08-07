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
  createDustGeometry,
  createFilamentGeometry,
} from "@/components/home/hero-filament-geometry";
import {
  dustFragmentShader,
  dustVertexShader,
  filamentFragmentShader,
  filamentVertexShader,
  membraneFragmentShader,
  membraneVertexShader,
} from "@/components/home/hero-filament-shaders";
import {
  HERO_FILAMENT_CONFIG,
  type HeroFilamentPalette,
} from "@/config/home";
import { useTheme } from "@/providers/theme-provider";

type FilamentLayerConfig = (typeof HERO_FILAMENT_CONFIG.layers)[number];

export function HeroFilamentField() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);
  const scrollProgress = useRef(0);
  const palette = HERO_FILAMENT_CONFIG.palettes[theme];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const updateScroll = () => {
      scrollProgress.current = THREE.MathUtils.clamp(
        window.scrollY / Math.max(1, window.innerHeight),
        0,
        1,
      );
    };

    updateMotion();
    updateScroll();
    motionQuery.addEventListener("change", updateMotion);
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <Canvas
      camera={HERO_FILAMENT_CONFIG.camera}
      dpr={[1, HERO_FILAMENT_CONFIG.performance.maxDpr]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <color key={theme} attach="background" args={[palette.background]} />
      <FilamentComposition
        palette={palette}
        reducedMotion={reducedMotion}
        scrollProgress={scrollProgress}
      />
    </Canvas>
  );
}

function FilamentComposition({
  palette,
  reducedMotion,
  scrollProgress,
}: {
  palette: HeroFilamentPalette;
  reducedMotion: boolean;
  scrollProgress: RefObject<number>;
}) {
  const compact = useThree(
    (state) => state.size.width <= HERO_FILAMENT_CONFIG.breakpoint,
  );

  return (
    <>
      {HERO_FILAMENT_CONFIG.layers.slice(0, 2).map((layer, index) => (
        <MembraneLayer
          key={`membrane-${layer.phase}`}
          layer={layer}
          palette={palette}
          reducedMotion={reducedMotion}
          scrollProgress={scrollProgress}
          toneOffset={index * 0.12}
        />
      ))}
      {HERO_FILAMENT_CONFIG.layers.map((layer, index) => (
        <FilamentLayer
          compact={compact}
          key={layer.phase}
          layer={layer}
          palette={palette}
          reducedMotion={reducedMotion}
          scrollProgress={scrollProgress}
          toneOffset={index * 0.16}
        />
      ))}
      <AmbientDust
        compact={compact}
        palette={palette}
        reducedMotion={reducedMotion}
      />
    </>
  );
}

function MembraneLayer({
  layer,
  palette,
  reducedMotion,
  scrollProgress,
  toneOffset,
}: {
  layer: FilamentLayerConfig;
  palette: HeroFilamentPalette;
  reducedMotion: boolean;
  scrollProgress: RefObject<number>;
  toneOffset: number;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useMemo(() => new THREE.Vector2(), []);
  const neutralPointer = useMemo(() => new THREE.Vector2(), []);
  const uniforms = useMemo(
    () => ({
      uAccent: {
        value: new THREE.Color(palette.accent).offsetHSL(toneOffset, 0, 0),
      },
      uBase: { value: new THREE.Color(palette.base) },
      uHighlight: { value: new THREE.Color(palette.highlight) },
      uOpacity: { value: palette.membraneOpacity * layer.opacity },
      uPointer: { value: new THREE.Vector2() },
      uPointerDepth: {
        value:
          reducedMotion ? 0 : HERO_FILAMENT_CONFIG.motion.pointerDepth * 0.72,
      },
      uPointerScale: {
        value: new THREE.Vector2(...HERO_FILAMENT_CONFIG.motion.pointerScale),
      },
      uScroll: { value: 0 },
      uSpeed: { value: layer.speed },
      uTime: { value: 0 },
    }),
    [layer, palette, reducedMotion, toneOffset],
  );

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = reducedMotion
      ? 0
      : state.clock.elapsedTime;
    pointer.lerp(
      reducedMotion ? neutralPointer : state.pointer,
      reducedMotion ? 1 : HERO_FILAMENT_CONFIG.motion.pointerLerp,
    );
    material.current.uniforms.uPointer.value.copy(pointer);
    material.current.uniforms.uScroll.value = scrollProgress.current;
  });

  return (
    <mesh
      frustumCulled={false}
      position={layer.position}
      rotation={layer.rotation}
      scale={layer.scale}
    >
      <planeGeometry args={[11.6, 5.1, 96, 56]} />
      <shaderMaterial
        ref={material}
        blending={THREE.NormalBlending}
        depthTest
        depthWrite={false}
        fragmentShader={membraneFragmentShader}
        side={THREE.DoubleSide}
        transparent
        uniforms={uniforms}
        vertexShader={membraneVertexShader}
      />
    </mesh>
  );
}

function FilamentLayer({
  compact,
  layer,
  palette,
  reducedMotion,
  scrollProgress,
  toneOffset,
}: {
  compact: boolean;
  layer: FilamentLayerConfig;
  palette: HeroFilamentPalette;
  reducedMotion: boolean;
  scrollProgress: RefObject<number>;
  toneOffset: number;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useMemo(() => new THREE.Vector2(), []);
  const neutralPointer = useMemo(() => new THREE.Vector2(), []);
  const geometry = useMemo(
    () =>
      createFilamentGeometry(
        compact ? layer.strands.mobile : layer.strands.desktop,
        compact ? layer.samples.mobile : layer.samples.desktop,
        layer.phase,
      ),
    [compact, layer],
  );
  const uniforms = useMemo(
    () => ({
      uAccent: {
        value: new THREE.Color(palette.accent).offsetHSL(toneOffset, 0, 0),
      },
      uBase: { value: new THREE.Color(palette.base) },
      uHighlight: { value: new THREE.Color(palette.highlight) },
      uOpacity: { value: palette.lineOpacity * layer.opacity },
      uPointer: { value: new THREE.Vector2() },
      uPointerDepth: {
        value: reducedMotion ? 0 : HERO_FILAMENT_CONFIG.motion.pointerDepth,
      },
      uPointerFalloff: { value: HERO_FILAMENT_CONFIG.motion.pointerFalloff },
      uPointerScale: {
        value: new THREE.Vector2(...HERO_FILAMENT_CONFIG.motion.pointerScale),
      },
      uScroll: { value: 0 },
      uScrollDepth: { value: HERO_FILAMENT_CONFIG.motion.scrollDepth },
      uScrollShift: { value: HERO_FILAMENT_CONFIG.motion.scrollShift },
      uSpeed: { value: layer.speed },
      uTime: { value: 0 },
    }),
    [layer, palette, reducedMotion, toneOffset],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = reducedMotion
      ? 0
      : state.clock.elapsedTime;
    pointer.lerp(
      reducedMotion ? neutralPointer : state.pointer,
      reducedMotion ? 1 : HERO_FILAMENT_CONFIG.motion.pointerLerp,
    );
    material.current.uniforms.uPointer.value.copy(pointer);
    material.current.uniforms.uScroll.value = scrollProgress.current;
  });

  return (
    <lineSegments
      frustumCulled={false}
      geometry={geometry}
      position={layer.position}
      rotation={layer.rotation}
      scale={layer.scale}
    >
      <shaderMaterial
        ref={material}
        blending={THREE.NormalBlending}
        depthTest
        depthWrite={false}
        fragmentShader={filamentFragmentShader}
        transparent
        uniforms={uniforms}
        vertexShader={filamentVertexShader}
      />
    </lineSegments>
  );
}

function AmbientDust({
  compact,
  palette,
  reducedMotion,
}: {
  compact: boolean;
  palette: HeroFilamentPalette;
  reducedMotion: boolean;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useMemo(() => new THREE.Vector2(), []);
  const neutralPointer = useMemo(() => new THREE.Vector2(), []);
  const geometry = useMemo(
    () =>
      createDustGeometry(
        compact
          ? HERO_FILAMENT_CONFIG.performance.dust.mobile
          : HERO_FILAMENT_CONFIG.performance.dust.desktop,
      ),
    [compact],
  );
  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(palette.dust) },
      uOpacity: { value: palette.pointOpacity },
      uPointer: { value: new THREE.Vector2() },
      uPointerScale: {
        value: new THREE.Vector2(...HERO_FILAMENT_CONFIG.motion.pointerScale),
      },
      uTime: { value: 0 },
    }),
    [palette],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = reducedMotion
      ? 0
      : state.clock.elapsedTime;
    pointer.lerp(
      reducedMotion ? neutralPointer : state.pointer,
      reducedMotion ? 1 : HERO_FILAMENT_CONFIG.motion.pointerLerp,
    );
    material.current.uniforms.uPointer.value.copy(pointer);
  });

  return (
    <points frustumCulled={false} geometry={geometry} position={[0, 0.15, -0.9]}>
      <shaderMaterial
        ref={material}
        blending={THREE.NormalBlending}
        depthTest
        depthWrite={false}
        fragmentShader={dustFragmentShader}
        transparent
        uniforms={uniforms}
        vertexShader={dustVertexShader}
      />
    </points>
  );
}
