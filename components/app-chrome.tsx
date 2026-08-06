"use client";

import { ArrowUpRight, Check, Globe2, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ExperienceEffects } from "@/components/experience-effects";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { LoadingGate } from "@/components/loading-gate";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Locale } from "@/data/work";

type ColorTheme = "dark" | "light";

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ChromeInner>{children}</ChromeInner>
    </LanguageProvider>
  );
}

function ChromeInner({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SmoothScroll />
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
  const [localeOpen, setLocaleOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<ColorTheme>("dark");
  const lastScrollY = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const localeControl = useRef<HTMLDivElement>(null);
  const mobileDrawerPanel = useRef<HTMLElement>(null);
  const mobileMenuTrigger = useRef<HTMLButtonElement>(null);
  const mobileCloseButton = useRef<HTMLButtonElement>(null);
  const links = [
    { href: "/", label: dictionary.nav.home, code: "01" },
    { href: "/work", label: dictionary.nav.work, code: "02" },
    { href: "/space", label: dictionary.nav.space, code: "03" },
  ];
  const locales: Array<{ value: Locale; label: string; shortLabel: string }> = [
    { value: "zh", label: "中文", shortLabel: "中" },
    { value: "en", label: "English", shortLabel: "EN" },
    { value: "fr", label: "Français", shortLabel: "FR" },
  ];
  const languageLabel = {
    zh: "切换语言",
    en: "Change language",
    fr: "Changer de langue",
  }[locale];
  const themeLabel =
    theme === "dark"
      ? { zh: "切换到浅色模式", en: "Switch to light mode", fr: "Passer au mode clair" }[
          locale
        ]
      : { zh: "切换到深色模式", en: "Switch to dark mode", fr: "Passer au mode sombre" }[
          locale
        ];
  const mobileCopy = {
    zh: {
      menu: "打开菜单",
      close: "关闭菜单",
      navigation: "导航",
      language: "语言",
      appearance: "显示模式",
      light: "浅色",
      dark: "深色",
    },
    en: {
      menu: "Open menu",
      close: "Close menu",
      navigation: "Navigation",
      language: "Language",
      appearance: "Appearance",
      light: "Light",
      dark: "Dark",
    },
    fr: {
      menu: "Ouvrir le menu",
      close: "Fermer le menu",
      navigation: "Navigation",
      language: "Langue",
      appearance: "Apparence",
      light: "Clair",
      dark: "Sombre",
    },
  }[locale];
  const activeLink =
    links.find((link) =>
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href),
    ) ?? links[0];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("creer-theme");
    const nextTheme: ColorTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("creer-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }

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

  useEffect(() => {
    setLocaleOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileOpen);
    const pageContent = document.getElementById("main-content");
    pageContent?.toggleAttribute("inert", mobileOpen);
    window.dispatchEvent(
      new CustomEvent("creer:scroll-lock", { detail: { locked: mobileOpen } }),
    );

    if (!mobileOpen) return;

    const focusFrame = window.requestAnimationFrame(() => {
      mobileCloseButton.current?.focus();
    });

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        window.requestAnimationFrame(() => mobileMenuTrigger.current?.focus());
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
        new CustomEvent("creer:scroll-lock", { detail: { locked: false } }),
      );
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!localeOpen) return;

    function handlePointerDown(event: globalThis.PointerEvent) {
      if (!localeControl.current?.contains(event.target as Node)) {
        setLocaleOpen(false);
      }
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

  const desktopUtilities = (
    <div className="nav-utilities">
      <button
        aria-label={themeLabel}
        aria-pressed={theme === "light"}
        className="nav-icon-button theme-trigger"
        onClick={toggleTheme}
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
          onClick={() => setLocaleOpen((current) => !current)}
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
              onClick={() => {
                setLocale(item.value);
                setLocaleOpen(false);
              }}
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
  );

  return (
    <>
      <header
        className={`${hidden && !mobileOpen ? "site-nav is-hidden" : "site-nav"}${
          mobileOpen ? " has-open-drawer" : ""
        }`}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="desktop-nav-shell">
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
          {desktopUtilities}
        </div>

        <div className="mobile-nav-bar">
          <span className="mobile-current-page">
            <span>{activeLink.code}</span>
            {activeLink.label}
          </span>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? mobileCopy.close : mobileCopy.menu}
            aria-controls="mobile-navigation-drawer"
            className="mobile-menu-trigger"
            onClick={() => setMobileOpen((current) => !current)}
            ref={mobileMenuTrigger}
            type="button"
          >
            {mobileOpen ? (
              <X aria-hidden="true" size={21} strokeWidth={1.6} />
            ) : (
              <Menu aria-hidden="true" size={21} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </header>

      <div
        aria-hidden={!mobileOpen}
        className={mobileOpen ? "mobile-drawer is-open" : "mobile-drawer"}
        id="mobile-navigation-drawer"
      >
        <button
          aria-label={mobileCopy.close}
          className="mobile-drawer-backdrop"
          onClick={() => closeMobileNav(true)}
          tabIndex={mobileOpen ? 0 : -1}
          type="button"
        />
        <aside
          aria-modal={mobileOpen || undefined}
          className="mobile-drawer-panel"
          ref={mobileDrawerPanel}
          role="dialog"
        >
          <div className="mobile-drawer-header">
            <span>{mobileCopy.navigation}</span>
            <button
              aria-label={mobileCopy.close}
              className="mobile-drawer-close"
              onClick={() => closeMobileNav(true)}
              ref={mobileCloseButton}
              tabIndex={mobileOpen ? 0 : -1}
              type="button"
            >
              <X aria-hidden="true" size={22} strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label={mobileCopy.navigation} className="mobile-drawer-links">
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={active ? "mobile-drawer-link active" : "mobile-drawer-link"}
                  href={link.href}
                  key={link.href}
                  onClick={() => closeMobileNav()}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  <sup>{link.code}</sup>
                  <span>{link.label}</span>
                  <ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.3} />
                </Link>
              );
            })}
          </nav>

          <div className="mobile-drawer-utilities">
            <div className="mobile-utility-block">
              <span className="mobile-utility-label">{mobileCopy.language}</span>
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
                    onClick={() => setLocale(item.value)}
                    tabIndex={mobileOpen ? 0 : -1}
                    type="button"
                  >
                    {item.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="mobile-utility-block">
              <span className="mobile-utility-label">{mobileCopy.appearance}</span>
              <button
                aria-label={themeLabel}
                aria-pressed={theme === "light"}
                className="mobile-theme-toggle"
                onClick={toggleTheme}
                tabIndex={mobileOpen ? 0 : -1}
                type="button"
              >
                {theme === "dark" ? (
                  <Sun aria-hidden="true" size={18} strokeWidth={1.6} />
                ) : (
                  <Moon aria-hidden="true" size={18} strokeWidth={1.6} />
                )}
                <span>{theme === "dark" ? mobileCopy.light : mobileCopy.dark}</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
