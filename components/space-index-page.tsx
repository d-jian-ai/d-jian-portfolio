"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  type CSSProperties,
  type MutableRefObject,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { PolySpeciesPreview } from "@/components/poly-species/poly-species-preview";
import {
  SPACE_INDEX_EXPERIMENTS,
  SPACE_INDEX_INTERFACE_COPY,
  type SpaceIndexExperiment,
  type SpaceIndexPreviewKind,
} from "@/config/space";
import { SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";

type ViewMode = "grid" | "list";

type BackgroundColors = {
  accent: string;
  base: string;
  ink: string;
};

const POLY_SPECIES_TRIBUTE_COPY = {
  zh: {
    label: "多面生命致敬说明",
    items: ["原版由德国设计师BryBry 开发的生物保护科普网站，学习并加以修改更准确的科普数据"],
  },
  en: {
    label: "Poly Species tribute note",
    items: [
      "THE ORIGINAL IS AN INTERACTIVE CONSERVATION-EDUCATION SITE BY COLOGNE-BASED DESIGNER BRYBRY",
      "THIS STUDY LEARNS FROM AND REWORKS ITS VISUAL METHOD WITH MORE ACCURATE, CONTINUALLY UPDATED DATA",
    ],
  },
  fr: {
    label: "Note d’hommage de Poly Species",
    items: [
      "L’ORIGINAL EST UN SITE INTERACTIF DE SENSIBILISATION CRÉÉ PAR BRYBRY, DESIGNER BASÉ À COLOGNE",
      "CETTE ÉTUDE EN REPREND ET TRANSFORME LE LANGAGE VISUEL AVEC DES DONNÉES PLUS PRÉCISES ET ACTUALISÉES",
    ],
  },
} as const;

const backgroundVertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const backgroundFragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uAccent;
  uniform vec3 uBase;
  uniform vec3 uInk;
  uniform vec2 uPointer;
  uniform vec2 uPointerVelocity;
  uniform vec2 uResolution;
  const int TRAIL_LENGTH = 10;
  uniform vec2 uTrail[TRAIL_LENGTH];
  uniform float uScroll;
  uniform float uTime;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise21(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
      mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.52;
    mat2 turn = mat2(0.80, 0.60, -0.60, 0.80);
    for (int index = 0; index < 6; index++) {
      value += amplitude * noise21(p);
      p = turn * p * 2.03 + 17.13;
      amplitude *= 0.48;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
    float aspect = uResolution.x / max(1.0, uResolution.y);
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
    vec2 pointer = vec2(uPointer.x * 0.5 * aspect, uPointer.y * 0.5);
    vec2 pointerVelocity = vec2(uPointerVelocity.x * aspect, uPointerVelocity.y);
    float pointerSpeed = clamp(length(pointerVelocity), 0.0, 1.4);
    vec2 flowDirection = pointerSpeed > 0.012
      ? normalize(pointerVelocity)
      : vec2(1.0, 0.0);
    vec2 sideDirection = vec2(-flowDirection.y, flowDirection.x);
    vec2 pointerDelta = p - pointer;
    float pointerDistance = max(length(pointerDelta), 0.001);
    float along = dot(pointerDelta, flowDirection);
    float lateral = dot(pointerDelta, sideDirection);
    float pointerHead = exp(-pointerDistance * pointerDistance * 28.0);
    float pointerTrail = exp(-lateral * lateral * 96.0)
      * exp(-max(along, 0.0) * 22.0)
      * exp(-max(-along, 0.0) * 2.4);
    float pointerField = pointerHead * 0.72 + pointerTrail * pointerSpeed * 1.15;
    vec2 tangent = vec2(-pointerDelta.y, pointerDelta.x) / pointerDistance;
    p += tangent * pointerHead * (0.035 + pointerSpeed * 0.07);
    p -= flowDirection * pointerTrail * pointerSpeed * 0.1;

    p.y += uScroll * 0.24;
    float time = uTime * 0.095;
    vec2 q = vec2(
      fbm(p * 0.68 + vec2(time, -time * 0.52)),
      fbm(p * 0.74 + vec2(4.7 - time * 0.4, 1.8 + time * 0.58))
    );
    vec2 warped = p + (q - 0.5) * 0.68;
    float drift = fbm(warped * 0.92 + vec2(-time * 0.28, time * 0.42));
    float billow = fbm(warped * 1.72 + q * 1.45 + vec2(time * 0.36, -time * 0.2));
    float detail = fbm(warped * 4.35 + q * 2.2 - vec2(time * 0.72, 0.0));
    float cloudBody = smoothstep(0.5, 0.75, drift * 0.64 + billow * 0.42);
    float cloudEdge = smoothstep(0.55, 0.8, billow + (detail - 0.5) * 0.36);
    float airyCloud = cloudBody * (0.16 + cloudEdge * 0.84);

    float wakeNoise = fbm(vec2(lateral * 4.2, along * 2.6 - uTime * 0.22));
    float wake = pointerField * (0.62 + wakeNoise * 0.72);
    float ghostTrail = 0.0;
    for (int index = 0; index < TRAIL_LENGTH; index++) {
      vec2 trailPointer = vec2(uTrail[index].x * 0.5 * aspect, uTrail[index].y * 0.5);
      vec2 trailDelta = p - trailPointer;
      float life = 1.0 - float(index) / float(TRAIL_LENGTH);
      ghostTrail += exp(-dot(trailDelta, trailDelta) * mix(42.0, 92.0, life)) * life * life;
    }
    vec2 dustUv = warped * vec2(178.0, 122.0);
    vec2 dustCell = floor(dustUv);
    vec2 dustOffset = vec2(hash21(dustCell + 2.1), hash21(dustCell + 7.7));
    float dustPoint = 1.0 - smoothstep(0.035, 0.13, length(fract(dustUv) - dustOffset));
    float dustPresence = smoothstep(0.67, 0.84, billow * 0.78 + detail * 0.32);
    float dustChance = step(0.82, hash21(dustCell * 1.37 + 19.4));
    float granularDust = dustPoint * dustPresence * dustChance * (0.48 + detail * 0.52);
    float inkAmount = clamp(
      airyCloud * 0.25 + wake * 0.25 + ghostTrail * 0.082 + granularDust * 0.15,
      0.0,
      0.34
    );

    vec3 color = mix(uBase, uInk, inkAmount);
    float accentVein = smoothstep(0.7, 0.91, detail) * cloudBody * 0.034;
    color = mix(color, uAccent, accentVein + wake * (0.08 + pointerSpeed * 0.16));

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function SpaceIndexPage() {
  const { dictionary, locale } = useLanguage();
  const { theme } = useTheme();
  const copy = SPACE_INDEX_INTERFACE_COPY[locale];
  const pageRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<Array<HTMLElement | null>>([]);
  const pointerRef = useRef(new THREE.Vector2(8, 8));
  const pointerVelocityRef = useRef(new THREE.Vector2());
  const previousPointerRef = useRef({ time: 0, x: 0, y: 0 });
  const cursorGhostRef = useRef<HTMLDivElement>(null);
  const cursorTargetRef = useRef({ visible: false, x: -100, y: -100 });
  const cursorPositionRef = useRef({ x: -100, y: -100 });
  const scrollRef = useRef(0);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isIntroReady, setIsIntroReady] = useState(false);

  const experiments = useMemo(
    () =>
      SPACE_INDEX_EXPERIMENTS.map((experiment) => ({
        ...experiment,
        localized: experiment.copy[locale],
      })),
    [locale],
  );

  const backgroundExperiment = experiments[hoveredIndex ?? activeIndex];
  const backgroundColors = useMemo<BackgroundColors>(
    () => ({
      accent: backgroundExperiment.colors.accent,
      base:
        theme === "dark"
          ? backgroundExperiment.colors.dark
          : `#${new THREE.Color(backgroundExperiment.colors.light)
              .lerp(new THREE.Color("#f8f8f6"), 0.78)
              .getHexString()}`,
      ink: theme === "dark" ? "#f4f3ee" : "#101311",
    }),
    [backgroundExperiment, theme],
  );

  useEffect(() => {
    const revealIntro = () => setIsIntroReady(true);
    const readinessCheck = window.setTimeout(() => {
      const loader = document.querySelector(".site-loader");
      if (!loader && !document.body.classList.contains("site-loading")) revealIntro();
    }, 0);

    window.addEventListener(SITE_CONFIG.events.loaderComplete, revealIntro, { once: true });
    return () => {
      window.clearTimeout(readinessCheck);
      window.removeEventListener(SITE_CONFIG.events.loaderComplete, revealIntro);
    };
  }, []);

  useEffect(() => {
    let cursorFrame = 0;
    const animateCursor = () => {
      const target = cursorTargetRef.current;
      const position = cursorPositionRef.current;
      const distanceX = target.x - position.x;
      const distanceY = target.y - position.y;
      position.x = THREE.MathUtils.lerp(position.x, target.x, 0.24);
      position.y = THREE.MathUtils.lerp(position.y, target.y, 0.24);
      if (cursorGhostRef.current) {
        const tilt = THREE.MathUtils.clamp(distanceX * 0.055 + distanceY * 0.018, -7, 7);
        cursorGhostRef.current.style.setProperty("--cursor-tilt", `${tilt.toFixed(2)}deg`);
        cursorGhostRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-18%, -13%)`;
        cursorGhostRef.current.style.opacity = target.visible ? "1" : "0";
      }
      cursorFrame = window.requestAnimationFrame(animateCursor);
    };
    cursorFrame = window.requestAnimationFrame(animateCursor);
    return () => window.cancelAnimationFrame(cursorFrame);
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const maximum = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollRef.current = window.scrollY / maximum;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      projectRefs.current.forEach((project, index) => {
        if (!project) return;
        const bounds = project.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height * 0.5 - window.innerHeight * 0.5);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActiveIndex(nearestIndex);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [viewMode]);

  const scrollToProjects = () => {
    projectRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handlePagePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!cursorTargetRef.current.visible) {
      cursorPositionRef.current = { x: event.clientX, y: event.clientY };
    }
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = 1 - (event.clientY / window.innerHeight) * 2;
    const now = performance.now();
    const previous = previousPointerRef.current;

    if (previous.time > 0) {
      const elapsed = Math.max(16, now - previous.time);
      const factor = 1000 / elapsed;
      const velocityX = (x - previous.x) * factor;
      const velocityY = (y - previous.y) * factor;
      pointerVelocityRef.current.set(
        THREE.MathUtils.lerp(pointerVelocityRef.current.x, velocityX, 0.36),
        THREE.MathUtils.lerp(pointerVelocityRef.current.y, velocityY, 0.36),
      );
      pointerVelocityRef.current.clampLength(0, 1.4);
    }

    pointerRef.current.set(x, y);
    previousPointerRef.current = { time: now, x, y };
    cursorTargetRef.current = { visible: true, x: event.clientX, y: event.clientY };
  };

  const handlePagePointerLeave = () => {
    cursorTargetRef.current.visible = false;
  };

  return (
    <section
      aria-label={dictionary.space.title}
      className="space-labs-page"
      data-intro-ready={isIntroReady}
      data-locale={locale}
      data-view={viewMode}
      onPointerLeave={handlePagePointerLeave}
      onPointerMove={handlePagePointerMove}
      ref={pageRef}
      style={{
        "--labs-accent": backgroundExperiment.colors.accent,
        "--labs-base": backgroundColors.base,
        "--labs-ink": backgroundColors.ink,
      } as CSSProperties}
    >
      <div aria-hidden="true" className="space-labs-background">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 1.35]}
          frameloop="always"
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <Atmosphere
            colors={backgroundColors}
            pointer={pointerRef}
            pointerVelocity={pointerVelocityRef}
            scroll={scrollRef}
          />
        </Canvas>
      </div>

      <div
        aria-hidden="true"
        className={`space-labs-cursor-ghost ${hoveredIndex !== null ? "is-project" : ""}`}
        ref={cursorGhostRef}
      >
        <span>
          <svg fill="none" viewBox="0 0 102 112" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="spaceCursorBody" x1="20" x2="84" y1="10" y2="101" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.48" stopColor="#f7f8f7" />
                <stop offset="0.78" stopColor="#ecefed" />
                <stop offset="1" stopColor="#d6dcda" />
              </linearGradient>
              <linearGradient id="spaceCursorRim" x1="16" x2="87" y1="8" y2="101" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.96" />
                <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.38" />
                <stop offset="1" stopColor="#b8c3c0" stopOpacity="0.42" />
              </linearGradient>
              <filter id="spaceCursorDepth" x="-55%" y="-45%" width="220%" height="225%" colorInterpolationFilters="sRGB">
                <feDropShadow dx="4" dy="8" floodColor="#18323a" floodOpacity="0.2" stdDeviation="6" />
                <feDropShadow dx="-2" dy="-2" floodColor="#ffffff" floodOpacity="0.58" stdDeviation="2.4" />
              </filter>
            </defs>
            <path
              d="M18.4 8.7C12.9 6.4 7.6 11.5 9.2 17.2L31.8 95.2C33.8 102.2 43.2 103.4 47.1 97.2L58 79.8L74.3 97.3C78.7 102 86.2 102.2 90.9 97.8L94.4 94.5C99.1 90.1 99.2 82.6 94.8 77.9L78.4 60.7L95.9 51.5C102.4 48 101.8 38.5 94.9 35.5L18.4 8.7Z"
              fill="url(#spaceCursorBody)"
              filter="url(#spaceCursorDepth)"
            />
            <path
              d="M18.8 11.7L39.3 86.9C39.8 88.8 42.4 89.2 43.4 87.5L57.1 65.8L79.1 89.4C80.6 91 83 91 84.5 89.6L87.9 86.4C89.4 85 89.4 82.6 88 81.1L65.9 58L89 45.9C90.8 44.9 90.6 42.2 88.6 41.5L18.8 11.7Z"
              stroke="url(#spaceCursorRim)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
            />
          </svg>
        </span>
      </div>

      <div className="space-labs-view-switch" role="group" aria-label="Project view">
        <button
          aria-pressed={viewMode === "grid"}
          className={viewMode === "grid" ? "is-active" : undefined}
          onClick={() => setViewMode("grid")}
          type="button"
        >
          {copy.grid}
        </button>
        <button
          aria-pressed={viewMode === "list"}
          className={viewMode === "list" ? "is-active" : undefined}
          onClick={() => setViewMode("list")}
          type="button"
        >
          {copy.list}
        </button>
      </div>

      <div className="space-labs-content">
        <header className="space-labs-hero">
          <div className="space-labs-heading">
            <p>{copy.collection}</p>
            <h1>
              {copy.heroLines.map((line, index) => (
                <span
                  className="space-labs-heading__line"
                  key={line}
                  style={{ "--line-index": index } as CSSProperties}
                >
                  <span>{line}</span>
                </span>
              ))}
            </h1>
          </div>

          <div className="space-labs-intro">
            <p>{copy.lead}</p>
            <span>
              {copy.all} / {String(experiments.length).padStart(2, "0")}
            </span>
          </div>

          <button className="space-labs-scroll" onClick={scrollToProjects} type="button">
            <ArrowDownRight aria-hidden="true" size={16} />
            {copy.scroll}
          </button>
        </header>

        <div className="space-labs-projects" data-view={viewMode}>
          {experiments.map((experiment, index) => (
            <ProjectCard
              copy={copy}
              experiment={experiment}
              index={index}
              isActive={index === (hoveredIndex ?? activeIndex)}
              key={experiment.code}
              onActive={() => setHoveredIndex(index)}
              onInactive={() => setHoveredIndex(null)}
              projectRef={(element) => {
                projectRefs.current[index] = element;
              }}
              tribute={POLY_SPECIES_TRIBUTE_COPY[locale]}
            />
          ))}
        </div>

        <footer className="space-labs-footer">
          <span>{copy.collection}</span>
          <strong>{String(experiments.length).padStart(2, "0")} / ∞</strong>
          <p>{copy.footer}</p>
        </footer>
      </div>

      <style jsx global>{`
        .space-labs-page {
          --labs-accent: #67c9a4;
          --labs-base: #e7eee8;
          --labs-ink: #101311;
          background: var(--labs-base);
          color: var(--labs-ink);
          min-height: 100svh;
          overflow: clip;
          position: relative;
          transition: background-color 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        body:has(.space-labs-page) .cursor-halo {
          display: none;
        }

        .space-labs-background {
          inset: 0;
          pointer-events: none;
          position: fixed;
          z-index: 0;
        }

        .space-labs-background canvas {
          height: 100% !important;
          width: 100% !important;
        }

        .space-labs-cursor-ghost {
          --cursor-tilt: 0deg;
          display: none;
          height: clamp(44px, 3.4vw, 54px);
          left: 0;
          opacity: 0;
          pointer-events: none;
          position: fixed;
          top: 0;
          transition: opacity 260ms cubic-bezier(0.23, 1, 0.32, 1);
          width: clamp(40px, 3vw, 48px);
          will-change: transform, opacity;
          z-index: 80;
        }

        .space-labs-cursor-ghost > span {
          display: block;
          height: 100%;
          transform: rotate(var(--cursor-tilt)) scale(1);
          transform-origin: 18% 13%;
          transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          will-change: transform;
        }

        .space-labs-cursor-ghost.is-project > span {
          transform: rotate(var(--cursor-tilt)) scale(0.94);
        }

        .space-labs-cursor-ghost svg {
          display: block;
          height: 100%;
          overflow: visible;
          width: 100%;
        }

        .space-labs-page:active .space-labs-cursor-ghost > span {
          transform: rotate(var(--cursor-tilt)) scale(0.82);
        }

        .space-labs-content {
          position: relative;
          z-index: 1;
        }

        .space-labs-view-switch {
          border: 1px solid color-mix(in srgb, var(--labs-ink) 40%, transparent);
          border-radius: 999px;
          display: flex;
          padding: 2px;
          position: fixed;
          right: 4.2vw;
          top: 34px;
          z-index: 42;
        }

        .space-labs-view-switch button {
          background: transparent;
          border: 0;
          border-radius: 999px;
          color: color-mix(in srgb, var(--labs-ink) 58%, transparent);
          cursor: pointer;
          font-size: 0.62rem;
          min-width: 54px;
          padding: 6px 13px;
          text-transform: uppercase;
          transition: background-color 260ms ease, color 260ms ease;
        }

        .space-labs-view-switch button.is-active {
          background: var(--labs-ink);
          color: var(--labs-base);
        }

        .space-labs-hero {
          align-items: end;
          column-gap: clamp(56px, 7vw, 150px);
          display: grid;
          grid-template-columns: minmax(0, 1.38fr) minmax(300px, 0.52fr);
          grid-template-rows: 1fr auto;
          box-sizing: border-box;
          height: calc(100svh - 92px);
          margin-inline: auto;
          min-height: 680px;
          padding: clamp(170px, 20vh, 240px) 4.2vw clamp(70px, 9vh, 108px);
          width: min(100%, 1720px);
        }

        .space-labs-heading {
          align-self: end;
          grid-row: 1 / span 2;
          min-width: 0;
        }

        .space-labs-heading > p {
          color: color-mix(in srgb, var(--labs-ink) 47%, transparent);
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: 0.58rem;
          letter-spacing: 0.08em;
          margin: 0 0 32px;
          opacity: 0;
          transform: translateX(-16px);
          text-transform: uppercase;
        }

        .space-labs-heading h1 {
          font-family: "Segoe UI Variable", "Helvetica Neue", Arial, "PingFang SC", sans-serif;
          font-size: clamp(4rem, 5.25vw, 6.2rem);
          font-weight: 315;
          letter-spacing: -0.038em;
          line-height: 1.02;
          margin: 0;
          text-transform: uppercase;
        }

        .space-labs-heading__line {
          display: block;
          overflow: hidden;
          perspective: 900px;
          white-space: nowrap;
        }

        .space-labs-heading__line > span {
          display: block;
          opacity: 0;
          transform: translate3d(0, 102%, 0) rotateX(78deg);
          transform-origin: 50% 100% -0.38em;
          will-change: transform, opacity;
        }

        .space-labs-page[data-intro-ready="true"] .space-labs-heading > p {
          animation: labsMetaReveal 920ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
        }

        .space-labs-page[data-intro-ready="true"] .space-labs-heading__line > span {
          animation: labsHeadingReveal 1380ms cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(160ms + var(--line-index) * 230ms);
        }

        .space-labs-heading__line + .space-labs-heading__line {
          margin-top: 0.04em;
        }

        .space-labs-page[data-locale="en"] .space-labs-heading h1 {
          font-size: clamp(3.25rem, 4.55vw, 5.35rem);
        }

        .space-labs-page[data-locale="fr"] .space-labs-heading h1 {
          font-size: clamp(2.9rem, 3.85vw, 4.5rem);
        }

        .space-labs-intro {
          align-self: end;
          grid-column: 2;
          grid-row: 1;
          margin-bottom: 0;
          max-width: 360px;
          min-width: 0;
          opacity: 0;
          transform: translateY(18px);
        }

        .space-labs-page[data-intro-ready="true"] .space-labs-intro {
          animation: labsMetaReveal 1050ms cubic-bezier(0.16, 1, 0.3, 1) 720ms both;
        }

        .space-labs-intro p {
          font-size: clamp(0.9rem, 1vw, 1.02rem);
          line-height: 1.55;
          margin: 0 0 22px;
        }

        .space-labs-intro span {
          color: color-mix(in srgb, var(--labs-ink) 48%, transparent);
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: 0.58rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .space-labs-scroll {
          align-items: center;
          background: transparent;
          border: 0;
          color: var(--labs-ink);
          cursor: pointer;
          display: flex;
          font-size: 0.64rem;
          gap: 10px;
          grid-column: 2;
          grid-row: 2;
          padding: 0;
          justify-self: end;
          margin-top: 46px;
          opacity: 0;
          text-transform: uppercase;
          transform: translateY(12px);
        }

        .space-labs-page[data-intro-ready="true"] .space-labs-scroll {
          animation: labsMetaReveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 980ms both;
        }

        .space-labs-scroll svg {
          animation: labsScrollCue 1.8s ease-in-out infinite;
        }

        .space-labs-projects {
          display: grid;
          gap: clamp(54px, 7vw, 112px) clamp(26px, 3.4vw, 58px);
          grid-template-columns: repeat(12, minmax(0, 1fr));
          margin: 0 auto;
          max-width: 1510px;
          padding: 0 5.6vw clamp(140px, 18vh, 220px);
          position: relative;
        }

        .space-labs-card {
          --card-shift-x: 0px;
          --card-shift-y: 0px;
          background: #0b0d0c;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 3px;
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.14) inset,
            0 32px 90px color-mix(in srgb, var(--labs-ink) 13%, transparent);
          color: #f8f8f5;
          display: block;
          isolation: isolate;
          min-height: 0;
          overflow: hidden;
          position: relative;
          transform: translateZ(0);
        }

        .space-labs-card::after {
          border: 1px solid rgba(255, 255, 255, 0.12);
          content: "";
          inset: 7px;
          pointer-events: none;
          position: absolute;
          z-index: 4;
        }

        .space-labs-projects[data-view="grid"] .space-labs-card.layout-field {
          aspect-ratio: 2.08 / 1;
          grid-column: 1 / span 12;
        }

        .space-labs-projects[data-view="grid"] .space-labs-card.layout-species {
          aspect-ratio: 0.78 / 1;
          grid-column: 1 / span 5;
        }

        .space-labs-projects[data-view="grid"] .space-labs-card.layout-district {
          align-self: end;
          aspect-ratio: 1.13 / 1;
          grid-column: 6 / span 7;
          margin-bottom: clamp(28px, 4vw, 68px);
          margin-top: clamp(90px, 11vw, 176px);
        }

        .space-labs-card__visual,
        .space-labs-card__mask,
        .space-labs-card__interface {
          inset: 0;
          position: absolute;
        }

        .space-labs-card__visual {
          filter: grayscale(0.52) saturate(0.76) brightness(0.88) contrast(1.05);
          transform: translate3d(var(--card-shift-x), var(--card-shift-y), 0) scale(1.06);
          transition: filter 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 1100ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: filter, transform;
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__visual {
          bottom: 34%;
        }

        .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__visual {
          right: 31%;
        }

        .space-labs-card__visual > div,
        .space-labs-card__visual > img {
          height: 100%;
          width: 100%;
        }

        .space-labs-preview-frame {
          height: 100%;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .space-labs-preview-frame.is-particle {
          background: #68726d;
        }

        .space-labs-preview-frame.is-poly {
          align-items: center;
          background: #fec54f;
          display: flex;
          justify-content: center;
        }

        .space-labs-preview-frame.is-poly .poly-species-preview {
          aspect-ratio: 16 / 9;
          flex: 0 0 auto;
          height: auto;
          inset: auto;
          position: relative;
          width: 112%;
        }

        .space-labs-preview-frame.is-district {
          align-items: center;
          background: #e8eceb;
          display: flex;
          justify-content: center;
        }

        .space-labs-preview-frame.is-district img {
          display: block;
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        .space-labs-card__visual .space-labs-particle-preview {
          background: #68726d;
          inset: 0;
          position: absolute;
        }

        .space-labs-card__visual .space-labs-particle-preview canvas {
          height: 100% !important;
          width: 100% !important;
        }

        .space-labs-card__visual .poly-species-preview {
          inset: 0;
        }

        .space-labs-card__mask {
          background:
            linear-gradient(180deg, rgba(5, 7, 6, 0.08), rgba(5, 7, 6, 0.08) 46%, rgba(5, 7, 6, 0.68)),
            rgba(8, 10, 9, 0.08);
          pointer-events: none;
          transition: background-color 520ms cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__mask {
          background: linear-gradient(180deg, rgba(19, 15, 4, 0.06), rgba(19, 15, 4, 0.32));
          bottom: 34%;
        }

        .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__mask {
          background: linear-gradient(90deg, rgba(5, 8, 12, 0.04), rgba(5, 8, 12, 0.56));
          right: 31%;
        }

        .space-labs-card__tribute {
          align-items: center;
          backdrop-filter: blur(18px) saturate(0.76);
          -webkit-backdrop-filter: blur(18px) saturate(0.76);
          background: linear-gradient(
            90deg,
            rgba(247, 246, 240, 0.12),
            rgba(247, 246, 240, 0.23) 38%,
            rgba(247, 246, 240, 0.15)
          );
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.28);
          display: flex;
          height: 30px;
          left: 0;
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: 64px;
          z-index: 3;
        }

        .space-labs-card__tribute::after {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.28),
            transparent 14%,
            transparent 86%,
            rgba(255, 255, 255, 0.18)
          );
          content: "";
          inset: 0;
          opacity: 0.62;
          position: absolute;
        }

        .space-labs-card__tribute-track {
          animation: labsTributeMarquee 36s linear infinite;
          display: flex;
          flex: none;
          width: max-content;
          will-change: transform;
        }

        .space-labs-card__tribute-group {
          align-items: center;
          display: flex;
          flex: none;
        }

        .space-labs-card__tribute-group > span {
          align-items: center;
          display: flex;
          flex: none;
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: clamp(0.54rem, 0.58vw, 0.62rem);
          font-weight: 600;
          gap: 10px;
          letter-spacing: 0.055em;
          padding-right: clamp(36px, 4.2vw, 64px);
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.22);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .space-labs-card__tribute-group > span > i {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 999px;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.42);
          display: block;
          height: 2px;
          width: 13px;
        }

        .space-labs-card__interface {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(22px, 2.2vw, 34px);
          pointer-events: none;
          z-index: 2;
        }

        .space-labs-card__interface::before {
          background: var(--card-accent);
          box-shadow: 0 0 18px color-mix(in srgb, var(--card-accent) 66%, transparent);
          content: "";
          height: 2px;
          left: clamp(22px, 2.2vw, 34px);
          position: absolute;
          top: clamp(66px, 6.2vw, 82px);
          width: clamp(42px, 5.4vw, 86px);
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__interface {
          background: linear-gradient(
            180deg,
            transparent 0,
            transparent 66%,
            rgba(247, 243, 231, 0.97) 66%,
            rgba(247, 243, 231, 0.97) 100%
          );
        }

        .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__interface {
          background: linear-gradient(
            90deg,
            transparent 0,
            transparent 69%,
            rgba(7, 11, 18, 0.96) 69%,
            rgba(7, 11, 18, 0.96) 100%
          );
        }

        .space-labs-card__top {
          align-items: flex-start;
          display: flex;
          justify-content: space-between;
        }

        .space-labs-card__meta {
          display: grid;
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .space-labs-card__open {
          align-items: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          color: #090b0a;
          display: flex;
          height: 32px;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: background-color 280ms ease, color 280ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
          width: 32px;
        }

        .space-labs-card__open::before {
          content: none;
        }

        .space-labs-card__open svg {
          opacity: 1;
          transform: translate(0, 0) scale(0.72);
          transition: opacity 200ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .space-labs-card__bottom {
          align-items: end;
          display: grid;
          gap: 24px;
          grid-template-columns: minmax(0, 1fr) minmax(210px, 0.52fr);
        }

        .space-labs-projects[data-view="grid"] .layout-field .space-labs-card__bottom {
          grid-template-columns: minmax(0, 1.4fr) minmax(240px, 0.42fr);
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__bottom {
          color: #18150d;
          display: block;
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__detail {
          display: grid;
          gap: 14px;
          grid-template-columns: minmax(0, 1fr) auto;
          margin-top: 16px;
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__tags {
          align-content: start;
          justify-content: flex-end;
          margin-top: 0;
          max-width: 132px;
        }

        .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__tags span {
          border-color: rgba(24, 21, 13, 0.34);
        }

        .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__bottom {
          align-items: end;
          grid-template-columns: minmax(0, 1fr) minmax(170px, 0.42fr);
        }

        .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__detail {
          padding-left: clamp(18px, 2vw, 28px);
        }

        .space-labs-card__title-window {
          --title-row-height: 3.3rem;
          height: var(--title-row-height);
          overflow: hidden;
          position: relative;
        }

        .space-labs-card__title-track {
          display: flex;
          flex-direction: column;
          height: calc(var(--title-row-height) * 2);
          transform: translate3d(0, calc(var(--title-row-height) * -1), 0);
          transition: transform 820ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .space-labs-card__title-track strong {
          align-items: center;
          display: flex;
          flex: 0 0 var(--title-row-height);
          font-family: "Segoe UI Variable", "Helvetica Neue", Arial, "PingFang SC", sans-serif;
          font-size: clamp(1.9rem, 2.4vw, 2.85rem);
          font-weight: 350;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.045em;
          line-height: 1;
        }

        .space-labs-card:hover .space-labs-card__title-track,
        .space-labs-card:focus-visible .space-labs-card__title-track {
          transform: translate3d(0, 0, 0);
        }

        .space-labs-card__category {
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.035em;
          margin: 11px 0 0;
          text-transform: uppercase;
          transition: opacity 860ms ease, transform 980ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .space-labs-card__summary {
          font-size: 0.84rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.7;
          transform: translateY(8px);
          transition: opacity 760ms ease 120ms, transform 980ms cubic-bezier(0.16, 1, 0.3, 1) 120ms;
        }

        .space-labs-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 12px;
        }

        .space-labs-card__tags span {
          border-top: 1px solid rgba(255, 255, 255, 0.46);
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: 0.59rem;
          letter-spacing: 0.025em;
          opacity: 0.46;
          padding-top: 5px;
          transform: translateY(5px);
          transition: opacity 700ms ease 160ms, transform 900ms cubic-bezier(0.16, 1, 0.3, 1) 160ms;
        }

        .space-labs-card__tags span:nth-child(2) { transition-delay: 240ms; }
        .space-labs-card__tags span:nth-child(3) { transition-delay: 320ms; }

        .space-labs-card:hover .space-labs-card__visual,
        .space-labs-card:focus-visible .space-labs-card__visual {
          filter: grayscale(0) saturate(1.04) brightness(1.04) contrast(1);
          transform: translate3d(var(--card-shift-x), var(--card-shift-y), 0) scale(1.025);
        }

        .space-labs-card:hover .space-labs-card__mask,
        .space-labs-card:focus-visible .space-labs-card__mask {
          background: rgba(8, 10, 9, 0.06);
        }

        .space-labs-card.layout-district:hover .space-labs-card__mask,
        .space-labs-card.layout-district:focus-visible .space-labs-card__mask {
          background: rgba(8, 10, 9, 0.25);
        }

        .space-labs-card:hover .space-labs-card__category,
        .space-labs-card:focus-visible .space-labs-card__category {
          opacity: 0.88;
          transform: translateX(6px);
        }

        .space-labs-card:hover .space-labs-card__summary,
        .space-labs-card:focus-visible .space-labs-card__summary,
        .space-labs-card:hover .space-labs-card__tags span,
        .space-labs-card:focus-visible .space-labs-card__tags span {
          opacity: 1;
          transform: translateY(0);
        }

        .space-labs-card:hover .space-labs-card__open,
        .space-labs-card:focus-visible .space-labs-card__open {
          background: rgba(255, 255, 255, 0.94);
          color: #090b0a;
          transform: scale(1.18);
        }

        .space-labs-card:hover .space-labs-card__open::before,
        .space-labs-card:focus-visible .space-labs-card__open::before {
          opacity: 0;
          transform: scale(4);
        }

        .space-labs-card:hover .space-labs-card__open svg,
        .space-labs-card:focus-visible .space-labs-card__open svg {
          opacity: 1;
          transform: translate(1px, -1px) scale(0.78);
        }

        .space-labs-projects[data-view="list"] {
          display: block;
          max-width: 1510px;
          padding-bottom: 180px;
        }

        .space-labs-projects[data-view="list"] .space-labs-card {
          aspect-ratio: auto;
          background: transparent;
          border-bottom: 1px solid color-mix(in srgb, var(--labs-ink) 22%, transparent);
          border-radius: 0;
          box-shadow: none;
          color: var(--labs-ink);
          height: 98px;
          margin: 0;
          min-height: 0;
          overflow: visible;
        }

        .space-labs-projects[data-view="list"] .space-labs-card::after,
        .space-labs-projects[data-view="list"] .space-labs-card__interface::before {
          display: none;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__visual,
        .space-labs-projects[data-view="list"] .space-labs-card__mask,
        .space-labs-projects[data-view="list"] .space-labs-card__tribute {
          display: none;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__interface {
          align-items: center;
          display: grid;
          grid-template-columns: 130px minmax(220px, 0.65fr) minmax(320px, 1fr) 42px;
          padding: 0;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__top,
        .space-labs-projects[data-view="list"] .space-labs-card__bottom {
          display: contents;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__meta {
          color: color-mix(in srgb, var(--labs-ink) 70%, transparent);
        }

        .space-labs-projects[data-view="list"] .space-labs-card__title-window { grid-column: 2; }
        .space-labs-projects[data-view="list"] .space-labs-card__category { display: none; }

        .space-labs-projects[data-view="list"] .space-labs-card__detail {
          align-items: center;
          display: grid;
          grid-column: 3;
          grid-template-columns: minmax(0, 1fr) auto;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__summary {
          max-width: 440px;
          opacity: 0.7;
          transform: none;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__tags { margin: 0; }

        .space-labs-projects[data-view="list"] .space-labs-card__tags span {
          border-color: color-mix(in srgb, var(--labs-ink) 32%, transparent);
          opacity: 0.62;
          transform: none;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__open {
          grid-column: 4;
          justify-self: end;
        }

        .space-labs-projects[data-view="list"] .space-labs-card__title-track strong { font-size: 1.35rem; }

        .space-labs-projects[data-view="list"] .space-labs-card__title-window {
          --title-row-height: 2rem;
        }

        .space-labs-footer {
          align-items: end;
          border-top: 1px solid color-mix(in srgb, var(--labs-ink) 22%, transparent);
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr auto;
          margin: 0 4.2vw;
          padding: 60px 0 72px;
        }

        .space-labs-footer span {
          font-family: Consolas, "SFMono-Regular", monospace;
          font-size: 0.62rem;
          text-transform: uppercase;
        }

        .space-labs-footer strong {
          font-size: clamp(3.4rem, 7vw, 7rem);
          font-weight: 330;
          letter-spacing: -0.06em;
          line-height: 0.8;
        }

        .space-labs-footer p {
          color: color-mix(in srgb, var(--labs-ink) 62%, transparent);
          font-size: 0.78rem;
          line-height: 1.55;
          margin: 0;
          max-width: 420px;
        }

        @keyframes labsScrollCue {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, 4px); }
        }

        @keyframes labsTributeMarquee {
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes labsHeadingReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 102%, 0) rotateX(78deg);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotateX(0deg);
          }
        }

        @keyframes labsHeadingFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes labsMetaReveal {
          from { opacity: 0; transform: translate3d(0, 18px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @media (max-width: 1120px) {
          .space-labs-hero {
            grid-template-columns: minmax(0, 1fr) minmax(260px, 0.48fr);
            min-height: max(700px, calc(100svh - 82px));
          }
          .space-labs-heading h1 { font-size: clamp(3.2rem, 5vw, 4.45rem); }
          .space-labs-page[data-locale="en"] .space-labs-heading h1 { font-size: clamp(2.8rem, 4.3vw, 3.8rem); }
          .space-labs-page[data-locale="fr"] .space-labs-heading h1 { font-size: clamp(2.45rem, 3.75vw, 3.35rem); }
          .space-labs-intro { max-width: 330px; }
          .space-labs-scroll { grid-column: 2; justify-self: start; margin-top: 26px; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-field { grid-column: 1 / span 12; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-species { grid-column: 1 / span 5; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-district { grid-column: 6 / span 7; }
        }

        @media (max-width: 820px) {
          .space-labs-view-switch { left: 18px; right: auto; top: 22px; }
          .space-labs-hero {
            align-items: stretch;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            min-height: max(650px, calc(100svh - 54px));
            padding: 145px 24px 34px;
          }
          .space-labs-heading > p { margin-bottom: 20px; }
          .space-labs-heading h1 { font-size: clamp(3rem, 9.5vw, 4.3rem); }
          .space-labs-page[data-locale="en"] .space-labs-heading h1 { font-size: clamp(2rem, 7.8vw, 3.15rem); }
          .space-labs-page[data-locale="fr"] .space-labs-heading h1 { font-size: clamp(1.8rem, 6.8vw, 2.75rem); }
          .space-labs-intro { margin-top: 42px; max-width: 440px; }
          .space-labs-scroll { align-self: flex-end; margin-top: 30px; }
          .space-labs-projects { display: grid; gap: 58px; grid-template-columns: 1fr; padding: 0 24px 120px; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-field,
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-species,
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-district { grid-column: 1; margin: 0; min-height: 0; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-field { aspect-ratio: 1.18 / 1; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-species { aspect-ratio: 0.82 / 1; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-district { aspect-ratio: 0.94 / 1; }
          .space-labs-card__interface { padding: 20px; }
          .space-labs-card__tribute { height: 28px; top: 62px; }
          .space-labs-card__bottom { display: block; }
          .space-labs-card__detail { margin-top: 14px; }
          .space-labs-card__summary,
          .space-labs-card__tags span { opacity: 1; transform: none; }
          .space-labs-card__summary { max-width: 360px; }
          .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__detail { display: block; }
          .space-labs-projects[data-view="grid"] .layout-species .space-labs-card__tags { justify-content: flex-start; margin-top: 12px; max-width: none; }
          .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__visual,
          .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__mask { bottom: 38%; right: 0; }
          .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__interface {
            background: linear-gradient(180deg, transparent 0, transparent 62%, rgba(7, 11, 18, 0.97) 62%, rgba(7, 11, 18, 0.97) 100%);
          }
          .space-labs-projects[data-view="grid"] .layout-district .space-labs-card__detail { margin-top: 14px; padding-left: 0; }
          .space-labs-projects[data-view="list"] { padding: 0 24px 120px; }
          .space-labs-projects[data-view="list"] .space-labs-card__interface { grid-template-columns: 82px minmax(0, 1fr) 36px; }
          .space-labs-projects[data-view="list"] .space-labs-card__detail { display: none; }
          .space-labs-projects[data-view="list"] .space-labs-card__open { grid-column: 3; }
          .space-labs-footer { margin-inline: 24px; }
        }

        @media (max-width: 560px) {
          .space-labs-view-switch { left: 12px; top: 17px; }
          .space-labs-view-switch button { min-width: 48px; padding-inline: 10px; }
          .space-labs-hero { min-height: max(620px, calc(100svh - 42px)); padding: 125px 16px 34px; }
          .space-labs-heading h1 { font-size: clamp(2.7rem, 12vw, 3.45rem); }
          .space-labs-page[data-locale="en"] .space-labs-heading h1 { font-size: clamp(1.85rem, 7.75vw, 2.4rem); }
          .space-labs-page[data-locale="fr"] .space-labs-heading h1 { font-size: clamp(1.62rem, 6.55vw, 2.05rem); }
          .space-labs-intro { margin-top: 38px; }
          .space-labs-intro p { font-size: 0.82rem; }
          .space-labs-scroll { margin-top: 26px; }
          .space-labs-projects,
          .space-labs-projects[data-view="list"] { padding-inline: 12px; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-field { aspect-ratio: 1 / 1.08; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-species { aspect-ratio: 0.76 / 1; }
          .space-labs-projects[data-view="grid"] .space-labs-card.layout-district { aspect-ratio: 0.84 / 1; }
          .space-labs-card__title-window { --title-row-height: 2.35rem; }
          .space-labs-card__title-track strong { font-size: 1.72rem; }
          .space-labs-card__summary { font-size: 0.7rem; }
          .space-labs-card__tribute { height: 26px; top: 60px; }
          .space-labs-card__tribute-group > span {
            font-size: 0.53rem;
            gap: 10px;
            letter-spacing: 0.045em;
            padding-right: 30px;
          }
          .space-labs-card__tribute-group > span > i { height: 2px; width: 13px; }
          .space-labs-card__tags { display: none; }
          .space-labs-footer { grid-template-columns: 1fr; margin-inline: 16px; }
          .space-labs-footer strong { justify-self: start; }
        }

        @media (pointer: coarse) {
          .space-labs-card__visual { filter: grayscale(0.2) saturate(0.82) brightness(0.9); }
          .space-labs-card__mask { background: rgba(8, 10, 9, 0.2); }
        }

        @media (pointer: fine) {
          .space-labs-page,
          .space-labs-page a,
          .space-labs-page button {
            cursor: none !important;
          }

          .space-labs-cursor-ghost {
            display: block;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .space-labs-page,
          .space-labs-page a,
          .space-labs-page button {
            cursor: auto !important;
          }
          .space-labs-cursor-ghost { display: none !important; }
          .space-labs-heading > p,
          .space-labs-intro,
          .space-labs-scroll {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .space-labs-heading__line > span {
            animation: labsHeadingFade 180ms cubic-bezier(0.23, 1, 0.32, 1) both;
            transform: none;
          }
          .space-labs-scroll svg { animation: none; }
          .space-labs-card__tribute-track {
            animation: none;
            transform: translate3d(-5%, 0, 0);
          }
          .space-labs-card__visual,
          .space-labs-card__mask,
          .space-labs-card__summary,
          .space-labs-card__tags span,
          .space-labs-card__title-track,
          .space-labs-card__category,
          .space-labs-card__open,
          .space-labs-card__open::before,
          .space-labs-card__open svg { transition-duration: 1ms !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({
  copy,
  experiment,
  index,
  isActive,
  onActive,
  onInactive,
  projectRef,
  tribute,
}: {
  copy: (typeof SPACE_INDEX_INTERFACE_COPY)[keyof typeof SPACE_INDEX_INTERFACE_COPY];
  experiment: SpaceIndexExperiment & {
    localized: SpaceIndexExperiment["copy"][keyof SpaceIndexExperiment["copy"]];
  };
  index: number;
  isActive: boolean;
  onActive: () => void;
  onInactive: () => void;
  projectRef: (element: HTMLElement | null) => void;
  tribute: (typeof POLY_SPECIES_TRIBUTE_COPY)[keyof typeof POLY_SPECIES_TRIBUTE_COPY];
}) {
  const layout = ["layout-field", "layout-species", "layout-district"][index % 3];

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const travel = [14, 8, 10][index % 3];
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -travel;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -travel;
    event.currentTarget.style.setProperty("--card-shift-x", `${x.toFixed(2)}px`);
    event.currentTarget.style.setProperty("--card-shift-y", `${y.toFixed(2)}px`);
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--card-shift-x", "0px");
    event.currentTarget.style.setProperty("--card-shift-y", "0px");
    onInactive();
  };

  return (
    <Link
      aria-label={`${copy.open}: ${experiment.localized.title}`}
      className={`space-labs-card ${layout} ${isActive ? "is-active" : ""}`}
      href={experiment.href}
      onBlur={onInactive}
      onFocus={onActive}
      onPointerEnter={onActive}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={projectRef}
      style={{ "--card-accent": experiment.colors.accent } as CSSProperties}
    >
      <div aria-hidden="true" className="space-labs-card__visual">
        <ProjectPreview kind={experiment.preview} />
      </div>
      <div aria-hidden="true" className="space-labs-card__mask" />
      {experiment.preview === "poly-species" ? (
        <div aria-label={tribute.label} className="space-labs-card__tribute" role="note">
          <div aria-hidden="true" className="space-labs-card__tribute-track">
            {[0, 1].map((groupIndex) => (
              <div className="space-labs-card__tribute-group" key={groupIndex}>
                {tribute.items.map((item) => (
                  <span key={`${groupIndex}-${item}`}>
                    <i />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="space-labs-card__interface">
        <div className="space-labs-card__top">
          <span className="space-labs-card__meta">
            EXP {experiment.code}
            <small>{experiment.year}</small>
          </span>
          <span aria-hidden="true" className="space-labs-card__open">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="space-labs-card__bottom">
          <div>
            <div className="space-labs-card__title-window">
              <div className="space-labs-card__title-track">
                <strong aria-hidden="true">{experiment.localized.title}</strong>
                <strong>{experiment.localized.title}</strong>
              </div>
            </div>
            <p className="space-labs-card__category">{experiment.localized.category}</p>
          </div>

          <div className="space-labs-card__detail">
            <p className="space-labs-card__summary">{experiment.localized.summary}</p>
            <div aria-hidden="true" className="space-labs-card__tags">
              {experiment.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProjectPreview({ kind }: { kind: SpaceIndexPreviewKind }) {
  if (kind === "particle-field") {
    return (
      <div className="space-labs-preview-frame is-particle">
        <div className="space-labs-particle-preview">
          <CleanParticlePreview />
        </div>
      </div>
    );
  }

  if (kind === "poly-species") {
    return (
      <div className="space-labs-preview-frame is-poly">
        <PolySpeciesPreview />
      </div>
    );
  }

  return (
    <div className="space-labs-preview-frame is-district">
      <img
        alt=""
        decoding="async"
        src="/images/taikoo-li/digital-district-hollow-render.png"
      />
    </div>
  );
}

const previewParticleVertexShader = /* glsl */ `
  attribute float aRole;
  attribute float aSeed;

  uniform float uTime;
  uniform vec2 uPointer;

  varying float vAlpha;
  varying float vRole;
  varying float vHeading;

  void main() {
    vec3 transformed = position;
    float slowTime = uTime * (0.12 + aRole * 0.08);
    float scout = step(aRole, 0.25);
    float carrier = step(0.25, aRole) * step(aRole, 0.5);
    float weaver = step(0.5, aRole) * step(aRole, 0.75);
    float dissolver = step(0.75, aRole);
    float current = sin(transformed.x * (0.58 + aRole * 0.14) + slowTime * 2.0 + aSeed * 5.0);
    transformed.y += current * (0.045 + scout * 0.08 + dissolver * 0.055);
    transformed.x += slowTime * (0.12 + scout * 0.13 + carrier * 0.06);
    transformed.x = mod(transformed.x + 5.5, 11.0) - 5.5;

    vec2 pointerPosition = vec2(uPointer.x * 4.6, uPointer.y * 2.3);
    vec2 pointerDelta = pointerPosition - transformed.xy;
    float pointerInfluence = exp(-dot(pointerDelta, pointerDelta) * 0.55);
    vec2 direction = normalize(pointerDelta + vec2(0.001));
    transformed.xy += direction * pointerInfluence * (0.08 + carrier * 0.08 + weaver * 0.13);
    transformed.xy += vec2(-direction.y, direction.x) * pointerInfluence * (scout * 0.12 + dissolver * 0.18);

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float roleSize = 1.0 + weaver * 0.22 + dissolver * 0.34;
    gl_PointSize = clamp((3.4 + aSeed * 1.2) * roleSize * (8.0 / max(2.0, -viewPosition.z)), 1.4, 5.4);
    vAlpha = 0.48 + pointerInfluence * 0.46;
    vRole = aRole;
    vHeading = current * 0.45;
  }
`;

const previewParticleFragmentShader = /* glsl */ `
  precision highp float;

  varying float vAlpha;
  varying float vRole;
  varying float vHeading;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float radius = length(point);
    float core = 1.0 - smoothstep(0.12, 0.46, radius);
    float halo = 1.0 - smoothstep(0.18, 0.5, radius);
    float alpha = (core * 0.8 + halo * 0.2) * vAlpha;
    if (alpha < 0.02) discard;
    vec3 color = mix(vec3(0.42, 0.87, 0.91), vec3(0.56, 0.49, 1.0), smoothstep(0.24, 0.76, vRole));
    color = mix(color, vec3(1.0, 0.44, 0.68), smoothstep(0.76, 1.0, vRole));
    gl_FragColor = vec4(color, alpha);
  }
`;

function CleanParticlePreview() {
  return (
    <Canvas
      camera={{ far: 30, fov: 44, near: 0.1, position: [0, 0, 7.4] }}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
    >
      <CleanParticleMesh />
    </Canvas>
  );
}

function CleanParticleMesh() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const count = 12400;
    const positions = new Float32Array(count * 3);
    const roles = new Float32Array(count);
    const seeds = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      const randomX = hashPreview(index * 1.17 + 4.3);
      const randomY = hashPreview(index * 2.41 + 8.9);
      const randomLift = hashPreview(index * 4.13 + 2.7);
      const band = index % 6;
      const x = (randomX - 0.5) * 10.8;
      const habitatPull =
        Math.exp(-Math.pow(x + 1.65, 2) * 0.42) * 0.34
        - Math.exp(-Math.pow(x - 1.6, 2) * 0.38) * 0.26;
      const y =
        Math.sin(x * (0.56 + band * 0.025) + band * 1.18) * (0.34 + randomLift * 0.16)
        + (band - 2.5) * 0.25
        + habitatPull
        + (randomY - 0.5) * 0.18;

      positions[offset] = x;
      positions[offset + 1] = y;
      positions[offset + 2] = (randomLift - 0.5) * 0.3;
      roles[index] = ((index % 100) + randomLift * 0.9) / 100;
      seeds[index] = randomLift;
    }

    return { positions, roles, seeds };
  }, []);
  const uniforms = useMemo(
    () => ({
      uPointer: { value: new THREE.Vector2() },
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!materialRef.current || !pointsRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uPointer.value.lerp(state.pointer, 1 - Math.exp(-delta * 7.5));
  });

  return (
    <group>
      <points frustumCulled={false} ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
          <bufferAttribute attach="attributes-aRole" args={[particles.roles, 1]} />
          <bufferAttribute attach="attributes-aSeed" args={[particles.seeds, 1]} />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.NormalBlending}
          depthTest
          depthWrite={false}
          fragmentShader={previewParticleFragmentShader}
          ref={materialRef}
          transparent
          uniforms={uniforms}
          vertexShader={previewParticleVertexShader}
        />
      </points>
    </group>
  );
}

function hashPreview(value: number) {
  return Math.abs(Math.sin(value * 127.1) * 43758.5453) % 1;
}

function Atmosphere({
  colors,
  pointer,
  pointerVelocity,
  scroll,
}: {
  colors: BackgroundColors;
  pointer: MutableRefObject<THREE.Vector2>;
  pointerVelocity: MutableRefObject<THREE.Vector2>;
  scroll: MutableRefObject<number>;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const targetBase = useRef(new THREE.Color(colors.base));
  const targetInk = useRef(new THREE.Color(colors.ink));
  const targetAccent = useRef(new THREE.Color(colors.accent));
  const uniforms = useMemo(
    () => ({
      uAccent: { value: new THREE.Color(colors.accent) },
      uBase: { value: new THREE.Color(colors.base) },
      uInk: { value: new THREE.Color(colors.ink) },
      uPointer: { value: new THREE.Vector2(8, 8) },
      uPointerVelocity: { value: new THREE.Vector2() },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTrail: {
        value: Array.from({ length: 10 }, () => new THREE.Vector2(8, 8)),
      },
      uScroll: { value: 0 },
      uTime: { value: 0 },
    }),
    [],
  );

  useEffect(() => {
    targetBase.current.set(colors.base);
    targetInk.current.set(colors.ink);
    targetAccent.current.set(colors.accent);
  }, [colors]);

  useFrame((state, delta) => {
    const material = materialRef.current;
    if (!material) return;
    const ease = 1 - Math.exp(-delta * 2.3);
    const pixelRatio = state.gl.getPixelRatio();

    material.uniforms.uBase.value.lerp(targetBase.current, ease);
    material.uniforms.uInk.value.lerp(targetInk.current, ease);
    material.uniforms.uAccent.value.lerp(targetAccent.current, ease);
    material.uniforms.uPointer.value.lerp(pointer.current, 1 - Math.exp(-delta * 8.5));
    const trail = material.uniforms.uTrail.value as THREE.Vector2[];
    trail[0].lerp(material.uniforms.uPointer.value, 1 - Math.exp(-delta * 12));
    for (let index = 1; index < trail.length; index += 1) {
      const response = Math.max(2.4, 8.8 - index * 0.62);
      trail[index].lerp(trail[index - 1], 1 - Math.exp(-delta * response));
    }
    material.uniforms.uPointerVelocity.value.lerp(
      pointerVelocity.current,
      1 - Math.exp(-delta * 7.5),
    );
    material.uniforms.uResolution.value.set(state.size.width * pixelRatio, state.size.height * pixelRatio);
    material.uniforms.uScroll.value = THREE.MathUtils.lerp(material.uniforms.uScroll.value, scroll.current, 0.07);
    material.uniforms.uTime.value = state.clock.elapsedTime;
    pointerVelocity.current.multiplyScalar(Math.exp(-delta * 5.2));
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        depthTest={false}
        depthWrite={false}
        fragmentShader={backgroundFragmentShader}
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={backgroundVertexShader}
      />
    </mesh>
  );
}
