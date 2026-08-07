"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/providers/theme-provider";
import type { ColorTheme } from "@/types/theme";

type RibbonPalette = {
  accent: string;
  background: string;
  cool: string;
  highlight: string;
  primary: string;
  shadow: string;
};

const RIBBON_PALETTES: Record<ColorTheme, RibbonPalette> = {
  dark: {
    accent: "#c9745d",
    background: "#1b2420",
    cool: "#6f9da4",
    highlight: "#f3f5ee",
    primary: "#d8ded8",
    shadow: "#111815",
  },
  light: {
    accent: "#cb7159",
    background: "#e8ece8",
    cool: "#76a4aa",
    highlight: "#fffef8",
    primary: "#eeeae2",
    shadow: "#43544f",
  },
};

const vertexShader = /* glsl */ `
  precision highp float;

  uniform float uAspect;
  uniform vec2 uPointer;
  uniform float uPointerEnergy;
  uniform float uScroll;
  uniform float uTime;

  varying float vEdge;
  varying vec3 vPosition;
  varying float vTwist;
  varying vec2 vUv;

  void main() {
    float mobile = 1.0 - smoothstep(0.72, 1.12, uAspect);
    float progress = uv.x;
    float edge = uv.y * 2.0 - 1.0;
    float time = uTime;
    float pointerFalloff = exp(-pow((progress - uPointer.x) * 6.2, 2.0));

    float center = mix(0.12, 0.3, mobile);
    center += sin(progress * 6.2831853 * 0.82 - time * 0.22) *
      mix(0.22, 0.16, mobile);
    center += sin(progress * 6.2831853 * 2.1 + time * 0.12) * 0.045;
    center += (1.0 - smoothstep(0.12, 0.58, progress)) *
      mix(0.22, 0.12, mobile);
    center -= uScroll * 0.15;
    center += (uPointer.y - 0.5) * pointerFalloff * uPointerEnergy * 0.18;

    float twist = progress * 6.2831853 * 1.48;
    twist += sin(progress * 6.2831853 * 0.88 - time * 0.16) * 0.62;
    twist += time * 0.12 + pointerFalloff * uPointerEnergy * 0.72;

    float halfWidth = mix(0.21, 0.25, mobile);
    halfWidth *= 0.9 + sin(progress * 6.2831853 * 1.7 + time * 0.12) * 0.1;

    float x = mix(-1.24, 1.24, progress);
    float y = center + edge * halfWidth * cos(twist);
    float z = edge * halfWidth * sin(twist);
    z += sin(progress * 6.2831853 * 1.8 - time * 0.14) * 0.035;

    vEdge = edge;
    vPosition = vec3(x, y, z);
    vTwist = twist;
    vUv = uv;
    gl_Position = vec4(x, y, z * 0.62, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uAccent;
  uniform vec3 uCool;
  uniform vec3 uHighlight;
  uniform vec2 uPointer;
  uniform vec3 uPrimary;
  uniform vec3 uShadow;
  uniform float uTime;

  varying float vEdge;
  varying vec3 vPosition;
  varying float vTwist;
  varying vec2 vUv;

  float weave(vec2 point) {
    float warp = sin(point.x * 860.0 + sin(point.y * 31.0) * 0.7);
    float weft = sin(point.y * 170.0);
    return warp * weft;
  }

  void main() {
    vec3 tangentX = dFdx(vPosition);
    vec3 tangentY = dFdy(vPosition);
    vec3 normal = normalize(cross(tangentX, tangentY));
    if (!gl_FrontFacing) normal *= -1.0;
    normal.z = abs(normal.z);

    vec2 lightPoint = mix(vec2(0.72, 0.76), uPointer, 0.46);
    vec3 lightDirection = normalize(vec3(lightPoint * 2.0 - 1.0 - vPosition.xy, 1.2));
    vec3 viewDirection = vec3(0.0, 0.0, 1.0);
    vec3 halfDirection = normalize(lightDirection + viewDirection);

    float diffuse = 0.42 + max(dot(normal, lightDirection), 0.0) * 0.58;
    float specular = pow(max(dot(normal, halfDirection), 0.0), 28.0);
    float broadSheen = pow(max(dot(normal, halfDirection), 0.0), 5.0);
    float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.3);
    float fiber = weave(vUv) * 0.5 + 0.5;

    float coolFlow = 0.5 + 0.5 * sin(
      vUv.x * 6.2831853 * 1.22 + vTwist * 0.34 - uTime * 0.08
    );
    float accentFlow = smoothstep(0.68, 0.98, 0.5 + 0.5 * sin(
      vUv.x * 6.2831853 * 1.74 - vTwist * 0.28 + uTime * 0.06
    ));

    vec3 material = mix(uPrimary, uCool, coolFlow * 0.48);
    material = mix(material, uAccent, accentFlow * 0.34);
    material *= 0.82 + diffuse * 0.25;
    material = mix(material, uHighlight, broadSheen * 0.22 + specular * 0.36);
    material = mix(material, uShadow, fresnel * 0.2);
    material += (fiber - 0.5) * 0.026;

    float edgeAlpha = smoothstep(0.0, 0.045, 1.0 - abs(vEdge));
    float endAlpha = smoothstep(0.0, 0.055, vUv.x) *
      smoothstep(0.0, 0.055, 1.0 - vUv.x);
    gl_FragColor = vec4(material, edgeAlpha * endAlpha);
  }
`;

export function HeroSilkRibbon() {
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
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
    >
      <color
        key={theme}
        attach="background"
        args={[RIBBON_PALETTES[theme].background]}
      />
      <SilkRibbon
        key={theme}
        palette={RIBBON_PALETTES[theme]}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

function SilkRibbon({
  palette,
  reducedMotion,
}: {
  palette: RibbonPalette;
  reducedMotion: boolean;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(0.7, 0.68));
  const previousPointer = useRef(new THREE.Vector2());
  const pointerEnergy = useRef(0);
  const size = useThree((state) => state.size);
  const uniforms = useMemo(
    () => ({
      uAccent: { value: new THREE.Color(palette.accent) },
      uAspect: { value: size.width / Math.max(size.height, 1) },
      uCool: { value: new THREE.Color(palette.cool) },
      uHighlight: { value: new THREE.Color(palette.highlight) },
      uPointer: { value: pointer.current.clone() },
      uPointerEnergy: { value: 0 },
      uPrimary: { value: new THREE.Color(palette.primary) },
      uScroll: { value: 0 },
      uShadow: { value: new THREE.Color(palette.shadow) },
      uTime: { value: 0 },
    }),
    [palette, size.height, size.width],
  );

  useFrame((state, delta) => {
    if (!material.current) return;

    const target = new THREE.Vector2(
      state.pointer.x * 0.5 + 0.5,
      state.pointer.y * 0.5 + 0.5,
    );
    const movement = previousPointer.current.distanceTo(state.pointer);
    const response = 1 - Math.exp(-delta * 5.4);

    previousPointer.current.copy(state.pointer);
    pointer.current.lerp(target, response);
    pointerEnergy.current = THREE.MathUtils.lerp(
      pointerEnergy.current,
      reducedMotion ? 0 : Math.min(1, movement * 11),
      1 - Math.exp(-delta * 3.2),
    );

    material.current.uniforms.uAspect.value = size.width / Math.max(size.height, 1);
    material.current.uniforms.uPointer.value.copy(pointer.current);
    material.current.uniforms.uPointerEnergy.value = pointerEnergy.current;
    material.current.uniforms.uScroll.value = reducedMotion
      ? 0
      : Math.min(1, window.scrollY / Math.max(window.innerHeight, 1));
    material.current.uniforms.uTime.value = reducedMotion
      ? 3.8
      : state.clock.elapsedTime * 0.52;
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 1, 320, 38]} />
      <shaderMaterial
        ref={material}
        depthTest
        depthWrite
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        toneMapped={false}
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}
