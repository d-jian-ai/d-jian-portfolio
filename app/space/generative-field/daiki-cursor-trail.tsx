"use client";

import { useEffect, useRef } from "react";

type TrailColor = { b: number; g: number; r: number };

type CursorParticle = {
  alive: boolean;
  color: TrailColor;
  density: number;
  flare: boolean;
  life: number;
  maxLife: number;
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

type BurstParticle = Omit<CursorParticle, "alive" | "density" | "flare"> & {
  travel: number;
};

type Flash = { life: number; x: number; y: number };

const POOL_SIZE = 160;

function trailColor(value = Math.random()): TrailColor {
  if (value < 0.14) return { b: 255, g: 190, r: 160 };
  if (value < 0.26) return { b: 255, g: 218, r: 200 };
  if (value < 0.36) return { b: 195, g: 240, r: 255 };
  if (value < 0.44) return { b: 160, g: 225, r: 255 };
  return { b: 242, g: 248, r: 248 };
}

function rgba(color: TrailColor, alpha: number) {
  const safeAlpha = Number.isFinite(alpha) ? Math.max(0, Math.min(1, alpha)) : 0;
  return `rgba(${color.r},${color.g},${color.b},${safeAlpha})`;
}

function emptyParticle(): CursorParticle {
  return {
    alive: false,
    color: trailColor(),
    density: 1,
    flare: false,
    life: 0,
    maxLife: 0,
    radius: 0,
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
  };
}

export function DaikiCursorTrail({ disabled = false }: { disabled?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (disabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const drawingCanvas = canvas;
    const drawingContext = context;
    const particles = Array.from({ length: POOL_SIZE }, emptyParticle);
    const bursts: BurstParticle[] = [];
    const flashes: Flash[] = [];
    let previousX = 0;
    let previousY = 0;
    let frame = 0;
    let lastFrame = performance.now();
    let pixelRatio = 1;

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      drawingCanvas.width = Math.round(window.innerWidth * pixelRatio);
      drawingCanvas.height = Math.round(window.innerHeight * pixelRatio);
      drawingCanvas.style.width = `${window.innerWidth}px`;
      drawingCanvas.style.height = `${window.innerHeight}px`;
      drawingContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const availableParticle = () => particles.find((particle) => !particle.alive);

    const spawnTrail = (x: number, y: number, dx: number, dy: number) => {
      const speed = Math.hypot(dx, dy);
      const count = Math.min(Math.floor(1 + speed * 0.07), 3);
      const length = speed || 1;
      for (let index = 0; index < count; index += 1) {
        const particle = availableParticle();
        if (!particle) break;
        particle.alive = true;
        particle.x = x + (Math.random() - 0.5) * 1.5;
        particle.y = y + (Math.random() - 0.5) * 1.5;
        particle.vx = (dx / length) * 1.2 + (Math.random() - 0.5) * 0.3;
        particle.vy = (dy / length) * 1.2 + (Math.random() - 0.5) * 0.3;
        particle.radius = 0.3 + Math.pow(Math.random(), 2) * 2;
        particle.life = 0;
        particle.maxLife = 0.4 + Math.random() * 0.5;
        particle.color = trailColor();
        particle.flare = particle.radius > 1.5;
        particle.density = 1;
      }
    };

    const spawnBurst = (x: number, y: number) => {
      for (let index = 0; index < 26; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        bursts.push({
          color: trailColor(),
          life: 0,
          maxLife: 0.5 + Math.random() * 0.4,
          radius: 1 + Math.random() * 3,
          travel: 30 + Math.random() * 75,
          vx: Math.cos(angle),
          vy: Math.sin(angle),
          x,
          y,
        });
      }
      flashes.push({ life: 0, x, y });
    };

    const handleMove = (event: MouseEvent) => {
      const dx = event.clientX - previousX;
      const dy = event.clientY - previousY;
      previousX = event.clientX;
      previousY = event.clientY;
      const target = event.target;
      if (target instanceof Element && target.closest("input, textarea")) return;
      spawnTrail(event.clientX, event.clientY, dx, dy);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, input, textarea")) return;
      spawnBurst(event.clientX, event.clientY);
    };

    const drawParticle = (particle: CursorParticle, delta: number) => {
      particle.life += delta;
      if (particle.life >= particle.maxLife) {
        particle.alive = false;
        return;
      }
      const progress = particle.maxLife > 0 ? particle.life / particle.maxLife : 1;
      const alpha = (1 - Math.pow(progress, 1.4)) * particle.density;
      const radius = Math.max(0, particle.radius * (1 - progress * 0.4));
      const step = delta * 60;
      const damping = Math.pow(0.96, step);
      particle.vx *= damping;
      particle.vy *= damping;
      particle.x += particle.vx * step;
      particle.y += particle.vy * step;
      if (radius > 0.7) {
        const glowRadius = radius * 4.2;
        const glow = drawingContext.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius);
        glow.addColorStop(0, rgba(particle.color, alpha * 0.32));
        glow.addColorStop(1, rgba(particle.color, 0));
        drawingContext.fillStyle = glow;
        drawingContext.beginPath();
        drawingContext.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
        drawingContext.fill();
      }
      if (particle.flare && alpha > 0.4) {
        const ray = radius * 3.5;
        drawingContext.lineWidth = 0.35;
        drawingContext.strokeStyle = rgba(particle.color, alpha * 0.22);
        drawingContext.beginPath();
        drawingContext.moveTo(particle.x - ray, particle.y);
        drawingContext.lineTo(particle.x + ray, particle.y);
        drawingContext.moveTo(particle.x, particle.y - ray);
        drawingContext.lineTo(particle.x, particle.y + ray);
        drawingContext.stroke();
      }
      drawingContext.fillStyle = rgba(particle.color, alpha);
      drawingContext.beginPath();
      drawingContext.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      drawingContext.fill();
    };

    const drawBursts = (delta: number) => {
      for (let index = bursts.length - 1; index >= 0; index -= 1) {
        const particle = bursts[index];
        particle.life += delta;
        const progress = Math.min(1, particle.life / particle.maxLife);
        if (progress >= 1) {
          bursts.splice(index, 1);
          continue;
        }
        const eased = 1 - Math.pow(1 - progress, 3);
        const x = particle.x + particle.vx * particle.travel * eased;
        const y = particle.y + particle.vy * particle.travel * eased;
        const alpha = 1 - Math.pow(progress, 1.5);
        drawingContext.fillStyle = rgba(particle.color, alpha);
        drawingContext.beginPath();
        drawingContext.arc(x, y, particle.radius * (1 - progress * 0.18), 0, Math.PI * 2);
        drawingContext.fill();
      }
      for (let index = flashes.length - 1; index >= 0; index -= 1) {
        const flash = flashes[index];
        flash.life += delta;
        const progress = Math.min(1, flash.life / 0.6);
        if (progress >= 1) {
          flashes.splice(index, 1);
          continue;
        }
        const radius = 28 * (1 - Math.pow(1 - Math.min(progress * 2.7, 1), 3));
        const gradient = drawingContext.createRadialGradient(flash.x, flash.y, 0, flash.x, flash.y, radius);
        gradient.addColorStop(0, `rgba(255,255,255,${0.88 * (1 - progress)})`);
        gradient.addColorStop(0.45, `rgba(200,220,255,${0.32 * (1 - progress)})`);
        gradient.addColorStop(1, "rgba(200,220,255,0)");
        drawingContext.fillStyle = gradient;
        drawingContext.beginPath();
        drawingContext.arc(flash.x, flash.y, radius, 0, Math.PI * 2);
        drawingContext.fill();
      }
    };

    const render = (time: number) => {
      const delta = Math.min((time - lastFrame) / 1000, 0.05);
      lastFrame = time;
      drawingContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle) => {
        if (particle.alive) drawParticle(particle, delta);
      });
      drawBursts(delta);
      frame = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("click", handleClick);
    frame = window.requestAnimationFrame(render);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("click", handleClick);
    };
  }, [disabled]);

  return <canvas aria-hidden="true" className="particle-story-cursor-trail" ref={canvasRef} />;
}
