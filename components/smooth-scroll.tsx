"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";

type ScrollLockEvent = CustomEvent<{ locked: boolean }>;

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const desktopPointer = window.matchMedia(
      `(min-width: ${SITE_CONFIG.breakpoints.mobile + 1}px) and (pointer: fine)`,
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (pathname.startsWith("/space")) return;

    let lenis: Lenis | null = null;
    let scrollLocked = false;

    function syncEngine() {
      const shouldRun = desktopPointer.matches && !reducedMotion.matches;

      if (shouldRun && !lenis) {
        lenis = new Lenis({
          anchors: { duration: 1.05 },
          autoRaf: true,
          lerp: 0.075,
          smoothWheel: true,
          stopInertiaOnNavigate: true,
          wheelMultiplier: 0.88,
        });
        if (scrollLocked) lenis.stop();
      } else if (!shouldRun && lenis) {
        lenis.destroy();
        lenis = null;
      }
    }

    function handleScrollLock(event: Event) {
      scrollLocked = (event as ScrollLockEvent).detail.locked;
      if (scrollLocked) {
        lenis?.stop();
      } else {
        lenis?.start();
      }
    }

    syncEngine();
    desktopPointer.addEventListener("change", syncEngine);
    reducedMotion.addEventListener("change", syncEngine);
    window.addEventListener(SITE_CONFIG.events.scrollLock, handleScrollLock);

    return () => {
      desktopPointer.removeEventListener("change", syncEngine);
      reducedMotion.removeEventListener("change", syncEngine);
      window.removeEventListener(SITE_CONFIG.events.scrollLock, handleScrollLock);
      lenis?.destroy();
    };
  }, [pathname]);

  return null;
}
