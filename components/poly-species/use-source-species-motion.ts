"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ShardDirection } from "@/components/poly-species/species-shards";

type PrimaryMotionState = "" | "state-two" | "state-three" | "state-four";

const SOURCE_IDLE_RESTORE_MS = 2000;

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
  const [idleMotionSuppressed, setIdleMotionSuppressed] = useState(false);
  const [primaryState, setPrimaryState] = useState<PrimaryMotionState>("");
  const [secondaryState, setSecondaryState] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const activeIndexRef = useRef(initialIndex);
  const idleRestoreTimer = useRef<number | null>(null);

  const suspendIdleMotion = useCallback(() => {
    if (idleRestoreTimer.current) {
      window.clearTimeout(idleRestoreTimer.current);
      idleRestoreTimer.current = null;
    }
    setIdleMotionSuppressed(true);
  }, []);

  const restoreIdleMotion = useCallback(() => {
    setIdleMotionSuppressed(true);
    if (idleRestoreTimer.current) window.clearTimeout(idleRestoreTimer.current);
    idleRestoreTimer.current = window.setTimeout(() => {
      setIdleMotionSuppressed(false);
      idleRestoreTimer.current = null;
    }, SOURCE_IDLE_RESTORE_MS);
  }, []);

  const stepSpecies = useCallback(
    (step: number) => {
      const current = activeIndexRef.current;
      const next = (current + step + count) % count;
      setDirection(next < current ? "right-to-left" : "left-to-right");
      activeIndexRef.current = next;
      restoreIdleMotion();
      setActiveIndex(next);
    },
    [count, restoreIdleMotion],
  );

  const selectSpecies = useCallback(
    (index: number) => {
      const current = activeIndexRef.current;
      if (index === current) return;
      setDirection(index < current ? "right-to-left" : "left-to-right");
      activeIndexRef.current = index;
      restoreIdleMotion();
      setActiveIndex(index);
    },
    [restoreIdleMotion],
  );

  const sourceMotionActive = enabled && active && !idleMotionSuppressed;

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
      if (idleRestoreTimer.current) window.clearTimeout(idleRestoreTimer.current);
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
    restoreIdleMotion,
    rootClassName,
    selectSpecies,
    stepSpecies,
    suspendIdleMotion,
  };
}
