"use client";

import {
  ArrowLeft,
  BarChart3,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  Grid3X3,
  Globe2,
  Moon,
  Pause,
  Play,
  Shuffle,
  Sun,
  X,
} from "lucide-react";
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
import {
  SpeciesShards,
  SpeciesSourceBurst,
} from "@/components/poly-species/species-shards";
import { useSourceSpeciesMotion } from "@/components/poly-species/use-source-species-motion";
import {
  POLY_SPECIES,
  POLY_SPECIES_UI,
  type SpeciesSeriesPoint,
  type SpeciesStatistic,
  type SpeciesView,
} from "@/config/poly-species";
import {
  getSpeciesNarrative,
  getStatisticTitle,
} from "@/config/poly-species-copy";
import { LOCALE_OPTIONS } from "@/config/site";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";

type ExperienceStyle = CSSProperties & {
  "--sip-accent": string;
  "--sip-background": string;
};

type RingStyle = CSSProperties & {
  "--sip-index": number;
};

type BarStyle = CSSProperties & {
  "--sip-bar": string;
};

const DRAG_THRESHOLD = 48;
const WHEEL_COOLDOWN_MS = 920;
const WHEEL_THRESHOLD = 24;

function getMetricValue(value: string) {
  const values = value
    .replaceAll(",", "")
    .match(/\d+(?:\.\d+)?/g)
    ?.map(Number);

  return values?.length ? Math.max(...values) : 0;
}

function getBarWidths(points: SpeciesSeriesPoint[]) {
  const values = points.map((point) => getMetricValue(point.value));
  const maximum = Math.max(...values, 0);

  return values.map((value, index) => {
    if (!maximum) return 42 + ((index * 13) % 46);
    return Math.max(7, (value / maximum) * 100);
  });
}

function StatisticVisual({
  locale,
  note,
  statistic,
}: {
  locale: "zh" | "en" | "fr";
  note: string;
  statistic: SpeciesStatistic;
}) {
  if (statistic.kind === "headline") {
    return (
      <div className="sip-stat-visual sip-stat-visual--headline">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <div>
          <strong>{statistic.value}</strong>
          <span>{locale === "en" ? statistic.note : note}</span>
        </div>
      </div>
    );
  }

  const widths = getBarWidths(statistic.points);

  return (
    <div className="sip-stat-visual sip-stat-visual--series">
      <div className="sip-stat-series">
        {statistic.points.map((point, index) => (
          <div className="sip-stat-row" key={`${point.label}-${index}`}>
            <span>{point.label}</span>
            <i
              aria-hidden="true"
              style={{ "--sip-bar": `${widths[index]}%` } as BarStyle}
            />
            <strong>{point.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PolySpeciesPage() {
  const { locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState<SpeciesView>("exhibit");
  const [autoCycle, setAutoCycle] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeStatistic, setActiveStatistic] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });
  const pointerVelocity = useRef({ x: 0, y: 0 });
  const dragState = useRef({ active: false, pointerId: -1, startY: 0 });
  const lastWheelStep = useRef(0);
  const closeTimer = useRef<number | null>(null);
  const {
    activeIndex,
    direction,
    rootClassName: sourceMotionClass,
    selectSpecies: transitionToSpecies,
    stepSpecies: changeSpecies,
  } = useSourceSpeciesMotion({
    count: POLY_SPECIES.length,
    enabled: motionEnabled && view === "exhibit",
    initialIndex: 21,
  });
  const species = POLY_SPECIES[activeIndex];
  const copy = POLY_SPECIES_UI[locale];
  const narrative = getSpeciesNarrative(species, locale);
  const statistic = species.statistics[activeStatistic] ?? species.statistics[0];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) setMotionEnabled(false);
  }, []);

  useEffect(() => {
    if (!autoCycle || view !== "exhibit") return;
    const cycle = window.setInterval(() => changeSpecies(1), 4600);
    return () => window.clearInterval(cycle);
  }, [autoCycle, changeSpecies, view]);

  useEffect(() => {
    setActiveStatistic(0);
  }, [activeIndex]);

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      const target = motionEnabled ? pointerTarget.current : { x: 0, y: 0 };
      const current = pointerCurrent.current;
      const velocity = pointerVelocity.current;

      velocity.x = (velocity.x + (target.x - current.x) * 0.055) * 0.78;
      velocity.y = (velocity.y + (target.y - current.y) * 0.055) * 0.78;
      current.x += velocity.x;
      current.y += velocity.y;

      stageRef.current?.style.setProperty("--sip-x", current.x.toFixed(4));
      stageRef.current?.style.setProperty("--sip-y", current.y.toFixed(4));
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [motionEnabled]);

  function cycleLocale() {
    const current = LOCALE_OPTIONS.findIndex((option) => option.value === locale);
    setLocale(LOCALE_OPTIONS[(current + 1) % LOCALE_OPTIONS.length].value);
  }

  function selectSpecies(index: number) {
    transitionToSpecies(index);
    closePanel();
  }

  function selectRandomSpecies() {
    const offset = 1 + Math.floor(Math.random() * (POLY_SPECIES.length - 1));
    selectSpecies((activeIndex + offset) % POLY_SPECIES.length);
  }

  function openPanel(nextView: Exclude<SpeciesView, "exhibit">) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setIsClosing(false);
    setView(nextView);
  }

  function closePanel() {
    if (isClosing) return;
    setIsClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setView("exhibit");
      setIsClosing(false);
      closeTimer.current = null;
    }, 820);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (view !== "exhibit") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerTarget.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if (view !== "exhibit" || (event.target as HTMLElement).closest("a, button")) {
      return;
    }
    dragState.current = {
      active: true,
      pointerId: event.pointerId,
      startY: event.clientY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    const drag = dragState.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const distance = event.clientY - drag.startY;
    dragState.current.active = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(distance) >= DRAG_THRESHOLD) {
      changeSpecies(distance < 0 ? 1 : -1);
    }
  }

  function handleWheel(event: WheelEvent<HTMLElement>) {
    if (view !== "exhibit" || Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
    event.preventDefault();

    const now = performance.now();
    if (now - lastWheelStep.current < WHEEL_COOLDOWN_MS) return;
    lastWheelStep.current = now;
    changeSpecies(event.deltaY > 0 ? 1 : -1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && view !== "exhibit") {
      closePanel();
      return;
    }
    if (view !== "exhibit") return;

    if (["ArrowDown", "ArrowRight", "PageDown"].includes(event.key)) {
      event.preventDefault();
      changeSpecies(1);
    }
    if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      changeSpecies(-1);
    }
  }

  const pageStyle: ExperienceStyle = {
    "--sip-accent": species.theme.accent,
    "--sip-background": species.theme.background,
  };
  return (
    <main
      className={`sip-experience chromebrowser sip-mode-${theme}${isDragging ? " is-dragging" : ""}`}
      data-view={view}
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerLeave={() => {
        pointerTarget.current = { x: 0, y: 0 };
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      style={pageStyle}
      tabIndex={0}
    >
      <div className={sourceMotionClass}>
        <section aria-label={copy.collection} className="sip-frame">
        <div className="sip-utility sip-utility--left">
          <Link aria-label={copy.back} href="/space" title={copy.back}>
            <ArrowLeft aria-hidden="true" size={19} />
          </Link>
        </div>

        <div className="sip-utility sip-utility--right">
          <button aria-label={copy.theme} onClick={toggleTheme} title={copy.theme} type="button">
            {theme === "dark" ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>
          <button aria-label={copy.language} onClick={cycleLocale} title={copy.language} type="button">
            <Globe2 aria-hidden="true" size={17} />
            <span>{locale.toUpperCase()}</span>
          </button>
        </div>

        <nav aria-label={copy.collection} className="sip-side-controls sip-side-controls--left">
          <button aria-label={copy.allPieces} onClick={() => openPanel("index")} type="button">
            <Grid3X3 aria-hidden="true" size={20} />
            <span className="sip-control-label">{copy.allPieces}</span>
          </button>
          <button
            aria-label={copy.autoCycle}
            aria-pressed={autoCycle}
            className={autoCycle ? "is-active" : ""}
            onClick={() => setAutoCycle((current) => !current)}
            type="button"
          >
            <Shuffle aria-hidden="true" size={20} />
            <span className="sip-control-label">{copy.autoCycle}</span>
          </button>
          <button
            aria-label={copy.motion}
            aria-pressed={motionEnabled}
            onClick={() => setMotionEnabled((current) => !current)}
            type="button"
          >
            {motionEnabled ? <Pause aria-hidden="true" size={19} /> : <Play aria-hidden="true" size={19} />}
            <span className="sip-control-label">{copy.motion}</span>
          </button>
        </nav>

        <div className="sip-stage" ref={stageRef}>
          <SpeciesShards direction={direction} speciesId={species.id} />
        </div>

        <nav aria-label={copy.collection} className="sip-side-controls sip-side-controls--right">
          <button aria-label={copy.previous} onClick={() => changeSpecies(-1)} title={copy.previous} type="button">
            <ChevronUp aria-hidden="true" size={22} />
          </button>
          <button className="sip-threat-trigger" onClick={() => openPanel("threat")} type="button">
            <span>{copy.openThreat}</span>
          </button>
          <button aria-label={copy.next} onClick={() => changeSpecies(1)} title={copy.next} type="button">
            <ChevronDown aria-hidden="true" size={22} />
          </button>
        </nav>

        <div aria-live="polite" className="sip-species-title">
          <span>{copy.piece} {String(species.index).padStart(2, "0")}</span>
          <i aria-hidden="true" />
          <h1>{narrative.name}</h1>
          <button aria-label={copy.statistics} onClick={() => openPanel("statistics")} title={copy.statistics} type="button">
            <BarChart3 aria-hidden="true" size={18} />
          </button>
        </div>

        <footer className="sip-footer-nav">
          <button onClick={() => openPanel("index")} type="button">{copy.allPieces}</button>
          <i aria-hidden="true" />
          <button onClick={() => openPanel("threat")} type="button">{copy.threat}</button>
          <i aria-hidden="true" />
          <button onClick={() => openPanel("statistics")} type="button">{copy.statistics}</button>
        </footer>
        </section>
      </div>

      {view !== "exhibit" ? (
        <SpeciesSourceBurst
          direction={direction}
          phase={isClosing ? "closing" : "opening"}
          speciesId={species.id}
        />
      ) : null}

      {view === "index" ? (
        <section aria-label={copy.allPieces} className={`sip-overlay sip-index-panel${isClosing ? " is-closing" : ""}`}>
          <button className="sip-panel-close" aria-label={copy.close} onClick={closePanel} title={copy.close} type="button">
            <X aria-hidden="true" size={24} />
          </button>
          <div className="sip-index-ring" role="list">
            {POLY_SPECIES.map((item, index) => {
              const itemName = getSpeciesNarrative(item, locale).name;
              return (
                <button
                  aria-label={`${String(item.index).padStart(2, "0")} ${itemName}`}
                  className={index === activeIndex ? "is-active" : ""}
                  key={item.id}
                  onClick={() => selectSpecies(index)}
                  role="listitem"
                  style={{ "--sip-index": index } as RingStyle}
                  title={itemName}
                  type="button"
                >
                  <i aria-hidden="true" />
                  <span>{String(item.index).padStart(2, "0")} {itemName}</span>
                </button>
              );
            })}
          </div>
          <div className="sip-index-center">
            <span className="sip-index-eyebrow">{copy.indexEyebrow}</span>
            <h2>
              <strong>30</strong> {copy.speciesCountLabel}<br />
              <strong>30</strong> {copy.piecesCountLabel}
            </h2>
            <p>{copy.survivalLabel}</p>
            <span className="sip-index-caption">{copy.indexCaption}</span>
            <button onClick={selectRandomSpecies} type="button">
              <Shuffle aria-hidden="true" size={16} />
              {copy.random}
            </button>
          </div>
        </section>
      ) : null}

      {view === "threat" ? (
        <section aria-label={copy.threat} className={`sip-overlay sip-threat-panel${isClosing ? " is-closing" : ""}`}>
          <button className="sip-panel-close" aria-label={copy.close} onClick={closePanel} title={copy.close} type="button">
            <X aria-hidden="true" size={24} />
          </button>
          <div className="sip-threat-meta">
            <span>{copy.scientificName}: <strong>{species.scientificName}</strong></span>
            <i aria-hidden="true" />
            <span>{copy.range}: <strong>{species.range}</strong></span>
          </div>
          <div className="sip-threat-copy">
            <h2>{narrative.threat[0]}</h2>
            <p>{narrative.threat[1]}</p>
            <p>{narrative.threat[2]}</p>
          </div>
          <div className="sip-threat-actions">
            <button className="sip-statistics-action" onClick={() => openPanel("statistics")} type="button">
              <BarChart3 aria-hidden="true" size={22} />
              {copy.viewStatistics}
              <ChevronRight aria-hidden="true" size={22} />
            </button>
            {species.conservation.href ? (
              <a href={species.conservation.href} rel="noreferrer" target="_blank">
                {copy.conservation}
                <ExternalLink aria-hidden="true" size={15} />
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      {view === "statistics" ? (
        <section aria-label={copy.statistics} className={`sip-overlay sip-statistics-panel${isClosing ? " is-closing" : ""}`}>
          <button className="sip-panel-back" onClick={() => openPanel("threat")} type="button">
            <ArrowLeft aria-hidden="true" size={16} />
            {copy.backToThreat}
          </button>
          <button className="sip-panel-close sip-panel-close--corner" aria-label={copy.close} onClick={closePanel} title={copy.close} type="button">
            <X aria-hidden="true" size={20} />
          </button>
          <div className="sip-stats-layout">
            <aside className="sip-stats-menu">
              <span>{String(species.index).padStart(2, "0")} / {narrative.name}</span>
              <h2>{copy.statistics}</h2>
              <div role="tablist" aria-label={copy.selectStatistic}>
                {species.statistics.map((item, index) => (
                  <button
                    aria-selected={activeStatistic === index}
                    className={activeStatistic === index ? "is-active" : ""}
                    key={`${item.title}-${index}`}
                    onClick={() => setActiveStatistic(index)}
                    role="tab"
                    type="button"
                  >
                    <i aria-hidden="true" />
                    <span>{getStatisticTitle(item.title, locale)}</span>
                  </button>
                ))}
              </div>
              <p>{copy.selectStatistic}</p>
            </aside>
            <article className="sip-stats-stage" role="tabpanel">
              <span>{String(activeStatistic + 1).padStart(2, "0")} / {String(species.statistics.length).padStart(2, "0")}</span>
              <h3>{getStatisticTitle(statistic.title, locale)}</h3>
              <StatisticVisual locale={locale} note={copy.statisticNote} statistic={statistic} />
            </article>
          </div>
        </section>
      ) : null}
    </main>
  );
}
