"use client";

import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import gsap from "gsap";
import { useLanguage } from "@/providers/language-provider";
import { DaikiCursorTrail } from "./daiki-cursor-trail";
import { GUIDE_COUNT, GUIDE_SPIRITS } from "./guide-spirit-config";
import { GuideSpirit } from "./guide-spirit";
import { PARTICLE_STORY_COPY } from "./particle-story-copy";
import { ParticleStoryField, type ParticlePointerSignal } from "./particle-story-field";
import styles from "./particle-story.module.css";

gsap.registerPlugin(useGSAP);

const CHAPTER_COUNT = 6;

const INITIAL_POINTER: ParticlePointerSignal = {
  down: false,
  energy: 0,
  vx: 0,
  vy: 0,
  x: 0,
  y: 0,
};

export function ParticleStoryExperience() {
  const { locale } = useLanguage();
  const copy = PARTICLE_STORY_COPY[locale];
  const rootRef = useRef<HTMLElement>(null);
  const themeWaveRef = useRef<HTMLDivElement>(null);
  const rawPointerRef = useRef<ParticlePointerSignal>({ ...INITIAL_POINTER });
  const fieldPointerRef = useRef<ParticlePointerSignal>({ ...INITIAL_POINTER });
  const guidePositionRef = useRef({ x: 0, y: 0 });
  const entryOriginRef = useRef({ x: 0.36, y: 0 });
  const echoRef = useRef(1);
  const lastPointerRef = useRef({ time: 0, x: 0, y: 0 });
  const wheelRef = useRef({ locked: false, total: 0 });
  const selectionLockedRef = useRef(false);
  const pendingSpiritRef = useRef<number | null>(null);
  const activeSpiritRef = useRef(0);
  const [entered, setEntered] = useState(false);
  const [spiritIndex, setSpiritIndex] = useState(0);
  const [themeIndex, setThemeIndex] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const spirit = GUIDE_SPIRITS[spiritIndex];
  const theme = GUIDE_SPIRITS[themeIndex];
  const spiritCopy = copy.spirits[spirit.id];
  const activeChapter = copy.chapters[chapter];

  const rootStyle = {
    "--field-base": spirit.fieldBase,
    "--field-mist": spirit.fieldMist,
    "--guide-accent": spirit.accent,
    "--guide-ink": theme.ink,
    "--guide-surface": theme.surface,
  } as CSSProperties;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      gsap.set(`.${styles.themeWave}`, { autoAlpha: 0, scale: 0, xPercent: -50, yPercent: -50 });
      const duration = reducedMotion ? 0.01 : 1;
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      timeline
        .fromTo(`.${styles.guideLine} > span`, { yPercent: 116 }, { duration: duration * 0.9, yPercent: 0 })
        .fromTo(`.${styles.guideDetail}`, { autoAlpha: 0, x: -18 }, { autoAlpha: 1, duration: duration * 0.72, x: 0 }, 0.18)
        .fromTo(`.${styles.guideRoster} button`, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, duration: duration * 0.5, stagger: 0.05, y: 0 }, 0.28)
        .fromTo(`.${styles.enterButton}`, { autoAlpha: 0, scale: 0.86 }, { autoAlpha: 1, duration: duration * 0.72, scale: 1 }, 0.42);
      return () => timeline.kill();
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      if (entered) return;
      const duration = reducedMotion ? 0.01 : 0.58;
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .fromTo(`.${styles.spiritName}`, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, duration, y: 0 })
        .fromTo(`.${styles.spiritTrait}`, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, duration: duration * 0.76, x: 0 }, 0.04)
        .fromTo(`.${styles.spiritEffect}`, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, duration: duration * 0.82, y: 0 }, 0.08);
      return () => timeline.kill();
    },
    { dependencies: [entered, locale, reducedMotion, spiritIndex], revertOnUpdate: true, scope: rootRef },
  );

  useGSAP(
    () => {
      const duration = reducedMotion ? 0.01 : 1;
      if (entered) {
        const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
        timeline
          .fromTo(`.${styles.field}`, { autoAlpha: 0 }, { autoAlpha: 1, duration: duration * 1.2 })
          .fromTo(`.${styles.sceneLabel}`, { autoAlpha: 0, x: -16 }, { autoAlpha: 1, duration: duration * 0.5, x: 0 }, 0.18)
          .fromTo(`.${styles.sceneLine} > span`, { yPercent: 116 }, { duration: duration * 0.92, yPercent: 0 }, 0.22)
          .fromTo(`.${styles.sceneInstruction}`, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, duration: duration * 0.62, y: 0 }, 0.36)
          .fromTo(`.${styles.chapterRail} button`, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, duration: duration * 0.46, stagger: 0.04, y: 0 }, 0.42);
        return () => timeline.kill();
      }
      gsap.set(`.${styles.field}`, { autoAlpha: 0 });
    },
    { dependencies: [entered, reducedMotion], revertOnUpdate: true, scope: rootRef },
  );

  useGSAP(
    () => {
      if (!entered) return;
      const duration = reducedMotion ? 0.01 : 0.62;
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .fromTo(`.${styles.sceneLabel}`, { autoAlpha: 0, x: -12 }, { autoAlpha: 1, duration: duration * 0.72, x: 0 })
        .fromTo(`.${styles.sceneLine} > span`, { yPercent: 114 }, { duration, yPercent: 0 }, 0.03)
        .fromTo(`.${styles.sceneInstruction}`, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, duration: duration * 0.78, y: 0 }, 0.1);
      return () => timeline.kill();
    },
    { dependencies: [chapter, entered, locale, reducedMotion], revertOnUpdate: true, scope: rootRef },
  );

  const { contextSafe } = useGSAP({ scope: rootRef });

  const startSpiritTransition = contextSafe((bounded: number) => {
    const nextSpirit = GUIDE_SPIRITS[bounded];
    const wave = themeWaveRef.current;
    selectionLockedRef.current = true;
    activeSpiritRef.current = bounded;
    setSpiritIndex(bounded);

    if (!wave || reducedMotion) {
      setThemeIndex(bounded);
      selectionLockedRef.current = false;
      const pending = pendingSpiritRef.current;
      pendingSpiritRef.current = null;
      if (pending !== null && pending !== bounded) startSpiritTransition(pending);
      return;
    }

    const fallbackX = window.innerWidth * 0.68;
    const fallbackY = window.innerHeight * 0.52;
    const originX = guidePositionRef.current.x || fallbackX;
    const originY = guidePositionRef.current.y || fallbackY;
    gsap.killTweensOf(wave);
    gsap
      .timeline({
        onComplete: () => {
          selectionLockedRef.current = false;
          const pending = pendingSpiritRef.current;
          pendingSpiritRef.current = null;
          if (pending !== null && pending !== bounded) startSpiritTransition(pending);
        },
      })
      .set(wave, {
        autoAlpha: 1,
        backgroundColor: `color-mix(in srgb, ${nextSpirit.surface} 18%, #efeee9)`,
        left: originX,
        scale: 0,
        top: originY,
      })
      .to(wave, { duration: 0.62, ease: "power3.inOut", scale: 1 })
      .call(() => setThemeIndex(bounded))
      .to(wave, { autoAlpha: 0, duration: 0.34, ease: "power2.out" })
      .set(wave, { scale: 0 });
  });

  const selectSpirit = contextSafe((next: number) => {
    if (entered) return;
    const bounded = (next + GUIDE_COUNT) % GUIDE_COUNT;
    if (selectionLockedRef.current) {
      pendingSpiritRef.current = bounded === activeSpiritRef.current ? null : bounded;
      return;
    }
    if (bounded === activeSpiritRef.current) return;
    startSpiritTransition(bounded);
  });

  const selectChapter = contextSafe((next: number) => {
    const bounded = (next + CHAPTER_COUNT) % CHAPTER_COUNT;
    if (bounded === chapter) return;
    setChapter(bounded);
  });

  const enterField = contextSafe(() => {
    if (entered) return;
    entryOriginRef.current = {
      x: fieldPointerRef.current.x,
      y: fieldPointerRef.current.y,
    };
    setChapter(0);
    setEntered(true);
  });

  const leaveField = contextSafe(() => {
    rawPointerRef.current.down = false;
    setEntered(false);
  });

  function normalizePointer(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    return {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: -((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    };
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const next = normalizePointer(event);
    const now = performance.now();
    const previous = lastPointerRef.current;
    const elapsed = Math.max(12, Math.min(90, now - (previous.time || now - 16)));
    const velocityX = (next.x - previous.x) / (elapsed / 16.67);
    const velocityY = (next.y - previous.y) / (elapsed / 16.67);
    const pointer = rawPointerRef.current;
    pointer.x = next.x;
    pointer.y = next.y;
    pointer.vx = pointer.vx * 0.58 + velocityX * 0.42;
    pointer.vy = pointer.vy * 0.58 + velocityY * 0.42;
    pointer.energy = Math.min(1.5, pointer.energy + Math.hypot(velocityX, velocityY) * 0.2);
    lastPointerRef.current = { time: now, x: next.x, y: next.y };
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button, a")) return;
    const normalized = normalizePointer(event);
    rawPointerRef.current.x = normalized.x;
    rawPointerRef.current.y = normalized.y;
    rawPointerRef.current.down = true;
    rawPointerRef.current.energy = 1;
    event.currentTarget.setPointerCapture(event.pointerId);
    if (entered && (spirit.responseMode === 3 || chapter >= 4)) {
      gsap.killTweensOf(echoRef);
      echoRef.current = 0;
      gsap.to(echoRef, {
        current: 1,
        duration: reducedMotion ? 0.1 : 3,
        ease: "power2.out",
      });
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    rawPointerRef.current.down = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleWheel(event: WheelEvent<HTMLElement>) {
    if (!entered || Math.abs(event.deltaY) < 5) return;
    event.preventDefault();
    const wheel = wheelRef.current;
    if (wheel.locked) return;
    wheel.total += event.deltaY;
    if (Math.abs(wheel.total) < 56) return;
    const direction = wheel.total > 0 ? 1 : -1;
    wheel.total = 0;
    wheel.locked = true;
    selectChapter(chapter + direction);
    window.setTimeout(() => {
      wheelRef.current.locked = false;
    }, reducedMotion ? 80 : 560);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    const interactiveTarget = (event.target as HTMLElement).closest("button, a");
    if (!entered && (event.key === "ArrowRight" || event.key === "ArrowDown")) {
      event.preventDefault();
      selectSpirit(activeSpiritRef.current + 1);
    } else if (!entered && (event.key === "ArrowLeft" || event.key === "ArrowUp")) {
      event.preventDefault();
      selectSpirit(activeSpiritRef.current - 1);
    } else if (!entered && (event.key === "Enter" || event.key === " ") && !interactiveTarget) {
      event.preventDefault();
      enterField();
    } else if (entered && event.key === "Escape") {
      event.preventDefault();
      leaveField();
    } else if (entered && (event.key === "ArrowRight" || event.key === "ArrowDown")) {
      event.preventDefault();
      selectChapter(chapter + 1);
    } else if (entered && (event.key === "ArrowLeft" || event.key === "ArrowUp")) {
      event.preventDefault();
      selectChapter(chapter - 1);
    } else if (/^[1-6]$/.test(event.key)) {
      event.preventDefault();
      if (entered) selectChapter(Number(event.key) - 1);
      else selectSpirit(Number(event.key) - 1);
    }
  }

  return (
    <main
      className={styles.experience}
      data-entered={entered}
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      ref={rootRef}
      style={rootStyle}
      tabIndex={0}
    >
      <div aria-hidden="true" className={styles.themeWave} ref={themeWaveRef} />

      {entered ? (
        <div aria-hidden="true" className={styles.field}>
          <ParticleStoryField
            chapter={chapter}
            echo={echoRef}
            entryOrigin={entryOriginRef}
            pointer={fieldPointerRef}
            reducedMotion={reducedMotion}
            spiritIndex={spiritIndex}
          />
        </div>
      ) : null}

      <GuideSpirit
        className={styles.guideCanvas}
        entered={entered}
        fieldPointer={fieldPointerRef}
        position={guidePositionRef}
        rawPointer={rawPointerRef}
        reducedMotion={reducedMotion}
        spiritIndex={spiritIndex}
      />
      <DaikiCursorTrail />

      <header className={styles.chrome}>
        <Link aria-label={copy.back} className={styles.back} href="/space">
          <ArrowLeft aria-hidden="true" size={15} />
          <span>{copy.back}</span>
        </Link>
        <div className={styles.utilities}>
          {entered ? (
            <button className={styles.changeGuide} onClick={leaveField} type="button">
              <i style={{ background: spirit.accent }} />
              <span>{spiritCopy.name}</span>
              <small>{copy.changeGuide}</small>
            </button>
          ) : null}
        </div>
      </header>

      <section aria-hidden={entered} className={styles.guideIntro}>
        <p className={styles.guidePurpose}>{copy.guideBody}</p>
        <h1 className={styles.guideTitle}>
          <span className={styles.guideLine}><span>{copy.guideTitle}</span></span>
        </h1>
      </section>

      <section aria-live="polite" className={styles.guideDetail} key={`${locale}-${spirit.id}`}>
        <h2 className={styles.spiritName}>{spiritCopy.name}</h2>
        <strong className={styles.spiritTrait}>{spiritCopy.fieldAction}</strong>
        <p className={styles.spiritEffect}>{spiritCopy.fieldEffect}</p>
      </section>

      <nav aria-label={copy.chooseAria} className={styles.guideRoster}>
        {GUIDE_SPIRITS.map((item, index) => {
          const itemCopy = copy.spirits[item.id];
          const active = index === spiritIndex;
          return (
            <button
              aria-current={active ? "true" : undefined}
              className={active ? styles.activeGuide : undefined}
              key={item.id}
              onClick={() => selectSpirit(index)}
              type="button"
            >
              <b>{itemCopy.name}</b>
              <small>{itemCopy.fieldAction}</small>
            </button>
          );
        })}
      </nav>

      <button className={styles.enterButton} onClick={enterField} type="button">
        <span>{copy.enter}</span>
        <ArrowRight aria-hidden="true" size={18} />
      </button>

      <section aria-live="polite" className={styles.scene} key={`scene-${locale}-${chapter}`}>
        <p className={styles.sceneLabel}>{activeChapter.name}</p>
        <h2 className={styles.sceneTitle}>
          <span className={styles.sceneLine}><span>{activeChapter.title}</span></span>
        </h2>
        <p className={styles.sceneInstruction}><i />{activeChapter.instruction}</p>
        <p className={styles.sceneRule}><b>{spiritCopy.name}</b><span>{spiritCopy.fieldAction}</span></p>
      </section>

      <nav aria-label={copy.chapterAria} className={styles.chapterRail}>
        {copy.chapters.map((item, index) => (
          <button
            aria-current={chapter === index ? "step" : undefined}
            className={chapter === index ? styles.activeChapter : undefined}
            key={item.code}
            onClick={() => selectChapter(index)}
            type="button"
          >
            <span>{item.code}</span>
            <b>{item.name}</b>
          </button>
        ))}
      </nav>
    </main>
  );
}
