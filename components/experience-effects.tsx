"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/config/site";
import { isStandaloneSpaceRoute } from "@/config/space";

export function ExperienceEffects() {
  const pathname = usePathname();
  const halo = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const observeReveals = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((node) => observer.observe(node));
    };

    const syncVisibleReveals = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((node) => {
          const bounds = node.getBoundingClientRect();
          if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
            node.classList.add("is-visible");
            observer.unobserve(node);
            return;
          }
          observer.observe(node);
        });
    };

    observeReveals();
    window.addEventListener(
      SITE_CONFIG.events.loaderComplete,
      syncVisibleReveals,
    );

    return () => {
      window.removeEventListener(
        SITE_CONFIG.events.loaderComplete,
        syncVisibleReveals,
      );
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (!halo.current) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        halo.current?.style.setProperty("--cursor-x", `${event.clientX}px`);
        halo.current?.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };
    const onScroll = () => {
      if (!progress.current) return;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? window.scrollY / height : 0;
      progress.current.style.transform = `scaleX(${ratio})`;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (isStandaloneSpaceRoute(pathname)) return null;

  return (
    <>
      <div className="cursor-halo" ref={halo} aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progress} />
      </div>
    </>
  );
}
