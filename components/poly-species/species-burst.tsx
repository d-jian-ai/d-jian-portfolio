import type { CSSProperties } from "react";
import type { SpeciesShard } from "@/config/poly-species";

type BurstPhase = "closing" | "opening" | "settled";

type BurstStyle = CSSProperties & {
  "--burst-delay": string;
  "--burst-drift-rotate": string;
  "--burst-drift-x": string;
  "--burst-drift-y": string;
  "--burst-duration": string;
  "--burst-rotate": string;
  "--burst-scale": number;
  "--burst-x": string;
  "--burst-y": string;
};

export function getShardOrigin(clipPath: string) {
  const points = Array.from(
    clipPath.matchAll(/([\d.]+)%\s+([\d.]+)%/g),
    (match) => [Number(match[1]), Number(match[2])] as const,
  );
  const total = points.reduce(
    (result, [x, y]) => ({ x: result.x + x, y: result.y + y }),
    { x: 0, y: 0 },
  );
  const count = Math.max(points.length, 1);
  return `${total.x / count}% ${total.y / count}%`;
}

function getBurstStyle(index: number): BurstStyle {
  const edge = index % 4;
  const slot = Math.floor(index / 4);
  const spread = -36 + ((slot * 17 + index * 5) % 72);
  const depth = 34 + ((index * 11) % 17);
  const rotation = -150 + ((index * 67) % 300);

  const x = edge === 0 ? -depth : edge === 1 ? depth : spread;
  const y = edge === 2 ? -depth : edge === 3 ? depth : spread;

  return {
    "--burst-delay": `${(index % 10) * 14}ms`,
    "--burst-drift-rotate": `${7 + (index % 6) * 2.4}deg`,
    "--burst-drift-x": `${0.25 + (index % 4) * 0.13}vw`,
    "--burst-drift-y": `${0.18 + (index % 5) * 0.09}vh`,
    "--burst-duration": `${12 + (index % 7) * 1.7}s`,
    "--burst-rotate": `${rotation}deg`,
    "--burst-scale": 0.2 + (index % 5) * 0.035,
    "--burst-x": `${x}vw`,
    "--burst-y": `${y}vh`,
  };
}

export function SpeciesBurst({
  phase,
  shards,
}: {
  phase: BurstPhase;
  shards: SpeciesShard[];
}) {
  return (
    <div aria-hidden="true" className={`sip-burst sip-burst--${phase}`}>
      {shards.map((shard, index) => (
        <i
          className="sip-burst-shard"
          key={index}
          style={{
            ...getBurstStyle(index),
            backgroundColor: shard.color,
            clipPath: shard.clipPath,
            transformOrigin: getShardOrigin(shard.clipPath),
          }}
        />
      ))}
    </div>
  );
}
