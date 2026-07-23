"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ExperienceEffects() {
  const pathname = usePathname();
  const halo = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
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
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
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

  return (
    <>
      <div className="cursor-halo" ref={halo} aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progress} />
      </div>
    </>
  );
}
