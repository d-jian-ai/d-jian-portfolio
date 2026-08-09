import { readFileSync } from "node:fs";

const species = JSON.parse(
  readFileSync(new URL("../data/species-in-pieces.json", import.meta.url), "utf8"),
);
const shapes = readFileSync(
  new URL("../styles/species-source-shapes.css", import.meta.url),
  "utf8",
);
const motion = readFileSync(
  new URL("../styles/species-source-motion.css", import.meta.url),
  "utf8",
);

if (species.length !== 30) {
  throw new Error(`Expected 30 species records, found ${species.length}.`);
}

for (const item of species) {
  const id = item.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const selector = new RegExp(
    `\\.animalchanger\\.${id}[^{}]*?shard-wrap:nth-child\\((\\d+)\\)`,
    "g",
  );
  const shards = new Set(
    Array.from(shapes.matchAll(selector), (match) => Number(match[1])),
  );
  const missing = Array.from({ length: 30 }, (_, index) => index + 1).filter(
    (index) => !shards.has(index),
  );

  if (missing.length) {
    throw new Error(`${item.id} is missing source shards: ${missing.join(", ")}.`);
  }
}

const smashTargets = new Set(
  Array.from(
    motion.matchAll(/\.smash \.wrap \.shard-wrap:nth-child\((\d+)\)/g),
    (match) => Number(match[1]),
  ),
);

if (smashTargets.size < 30 || !motion.includes("rotate(6000deg)")) {
  throw new Error("The source smash morph or slow rotation definition is incomplete.");
}

console.log("Poly species source integrity: 30 species, 30 shards, smash motion OK.");
