"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";
import { GUIDE_SPIRITS, type GuideSpiritConfig } from "./guide-spirit-config";
import { PARTICLE_CHAPTER_DYNAMICS, PARTICLE_FIELD_PERFORMANCE } from "./particle-chapter-config";

const MOUNTAIN_WIDTH = 28;
const MOUNTAIN_DEPTH = 22;
const MOUNTAIN_NOISE = new ImprovedNoise();
const OCEAN_WIDTH = 24;
const OCEAN_DEPTH = 16.8;
const GRASS_WIDTH = 21.2;
const GRASS_DEPTH = 14.2;

export type ParticlePointerSignal = {
  down: boolean;
  energy: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

type ParticleStoryFieldProps = {
  chapter: number;
  echo: MutableRefObject<number>;
  entryOrigin: MutableRefObject<{ x: number; y: number }>;
  pointer: MutableRefObject<ParticlePointerSignal>;
  reducedMotion: boolean;
  spiritIndex: number;
};

const PARTICLE_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute vec3 aSociety;
  attribute vec3 aOcean;
  attribute vec3 aGrass;
  attribute vec3 aNebula;
  attribute vec3 aDna;
  attribute float aAlpha;
  attribute float aBand;
  attribute float aBladePhase;
  attribute float aDnaKind;
  attribute float aPhase;
  attribute float aScale;
  attribute float aSeed;
  attribute float aLocal;

  uniform float uAspect;
  uniform float uAmplitude;
  uniform float uDepthResponse;
  uniform float uEcho;
  uniform float uEnergy;
  uniform float uFrequency;
  uniform float uFromChapter;
  uniform float uGuideMode;
  uniform float uIntro;
  uniform float uMorph;
  uniform float uPixelRatio;
  uniform float uPointerForce;
  uniform float uPointerRadius;
  uniform float uPress;
  uniform float uSpeed;
  uniform float uStageScale;
  uniform float uTime;
  uniform float uToChapter;
  uniform vec2 uEchoOrigin;
  uniform vec2 uEntryOrigin;
  uniform vec2 uPointer;
  uniform vec2 uStageOffset;
  uniform vec2 uVelocity;

  varying float vAlpha;
  varying float vBand;
  varying float vDepth;
  varying float vGlow;
  varying float vFeature;
  varying float vSpark;

  float hash31(vec3 point) {
    point = fract(point * 0.1031);
    point += dot(point, point.yzx + 33.33);
    return fract((point.x + point.y) * point.z);
  }

  float noise3(vec3 point) {
    vec3 cell = floor(point);
    vec3 local = fract(point);
    local = local * local * (3.0 - 2.0 * local);
    float n000 = hash31(cell);
    float n100 = hash31(cell + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(cell + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(cell + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(cell + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(cell + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(cell + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(cell + vec3(1.0, 1.0, 1.0));
    float lower = mix(mix(n000, n100, local.x), mix(n010, n110, local.x), local.y);
    float upper = mix(mix(n001, n101, local.x), mix(n011, n111, local.x), local.y);
    return mix(lower, upper, local.z);
  }

  float fbm3(vec3 point) {
    float sum = 0.0;
    float amplitude = 0.55;
    for (int index = 0; index < 2; index++) {
      sum += noise3(point) * amplitude;
      point = point.yzx * 2.07 + vec3(3.2, 1.7, 4.1);
      amplitude *= 0.48;
    }
    return sum;
  }

  vec3 scenePosition(float scene) {
    if (scene < 0.5) return position;
    if (scene < 1.5) return aSociety;
    if (scene < 2.5) return aOcean;
    if (scene < 3.5) return aGrass;
    if (scene < 4.5) return aNebula;
    return aDna;
  }

  float easeInOut(float value) {
    return value * value * (3.0 - 2.0 * value);
  }

  vec3 gerstnerWave(vec2 point, vec2 direction, float frequency, float speed, float amplitude, float steepness, float waveTime) {
    float phase = dot(point, direction) * frequency - waveTime * speed;
    float orbit = cos(phase) * amplitude * steepness;
    return vec3(direction.x * orbit, sin(phase) * amplitude, direction.y * orbit);
  }

  float chapterAmplitude(float scene) {
    if (scene < 0.5) return 0.16;
    if (scene < 1.5) return 0.07;
    if (scene < 2.5) return 0.025;
    if (scene < 3.5) return 0.018;
    if (scene < 4.5) return 0.085;
    return 0.03;
  }

  void main() {
    float morph = clamp(uMorph, 0.0, 1.0);
    float releasePhase = smoothstep(0.0, 0.46, morph);
    float adoptPhase = smoothstep(0.46, 1.0, morph);
    vec3 fromPosition = scenePosition(uFromChapter);
    vec3 toPosition = scenePosition(uToChapter);
    vec3 released = mix(fromPosition, position, releasePhase);
    vec3 transformed = mix(released, toPosition, adoptPhase);
    float scene = mix(uFromChapter, uToChapter, step(0.5, adoptPhase));
    float chapter = floor(scene + 0.5);
    float feature = 0.0;

    float time = uTime * uSpeed * (0.17 + aSeed * 0.035);
    if (chapter < 0.5) {
      float mountainSurface = 1.0 - step(0.64, aSeed);
      float mountainMass = step(0.64, aSeed) * (1.0 - step(0.85, aSeed));
      float mountainDebris = step(0.85, aSeed) * (1.0 - step(0.95, aSeed));
      float mountainMist = step(0.95, aSeed);
      float mountainDepth = clamp((transformed.z + 11.0) / 22.0, 0.0, 1.0);
      float mountainRate = mix(0.64, 0.24, mountainDepth) + aSeed * 0.07;
      float mountainBreath = sin(uTime * uSpeed * mountainRate + transformed.x * 0.24 + aPhase * 0.08);
      float ridgeDrift = cos(uTime * 0.17 + transformed.z * 0.42 + transformed.x * 0.09);
      float geologicPulse = sin(uTime * 0.032 + transformed.x * 0.075 - transformed.z * 0.052);
      transformed.y += mountainSurface * (
        mountainBreath * 0.032
        + ridgeDrift * (0.012 + mountainDepth * 0.016)
      );
      transformed.y += mountainMass * geologicPulse * (0.005 + mountainDepth * 0.007);
      transformed.x += mountainDebris * sin(uTime * (0.13 + aSeed * 0.08) + aPhase) * 0.07;
      transformed.y += mountainDebris * (
        sin(uTime * (0.2 + aSeed * 0.12) + aPhase) * 0.1
        + geologicPulse * 0.025
      );
      transformed.x += mountainMist * sin(uTime * 0.16 + aPhase + transformed.z * 0.21) * 0.24;
      transformed.y += mountainMist * sin(uTime * 0.22 + aPhase) * 0.18;
      transformed.z += mountainMist * sin(uTime * 0.11 + aPhase * 0.7) * 0.62;
      float contour = smoothstep(0.86, 0.99, abs(sin((transformed.y + 2.8) * 6.4)));
      float peakLight = smoothstep(-1.2, 2.4, transformed.y);
      feature = max(peakLight * (mountainSurface + mountainDebris), contour * mountainSurface * 0.48);
    } else if (chapter < 1.5) {
      float societyTime = uTime * uSpeed * 0.24;
      float socialEpochTime = societyTime * (0.34 + aSeed * 0.08) + aSeed * 3.0;
      float socialEpoch = floor(socialEpochTime);
      float socialEpochBlend = smoothstep(0.12, 0.88, fract(socialEpochTime));
      vec3 socialDriftA = vec3(
        hash31(vec3(socialEpoch, aSeed * 37.0, aPhase)),
        hash31(vec3(aSeed * 53.0, socialEpoch + 11.0, aPhase)),
        hash31(vec3(aPhase, aSeed * 71.0, socialEpoch + 23.0))
      ) - 0.5;
      vec3 socialDriftB = vec3(
        hash31(vec3(socialEpoch + 1.0, aSeed * 37.0, aPhase)),
        hash31(vec3(aSeed * 53.0, socialEpoch + 12.0, aPhase)),
        hash31(vec3(aPhase, aSeed * 71.0, socialEpoch + 24.0))
      ) - 0.5;
      float splitWave = sin(societyTime * (1.2 + aSeed * 1.6) + aPhase + aBand * 3.4);
      float civicCycle = 0.95 + sin(societyTime * 0.37 + aBand * 2.1) * 0.055;
      vec2 splitDirection = normalize(vec2(cos(aPhase), sin(aPhase)) + vec2(0.001));
      transformed.xy *= civicCycle;
      transformed += mix(socialDriftA, socialDriftB, socialEpochBlend) * vec3(0.24, 0.2, 0.32);
      transformed.xy += splitDirection * splitWave * (0.035 + aSeed * 0.052);
      transformed.z += cos(societyTime * (0.82 + aSeed * 1.18) + aPhase) * (0.03 + aSeed * 0.045);
      float civicEvent = step(0.86, hash31(vec3(socialEpoch, aSeed * 101.0, aBand)))
        * pow(sin(fract(socialEpochTime) * 3.14159265), 6.0);
      transformed += normalize(socialDriftB + vec3(0.001)) * civicEvent * 0.18;
      feature = max(civicEvent, 0.5 + 0.5 * sin(societyTime * (0.62 + aSeed * 0.84) + aSeed * 5.4));
    } else if (chapter > 1.5 && chapter < 2.5) {
      float oceanDepth = clamp((transformed.z + 8.4) / 16.8, 0.0, 1.0);
      float oceanTime = uTime * uSpeed;
      float tide = 0.88 + sin(oceanTime * 0.072) * 0.12;
      float storm = 0.86 + sin(oceanTime * 0.041 + 1.4) * 0.14;
      vec2 waterPoint = transformed.xz;
      vec2 directionA = normalize(vec2(0.98, 0.2));
      vec2 directionB = normalize(vec2(0.9, 0.44));
      vec2 directionC = normalize(vec2(-0.28, 0.96));
      vec2 directionD = normalize(vec2(0.84, 0.54));
      vec3 swellA = gerstnerWave(waterPoint, directionA, 0.54, mix(0.92, 0.58, oceanDepth), 0.31 * tide, 0.68, oceanTime);
      vec3 swellB = gerstnerWave(waterPoint, directionB, 0.86, 0.74, 0.16 * storm, 0.5, oceanTime + 1.7);
      vec3 crossSea = gerstnerWave(waterPoint, directionC, 1.58, 1.24, 0.072, 0.36, oceanTime + 0.8);
      vec3 shortWave = gerstnerWave(waterPoint, directionD, 2.76, 1.92 + aSeed * 0.24, 0.028, 0.24, oceanTime + aPhase * 0.04);
      transformed += swellA + swellB + crossSea + shortWave;
      float crestA = sin(dot(waterPoint, directionA) * 0.54 - oceanTime * mix(0.92, 0.58, oceanDepth));
      float crestB = sin(dot(waterPoint, directionB) * 0.86 - (oceanTime + 1.7) * 0.74);
      float crestC = sin(dot(waterPoint, directionC) * 1.58 - (oceanTime + 0.8) * 1.24);
      float crestSignal = crestA * 0.62 + crestB * 0.27 + crestC * 0.11;
      float breakingCrest = smoothstep(0.62, 0.94, crestSignal) * (0.72 + storm * 0.28);
      float foamSeed = smoothstep(0.78, 0.98, aSeed);
      float spray = breakingCrest * foamSeed;
      transformed.y += breakingCrest * 0.04 + spray * (0.12 + 0.06 * sin(oceanTime * 3.1 + aPhase));
      transformed.xz += directionA * spray * (0.06 + aSeed * 0.08);
      transformed.x += sin(oceanTime * 0.18 + transformed.z * 0.13) * 0.018;
      feature = max(breakingCrest, spray * 1.45);
    } else if (chapter > 2.5 && chapter < 3.5) {
      float grassTip = pow(aLocal, 1.7);
      float bladeRate = 0.72 + fract(sin(aBladePhase * 8.13) * 43758.54) * 0.92;
      float gustFront = smoothstep(-0.45, 0.55, sin(uTime * 0.21 - transformed.x * 0.1 + transformed.z * 0.075));
      float gust = sin(uTime * uSpeed * bladeRate + transformed.x * 0.42 + transformed.z * 0.31 + aBladePhase) * mix(0.52, 1.28, gustFront);
      float secondGust = cos(uTime * uSpeed * (0.58 + bladeRate * 0.36) - transformed.x * 0.18 + transformed.z * 0.5);
      float groundWave = sin(uTime * 0.48 - transformed.x * 0.23 + transformed.z * 0.8) * 0.08;
      transformed.x += (gust * 0.38 + secondGust * 0.15 + groundWave) * grassTip;
      transformed.z += secondGust * (0.08 + bladeRate * 0.04) * grassTip;
      feature = grassTip;
    } else if (chapter > 4.5) {
      float orbitWeight = smoothstep(0.46, 0.84, aDnaKind);
      float coreWeight = 1.0 - smoothstep(0.18, 0.52, aDnaKind);
      float orbitRate = 0.08 + aBand * 0.11 + aSeed * 0.018;
      float orbitSpin = uTime * uSpeed * orbitRate;
      float epoch = 0.82 + sin(uTime * 0.046 + aBand * 2.4) * 0.18;
      float precession = orbitSpin * (0.42 + aBand * 0.28) * epoch + sin(uTime * 0.14 + aPhase) * 0.025;
      vec3 orbitPosition = transformed;
      orbitPosition.xz = mat2(cos(orbitSpin), -sin(orbitSpin), sin(orbitSpin), cos(orbitSpin)) * orbitPosition.xz;
      orbitPosition.xy = mat2(cos(precession), -sin(precession), sin(precession), cos(precession)) * orbitPosition.xy;
      transformed = mix(transformed, orbitPosition, orbitWeight);
      transformed *= 1.0 + coreWeight * sin(uTime * 0.72 + aPhase) * 0.035;
      transformed.z += sin(uTime * (0.22 + aBand * 0.08) + aPhase) * (0.012 + orbitWeight * 0.022);
      feature = aDnaKind;
    } else if (chapter > 3.5) {
      float nebulaRadius = length(transformed.xy);
      float nebulaRate = mix(0.16, 0.018, smoothstep(0.2, 6.8, nebulaRadius)) + aSeed * 0.012;
      float nebulaSpin = uTime * uSpeed * nebulaRate;
      transformed.xy = mat2(cos(nebulaSpin), -sin(nebulaSpin), sin(nebulaSpin), cos(nebulaSpin)) * transformed.xy;
      float stellarBreath = 1.0 + sin(uTime * 0.055 + nebulaRadius * 0.21) * mix(0.045, 0.012, smoothstep(0.0, 6.8, nebulaRadius));
      transformed.xy *= stellarBreath;
      transformed.z += sin(uTime * (0.24 + aSeed * 0.32) + aPhase + nebulaRadius * 0.46) * (0.045 + nebulaRadius * 0.018);
      feature = smoothstep(2.4, 0.12, length(transformed.xy));
    }
    vec3 safeDirection = normalize(transformed + vec3(0.0001));
    float macroNoise = chapter < 3.5
      ? fbm3(safeDirection * uFrequency + transformed * 0.12 + vec3(time, -time * 0.73, time * 0.51))
      : 0.5 + 0.5 * sin(dot(transformed, vec3(0.72, -0.58, 0.91)) + time * 0.84 + aPhase);
    float microNoise = 0.5 + 0.5 * sin(
      dot(transformed, vec3(1.83, -1.27, 1.46)) + time * 2.18 + aPhase * 1.31
    );
    float organism = (macroNoise - 0.49) * chapterAmplitude(scene) * uAmplitude * 3.2 * (1.0 + uEnergy * 0.46);
    vec3 organismDrift = vec3(
      microNoise - 0.5,
      sin(dot(transformed.yzx, vec3(1.16, 1.71, -1.24)) + time * 1.37 + aPhase) * 0.5,
      cos(dot(transformed.zxy, vec3(-1.42, 1.08, 1.63)) - time * 1.12 + aPhase * 0.76) * 0.5
    );
    float breath = sin(time * 3.1 + aPhase + length(transformed) * 0.72) * (0.018 + uEnergy * 0.012);
    transformed += safeDirection * organism;
    float driftWeight = chapter > 4.5 ? 0.22 : (chapter > 2.5 && chapter < 3.5 ? 0.14 : (chapter > 1.5 && chapter < 2.5 ? 0.46 : 1.0));
    float breathWeight = chapter > 4.5 ? 0.12 : (chapter > 2.5 && chapter < 3.5 ? 0.08 : (chapter > 1.5 && chapter < 2.5 ? 0.34 : 1.0));
    transformed += organismDrift * (0.065 + uEnergy * 0.045) * driftWeight;
    transformed *= 1.0 + breath * breathWeight;
    transformed *= uStageScale;
    transformed.xy += uStageOffset;

    float intro = smoothstep(0.0, 1.0, uIntro);
    vec2 entryPoint = uEntryOrigin * vec2(5.15, 3.05);
    vec3 entryScatter = vec3(cos(aPhase), sin(aPhase), aSeed - 0.5) * (0.12 + aSeed * 0.32);
    transformed = mix(vec3(entryPoint, 0.0) + entryScatter, transformed, intro);

    vec2 pointerPosition = uPointer * vec2(5.15, 3.05);
    vec2 delta = transformed.xy - pointerPosition;
    float distanceToPointer = max(length(delta), 0.001);
    float interaction = clamp(uEnergy * 1.5 + uPress, 0.0, 1.0);
    float field = exp(-distanceToPointer * distanceToPointer * uPointerRadius) * interaction;
    vec2 direction = delta / distanceToPointer;
    vec2 tangent = vec2(-direction.y, direction.x);
    float velocity = clamp(length(uVelocity), 0.0, 1.8);
    vec2 velocityDirection = normalize(uVelocity + vec2(0.0001));
    float wake = field * pow(abs(dot(direction, velocityDirection)), 3.0) * velocity;
    float release = 1.0 - uPress;
    if (chapter < 0.5) {
      float mountainSurface = 1.0 - step(0.64, aSeed);
      float mountainMass = step(0.64, aSeed) * (1.0 - step(0.85, aSeed));
      float mountainDebris = step(0.85, aSeed) * (1.0 - step(0.95, aSeed));
      float mountainMist = step(0.95, aSeed);
      float layerResponse = mountainSurface + mountainMass * 0.32 + mountainDebris * 1.42 + mountainMist * 1.78;
      float terrainLift = field * (0.18 + uEnergy * 0.58 + uPress * 0.42) * uPointerForce * layerResponse;
      transformed.y += terrainLift;
      transformed.x += direction.x * terrainLift * (0.12 + mountainDebris * 0.18 + mountainMist * 0.26);
      transformed.z += sin(distanceToPointer * 6.2 - uTime * 3.4) * field
        * (0.05 + mountainSurface * 0.07 + mountainMist * 0.24);
    } else if (chapter < 1.5) {
      transformed.xy += direction * field * (0.72 + velocity * 0.58) * release * uPointerForce;
      transformed.xy -= direction * field * uPress * (0.82 + velocity * 0.34) * uPointerForce;
      transformed.xy += tangent * field * uPress * 0.44 * sign(uVelocity.x + 0.001) * uPointerForce;
      transformed.z += field * (0.12 + uPress * 0.42) * uDepthResponse;
    } else if (chapter < 2.5) {
      float oceanWake = field * (0.22 + velocity * 1.08 + uPress * 0.22) * uPointerForce;
      transformed.y += sin(distanceToPointer * 7.4 - uTime * 5.6) * oceanWake * 0.38;
      transformed.x += velocityDirection.x * oceanWake * 0.28;
      transformed.z += wake * 0.62 * uDepthResponse;
    } else if (chapter < 3.5) {
      float grassBend = field * (0.16 + velocity * 0.46 + uPress * 1.02) * uPointerForce * pow(aLocal, 1.35);
      transformed.x += (velocityDirection.x * 0.72 + direction.x * 0.2) * grassBend;
      transformed.y -= grassBend * (0.2 + abs(velocityDirection.x) * 0.22);
      transformed.z += velocityDirection.y * grassBend * 0.28;
    } else if (chapter < 4.5) {
      float trace = field * (0.18 + velocity * 0.44) * uPointerForce;
      transformed.xy += tangent * trace * 0.36;
      transformed.z += trace * 0.28 * uDepthResponse;
    } else {
      float dnaTorque = field * (0.24 + velocity * 0.86 + uPress * 0.58) * uPointerForce;
      float twistDirection = sign(uVelocity.x + uVelocity.y * 0.35 + 0.001);
      float localTwist = dnaTorque * twistDirection * (0.24 + aDnaKind * 0.34);
      transformed.xy = mat2(cos(localTwist), -sin(localTwist), sin(localTwist), cos(localTwist)) * transformed.xy;
      transformed.yz = mat2(cos(localTwist * 0.48), -sin(localTwist * 0.48), sin(localTwist * 0.48), cos(localTwist * 0.48)) * transformed.yz;
      transformed.xy += tangent * dnaTorque * 0.12;
      transformed.z += sin(distanceToPointer * 5.4 - uTime * 2.4) * dnaTorque * 0.12 * uDepthResponse;
    }

    float guideCore = 1.0 - step(0.45, abs(uGuideMode));
    float guideStream = 1.0 - step(0.45, abs(uGuideMode - 1.0));
    float guideNetwork = 1.0 - step(0.45, abs(uGuideMode - 2.0));
    float guideEcho = 1.0 - step(0.45, abs(uGuideMode - 3.0));
    float guideDrift = 1.0 - step(0.45, abs(uGuideMode - 4.0));
    float guideField = exp(-distanceToPointer * distanceToPointer * mix(0.72, 0.34, guideDrift)) * interaction;
    float gather = guideField * guideCore * (0.34 + uPress * 0.82 + velocity * 0.16);
    transformed.xy -= direction * gather * uPointerForce;
    transformed.z += gather * (0.18 + uPress * 0.34) * uDepthResponse;

    float stream = guideField * guideStream * velocity * (0.32 + uPress * 0.28);
    transformed.xy += velocityDirection * stream * uPointerForce;
    transformed.z += sin(distanceToPointer * 9.0 - uTime * 7.2) * stream * 0.46 * uDepthResponse;

    float propagationWave = sin(distanceToPointer * 7.2 - uTime * 4.6 - aBand * 2.4);
    float propagation = guideField * guideNetwork * (0.24 + uPress * 0.62) * (0.35 + 0.65 * abs(propagationWave));
    transformed.xy += direction * propagationWave * propagation * uPointerForce;
    transformed.z += propagation * 0.38 * uDepthResponse;

    float guideDriftForce = guideField * guideDrift * (0.22 + uPress * 0.68 + uEnergy * 0.26);
    transformed.xy += tangent * guideDriftForce * (0.58 + velocity * 0.28) * uPointerForce;
    transformed.xy += direction * guideDriftForce * (0.16 + uPress * 0.34);
    transformed.z += cos(distanceToPointer * 4.8 - uTime * 2.1 + aPhase) * guideDriftForce * 0.52 * uDepthResponse;

    vec2 echoPosition = uEchoOrigin * vec2(5.15, 3.05);
    float echoDistance = length(transformed.xy - echoPosition) * 0.74;
    float echoMask = max(step(3.5, chapter), guideEcho);
    float echoRingPrimary = exp(-pow(echoDistance - uEcho * 5.8, 2.0) * 8.5);
    float echoRingDelay = exp(-pow(echoDistance - max(0.0, uEcho * 5.1 - 1.15), 2.0) * 10.5) * guideEcho;
    float echoRingLate = exp(-pow(echoDistance - max(0.0, uEcho * 4.4 - 2.05), 2.0) * 13.0) * guideEcho;
    float echoRing = (echoRingPrimary + echoRingDelay * 0.72 + echoRingLate * 0.48) * (1.0 - uEcho) * echoMask;
    transformed.xy += normalize(transformed.xy - echoPosition + vec2(0.001)) * echoRing * 0.58;
    transformed.z += echoRing * 0.52;

    if (chapter < 0.5) {
      float contourFlow = sin(transformed.x * 0.76 + transformed.z * 0.52 + uTime * 0.18 + aPhase * 0.05);
      transformed.y += contourFlow * (0.014 + 0.014 * aSeed);
    }

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    float depthScale = 8.2 / max(1.8, -viewPosition.z);
    float pulse = 0.5 + 0.5 * sin(uTime * (0.62 + aSeed * 1.4) + aPhase + macroNoise * 7.0);
    float spark = smoothstep(0.86, 1.0, pulse + (microNoise - 0.5) * 0.3) * smoothstep(0.58, 1.0, aSeed);
    float mountainPoint = 1.0 - step(0.5, chapter);
    float grassPoint = step(2.5, chapter) * (1.0 - step(3.5, chapter));
    float oceanPoint = step(1.5, chapter) * (1.0 - step(2.5, chapter));
    float societyPoint = step(0.5, chapter) * (1.0 - step(1.5, chapter));
    float nebulaPoint = step(3.5, chapter) * (1.0 - step(4.5, chapter));
    float spiralPoint = step(4.5, chapter);
    float mountainSurfacePoint = 1.0 - step(0.64, aSeed);
    float mountainMassPoint = step(0.64, aSeed) * (1.0 - step(0.85, aSeed));
    float mountainDebrisPoint = step(0.85, aSeed) * (1.0 - step(0.95, aSeed));
    float mountainMistPoint = step(0.95, aSeed);
    float mountainLayerSize = mountainSurfacePoint * 0.54
      + mountainMassPoint * 0.22
      + mountainDebrisPoint * 1.04
      + mountainMistPoint * 0.42;
    float scenePointBoost = mountainPoint * (mountainLayerSize + feature * 0.62) + societyPoint * (0.26 + feature * 0.32) + oceanPoint * (0.62 + feature * 0.74) + grassPoint * pow(aLocal, 2.4) * 1.32 + nebulaPoint * (0.34 + feature * 0.62) + spiralPoint * (0.24 + aDnaKind * 0.38);
    float activeSize = (0.92 + aScale * 2.8) + field * (1.3 + velocity * 0.84) + echoRing * 2.45 + spark * 1.08 + feature * (0.88 + societyPoint * 0.54) + scenePointBoost;
    gl_PointSize = clamp(
      activeSize * depthScale * uPixelRatio,
      0.38 * uPixelRatio,
      mix(9.6, 6.4, mountainPoint) * uPixelRatio
    );
    float depthFade = smoothstep(27.0, 6.0, -viewPosition.z) * smoothstep(1.6, 4.2, -viewPosition.z);
    float atmosphericDepth = smoothstep(0.0, 1.0, clamp((-viewPosition.z - 4.0) / 17.0, 0.0, 1.0));
    float mountainLayerAlpha = mountainSurfacePoint * 0.84
      + mountainMassPoint * 0.34
      + mountainDebrisPoint * 0.96
      + mountainMistPoint * 0.26;
    float sceneAlphaBoost = 1.0 + mountainPoint * (mountainLayerAlpha * (0.48 + atmosphericDepth * 0.22) + feature * 0.16) + societyPoint * (0.16 + feature * 0.16) + oceanPoint * (0.32 + feature * 0.26) + grassPoint * pow(aLocal, 2.2) * 0.48 + nebulaPoint * 0.36 + spiralPoint * 0.3;
    float spiralLegibility = mix(1.0, 0.18 + aDnaKind * 0.82, spiralPoint);
    float depthAttenuation = mix(1.18, mix(0.42, 0.68, mountainPoint), atmosphericDepth);
    vAlpha = aAlpha * depthFade * (0.78 + pulse * 0.22) * depthAttenuation * sceneAlphaBoost * spiralLegibility;
    vBand = aBand;
    vDepth = atmosphericDepth;
    vFeature = feature;
    vGlow = field * 0.65 + wake * 0.4 + echoRing + spark * 0.66 + uEnergy * 0.15 + feature * 0.18;
    vSpark = spark;
  }
`;

const PARTICLE_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform vec3 uColorD;

  varying float vAlpha;
  varying float vBand;
  varying float vDepth;
  varying float vGlow;
  varying float vFeature;
  varying float vSpark;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float core = 1.0 - smoothstep(0.015, 0.13, radius);
    float body = 1.0 - smoothstep(0.31, 0.495, radius);
    float halo = 1.0 - smoothstep(0.22, 0.5, radius);
    if (body < 0.004) discard;

    vec3 color = uColorA;
    if (vBand > 0.74) color = uColorD;
    else if (vBand > 0.49) color = uColorC;
    else if (vBand > 0.24) color = uColorB;

    float focus = mix(0.82, 1.0, 1.0 - vDepth);
    color = mix(color * focus, uColorC, clamp(vGlow * 0.14 + vSpark * 0.24 + vFeature * 0.07, 0.0, 0.38));
    color = mix(color, uColorD, vDepth * 0.24);
    float alpha = (core * 0.32 + body * 0.94 + halo * (0.035 + vGlow * 0.075)) * vAlpha * (0.94 + vGlow * 0.5 + vFeature * 0.12);
    gl_FragColor = vec4(color, alpha);
    #include <colorspace_fragment>
  }
`;

const SOCIETY_PARTICLE_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute vec3 aNext;
  attribute vec3 aNext2;
  attribute float aRole;
  attribute float aSeed;

  uniform float uPixelRatio;
  uniform float uTime;
  uniform float uVisibility;

  varying float vAlpha;
  varying float vRole;
  varying float vSpark;

  float hash11(float value) {
    value = fract(value * 0.1031);
    value *= value + 33.33;
    value *= value + value;
    return fract(value);
  }

  vec3 epochOffset(float epoch, float seed) {
    return vec3(
      hash11(epoch * 17.17 + seed * 91.7),
      hash11(epoch * 31.73 + seed * 47.3),
      hash11(epoch * 53.11 + seed * 29.9)
    ) - 0.5;
  }

  void main() {
    float epochTime = uTime * (0.072 + aSeed * 0.012) + aSeed * 2.7;
    float epoch = floor(epochTime);
    float epochPhase = fract(epochTime);
    float migration = smoothstep(0.16, 0.86, epochPhase);
    float state = mod(epoch, 3.0);
    vec3 source = position;
    vec3 target = aNext;
    if (state > 0.5 && state < 1.5) {
      source = aNext;
      target = aNext2;
    } else if (state > 1.5) {
      source = aNext2;
      target = position;
    }
    vec3 sourceOffset = epochOffset(epoch, aSeed) * vec3(0.68, 0.52, 0.74);
    vec3 targetOffset = epochOffset(epoch + 1.0, aSeed) * vec3(0.68, 0.52, 0.74);
    float migrationRole = mix(0.72, 0.94, aRole);
    vec3 transformed = mix(source + sourceOffset, target + targetOffset, migration * migrationRole);

    float lifecyclePhase = fract(uTime * (0.043 + hash11(aSeed * 77.0) * 0.036) + aSeed * 4.3);
    float birth = smoothstep(0.0, 0.16, lifecyclePhase);
    float decay = 1.0 - smoothstep(0.68, 1.0, lifecyclePhase);
    float epochPresence = smoothstep(0.1, 0.34, hash11(epoch * 7.3 + aSeed * 113.0));
    float lifecycle = mix(0.04, birth * decay, epochPresence);
    float localOrbit = uTime * (0.14 + hash11(aSeed * 41.0) * 0.24) + aSeed * 12.0;
    float localRadius = (0.018 + lifecycle * 0.075) * (1.0 - aRole * 0.46);
    transformed.xy += vec2(cos(localOrbit), sin(localOrbit * (0.61 + aSeed * 0.46))) * localRadius;
    transformed.z += sin(localOrbit * (0.48 + aSeed * 0.36)) * (0.026 + aRole * 0.052);
    float rupture = pow(max(0.0, sin(epochPhase * 3.14159265)), 8.0) * step(0.82, hash11(epoch * 19.0 + aSeed * 157.0));
    transformed += normalize(epochOffset(epoch + 2.0, aSeed) + vec3(0.001)) * rupture * (0.18 + aSeed * 0.42);

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float depthScale = 8.4 / max(2.2, -viewPosition.z);
    float generationSpark = max(rupture, smoothstep(0.82, 1.0, sin(lifecyclePhase * 6.2831853) * 0.5 + 0.5));
    float pointSize = 1.35 + aSeed * 2.35 + generationSpark * 1.65 + (1.0 - aRole) * 0.82;
    gl_PointSize = clamp(pointSize * depthScale * uPixelRatio, 1.15 * uPixelRatio, 7.2 * uPixelRatio);
    vAlpha = uVisibility * lifecycle * mix(0.62, 0.38, aRole);
    vRole = aRole;
    vSpark = generationSpark;
  }
`;

const SOCIETY_PARTICLE_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec3 uBrightColor;
  uniform vec3 uColor;

  varying float vAlpha;
  varying float vRole;
  varying float vSpark;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float body = 1.0 - smoothstep(0.22, 0.5, radius);
    float core = 1.0 - smoothstep(0.0, 0.12, radius);
    if (body < 0.005) discard;
    vec3 color = mix(uColor, uBrightColor, 0.24 + core * 0.48 + vSpark * 0.22 - vRole * 0.08);
    gl_FragColor = vec4(color, (body * 0.82 + core * 0.3) * vAlpha);
    #include <colorspace_fragment>
  }
`;

const GRASS_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute float aGrassPhase;
  attribute float aProgress;

  uniform float uPress;
  uniform float uEnergy;
  uniform float uGuideMode;
  uniform float uTime;
  uniform float uVisibility;
  uniform vec2 uLocalPointer;
  uniform vec2 uVelocity;

  varying float vAlpha;

  void main() {
    vec3 transformed = position;
    float tip = pow(aProgress, 1.7);
    float bladeRate = 0.72 + fract(sin(aGrassPhase * 8.13) * 43758.54) * 0.92;
    float gustFront = smoothstep(-0.45, 0.55, sin(uTime * 0.21 - transformed.x * 0.1 + transformed.z * 0.075));
    float gust = sin(uTime * bladeRate + transformed.x * 0.42 + transformed.z * 0.31 + aGrassPhase) * mix(0.52, 1.28, gustFront);
    float crossGust = cos(uTime * (0.58 + bladeRate * 0.36) - transformed.x * 0.18 + transformed.z * 0.5);
    transformed.x += (gust * 0.38 + crossGust * 0.15) * tip;
    transformed.z += crossGust * (0.08 + bladeRate * 0.04) * tip;

    vec2 delta = transformed.xy - uLocalPointer;
    float distanceToPointer = max(length(delta), 0.001);
    float field = exp(-distanceToPointer * distanceToPointer * 0.8) * uPress;
    float activeField = exp(-distanceToPointer * distanceToPointer * 0.52) * clamp(uPress + uEnergy * 0.72, 0.0, 1.0);
    vec2 direction = delta / distanceToPointer;
    vec2 tangent = vec2(-direction.y, direction.x);
    vec2 velocityDirection = normalize(uVelocity + vec2(0.0001));
    transformed.x += velocityDirection.x * field * tip * 0.72;
    transformed.y -= field * tip * (0.18 + abs(velocityDirection.x) * 0.2);
    transformed.z += velocityDirection.y * field * tip * 0.26;

    if (uGuideMode < 0.5) {
      transformed.x -= direction.x * activeField * tip * (0.38 + uPress * 0.42);
      transformed.y -= activeField * tip * (0.16 + uPress * 0.26);
    } else if (uGuideMode < 1.5) {
      transformed.x += velocityDirection.x * activeField * tip * 0.72;
      transformed.z += velocityDirection.y * activeField * tip * 0.48;
    } else if (uGuideMode < 2.5) {
      float branchWave = sin(distanceToPointer * 7.0 - uTime * 4.2 + aGrassPhase);
      transformed.x += direction.x * branchWave * activeField * tip * 0.44;
      transformed.y += abs(branchWave) * activeField * tip * 0.18;
    } else if (uGuideMode < 3.5) {
      float delayedWave = sin(distanceToPointer * 8.5 - uTime * 3.1) * 0.5 + sin(distanceToPointer * 5.2 - uTime * 2.0) * 0.5;
      transformed.x += direction.x * delayedWave * activeField * tip * 0.42;
    } else {
      transformed.x += tangent.x * activeField * tip * 0.58;
      transformed.z += tangent.y * activeField * tip * 0.4;
      transformed.y += direction.x * activeField * tip * 0.14;
    }

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float depthFade = smoothstep(18.0, 4.0, -viewPosition.z);
    vAlpha = uVisibility * depthFade * (0.024 + aProgress * 0.22);
  }
`;

const GRASS_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
    #include <colorspace_fragment>
  }
`;

const GRASS_FLUFF_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute float aFluffPhase;
  attribute float aFluffScale;
  attribute float aFluffSeed;

  uniform float uEnergy;
  uniform float uGuideMode;
  uniform float uPixelRatio;
  uniform float uTime;
  uniform float uVisibility;
  uniform vec2 uLocalPointer;
  uniform vec2 uVelocity;

  varying float vAlpha;
  varying float vAngle;
  varying float vTwinkle;

  void main() {
    vec3 transformed = position;
    float speed = clamp(length(uVelocity) * 1.85, 0.0, 1.0);
    float activation = smoothstep(0.04, 0.5, uEnergy * 0.94 + speed);
    float cycle = fract(uTime * (0.058 + aFluffSeed * 0.042) + aFluffPhase);
    vec2 rootDelta = transformed.xy - uLocalPointer;
    float rootDistance = length(rootDelta);
    float localWake = exp(-rootDistance * rootDistance * 0.13);
    float lift = activation * localWake;
    vec2 velocityDirection = normalize(uVelocity + vec2(0.0001));
    vec2 rootDirection = normalize(rootDelta + vec2(0.0001));
    vec2 tangent = vec2(-rootDirection.y, rootDirection.x);
    float arc = sin(cycle * 3.14159265);

    transformed.y += cycle * (1.55 + aFluffSeed * 2.8) * lift;
    transformed.x += sin(cycle * 9.0 + aFluffPhase * 6.283) * (0.14 + aFluffSeed * 0.34) * lift;
    transformed.z += cos(cycle * 7.0 + aFluffPhase * 4.0) * (0.1 + aFluffSeed * 0.22) * lift;

    if (uGuideMode < 0.5) {
      transformed.xy -= rootDirection * lift * arc * 0.22;
    } else if (uGuideMode < 1.5) {
      transformed.xy += velocityDirection * lift * cycle * (0.7 + speed * 1.45);
    } else if (uGuideMode < 2.5) {
      transformed.y += sin(rootDistance * 5.4 - uTime * 3.2 + aFluffPhase) * lift * 0.28;
    } else if (uGuideMode < 3.5) {
      transformed.xy += rootDirection * sin(rootDistance * 4.8 - uTime * 2.2) * lift * 0.24;
    } else {
      transformed.xy += tangent * lift * cycle * (0.48 + aFluffSeed * 0.58);
    }

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float depthScale = 7.4 / max(2.2, -viewPosition.z);
    gl_PointSize = clamp((1.6 + aFluffScale * 3.8 + arc * 2.1) * depthScale * uPixelRatio, 1.0, 7.4 * uPixelRatio);
    float depthFade = smoothstep(20.0, 4.0, -viewPosition.z);
    vAlpha = uVisibility * lift * arc * depthFade * (0.22 + aFluffScale * 0.66);
    vAngle = aFluffPhase * 6.283 + uTime * (0.22 + aFluffSeed * 0.36);
    vTwinkle = arc;
  }
`;

const GRASS_FLUFF_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying float vAlpha;
  varying float vAngle;
  varying float vTwinkle;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float cosine = cos(vAngle);
    float sine = sin(vAngle);
    point = mat2(cosine, -sine, sine, cosine) * point;
    float lobeA = 1.0 - smoothstep(0.08, 0.25, length(point - vec2(0.15, 0.0)));
    float lobeB = 1.0 - smoothstep(0.08, 0.25, length(point + vec2(0.15, 0.0)));
    float seed = 1.0 - smoothstep(0.04, 0.12, length(point));
    float tuft = max(seed, max(lobeA, lobeB) * 0.76);
    if (tuft < 0.01) discard;
    gl_FragColor = vec4(uColor, tuft * vAlpha * (0.72 + vTwinkle * 0.28));
    #include <colorspace_fragment>
  }
`;

const SURFACE_LINE_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute float aLinePhase;
  attribute float aLineWeight;

  uniform float uEnergy;
  uniform float uMode;
  uniform float uPress;
  uniform float uTime;
  uniform float uVisibility;
  uniform vec2 uLocalPointer;
  uniform vec2 uVelocity;

  varying float vAlpha;

  vec3 gerstnerLineWave(vec2 point, vec2 direction, float frequency, float speed, float amplitude, float steepness, float waveTime) {
    float phase = dot(point, direction) * frequency - waveTime * speed;
    float orbit = cos(phase) * amplitude * steepness;
    return vec3(direction.x * orbit, sin(phase) * amplitude, direction.y * orbit);
  }

  void main() {
    vec3 transformed = position;
    vec2 delta = transformed.xy - uLocalPointer;
    float distanceToPointer = max(length(delta), 0.001);
    float interaction = clamp(uPress + uEnergy * 1.25, 0.0, 1.0);
    float field = exp(-distanceToPointer * distanceToPointer * (uMode < 0.5 ? 0.68 : 0.5)) * interaction;
    float feature = 0.0;

    if (uMode < 0.5) {
      float mountainDepth = clamp((transformed.z + 11.0) / 22.0, 0.0, 1.0);
      float lineRate = mix(0.72, 0.26, mountainDepth) + fract(sin(aLinePhase * 12.4) * 512.8) * 0.08;
      transformed.y += sin(uTime * lineRate + transformed.x * 0.24 + aLinePhase) * (0.026 + aLineWeight * 0.025);
      transformed.y += sin(uTime * 0.032 + transformed.x * 0.075 - transformed.z * 0.052) * (0.008 + mountainDepth * 0.012);
      transformed.y += field * (0.24 + uPress * 0.46);
      transformed.z += sin(distanceToPointer * 6.0 - uTime * 3.1) * field * 0.09;
      feature = smoothstep(-0.8, 2.0, transformed.y);
    } else {
      float oceanDepth = clamp((transformed.z + 8.4) / 16.8, 0.0, 1.0);
      float tide = 0.88 + sin(uTime * 0.072) * 0.12;
      float storm = 0.86 + sin(uTime * 0.041 + 1.4) * 0.14;
      vec2 waterPoint = transformed.xz;
      vec2 directionA = normalize(vec2(0.98, 0.2));
      vec2 directionB = normalize(vec2(0.9, 0.44));
      vec2 directionC = normalize(vec2(-0.28, 0.96));
      vec2 directionD = normalize(vec2(0.84, 0.54));
      transformed += gerstnerLineWave(waterPoint, directionA, 0.54, mix(0.92, 0.58, oceanDepth), 0.31 * tide, 0.68, uTime);
      transformed += gerstnerLineWave(waterPoint, directionB, 0.86, 0.74, 0.16 * storm, 0.5, uTime + 1.7);
      transformed += gerstnerLineWave(waterPoint, directionC, 1.58, 1.24, 0.072, 0.36, uTime + 0.8);
      transformed += gerstnerLineWave(waterPoint, directionD, 2.76, 1.92 + aLineWeight * 0.18, 0.028, 0.24, uTime + aLinePhase * 0.04);
      float crestA = sin(dot(waterPoint, directionA) * 0.54 - uTime * mix(0.92, 0.58, oceanDepth));
      float crestB = sin(dot(waterPoint, directionB) * 0.86 - (uTime + 1.7) * 0.74);
      float crestC = sin(dot(waterPoint, directionC) * 1.58 - (uTime + 0.8) * 1.24);
      float crestSignal = crestA * 0.62 + crestB * 0.27 + crestC * 0.11;
      float breakingCrest = smoothstep(0.62, 0.94, crestSignal);
      transformed.y += breakingCrest * (0.04 + aLineWeight * 0.028);
      vec2 velocityDirection = normalize(uVelocity + vec2(0.0001));
      float wake = field * (0.22 + min(1.8, length(uVelocity)) * 0.78);
      transformed.y += sin(distanceToPointer * 7.4 - uTime * 5.6) * wake * 0.32;
      transformed.x += velocityDirection.x * wake * 0.18;
      feature = breakingCrest;
    }

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float depthFade = uMode < 0.5
      ? smoothstep(34.0, 4.8, -viewPosition.z)
      : smoothstep(24.0, 4.0, -viewPosition.z);
    float baseAlpha = uMode < 0.5 ? 0.018 : 0.014;
    float weightedAlpha = aLineWeight * (uMode < 0.5 ? 0.068 : 0.038);
    float featureAlpha = feature * (uMode < 0.5 ? 0.088 : 0.1);
    vAlpha = uVisibility * depthFade * (baseAlpha + weightedAlpha + featureAlpha + field * 0.08);
  }
`;

const SURFACE_LINE_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
    #include <colorspace_fragment>
  }
`;

const STRUCTURE_LINE_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute float aLineKind;
  attribute float aLinePhase;
  attribute float aLineProgress;

  uniform float uMode;
  uniform float uEnergy;
  uniform float uGuideMode;
  uniform float uPress;
  uniform float uTime;
  uniform float uVisibility;
  uniform vec2 uLocalPointer;
  uniform vec2 uVelocity;

  varying float vAlpha;
  varying float vPulse;

  void main() {
    vec3 transformed = position;
    float pulse = 0.0;
    float structureLife = 1.0;

    if (uMode < 0.5) {
      float routeRate = 0.42 + fract(sin(aLinePhase * 17.13) * 43758.54) * 0.84;
      transformed.z += sin(uTime * routeRate + aLinePhase + aLineProgress * 6.283) * (0.025 + aLineKind * 0.055);
      pulse = pow(0.5 + 0.5 * sin(aLineProgress * 18.0 - uTime * routeRate * 4.2 + aLinePhase), 9.0);
      float routeGeneration = fract(uTime * 0.075 + aLinePhase * 0.13);
      structureLife = 0.2 + 0.8 * smoothstep(0.0, 0.18, routeGeneration) * (1.0 - smoothstep(0.68, 1.0, routeGeneration));
    } else if (uMode < 1.5) {
      float radius = length(transformed.xy);
      float streamRate = mix(0.15, 0.018, smoothstep(0.2, 7.2, radius)) * (0.72 + aLineKind * 0.52);
      float spin = uTime * streamRate;
      transformed.xy = mat2(cos(spin), -sin(spin), sin(spin), cos(spin)) * transformed.xy;
      transformed.z += sin(uTime * (0.22 + aLineKind * 0.18) + aLineProgress * 8.0 + aLinePhase) * (0.04 + radius * 0.016);
      pulse = pow(0.5 + 0.5 * sin(aLineProgress * 24.0 - uTime * (0.48 + aLineKind * 0.36) + aLinePhase), 7.0);
    } else if (uMode < 2.5) {
      float orbitRate = 0.07 + aLineKind * 0.12;
      float orbitSpin = uTime * orbitRate;
      float precession = orbitSpin * (0.46 + aLineKind * 0.24) + sin(uTime * 0.13 + aLinePhase) * 0.022;
      transformed.xz = mat2(cos(orbitSpin), -sin(orbitSpin), sin(orbitSpin), cos(orbitSpin)) * transformed.xz;
      transformed.xy = mat2(cos(precession), -sin(precession), sin(precession), cos(precession)) * transformed.xy;
      pulse = pow(0.5 + 0.5 * sin(aLineProgress * 26.0 - uTime * (0.52 + aLineKind * 0.42) + aLinePhase), 11.0);
    } else {
      float windRate = 0.72 + aLineKind * 0.86;
      transformed.x += sin(uTime * windRate + aLinePhase + aLineProgress * 7.0) * (0.08 + aLineKind * 0.12);
      transformed.y += sin(uTime * (0.58 + aLineKind * 0.34) - aLineProgress * 10.0 + aLinePhase) * (0.06 + aLineKind * 0.1);
      transformed.z += cos(uTime * 0.46 + aLineProgress * 5.0 + aLinePhase) * 0.08;
      pulse = pow(0.5 + 0.5 * sin(aLineProgress * 18.0 - uTime * (1.4 + aLineKind) + aLinePhase), 8.0);
    }

    vec2 pointerDelta = transformed.xy - uLocalPointer;
    float pointerDistance = max(length(pointerDelta), 0.001);
    vec2 pointerDirection = pointerDelta / pointerDistance;
    vec2 pointerTangent = vec2(-pointerDirection.y, pointerDirection.x);
    vec2 velocityDirection = normalize(uVelocity + vec2(0.0001));
    float pointerField = exp(-pointerDistance * pointerDistance * (uGuideMode > 3.5 ? 0.28 : 0.5)) * clamp(uEnergy * 0.82 + uPress, 0.0, 1.0);
    if (uGuideMode < 0.5) {
      transformed.xy -= pointerDirection * pointerField * (0.26 + uPress * 0.42);
      transformed.z += pointerField * 0.24;
    } else if (uGuideMode < 1.5) {
      transformed.xy += velocityDirection * pointerField * min(1.6, length(uVelocity)) * 0.52;
    } else if (uGuideMode < 2.5) {
      float branchWave = sin(pointerDistance * 7.5 - uTime * 4.4 + aLinePhase);
      transformed.xy += pointerDirection * pointerField * branchWave * 0.42;
      pulse = max(pulse, abs(branchWave) * pointerField);
    } else if (uGuideMode < 3.5) {
      float delayedWave = sin(pointerDistance * 8.2 - uTime * 3.0) * 0.5 + sin(pointerDistance * 5.1 - uTime * 1.9) * 0.5;
      transformed.xy += pointerDirection * pointerField * delayedWave * 0.44;
      pulse = max(pulse, abs(delayedWave) * pointerField);
    } else {
      transformed.xy += pointerTangent * pointerField * (0.34 + uPress * 0.3);
      transformed.z += sin(pointerDistance * 4.2 - uTime * 2.0 + aLinePhase) * pointerField * 0.42;
    }

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float depthFade = smoothstep(26.0, 5.0, -viewPosition.z) * smoothstep(1.2, 3.2, -viewPosition.z);
    vAlpha = uVisibility * depthFade * (0.022 + aLineKind * 0.072 + pulse * 0.28) * structureLife;
    vPulse = pulse;
  }
`;

const STRUCTURE_LINE_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec3 uBrightColor;
  uniform vec3 uColor;
  varying float vAlpha;
  varying float vPulse;
  void main() {
    gl_FragColor = vec4(mix(uColor, uBrightColor, vPulse * 0.76), vAlpha);
    #include <colorspace_fragment>
  }
`;

const ATMOSPHERE_VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ATMOSPHERE_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec3 uBase;
  uniform vec3 uMist;
  uniform float uChapter;
  uniform float uEnergy;
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int index = 0; index < 5; index++) {
      value += noise(p) * amplitude;
      p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.03 + 3.17;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 pointer = uPointer * 0.5 + 0.5;
    float primary = fbm(uv * 2.75 + vec2(uTime * 0.014, -uTime * 0.009));
    float secondary = fbm(uv.yx * 5.8 + vec2(-uTime * 0.021, uTime * 0.015) + uChapter * 0.17);
    float halo = exp(-dot(uv - pointer, uv - pointer) * 4.6);
    float membrane = smoothstep(0.82, 0.34, abs(primary - 0.5)) * 0.012;
    float current = smoothstep(0.76, 0.96, secondary) * (0.008 + uEnergy * 0.008);
    float chapter = floor(uChapter + 0.5);
    float horizon = exp(-pow(uv.y - 0.48, 2.0) * 34.0);
    float lowMist = smoothstep(0.58, 0.08, uv.y) * smoothstep(-0.08, 0.22, uv.y);
    float radialDepth = exp(-dot(uv - vec2(0.5), uv - vec2(0.5)) * 3.2);
    float sceneDepth = 0.0;
    if (chapter < 0.5) sceneDepth = horizon * 0.018 + lowMist * 0.008;
    else if (chapter < 1.5) sceneDepth = radialDepth * 0.011 + current * 0.45;
    else if (chapter < 2.5) sceneDepth = horizon * (0.046 + uEnergy * 0.01) + lowMist * 0.004;
    else if (chapter < 3.5) sceneDepth = lowMist * 0.014 + current * 0.32;
    else if (chapter < 4.5) sceneDepth = radialDepth * 0.026 + membrane * 0.4;
    else sceneDepth = radialDepth * 0.016 + horizon * 0.006;
    vec3 color = mix(uBase, uMist, 0.008 + primary * 0.022 + halo * (0.012 + uEnergy * 0.012) + sceneDepth);
    color += uMist * (membrane + current);
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;

const SOCIAL_NODES = [
  new THREE.Vector3(-5.25, 1.65, -0.65),
  new THREE.Vector3(-4.2, -1.55, 1.28),
  new THREE.Vector3(-2.8, 0.15, -1.45),
  new THREE.Vector3(-1.45, 2.45, 0.82),
  new THREE.Vector3(-0.8, -2.35, -1.18),
  new THREE.Vector3(0.35, 0.45, 1.52),
  new THREE.Vector3(1.65, -1.05, -0.72),
  new THREE.Vector3(2.35, 2.28, 1.14),
  new THREE.Vector3(3.55, 0.36, -1.38),
  new THREE.Vector3(4.82, -1.68, 0.9),
  new THREE.Vector3(5.38, 1.78, -0.54),
  new THREE.Vector3(0.08, -0.78, 0.34),
  new THREE.Vector3(-3.42, 2.62, -0.92),
  new THREE.Vector3(-5.72, -0.18, 0.42),
  new THREE.Vector3(-2.12, -2.82, 1.08),
  new THREE.Vector3(1.08, 3.08, -1.22),
  new THREE.Vector3(4.1, 2.74, 0.72),
  new THREE.Vector3(5.82, -0.12, -1.16),
] as const;

const SOCIAL_LINKS = [
  [0, 1], [0, 2], [0, 12], [1, 2], [1, 4], [2, 3], [2, 5], [2, 12],
  [3, 5], [3, 7], [3, 12], [4, 5], [4, 6], [5, 6], [5, 7], [5, 11],
  [6, 8], [6, 9], [7, 8], [7, 10], [8, 9], [8, 10], [9, 10], [11, 2], [11, 6],
  [13, 0], [13, 1], [13, 14], [14, 4], [14, 11], [14, 15],
  [15, 3], [15, 7], [15, 16], [16, 10], [16, 17], [17, 9],
] as const;

type SocialLink = readonly [number, number];

function createSocialEpochLinks(epoch: number, count = SOCIAL_LINKS.length): SocialLink[] {
  const links: SocialLink[] = [];
  const nodeCount = SOCIAL_NODES.length;
  for (let index = 0; index < count; index += 1) {
    let from: number;
    let to: number;
    if (index < nodeCount) {
      from = index;
      const neighborhood = 1 + Math.floor(hashNumber(epoch * 23.17 + index * 7.31) * 4);
      const direction = hashNumber(epoch * 11.9 + index * 13.7) > 0.5 ? 1 : -1;
      to = (from + nodeCount + neighborhood * direction) % nodeCount;
    } else {
      from = Math.floor(hashNumber(epoch * 41.3 + index * 17.9) * nodeCount) % nodeCount;
      const distance = 1 + Math.floor(hashNumber(epoch * 67.1 + index * 29.3) * (nodeCount - 1));
      to = (from + distance) % nodeCount;
    }
    if (to === from) to = (to + 1) % nodeCount;
    links.push([from, to]);
  }
  return links;
}

function sampleSocialNodeAtEpoch(nodeIndex: number, epoch: number) {
  const node = SOCIAL_NODES[nodeIndex];
  const driftScale = 0.28 + hashNumber(nodeIndex * 31.7) * 0.36;
  const fission = hashNumber(epoch * 71.3 + nodeIndex * 19.1) > 0.87 ? 1 : 0;
  return new THREE.Vector3(
    node.x + (hashNumber(epoch * 17.3 + nodeIndex * 11.7) - 0.5) * driftScale * 2 + fission * (node.x < 0 ? -0.42 : 0.42),
    node.y + (hashNumber(epoch * 29.1 + nodeIndex * 7.9) - 0.5) * driftScale * 1.5,
    node.z + (hashNumber(epoch * 43.7 + nodeIndex * 5.3) - 0.5) * (0.42 + driftScale) + fission * 0.26,
  );
}

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function unitVector(random: () => number) {
  const z = random() * 2 - 1;
  const angle = random() * Math.PI * 2;
  const radius = Math.sqrt(1 - z * z);
  return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, z);
}

function hashNumber(value: number) {
  const wave = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
  return wave - Math.floor(wave);
}

function sampleRidgedTerrain(x: number, z: number, scale: number, octaves: number) {
  let amplitude = 0.58;
  let frequency = scale;
  let total = 0;
  let normalization = 0;
  let ridgeWeight = 1;

  for (let octave = 0; octave < octaves; octave += 1) {
    const noise = MOUNTAIN_NOISE.noise(x * frequency, z * frequency, 17.3 + octave * 11.7);
    const ridge = 1 - Math.abs(noise);
    const sharpened = ridge * ridge;
    total += sharpened * amplitude * ridgeWeight;
    normalization += amplitude;
    ridgeWeight = THREE.MathUtils.clamp(sharpened * 1.72, 0.18, 1);
    amplitude *= 0.51;
    frequency *= 2.04;
  }

  return total / normalization;
}

function sampleValleyCenter(z: number) {
  return MOUNTAIN_NOISE.noise(z * 0.075, 0.42, 31.6) * 1.18
    + MOUNTAIN_NOISE.noise(z * 0.16, 1.7, 9.4) * 0.28;
}

function sampleMountainHeight(x: number, z: number) {
  const warpX = MOUNTAIN_NOISE.noise(x * 0.045, z * 0.045, 4.7) * 2.3;
  const warpZ = MOUNTAIN_NOISE.noise(x * 0.047, z * 0.047, 12.1) * 2.1;
  const terrainX = x + warpX;
  const terrainZ = z + warpZ;
  const mountainRidge = sampleRidgedTerrain(terrainX, terrainZ, 0.075, 5);
  const erosionRidge = sampleRidgedTerrain(terrainX + 8.2, terrainZ - 5.7, 0.19, 3);
  const valleyDistance = Math.abs(x - sampleValleyCenter(z));
  const mountainEnvelope = THREE.MathUtils.smoothstep(valleyDistance, 0.72, 7.6);
  const farDepth = THREE.MathUtils.smoothstep(-z, 0.5, MOUNTAIN_DEPTH * 0.5);
  const asymmetricMass = THREE.MathUtils.clamp(
    0.88 + MOUNTAIN_NOISE.noise(x * 0.035, z * 0.052, 43.2) * 0.34,
    0.58,
    1.22,
  );
  const valleyFloor = -3.08
    + MOUNTAIN_NOISE.noise(x * 0.12, z * 0.1, 72.4) * 0.14
    + farDepth * 0.34;
  const primaryRelief = mountainEnvelope
    * (0.66 + Math.pow(mountainRidge, 2.18) * 12.2)
    * asymmetricMass;
  const distantRange = farDepth
    * (0.42 + Math.pow(mountainRidge, 1.82) * 3.12)
    * (0.55 + mountainEnvelope * 0.45);
  const erodedDetail = mountainEnvelope
    * (erosionRidge - 0.48)
    * (0.56 + mountainRidge * 0.94);

  return valleyFloor + primaryRelief + distantRange + erodedDetail;
}

function sampleMountainParticle(index: number, roleSeed: number) {
  const random = seededRandom(0x5a17c3 ^ Math.imul(index + 1, 0x45d9f3b));
  let z = (random() - 0.5) * MOUNTAIN_DEPTH;
  let valleyCenter = sampleValleyCenter(z);
  let x = (random() - 0.5) * MOUNTAIN_WIDTH;

  if (roleSeed < 0.64) {
    const surface = sampleMountainHeight(x, z);
    return new THREE.Vector3(
      x + (random() - 0.5) * 0.045,
      surface + (random() - 0.5) * 0.075,
      z + (random() - 0.5) * 0.045,
    );
  }

  if (roleSeed < 0.85) {
    const surface = sampleMountainHeight(x, z);
    const exposedHeight = Math.max(0.2, surface + 3.2);
    const rawLayerDepth = 0.28 + Math.pow(random(), 0.68) * (1.5 + exposedHeight * 0.52);
    const layerDepth = Math.floor(rawLayerDepth * 5.5) / 5.5 + random() * 0.065;
    const strataShift = Math.sin(layerDepth * 5.2 + z * 0.44) * 0.11;
    return new THREE.Vector3(
      x + (random() - 0.5) * 0.12,
      surface - layerDepth + strataShift,
      z + (random() - 0.5) * 0.1,
    );
  }

  if (roleSeed < 0.95) {
    for (let attempt = 0; attempt < 7; attempt += 1) {
      const candidateZ = (random() - 0.5) * MOUNTAIN_DEPTH;
      const candidateX = (random() - 0.5) * MOUNTAIN_WIDTH;
      const slopeX = Math.abs(sampleMountainHeight(candidateX + 0.18, candidateZ) - sampleMountainHeight(candidateX - 0.18, candidateZ));
      const slopeZ = Math.abs(sampleMountainHeight(candidateX, candidateZ + 0.18) - sampleMountainHeight(candidateX, candidateZ - 0.18));
      const slope = Math.hypot(slopeX, slopeZ);
      if (random() < THREE.MathUtils.smoothstep(slope, 0.12, 1.1) || attempt === 6) {
        x = candidateX;
        z = candidateZ;
        break;
      }
    }
    const surface = sampleMountainHeight(x, z);
    const plume = Math.pow(random(), 1.7) * (0.62 + Math.max(0, surface) * 0.09);
    return new THREE.Vector3(
      x + (random() - 0.5) * 0.16,
      surface + 0.08 + plume,
      z + (random() - 0.5) * 0.18,
    );
  }

  z = (random() - 0.5) * MOUNTAIN_DEPTH * 0.92;
  valleyCenter = sampleValleyCenter(z);
  x = valleyCenter + (random() + random() - 1) * 0.72;
  const valleyFloor = sampleMountainHeight(x, z);
  return new THREE.Vector3(
    x,
    valleyFloor + 0.34 + Math.pow(random(), 1.45) * 1.28,
    z,
  );
}

function sampleGrassGround(x: number, z: number) {
  const longHill = Math.sin(x * 0.18 - z * 0.1) * 0.38;
  const crossHill = Math.cos(z * 0.36 + x * 0.08) * 0.3;
  const distantRise = Math.exp(-((z - 4.8) ** 2) * 0.12) * (0.34 + Math.sin(x * 0.24) * 0.16);
  return -2.72 + longHill + crossHill + distantRise + Math.sin(x * 0.42 + z * 0.31) * 0.11;
}

function sampleSpiralOrbit(progress: number, orbitIndex: number, radialOffset = 0) {
  const angle = progress * Math.PI * 2;
  const phase = orbitIndex * Math.PI * 0.4;
  const radius = 2.08 + orbitIndex * 0.54 + radialOffset;
  const tiltX = -0.72 + orbitIndex * 0.31;
  const tiltY = 0.34 + orbitIndex * 0.43;
  const tiltZ = -0.2 + orbitIndex * 0.1;
  let x = Math.cos(angle) * radius;
  let y = Math.sin(angle) * radius * 0.72;
  let z = Math.sin(angle * 2 + phase) * 0.1;

  const cosX = Math.cos(tiltX);
  const sinX = Math.sin(tiltX);
  [y, z] = [y * cosX - z * sinX, y * sinX + z * cosX];
  const cosY = Math.cos(tiltY);
  const sinY = Math.sin(tiltY);
  [x, z] = [x * cosY + z * sinY, -x * sinY + z * cosY];
  const cosZ = Math.cos(tiltZ);
  const sinZ = Math.sin(tiltZ);
  [x, y] = [x * cosZ - y * sinZ, x * sinZ + y * cosZ];
  return new THREE.Vector3(x, y, z);
}

function createParticleGeometry(count: number) {
  const random = seededRandom(0x1c7a11);
  const mountain = new Float32Array(count * 3);
  const society = new Float32Array(count * 3);
  const societyNext = new Float32Array(count * 3);
  const ocean = new Float32Array(count * 3);
  const grass = new Float32Array(count * 3);
  const nebula = new Float32Array(count * 3);
  const dna = new Float32Array(count * 3);
  const alphas = new Float32Array(count);
  const bands = new Float32Array(count);
  const bladePhases = new Float32Array(count);
  const dnaKinds = new Float32Array(count);
  const locals = new Float32Array(count);
  const phases = new Float32Array(count);
  const scales = new Float32Array(count);
  const seeds = new Float32Array(count);
  const societyRoles = new Float32Array(count);

  const write = (array: Float32Array, index: number, vector: THREE.Vector3) => {
    const offset = index * 3;
    array[offset] = vector.x;
    array[offset + 1] = vector.y;
    array[offset + 2] = vector.z;
  };
  const fieldColumns = Math.ceil(Math.sqrt(count * 1.72));
  const fieldRows = Math.ceil(count / fieldColumns);
  const grassSegments = 16;
  const societyNextLinks = createSocialEpochLinks(1);

  for (let index = 0; index < count; index += 1) {
    const seed = random();
    const band = index % 4;
    const gridX = index % fieldColumns;
    const gridY = Math.floor(index / fieldColumns);
    const gridU = gridX / Math.max(1, fieldColumns - 1);
    const gridV = gridY / Math.max(1, fieldRows - 1);
    const mountainPoint = sampleMountainParticle(index, seed);

    const nodeDirection = unitVector(random);
    let societyPoint: THREE.Vector3;
    let societyNextPoint: THREE.Vector3;
    let societyRole = 0;
    if (seed > 0.72) {
      const [from, to] = SOCIAL_LINKS[index % SOCIAL_LINKS.length];
      const [nextFrom, nextTo] = societyNextLinks[index % societyNextLinks.length];
      const lineProgress = random();
      societyPoint = SOCIAL_NODES[from].clone().lerp(SOCIAL_NODES[to], lineProgress);
      societyPoint.add(nodeDirection.multiplyScalar(0.025 + Math.pow(random(), 2.2) * 0.14));
      societyNextPoint = SOCIAL_NODES[nextFrom].clone().lerp(SOCIAL_NODES[nextTo], lineProgress);
      societyNextPoint.add(unitVector(random).multiplyScalar(0.025 + Math.pow(random(), 2.2) * 0.14));
      societyRole = 1;
    } else {
      const node = SOCIAL_NODES[index % SOCIAL_NODES.length];
      const nextNode = SOCIAL_NODES[(index * 7 + 3) % SOCIAL_NODES.length];
      const nodeRadius = 0.07 + Math.pow(random(), 1.95) * (0.48 + (index % 4) * 0.08);
      societyPoint = node.clone().add(nodeDirection.multiplyScalar(nodeRadius));
      societyNextPoint = nextNode.clone().add(unitVector(random).multiplyScalar(nodeRadius * 0.88));
    }

    const oceanPoint = new THREE.Vector3(
      (gridU - 0.5) * OCEAN_WIDTH + (random() - 0.5) * 0.028,
      -1.38 + Math.sin(gridU * Math.PI * 5.0) * 0.018,
      (gridV - 0.5) * OCEAN_DEPTH + (random() - 0.5) * 0.028,
    );

    const bladeIndex = Math.floor(index / grassSegments);
    const bladeStep = index % grassSegments;
    const bladeProgress = bladeStep / (grassSegments - 1);
    const rootX = (hashNumber(bladeIndex * 3 + 1) - 0.5) * GRASS_WIDTH;
    const rootZ = (hashNumber(bladeIndex * 3 + 2) - 0.5) * GRASS_DEPTH;
    const bladeHeight = 0.58 + hashNumber(bladeIndex * 3 + 3) * 1.26;
    const bladeLean = (hashNumber(bladeIndex * 5 + 4) - 0.5) * 0.38;
    const bladeLeanZ = (hashNumber(bladeIndex * 5 + 6) - 0.5) * 0.22;
    const grassGround = sampleGrassGround(rootX, rootZ);
    const grassPoint = new THREE.Vector3(
      rootX + bladeLean * bladeProgress * bladeProgress,
      grassGround + bladeProgress * bladeHeight,
      rootZ + bladeLeanZ * bladeProgress * bladeProgress,
    );

    const nebulaFilament = index % 9;
    const coreParticle = seed < 0.16;
    const cloudParticle = seed > 0.86;
    let nebulaPoint: THREE.Vector3;
    if (coreParticle) {
      const coreDirection = unitVector(random);
      const coreRadius = Math.pow(random(), 1.8) * 1.42;
      nebulaPoint = coreDirection.multiplyScalar(coreRadius);
      nebulaPoint.y *= 0.78;
    } else if (!cloudParticle) {
      const side = index % 2 === 0 ? 1 : -1;
      const progress = Math.pow(random(), 0.72);
      const radius = 0.42 + progress * 5.85;
      const phase = nebulaFilament * 0.77 + side * progress * 1.34 + Math.sin(progress * 8.0 + nebulaFilament) * 0.18;
      nebulaPoint = new THREE.Vector3(
        Math.cos(phase) * radius * (0.76 + progress * 0.18) + (random() - 0.5) * (0.08 + progress * 0.34),
        side * (0.18 + progress * 3.46) + Math.sin(phase * 1.7) * (0.16 + progress * 0.54),
        Math.sin(phase) * radius * 0.54 + Math.sin(progress * 10.0 + nebulaFilament) * (0.1 + progress * 0.3),
      );
    } else {
      const cloudDirection = unitVector(random);
      const cloudRadius = 1.3 + Math.pow(random(), 0.52) * 5.3;
      nebulaPoint = cloudDirection.multiplyScalar(cloudRadius);
      nebulaPoint.x *= 1.08;
      nebulaPoint.y *= 0.72;
      nebulaPoint.z *= 0.58;
    }

    const dnaKindSeed = random();
    const dnaProgress = random();
    const spiralOrbit = index % 5;
    let spiralBand = spiralOrbit / 4;
    let dnaKind = 0;
    let dnaPoint: THREE.Vector3;
    if (dnaKindSeed < 0.76) {
      const strandWidth = (random() + random() - 1) * 0.18;
      dnaPoint = sampleSpiralOrbit(dnaProgress, spiralOrbit, strandWidth);
      dnaPoint.add(unitVector(random).multiplyScalar(random() * 0.045));
      dnaKind = 1;
    } else if (dnaKindSeed < 0.82) {
      dnaPoint = unitVector(random).multiplyScalar(Math.pow(random(), 1.7) * 1.28);
      dnaPoint.y *= 0.86;
      dnaKind = 0.22;
      spiralBand = random() * 0.24;
    } else if (dnaKindSeed < 0.98) {
      const orbitPoint = sampleSpiralOrbit(dnaProgress, spiralOrbit);
      dnaPoint = orbitPoint.multiplyScalar(0.18 + random() * 0.66);
      dnaPoint.add(unitVector(random).multiplyScalar(random() * 0.075));
      dnaKind = 0.62;
    } else {
      dnaPoint = unitVector(random).multiplyScalar(4.72 + random() * 0.74);
      dnaPoint.y *= 0.84;
      dnaKind = 0.08;
      spiralBand = 0.12 + random() * 0.22;
    }

    write(mountain, index, mountainPoint);
    write(society, index, societyPoint);
    write(societyNext, index, societyNextPoint);
    write(ocean, index, oceanPoint);
    write(grass, index, grassPoint);
    write(nebula, index, nebulaPoint);
    write(dna, index, dnaPoint);
    bands[index] = spiralBand;
    bladePhases[index] = hashNumber(bladeIndex * 7 + 5) * Math.PI * 2;
    dnaKinds[index] = dnaKind;
    locals[index] = bladeProgress;
    alphas[index] = 0.54 + Math.pow(random(), 0.72) * 0.46;
    phases[index] = random() * Math.PI * 2;
    scales[index] = 0.14 + Math.pow(random(), 6.2) * 1.08;
    seeds[index] = seed;
    societyRoles[index] = societyRole;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(mountain, 3));
  geometry.setAttribute("aSociety", new THREE.BufferAttribute(society, 3));
  geometry.setAttribute("aSocietyNext", new THREE.BufferAttribute(societyNext, 3));
  geometry.setAttribute("aOcean", new THREE.BufferAttribute(ocean, 3));
  geometry.setAttribute("aGrass", new THREE.BufferAttribute(grass, 3));
  geometry.setAttribute("aNebula", new THREE.BufferAttribute(nebula, 3));
  geometry.setAttribute("aDna", new THREE.BufferAttribute(dna, 3));
  geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));
  geometry.setAttribute("aBand", new THREE.BufferAttribute(bands, 1));
  geometry.setAttribute("aBladePhase", new THREE.BufferAttribute(bladePhases, 1));
  geometry.setAttribute("aDnaKind", new THREE.BufferAttribute(dnaKinds, 1));
  geometry.setAttribute("aLocal", new THREE.BufferAttribute(locals, 1));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute("aSocietyRole", new THREE.BufferAttribute(societyRoles, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function createSocietyEvolutionGeometry(source: THREE.BufferGeometry) {
  const society = source.getAttribute("aSociety") as THREE.BufferAttribute;
  const societyNext = source.getAttribute("aSocietyNext") as THREE.BufferAttribute;
  const societyRole = source.getAttribute("aSocietyRole") as THREE.BufferAttribute;
  const seeds = source.getAttribute("aSeed") as THREE.BufferAttribute;
  const societyThird = new Float32Array(society.count * 3);
  const random = seededRandom(0x50c1a7);
  for (let index = 0; index < society.count; index += 1) {
    const seed = seeds.getX(index);
    const role = societyRole.getX(index);
    const nodeIndex = Math.floor(hashNumber(seed * 997 + index * 0.73) * SOCIAL_NODES.length) % SOCIAL_NODES.length;
    const node = SOCIAL_NODES[nodeIndex];
    let point: THREE.Vector3;
    if (role > 0.5) {
      const targetIndex = (nodeIndex + 1 + Math.floor(hashNumber(index * 1.91 + 8.2) * (SOCIAL_NODES.length - 1))) % SOCIAL_NODES.length;
      point = node.clone().lerp(SOCIAL_NODES[targetIndex], random());
      point.add(unitVector(random).multiplyScalar(0.035 + random() * 0.18));
    } else {
      const radius = 0.08 + Math.pow(random(), 1.7) * (0.52 + hashNumber(index * 2.7) * 0.34);
      point = node.clone().add(unitVector(random).multiplyScalar(radius));
    }
    const offset = index * 3;
    societyThird[offset] = point.x;
    societyThird[offset + 1] = point.y;
    societyThird[offset + 2] = point.z;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", society.clone());
  geometry.setAttribute("aNext", societyNext.clone());
  geometry.setAttribute("aNext2", new THREE.BufferAttribute(societyThird, 3));
  geometry.setAttribute("aRole", societyRole.clone());
  geometry.setAttribute("aSeed", seeds.clone());
  geometry.setDrawRange(0, Math.floor(society.count * 0.7));
  geometry.computeBoundingSphere();
  return geometry;
}

function createGrassLineGeometry(count: number) {
  const bladeCount = Math.min(3800, Math.max(1400, Math.floor(count / 13)));
  const segments = 6;
  const vertexCount = bladeCount * segments * 2;
  const positions = new Float32Array(vertexCount * 3);
  const phases = new Float32Array(vertexCount);
  const progress = new Float32Array(vertexCount);
  let vertex = 0;

  const writeVertex = (rootX: number, rootZ: number, ground: number, height: number, lean: number, leanZ: number, phase: number, value: number) => {
    const offset = vertex * 3;
    positions[offset] = rootX + lean * value * value;
    positions[offset + 1] = ground + height * value;
    positions[offset + 2] = rootZ + leanZ * value * value;
    phases[vertex] = phase;
    progress[vertex] = value;
    vertex += 1;
  };

  for (let blade = 0; blade < bladeCount; blade += 1) {
    const rootX = (hashNumber(blade * 3 + 1) - 0.5) * GRASS_WIDTH;
    const rootZ = (hashNumber(blade * 3 + 2) - 0.5) * GRASS_DEPTH;
    const height = 0.58 + hashNumber(blade * 3 + 3) * 1.26;
    const lean = (hashNumber(blade * 5 + 4) - 0.5) * 0.38;
    const leanZ = (hashNumber(blade * 5 + 6) - 0.5) * 0.22;
    const phase = hashNumber(blade * 7 + 5) * Math.PI * 2;
    const ground = sampleGrassGround(rootX, rootZ);
    for (let segment = 0; segment < segments; segment += 1) {
      writeVertex(rootX, rootZ, ground, height, lean, leanZ, phase, segment / segments);
      writeVertex(rootX, rootZ, ground, height, lean, leanZ, phase, (segment + 1) / segments);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aGrassPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aProgress", new THREE.BufferAttribute(progress, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function createGrassFluffGeometry(count: number) {
  const fluffCount = Math.min(1600, Math.max(700, Math.floor(count / 20)));
  const random = seededRandom(0x71f10f);
  const positions = new Float32Array(fluffCount * 3);
  const phases = new Float32Array(fluffCount);
  const scales = new Float32Array(fluffCount);
  const seeds = new Float32Array(fluffCount);

  for (let index = 0; index < fluffCount; index += 1) {
    const rootX = (random() - 0.5) * GRASS_WIDTH;
    const rootZ = (random() - 0.5) * GRASS_DEPTH;
    const ground = sampleGrassGround(rootX, rootZ);
    const offset = index * 3;
    positions[offset] = rootX;
    positions[offset + 1] = ground + 0.48 + random() * 1.05;
    positions[offset + 2] = rootZ;
    phases[index] = random();
    scales[index] = 0.18 + Math.pow(random(), 2.4) * 0.82;
    seeds[index] = random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aFluffPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aFluffScale", new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute("aFluffSeed", new THREE.BufferAttribute(seeds, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function createMountainTerrainGeometry() {
  const contourRows = 48;
  const contourColumns = 224;
  const erosionPaths = 11;
  const erosionSteps = 164;
  const segmentCount = contourRows * (contourColumns - 1)
    + erosionPaths * (erosionSteps - 1);
  const positions = new Float32Array(segmentCount * 6);
  const phases = new Float32Array(segmentCount * 2);
  const weights = new Float32Array(segmentCount * 2);
  let vertex = 0;

  const write = (x: number, z: number, phase: number, weight: number) => {
    const target = vertex * 3;
    positions[target] = x;
    positions[target + 1] = sampleMountainHeight(x, z) + 0.025;
    positions[target + 2] = z;
    phases[vertex] = phase;
    weights[vertex] = weight;
    vertex += 1;
  };

  for (let row = 0; row < contourRows; row += 1) {
    const z = (row / (contourRows - 1) - 0.5) * MOUNTAIN_DEPTH;
    const phase = row * 0.19;
    const weight = row % 8 === 0 ? 0.82 : row % 3 === 0 ? 0.38 : 0.16;
    for (let column = 0; column < contourColumns - 1; column += 1) {
      const xStart = (column / (contourColumns - 1) - 0.5) * MOUNTAIN_WIDTH;
      const xEnd = ((column + 1) / (contourColumns - 1) - 0.5) * MOUNTAIN_WIDTH;
      write(xStart, z, phase, weight);
      write(xEnd, z, phase, weight);
    }
  }

  for (let path = 0; path < erosionPaths; path += 1) {
    const lane = path / (erosionPaths - 1) - 0.5;
    const phase = 14.2 + path * 0.53;
    const weight = path === Math.floor(erosionPaths / 2) ? 0.72 : 0.2 + (path % 3) * 0.12;
    const pointAt = (progress: number) => {
      const z = (progress - 0.5) * MOUNTAIN_DEPTH;
      const valleyBias = (1 - Math.abs(lane) * 2) * sampleValleyCenter(z) * 0.36;
      const x = lane * MOUNTAIN_WIDTH * 0.9
        + valleyBias
        + MOUNTAIN_NOISE.noise(z * 0.09, path * 0.27, 58.1) * (0.24 + Math.abs(lane) * 0.5);
      return { x, z };
    };
    for (let step = 0; step < erosionSteps - 1; step += 1) {
      const start = pointAt(step / (erosionSteps - 1));
      const end = pointAt((step + 1) / (erosionSteps - 1));
      write(start.x, start.z, phase, weight);
      write(end.x, end.z, phase, weight);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aLinePhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aLineWeight", new THREE.BufferAttribute(weights, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function createOceanLineGeometry() {
  const rows = 92;
  const columns = 248;
  const crossColumns = 4;
  const depthSteps = 118;
  const semanticPaths = 14;
  const semanticSteps = 176;
  const segmentCount = rows * (columns - 1)
    + crossColumns * (depthSteps - 1)
    + semanticPaths * (semanticSteps - 1);
  const vertexCount = segmentCount * 2;
  const positions = new Float32Array(vertexCount * 3);
  const phases = new Float32Array(vertexCount);
  const weights = new Float32Array(vertexCount);
  const width = OCEAN_WIDTH;
  const depth = OCEAN_DEPTH;
  let vertex = 0;

  const write = (x: number, z: number, phase: number, weight: number) => {
    const offset = vertex * 3;
    positions[offset] = x;
    positions[offset + 1] = -1.375;
    positions[offset + 2] = z;
    phases[vertex] = phase;
    weights[vertex] = weight;
    vertex += 1;
  };

  for (let row = 0; row < rows; row += 1) {
    const z = (row / (rows - 1) - 0.5) * depth;
    const phase = row * 0.17;
    const weight = row % 9 === 0 ? 1 : row % 3 === 0 ? 0.44 : 0.16;
    for (let column = 0; column < columns - 1; column += 1) {
      write((column / (columns - 1) - 0.5) * width, z, phase, weight);
      write(((column + 1) / (columns - 1) - 0.5) * width, z, phase, weight);
    }
  }

  for (let column = 0; column < crossColumns; column += 1) {
    const x = (column / (crossColumns - 1) - 0.5) * width;
    const phase = column * 0.23;
    const weight = 0.1;
    for (let step = 0; step < depthSteps - 1; step += 1) {
      write(x, (step / (depthSteps - 1) - 0.5) * depth, phase, weight);
      write(x, ((step + 1) / (depthSteps - 1) - 0.5) * depth, phase, weight);
    }
  }

  for (let path = 0; path < semanticPaths; path += 1) {
    const phase = 9.7 + path * 0.41;
    const weight = 0.62 + (path % 3) * 0.18;
    const samplePath = (value: number) => {
      const x = (value - 0.5) * width;
      const lane = (path / Math.max(1, semanticPaths - 1) - 0.5) * depth;
      return {
        x,
        z: lane + Math.sin(x * 0.12 + path * 0.63) * (0.18 + (path % 4) * 0.055),
      };
    };
    for (let step = 0; step < semanticSteps - 1; step += 1) {
      const start = samplePath(step / (semanticSteps - 1));
      const end = samplePath((step + 1) / (semanticSteps - 1));
      write(start.x, start.z, phase, weight);
      write(end.x, end.z, phase, weight);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aLinePhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aLineWeight", new THREE.BufferAttribute(weights, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function createStructureLineGeometry(
  build: (addSegment: (
    start: THREE.Vector3,
    end: THREE.Vector3,
    progressStart: number,
    progressEnd: number,
    phase: number,
    kind: number,
  ) => void) => void,
) {
  const positions: number[] = [];
  const kinds: number[] = [];
  const phases: number[] = [];
  const progress: number[] = [];
  const addSegment = (
    start: THREE.Vector3,
    end: THREE.Vector3,
    progressStart: number,
    progressEnd: number,
    phase: number,
    kind: number,
  ) => {
    positions.push(start.x, start.y, start.z, end.x, end.y, end.z);
    progress.push(progressStart, progressEnd);
    phases.push(phase, phase);
    kinds.push(kind, kind);
  };
  build(addSegment);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("aLineKind", new THREE.Float32BufferAttribute(kinds, 1));
  geometry.setAttribute("aLinePhase", new THREE.Float32BufferAttribute(phases, 1));
  geometry.setAttribute("aLineProgress", new THREE.Float32BufferAttribute(progress, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

function createGrassWindGeometry() {
  return createStructureLineGeometry((addSegment) => {
    const lanes = 26;
    const segments = 172;
    for (let lane = 0; lane < lanes; lane += 1) {
      const z = (lane / (lanes - 1) - 0.5) * (GRASS_DEPTH * 0.94);
      const phase = hashNumber(lane * 7 + 2) * Math.PI * 2;
      const kind = 0.28 + hashNumber(lane * 11 + 5) * 0.7;
      const point = (value: number) => {
        const x = (value - 0.5) * (GRASS_WIDTH * 1.05);
        const ground = sampleGrassGround(x, z);
        return new THREE.Vector3(
          x,
          ground + 0.48 + Math.sin(x * 0.48 + phase) * (0.08 + kind * 0.11),
          z,
        );
      };
      for (let segment = 0; segment < segments; segment += 1) {
        const progressStart = segment / segments;
        const progressEnd = (segment + 1) / segments;
        addSegment(point(progressStart), point(progressEnd), progressStart, progressEnd, phase, kind);
      }
    }
  });
}

function createSocietyFlowGeometry() {
  return createStructureLineGeometry((addSegment) => {
    const segments = 26;
    SOCIAL_LINKS.forEach(([from, to], linkIndex) => {
      const start = SOCIAL_NODES[from];
      const end = SOCIAL_NODES[to];
      const midpoint = start.clone().lerp(end, 0.5);
      const distance = start.distanceTo(end);
      midpoint.z += distance * (0.18 + hashNumber(linkIndex * 5 + 2) * 0.24);
      midpoint.y += (hashNumber(linkIndex * 7 + 4) - 0.5) * 0.8;
      const phase = hashNumber(linkIndex * 11 + 3) * Math.PI * 2;
      const kind = 0.36 + hashNumber(linkIndex * 13 + 5) * 0.62;
      const point = (value: number) => {
        const inverse = 1 - value;
        return new THREE.Vector3(
          inverse * inverse * start.x + 2 * inverse * value * midpoint.x + value * value * end.x,
          inverse * inverse * start.y + 2 * inverse * value * midpoint.y + value * value * end.y,
          inverse * inverse * start.z + 2 * inverse * value * midpoint.z + value * value * end.z,
        );
      };
      for (let segment = 0; segment < segments; segment += 1) {
        const progressStart = segment / segments;
        const progressEnd = (segment + 1) / segments;
        addSegment(point(progressStart), point(progressEnd), progressStart, progressEnd, phase, kind);
      }
    });
  });
}

function createNebulaStreamGeometry() {
  return createStructureLineGeometry((addSegment) => {
    const streamsPerLobe = 9;
    const segments = 176;
    for (let lobe = 0; lobe < 2; lobe += 1) {
      const side = lobe === 0 ? 1 : -1;
      for (let stream = 0; stream < streamsPerLobe; stream += 1) {
        const phase = stream * 0.77 + lobe * Math.PI;
        const kind = 0.28 + stream / Math.max(1, streamsPerLobe - 1) * 0.7;
        const point = (value: number) => {
          const radius = 0.24 + value * 6.1;
          const angle = stream * 0.77 + side * value * 1.34 + Math.sin(value * 8 + stream) * 0.18;
          return new THREE.Vector3(
            Math.cos(angle) * radius * (0.76 + value * 0.18),
            side * (0.18 + value * 3.46) + Math.sin(angle * 1.7) * (0.16 + value * 0.54),
            Math.sin(angle) * radius * 0.54 + Math.sin(value * 10 + stream) * (0.1 + value * 0.3),
          );
        };
        for (let segment = 0; segment < segments; segment += 1) {
          const progressStart = segment / segments;
          const progressEnd = (segment + 1) / segments;
          addSegment(point(progressStart), point(progressEnd), progressStart, progressEnd, phase, kind);
        }
      }
    }
  });
}

function createDnaStructureGeometry() {
  return createStructureLineGeometry((addSegment) => {
    const segments = 220;
    const orbitCount = 5;
    for (let orbit = 0; orbit < orbitCount; orbit += 1) {
      for (let rail = 0; rail < 2; rail += 1) {
        const phase = orbit * Math.PI * 0.4 + rail * 0.62;
        const kind = orbit / Math.max(1, orbitCount - 1) * 0.7 + (rail === 0 ? 0.3 : 0.16);
        const radialOffset = (rail - 0.5) * 0.12;
        for (let segment = 0; segment < segments; segment += 1) {
          const progressStart = segment / segments;
          const progressEnd = (segment + 1) / segments;
          addSegment(
            sampleSpiralOrbit(progressStart, orbit, radialOffset),
            sampleSpiralOrbit(progressEnd, orbit, radialOffset),
            progressStart,
            progressEnd,
            phase,
            kind,
          );
        }
      }
    }

    const coreRings = 3;
    const coreSegments = 96;
    for (let ring = 0; ring < coreRings; ring += 1) {
      const radius = 0.48 + ring * 0.31;
      const tilt = ring * 0.82;
      for (let segment = 0; segment < coreSegments; segment += 1) {
        const progressStart = segment / coreSegments;
        const progressEnd = (segment + 1) / coreSegments;
        const corePoint = (progress: number) => {
          const angle = progress * Math.PI * 2;
          const point = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
          point.applyAxisAngle(new THREE.Vector3(1, 0, 0), tilt * 0.46);
          point.applyAxisAngle(new THREE.Vector3(0, 1, 0), tilt);
          return point;
        };
        addSegment(
          corePoint(progressStart),
          corePoint(progressEnd),
          progressStart,
          progressEnd,
          tilt,
          0.28 + ring * 0.1,
        );
      }
    }

    for (let spoke = 0; spoke < 15; spoke += 1) {
      const orbit = spoke % orbitCount;
      const progress = spoke / 15;
      const end = sampleSpiralOrbit(progress, orbit).multiplyScalar(0.9);
      addSegment(end.clone().multiplyScalar(0.14), end, 0, 1, spoke * 0.41, 0.22 + orbit * 0.08);
    }
  });
}

function transitionVisibility(scene: number, from: number, to: number, release: number, adopt: number) {
  if (from === to) return scene === to ? 1 : 0;
  const leaving = scene === from ? 1 - release : 0;
  const arriving = scene === to ? adopt : 0;
  return Math.max(leaving, arriving);
}

function ParticleWorld({ chapter, echo, entryOrigin, pointer, reducedMotion, spirit }: Omit<ParticleStoryFieldProps, "spiritIndex"> & { spirit: GuideSpiritConfig }) {
  const { camera, gl } = useThree();
  const pointsRef = useRef<THREE.Points>(null);
  const lineSegmentsRef = useRef<THREE.LineSegments>(null);
  const grassFluffRef = useRef<THREE.Points>(null);
  const grassLinesRef = useRef<THREE.LineSegments>(null);
  const grassWindLinesRef = useRef<THREE.LineSegments>(null);
  const mountainLinesRef = useRef<THREE.LineSegments>(null);
  const oceanLinesRef = useRef<THREE.LineSegments>(null);
  const societyParticlesRef = useRef<THREE.Points>(null);
  const societyFlowLinesRef = useRef<THREE.LineSegments>(null);
  const nebulaLinesRef = useRef<THREE.LineSegments>(null);
  const dnaLinesRef = useRef<THREE.LineSegments>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const grassFluffMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const grassMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const grassWindMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const mountainMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const oceanMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const societyParticleMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const societyFlowMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const nebulaMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const dnaMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const fromChapter = useRef(chapter);
  const introValue = useRef(0);
  const morphValue = useRef(1);
  const toChapter = useRef(chapter);
  const echoOrigin = useRef(new THREE.Vector2());
  const energyValue = useRef(0);
  const previousEcho = useRef(1);
  const pressValue = useRef(0);
  const pointerTarget = useRef(new THREE.Vector2());
  const stageOffsetTarget = useRef(new THREE.Vector2());
  const stageScaleValue = useRef(0.3);
  const amplitudeValue = useRef(PARTICLE_CHAPTER_DYNAMICS[chapter].amplitude);
  const interactionValue = useRef(PARTICLE_CHAPTER_DYNAMICS[chapter].interaction);
  const motionValue = useRef(PARTICLE_CHAPTER_DYNAMICS[chapter].motion);
  const radiusValue = useRef(PARTICLE_CHAPTER_DYNAMICS[chapter].pointerRadius);
  const velocityTarget = useRef(new THREE.Vector2());
  const cameraTarget = useRef(new THREE.Vector3());
  const cameraOrbitTarget = useRef(new THREE.Vector3());
  const cameraLookTarget = useRef(new THREE.Vector3());
  const societyTopology = useRef({
    currentLinks: createSocialEpochLinks(0),
    currentNodes: SOCIAL_NODES.map((_, index) => sampleSocialNodeAtEpoch(index, 0)),
    epoch: 0,
    nextLinks: createSocialEpochLinks(1),
    nextNodes: SOCIAL_NODES.map((_, index) => sampleSocialNodeAtEpoch(index, 1)),
  });
  const count = useMemo(() => {
    if (typeof window === "undefined") return PARTICLE_FIELD_PERFORMANCE.mobile;
    const small = window.matchMedia("(max-width: 760px)").matches;
    return reducedMotion
      ? PARTICLE_FIELD_PERFORMANCE.reducedMotion
      : small
        ? PARTICLE_FIELD_PERFORMANCE.mobile
        : PARTICLE_FIELD_PERFORMANCE.desktop;
  }, [reducedMotion]);
  const geometry = useMemo(() => createParticleGeometry(count), [count]);
  const societyParticleGeometry = useMemo(() => createSocietyEvolutionGeometry(geometry), [geometry]);
  const grassLineGeometry = useMemo(() => createGrassLineGeometry(count), [count]);
  const grassFluffGeometry = useMemo(() => createGrassFluffGeometry(count), [count]);
  const grassWindGeometry = useMemo(() => createGrassWindGeometry(), []);
  const mountainLineGeometry = useMemo(() => createMountainTerrainGeometry(), []);
  const oceanLineGeometry = useMemo(() => createOceanLineGeometry(), []);
  const societyFlowGeometry = useMemo(() => createSocietyFlowGeometry(), []);
  const nebulaLineGeometry = useMemo(() => createNebulaStreamGeometry(), []);
  const dnaLineGeometry = useMemo(() => createDnaStructureGeometry(), []);
  const lineGeometry = useMemo(() => {
    const values = new Float32Array(SOCIAL_LINKS.length * 6);
    SOCIAL_LINKS.forEach(([from, to], index) => {
      const start = SOCIAL_NODES[from];
      const end = SOCIAL_NODES[to];
      values.set([start.x, start.y, start.z, end.x, end.y, end.z], index * 6);
    });
    const next = new THREE.BufferGeometry();
    next.setAttribute("position", new THREE.BufferAttribute(values, 3));
    return next;
  }, []);
  const palette = spirit.palette;
  const mountainTerrainColor = useMemo(
    () => new THREE.Color(palette[1])
      .lerp(new THREE.Color(palette[2]), 0.48)
      .lerp(new THREE.Color("#e7ebf2"), 0.14),
    [],
  );
  const grassUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(palette[2]) },
      uEnergy: { value: 0 },
      uGuideMode: { value: spirit.responseMode },
      uLocalPointer: { value: new THREE.Vector2() },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const grassFluffUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(palette[2]) },
      uEnergy: { value: 0 },
      uGuideMode: { value: spirit.responseMode },
      uLocalPointer: { value: new THREE.Vector2() },
      uPixelRatio: { value: 1 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const grassWindUniforms = useMemo(
    () => ({
      uBrightColor: { value: new THREE.Color(palette[2]) },
      uColor: { value: new THREE.Color(palette[0]) },
      uEnergy: { value: 0 },
      uGuideMode: { value: spirit.responseMode },
      uLocalPointer: { value: new THREE.Vector2() },
      uMode: { value: 3 },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const mountainUniforms = useMemo(
    () => ({
      uColor: { value: mountainTerrainColor.clone() },
      uEnergy: { value: 0 },
      uLocalPointer: { value: new THREE.Vector2() },
      uMode: { value: 0 },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const oceanUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(palette[2]) },
      uEnergy: { value: 0 },
      uLocalPointer: { value: new THREE.Vector2() },
      uMode: { value: 1 },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const societyFlowUniforms = useMemo(
    () => ({
      uBrightColor: { value: new THREE.Color(palette[2]) },
      uColor: { value: new THREE.Color(palette[1]) },
      uEnergy: { value: 0 },
      uGuideMode: { value: spirit.responseMode },
      uLocalPointer: { value: new THREE.Vector2() },
      uMode: { value: 0 },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const societyParticleUniforms = useMemo(
    () => ({
      uBrightColor: { value: new THREE.Color(palette[2]) },
      uColor: { value: new THREE.Color(palette[0]) },
      uPixelRatio: { value: 1 },
      uTime: { value: 0 },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const nebulaUniforms = useMemo(
    () => ({
      uBrightColor: { value: new THREE.Color(palette[2]) },
      uColor: { value: new THREE.Color(palette[0]) },
      uEnergy: { value: 0 },
      uGuideMode: { value: spirit.responseMode },
      uLocalPointer: { value: new THREE.Vector2() },
      uMode: { value: 1 },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const dnaUniforms = useMemo(
    () => ({
      uBrightColor: { value: new THREE.Color(palette[2]) },
      uColor: { value: new THREE.Color(palette[0]) },
      uEnergy: { value: 0 },
      uGuideMode: { value: spirit.responseMode },
      uLocalPointer: { value: new THREE.Vector2() },
      uMode: { value: 2 },
      uPress: { value: 0 },
      uTime: { value: 0 },
      uVelocity: { value: new THREE.Vector2() },
      uVisibility: { value: 0 },
    }),
    [],
  );
  const uniforms = useMemo(
    () => ({
      uAmplitude: { value: spirit.field.amplitude },
      uAspect: { value: 1 },
      uColorA: { value: new THREE.Color(palette[0]) },
      uColorB: { value: new THREE.Color(palette[1]) },
      uColorC: { value: new THREE.Color(palette[2]) },
      uColorD: { value: new THREE.Color(palette[3]) },
      uDepthResponse: { value: PARTICLE_CHAPTER_DYNAMICS[chapter].depthResponse },
      uEcho: { value: 1 },
      uEchoOrigin: { value: new THREE.Vector2() },
      uEnergy: { value: 0 },
      uEntryOrigin: { value: new THREE.Vector2(entryOrigin.current.x, entryOrigin.current.y) },
      uFrequency: { value: spirit.field.frequency },
      uFromChapter: { value: chapter },
      uGuideMode: { value: spirit.responseMode },
      uIntro: { value: 0 },
      uMorph: { value: 1 },
      uPixelRatio: { value: 1 },
      uPointer: { value: new THREE.Vector2() },
      uPointerForce: { value: spirit.field.pointerForce },
      uPointerRadius: { value: spirit.field.pointerRadius },
      uPress: { value: 0 },
      uSpeed: { value: spirit.field.speed },
      uStageOffset: { value: new THREE.Vector2() },
      uStageScale: { value: 0.3 },
      uTime: { value: 0 },
      uToChapter: { value: chapter },
      uVelocity: { value: new THREE.Vector2() },
    }),
    [],
  );
  const cameraPath = useMemo(
    () => PARTICLE_CHAPTER_DYNAMICS.map(({ cameraPosition }) => new THREE.Vector3(...cameraPosition)),
    [],
  );
  const cameraLookPath = useMemo(
    () => PARTICLE_CHAPTER_DYNAMICS.map(({ cameraLook }) => new THREE.Vector3(...cameraLook)),
    [],
  );
  const cameraOrbitPath = useMemo(
    () => PARTICLE_CHAPTER_DYNAMICS.map(({ cameraOrbit }) => new THREE.Vector3(...cameraOrbit)),
    [],
  );

  useEffect(() => () => {
    geometry.dispose();
    grassLineGeometry.dispose();
    grassFluffGeometry.dispose();
    grassWindGeometry.dispose();
    lineGeometry.dispose();
    mountainLineGeometry.dispose();
    oceanLineGeometry.dispose();
    societyParticleGeometry.dispose();
    societyFlowGeometry.dispose();
    nebulaLineGeometry.dispose();
    dnaLineGeometry.dispose();
  }, [dnaLineGeometry, geometry, grassFluffGeometry, grassLineGeometry, grassWindGeometry, lineGeometry, mountainLineGeometry, nebulaLineGeometry, oceanLineGeometry, societyFlowGeometry, societyParticleGeometry]);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;
    material.uniforms.uColorA.value.set(palette[0]);
    material.uniforms.uColorB.value.set(palette[1]);
    material.uniforms.uColorC.value.set(palette[2]);
    material.uniforms.uColorD.value.set(palette[3]);
    material.uniforms.uFrequency.value = spirit.field.frequency;
    material.uniforms.uGuideMode.value = spirit.responseMode;
    grassFluffMaterialRef.current?.uniforms.uColor.value.set(palette[2]);
    if (grassFluffMaterialRef.current) grassFluffMaterialRef.current.uniforms.uGuideMode.value = spirit.responseMode;
    grassMaterialRef.current?.uniforms.uColor.value.set(palette[2]);
    grassWindMaterialRef.current?.uniforms.uColor.value.set(palette[0]);
    grassWindMaterialRef.current?.uniforms.uBrightColor.value.set(palette[2]);
    mountainMaterialRef.current?.uniforms.uColor.value
      .set(palette[1])
      .lerp(new THREE.Color(palette[2]), 0.48)
      .lerp(new THREE.Color("#e7ebf2"), 0.14);
    oceanMaterialRef.current?.uniforms.uColor.value.set(palette[2]);
    societyParticleMaterialRef.current?.uniforms.uColor.value.set(palette[0]);
    societyParticleMaterialRef.current?.uniforms.uBrightColor.value.set(palette[2]);
    societyFlowMaterialRef.current?.uniforms.uColor.value.set(palette[1]);
    societyFlowMaterialRef.current?.uniforms.uBrightColor.value.set(palette[2]);
    nebulaMaterialRef.current?.uniforms.uColor.value.set(palette[0]);
    nebulaMaterialRef.current?.uniforms.uBrightColor.value.set(palette[2]);
    dnaMaterialRef.current?.uniforms.uColor.value.set(palette[0]);
    dnaMaterialRef.current?.uniforms.uBrightColor.value.set(palette[2]);
  }, [palette, spirit]);

  useEffect(() => {
    if (chapter === toChapter.current) return;
    fromChapter.current = toChapter.current;
    toChapter.current = chapter;
    morphValue.current = 0;
  }, [chapter]);

  useEffect(() => {
    geometry.setDrawRange(0, Math.floor(count * PARTICLE_CHAPTER_DYNAMICS[chapter].particleRatio));
  }, [chapter, count, geometry]);

  useFrame((state, delta) => {
    const material = materialRef.current;
    const points = pointsRef.current;
    if (!material || !points) return;
    const dynamics = PARTICLE_CHAPTER_DYNAMICS[toChapter.current];
    const sourceDynamics = PARTICLE_CHAPTER_DYNAMICS[fromChapter.current];
    introValue.current = reducedMotion
      ? 1
      : THREE.MathUtils.lerp(introValue.current, 1, 1 - Math.exp(-delta * 1.4));
    morphValue.current = reducedMotion
      ? 1
      : THREE.MathUtils.lerp(
          morphValue.current,
          1,
          1 - Math.exp(-delta * (4.2 / dynamics.transitionSeconds)),
        );
    const adopt = THREE.MathUtils.smoothstep(morphValue.current, 0.46, 1);
    const release = THREE.MathUtils.smoothstep(morphValue.current, 0, 0.46);
    pressValue.current = THREE.MathUtils.lerp(
      pressValue.current,
      pointer.current.down ? 1 : 0,
      1 - Math.exp(-delta * (pointer.current.down ? dynamics.pressAttack : dynamics.pressRelease)),
    );
    energyValue.current = THREE.MathUtils.lerp(
      energyValue.current,
      Math.min(1, pointer.current.energy),
      1 - Math.exp(-delta * 5.5),
    );
    if (echo.current + 0.2 < previousEcho.current) {
      echoOrigin.current.set(pointer.current.x, pointer.current.y);
    }
    previousEcho.current = echo.current;
    material.uniforms.uAspect.value = state.size.width / Math.max(1, state.size.height);
    material.uniforms.uEntryOrigin.value.set(entryOrigin.current.x, entryOrigin.current.y);
    material.uniforms.uFromChapter.value = fromChapter.current;
    material.uniforms.uIntro.value = introValue.current;
    material.uniforms.uMorph.value = morphValue.current;
    material.uniforms.uToChapter.value = toChapter.current;
    material.uniforms.uEchoOrigin.value.lerp(echoOrigin.current, 1 - Math.exp(-delta * 14));
    material.uniforms.uEnergy.value = energyValue.current;
    material.uniforms.uTime.value = state.clock.elapsedTime;
    pointerTarget.current.set(pointer.current.x, pointer.current.y);
    velocityTarget.current.set(pointer.current.vx, pointer.current.vy);
    material.uniforms.uPointer.value.lerp(pointerTarget.current, 1 - Math.exp(-delta * 8));
    material.uniforms.uVelocity.value.lerp(velocityTarget.current, 1 - Math.exp(-delta * 7));
    material.uniforms.uPress.value = pressValue.current;
    material.uniforms.uEcho.value = echo.current;
    material.uniforms.uPixelRatio.value = Math.min(1.7, gl.getPixelRatio());
    const dynamicsDamping = 1 - Math.exp(-delta * 2.6);
    amplitudeValue.current = THREE.MathUtils.lerp(amplitudeValue.current, dynamics.amplitude, dynamicsDamping);
    interactionValue.current = THREE.MathUtils.lerp(interactionValue.current, dynamics.interaction, dynamicsDamping);
    motionValue.current = THREE.MathUtils.lerp(motionValue.current, dynamics.motion, dynamicsDamping);
    radiusValue.current = THREE.MathUtils.lerp(radiusValue.current, dynamics.pointerRadius, dynamicsDamping);
    material.uniforms.uAmplitude.value = spirit.field.amplitude * amplitudeValue.current;
    material.uniforms.uDepthResponse.value = dynamics.depthResponse;
    material.uniforms.uPointerForce.value = spirit.field.pointerForce * interactionValue.current;
    material.uniforms.uPointerRadius.value = spirit.field.pointerRadius * radiusValue.current;
    material.uniforms.uSpeed.value = spirit.field.speed * motionValue.current;
    const smallViewport = state.size.width <= 760;
    const targetScale = smallViewport ? dynamics.mobileScale : dynamics.desktopScale;
    stageScaleValue.current = THREE.MathUtils.lerp(
      stageScaleValue.current,
      targetScale,
      1 - Math.exp(-delta * 3.2),
    );
    const targetOffset = smallViewport ? dynamics.mobileOffset : dynamics.desktopOffset;
    stageOffsetTarget.current.set(
      targetOffset[0],
      targetOffset[1],
    );
    material.uniforms.uStageScale.value = stageScaleValue.current;
    material.uniforms.uStageOffset.value.lerp(stageOffsetTarget.current, 1 - Math.exp(-delta * 3.2));
    const stageOffset = material.uniforms.uStageOffset.value as THREE.Vector2;
    if (lineSegmentsRef.current) {
      lineSegmentsRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      lineSegmentsRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (grassLinesRef.current) {
      grassLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      grassLinesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (grassFluffRef.current) {
      grassFluffRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      grassFluffRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (grassWindLinesRef.current) {
      grassWindLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      grassWindLinesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (mountainLinesRef.current) {
      mountainLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      mountainLinesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (oceanLinesRef.current) {
      oceanLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      oceanLinesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (societyParticlesRef.current) {
      societyParticlesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      societyParticlesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (societyFlowLinesRef.current) {
      societyFlowLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      societyFlowLinesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (nebulaLinesRef.current) {
      nebulaLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      nebulaLinesRef.current.scale.setScalar(stageScaleValue.current);
    }
    if (dnaLinesRef.current) {
      dnaLinesRef.current.position.set(stageOffset.x, stageOffset.y, 0);
      dnaLinesRef.current.scale.setScalar(stageScaleValue.current);
    }

    const cameraBlend = THREE.MathUtils.smoothstep(adopt, 0, 1);
    const targetCamera = cameraTarget.current
      .copy(cameraPath[fromChapter.current])
      .lerp(cameraPath[toChapter.current], cameraBlend);
    const orbit = cameraOrbitTarget.current
      .copy(cameraOrbitPath[fromChapter.current])
      .lerp(cameraOrbitPath[toChapter.current], cameraBlend);
    const orbitSpeed = THREE.MathUtils.lerp(
      sourceDynamics.cameraSpeed,
      dynamics.cameraSpeed,
      cameraBlend,
    );
    const cameraPointerX = THREE.MathUtils.lerp(sourceDynamics.cameraPointer[0], dynamics.cameraPointer[0], cameraBlend);
    const cameraPointerY = THREE.MathUtils.lerp(sourceDynamics.cameraPointer[1], dynamics.cameraPointer[1], cameraBlend);
    const cameraPointerZ = THREE.MathUtils.lerp(sourceDynamics.cameraPointer[2], dynamics.cameraPointer[2], cameraBlend);
    const cameraEnergyDolly = THREE.MathUtils.lerp(sourceDynamics.cameraEnergyDolly, dynamics.cameraEnergyDolly, cameraBlend);
    const cameraDamping = THREE.MathUtils.lerp(sourceDynamics.cameraDamping, dynamics.cameraDamping, cameraBlend);
    const orbitWeight = reducedMotion ? 0.08 : 1;
    const orbitTime = state.clock.elapsedTime * orbitSpeed;
    targetCamera.x += Math.sin(orbitTime) * orbit.x * orbitWeight + pointer.current.x * cameraPointerX;
    targetCamera.y += Math.cos(orbitTime * 0.73 + 0.8) * orbit.y * orbitWeight + pointer.current.y * cameraPointerY;
    targetCamera.z += Math.sin(orbitTime * 0.51 + 1.4) * orbit.z * orbitWeight
      + pointer.current.y * cameraPointerZ
      + energyValue.current * cameraEnergyDolly;
    camera.position.lerp(targetCamera, 1 - Math.exp(-delta * (reducedMotion ? 8 : cameraDamping)));
    if (camera instanceof THREE.PerspectiveCamera) {
      const targetFov = THREE.MathUtils.lerp(
        sourceDynamics.cameraFov,
        dynamics.cameraFov,
        cameraBlend,
      ) + energyValue.current * 1.8;
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 1 - Math.exp(-delta * 2.1));
      camera.updateProjectionMatrix();
    }
    const lookTarget = cameraLookTarget.current
      .copy(cameraLookPath[fromChapter.current])
      .lerp(cameraLookPath[toChapter.current], cameraBlend);
    lookTarget.x += Math.sin(orbitTime * 0.64 + 0.4) * orbit.x * 0.12 * orbitWeight;
    lookTarget.y += Math.cos(orbitTime * 0.46) * orbit.y * 0.08 * orbitWeight;
    camera.lookAt(lookTarget);
    const planarScene = toChapter.current === 0 || toChapter.current === 2 || toChapter.current === 3;
    const rotationWeight = planarScene ? 0.12 : 1;
    points.rotation.y = (Math.sin(state.clock.elapsedTime * spirit.field.rotation) * 0.04 + pointer.current.x * 0.026) * rotationWeight;
    points.rotation.x = (Math.sin(state.clock.elapsedTime * 0.052) * 0.014 + pointer.current.y * -0.02) * rotationWeight;

    const societyVisibility = transitionVisibility(1, fromChapter.current, toChapter.current, release, adopt);
    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity = societyVisibility * societyVisibility * (0.17 + Math.sin(state.clock.elapsedTime * 0.7) * 0.025);
      lineMaterialRef.current.color.set(palette[1]);
    }
    if (societyVisibility > 0.01) {
      const positionAttribute = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
      const positions = positionAttribute.array as Float32Array;
      const pointerX = (pointer.current.x * 5.15 - stageOffset.x) / Math.max(0.01, stageScaleValue.current);
      const pointerY = (pointer.current.y * 3.05 - stageOffset.y) / Math.max(0.01, stageScaleValue.current);
      const lineDamping = 1 - Math.exp(-delta * 8.5);
      const evolutionTime = state.clock.elapsedTime * (reducedMotion ? 0 : 0.115);
      const epoch = Math.floor(evolutionTime);
      if (societyTopology.current.epoch !== epoch) {
        societyTopology.current = {
          currentLinks: createSocialEpochLinks(epoch),
          currentNodes: SOCIAL_NODES.map((_, index) => sampleSocialNodeAtEpoch(index, epoch)),
          epoch,
          nextLinks: createSocialEpochLinks(epoch + 1),
          nextNodes: SOCIAL_NODES.map((_, index) => sampleSocialNodeAtEpoch(index, epoch + 1)),
        };
      }
      const epochPhase = evolutionTime - epoch;
      const generationBlend = THREE.MathUtils.smoothstep(epochPhase, 0.22, 0.92);
      societyTopology.current.currentLinks.forEach(([from, to], linkIndex) => {
        const [nextFrom, nextTo] = societyTopology.current.nextLinks[linkIndex];
        [[from, nextFrom], [to, nextTo]].forEach(([nodeIndex, nextNodeIndex], endpoint) => {
          const node = societyTopology.current.currentNodes[nodeIndex];
          const nextNode = societyTopology.current.nextNodes[nextNodeIndex];
          const driftRate = 0.09 + hashNumber(linkIndex * 9.7 + endpoint * 3.1) * 0.18;
          const driftPhase = state.clock.elapsedTime * driftRate + linkIndex * 0.41 + endpoint * 1.7;
          const baseX = THREE.MathUtils.lerp(node.x, nextNode.x, generationBlend) + Math.sin(driftPhase) * 0.075;
          const baseY = THREE.MathUtils.lerp(node.y, nextNode.y, generationBlend) + Math.cos(driftPhase * 0.83) * 0.055;
          const baseZ = THREE.MathUtils.lerp(node.z, nextNode.z, generationBlend) + Math.sin(driftPhase * 0.57) * 0.045;
          const dx = pointerX - baseX;
          const dy = pointerY - baseY;
          const distance = Math.max(0.001, Math.hypot(dx, dy));
          const influence = Math.exp(-distance * distance * 0.38) * energyValue.current;
          const pull = influence * (pressValue.current * 0.34 - (1 - pressValue.current) * 0.08);
          const swirl = influence * pressValue.current * Math.sign(pointer.current.vx + 0.001) * 0.08;
          const targetX = baseX + dx * pull - (dy / distance) * swirl;
          const targetY = baseY + dy * pull + (dx / distance) * swirl;
          const offset = linkIndex * 6 + endpoint * 3;
          positions[offset] = THREE.MathUtils.lerp(positions[offset], targetX, lineDamping);
          positions[offset + 1] = THREE.MathUtils.lerp(positions[offset + 1], targetY, lineDamping);
          positions[offset + 2] = THREE.MathUtils.lerp(positions[offset + 2], baseZ + influence * 0.24, lineDamping);
        });
      });
      positionAttribute.needsUpdate = true;
    }
    if (grassMaterialRef.current) {
      const grassVisibility = transitionVisibility(3, fromChapter.current, toChapter.current, release, adopt);
      const grassMaterial = grassMaterialRef.current;
      grassMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed * motionValue.current;
      grassMaterial.uniforms.uVisibility.value = grassVisibility * grassVisibility;
      grassMaterial.uniforms.uPress.value = pressValue.current;
      grassMaterial.uniforms.uEnergy.value = energyValue.current;
      grassMaterial.uniforms.uGuideMode.value = spirit.responseMode;
      grassMaterial.uniforms.uLocalPointer.value.set(
        (pointer.current.x * 5.15 - stageOffset.x) / Math.max(0.01, stageScaleValue.current),
        (pointer.current.y * 3.05 - stageOffset.y) / Math.max(0.01, stageScaleValue.current),
      );
      grassMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    const localPointerX = (pointer.current.x * 5.15 - stageOffset.x) / Math.max(0.01, stageScaleValue.current);
    const localPointerY = (pointer.current.y * 3.05 - stageOffset.y) / Math.max(0.01, stageScaleValue.current);
    if (grassFluffMaterialRef.current) {
      const visibility = transitionVisibility(3, fromChapter.current, toChapter.current, release, adopt);
      const fluffMaterial = grassFluffMaterialRef.current;
      fluffMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed * motionValue.current * (reducedMotion ? 0.2 : 1);
      fluffMaterial.uniforms.uVisibility.value = visibility * visibility;
      fluffMaterial.uniforms.uEnergy.value = energyValue.current;
      fluffMaterial.uniforms.uGuideMode.value = spirit.responseMode;
      fluffMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      fluffMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
      fluffMaterial.uniforms.uPixelRatio.value = Math.min(1.7, gl.getPixelRatio());
    }
    if (grassWindMaterialRef.current) {
      const visibility = transitionVisibility(3, fromChapter.current, toChapter.current, release, adopt);
      const structureMaterial = grassWindMaterialRef.current;
      structureMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed * motionValue.current;
      structureMaterial.uniforms.uVisibility.value = visibility * visibility * 0.82;
      structureMaterial.uniforms.uEnergy.value = energyValue.current;
      structureMaterial.uniforms.uGuideMode.value = spirit.responseMode;
      structureMaterial.uniforms.uPress.value = pressValue.current;
      structureMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      structureMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    if (mountainMaterialRef.current) {
      const mountainVisibility = transitionVisibility(0, fromChapter.current, toChapter.current, release, adopt);
      const mountainMaterial = mountainMaterialRef.current;
      mountainMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed * motionValue.current;
      mountainMaterial.uniforms.uVisibility.value = mountainVisibility * mountainVisibility;
      mountainMaterial.uniforms.uPress.value = pressValue.current;
      mountainMaterial.uniforms.uEnergy.value = energyValue.current;
      mountainMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      mountainMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    if (oceanMaterialRef.current) {
      const oceanVisibility = transitionVisibility(2, fromChapter.current, toChapter.current, release, adopt);
      const oceanMaterial = oceanMaterialRef.current;
      oceanMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed * motionValue.current;
      oceanMaterial.uniforms.uVisibility.value = oceanVisibility * oceanVisibility;
      oceanMaterial.uniforms.uPress.value = pressValue.current;
      oceanMaterial.uniforms.uEnergy.value = energyValue.current;
      oceanMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      oceanMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    if (societyFlowMaterialRef.current) {
      const visibility = transitionVisibility(1, fromChapter.current, toChapter.current, release, adopt);
      const structureMaterial = societyFlowMaterialRef.current;
      structureMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed * (reducedMotion ? 0 : 1);
      structureMaterial.uniforms.uVisibility.value = visibility * visibility * 0.52;
      structureMaterial.uniforms.uEnergy.value = energyValue.current;
      structureMaterial.uniforms.uGuideMode.value = spirit.responseMode;
      structureMaterial.uniforms.uPress.value = pressValue.current;
      structureMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      structureMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    if (societyParticleMaterialRef.current) {
      const visibility = transitionVisibility(1, fromChapter.current, toChapter.current, release, adopt);
      const societyMaterial = societyParticleMaterialRef.current;
      societyMaterial.uniforms.uTime.value = reducedMotion ? 0 : state.clock.elapsedTime;
      societyMaterial.uniforms.uVisibility.value = visibility * visibility;
      societyMaterial.uniforms.uPixelRatio.value = Math.min(1.7, gl.getPixelRatio());
    }
    if (nebulaMaterialRef.current) {
      const visibility = transitionVisibility(4, fromChapter.current, toChapter.current, release, adopt);
      const structureMaterial = nebulaMaterialRef.current;
      structureMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed;
      structureMaterial.uniforms.uVisibility.value = visibility * visibility;
      structureMaterial.uniforms.uEnergy.value = energyValue.current;
      structureMaterial.uniforms.uGuideMode.value = spirit.responseMode;
      structureMaterial.uniforms.uPress.value = pressValue.current;
      structureMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      structureMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    if (dnaMaterialRef.current) {
      const visibility = transitionVisibility(5, fromChapter.current, toChapter.current, release, adopt);
      const structureMaterial = dnaMaterialRef.current;
      structureMaterial.uniforms.uTime.value = state.clock.elapsedTime * spirit.field.speed;
      structureMaterial.uniforms.uVisibility.value = visibility * visibility;
      structureMaterial.uniforms.uEnergy.value = energyValue.current;
      structureMaterial.uniforms.uGuideMode.value = spirit.responseMode;
      structureMaterial.uniforms.uPress.value = pressValue.current;
      structureMaterial.uniforms.uLocalPointer.value.set(localPointerX, localPointerY);
      structureMaterial.uniforms.uVelocity.value.set(pointer.current.vx, pointer.current.vy);
    }
    pointer.current.energy *= Math.exp(-delta * dynamics.energyDecay);
  });

  return (
    <group>
      <points frustumCulled={false} geometry={geometry} ref={pointsRef}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={chapter === 0}
          fragmentShader={PARTICLE_FRAGMENT_SHADER}
          ref={materialRef}
          transparent
          uniforms={uniforms}
          vertexShader={PARTICLE_VERTEX_SHADER}
        />
      </points>
      <points frustumCulled={false} geometry={societyParticleGeometry} ref={societyParticlesRef} visible={chapter === 1}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest={false}
          depthWrite={false}
          fragmentShader={SOCIETY_PARTICLE_FRAGMENT_SHADER}
          ref={societyParticleMaterialRef}
          transparent
          uniforms={societyParticleUniforms}
          vertexShader={SOCIETY_PARTICLE_VERTEX_SHADER}
        />
      </points>
      <lineSegments frustumCulled={false} geometry={mountainLineGeometry} ref={mountainLinesRef} visible={chapter === 0}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={SURFACE_LINE_FRAGMENT_SHADER}
          ref={mountainMaterialRef}
          transparent
          uniforms={mountainUniforms}
          vertexShader={SURFACE_LINE_VERTEX_SHADER}
        />
      </lineSegments>
      <lineSegments frustumCulled={false} geometry={oceanLineGeometry} ref={oceanLinesRef} visible={chapter === 2}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={SURFACE_LINE_FRAGMENT_SHADER}
          ref={oceanMaterialRef}
          transparent
          uniforms={oceanUniforms}
          vertexShader={SURFACE_LINE_VERTEX_SHADER}
        />
      </lineSegments>
      <lineSegments frustumCulled={false} geometry={societyFlowGeometry} ref={societyFlowLinesRef} visible={chapter === 1}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={STRUCTURE_LINE_FRAGMENT_SHADER}
          ref={societyFlowMaterialRef}
          transparent
          uniforms={societyFlowUniforms}
          vertexShader={STRUCTURE_LINE_VERTEX_SHADER}
        />
      </lineSegments>
      <lineSegments frustumCulled={false} geometry={nebulaLineGeometry} ref={nebulaLinesRef} visible={chapter === 4}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={STRUCTURE_LINE_FRAGMENT_SHADER}
          ref={nebulaMaterialRef}
          transparent
          uniforms={nebulaUniforms}
          vertexShader={STRUCTURE_LINE_VERTEX_SHADER}
        />
      </lineSegments>
      <lineSegments frustumCulled={false} geometry={dnaLineGeometry} ref={dnaLinesRef} visible={chapter === 5}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={STRUCTURE_LINE_FRAGMENT_SHADER}
          ref={dnaMaterialRef}
          transparent
          uniforms={dnaUniforms}
          vertexShader={STRUCTURE_LINE_VERTEX_SHADER}
        />
      </lineSegments>
      <lineSegments geometry={lineGeometry} ref={lineSegmentsRef} visible={chapter === 1}>
        <lineBasicMaterial depthWrite={false} ref={lineMaterialRef} transparent />
      </lineSegments>
      <lineSegments frustumCulled={false} geometry={grassLineGeometry} ref={grassLinesRef} visible={chapter === 3}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={GRASS_FRAGMENT_SHADER}
          ref={grassMaterialRef}
          transparent
          uniforms={grassUniforms}
          vertexShader={GRASS_VERTEX_SHADER}
        />
      </lineSegments>
      <points frustumCulled={false} geometry={grassFluffGeometry} ref={grassFluffRef} visible={chapter === 3}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={GRASS_FLUFF_FRAGMENT_SHADER}
          ref={grassFluffMaterialRef}
          transparent
          uniforms={grassFluffUniforms}
          vertexShader={GRASS_FLUFF_VERTEX_SHADER}
        />
      </points>
      <lineSegments frustumCulled={false} geometry={grassWindGeometry} ref={grassWindLinesRef} visible={chapter === 3}>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest
          depthWrite={false}
          fragmentShader={STRUCTURE_LINE_FRAGMENT_SHADER}
          ref={grassWindMaterialRef}
          transparent
          uniforms={grassWindUniforms}
          vertexShader={STRUCTURE_LINE_VERTEX_SHADER}
        />
      </lineSegments>
    </group>
  );
}

function Atmosphere({ chapter, pointer, spirit }: Pick<ParticleStoryFieldProps, "chapter" | "pointer"> & { spirit: GuideSpiritConfig }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const pointerTarget = useRef(new THREE.Vector2());
  const colors = { base: spirit.fieldBase, mist: spirit.fieldMist };
  const uniforms = useMemo(
    () => ({
      uBase: { value: new THREE.Color(colors.base) },
      uChapter: { value: 0 },
      uEnergy: { value: 0 },
      uMist: { value: new THREE.Color(colors.mist) },
      uPointer: { value: new THREE.Vector2() },
      uTime: { value: 0 },
    }),
    [],
  );

  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uBase.value.set(colors.base);
    materialRef.current.uniforms.uMist.value.set(colors.mist);
  }, [colors.base, colors.mist]);

  useFrame((state, delta) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uChapter.value = chapter;
    materialRef.current.uniforms.uEnergy.value = Math.min(1, pointer.current.energy);
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    pointerTarget.current.set(pointer.current.x, pointer.current.y);
    materialRef.current.uniforms.uPointer.value.lerp(
      pointerTarget.current,
      1 - Math.exp(-delta * 3),
    );
    if (meshRef.current) {
      meshRef.current.position.copy(state.camera.position);
      meshRef.current.quaternion.copy(state.camera.quaternion);
      const planeDistance = 2;
      meshRef.current.translateZ(-planeDistance);
      const aspect = state.size.width / Math.max(1, state.size.height);
      const halfHeight = state.camera instanceof THREE.PerspectiveCamera
        ? Math.tan(THREE.MathUtils.degToRad(state.camera.fov * 0.5)) * planeDistance
        : 1;
      meshRef.current.scale.set(halfHeight * aspect * 1.04, halfHeight * 1.04, 1);
    }
  });

  return (
    <mesh frustumCulled={false} ref={meshRef} renderOrder={-1000}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        depthTest={false}
        depthWrite={false}
        fragmentShader={ATMOSPHERE_FRAGMENT_SHADER}
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={ATMOSPHERE_VERTEX_SHADER}
      />
    </mesh>
  );
}

export function ParticleStoryField(props: ParticleStoryFieldProps) {
  const spirit = GUIDE_SPIRITS[props.spiritIndex];
  return (
    <Canvas
      camera={{ far: 30, fov: 48, near: 0.1, position: [0, 0, 9.4] }}
      dpr={[1, 1.55]}
      flat
      frameloop="always"
      gl={{ alpha: false, antialias: false, powerPreference: "high-performance" }}
    >
      <Atmosphere chapter={props.chapter} pointer={props.pointer} spirit={spirit} />
      <ParticleWorld {...props} spirit={spirit} />
    </Canvas>
  );
}
