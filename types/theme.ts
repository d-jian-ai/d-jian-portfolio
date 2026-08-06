export const COLOR_THEMES = ["dark", "light"] as const;

export type ColorTheme = (typeof COLOR_THEMES)[number];

export function isColorTheme(value: string | null): value is ColorTheme {
  return COLOR_THEMES.some((theme) => theme === value);
}
