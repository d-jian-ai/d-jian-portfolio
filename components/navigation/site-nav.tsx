"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LOCALE_OPTIONS,
  NAVIGATION_COPY,
  NAVIGATION_ITEMS,
  SITE_CONFIG,
} from "@/config/site";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileDrawer, MobileMenuBar } from "./mobile-navigation";
import type { NavigationLink } from "./types";

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteNav() {
  const pathname = usePathname();
  const { dictionary, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const animationFrame = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const localeControl = useRef<HTMLDivElement>(null);
  const mobileCloseButton = useRef<HTMLButtonElement>(null);
  const mobileDrawerPanel = useRef<HTMLElement>(null);
  const mobileMenuTrigger = useRef<HTMLButtonElement>(null);

  const links = useMemo<NavigationLink[]>(
    () =>
      NAVIGATION_ITEMS.map((item) => ({
        active: isActiveRoute(pathname, item.href),
        code: item.code,
        href: item.href,
        label: dictionary.nav[item.labelKey],
      })),
    [dictionary.nav, pathname],
  );
  const activeLink = links.find((link) => link.active) ?? links[0];
  const copy = NAVIGATION_COPY[locale];
  const themeLabel = theme === "dark" ? copy.themeToLight : copy.themeToDark;

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setHidden(false);

    function handleScroll() {
      if (animationFrame.current !== null) return;

      animationFrame.current = window.requestAnimationFrame(() => {
        const nextScrollY = Math.max(0, window.scrollY);
        const delta = nextScrollY - lastScrollY.current;

        if (nextScrollY <= 40) setHidden(false);
        else if (delta > 8 && nextScrollY > 120) setHidden(true);
        else if (delta < -6) setHidden(false);

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

  useEffect(() => {
    setLocaleOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileOpen);
    const pageContent = document.getElementById("main-content");
    pageContent?.toggleAttribute("inert", mobileOpen);
    window.dispatchEvent(
      new CustomEvent(SITE_CONFIG.events.scrollLock, {
        detail: { locked: mobileOpen },
      }),
    );

    if (!mobileOpen) return;

    const focusFrame = window.requestAnimationFrame(() => {
      mobileCloseButton.current?.focus();
    });

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileNav(true);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = mobileDrawerPanel.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]):not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("mobile-nav-open");
      pageContent?.removeAttribute("inert");
      window.dispatchEvent(
        new CustomEvent(SITE_CONFIG.events.scrollLock, {
          detail: { locked: false },
        }),
      );
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!localeOpen) return;

    function handlePointerDown(event: globalThis.PointerEvent) {
      if (!localeControl.current?.contains(event.target as Node)) setLocaleOpen(false);
    }
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setLocaleOpen(false);
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [localeOpen]);

  function closeMobileNav(restoreFocus = false) {
    setMobileOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => mobileMenuTrigger.current?.focus());
    }
  }

  function selectLocale(nextLocale: Parameters<typeof setLocale>[0]) {
    setLocale(nextLocale);
    setLocaleOpen(false);
  }

  return (
    <>
      <header
        className={`${hidden && !mobileOpen ? "site-nav is-hidden" : "site-nav"}${
          mobileOpen ? " has-open-drawer" : ""
        }`}
        onFocusCapture={() => setHidden(false)}
      >
        <DesktopNavigation
          languageLabel={copy.language}
          links={links}
          locale={locale}
          localeControl={localeControl}
          localeOpen={localeOpen}
          locales={LOCALE_OPTIONS}
          onLocaleOpenChange={setLocaleOpen}
          onLocaleSelect={selectLocale}
          onThemeToggle={toggleTheme}
          theme={theme}
          themeLabel={themeLabel}
        />
        <MobileMenuBar
          activeLink={activeLink}
          copy={copy}
          menuTrigger={mobileMenuTrigger}
          onToggle={() => setMobileOpen((current) => !current)}
          open={mobileOpen}
        />
      </header>

      <MobileDrawer
        closeButton={mobileCloseButton}
        copy={copy}
        drawerPanel={mobileDrawerPanel}
        languageLabel={copy.language}
        links={links}
        locale={locale}
        locales={LOCALE_OPTIONS}
        onClose={closeMobileNav}
        onLocaleSelect={selectLocale}
        onThemeToggle={toggleTheme}
        open={mobileOpen}
        theme={theme}
        themeLabel={themeLabel}
      />
    </>
  );
}
