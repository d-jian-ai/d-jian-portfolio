"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ShardDirection } from "@/components/poly-species/species-shards";

type PrimaryMotionState = "" | "state-two" | "state-three" | "state-four";

const MORPH_DURATION_MS = 2050;

export function useSourceSpeciesMotion({
  active,
  count,
  enabled,
  initialIndex,
}: {
  active: boolean;
  count: number;
  enabled: boolean;
  initialIndex: number;
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<ShardDirection>("right-to-left");
  const [isMorphing, setIsMorphing] = useState(false);
  const [primaryState, setPrimaryState] = useState<PrimaryMotionState>("");
  const [secondaryState, setSecondaryState] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const morphTimer = useRef<number | null>(null);

  const beginMorph = useCallback(() => {
    setIsMorphing(true);
    if (morphTimer.current) window.clearTimeout(morphTimer.current);
    morphTimer.current = window.setTimeout(() => {
      setIsMorphing(false);
      morphTimer.current = null;
    }, MORPH_DURATION_MS);
  }, []);

  const stepSpecies = useCallback(
    (step: number) => {
      setDirection(step < 0 ? "right-to-left" : "left-to-right");
      beginMorph();
      setActiveIndex((current) => (current + step + count) % count);
    },
    [beginMorph, count],
  );

  const selectSpecies = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index < activeIndex ? "right-to-left" : "left-to-right");
      beginMorph();
      setActiveIndex(index);
    },
    [activeIndex, beginMorph],
  );

  const sourceMotionActive = enabled && active && !isMorphing;

  useEffect(() => {
    const timers = new Set<number>();
    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
    };
    const runPrimary = () => {
      setPrimaryState("");
      schedule(() => setPrimaryState("state-two"), 1000);
      schedule(() => setPrimaryState("state-three"), 2000);
      schedule(() => setPrimaryState("state-four"), 3000);
    };
    const runSecondary = () => {
      schedule(() => setSecondaryState(true), 1000);
      schedule(() => setSecondaryState(false), 1100);
      schedule(() => setSecondaryState(true), 1400);
      schedule(() => setSecondaryState(false), 1500);
    };
    const runShimmer = () => {
      schedule(() => setShimmer(true), 4000);
      schedule(() => setShimmer(false), 6000);
    };

    runPrimary();
    runSecondary();
    runShimmer();
    const primary = window.setInterval(runPrimary, 4000);
    const secondary = window.setInterval(runSecondary, 3000);
    const shimmerCycle = window.setInterval(runShimmer, 7000);

    return () => {
      window.clearInterval(primary);
      window.clearInterval(secondary);
      window.clearInterval(shimmerCycle);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(
    () => () => {
      if (morphTimer.current) window.clearTimeout(morphTimer.current);
    },
    [],
  );

  const rootClassName = useMemo(
    () =>
      [
        sourceMotionActive ? "animal-animations-on" : "",
        enabled ? primaryState : "",
        enabled && secondaryState ? "two-state-two" : "",
        enabled && shimmer ? "shimmer" : "",
      ]
        .filter(Boolean)
        .join(" "),
    [enabled, primaryState, secondaryState, shimmer, sourceMotionActive],
  );

  return {
    activeIndex,
    direction,
    rootClassName,
    selectSpecies,
    stepSpecies,
  };
}
