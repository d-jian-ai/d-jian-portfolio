"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import type { NAVIGATION_COPY } from "@/config/site";
import type { Locale } from "@/i18n/types";
import type { ColorTheme } from "@/types/theme";
import type { LocaleOption, NavigationLink } from "./types";

type NavigationCopy = (typeof NAVIGATION_COPY)[Locale];

type MobileMenuBarProps = {
  copy: NavigationCopy;
  menuTrigger: RefObject<HTMLButtonElement | null>;
  onToggle: () => void;
  open: boolean;
};

type MobileDrawerProps = {
  closeButton: RefObject<HTMLButtonElement | null>;
  copy: NavigationCopy;
  drawerPanel: RefObject<HTMLElement | null>;
  languageLabel: string;
  links: NavigationLink[];
  locale: Locale;
  locales: ReadonlyArray<LocaleOption>;
  onClose: (restoreFocus?: boolean) => void;
  onLocaleSelect: (locale: Locale) => void;
  onThemeToggle: () => void;
  open: boolean;
  theme: ColorTheme;
  themeLabel: string;
};

export function MobileMenuBar({
  copy,
  menuTrigger,
  onToggle,
  open,
}: MobileMenuBarProps) {
  return (
    <div className="mobile-nav-bar">
      <button
        aria-controls="mobile-navigation-drawer"
        aria-expanded={open}
        aria-label={open ? copy.close : copy.menu}
        className="mobile-menu-trigger"
        onClick={onToggle}
        ref={menuTrigger}
        type="button"
      >
        {open ? (
          <X aria-hidden="true" size={21} strokeWidth={1.6} />
        ) : (
          <Menu aria-hidden="true" size={21} strokeWidth={1.6} />
        )}
      </button>
    </div>
  );
}

export function MobileDrawer({
  closeButton,
  copy,
  drawerPanel,
  languageLabel,
  links,
  locale,
  locales,
  onClose,
  onLocaleSelect,
  onThemeToggle,
  open,
  theme,
  themeLabel,
}: MobileDrawerProps) {
  return (
    <div
      aria-hidden={!open}
      className={open ? "mobile-drawer is-open" : "mobile-drawer"}
      id="mobile-navigation-drawer"
    >
      <button
        aria-label={copy.close}
        className="mobile-drawer-backdrop"
        onClick={() => onClose(true)}
        tabIndex={open ? 0 : -1}
        type="button"
      />

      <aside
        aria-modal={open || undefined}
        className="mobile-drawer-panel"
        ref={drawerPanel}
        role="dialog"
      >
        <div className="mobile-drawer-header">
          <span>{copy.navigation}</span>
          <button
            aria-label={copy.close}
            className="mobile-drawer-close"
            onClick={() => onClose(true)}
            ref={closeButton}
            tabIndex={open ? 0 : -1}
            type="button"
          >
            <X aria-hidden="true" size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav aria-label={copy.navigation} className="mobile-drawer-links">
          {links.map((link) => (
            <Link
              aria-current={link.active ? "page" : undefined}
              className={link.active ? "mobile-drawer-link active" : "mobile-drawer-link"}
              href={link.href}
              key={link.href}
              onClick={() => onClose()}
              tabIndex={open ? 0 : -1}
            >
              <sup>{link.code}</sup>
              <span>{link.label}</span>
              <ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.3} />
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer-utilities">
          <div className="mobile-utility-block">
            <span className="mobile-utility-label">{copy.language}</span>
            <div aria-label={languageLabel} className="mobile-locale-switch" role="group">
              {locales.map((item) => (
                <button
                  aria-pressed={locale === item.value}
                  className={
                    locale === item.value
                      ? "mobile-locale-option active"
                      : "mobile-locale-option"
                  }
                  key={item.value}
                  onClick={() => onLocaleSelect(item.value)}
                  tabIndex={open ? 0 : -1}
                  type="button"
                >
                  {item.shortLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="mobile-utility-block">
            <span className="mobile-utility-label">{copy.appearance}</span>
            <button
              aria-label={themeLabel}
              aria-pressed={theme === "light"}
              className="mobile-theme-toggle"
              onClick={onThemeToggle}
              tabIndex={open ? 0 : -1}
              type="button"
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" size={18} strokeWidth={1.6} />
              ) : (
                <Moon aria-hidden="true" size={18} strokeWidth={1.6} />
              )}
              <span>{theme === "dark" ? copy.light : copy.dark}</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
