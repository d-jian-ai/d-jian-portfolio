"use client";

import { Eraser, MousePointer2 } from "lucide-react";
import {
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { ImmersiveScene } from "@/components/immersive-scene";
import { useLanguage } from "@/components/language-provider";

type Mode = "mist" | "light" | "rain";

type Trace = {
  id: number;
  x: number;
  y: number;
  mode: Mode;
  scale: number;
};

export function SpacePage() {
  const { dictionary } = useLanguage();
  const [mode, setMode] = useState<Mode>("mist");
  const [traces, setTraces] = useState<Trace[]>([]);
  const lastTrace = useRef(0);

  function addTrace(event: PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    const now = performance.now();
    if (now - lastTrace.current < 52) return;
    lastTrace.current = now;

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextTrace: Trace = {
      id: now,
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
      mode,
      scale: 0.72 + ((Math.floor(now) % 9) / 9) * 0.68,
    };

    setTraces((current) => [...current.slice(-84), nextTrace]);
  }

  return (
    <section
      className={`space-experience mode-${mode}`}
      onPointerDown={addTrace}
      onPointerMove={addTrace}
    >
      <div className="space-canvas" aria-hidden="true">
        <ImmersiveScene variant={mode} />
      </div>
      <div className="space-shade" aria-hidden="true" />

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

      <header className="space-heading">
        <p className="section-kicker" data-reveal>
          INTERACTIVE / REAL-TIME
        </p>
        <h1 data-reveal>{dictionary.space.title}</h1>
        <p data-reveal>{dictionary.space.lead}</p>
      </header>

      <div className="space-status">
        <MousePointer2 aria-hidden="true" size={16} />
        <span>{dictionary.space.gesture}</span>
        <span className="status-line" />
        <span>
          {dictionary.space.traces} / {traces.length.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="space-control-bar">
        <div className="segmented-control" aria-label="Interaction mode">
          {(["mist", "light", "rain"] as Mode[]).map((item) => (
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

      <aside className="space-notes">
        <p className="section-kicker">{dictionary.space.notesTitle}</p>
        {dictionary.space.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </aside>
    </section>
  );
}
