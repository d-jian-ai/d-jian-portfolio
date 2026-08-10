"use client";

import { ArrowLeft, MousePointer2 } from "lucide-react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import { ExperimentalParticleField } from "@/components/experimental-particle-field";
import { GENERATIVE_FIELD_CONFIG } from "@/config/space";
import { useLanguage } from "@/providers/language-provider";

export function GenerativeFieldPage() {
  const { dictionary } = useLanguage();
  const [activeChapter, setActiveChapter] = useState(0);
  const [particleCount, setParticleCount] = useState<number>(
    GENERATIVE_FIELD_CONFIG.performance.initialParticles,
  );
  const lastStep = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const copy = dictionary.generativeField;
  const chapters = copy.chapters;
  const chapterCount = chapters.length;

  const changeChapter = useCallback((direction: number) => {
    setActiveChapter((current) =>
      Math.min(chapterCount - 1, Math.max(0, current + direction)),
    );
  }, [chapterCount]);

  useEffect(() => {
    setActiveChapter((current) => Math.min(current, chapterCount - 1));
  }, [chapterCount]);

  function handleWheel(event: WheelEvent<HTMLElement>) {
    if (
      Math.abs(event.deltaY) <
      GENERATIVE_FIELD_CONFIG.interaction.wheelThreshold
    )
      return;
    event.preventDefault();

    const now = performance.now();
    if (
      now - lastStep.current <
      GENERATIVE_FIELD_CONFIG.interaction.chapterCooldownMs
    )
      return;
    lastStep.current = now;
    changeChapter(event.deltaY > 0 ? 1 : -1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (["ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      changeChapter(1);
    }
    if (["ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      changeChapter(-1);
    }
    if (event.key === "Home") setActiveChapter(0);
    if (event.key === "End") setActiveChapter(chapterCount - 1);
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") touchStartY.current = event.clientY;
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "touch" || touchStartY.current === null) return;
    const distance = touchStartY.current - event.clientY;
    touchStartY.current = null;
    if (
      Math.abs(distance) > GENERATIVE_FIELD_CONFIG.interaction.touchThreshold
    ) {
      changeChapter(distance > 0 ? 1 : -1);
    }
  }

  return (
    <section
      aria-label={copy.title}
      className="space-experience"
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      tabIndex={0}
    >
      <div className="space-canvas" aria-hidden="true">
        <ExperimentalParticleField
          chapter={activeChapter}
          onParticleCount={setParticleCount}
        />
      </div>
      <div className="space-shade" aria-hidden="true" />
      <div className="space-noise" aria-hidden="true" />

      <Link className="field-back-link" href="/space">
        <ArrowLeft aria-hidden="true" size={15} />
        {copy.back}
      </Link>

      <div className="space-chapter-stage" aria-live="polite">
        {chapters.map((chapter, index) => (
          <article
            aria-hidden={activeChapter !== index}
            className={
              activeChapter === index
                ? "space-chapter is-active"
                : "space-chapter"
            }
            key={chapter.title}
          >
            <p className="section-kicker">{chapter.kicker}</p>
            <h1>{chapter.title}</h1>
            <p className="space-chapter-lead">{chapter.body}</p>
            <div className="space-chapter-metric">
              <span>{chapter.metric}</span>
              <span className="metric-pulse" />
            </div>
          </article>
        ))}
      </div>

      <nav aria-label={copy.chapterNav} className="space-chapter-nav">
        {chapters.map((chapter, index) => (
          <button
            aria-label={`${(index + 1).toString().padStart(2, "0")} / ${chapter.title}`}
            aria-pressed={activeChapter === index}
            className={activeChapter === index ? "is-active" : ""}
            key={chapter.title}
            onClick={() => setActiveChapter(index)}
            title={chapter.title}
            type="button"
          >
            <span className="chapter-rail" aria-hidden="true" />
            <span>{(index + 1).toString().padStart(2, "0")}</span>
          </button>
        ))}
      </nav>

      <div className="space-status">
        <MousePointer2 aria-hidden="true" size={16} />
        <span className="status-gesture">{copy.gesture}</span>
        <span className="status-line" />
        <span className="status-chapter">
          {(activeChapter + 1).toString().padStart(2, "0")} / {chapterCount
            .toString()
            .padStart(2, "0")}
        </span>
        <span className="status-line short" />
        <span className="status-particles">
          {particleCount.toLocaleString()} {copy.particles}
        </span>
      </div>

      <aside className="space-system-note">
        <p>{copy.notesTitle}</p>
        <span>{copy.notes[activeChapter % copy.notes.length]}</span>
      </aside>
    </section>
  );
}
