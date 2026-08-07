"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ProjectVisual } from "@/components/project-visual";
import type { Work } from "@/data/work";
import type { Locale } from "@/i18n/types";

export function FloatingWorkGallery({
  locale,
  openLabel,
  works,
}: {
  locale: Locale;
  openLabel: string;
  works: Work[];
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const render = () => {
      frame = 0;
      if (!root.current) return;
      const bounds = root.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - bounds.top) / (bounds.height + window.innerHeight)),
      );
      root.current.style.setProperty("--gallery-x", pointerX.toFixed(4));
      root.current.style.setProperty("--gallery-y", pointerY.toFixed(4));
      root.current.style.setProperty("--gallery-scroll", progress.toFixed(4));
    };

    const requestRender = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / Math.max(1, window.innerWidth) - 0.5;
      pointerY = event.clientY / Math.max(1, window.innerHeight) - 0.5;
      requestRender();
    };

    render();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    window.addEventListener("scroll", requestRender, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", requestRender);
      window.removeEventListener("scroll", requestRender);
    };
  }, []);

  return (
    <div className="floating-work-gallery" ref={root}>
      {works.map((work, index) => (
        <Link
          aria-label={`${openLabel}: ${work.title[locale]}`}
          className={`floating-work-plane floating-work-plane--${index + 1}`}
          href={`/work/${work.slug}`}
          key={work.slug}
        >
          <ProjectVisual label={work.title[locale]} slug={work.slug} />
          <span className="floating-work-plane__meta">
            <span>{work.index}</span>
            <span>{work.year}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
