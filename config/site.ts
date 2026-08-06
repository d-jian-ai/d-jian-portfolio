import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

type NavigationKey = keyof Dictionary["nav"];

export const SITE_CONFIG = {
  breakpoints: {
    mobile: 820,
  },
  events: {
    scrollLock: "creer:scroll-lock",
  },
  storage: {
    locale: "creer-locale",
    theme: "creer-theme",
  },
} as const;

export const NAVIGATION_ITEMS: ReadonlyArray<{
  code: string;
  href: string;
  labelKey: NavigationKey;
}> = [
  { href: "/", labelKey: "home", code: "01" },
  { href: "/work", labelKey: "work", code: "02" },
  { href: "/space", labelKey: "space", code: "03" },
];

export const LOCALE_OPTIONS: ReadonlyArray<{
  value: Locale;
  label: string;
  shortLabel: string;
}> = [
  { value: "zh", label: "中文", shortLabel: "中" },
  { value: "en", label: "English", shortLabel: "EN" },
  { value: "fr", label: "Français", shortLabel: "FR" },
];

export const NAVIGATION_COPY: Record<
  Locale,
  {
    appearance: string;
    close: string;
    dark: string;
    language: string;
    light: string;
    menu: string;
    navigation: string;
    themeToDark: string;
    themeToLight: string;
  }
> = {
  zh: {
    appearance: "显示模式",
    close: "关闭菜单",
    dark: "深色",
    language: "语言",
    light: "浅色",
    menu: "打开菜单",
    navigation: "导航",
    themeToDark: "切换到深色模式",
    themeToLight: "切换到浅色模式",
  },
  en: {
    appearance: "Appearance",
    close: "Close menu",
    dark: "Dark",
    language: "Language",
    light: "Light",
    menu: "Open menu",
    navigation: "Navigation",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
  },
  fr: {
    appearance: "Apparence",
    close: "Fermer le menu",
    dark: "Sombre",
    language: "Langue",
    light: "Clair",
    menu: "Ouvrir le menu",
    navigation: "Navigation",
    themeToDark: "Passer au mode sombre",
    themeToLight: "Passer au mode clair",
  },
};
