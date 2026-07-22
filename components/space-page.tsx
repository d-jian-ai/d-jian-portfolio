"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { useLanguage } from "@/components/language-provider";

type Mode = "mist" | "light" | "rain";

type Trace = {
  id: number;
  x: number;
  y: number;
  mode: Mode;
};

export function SpacePage() {
  const { dictionary } = useLanguage();
  const [mode, setMode] = useState<Mode>("mist");
  const [traces, setTraces] = useState<Trace[]>([]);
  const lastTrace = useRef(0);

  function addTrace(event: PointerEvent<HTMLDivElement>) {
    const now = performance.now();
    if (now - lastTrace.current < 70) return;
    lastTrace.current = now;

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextTrace: Trace = {
      id: now,
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
      mode,
    };

    setTraces((current) => [...current.slice(-54), nextTrace]);
  }

  return (
    <section className="section-band space-page">
      <div className="page-grid space-header">
        <div>
          <p className="section-kicker">Playground</p>
          <h1>{dictionary.space.title}</h1>
        </div>
        <p>{dictionary.space.lead}</p>
      </div>

      <div className="space-layout">
        <div
          className={`interaction-field field-${mode}`}
          onPointerMove={addTrace}
          onPointerDown={addTrace}
        >
          <div className="field-horizon" />
          <div className="field-canopy" />
          {traces.map((trace) => (
            <span
              className={`trace trace-${trace.mode}`}
              key={trace.id}
              style={
                {
                  "--trace-x": `${trace.x}%`,
                  "--trace-y": `${trace.y}%`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <aside className="space-controls">
          <div className="segmented-control" aria-label="Interaction mode">
            <button
              className={mode === "mist" ? "active" : ""}
              onClick={() => setMode("mist")}
              type="button"
            >
              {dictionary.space.modeMist}
            </button>
            <button
              className={mode === "light" ? "active" : ""}
              onClick={() => setMode("light")}
              type="button"
            >
              {dictionary.space.modeLight}
            </button>
            <button
              className={mode === "rain" ? "active" : ""}
              onClick={() => setMode("rain")}
              type="button"
            >
              {dictionary.space.modeRain}
            </button>
          </div>
          <div className="space-notes">
            <h2>{dictionary.space.notesTitle}</h2>
            {dictionary.space.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
