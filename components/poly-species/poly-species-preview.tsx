import { POLY_SPECIES } from "@/config/poly-species";

export function PolySpeciesPreview() {
  const species = POLY_SPECIES[21];

  return (
    <div
      className="poly-species-preview"
      style={{ background: species.theme.background }}
    >
      <div className="poly-species-preview__body">
        {species.shards.map((shard, index) => (
          <i
            key={index}
            style={{
              background: shard.color,
              clipPath: shard.clipPath,
            }}
          />
        ))}
      </div>
      <span>30 / DOM SHARDS</span>
    </div>
  );
}
