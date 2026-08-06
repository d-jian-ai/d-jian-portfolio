"use client";

import { Globe2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ExperienceEffects } from "@/components/experience-effects";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { LoadingGate } from "@/components/loading-gate";
import { WeatherProvider, useWeather } from "@/components/weather-provider";
import type { Locale } from "@/data/work";

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
      <ExperienceEffects />
      <SiteNav />
      <main id="main-content">{children}</main>
      <LoadingGate />
    </div>
  );
}

function SiteNav() {
  const pathname = usePathname();
  const { locale, dictionary, setLocale } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const links = [
    { href: "/", label: dictionary.nav.home, code: "01" },
    { href: "/work", label: dictionary.nav.work, code: "02" },
    { href: "/space", label: dictionary.nav.space, code: "03" },
  ];
  const locales: Array<{ value: Locale; label: string }> = [
    { value: "zh", label: "中" },
    { value: "en", label: "EN" },
    { value: "fr", label: "FR" },
  ];

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setHidden(false);

    function handleScroll() {
      if (animationFrame.current !== null) return;

      animationFrame.current = window.requestAnimationFrame(() => {
        const nextScrollY = Math.max(0, window.scrollY);
        const delta = nextScrollY - lastScrollY.current;

        if (nextScrollY <= 40) {
          setHidden(false);
        } else if (delta > 8 && nextScrollY > 120) {
          setHidden(true);
        } else if (delta < -6) {
          setHidden(false);
        }

        lastScrollY.current = nextScrollY;
        animationFrame.current = null;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [pathname]);

  return (
    <header
      className={hidden ? "site-nav is-hidden" : "site-nav"}
      onFocusCapture={() => setHidden(false)}
    >
      <Link className="brand-mark" href="/" aria-label="CREER home">
        <span className="brand-symbol" aria-hidden="true" />
        <span>CREER</span>
      </Link>
      <nav aria-label="Primary navigation" className="nav-links">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              className={`${active ? "nav-link active" : "nav-link"}${
                link.href === "/" ? " nav-home-link" : ""
              }`}
              href={link.href}
              key={link.href}
            >
              <span>{link.label}</span>
              <sup>{link.code}</sup>
            </Link>
          );
        })}
      </nav>
      <div className="locale-switcher" aria-label="Language">
        <Globe2 aria-hidden="true" size={14} strokeWidth={1.5} />
        {locales.map((item) => (
          <button
            aria-pressed={locale === item.value}
            className={locale === item.value ? "active" : ""}
            key={item.value}
            onClick={() => setLocale(item.value)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

function Atmosphere() {
  const { mood } = useWeather();
  const particleCount = mood === "rain" ? 42 : mood === "snow" ? 30 : 18;

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
