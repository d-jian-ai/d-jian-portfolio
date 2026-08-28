"use client";

import { useEffect, useMemo, useRef, type MutableRefObject } from "react";
import { GUIDE_SPIRITS, type GuideSpiritId } from "./guide-spirit-config";
import type { ParticlePointerSignal } from "./particle-story-field";

type GuidePosition = { x: number; y: number };

type GuideSpiritProps = {
  className?: string;
  entered: boolean;
  fieldPointer: MutableRefObject<ParticlePointerSignal>;
  position: MutableRefObject<GuidePosition>;
  rawPointer: MutableRefObject<ParticlePointerSignal>;
  reducedMotion: boolean;
  spiritIndex: number;
};

type SpiritPoint = {
  alpha: number;
  group: number;
  phase: number;
  size: number;
  x: number;
  y: number;
  z: number;
};

type TrailPoint = GuidePosition & {
  alpha: number;
  life: number;
  size: number;
};

const POINT_COUNT = 960;
const TAU = Math.PI * 2;

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

function buildCore(): SpiritPoint[] {
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const z = 1 - (2 * index) / (POINT_COUNT - 1);
    const slice = Math.sqrt(Math.max(0, 1 - z * z));
    const phase = index * 2.3999632297;
    return {
      alpha: 0.3 + (z + 1) * 0.32,
      group: index % 5,
      phase,
      size: 0.58 + (z + 1) * 0.72,
      x: Math.cos(phase) * slice,
      y: Math.sin(phase) * slice,
      z,
    };
  });
}

function buildRibbon(): SpiritPoint[] {
  const random = seededRandom(0x4f77c2);
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const strand = index % 3;
    const progress = index / POINT_COUNT;
    const phase = progress * TAU + strand * 0.075;
    const thickness = (strand - 1) * 0.055 + (random() - 0.5) * 0.035;
    return {
      alpha: 0.48 + random() * 0.48,
      group: strand,
      phase,
      size: 0.7 + random() * 1.05,
      x: Math.sin(phase * 2) * 0.92 + Math.cos(phase) * thickness,
      y: Math.sin(phase * 4) * 0.42 + Math.sin(phase) * thickness,
      z: Math.cos(phase * 3) * 0.3,
    };
  });
}

const BRANCH_SEGMENTS = [
  [0, 0.72, 0, -0.66],
  [0, 0.28, -0.42, -0.04],
  [-0.42, -0.04, -0.72, -0.36],
  [-0.42, -0.04, -0.26, -0.48],
  [0, 0.14, 0.42, -0.12],
  [0.42, -0.12, 0.74, -0.46],
  [0.42, -0.12, 0.31, -0.56],
  [0, -0.18, -0.3, -0.52],
  [0, -0.2, 0.2, -0.7],
  [-0.17, 0.48, -0.48, 0.25],
  [-0.48, 0.25, -0.73, 0.05],
  [0.12, 0.48, 0.48, 0.23],
  [0.48, 0.23, 0.75, 0.01],
] as const;

function buildBranch(): SpiritPoint[] {
  const random = seededRandom(0xb41a9c);
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const group = index % BRANCH_SEGMENTS.length;
    const [x0, y0, x1, y1] = BRANCH_SEGMENTS[group];
    const progress = random();
    const jitter = (random() - 0.5) * (0.018 + progress * 0.026);
    return {
      alpha: 0.42 + random() * 0.54,
      group,
      phase: random() * TAU,
      size: 0.58 + random() * 1.12,
      x: x0 + (x1 - x0) * progress + jitter,
      y: y0 + (y1 - y0) * progress + jitter,
      z: (random() - 0.5) * 0.32,
    };
  });
}

function buildEcho(): SpiritPoint[] {
  const random = seededRandom(0xecc042);
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const ring = index % 7;
    const countInRing = Math.ceil(POINT_COUNT / 7);
    const angle = ((index / 7) % countInRing) / countInRing * TAU + ring * 0.09;
    const radius = 0.16 + ring * 0.135;
    return {
      alpha: 0.34 + (1 - ring / 8) * 0.56,
      group: ring,
      phase: angle,
      size: 0.56 + random() * 0.88,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius * 0.84,
      z: Math.sin(angle * 2) * 0.18,
    };
  });
}

function buildMist(): SpiritPoint[] {
  const random = seededRandom(0x7a1571);
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const radius = Math.pow(random(), 0.66) * 0.98;
    const angle = random() * TAU;
    return {
      alpha: 0.2 + (1 - radius) * 0.66,
      group: index % 6,
      phase: random() * TAU,
      size: 0.52 + random() * 1.58,
      x: Math.cos(angle) * radius * 1.08,
      y: Math.sin(angle) * radius * 0.72,
      z: (random() - 0.5) * 0.7,
    };
  });
}

const SPIRIT_SHAPES: Record<GuideSpiritId, SpiritPoint[]> = {
  branch: buildBranch(),
  core: buildCore(),
  echo: buildEcho(),
  mist: buildMist(),
  ribbon: buildRibbon(),
};

function mixPoint(from: SpiritPoint, to: SpiritPoint, progress: number): SpiritPoint {
  const compactX = Math.cos(from.phase) * 0.035;
  const compactY = Math.sin(from.phase) * 0.035;
  if (progress < 0.46) {
    const amount = progress / 0.46;
    const eased = amount * amount * (3 - amount * 2);
    return {
      ...from,
      alpha: from.alpha + (0.86 - from.alpha) * eased,
      size: from.size + (0.76 - from.size) * eased,
      x: from.x + (compactX - from.x) * eased,
      y: from.y + (compactY - from.y) * eased,
      z: from.z * (1 - eased),
    };
  }
  const amount = (progress - 0.46) / 0.54;
  const eased = 1 - Math.pow(1 - amount, 3);
  return {
    ...to,
    alpha: 0.86 + (to.alpha - 0.86) * eased,
    size: 0.76 + (to.size - 0.76) * eased,
    x: compactX + (to.x - compactX) * eased,
    y: compactY + (to.y - compactY) * eased,
    z: to.z * eased,
  };
}

function clamp(value: number, minimum: number, maximum: number) {
  if (!Number.isFinite(value)) return minimum;
  return Math.max(minimum, Math.min(maximum, value));
}

function rgba([red, green, blue]: readonly [number, number, number], alpha: number) {
  return `rgba(${red}, ${green}, ${blue}, ${clamp(alpha, 0, 1)})`;
}

export function GuideSpirit({
  className,
  entered,
  fieldPointer,
  position,
  rawPointer,
  reducedMotion,
  spiritIndex,
}: GuideSpiritProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    height: 1,
    lastFrame: 0,
    lastTrail: 0,
    morph: 1,
    pos: { x: 0, y: 0 },
    radius: 1,
    radiusVelocity: 0,
    trails: [] as TrailPoint[],
    velocity: { x: 0, y: 0 },
    width: 1,
  });
  const activeRef = useRef(spiritIndex);
  const fromShapeRef = useRef<SpiritPoint[]>(SPIRIT_SHAPES[GUIDE_SPIRITS[spiritIndex].id]);
  const currentShapeRef = useRef<SpiritPoint[]>(SPIRIT_SHAPES[GUIDE_SPIRITS[spiritIndex].id]);
  const targetShapeRef = useRef<SpiritPoint[]>(SPIRIT_SHAPES[GUIDE_SPIRITS[spiritIndex].id]);
  const enteredRef = useRef(entered);
  const reducedRef = useRef(reducedMotion);

  enteredRef.current = entered;
  reducedRef.current = reducedMotion;

  useEffect(() => {
    if (activeRef.current === spiritIndex) return;
    activeRef.current = spiritIndex;
    fromShapeRef.current = currentShapeRef.current.map((point) => ({ ...point }));
    targetShapeRef.current = SPIRIT_SHAPES[GUIDE_SPIRITS[spiritIndex].id];
    stateRef.current.morph = reducedMotion ? 1 : 0;
  }, [reducedMotion, spiritIndex]);

  const accentCache = useMemo(
    () => GUIDE_SPIRITS.map((spirit) => spirit.accentRgb),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const drawingCanvas = canvas;
    const drawingContext = context;
    let frameId = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      drawingCanvas.width = Math.floor(width * dpr);
      drawingCanvas.height = Math.floor(height * dpr);
      drawingCanvas.style.width = `${width}px`;
      drawingCanvas.style.height = `${height}px`;
      drawingContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      stateRef.current.width = width;
      stateRef.current.height = height;
      if (stateRef.current.pos.x === 0 && stateRef.current.pos.y === 0) {
        stateRef.current.pos.x = width <= 760 ? width * 0.5 : width * 0.67;
        stateRef.current.pos.y = height * (width <= 760 ? 0.43 : 0.48);
      }
    }

    function drawSpirit(now: number) {
      const state = stateRef.current;
      const spirit = GUIDE_SPIRITS[activeRef.current];
      const dt = clamp((now - (state.lastFrame || now - 16.67)) / 1000, 0.001, 0.05);
      state.lastFrame = now;
      const mobile = state.width <= 760;
      const raw = rawPointer.current;
      const pointerX = (raw.x * 0.5 + 0.5) * state.width;
      const pointerY = (-raw.y * 0.5 + 0.5) * state.height;
      const stageAnchor = {
        x: mobile ? state.width * 0.5 : state.width * 0.67,
        y: state.height * (mobile ? 0.43 : 0.48),
      };
      let targetX = stageAnchor.x;
      let targetY = stageAnchor.y;

      if (enteredRef.current) {
        targetX = clamp(pointerX, mobile ? 34 : 54, state.width - (mobile ? 34 : 54));
        targetY = clamp(pointerY, mobile ? 48 : 58, state.height - (mobile ? 92 : 58));
      } else {
        const dx = pointerX - stageAnchor.x;
        const dy = pointerY - stageAnchor.y;
        const distance = Math.hypot(dx, dy);
        const dragRange = state.radius * 1.6;
        if (raw.down && distance < dragRange) {
          targetX = pointerX;
          targetY = pointerY;
        } else if (distance > 1 && distance < 520) {
          const lean = spirit.id === "ribbon" ? 32 : spirit.id === "mist" ? 14 : 22;
          targetX += (dx / distance) * lean;
          targetY += (dy / distance) * lean * 0.72;
        }
      }

      const spring = spirit.spring;
      const damping = enteredRef.current ? spring.damping : spring.damping + 1.4;
      state.velocity.x += (spring.stiffness * (targetX - state.pos.x) - damping * state.velocity.x) * dt;
      state.velocity.y += (spring.stiffness * (targetY - state.pos.y) - damping * state.velocity.y) * dt;
      const speed = Math.hypot(state.velocity.x, state.velocity.y);
      if (speed > spring.maxVelocity) {
        state.velocity.x *= spring.maxVelocity / speed;
        state.velocity.y *= spring.maxVelocity / speed;
      }
      state.pos.x += state.velocity.x * dt;
      state.pos.y += state.velocity.y * dt;

      const radiusTarget = enteredRef.current
        ? clamp(Math.min(state.width, state.height) * (mobile ? 0.072 : 0.048), 30, 64)
        : clamp(Math.min(state.width, state.height) * (mobile ? 0.22 : 0.205), 120, 250);
      const radiusStiffness = 90;
      const radiusDamping = 13;
      state.radiusVelocity += (radiusStiffness * (radiusTarget - state.radius) - radiusDamping * state.radiusVelocity) * dt;
      state.radius += state.radiusVelocity * dt;

      const normalizedSpeed = Math.min(1.8, speed / 920);
      fieldPointer.current.x = (state.pos.x / state.width - 0.5) * 2;
      fieldPointer.current.y = -(state.pos.y / state.height - 0.5) * 2;
      fieldPointer.current.vx = clamp(state.velocity.x / 920, -1.8, 1.8);
      fieldPointer.current.vy = clamp(-state.velocity.y / 920, -1.8, 1.8);
      fieldPointer.current.energy = Math.min(1.5, normalizedSpeed + raw.energy * 0.3);
      fieldPointer.current.down = raw.down;
      position.current.x = state.pos.x;
      position.current.y = state.pos.y;

      if (!reducedRef.current && speed > spirit.trail.speedThreshold && now - state.lastTrail >= spirit.trail.interval) {
        state.lastTrail = now;
        state.trails.push({
          alpha: Math.min(0.46, speed / spring.maxVelocity),
          life: spirit.trail.lifetime,
          size: enteredRef.current ? 2.1 : 3.2,
          x: state.pos.x + (Math.random() - 0.5) * state.radius * 0.36,
          y: state.pos.y + (Math.random() - 0.5) * state.radius * 0.36,
        });
      }

      drawingContext.clearRect(0, 0, state.width, state.height);
      state.trails = state.trails.filter((trail) => {
        trail.life -= dt * 1000;
        if (trail.life <= 0) return false;
        const ratio = trail.life / spirit.trail.lifetime;
        drawingContext.fillStyle = rgba(spirit.accentRgb, trail.alpha * ratio);
        drawingContext.beginPath();
        drawingContext.arc(trail.x, trail.y, trail.size * (0.45 + ratio), 0, TAU);
        drawingContext.fill();
        return true;
      });

      state.morph = reducedRef.current
        ? 1
        : state.morph + (1 - state.morph) * (1 - Math.exp(-3.2 * dt));
      const morph = clamp(state.morph, 0, 1);
      const time = now * 0.001;
      const fromShape = fromShapeRef.current;
      const targetShape = targetShapeRef.current;
      const nextShape = new Array<SpiritPoint>(POINT_COUNT);
      const activeRgb = accentCache[activeRef.current];
      const velocityAngle = Math.atan2(state.velocity.y, state.velocity.x);
      const velocitySquash = Math.min(0.2, speed / 9200);
      const previewPointerX = (pointerX - state.pos.x) / Math.max(1, state.radius);
      const previewPointerY = (pointerY - state.pos.y) / Math.max(1, state.radius);
      const previewEnergy = clamp(raw.energy + Math.hypot(raw.vx, raw.vy) * 0.28, 0, 1.4);

      drawingContext.save();
      drawingContext.translate(state.pos.x, state.pos.y);
      if (velocitySquash > 0.008) {
        drawingContext.rotate(velocityAngle);
        drawingContext.scale(1 + velocitySquash, 1 - velocitySquash * 0.72);
        drawingContext.rotate(-velocityAngle);
      }

      for (let index = 0; index < POINT_COUNT; index += 1) {
        const point = mixPoint(fromShape[index], targetShape[index], morph);
        nextShape[index] = point;
        let x = point.x;
        let y = point.y;
        let depth = (point.z + 1) * 0.5;
        const breath = 1 + Math.sin(time * (spirit.id === "ribbon" ? 1.8 : 1.08) + point.phase) * 0.028;

        if (spirit.id === "core") {
          const rotation = time * 0.28;
          const rotatedX = x * Math.cos(rotation) + point.z * Math.sin(rotation);
          const rotatedZ = -x * Math.sin(rotation) + point.z * Math.cos(rotation);
          x = rotatedX;
          depth = (rotatedZ + 1) * 0.5;
        } else if (spirit.id === "ribbon") {
          x += Math.cos(time * 1.6 + point.phase) * 0.022;
          y += Math.sin(time * 2.1 + point.phase) * 0.035;
        } else if (spirit.id === "branch") {
          x *= 1.12;
          y *= 1.12;
          x += Math.sin(time * 0.72 + point.phase + point.y * 3) * (0.012 + Math.abs(point.y) * 0.014);
        } else if (spirit.id === "echo") {
          const direction = point.group % 2 === 0 ? 1 : -1;
          const angle = time * 0.16 * direction;
          const rotatedX = x * Math.cos(angle) - y * Math.sin(angle);
          y = x * Math.sin(angle) + y * Math.cos(angle);
          x = rotatedX;
        } else {
          x += Math.sin(time * 0.62 + point.phase) * 0.045;
          y += Math.cos(time * 0.48 + point.phase * 1.17) * 0.04;
        }

        if (!enteredRef.current) {
          const pointerDx = x - previewPointerX;
          const pointerDy = y - previewPointerY;
          const pointerDistance = Math.max(0.001, Math.hypot(pointerDx, pointerDy));
          const influence = Math.exp(-pointerDistance * pointerDistance * (spirit.id === "mist" ? 1.25 : 2.6)) * previewEnergy;
          const directionX = pointerDx / pointerDistance;
          const directionY = pointerDy / pointerDistance;
          if (spirit.id === "core") {
            x -= directionX * influence * (0.12 + (raw.down ? 0.16 : 0));
            y -= directionY * influence * (0.12 + (raw.down ? 0.16 : 0));
            depth += influence * 0.08;
          } else if (spirit.id === "ribbon") {
            x += raw.vx * influence * 0.34;
            y -= raw.vy * influence * 0.34;
            depth += Math.sin(pointerDistance * 8 - time * 7 + point.phase) * influence * 0.12;
          } else if (spirit.id === "branch") {
            const branchWave = Math.sin(pointerDistance * 9 - time * 5.2 - point.group * 0.48);
            x += directionX * branchWave * influence * 0.16;
            y += directionY * branchWave * influence * 0.16;
            depth += Math.abs(branchWave) * influence * 0.12;
          } else if (spirit.id === "echo") {
            const ring = Math.sin(pointerDistance * 11 - time * 4.4) * 0.6 + Math.sin(pointerDistance * 7 - time * 2.7) * 0.4;
            x += directionX * ring * influence * 0.15;
            y += directionY * ring * influence * 0.15;
            depth += Math.abs(ring) * influence * 0.1;
          } else {
            x += -directionY * influence * 0.2 + directionX * influence * 0.07;
            y += directionX * influence * 0.2 + directionY * influence * 0.07;
            depth += Math.sin(pointerDistance * 5 - time * 2 + point.phase) * influence * 0.14;
          }
        }

        const perspective = 0.76 + depth * 0.34;
        const radius = state.radius * breath;
        const px = x * radius * perspective;
        const py = y * radius * perspective;
        const pointSize = Math.max(0.65, point.size * (0.68 + depth * 0.52) * (enteredRef.current ? 0.88 : 1));
        const accentMix = index % 7 === 0 || spirit.id === "ribbon" || spirit.id === "echo";
        const rgb = enteredRef.current || accentMix ? activeRgb : ([10, 18, 20] as const);
        drawingContext.fillStyle = rgba(rgb, point.alpha * (enteredRef.current ? 0.88 : 0.78));
        drawingContext.beginPath();
        drawingContext.arc(px, py, pointSize, 0, TAU);
        drawingContext.fill();
      }

      currentShapeRef.current = nextShape;
      const glowRadius = state.radius * (spirit.id === "mist" ? 0.19 : 0.12);
      const glow = drawingContext.createRadialGradient(0, 0, 0, 0, 0, glowRadius * 2.5);
      glow.addColorStop(0, rgba(activeRgb, enteredRef.current ? 0.92 : 0.74));
      glow.addColorStop(0.28, rgba(activeRgb, 0.3));
      glow.addColorStop(1, rgba(activeRgb, 0));
      drawingContext.fillStyle = glow;
      drawingContext.beginPath();
      drawingContext.arc(0, 0, glowRadius * 2.5, 0, TAU);
      drawingContext.fill();
      drawingContext.fillStyle = rgba(activeRgb, 0.96);
      drawingContext.beginPath();
      drawingContext.arc(0, 0, Math.max(2.2, glowRadius * 0.26), 0, TAU);
      drawingContext.fill();
      drawingContext.restore();

      rawPointer.current.energy *= Math.exp(-dt * 3.5);
      frameId = window.requestAnimationFrame(drawSpirit);
    }

    resize();
    window.addEventListener("resize", resize);
    frameId = window.requestAnimationFrame(drawSpirit);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, [accentCache, fieldPointer, position, rawPointer]);

  return <canvas aria-hidden="true" className={className} ref={canvasRef} />;
}
