"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/providers/theme-provider";
import type { ColorTheme } from "@/types/theme";

type FlowPalette = {
  accent: string;
  background: string;
  base: string;
  cool: string;
  highlight: string;
  shadow: string;
};

const FLOW_PALETTES: Record<ColorTheme, FlowPalette> = {
  dark: {
    accent: "#c67861",
    background: "#202a25",
    base: "#4b625c",
    cool: "#75a3a5",
    highlight: "#d8e1db",
    shadow: "#17201c",
  },
  light: {
    accent: "#cd765f",
    background: "#e6ebe7",
    base: "#ccd9d4",
    cool: "#78a6aa",
    highlight: "#f8faf5",
    shadow: "#8b9d96",
  },
};

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uAccent;
  uniform vec3 uBackground;
  uniform vec3 uBase;
  uniform vec3 uCool;
  uniform vec3 uHighlight;
  uniform vec2 uPointer;
  uniform float uPointerEnergy;
  uniform vec2 uResolution;
  uniform float uScroll;
  uniform vec3 uShadow;
  uniform float uTime;

  varying vec2 vUv;

  mat2 rotate2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  float flowingSurface(vec2 point, float time) {
    vec2 samplePoint = point;
    float field = 0.0;
    float amplitude = 0.56;

    for (int octave = 0; octave < 5; octave++) {
      float layer = float(octave);
      vec2 direction = normalize(vec2(
        cos(0.68 + layer * 1.87),
        sin(0.68 + layer * 1.87)
      ));
      float crossWave = sin(
        samplePoint.y * (0.72 + layer * 0.12) -
        time * (0.11 + layer * 0.012) +
        layer
      );
      float wave = sin(
        dot(samplePoint, direction) * (1.18 + layer * 0.38) +
        crossWave * 0.78 +
        time * (0.18 + layer * 0.025)
      );

      field += wave * amplitude;
      samplePoint = rotate2d(0.74 + layer * 0.08) * samplePoint * 1.53;
      samplePoint += vec2(wave * 0.12, -wave * 0.075);
      amplitude *= 0.48;
    }

    return field;
  }

  float pixelGrain(vec2 point) {
    return fract(sin(dot(point, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 point = (vUv - 0.5) * vec2(aspect, 1.0) * 2.72;
    vec2 pointer = (uPointer - 0.5) * vec2(aspect, 1.0) * 2.72;
    vec2 toPointer = point - pointer;
    float pointerDistance = length(toPointer);
    float pointerFalloff = exp(-pointerDistance * pointerDistance * 0.82);
    float time = uTime;

    vec2 interactionWarp = normalize(toPointer + vec2(0.0001)) *
      pointerFalloff * uPointerEnergy * 0.16;
    vec2 flowPoint = point + interactionWarp;
    flowPoint.y += uScroll * 0.34;

    float height = flowingSurface(flowPoint, time);
    height += sin(pointerDistance * 7.5 - time * 1.05) *
      pointerFalloff * uPointerEnergy * 0.038;

    vec3 normal = normalize(vec3(
      -dFdx(height) * uResolution.y * 0.13,
      -dFdy(height) * uResolution.y * 0.13,
      1.0
    ));
    vec2 lightUv = mix(vec2(0.76, 0.7), uPointer, 0.44);
    vec2 lightOffset = (lightUv - vUv) * vec2(aspect, 1.0);
    vec3 lightDirection = normalize(vec3(lightOffset, 0.72));
    vec3 viewDirection = vec3(0.0, 0.0, 1.0);

    float diffuse = max(dot(normal, lightDirection), 0.0);
    float halfLight = dot(normal, normalize(lightDirection + viewDirection));
    float specular = pow(max(halfLight, 0.0), 30.0);
    float broadSpecular = pow(max(halfLight, 0.0), 5.5);
    float fresnel = pow(1.0 - max(normal.z, 0.0), 2.2);

    float temperature = 0.5 + 0.5 * sin(
      height * 2.45 +
      flowPoint.x * 0.54 -
      flowPoint.y * 0.28 -
      time * 0.075
    );
    float accentBand = smoothstep(0.66, 0.96, 0.5 + 0.5 * sin(
      height * 3.1 - flowPoint.x * 0.44 + flowPoint.y * 0.7 + time * 0.06
    ));
    float pearlBand = smoothstep(0.5, 0.98, broadSpecular);
    float mineralPhase = abs(sin(
      height * 1.62 + flowPoint.x * 0.2 - flowPoint.y * 0.26 - time * 0.045
    ));
    float mineralVein = 1.0 - smoothstep(0.09, 0.34, mineralPhase);
    float lightVein = 1.0 - smoothstep(0.025, 0.09, mineralPhase);
    vec3 veinColor = mix(
      uCool,
      uAccent,
      0.5 + 0.5 * sin(flowPoint.y * 0.64 + height - time * 0.04)
    );

    vec3 material = mix(uBase, uCool, temperature * 0.68);
    material = mix(material, uAccent, accentBand * 0.3);
    material = mix(material, veinColor, mineralVein * 0.22);
    material = mix(material, uHighlight, lightVein * 0.11);
    material = mix(material, uHighlight, diffuse * 0.2 + pearlBand * 0.13);
    material = mix(material, uShadow, fresnel * 0.18);
    material += uHighlight * specular * 0.16;

    float calmCopyArea = (1.0 - smoothstep(0.02, 0.58, vUv.x)) *
      (1.0 - smoothstep(0.16, 0.76, vUv.y));
    material = mix(material, uBackground, calmCopyArea * 0.68);

    float edgeFade = smoothstep(0.0, 0.11, vUv.x) *
      smoothstep(0.0, 0.1, vUv.y) *
      smoothstep(0.0, 0.11, 1.0 - vUv.x) *
      smoothstep(0.0, 0.1, 1.0 - vUv.y);
    material = mix(uBackground, material, 0.76 + edgeFade * 0.24);
    material += (pixelGrain(gl_FragCoord.xy) - 0.5) * 0.012;

    gl_FragColor = vec4(material, 1.0);
  }
`;

export function HeroFlowField() {
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
      dpr={[1, 1.35]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: false, antialias: false, powerPreference: "high-performance" }}
    >
      <FlowingSurface
        key={theme}
        palette={FLOW_PALETTES[theme]}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

function FlowingSurface({
  palette,
  reducedMotion,
}: {
  palette: FlowPalette;
  reducedMotion: boolean;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(0.68, 0.62));
  const previousPointer = useRef(new THREE.Vector2(0, 0));
  const pointerEnergy = useRef(0);
  const size = useThree((state) => state.size);
  const uniforms = useMemo(
    () => ({
      uAccent: { value: new THREE.Color(palette.accent) },
      uBackground: { value: new THREE.Color(palette.background) },
      uBase: { value: new THREE.Color(palette.base) },
      uCool: { value: new THREE.Color(palette.cool) },
      uHighlight: { value: new THREE.Color(palette.highlight) },
      uPointer: { value: pointer.current.clone() },
      uPointerEnergy: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uScroll: { value: 0 },
      uShadow: { value: new THREE.Color(palette.shadow) },
      uTime: { value: 0 },
    }),
    [palette, size.height, size.width],
  );

  useFrame((state, delta) => {
    if (!material.current) return;

    const targetX = state.pointer.x * 0.5 + 0.5;
    const targetY = state.pointer.y * 0.5 + 0.5;
    const pointerDelta = previousPointer.current.distanceTo(state.pointer);
    const response = 1 - Math.exp(-delta * 5.2);

    previousPointer.current.copy(state.pointer);
    pointer.current.lerp(new THREE.Vector2(targetX, targetY), response);
    pointerEnergy.current = THREE.MathUtils.lerp(
      pointerEnergy.current,
      reducedMotion ? 0 : Math.min(1, pointerDelta * 12),
      1 - Math.exp(-delta * 3.4),
    );

    material.current.uniforms.uPointer.value.copy(pointer.current);
    material.current.uniforms.uPointerEnergy.value = pointerEnergy.current;
    material.current.uniforms.uResolution.value.set(size.width, size.height);
    material.current.uniforms.uScroll.value = reducedMotion
      ? 0
      : Math.min(1, window.scrollY / Math.max(window.innerHeight, 1));
    material.current.uniforms.uTime.value = reducedMotion
      ? 4.5
      : state.clock.elapsedTime * 0.48;
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        depthTest={false}
        depthWrite={false}
        fragmentShader={fragmentShader}
        toneMapped={false}
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}
