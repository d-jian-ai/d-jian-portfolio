"use client";

import { Check, Globe2, Moon, Sun } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import type { Locale } from "@/i18n/types";
import type { ColorTheme } from "@/types/theme";
import type { LocaleOption, NavigationLink } from "./types";

type DesktopNavigationProps = {
  languageLabel: string;
  links: NavigationLink[];
  locale: Locale;
  localeControl: RefObject<HTMLDivElement | null>;
  localeOpen: boolean;
  locales: ReadonlyArray<LocaleOption>;
  onLocaleOpenChange: (open: boolean) => void;
  onLocaleSelect: (locale: Locale) => void;
  onThemeToggle: () => void;
  theme: ColorTheme;
  themeLabel: string;
};

export function DesktopNavigation({
  languageLabel,
  links,
  locale,
  localeControl,
  localeOpen,
  locales,
  onLocaleOpenChange,
  onLocaleSelect,
  onThemeToggle,
  theme,
  themeLabel,
}: DesktopNavigationProps) {
  return (
    <div className="desktop-nav-shell">
      <nav aria-label="Primary navigation" className="nav-links">
        {links.map((link) => (
          <Link
            aria-current={link.active ? "page" : undefined}
            className={link.active ? "nav-link active" : "nav-link"}
            href={link.href}
            key={link.href}
          >
            <span>{link.label}</span>
            <sup>{link.code}</sup>
          </Link>
        ))}
      </nav>

      <div className="nav-utilities">
        <button
          aria-label={themeLabel}
          aria-pressed={theme === "light"}
          className="nav-icon-button theme-trigger"
          onClick={onThemeToggle}
          title={themeLabel}
          type="button"
        >
          {theme === "dark" ? (
            <Sun aria-hidden="true" size={20} strokeWidth={1.6} />
          ) : (
            <Moon aria-hidden="true" size={20} strokeWidth={1.6} />
          )}
        </button>

        <div className="locale-control" ref={localeControl}>
          <button
            aria-expanded={localeOpen}
            aria-haspopup="menu"
            aria-label={languageLabel}
            className="nav-icon-button locale-trigger"
            onClick={() => onLocaleOpenChange(!localeOpen)}
            title={languageLabel}
            type="button"
          >
            <Globe2 aria-hidden="true" size={20} strokeWidth={1.6} />
            <span aria-hidden="true" className="locale-badge">
              {locale === "zh" ? "中" : locale.toUpperCase()}
            </span>
          </button>

          <div
            aria-label={languageLabel}
            className={localeOpen ? "locale-menu is-open" : "locale-menu"}
            role="menu"
          >
            {locales.map((item) => (
              <button
                aria-checked={locale === item.value}
                className={locale === item.value ? "locale-option active" : "locale-option"}
                key={item.value}
                onClick={() => onLocaleSelect(item.value)}
                role="menuitemradio"
                type="button"
              >
                <span className="locale-option-code">{item.shortLabel}</span>
                <span>{item.label}</span>
                <Check aria-hidden="true" size={15} strokeWidth={1.8} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
