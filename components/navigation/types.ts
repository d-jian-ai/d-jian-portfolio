import type { Locale } from "@/i18n/types";

export type NavigationLink = {
  active: boolean;
  code: string;
  href: string;
  label: string;
};

export type LocaleOption = {
  label: string;
  shortLabel: string;
  value: Locale;
};
