"use client";

import type { CSSProperties } from "react";

export type ShardDirection = "left-to-right" | "right-to-left";
type ShardTimingStyle = CSSProperties & {
  "--sip-all-bg-delay": string;
  "--sip-all-clip": string;
  "--sip-all-clip-delay": string;
  "--sip-all-clip-duration": string;
  "--sip-bg-delay": string;
  "--sip-clip-delay": string;
  "--sip-clip-duration": string;
};

const SHARD_COUNT = 33;
const PRIMARY_SHARD_COUNT = 30;
const ALL_SPECIES_CLIPS = [
  "polygon(12.762% 61.464%, 17.986% 76.893%, 21.367% 69.321%)",
  "polygon(78.188% 35.179%, 83.275% 54.179%, 85.792% 43.179%)",
  "polygon(83.584% 85.607%, 82.494% 97.893%, 89.503% 96.607%)",
  "polygon(69.013% 68.464%, 64.753% 77.036%, 70.342% 74.179%)",
  "polygon(18.5% 44.286%, 15.2% 42.286%, 15.9% 44.857%)",
  "polygon(28.027% 30.75%, 20.63% 44.75%, 30.912% 46.321%)",
  "polygon(30.5% 13.321%, 26.8% 10.321%, 31% 8.464%)",
  "polygon(60.5% 58.036%, 62.6% 64.179%, 62.6% 58.036%)",
  "polygon(13.4% 93.75%, 8.2% 93.464%, 12.7% 97.036%)",
  "polygon(25% 92%, 25.5% 92.5%, 26% 92%)",
  "polygon(6.5% 17.893%, 6.9% 10.893%, 2.8% 19.464%)",
  "polygon(32.1% 84%, 34.1% 86.429%, 35.5% 81.714%)",
  "polygon(32.3% 34.607%, 31.3% 39.607%, 33.3% 36.036%)",
  "polygon(14.008% 88.179%, 18.023% 93.464%, 16.653% 89.321%)",
  "polygon(84.234% 7.893%, 90.231% 6.607%, 87.93% 5.75%)",
  "polygon(59.9% 94.714%, 60.4% 99.9%, 63.6% 98.714%)",
  "polygon(8.75% 52.607%, 6.123% 59.036%, 11.425% 57.321%)",
  "polygon(70% 92%, 71% 94%, 72% 93%)",
  "polygon(73.5% 18.857%, 76.3% 16.857%, 74.4% 14.429%)",
  "polygon(80% 92%, 81% 94%, 82% 93%)",
  "polygon(73.3% 30.429%, 75.5% 28.714%, 74.8% 27.857%)",
  "polygon(85% 27%, 86% 29%, 87% 28%)",
  "polygon(22.6% 35.571%, 19.8% 34.714%, 21.8% 32%)",
  "polygon(86.9% 44.643%, 90.5% 44.929%, 89.8% 41.786%)",
  "polygon(47.769% 99.732%, 48.769% 100%, 50.169% 98%)",
  "polygon(5.669% 36.589%, 4.769% 33.018%, 4.069% 36.304%)",
  "polygon(84.1% 69.857%, 85.5% 70.714%, 85.3% 69.286%)",
  "polygon(24% 95.732%, 27.769% 98%, 25.969% 99.161%)",
  "polygon(85% 80%, 85.5% 80.5%, 86% 80%)",
  "polygon(60.769% 12.875%, 64.769% 10.018%, 65.669% 14.875%)",
  "polygon(50% 50%, 50% 50%, 50% 50%)",
  "polygon(50% 50%, 50% 50%, 50% 50%)",
  "polygon(50% 50%, 50% 50%, 50% 50%)",
] as const;

function getShardTiming(
  index: number,
  direction: ShardDirection,
): ShardTimingStyle {
  const allSpeciesTiming = {
    "--sip-all-bg-delay": `${(index + 1) * 10}ms`,
    "--sip-all-clip": ALL_SPECIES_CLIPS[index],
    "--sip-all-clip-delay": `${340 + index * 10}ms`,
    "--sip-all-clip-duration": `${140 + index * 40}ms`,
  };

  if (index >= PRIMARY_SHARD_COUNT) {
    return {
      ...allSpeciesTiming,
      "--sip-bg-delay": `${260 + (index - PRIMARY_SHARD_COUNT) * 120}ms`,
      "--sip-clip-delay": `${260 + (index - PRIMARY_SHARD_COUNT) * 120}ms`,
      "--sip-clip-duration": "600ms",
    };
  }

  if (direction === "right-to-left") {
    return {
      ...allSpeciesTiming,
      "--sip-bg-delay": `${600 - index * 20}ms`,
      "--sip-clip-delay": `${950 - index * 25}ms`,
      "--sip-clip-duration": `${1500 - index * 40}ms`,
    };
  }

  return {
    ...allSpeciesTiming,
    "--sip-bg-delay": `${20 + index * 20}ms`,
    "--sip-clip-delay": `${220 + index * 20}ms`,
    "--sip-clip-duration": `${340 + index * 40}ms`,
  };
}

export function SpeciesShards({
  className = "",
  direction,
  highlightedShard = null,
  highlightColor,
  speciesId,
  withShadow = true,
}: {
  className?: string;
  direction: ShardDirection;
  highlightedShard?: number | null;
  highlightColor?: string;
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
                  <i
                    className={`sip-shard shard${highlightedShard === index ? " active" : ""}`}
                    style={highlightedShard === index && highlightColor
                      ? ({ "--sip-highlight": highlightColor } as CSSProperties)
                      : undefined}
                  />
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
