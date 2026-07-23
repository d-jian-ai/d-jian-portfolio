"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { ProjectVisual } from "@/components/project-visual";
import { typeLabels, works, type Work } from "@/data/work";

export function WorkDetail({ work }: { work: Work }) {
  const { locale, dictionary } = useLanguage();

  const { previous, next } = useMemo(() => {
    const index = works.findIndex((item) => item.slug === work.slug);
    return {
      previous: works[(index - 1 + works.length) % works.length],
      next: works[(index + 1) % works.length],
    };
  }, [work.slug]);

  return (
    <article className="detail-page">
      <header className="detail-hero section-frame">
        <Link className="back-action" href="/work" data-reveal>
          <ArrowLeft aria-hidden="true" size={16} />
          {dictionary.work.back}
        </Link>
        <div className="detail-title-row">
          <p className="detail-index" data-reveal>
            PROJECT / {work.index}
          </p>
          <h1 data-reveal>{work.title[locale]}</h1>
        </div>
        <div className="detail-intro" data-reveal>
          <p>
            {typeLabels[work.type][locale]} / {work.year}
          </p>
          <p>{work.summary[locale]}</p>
        </div>
      </header>

      <div className="detail-art section-frame" data-reveal>
        <ProjectVisual label={work.title[locale]} slug={work.slug} />
      </div>

      <section className="detail-story section-frame">
        <aside data-reveal>
          <p className="section-kicker">{dictionary.work.role}</p>
          <p>{work.role[locale]}</p>
          <div className="tag-list">
            {work.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>
        <div className="detail-narrative" data-reveal>
          <p className="section-kicker">{dictionary.work.process}</p>
          <p>{work.body[locale]}</p>
          <ol className="process-list">
            {dictionary.work.processSteps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <nav className="detail-nav section-frame" aria-label="Project navigation">
        <Link href={`/work/${previous.slug}`}>
          <ArrowLeft aria-hidden="true" size={18} />
          <span>
            <small>{dictionary.work.previous}</small>
            {previous.title[locale]}
          </span>
        </Link>
        <Link href={`/work/${next.slug}`}>
          <span>
            <small>{dictionary.work.next}</small>
            {next.title[locale]}
          </span>
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </nav>
    </article>
  );
}
