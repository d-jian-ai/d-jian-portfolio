"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    title: "数字街区",
    summary: "十二组经过镂空与错位处理的圆角体素建筑，组成一个可以旋转、查看并继续搭建的数字街区原型。",
    status: "可交互原型",
    previewLabel: "数字街区立方体预览，悬停或点击使立方体倒下",
  },
  en: {
    category: "Voxel space / Web interaction",
    title: "Taikoo Li Digital District",
    summary: "Twelve rounded voxel buildings, carved and offset into an explorable digital district that can still be inspected and extended.",
    status: "Interactive prototype",
    previewLabel: "Digital District cube preview. Hover or click to lay it down.",
  },
  fr: {
    category: "Espace voxel / Interaction web",
    title: "Quartier numérique Taikoo Li",
    summary: "Douze bâtiments en voxels arrondis, évidés et décalés, composent un quartier numérique à observer, faire tourner et prolonger.",
    status: "Prototype interactif",
    previewLabel: "Aperçu du cube Quartier numérique. Survoler ou cliquer pour le coucher.",
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
          <div className="space-experiment-preview space-voxel-preview">
            <VoxelDistrictCubePreview label={voxelCopy.previewLabel} />
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

function VoxelDistrictCubePreview({ label }: { label: string }) {
  const [resting, setResting] = useState(false);
  const hoverTimer = useRef<number | null>(null);
  const riseTimer = useRef<number | null>(null);

  function clearHoverTimer() {
    if (hoverTimer.current === null) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }

  function clearRiseTimer() {
    if (riseTimer.current === null) return;
    window.clearTimeout(riseTimer.current);
    riseTimer.current = null;
  }

  function beginHover() {
    clearRiseTimer();
    clearHoverTimer();
    hoverTimer.current = window.setTimeout(() => {
      setResting(true);
      hoverTimer.current = null;
    }, 80);
  }

  function scheduleRise() {
    clearHoverTimer();
    clearRiseTimer();
    riseTimer.current = window.setTimeout(() => {
      setResting(false);
      riseTimer.current = null;
    }, 5000);
  }

  useEffect(() => () => {
    clearHoverTimer();
    clearRiseTimer();
  }, []);

  return (
    <button
      aria-label={label}
      aria-pressed={resting}
      className="voxel-cube-stage"
      data-resting={resting}
      onBlur={scheduleRise}
      onClick={() => {
        clearHoverTimer();
        clearRiseTimer();
        setResting((value) => !value);
      }}
      onFocus={beginHover}
      onPointerEnter={beginHover}
      onPointerLeave={scheduleRise}
      type="button"
    >
      <span className="voxel-cube-aura" />
      <span className="voxel-cube-shadow" />
      <span className="voxel-cube-motion">
        <span className="voxel-cube-spin">
          <i className="voxel-cube-face voxel-cube-front" />
          <i className="voxel-cube-face voxel-cube-back" />
          <i className="voxel-cube-face voxel-cube-right" />
          <i className="voxel-cube-face voxel-cube-left" />
          <i className="voxel-cube-face voxel-cube-top" />
          <i className="voxel-cube-face voxel-cube-bottom" />
        </span>
      </span>
      <span className="voxel-cube-hint">HOVER / CLICK</span>
    </button>
  );
}
