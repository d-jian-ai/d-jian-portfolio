"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const FIELD_COLOR = "#dce9e1";

const vertexShader = /* glsl */ `
  attribute vec3 aWave;
  attribute vec3 aPortal;
  attribute vec3 aBloom;

  uniform float uProgress;
  uniform float uTime;
  uniform float uPointSize;
  uniform float uDisturbance;
  uniform vec2 uPointer;

  varying float vGlow;
  varying float vDepth;

  vec3 getShape(float progress) {
    if (progress < 1.0) {
      return mix(position, aWave, smoothstep(0.0, 1.0, progress));
    }
    if (progress < 2.0) {
      return mix(aWave, aPortal, smoothstep(1.0, 2.0, progress));
    }
    return mix(aPortal, aBloom, smoothstep(2.0, 3.0, progress));
  }

  void main() {
    vec3 transformed = getShape(uProgress);
    vec2 pointerPosition = uPointer * vec2(4.6, 2.8);
    vec2 pointerDelta = transformed.xy - pointerPosition;
    float pointerDistance = dot(pointerDelta, pointerDelta);
    float influence = exp(-pointerDistance * 0.72) * uDisturbance;
    vec2 direction = normalize(pointerDelta + vec2(0.0001));

    transformed.xy += direction * influence * 0.72;
    transformed.z += influence * 1.55;
    transformed.z += sin(uTime * 0.46 + length(transformed) * 1.7) * 0.035;

    vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;

    float perspective = 16.0 / max(1.0, -viewPosition.z);
    gl_PointSize = clamp(uPointSize * perspective, 1.0, 5.2);
    vGlow = 0.42 + influence * 0.58;
    vDepth = smoothstep(13.0, 2.0, -viewPosition.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;

  varying float vGlow;
  varying float vDepth;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float distanceToCenter = length(center);
    float core = smoothstep(0.5, 0.05, distanceToCenter);
    float halo = smoothstep(0.5, 0.22, distanceToCenter);
    float alpha = (core * 0.72 + halo * 0.28) * uOpacity * vDepth;

    if (alpha < 0.01) discard;
    gl_FragColor = vec4(uColor * (0.78 + vGlow * 0.55), alpha);
  }
`;

export function ExperimentalParticleField({
  chapter,
  onParticleCount,
}: {
  chapter: number;
  onParticleCount?: (count: number) => void;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [particleCount, setParticleCount] = useState(16000);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 820px)");

    const update = () => {
      setReducedMotion(motionQuery.matches);
      setParticleCount(mobileQuery.matches ? 9000 : 28000);
    };

    update();
    motionQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);
    return () => {
      motionQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    onParticleCount?.(particleCount);
  }, [onParticleCount, particleCount]);

  return (
    <Canvas
      camera={{ fov: 48, near: 0.1, far: 40, position: [0, 0, 8.2] }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      }}
    >
      <ParticleMorph
        chapter={chapter}
        count={particleCount}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

function ParticleMorph({
  chapter,
  count,
  reducedMotion,
}: {
  chapter: number;
  count: number;
  reducedMotion: boolean;
}) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const shapes = useMemo(() => createParticleShapes(count), [count]);
  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(FIELD_COLOR) },
      uDisturbance: { value: reducedMotion ? 0 : 1 },
      uOpacity: { value: 0.86 },
      uPointSize: { value: count > 10000 ? 1.35 : 1.7 },
      uPointer: { value: new THREE.Vector2() },
      uProgress: { value: chapter },
      uTime: { value: 0 },
    }),
    [count],
  );

  useFrame((state, delta) => {
    if (!material.current || !points.current) return;

    const easing = reducedMotion ? 1 : 1 - Math.exp(-delta * 2.35);
    material.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
      material.current.uniforms.uProgress.value,
      chapter,
      easing,
    );
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    material.current.uniforms.uDisturbance.value = reducedMotion ? 0 : 1;
    material.current.uniforms.uPointer.value.lerp(
      reducedMotion ? new THREE.Vector2(0, 0) : state.pointer,
      reducedMotion ? 1 : 0.08,
    );

    if (!reducedMotion) {
      points.current.rotation.y = THREE.MathUtils.lerp(
        points.current.rotation.y,
        state.pointer.x * 0.055 + chapter * 0.025,
        0.035,
      );
      points.current.rotation.x = THREE.MathUtils.lerp(
        points.current.rotation.x,
        state.pointer.y * -0.025,
        0.035,
      );
    }
  });

  return (
    <group position={[0.55, 0.08, 0]}>
      <points ref={points} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[shapes.sphere, 3]}
          />
          <bufferAttribute attach="attributes-aWave" args={[shapes.wave, 3]} />
          <bufferAttribute
            attach="attributes-aPortal"
            args={[shapes.portal, 3]}
          />
          <bufferAttribute
            attach="attributes-aBloom"
            args={[shapes.bloom, 3]}
          />
        </bufferGeometry>
        <shaderMaterial
          ref={material}
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={fragmentShader}
          transparent
          uniforms={uniforms}
          vertexShader={vertexShader}
        />
      </points>
    </group>
  );
}

function createParticleShapes(count: number) {
  const sphere = new Float32Array(count * 3);
  const wave = new Float32Array(count * 3);
  const portal = new Float32Array(count * 3);
  const bloom = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    const unit = (index + 0.5) / count;
    const randomA = hash(index * 1.37 + 2.1);
    const randomB = hash(index * 2.17 + 8.7);
    const randomC = hash(index * 3.11 + 4.3);

    const phi = Math.acos(1 - 2 * unit);
    const theta = goldenAngle * index;
    const radius = 1.78 + randomA * 0.88;
    sphere[offset] = Math.cos(theta) * Math.sin(phi) * radius;
    sphere[offset + 1] = Math.cos(phi) * radius * 0.94;
    sphere[offset + 2] = Math.sin(theta) * Math.sin(phi) * radius;

    const gridSize = Math.ceil(Math.sqrt(count));
    const gridX = (index % gridSize) / Math.max(1, gridSize - 1);
    const gridZ = Math.floor(index / gridSize) / Math.max(1, gridSize - 1);
    const waveX = (gridX - 0.5) * 8.4;
    const waveZ = (gridZ - 0.5) * 4.8;
    wave[offset] = waveX + (randomA - 0.5) * 0.06;
    wave[offset + 1] =
      Math.sin(waveX * 1.18 + waveZ * 1.7) * 0.42 +
      Math.cos(waveX * 0.56 - waveZ * 2.1) * 0.24;
    wave[offset + 2] = waveZ + (randomB - 0.5) * 0.08;

    const portalAngle = unit * Math.PI * 2 * 11 + randomA * 0.08;
    const portalBand = 1.55 + Math.sin(unit * Math.PI * 24) * 0.46;
    portal[offset] = Math.cos(portalAngle) * portalBand;
    portal[offset + 1] = Math.sin(portalAngle) * portalBand * 1.12;
    portal[offset + 2] = (randomB - 0.5) * 2.6 + Math.sin(portalAngle * 0.5) * 0.3;

    const bloomAngle = randomA * Math.PI * 2;
    const petal = 0.48 + Math.abs(Math.sin(bloomAngle * 3)) * 0.52;
    const bloomRadius = Math.sqrt(randomB) * 3.1 * petal;
    bloom[offset] = Math.cos(bloomAngle) * bloomRadius;
    bloom[offset + 1] = Math.sin(bloomAngle) * bloomRadius * 0.82;
    bloom[offset + 2] =
      Math.sin(bloomAngle * 6 + bloomRadius * 1.8) * 0.46 +
      (randomC - 0.5) * 0.48;
  }

  return { bloom, portal, sphere, wave };
}

function hash(value: number) {
  return Math.abs(Math.sin(value * 127.1) * 43758.5453) % 1;
}
