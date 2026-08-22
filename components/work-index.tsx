"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectVisual } from "@/components/project-visual";
import { typeLabels, works, type WorkType } from "@/data/work";
import { useLanguage } from "@/providers/language-provider";

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
    <section className="archive-page">
      <header className="archive-hero section-frame">
        <p className="archive-index" data-reveal>
          INDEX / {works.length.toString().padStart(2, "0")}
        </p>
        <h1 data-reveal>{dictionary.work.title}</h1>
        <p className="archive-lead" data-reveal>
          {dictionary.work.lead}
        </p>
      </header>

      <div className="archive-toolbar section-frame" data-reveal>
        <div className="filter-bar" aria-label="Work filters">
          {filters.map((item) => {
            const label =
              item === "all" ? dictionary.work.all : typeLabels[item][locale];
            return (
              <button
                aria-pressed={filter === item}
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
        <span>
          {filteredWorks.length.toString().padStart(2, "0")} / {works.length.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="archive-list">
        {filteredWorks.map((work) => (
          <Link
            className="archive-entry section-frame"
            href={`/work/${work.slug}`}
            key={work.slug}
          >
            <div className="archive-entry-meta" data-reveal>
              <span>{work.index}</span>
              <span>
                {typeLabels[work.type][locale]} / {work.year}
              </span>
            </div>
            <ProjectVisual
              className="archive-entry-visual"
              label={work.title[locale]}
              slug={work.slug}
            />
            <div className="archive-entry-copy" data-reveal>
              <h2>{work.title[locale]}</h2>
              <p>{work.summary[locale]}</p>
              <span className="project-open">
                {dictionary.work.open}
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
