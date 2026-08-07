"use client";

import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { FloatingWorkGallery } from "@/components/home/floating-work-gallery";
import { HeroVeilField } from "@/components/home/hero-veil-field";
import { ProjectVisual } from "@/components/project-visual";
import { typeLabels, works } from "@/data/work";
import { useLanguage } from "@/providers/language-provider";

export function HomePage() {
  const { locale, dictionary } = useLanguage();
  const featuredWorks = works.filter((work) => work.featured);

  return (
    <main className="home-spatial">
      <div className="home-spatial__scene" aria-hidden="true">
        <HeroVeilField />
      </div>

      <section className="spatial-hero section-frame">
        <div className="spatial-hero__brand" data-reveal>
          <p className="spatial-label">{dictionary.home.kicker}</p>
          <h1>
            {dictionary.home.title}
            <sup>©26</sup>
          </h1>
          <p className="spatial-hero__lead">{dictionary.home.lead}</p>
        </div>

        <div className="spatial-hero__coordinates" data-reveal>
          <span>43.2965° N</span>
          <span>05.3698° E</span>
          <span>MARSEILLE / DIGITAL</span>
        </div>

        <a className="spatial-scroll-cue" href="#selected">
          <span>{dictionary.home.scroll}</span>
          <ArrowDown aria-hidden="true" size={16} />
        </a>
      </section>

      <section className="spatial-work-overview section-frame" id="selected">
        <div className="spatial-work-overview__categories" data-reveal>
          <span>{typeLabels.visual[locale]}</span>
          <span>{typeLabels.web[locale]}</span>
          <span>{typeLabels.video[locale]}</span>
          <span>{dictionary.home.capabilities[2]}</span>
          <span>{dictionary.home.capabilities[3]}</span>
        </div>

        <div className="spatial-work-overview__callout" data-reveal>
          <p>{dictionary.home.selected}</p>
          <Link href="/work">
            <span>{dictionary.home.archive}</span>
            <sup>{String(works.length).padStart(2, "0")}</sup>
            <ArrowUpRight aria-hidden="true" size={28} />
          </Link>
        </div>

        <FloatingWorkGallery
          locale={locale}
          openLabel={dictionary.work.open}
          works={featuredWorks}
        />
      </section>

      <div className="spatial-projects" aria-label={dictionary.home.featured}>
        {featuredWorks.map((work, index) => (
          <section
            className={`spatial-project spatial-project--${index + 1} section-frame`}
            key={work.slug}
          >
            <header className="spatial-project__heading" data-reveal>
              <span>
                {work.index} / {typeLabels[work.type][locale]}
              </span>
              <h2>{work.title[locale]}</h2>
            </header>

            <Link
              aria-label={`${dictionary.work.open}: ${work.title[locale]}`}
              className="spatial-project__visual"
              href={`/work/${work.slug}`}
              data-reveal
            >
              <ProjectVisual label={work.title[locale]} slug={work.slug} />
            </Link>

            <div className="spatial-project__copy" data-reveal>
              <div>
                <span>{work.year}</span>
                <span>{work.role[locale]}</span>
              </div>
              <p>{work.summary[locale]}</p>
              <Link href={`/work/${work.slug}`}>
                {dictionary.work.open}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section className="spatial-about section-frame" id="practice">
        <div className="spatial-about__index" data-reveal>
          <span>02 / POSITION</span>
          <span>DESIGN · CODE · MOTION</span>
        </div>
        <div className="spatial-about__title" data-reveal>
          <p className="spatial-label">{dictionary.home.recent}</p>
          <h2>{dictionary.home.practice}</h2>
        </div>
        <blockquote data-reveal>{dictionary.home.quote}</blockquote>
        <div className="spatial-about__body" data-reveal>
          <p>{dictionary.home.practiceLead}</p>
          <p>{dictionary.home.manifesto}</p>
          <Link href="/space">
            <Sparkles aria-hidden="true" size={17} />
            {dictionary.home.playground}
          </Link>
        </div>
      </section>

      <section className="spatial-contact section-frame">
        <p className="spatial-label" data-reveal>
          {dictionary.home.contactKicker}
        </p>
        <h2 data-reveal>{dictionary.home.contactTitle}</h2>
        <div className="spatial-contact__footer" data-reveal>
          <p>{dictionary.home.contactLead}</p>
          <Link href="/work">
            {dictionary.home.explore}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
