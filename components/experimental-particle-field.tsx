"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { SITE_CONFIG } from "@/config/site";
import {
  GENERATIVE_FIELD_CONFIG,
  type FieldTelemetry,
} from "@/config/space";
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
  uniform float uAutonomy;
  uniform float uFlowDetailStrength;
  uniform float uFlowScale;
  uniform float uFlowSpeed;
  uniform float uFlowStrength;
  uniform float uPointerDepth;
  uniform float uPointerFalloff;
  uniform float uPointerForce;
  uniform vec2 uPointerScale;
  uniform vec2 uPointer;
  uniform vec2 uWake[5];

  varying float vGlow;
  varying float vDepth;
  varying float vColorPhase;
  varying float vEnergy;

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

    vec2 wakeForce = vec2(0.0);
    float wakeEnergy = 0.0;
    for (int wakeIndex = 0; wakeIndex < 5; wakeIndex++) {
      vec2 wakePosition = uWake[wakeIndex] * uPointerScale;
      vec2 wakeDelta = transformed.xy - wakePosition;
      float wakeDistance = dot(wakeDelta, wakeDelta);
      float wakeWeight = exp(-wakeDistance * (uPointerFalloff + float(wakeIndex) * 0.08));
      wakeWeight *= (1.0 - float(wakeIndex) * 0.145) * uDisturbance;
      wakeForce += normalize(wakeDelta + vec2(0.0001)) * wakeWeight;
      wakeEnergy += wakeWeight;
    }

    transformed.xy += direction * influence * uPointerForce;
    transformed.z += influence * uPointerDepth;
    float flowTime = uTime * uFlowSpeed;
    vec3 flowPosition = transformed * uFlowScale;
    vec3 flow = vec3(
      cos(flowPosition.y * 1.31 + flowTime) -
        sin(flowPosition.z * 1.17 - flowTime * 0.71),
      cos(flowPosition.z * 1.43 + flowTime * 0.83) -
        sin(flowPosition.x * 1.11 + flowTime * 0.53),
      cos(flowPosition.x * 1.27 - flowTime * 0.67) -
        sin(flowPosition.y * 1.49 + flowTime * 0.79)
    );
    vec3 detailFlow = vec3(
      sin(flowTime * 1.31 + aMotion.x),
      cos(flowTime * 1.17 + aMotion.y),
      sin(flowTime * 0.93 + aMotion.z)
    );
    float particleAmplitude = mix(0.72, 1.18, aMotion.w);

    float stageEnergy = 0.74 + smoothstep(0.6, 2.35, uProgress) * 0.34;
    transformed += flow * 0.5 * uFlowStrength * particleAmplitude * stageEnergy;
    transformed += detailFlow * uFlowDetailStrength;
    transformed.xy += wakeForce * uPointerForce * 0.34;
    transformed.z += wakeEnergy * uPointerDepth * 0.16;
    transformed += normalize(flow + vec3(0.0001)) *
      sin(flowTime * 1.7 + aMotion.x) * uAutonomy * 0.055;

    vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;

    float perspective = 16.0 / max(1.0, -viewPosition.z);
    float pulse = 0.92 + sin(flowTime * 1.3 + aMotion.y) * 0.08;
    gl_PointSize = clamp(uPointSize * perspective * pulse, 1.0, 5.2);
    vGlow = 0.34 + min(0.32, length(flow) * 0.09) + influence * 0.32 + wakeEnergy * 0.12;
    vDepth = 1.0 - smoothstep(2.0, 13.0, -viewPosition.z);
    vColorPhase = fract(
      uTime * uColorCycleSpeed +
      dot(transformed, vec3(1.0, 1.37, 0.73)) * uColorSpatialFrequency +
      aMotion.w * 0.06
    );
    vEnergy = clamp(length(flow) * 0.22 + wakeEnergy * 0.2, 0.0, 1.0);
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
  varying float vEnergy;

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
    alpha *= 0.82 + vEnergy * 0.28;
    vec3 color = getGradientColor(vColorPhase);

    if (alpha < 0.01) discard;
    gl_FragColor = vec4(color * (0.76 + vGlow * 0.58), alpha);
  }
`;

export function ExperimentalParticleField({
  chapter,
  onParticleCount,
  onTelemetry,
  variant = "experience",
}: {
  chapter: number;
  onParticleCount?: (count: number) => void;
  onTelemetry?: (telemetry: FieldTelemetry) => void;
  variant?: "experience" | "preview";
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
        variant === "preview"
          ? GENERATIVE_FIELD_CONFIG.performance.previewParticles
          : mobileQuery.matches
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
  }, [variant]);

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
        onTelemetry={onTelemetry}
        reducedMotion={reducedMotion}
        theme={theme}
        variant={variant}
      />
    </Canvas>
  );
}

function ParticleMorph({
  chapter,
  count,
  onTelemetry,
  reducedMotion,
  theme,
  variant,
}: {
  chapter: number;
  count: number;
  onTelemetry?: (telemetry: FieldTelemetry) => void;
  reducedMotion: boolean;
  theme: "dark" | "light";
  variant: "experience" | "preview";
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const group = useRef<THREE.Group>(null);
  const size = useThree((state) => state.size);
  const isMobile = size.width <= SITE_CONFIG.breakpoints.mobile;
  const shapes = useMemo(() => createParticleShapes(count), [count]);
  const neutralPointer = useMemo(() => new THREE.Vector2(), []);
  const autonomousPointer = useMemo(() => new THREE.Vector2(), []);
  const wakePositions = useMemo(
    () => Array.from({ length: 5 }, () => new THREE.Vector2()),
    [],
  );
  const telemetryClock = useRef(0);
  const appearance = GENERATIVE_FIELD_CONFIG.appearance[theme];
  const layout = variant === "preview"
    ? isMobile
      ? GENERATIVE_FIELD_CONFIG.layout.previewMobile
      : GENERATIVE_FIELD_CONFIG.layout.preview
    : isMobile
      ? GENERATIVE_FIELD_CONFIG.layout.mobile
      : GENERATIVE_FIELD_CONFIG.layout.desktop;
  const targetPalette = useMemo(
    () =>
      GENERATIVE_FIELD_CONFIG.stageColors[theme][chapter].map(
        (color) => new THREE.Color(color),
      ),
    [chapter, theme],
  );
  const uniforms = useMemo(
    () => ({
      uAutonomy: { value: reducedMotion ? 0.18 : 1 },
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
      uWake: { value: wakePositions },
    }),
    [appearance, isMobile, reducedMotion, wakePositions],
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
    material.current.uniforms.uAutonomy.value = reducedMotion ? 0.18 : 1;

    autonomousPointer.set(
      Math.sin(elapsed * GENERATIVE_FIELD_CONFIG.motion.autonomousPointerSpeed) * 0.72,
      Math.cos(elapsed * GENERATIVE_FIELD_CONFIG.motion.autonomousPointerSpeed * 0.71) * 0.46,
    );
    const pointerTarget = isMobile || variant === "preview"
      ? autonomousPointer
      : state.pointer;
    material.current.uniforms.uPointer.value.lerp(
      reducedMotion ? neutralPointer : pointerTarget,
      reducedMotion ? 1 : GENERATIVE_FIELD_CONFIG.motion.pointerLerp,
    );

    wakePositions[0].lerp(
      reducedMotion ? neutralPointer : pointerTarget,
      reducedMotion ? 1 : GENERATIVE_FIELD_CONFIG.motion.wakeLerp,
    );
    for (let index = 1; index < wakePositions.length; index += 1) {
      wakePositions[index].lerp(
        wakePositions[index - 1],
        GENERATIVE_FIELD_CONFIG.motion.wakeLerp * (0.72 - index * 0.07),
      );
    }

    const colorEase = reducedMotion ? 1 : 1 - Math.exp(-delta * 1.6);
    material.current.uniforms.uColorA.value.lerp(targetPalette[0], colorEase);
    material.current.uniforms.uColorB.value.lerp(targetPalette[1], colorEase);
    material.current.uniforms.uColorC.value.lerp(targetPalette[2], colorEase);

    if (group.current) {
      const drift = GENERATIVE_FIELD_CONFIG.motion.groupDrift;
      group.current.rotation.y = Math.sin(elapsed * drift) * 0.12;
      group.current.rotation.x = Math.cos(elapsed * drift * 0.73) * 0.045;
      group.current.rotation.z = Math.sin(elapsed * drift * 0.47) * 0.025;
    }

    if (onTelemetry && elapsed - telemetryClock.current > 0.24) {
      telemetryClock.current = elapsed;
      const pointerEnergy = pointerTarget.length();
      onTelemetry({
        coherence: Math.round(86 - chapter * 7 + Math.sin(elapsed * 0.42) * 4),
        energy: Math.round(42 + chapter * 11 + pointerEnergy * 18),
        wake: Math.round((wakePositions[0].distanceTo(wakePositions[4]) + 0.06) * 100),
      });
    }
  });

  return (
    <group
      ref={group}
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

    const filamentCount = 12;
    const filament = index % filamentCount;
    const filamentLength = Math.ceil(count / filamentCount);
    const filamentT = Math.floor(index / filamentCount) /
      Math.max(1, filamentLength - 1);
    const filamentAngle =
      filamentT * fullTurn * 2.35 + (filament / filamentCount) * fullTurn;
    const filamentRadius =
      1.02 + Math.sin(filamentT * fullTurn * 3 + randomA) * 0.28;
    sphere[offset] = Math.cos(filamentAngle) * filamentRadius;
    sphere[offset + 1] = (filamentT - 0.5) * 4.8;
    sphere[offset + 2] =
      Math.sin(filamentAngle) * filamentRadius * 0.82 +
      (randomB - 0.5) * 0.08;

    const streamCount = 42;
    const stream = index % streamCount;
    const streamLength = Math.ceil(count / streamCount);
    const streamT = Math.floor(index / streamCount) /
      Math.max(1, streamLength - 1);
    const streamX = (streamT - 0.5) * 7.8;
    const streamBand = (stream / Math.max(1, streamCount - 1) - 0.5) * 4.1;
    wave[offset] = streamX + (randomA - 0.5) * 0.035;
    wave[offset + 1] =
      streamBand * 0.68 + Math.sin(streamX * 0.72 + streamBand * 1.18) * 0.34;
    wave[offset + 2] =
      Math.sin(streamX * 1.06 + streamBand * 1.87) * 0.48 +
      (randomB - 0.5) * 0.06;

    const ringCount = 28;
    const ring = index % ringCount;
    const ringLength = Math.ceil(count / ringCount);
    const ringT = Math.floor(index / ringCount) /
      Math.max(1, ringLength - 1);
    const portalAngle = ringT * fullTurn + randomA * 0.015;
    const portalRadius = 1.15 + (ring / Math.max(1, ringCount - 1)) * 1.42;
    const portalRipple = Math.sin(portalAngle * 3 + ring * 0.53) * 0.17;
    portal[offset] = Math.cos(portalAngle) * (portalRadius + portalRipple);
    portal[offset + 1] = Math.sin(portalAngle) * (portalRadius + portalRipple) * 0.92;
    portal[offset + 2] =
      Math.sin(portalAngle * 3 + ring * 0.47) * 0.58 +
      (ring / Math.max(1, ringCount - 1) - 0.5) * 0.52;

    const memoryCount = 18;
    const memoryStrand = index % memoryCount;
    const memoryLength = Math.ceil(count / memoryCount);
    const memoryT = Math.floor(index / memoryCount) /
      Math.max(1, memoryLength - 1);
    const memoryAngle =
      memoryT * fullTurn * (1.35 + (memoryStrand % 3) * 0.18) +
      (memoryStrand / memoryCount) * fullTurn;
    const memoryRadius = 0.34 + memoryT * 2.75;
    bloom[offset] = Math.cos(memoryAngle) * memoryRadius;
    bloom[offset + 1] =
      (memoryT - 0.5) * 3.7 + Math.sin(memoryAngle * 2) * 0.28;
    bloom[offset + 2] =
      Math.sin(memoryAngle) * memoryRadius * 0.5 +
      (randomC - 0.5) * 0.12;
  }

  return { bloom, motion, portal, sphere, wave };
}

function hash(value: number) {
  return Math.abs(Math.sin(value * 127.1) * 43758.5453) % 1;
}
