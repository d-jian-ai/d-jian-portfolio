"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

export function ProjectVisual({
  slug,
  label,
  className = "",
}: {
  slug: string;
  label: string;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  function handlePointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    root.current?.style.setProperty("--visual-rx", `${y * -3}deg`);
    root.current?.style.setProperty("--visual-ry", `${x * 3}deg`);
    root.current?.style.setProperty("--visual-shift-x", `${x * 18}px`);
    root.current?.style.setProperty("--visual-shift-y", `${y * 18}px`);
  }

  function resetPointer() {
    root.current?.style.setProperty("--visual-rx", "0deg");
    root.current?.style.setProperty("--visual-ry", "0deg");
    root.current?.style.setProperty("--visual-shift-x", "0px");
    root.current?.style.setProperty("--visual-shift-y", "0px");
  }

  return (
    <div
      aria-label={label}
      className={`project-visual visual-${slug} ${className}`}
      onPointerLeave={resetPointer}
      onPointerMove={handlePointer}
      ref={root}
    role="img"
    >
      {slug === "taikoo-li-digital-district" && (
        <Image
          alt="Completed Taikoo Li voxel district model"
          fill
          priority
          sizes="(max-width: 820px) 100vw, 55vw"
          src="/images/taikoo-li/digital-district-voxel-completed.png"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      )}
      {slug !== "taikoo-li-digital-district" && (
        <>
      <div className="visual-grid" />
      <div className="visual-scan" />
      {slug === "forest-loading-gate" && (
        <>
          <span className="portal-ring ring-one" />
          <span className="portal-ring ring-two" />
          <span className="portal-seed" />
          <span className="forest-line line-one" />
          <span className="forest-line line-two" />
          <span className="forest-line line-three" />
          <span className="visual-coordinate">46.2276° N / 2.2137° E</span>
        </>
      )}
      {slug === "quiet-system" && (
        <>
          <span className="editorial-word">A</span>
          <span className="editorial-rule rule-one" />
          <span className="editorial-rule rule-two" />
          <span className="editorial-copy copy-one" />
          <span className="editorial-copy copy-two" />
          <span className="editorial-index">SYSTEM / 12</span>
        </>
      )}
      {slug === "archive-commerce" && (
        <>
          <span className="archive-object object-one" />
          <span className="archive-object object-two" />
          <span className="archive-object object-three" />
          <span className="archive-label label-one">MAT / 01</span>
          <span className="archive-label label-two">OBJ / 07</span>
          <span className="archive-axis" />
        </>
      )}
      {slug === "motion-notes" && (
        <>
          <span className="motion-frame frame-one" />
          <span className="motion-frame frame-two" />
          <span className="motion-frame frame-three" />
          <span className="motion-playhead" />
          <span className="motion-time">00:14:08</span>
        </>
      )}
        </>
      )}
    </div>
  );
}
