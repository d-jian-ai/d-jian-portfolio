"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SITE_CONFIG } from "@/config/site";
import { isColorTheme, type ColorTheme } from "@/types/theme";

type ThemeContextValue = {
  setTheme: (theme: ColorTheme) => void;
  theme: ColorTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: ColorTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, updateTheme] = useState<ColorTheme>("dark");

  const setTheme = useCallback((nextTheme: ColorTheme) => {
    updateTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(SITE_CONFIG.storage.theme, nextTheme);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem(SITE_CONFIG.storage.theme);
    const initialTheme = isColorTheme(saved)
      ? saved
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

    updateTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      setTheme,
      theme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [setTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
