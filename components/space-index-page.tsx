"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ExperimentalParticleField } from "@/components/experimental-particle-field";
import { PolySpeciesPreview } from "@/components/poly-species/poly-species-preview";
import {
  SPACE_EXPERIMENTS,
  type SpacePreviewKind,
} from "@/config/space";
import { useLanguage } from "@/providers/language-provider";

const VOXEL_EXPERIMENT_COPY = {
  zh: {
    category: "体素空间 / 网页交互",
    title: "太古里数字街区",
    summary: "十二组经过镂空与错位处理的圆角体素建筑，组成一个可以旋转、查看并继续搭建的数字街区原型。",
    status: "可交互原型",
  },
  en: {
    category: "Voxel space / Web interaction",
    title: "Taikoo Li Digital District",
    summary: "Twelve rounded voxel buildings, carved and offset into an explorable digital district that can still be inspected and extended.",
    status: "Interactive prototype",
  },
  fr: {
    category: "Espace voxel / Interaction web",
    title: "Quartier numérique Taikoo Li",
    summary: "Douze bâtiments en voxels arrondis, évidés et décalés, composent un quartier numérique à observer, faire tourner et prolonger.",
    status: "Prototype interactif",
  },
} as const;

export function SpaceIndexPage() {
  const { dictionary, locale } = useLanguage();
  const copy = dictionary.space;
  const voxelCopy = VOXEL_EXPERIMENT_COPY[locale];

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
            {copy.collectionLabel} / {(SPACE_EXPERIMENTS.length + 1)
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

        <article className="space-experiment-item" key="taikoo-li-voxel-district">
          <div className="space-experiment-preview space-voxel-preview" aria-hidden="true">
            <Image
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 70vw"
              src="/images/taikoo-li/digital-district-voxel-completed.png"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="space-preview-grid" />
            <span className="space-preview-code">03</span>
          </div>

          <div className="space-experiment-copy" data-reveal>
            <div className="space-experiment-meta">
              <span>03</span>
              <span>{voxelCopy.category}</span>
              <span>2023</span>
            </div>
            <h2>{voxelCopy.title}</h2>
            <p>{voxelCopy.summary}</p>
            <div className="space-experiment-footer">
              <span className="space-experiment-status">
                <i aria-hidden="true" />
                {voxelCopy.status}
              </span>
              <Link
                className="space-experiment-link"
                href="/work/taikoo-li-digital-district/editor"
              >
                {copy.open}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ExperimentPreview({ kind }: { kind: SpacePreviewKind }) {
  switch (kind) {
    case "particle-field":
      return <ExperimentalParticleField chapter={0} />;
    case "poly-species":
      return <PolySpeciesPreview />;
  }
}
