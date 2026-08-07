"use client";

import type { ReactNode } from "react";
import { ExperienceEffects } from "@/components/experience-effects";
import { SiteLoader } from "@/components/loading/site-loader";
import { SiteNav } from "@/components/navigation/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LanguageProvider } from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <SiteLoader />
        <div className="site-shell">
          <SmoothScroll />
          <ExperienceEffects />
          <SiteNav />
          <main id="main-content">{children}</main>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
