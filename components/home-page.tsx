"use client";

import { HeroVeilField } from "@/components/home/hero-veil-field";
import { useLanguage } from "@/providers/language-provider";

export function HomePage() {
  const { dictionary } = useLanguage();

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

      </section>
    </main>
  );
}
