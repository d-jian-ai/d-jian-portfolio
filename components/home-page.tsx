"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { useWeather } from "@/components/weather-provider";
import { typeLabels, works } from "@/data/work";

export function HomePage() {
  const { locale, dictionary } = useLanguage();
  const { mood } = useWeather();
  const featuredWorks = works.filter((work) => work.featured);

  return (
    <>
      <section className="home-hero section-band">
        <div className="hero-media" aria-hidden="true">
          <Image
            alt=""
            className="hero-image"
            fill
            priority
            sizes="100vw"
            src="/images/forest-entry.png"
          />
          <div className="hero-weather-wash" />
        </div>
        <div className="hero-content page-grid">
          <div className="hero-copy">
            <p className="eyebrow">{dictionary.home.kicker}</p>
            <h1>{dictionary.home.title}</h1>
            <p className="hero-lead">{dictionary.home.lead}</p>
          </div>
          <div className="hero-panel">
            <p>{dictionary.home.manifesto}</p>
            <div className="mood-readout" aria-label={`Current mood ${mood}`}>
              <span />
              {mood.toUpperCase()}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band intro-band">
        <div className="page-grid intro-grid">
          <div>
            <p className="section-kicker">{dictionary.home.selected}</p>
            <h2>{dictionary.home.featured}</h2>
          </div>
          <Link className="text-link" href="/work">
            {dictionary.home.archive}
          </Link>
        </div>
        <div className="work-strip">
          {featuredWorks.map((work) => (
            <Link
              className={`feature-tile accent-${work.accent}`}
              href={`/work/${work.slug}`}
              key={work.slug}
            >
              <span className="tile-visual" />
              <span className="tile-meta">
                {typeLabels[work.type][locale]} / {work.year}
              </span>
              <strong>{work.title[locale]}</strong>
              <span>{work.summary[locale]}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-band notes-band">
        <div className="page-grid notes-grid">
          <p className="section-kicker">{dictionary.home.recent}</p>
          <blockquote>
            {locale === "zh"
              ? "先让观看变得轻，然后让作品自己靠近。"
              : "Make viewing feel light first, then let the work move closer on its own."}
          </blockquote>
        </div>
      </section>
    </>
  );
}
