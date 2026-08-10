"use client";

import type { CSSProperties } from "react";

export type ShardDirection = "left-to-right" | "right-to-left";
type ShardTimingStyle = CSSProperties & {
  "--sip-bg-delay": string;
  "--sip-clip-delay": string;
  "--sip-clip-duration": string;
};

const SHARD_COUNT = 33;
const PRIMARY_SHARD_COUNT = 30;

function getShardTiming(
  index: number,
  direction: ShardDirection,
): ShardTimingStyle {
  if (index >= PRIMARY_SHARD_COUNT) {
    return {
      "--sip-bg-delay": `${260 + (index - PRIMARY_SHARD_COUNT) * 120}ms`,
      "--sip-clip-delay": `${260 + (index - PRIMARY_SHARD_COUNT) * 120}ms`,
      "--sip-clip-duration": "600ms",
    };
  }

  if (direction === "right-to-left") {
    return {
      "--sip-bg-delay": `${600 - index * 20}ms`,
      "--sip-clip-delay": `${950 - index * 25}ms`,
      "--sip-clip-duration": `${1500 - index * 40}ms`,
    };
  }

  return {
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
