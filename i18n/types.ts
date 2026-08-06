export const SUPPORTED_LOCALES = ["zh", "en", "fr"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string | null): value is Locale {
  return SUPPORTED_LOCALES.some((locale) => locale === value);
}

export const HTML_LANGUAGE: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  fr: "fr",
};
