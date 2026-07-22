"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
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
    <article className="section-band detail-page">
      <div className="page-grid detail-hero">
        <div>
          <Link className="text-link back-link" href="/work">
            {dictionary.work.back}
          </Link>
          <p className="section-kicker">
            {typeLabels[work.type][locale]} / {work.year}
          </p>
          <h1>{work.title[locale]}</h1>
        </div>
        <p>{work.summary[locale]}</p>
      </div>

      <div className={`detail-visual accent-${work.accent}`}>
        <span className="detail-mark" />
        <span className="detail-gridline" />
      </div>

      <div className="page-grid detail-body">
        <aside>
          <p>{work.role[locale]}</p>
          <div className="tag-list">
            {work.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>
        <div>
          <p>{work.body[locale]}</p>
        </div>
      </div>

      <nav className="detail-nav" aria-label="Project navigation">
        <Link href={`/work/${previous.slug}`}>{dictionary.work.previous}</Link>
        <Link href={`/work/${next.slug}`}>{dictionary.work.next}</Link>
      </nav>
    </article>
  );
}
