"use client";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  POLY_SPECIES_FORMS,
  POLY_SPECIES_SHARDS,
} from "@/config/poly-species";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";

type PolyPageStyle = CSSProperties & {
  "--poly-accent": string;
  "--poly-background": string;
  "--poly-ink": string;
  "--poly-muted": string;
};

const DRAG_THRESHOLD = 54;

export function PolySpeciesPage() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();
  const [activeForm, setActiveForm] = useState(0);
  const [ambientMotion, setAmbientMotion] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });
  const pointerVelocity = useRef({ x: 0, y: 0 });
  const dragState = useRef({ active: false, pointerId: -1, startX: 0 });
  const formCount = POLY_SPECIES_FORMS.length;
  const form = POLY_SPECIES_FORMS[activeForm];
  const appearance = form.theme[theme];
  const copy = dictionary.polySpecies;
  const formCopy = copy.forms[activeForm];

  const changeForm = useCallback(
    (direction: number) => {
      setActiveForm((current) => (current + direction + formCount) % formCount);
    },
    [formCount],
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setAmbientMotion(false);
      return;
    }

    let frame = 0;
    const tick = () => {
      const target = ambientMotion ? pointerTarget.current : { x: 0, y: 0 };
      const current = pointerCurrent.current;
      const velocity = pointerVelocity.current;

      velocity.x = (velocity.x + (target.x - current.x) * 0.075) * 0.76;
      velocity.y = (velocity.y + (target.y - current.y) * 0.075) * 0.76;
      current.x += velocity.x;
      current.y += velocity.y;

      stageRef.current?.style.setProperty("--poly-x", current.x.toFixed(4));
      stageRef.current?.style.setProperty("--poly-y", current.y.toFixed(4));
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [ambientMotion]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerTarget.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a, button")) return;
    dragState.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    const drag = dragState.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const distance = event.clientX - drag.startX;
    dragState.current.active = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(distance) >= DRAG_THRESHOLD) changeForm(distance < 0 ? 1 : -1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeForm(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeForm(-1);
    }
  }

  const pageStyle: PolyPageStyle = {
    "--poly-accent": appearance.accent,
    "--poly-background": appearance.background,
    "--poly-ink": appearance.ink,
    "--poly-muted": appearance.muted,
  };

  return (
    <section
      aria-label={copy.collection}
      className={`poly-species-experience${isDragging ? " is-dragging" : ""}${ambientMotion ? " has-ambient-motion" : ""}`}
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerLeave={() => {
        pointerTarget.current = { x: 0, y: 0 };
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={pageStyle}
      tabIndex={0}
    >
      <Link className="poly-species-back" href="/space">
        <ArrowLeft aria-hidden="true" size={15} />
        {copy.back}
      </Link>

      <header className="poly-species-header">
        <span>{copy.collection}</span>
        <span>
          {(activeForm + 1).toString().padStart(2, "0")} / {formCount
            .toString()
            .padStart(2, "0")}
        </span>
      </header>

      <div className="poly-species-stage" ref={stageRef} aria-hidden="true">
        <div className="poly-species-breath">
          <div className="poly-species-shards">
            {POLY_SPECIES_SHARDS[activeForm].map((shard, index) => (
              <i
                className={`poly-species-shard poly-species-shard--${(index % 5) + 1}`}
                key={index}
                style={{
                  background: appearance.palette[shard.tone],
                  clipPath: shard.clipPath,
                }}
              />
            ))}
          </div>
        </div>
        <div className="poly-species-shadow" />
      </div>

      <article className="poly-species-copy" aria-live="polite">
        <p>{formCopy.kicker}</p>
        <h1>{formCopy.title}</h1>
        <span>{formCopy.trait}</span>
        <div className="poly-species-copy__body">
          <i aria-hidden="true" />
          <p>{formCopy.body}</p>
        </div>
      </article>

      <nav aria-label={copy.collection} className="poly-species-rail">
        {copy.forms.map((item, index) => (
          <button
            aria-label={`${(index + 1).toString().padStart(2, "0")} / ${item.title}`}
            aria-pressed={activeForm === index}
            className={activeForm === index ? "is-active" : ""}
            key={item.title}
            onClick={() => setActiveForm(index)}
            title={item.title}
            type="button"
          >
            <span>{(index + 1).toString().padStart(2, "0")}</span>
            <i aria-hidden="true" />
          </button>
        ))}
      </nav>

      <div className="poly-species-controls">
        <button
          aria-label={copy.previous}
          onClick={() => changeForm(-1)}
          title={copy.previous}
          type="button"
        >
          <ChevronLeft aria-hidden="true" size={19} />
        </button>
        <span>
          30 {copy.shards}
        </span>
        <button
          aria-label={copy.next}
          onClick={() => changeForm(1)}
          title={copy.next}
          type="button"
        >
          <ChevronRight aria-hidden="true" size={19} />
        </button>
        <button
          aria-label={ambientMotion ? copy.motionOff : copy.motionOn}
          className="poly-species-motion-toggle"
          onClick={() => setAmbientMotion((current) => !current)}
          title={ambientMotion ? copy.motionOff : copy.motionOn}
          type="button"
        >
          {ambientMotion ? (
            <Pause aria-hidden="true" size={15} />
          ) : (
            <Play aria-hidden="true" size={15} />
          )}
        </button>
      </div>

      <p className="poly-species-gesture">{copy.gesture}</p>
    </section>
  );
}
