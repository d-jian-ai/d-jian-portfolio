"use client";

import { useEffect, useState } from "react";
import { LOADING_CONFIG, LOADING_COPY } from "@/config/loading";
import { SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/providers/language-provider";

type LoaderPhase = "entering" | "exiting" | "hidden";

export function SiteLoader() {
  const { locale } = useLanguage();
  const [phase, setPhase] = useState<LoaderPhase>("entering");
  const [progress, setProgress] = useState(0);
  const copy = LOADING_COPY[locale];

  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".site-shell");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minimumDuration = reducedMotion
      ? LOADING_CONFIG.reducedMotionDuration
      : LOADING_CONFIG.minimumDuration;
    const startedAt = performance.now();
    let animationFrame = 0;
    let exitTimer = 0;
    let hideTimer = 0;
    let released = false;
    let lastProgress = -1;

    document.body.classList.add("site-loading");
    shell?.setAttribute("inert", "");
    window.dispatchEvent(
      new CustomEvent(SITE_CONFIG.events.scrollLock, {
        detail: { locked: true },
      }),
    );

    function animateProgress(now: number) {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(
        92,
        Math.floor((1 - Math.exp(-elapsed / 720)) * 96),
      );
      if (nextProgress !== lastProgress) {
        lastProgress = nextProgress;
        setProgress(nextProgress);
      }
      animationFrame = window.requestAnimationFrame(animateProgress);
    }

    function releasePage() {
      if (released) return;
      released = true;
      document.body.classList.remove("site-loading");
      shell?.removeAttribute("inert");
      window.dispatchEvent(
        new CustomEvent(SITE_CONFIG.events.scrollLock, {
          detail: { locked: false },
        }),
      );
      window.dispatchEvent(new Event(SITE_CONFIG.events.loaderComplete));
    }

    animationFrame = window.requestAnimationFrame(animateProgress);

    const ready = Promise.all([
      delay(minimumDuration),
      waitForWindowLoad(),
      waitForFonts(),
      waitForHomepageVisual(),
    ]);

    Promise.race([ready, delay(LOADING_CONFIG.maximumWait)]).then(() => {
      window.cancelAnimationFrame(animationFrame);
      setProgress(100);
      exitTimer = window.setTimeout(
        () => setPhase("exiting"),
        reducedMotion ? 0 : LOADING_CONFIG.exitDelay,
      );
      hideTimer = window.setTimeout(
        () => {
          releasePage();
          setPhase("hidden");
        },
        reducedMotion
          ? LOADING_CONFIG.reducedMotionDuration
          : LOADING_CONFIG.exitDelay + LOADING_CONFIG.exitDuration,
      );
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      releasePage();
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-label={copy.label}
      aria-live="polite"
      className={`site-loader is-${phase}`}
      role="status"
    >
      <div className="site-loader__threads" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="site-loader__top" aria-hidden="true">
        <span>CREER / 26</span>
        <span>43.2965° N / 05.3698° E</span>
      </div>

      <div className="site-loader__mark" aria-hidden="true">
        <span>CREER</span>
        <sup>©26</sup>
      </div>

      <div className="site-loader__bottom">
        <p>
          <i aria-hidden="true" />
          {copy.status}
        </p>
        <output aria-label={`${progress}%`}>{String(progress).padStart(3, "0")}</output>
      </div>

      <div className="site-loader__signal" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}

function delay(duration: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, duration));
}

function waitForWindowLoad() {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise<void>((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForFonts() {
  return document.fonts?.ready.then(() => undefined) ?? Promise.resolve();
}

function waitForHomepageVisual() {
  if (window.location.pathname !== "/") return Promise.resolve();
  if (document.documentElement.dataset.visualReady === "true") {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    let settled = false;
    const complete = () => {
      if (settled) return;
      settled = true;
      window.removeEventListener(SITE_CONFIG.events.visualReady, complete);
      window.clearTimeout(timeout);
      resolve();
    };
    const timeout = window.setTimeout(
      complete,
      LOADING_CONFIG.visualReadyTimeout,
    );
    window.addEventListener(SITE_CONFIG.events.visualReady, complete, {
      once: true,
    });
  });
}
