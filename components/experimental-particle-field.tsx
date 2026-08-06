"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { SITE_CONFIG } from "@/config/site";
import { GENERATIVE_FIELD_CONFIG } from "@/config/space";
import { useTheme } from "@/providers/theme-provider";

const vertexShader = /* glsl */ `
  attribute vec3 aWave;
  attribute vec3 aPortal;
  attribute vec3 aBloom;
  attribute vec4 aMotion;

  uniform float uProgress;
  uniform float uTime;
  uniform float uPointSize;
  uniform float uDisturbance;
  uniform float uColorCycleSpeed;
  uniform float uColorSpatialFrequency;
  uniform float uFlowDetailStrength;
  uniform float uFlowScale;
  uniform float uFlowSpeed;
  uniform float uFlowStrength;
  uniform float uPointerDepth;
  uniform float uPointerFalloff;
  uniform float uPointerForce;
  uniform vec2 uPointerScale;
  uniform vec2 uPointer;

  varying float vGlow;
  varying float vDepth;
  varying float vColorPhase;

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
    vec2 pointerPosition = uPointer * uPointerScale;
    vec2 pointerDelta = transformed.xy - pointerPosition;
    float pointerDistance = dot(pointerDelta, pointerDelta);
    float influence = exp(-pointerDistance * uPointerFalloff) * uDisturbance;
    vec2 direction = normalize(pointerDelta + vec2(0.0001));

    transformed.xy += direction * influence * uPointerForce;
    transformed.z += influence * uPointerDepth;
    float flowTime = uTime * uFlowSpeed;
    vec3 flowPosition = transformed * uFlowScale;
    vec3 flow = vec3(
      sin(flowPosition.y * 1.35 + flowTime) +
        cos(flowPosition.z * 1.17 - flowTime * 0.73),
      sin(flowPosition.z * 1.41 + flowTime * 0.82) +
        cos(flowPosition.x * 1.13 + flowTime * 0.57),
      sin(flowPosition.x * 1.29 - flowTime * 0.68) +
        cos(flowPosition.y * 1.51 + flowTime * 0.76)
    );
    vec3 detailFlow = vec3(
      sin(flowTime * 1.31 + aMotion.x),
      cos(flowTime * 1.17 + aMotion.y),
      sin(flowTime * 0.93 + aMotion.z)
    );
    float particleAmplitude = mix(0.72, 1.18, aMotion.w);

    transformed += flow * 0.5 * uFlowStrength * particleAmplitude;
    transformed += detailFlow * uFlowDetailStrength;

    vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;

    float perspective = 16.0 / max(1.0, -viewPosition.z);
    gl_PointSize = clamp(uPointSize * perspective, 1.0, 5.2);
    vGlow = 0.34 + min(0.28, length(flow) * 0.08) + influence * 0.48;
    vDepth = smoothstep(13.0, 2.0, -viewPosition.z);
    vColorPhase = fract(
      uTime * uColorCycleSpeed +
      dot(transformed, vec3(1.0, 1.37, 0.73)) * uColorSpatialFrequency +
      aMotion.w * 0.06
    );
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uOpacity;

  varying float vGlow;
  varying float vDepth;
  varying float vColorPhase;

  vec3 getGradientColor(float phase) {
    float segment = phase * 3.0;
    if (segment < 1.0) {
      return mix(uColorA, uColorB, smoothstep(0.0, 1.0, segment));
    }
    if (segment < 2.0) {
      return mix(uColorB, uColorC, smoothstep(0.0, 1.0, segment - 1.0));
    }
    return mix(uColorC, uColorA, smoothstep(0.0, 1.0, segment - 2.0));
  }

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float distanceToCenter = length(center);
    float core = smoothstep(0.5, 0.05, distanceToCenter);
    float halo = smoothstep(0.5, 0.22, distanceToCenter);
    float alpha = (core * 0.72 + halo * 0.28) * uOpacity * vDepth;
    vec3 color = getGradientColor(vColorPhase);

    if (alpha < 0.01) discard;
    gl_FragColor = vec4(color * (0.78 + vGlow * 0.55), alpha);
  }
`;

export function ExperimentalParticleField({
  chapter,
  onParticleCount,
}: {
  chapter: number;
  onParticleCount?: (count: number) => void;
}) {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [particleCount, setParticleCount] = useState<number>(
    GENERATIVE_FIELD_CONFIG.performance.initialParticles,
  );

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia(
      `(max-width: ${SITE_CONFIG.breakpoints.mobile}px)`,
    );

    const update = () => {
      setReducedMotion(motionQuery.matches);
      setParticleCount(
        mobileQuery.matches
          ? GENERATIVE_FIELD_CONFIG.performance.mobileParticles
          : GENERATIVE_FIELD_CONFIG.performance.desktopParticles,
      );
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
      camera={GENERATIVE_FIELD_CONFIG.camera}
      dpr={[1, GENERATIVE_FIELD_CONFIG.performance.maxDpr]}
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
        theme={theme}
      />
    </Canvas>
  );
}

function ParticleMorph({
  chapter,
  count,
  reducedMotion,
  theme,
}: {
  chapter: number;
  count: number;
  reducedMotion: boolean;
  theme: "dark" | "light";
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const isMobile = useThree(
    (state) => state.size.width <= SITE_CONFIG.breakpoints.mobile,
  );
  const shapes = useMemo(() => createParticleShapes(count), [count]);
  const neutralPointer = useMemo(() => new THREE.Vector2(), []);
  const appearance = GENERATIVE_FIELD_CONFIG.appearance[theme];
  const layout = isMobile
    ? GENERATIVE_FIELD_CONFIG.layout.mobile
    : GENERATIVE_FIELD_CONFIG.layout.desktop;
  const uniforms = useMemo(
    () => ({
      uColorA: { value: new THREE.Color(appearance.colors[0]) },
      uColorB: { value: new THREE.Color(appearance.colors[1]) },
      uColorC: { value: new THREE.Color(appearance.colors[2]) },
      uColorCycleSpeed: {
        value: GENERATIVE_FIELD_CONFIG.shader.colorCycleSpeed,
      },
      uColorSpatialFrequency: {
        value: GENERATIVE_FIELD_CONFIG.shader.colorSpatialFrequency,
      },
      uDisturbance: { value: reducedMotion ? 0 : 1 },
      uFlowDetailStrength: {
        value: GENERATIVE_FIELD_CONFIG.shader.flowDetailStrength,
      },
      uFlowScale: { value: GENERATIVE_FIELD_CONFIG.shader.flowScale },
      uFlowSpeed: { value: GENERATIVE_FIELD_CONFIG.shader.flowSpeed },
      uFlowStrength: { value: GENERATIVE_FIELD_CONFIG.shader.flowStrength },
      uOpacity: { value: appearance.opacity },
      uPointSize: { value: appearance.pointSize[isMobile ? "mobile" : "desktop"] },
      uPointer: { value: new THREE.Vector2() },
      uPointerDepth: { value: GENERATIVE_FIELD_CONFIG.shader.pointerDepth },
      uPointerFalloff: { value: GENERATIVE_FIELD_CONFIG.shader.pointerFalloff },
      uPointerForce: { value: GENERATIVE_FIELD_CONFIG.shader.pointerForce },
      uPointerScale: {
        value: new THREE.Vector2(
          ...GENERATIVE_FIELD_CONFIG.shader.pointerScale,
        ),
      },
      uProgress: { value: 0 },
      uTime: { value: 0 },
    }),
    [appearance, isMobile, reducedMotion],
  );

  useFrame((state, delta) => {
    if (!material.current) return;

    const easing = reducedMotion
      ? 1
      : 1 - Math.exp(-delta * GENERATIVE_FIELD_CONFIG.motion.morphRate);
    material.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
      material.current.uniforms.uProgress.value,
      chapter,
      easing,
    );
    const elapsed = state.clock.elapsedTime;
    material.current.uniforms.uTime.value = elapsed;
    material.current.uniforms.uDisturbance.value = reducedMotion ? 0 : 1;
    material.current.uniforms.uPointer.value.lerp(
      reducedMotion ? neutralPointer : state.pointer,
      reducedMotion ? 1 : GENERATIVE_FIELD_CONFIG.motion.pointerLerp,
    );
  });

  return (
    <group
      position={layout.position}
      scale={layout.scale}
    >
      <points frustumCulled={false}>
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
          <bufferAttribute
            attach="attributes-aMotion"
            args={[shapes.motion, 4]}
          />
        </bufferGeometry>
        <shaderMaterial
          ref={material}
          blending={
            appearance.blending === "normal"
              ? THREE.NormalBlending
              : THREE.AdditiveBlending
          }
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
  const motion = new Float32Array(count * 4);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const fullTurn = Math.PI * 2;

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    const motionOffset = index * 4;
    const unit = (index + 0.5) / count;
    const randomA = hash(index * 1.37 + 2.1);
    const randomB = hash(index * 2.17 + 8.7);
    const randomC = hash(index * 3.11 + 4.3);
    const randomD = hash(index * 4.91 + 6.2);

    motion[motionOffset] = randomA * fullTurn;
    motion[motionOffset + 1] = randomB * fullTurn;
    motion[motionOffset + 2] = randomC * fullTurn;
    motion[motionOffset + 3] = randomD;

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

  return { bloom, motion, portal, sphere, wave };
}

function hash(value: number) {
  return Math.abs(Math.sin(value * 127.1) * 43758.5453) % 1;
}
