"use client";

import { useEffect, useState, type CSSProperties } from "react";

export type ShardDirection = "left-to-right" | "right-to-left";
export type ShardPhase = "closing" | "opening";

type ShardTimingStyle = CSSProperties & {
  "--sip-bg-delay": string;
  "--sip-burst-delay": string;
  "--sip-burst-duration": string;
  "--sip-burst-rotate": string;
  "--sip-burst-x": string;
  "--sip-burst-y": string;
  "--sip-clip-delay": string;
  "--sip-clip-duration": string;
};

const SHARD_COUNT = 33;
const PRIMARY_SHARD_COUNT = 30;

function getShardTiming(
  index: number,
  direction: ShardDirection,
): ShardTimingStyle {
  const angle = index * 2.399963;
  const radius = 12 + ((index * 17) % 34);
  const burstMotion = {
    "--sip-burst-delay": `${-((index * 137) % 1800)}ms`,
    "--sip-burst-duration": `${2400 + ((index * 211) % 1900)}ms`,
    "--sip-burst-rotate": `${index % 2 ? -7 - (index % 8) : 8 + (index % 9)}deg`,
    "--sip-burst-x": `${(Math.cos(angle) * radius).toFixed(3)}px`,
    "--sip-burst-y": `${(Math.sin(angle) * radius).toFixed(3)}px`,
  };

  if (index >= PRIMARY_SHARD_COUNT) {
    return {
      ...burstMotion,
      "--sip-bg-delay": `${260 + (index - PRIMARY_SHARD_COUNT) * 120}ms`,
      "--sip-clip-delay": `${260 + (index - PRIMARY_SHARD_COUNT) * 120}ms`,
      "--sip-clip-duration": "600ms",
    };
  }

  if (direction === "right-to-left") {
    return {
      ...burstMotion,
      "--sip-bg-delay": `${600 - index * 20}ms`,
      "--sip-clip-delay": `${950 - index * 25}ms`,
      "--sip-clip-duration": `${1500 - index * 40}ms`,
    };
  }

  return {
    ...burstMotion,
    "--sip-bg-delay": `${20 + index * 20}ms`,
    "--sip-clip-delay": `${220 + index * 20}ms`,
    "--sip-clip-duration": `${340 + index * 40}ms`,
  };
}

export function SpeciesShards({
  className = "",
  direction,
  speciesId,
  withShadow = true,
}: {
  className?: string;
  direction: ShardDirection;
  speciesId: string;
  withShadow?: boolean;
}) {
  return (
    <div
      className={`sip-shard-field animalchanger ${speciesId} ${className}`.trim()}
    >
      <div className="level-one">
        <div className="level-two">
          <div className="animal-mover">
            <div className={`sip-animal wrap ${direction}`}>
              {Array.from({ length: SHARD_COUNT }, (_, index) => (
                <span
                  className={`shard-wrap${index >= PRIMARY_SHARD_COUNT ? " peripheral" : ""}`}
                  key={index}
                  style={getShardTiming(index, direction)}
                >
                  <i className="sip-shard shard" />
                </span>
              ))}
              {withShadow ? (
                <i aria-hidden="true" className="sip-animal-shadow shadow" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpeciesSourceBurst({
  direction,
  phase,
  speciesId,
}: {
  direction: ShardDirection;
  phase: ShardPhase;
  speciesId: string;
}) {
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    let secondFrame = 0;
    setExploded(phase === "closing");
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setExploded(phase === "opening");
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [phase]);

  return (
    <div
      aria-hidden="true"
      className={`sip-source-burst-shell is-${phase}${exploded ? " smash" : ""}`}
    >
      <SpeciesShards
        className="sip-source-burst"
        direction={direction}
        speciesId={speciesId}
        withShadow={false}
      />
    </div>
  );
}
