"use client";

import type { ReactNode } from "react";
import { ExperienceEffects } from "@/components/experience-effects";
import { LoadingGate } from "@/components/loading-gate";
import { SiteNav } from "@/components/navigation/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LanguageProvider } from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="site-shell">
          <SmoothScroll />
          <ExperienceEffects />
          <SiteNav />
          <main id="main-content">{children}</main>
          <LoadingGate />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
