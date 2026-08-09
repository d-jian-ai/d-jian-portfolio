import { POLY_SPECIES_PREVIEW } from "@/config/poly-species-preview";

export function PolySpeciesPreview() {
  const species = POLY_SPECIES_PREVIEW;

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
