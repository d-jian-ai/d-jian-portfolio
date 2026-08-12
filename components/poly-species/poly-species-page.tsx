"use client";

import {
  ArrowLeft,
  BarChart3,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Globe2,
  Grip,
  Moon,
  Pause,
  Play,
  Repeat2,
  Shuffle,
  Square,
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
import { SpeciesStatisticVisual } from "@/components/poly-species/species-statistic-visual";
import { SpeciesShards } from "@/components/poly-species/species-shards";
import { useSourceSpeciesMotion } from "@/components/poly-species/use-source-species-motion";
import {
  POLY_SPECIES,
  POLY_SPECIES_UI,
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

type IndexPhase = "idle" | "opening" | "open" | "closing";
type PanelPhase = "exhibit" | "threat" | "statistics" | "closing";

const DRAG_THRESHOLD = 48;
const SOURCE_REASSEMBLY_DELAY_MS = 120;
const SOURCE_PANEL_CLOSE_MS = 300;
const SOURCE_SMASH_DELAY_MS = 10;
const SOURCE_ALL_SPECIES_BURST_MS = 500;
const SOURCE_ALL_SPECIES_CLOSE_MS = 1500;
const SOURCE_AUTOPLAY_INTERVAL_MS = 2900;
const WHEEL_COOLDOWN_MS = 920;
const WHEEL_THRESHOLD = 24;

export function PolySpeciesPage() {
  const { locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState<SpeciesView>("exhibit");
  const [autoCycle, setAutoCycle] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSmashed, setIsSmashed] = useState(false);
  const [indexPhase, setIndexPhase] = useState<IndexPhase>("idle");
  const [hoveredSpecies, setHoveredSpecies] = useState<number | null>(null);
  const [activeStatistic, setActiveStatistic] = useState(0);
  const dragState = useRef({ active: false, pointerId: -1, startY: 0 });
  const lastWheelStep = useRef(0);
  const panelPhase = useRef<PanelPhase>("exhibit");
  const indexPhaseRef = useRef<IndexPhase>("idle");
  const closeTimer = useRef<number | null>(null);
  const reassemblyTimer = useRef<number | null>(null);
  const smashTimer = useRef<number | null>(null);
  const indexBurstTimer = useRef<number | null>(null);
  const indexCloseTimer = useRef<number | null>(null);
  const {
    activeIndex,
    direction,
    rootClassName: sourceMotionClass,
    restoreIdleMotion,
    selectSpecies: transitionToSpecies,
    stepSpecies: changeSpecies,
    suspendIdleMotion,
  } = useSourceSpeciesMotion({
    active: view === "exhibit" || isClosing || indexPhase === "closing",
    count: POLY_SPECIES.length,
    enabled: motionEnabled,
    initialIndex: 21,
  });
  const species = POLY_SPECIES[activeIndex];
  const copy = POLY_SPECIES_UI[locale];
  const narrative = getSpeciesNarrative(species, locale);
  const statistic = species.statistics[activeStatistic] ?? species.statistics[0];
  const displayView = isClosing || indexPhase === "closing" ? "exhibit" : view;

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) setMotionEnabled(false);
  }, []);

  useEffect(() => {
    if (!autoCycle || view !== "exhibit") return;
    const cycle = window.setInterval(() => {
      transitionToSpecies(Math.floor(Math.random() * POLY_SPECIES.length));
    }, SOURCE_AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(cycle);
  }, [autoCycle, transitionToSpecies, view]);

  useEffect(() => {
    setActiveStatistic(0);
  }, [activeIndex]);

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
      if (reassemblyTimer.current) window.clearTimeout(reassemblyTimer.current);
      if (smashTimer.current) window.clearTimeout(smashTimer.current);
      if (indexBurstTimer.current) window.clearTimeout(indexBurstTimer.current);
      if (indexCloseTimer.current) window.clearTimeout(indexCloseTimer.current);
    },
    [],
  );

  function cycleLocale() {
    const current = LOCALE_OPTIONS.findIndex((option) => option.value === locale);
    setLocale(LOCALE_OPTIONS[(current + 1) % LOCALE_OPTIONS.length].value);
  }

  function stopAutoCycle() {
    setAutoCycle(false);
  }

  function toggleAutoCycle() {
    if (autoCycle) {
      setAutoCycle(false);
      restoreIdleMotion();
      return;
    }

    setAutoCycle(true);
    transitionToSpecies(Math.floor(Math.random() * POLY_SPECIES.length));
  }

  function navigateSpecies(step: number) {
    stopAutoCycle();
    changeSpecies(step);
  }

  function openSpeciesIndex() {
    if (
      view !== "exhibit" ||
      panelPhase.current !== "exhibit" ||
      indexPhaseRef.current !== "idle"
    ) {
      return;
    }

    stopAutoCycle();
    suspendIdleMotion();
    if (indexBurstTimer.current) window.clearTimeout(indexBurstTimer.current);
    if (indexCloseTimer.current) window.clearTimeout(indexCloseTimer.current);
    setHoveredSpecies(null);
    setIsClosing(false);
    setIsSmashed(false);
    indexPhaseRef.current = "opening";
    setIndexPhase("opening");
    setView("index");
    indexBurstTimer.current = window.setTimeout(() => {
      indexPhaseRef.current = "open";
      setIndexPhase("open");
      indexBurstTimer.current = null;
    }, SOURCE_ALL_SPECIES_BURST_MS);
  }

  function closeSpeciesIndex(nextIndex?: number) {
    if (
      indexPhaseRef.current === "idle" ||
      indexPhaseRef.current === "closing"
    ) {
      return;
    }

    if (indexBurstTimer.current) window.clearTimeout(indexBurstTimer.current);
    if (typeof nextIndex === "number") transitionToSpecies(nextIndex);
    restoreIdleMotion();
    setHoveredSpecies(null);
    indexPhaseRef.current = "closing";
    setIndexPhase("closing");
    indexCloseTimer.current = window.setTimeout(() => {
      setView("exhibit");
      indexPhaseRef.current = "idle";
      setIndexPhase("idle");
      indexCloseTimer.current = null;
    }, SOURCE_ALL_SPECIES_CLOSE_MS);
  }

  function selectRandomSpecies() {
    closeSpeciesIndex(Math.floor(Math.random() * POLY_SPECIES.length));
  }

  function openPanel(nextView: Exclude<SpeciesView, "exhibit">) {
    if (nextView === "index") {
      openSpeciesIndex();
      return;
    }

    if (
      view !== "exhibit" ||
      panelPhase.current !== "exhibit" ||
      indexPhaseRef.current !== "idle"
    ) {
      return;
    }

    panelPhase.current = nextView;
    stopAutoCycle();
    suspendIdleMotion();
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (reassemblyTimer.current) window.clearTimeout(reassemblyTimer.current);
    if (smashTimer.current) window.clearTimeout(smashTimer.current);
    setIsClosing(false);
    setView(nextView);

    setIsSmashed(false);
    smashTimer.current = window.setTimeout(() => {
      setIsSmashed(true);
      smashTimer.current = null;
    }, SOURCE_SMASH_DELAY_MS);
  }

  function switchPanel(nextView: "threat" | "statistics") {
    if (
      panelPhase.current === "exhibit" ||
      panelPhase.current === "closing" ||
      panelPhase.current === nextView
    ) {
      return;
    }

    panelPhase.current = nextView;
    setView(nextView);
  }

  function closePanel() {
    if (
      panelPhase.current === "exhibit" ||
      panelPhase.current === "closing"
    ) {
      return;
    }

    panelPhase.current = "closing";
    if (smashTimer.current) window.clearTimeout(smashTimer.current);
    setIsClosing(true);
    restoreIdleMotion();
    reassemblyTimer.current = window.setTimeout(() => {
      setIsSmashed(false);
      reassemblyTimer.current = null;
    }, SOURCE_REASSEMBLY_DELAY_MS);
    closeTimer.current = window.setTimeout(() => {
      setView("exhibit");
      setIsClosing(false);
      panelPhase.current = "exhibit";
      closeTimer.current = null;
    }, SOURCE_PANEL_CLOSE_MS);
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
      navigateSpecies(distance < 0 ? 1 : -1);
    }
  }

  function handleWheel(event: WheelEvent<HTMLElement>) {
    if (view !== "exhibit" || Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
    event.preventDefault();

    const now = performance.now();
    if (now - lastWheelStep.current < WHEEL_COOLDOWN_MS) return;
    lastWheelStep.current = now;
    navigateSpecies(event.deltaY > 0 ? 1 : -1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && view !== "exhibit") {
      if (view === "index") closeSpeciesIndex();
      else closePanel();
      return;
    }
    if (view !== "exhibit") return;

    if (["ArrowDown", "ArrowRight", "PageDown"].includes(event.key)) {
      event.preventDefault();
      navigateSpecies(1);
    }
    if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      navigateSpecies(-1);
    }
  }

  const pageStyle: ExperienceStyle = {
    "--sip-accent": species.theme.accent,
    "--sip-background": species.theme.background,
  };
  return (
    <main
      className={`sip-experience chromebrowser sip-mode-${theme}${sourceMotionClass ? ` ${sourceMotionClass}` : ""}${isSmashed ? " smash" : ""}${isClosing ? " is-closing" : ""}${isDragging ? " is-dragging" : ""}${view === "index" && indexPhase !== "closing" ? " all-animals" : ""}${indexPhase === "opening" ? " earlyburst" : ""}${indexPhase === "closing" ? " slow-polygons" : ""}${autoCycle ? " slideshow-on" : ""}`}
      data-view={displayView}
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      style={pageStyle}
      tabIndex={0}
    >
      <div className="sip-motion-root">
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
          <button aria-label={copy.allPieces} onClick={openSpeciesIndex} type="button">
            <Grip aria-hidden="true" size={20} />
            <span className="sip-control-label">{copy.allPieces}</span>
          </button>
          <button
            aria-label={autoCycle ? copy.stopCycle : copy.autoCycle}
            aria-pressed={autoCycle}
            className={autoCycle ? "is-active" : ""}
            onClick={toggleAutoCycle}
            type="button"
          >
            {autoCycle ? <Square aria-hidden="true" size={16} /> : <Repeat2 aria-hidden="true" size={20} />}
            <span className="sip-control-label">{autoCycle ? copy.stopCycle : copy.autoCycle}</span>
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

        <div className="sip-stage">
          <SpeciesShards
            direction={direction}
            highlightedShard={hoveredSpecies}
            highlightColor={hoveredSpecies === null ? undefined : POLY_SPECIES[hoveredSpecies].theme.accent}
            speciesId={species.id}
          />
        </div>

        <nav aria-label={copy.collection} className="sip-side-controls sip-side-controls--right">
          <button aria-label={copy.previous} onClick={() => navigateSpecies(-1)} title={copy.previous} type="button">
            <ChevronUp aria-hidden="true" size={22} />
          </button>
          <button className="sip-threat-trigger" onClick={() => openPanel("threat")} type="button">
            <span>{copy.openThreat}</span>
          </button>
          <button aria-label={copy.next} onClick={() => navigateSpecies(1)} title={copy.next} type="button">
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

        </section>
      </div>

      {view === "index" ? (
        <section aria-label={copy.allPieces} className={`sip-overlay sip-index-panel${indexPhase === "closing" ? " is-closing" : ""}`}>
          <button className="sip-panel-close" aria-label={copy.close} onClick={() => closeSpeciesIndex()} title={copy.close} type="button">
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
                  onBlur={() => setHoveredSpecies(null)}
                  onClick={() => closeSpeciesIndex(index)}
                  onFocus={() => setHoveredSpecies(index)}
                  onPointerEnter={() => setHoveredSpecies(index)}
                  onPointerLeave={() => setHoveredSpecies(null)}
                  role="listitem"
                  style={{ "--sip-index": index } as RingStyle}
                  title={itemName}
                  type="button"
                >
                  <i aria-hidden="true" />
                  <span>
                    <small className="sip-index-piece">{copy.piece} {String(item.index).padStart(2, "0")}</small>
                    <strong>{itemName}</strong>
                    <small>{item.scientificName}</small>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="sip-index-center">
            {hoveredSpecies === null ? (
              <div className="sip-index-summary">
                <span className="sip-index-eyebrow">{copy.indexEyebrow}</span>
                <h2>
                  <strong>30</strong> {copy.speciesCountLabel}<br />
                  <strong>30</strong> {copy.piecesCountLabel}
                </h2>
                <p>{copy.survivalLabel}</p>
                <p className="sip-index-caption">{copy.indexCaption}</p>
                <button className="sip-index-random" onClick={selectRandomSpecies} type="button">
                  <Shuffle aria-hidden="true" size={15} />
                  <span>{copy.random}</span>
                </button>
              </div>
            ) : (
              <div className="sip-index-detail" key={POLY_SPECIES[hoveredSpecies].id}>
                <span>{copy.piece} {String(POLY_SPECIES[hoveredSpecies].index).padStart(2, "0")}</span>
                <h2>{getSpeciesNarrative(POLY_SPECIES[hoveredSpecies], locale).name}</h2>
                <small>{POLY_SPECIES[hoveredSpecies].scientificName}</small>
              </div>
            )}
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
            <button className="sip-statistics-action" onClick={() => switchPanel("statistics")} type="button">
              <BarChart3 aria-hidden="true" size={22} />
              {copy.viewStatistics}
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </div>
        </section>
      ) : null}

      {view === "statistics" ? (
        <section aria-label={copy.statistics} className={`sip-overlay sip-statistics-panel${isClosing ? " is-closing" : ""}`}>
          <button className="sip-panel-back" onClick={() => switchPanel("threat")} type="button">
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
              <SpeciesStatisticVisual
                locale={locale}
                sourceLabel={copy.source}
                statistic={statistic}
              />
            </article>
          </div>
        </section>
      ) : null}
    </main>
  );
}
