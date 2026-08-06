"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SITE_CONFIG } from "@/config/site";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";
import { HTML_LANGUAGE, isLocale, type Locale } from "@/i18n/types";

type LanguageContextValue = {
  dictionary: Dictionary;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem(SITE_CONFIG.storage.locale);
    if (isLocale(saved)) updateLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANGUAGE[locale];
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      dictionary: dictionaries[locale],
      locale,
      setLocale: (nextLocale) => {
        window.localStorage.setItem(SITE_CONFIG.storage.locale, nextLocale);
        updateLocale(nextLocale);
      },
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
