"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type CSSProperties, type ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { LoadingGate } from "@/components/loading-gate";
import { WeatherProvider, useWeather } from "@/components/weather-provider";

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <WeatherProvider>
        <ChromeInner>{children}</ChromeInner>
      </WeatherProvider>
    </LanguageProvider>
  );
}

function ChromeInner({ children }: { children: ReactNode }) {
  const { mood } = useWeather();

  return (
    <div className={`site-shell weather-${mood}`}>
      <Atmosphere />
      <SiteNav />
      <main id="main-content">{children}</main>
      <LoadingGate />
    </div>
  );
}

function SiteNav() {
  const pathname = usePathname();
  const { locale, dictionary, toggleLocale } = useLanguage();
  const links = [
    { href: "/", label: dictionary.nav.home },
    { href: "/work", label: dictionary.nav.work },
    { href: "/space", label: dictionary.nav.space },
  ];

  return (
    <header className="site-nav">
      <Link className="brand-mark" href="/" aria-label="CREER home">
        CREER
      </Link>
      <nav aria-label="Primary navigation" className="nav-links">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              className={active ? "nav-link active" : "nav-link"}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <button className="locale-button" onClick={toggleLocale} type="button">
        {locale === "zh" ? "EN" : "中文"}
      </button>
    </header>
  );
}

function Atmosphere() {
  const { mood } = useWeather();
  const particleCount = mood === "rain" ? 44 : mood === "snow" ? 34 : 20;

  return (
    <div className={`atmosphere atmosphere-${mood}`} aria-hidden="true">
      <div className="aurora-field" />
      <div className="fog-bank fog-bank-a" />
      <div className="fog-bank fog-bank-b" />
      <div className="particle-field">
        {Array.from({ length: particleCount }).map((_, index) => (
          <span
            className="weather-particle"
            key={index}
            style={
              {
                "--x": `${(index * 37) % 100}%`,
                "--delay": `${(index % 11) * -0.42}s`,
                "--duration": `${6 + (index % 7)}s`,
                "--drift": `${(index % 5) * 18 - 36}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
