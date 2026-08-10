"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ExperimentalParticleField } from "@/components/experimental-particle-field";
import { PolySpeciesPreview } from "@/components/poly-species/poly-species-preview";
import {
  SPACE_EXPERIMENTS,
  type SpacePreviewKind,
} from "@/config/space";
import { useLanguage } from "@/providers/language-provider";

export function SpaceIndexPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.space;

  return (
    <section className="space-index-page">
      <header className="space-index-hero">
        <div className="space-index-heading" data-reveal>
          <p className="section-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
        </div>
        <div className="space-index-intro" data-reveal>
          <p>{copy.lead}</p>
          <span>
            {copy.collectionLabel} / {SPACE_EXPERIMENTS.length
              .toString()
              .padStart(2, "0")}
          </span>
        </div>
      </header>

      <div className="space-experiment-list">
        {SPACE_EXPERIMENTS.map((experiment) => {
          const content = copy.experiments[experiment.key];

          return (
            <article className="space-experiment-item" key={experiment.slug}>
              <div className="space-experiment-preview" aria-hidden="true">
                <ExperimentPreview kind={experiment.preview} />
                <div className="space-preview-grid" />
                <span className="space-preview-code">{experiment.code}</span>
              </div>

              <div className="space-experiment-copy" data-reveal>
                <div className="space-experiment-meta">
                  <span>{experiment.code}</span>
                  <span>{content.category}</span>
                  <span>{experiment.year}</span>
                </div>
                <h2>{content.title}</h2>
                <p>{content.summary}</p>
                <div className="space-experiment-footer">
                  <span className="space-experiment-status">
                    <i aria-hidden="true" />
                    {content.status}
                  </span>
                  <Link className="space-experiment-link" href={experiment.href}>
                    {copy.open}
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ExperimentPreview({ kind }: { kind: SpacePreviewKind }) {
  switch (kind) {
    case "particle-field":
      return <ExperimentalParticleField chapter={1} variant="preview" />;
    case "poly-species":
      return <PolySpeciesPreview />;
  }
}
