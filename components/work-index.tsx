"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { typeLabels, works, type WorkType } from "@/data/work";

type Filter = "all" | WorkType;

export function WorkIndex() {
  const { locale, dictionary } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const filters: Filter[] = ["all", "visual", "web", "video"];

  const filteredWorks = useMemo(
    () => works.filter((work) => filter === "all" || work.type === filter),
    [filter],
  );

  return (
    <section className="section-band archive-page">
      <div className="page-grid archive-header">
        <div>
          <p className="section-kicker">Archive</p>
          <h1>{dictionary.work.title}</h1>
        </div>
        <p>{dictionary.work.lead}</p>
      </div>

      <div className="filter-bar" aria-label="Work filters">
        {filters.map((item) => {
          const label =
            item === "all" ? dictionary.work.all : typeLabels[item][locale];
          return (
            <button
              className={filter === item ? "filter-button active" : "filter-button"}
              key={item}
              onClick={() => setFilter(item)}
              type="button"
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="work-grid">
        {filteredWorks.map((work) => (
          <Link
            className={`work-card accent-${work.accent}`}
            href={`/work/${work.slug}`}
            key={work.slug}
          >
            <span className="work-card-visual" />
            <span className="work-card-type">
              {typeLabels[work.type][locale]} / {work.year}
            </span>
            <strong>{work.title[locale]}</strong>
            <span>{work.summary[locale]}</span>
            <em>{dictionary.work.open}</em>
          </Link>
        ))}
      </div>
    </section>
  );
}
