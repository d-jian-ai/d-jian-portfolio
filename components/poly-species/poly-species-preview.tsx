import {
  POLY_SPECIES_FORMS,
  POLY_SPECIES_SHARDS,
} from "@/config/poly-species";

export function PolySpeciesPreview() {
  const form = POLY_SPECIES_FORMS[0];
  const appearance = form.theme.dark;

  return (
    <div
      className="poly-species-preview"
      style={{ background: appearance.background }}
    >
      <div className="poly-species-preview__body">
        {POLY_SPECIES_SHARDS[0].map((shard, index) => (
          <i
            key={index}
            style={{
              background: appearance.palette[shard.tone],
              clipPath: shard.clipPath,
            }}
          />
        ))}
      </div>
      <span>30 / DOM SHARDS</span>
    </div>
  );
}
