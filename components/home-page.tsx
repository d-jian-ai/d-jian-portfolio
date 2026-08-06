"use client";

import {
  ArrowDown,
  ArrowUpRight,
  MoveDown,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { HeroMaterialScene } from "@/components/hero-material-scene";
import { ProjectVisual } from "@/components/project-visual";
import { typeLabels, works } from "@/data/work";
import { useLanguage } from "@/providers/language-provider";

export function HomePage() {
  const { locale, dictionary } = useLanguage();
  const featuredWorks = works.filter((work) => work.featured);

  return (
    <>
      <section className="home-hero">
        <div className="hero-scene" aria-hidden="true">
          <HeroMaterialScene />
        </div>

        <div className="hero-interface">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">{dictionary.home.kicker}</p>
            <h1>
              {dictionary.home.title}
              <sup>©26</sup>
            </h1>
            <p className="hero-lead">{dictionary.home.lead}</p>
            <div className="hero-actions">
              <Link className="primary-action magnetic-action" href="/work">
                {dictionary.home.explore}
                <ArrowDown aria-hidden="true" size={17} />
              </Link>
              <Link className="ghost-action magnetic-action" href="/space">
                <Sparkles aria-hidden="true" size={16} />
                {dictionary.home.playground}
              </Link>
            </div>
          </div>

          <div className="hero-meta" data-reveal>
            <p>43.2965° N</p>
            <p>05.3698° E</p>
            <span>LOCAL / DIGITAL</span>
          </div>

          <a className="scroll-cue" href="#practice" aria-label={dictionary.home.scroll}>
            <span>{dictionary.home.scroll}</span>
            <MoveDown aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <section className="practice-section section-frame" id="practice">
        <div className="practice-index" data-reveal>
          <span>00</span>
          <span>POSITION</span>
        </div>
        <div className="practice-copy">
          <p className="section-kicker" data-reveal>
            {dictionary.home.recent}
          </p>
          <h2 data-reveal>{dictionary.home.practice}</h2>
          <p className="practice-lead" data-reveal>
            {dictionary.home.practiceLead}
          </p>
        </div>
        <div className="practice-orbit" aria-hidden="true" data-reveal>
          <span className="orbit-copy">DESIGN · CODE · MOTION · SPACE · </span>
          <span className="orbit-core">+</span>
        </div>
      </section>

      <section className="manifesto-section section-frame">
        <p className="manifesto-number" data-reveal>
          01
        </p>
        <blockquote data-reveal>{dictionary.home.quote}</blockquote>
        <p className="manifesto-copy" data-reveal>
          {dictionary.home.manifesto}
        </p>
      </section>

      <section className="selected-section">
        <header className="selected-header section-frame" data-reveal>
          <div>
            <p className="section-kicker">{dictionary.home.selected}</p>
            <h2>{dictionary.home.featured}</h2>
          </div>
          <Link className="text-action" href="/work">
            {dictionary.home.archive}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </header>

        <div className="featured-list">
          {featuredWorks.map((work, index) => (
            <article className="featured-project section-frame" key={work.slug}>
              <Link
                aria-label={`${dictionary.work.open}: ${work.title[locale]}`}
                className="featured-visual-link"
                href={`/work/${work.slug}`}
                data-reveal
              >
                <ProjectVisual
                  label={work.title[locale]}
                  slug={work.slug}
                />
              </Link>
              <div className="featured-copy" data-reveal>
                <div className="featured-meta">
                  <span>{work.index}</span>
                  <span>
                    {typeLabels[work.type][locale]} / {work.year}
                  </span>
                </div>
                <h3>{work.title[locale]}</h3>
                <p>{work.summary[locale]}</p>
                <Link className="project-open" href={`/work/${work.slug}`}>
                  {dictionary.work.open}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
                <span className="featured-sequence">0{index + 1} / 03</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-section" aria-label={dictionary.home.practice}>
        <div className="capability-track">
          {[...dictionary.home.capabilities, ...dictionary.home.capabilities].map(
            (capability, index) => (
              <span key={`${capability}-${index}`}>
                {capability}
                <i aria-hidden="true">✦</i>
              </span>
            ),
          )}
        </div>
      </section>

      <section className="contact-section section-frame">
        <p className="section-kicker" data-reveal>
          {dictionary.home.contactKicker}
        </p>
        <h2 data-reveal>{dictionary.home.contactTitle}</h2>
        <div className="contact-bottom" data-reveal>
          <p>{dictionary.home.contactLead}</p>
        </div>
      </section>
    </>
  );
}
