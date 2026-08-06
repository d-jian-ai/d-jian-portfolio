"use client";

import { Eraser, MousePointer2, MoveVertical } from "lucide-react";
import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import {
  ExperimentalParticleField,
  type FieldMode,
} from "@/components/experimental-particle-field";
import { useLanguage } from "@/components/language-provider";

type Trace = {
  id: number;
  x: number;
  y: number;
  mode: FieldMode;
  scale: number;
};

const CHAPTER_COUNT = 4;

export function SpacePage() {
  const { dictionary } = useLanguage();
  const [activeChapter, setActiveChapter] = useState(0);
  const [mode, setMode] = useState<FieldMode>("mist");
  const [particleCount, setParticleCount] = useState(16000);
  const [traces, setTraces] = useState<Trace[]>([]);
  const lastTrace = useRef(0);
  const lastStep = useRef(0);
  const touchStartY = useRef<number | null>(null);

  const changeChapter = useCallback((direction: number) => {
    setActiveChapter((current) =>
      Math.min(CHAPTER_COUNT - 1, Math.max(0, current + direction)),
    );
  }, []);

  function addTrace(event: PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    const now = performance.now();
    if (now - lastTrace.current < 56) return;
    lastTrace.current = now;

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextTrace: Trace = {
      id: now,
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
      mode,
      scale: 0.72 + ((Math.floor(now) % 9) / 9) * 0.68,
    };

    setTraces((current) => [...current.slice(-64), nextTrace]);
  }

  function handleWheel(event: WheelEvent<HTMLElement>) {
    if (Math.abs(event.deltaY) < 18) return;
    event.preventDefault();

    const now = performance.now();
    if (now - lastStep.current < 680) return;
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
    if (event.key === "End") setActiveChapter(CHAPTER_COUNT - 1);
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") touchStartY.current = event.clientY;
    addTrace(event);
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "touch" || touchStartY.current === null) return;
    const distance = touchStartY.current - event.clientY;
    touchStartY.current = null;
    if (Math.abs(distance) > 46) changeChapter(distance > 0 ? 1 : -1);
  }

  return (
    <section
      aria-label={dictionary.space.title}
      className={`space-experience mode-${mode}`}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={addTrace}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      tabIndex={0}
    >
      <div className="space-canvas" aria-hidden="true">
        <ExperimentalParticleField
          chapter={activeChapter}
          mode={mode}
          onParticleCount={setParticleCount}
        />
      </div>
      <div className="space-shade" aria-hidden="true" />
      <div className="space-noise" aria-hidden="true" />

      {traces.map((trace) => (
        <span
          className={`trace trace-${trace.mode}`}
          key={trace.id}
          style={
            {
              "--trace-x": `${trace.x}%`,
              "--trace-y": `${trace.y}%`,
              "--trace-scale": trace.scale,
            } as CSSProperties
          }
        />
      ))}

      <div className="space-chapter-stage" aria-live="polite">
        {dictionary.space.chapters.map((chapter, index) => (
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

      <nav
        aria-label={dictionary.space.chapterNav}
        className="space-chapter-nav"
      >
        {dictionary.space.chapters.map((chapter, index) => (
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
        <span className="status-gesture">{dictionary.space.gesture}</span>
        <span className="status-line" />
        <span className="status-chapter">
          {(activeChapter + 1).toString().padStart(2, "0")} / 0{CHAPTER_COUNT}
        </span>
        <span className="status-line short" />
        <span className="status-particles">
          {particleCount.toLocaleString()} {dictionary.space.particles}
        </span>
      </div>

      <div className="space-control-bar">
        <MoveVertical className="field-scroll-icon" aria-hidden="true" size={16} />
        <div className="segmented-control" aria-label="Interaction mode">
          {(["mist", "light", "rain"] as FieldMode[]).map((item) => (
            <button
              aria-pressed={mode === item}
              className={mode === item ? "active" : ""}
              key={item}
              onClick={() => setMode(item)}
              type="button"
            >
              {
                {
                  mist: dictionary.space.modeMist,
                  light: dictionary.space.modeLight,
                  rain: dictionary.space.modeRain,
                }[item]
              }
            </button>
          ))}
        </div>
        <button
          aria-label={dictionary.space.clear}
          className="clear-button"
          onClick={() => setTraces([])}
          title={dictionary.space.clear}
          type="button"
        >
          <Eraser aria-hidden="true" size={17} />
        </button>
      </div>

      <aside className="space-system-note">
        <p>{dictionary.space.notesTitle}</p>
        <span>{dictionary.space.notes[activeChapter % dictionary.space.notes.length]}</span>
      </aside>
    </section>
  );
}
