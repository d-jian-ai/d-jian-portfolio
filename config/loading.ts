import type { Locale } from "@/i18n/types";

export const LOADING_CONFIG = {
  exitDelay: 180,
  exitDuration: 860,
  maximumWait: 4600,
  minimumDuration: 1250,
  reducedMotionDuration: 240,
  visualReadyTimeout: 3200,
} as const;

export const LOADING_COPY: Record<
  Locale,
  { label: string; status: string }
> = {
  zh: {
    label: "网站加载中",
    status: "正在构建数字空间",
  },
  en: {
    label: "Website loading",
    status: "Composing the digital space",
  },
  fr: {
    label: "Chargement du site",
    status: "Composition de l’espace numérique",
  },
};
