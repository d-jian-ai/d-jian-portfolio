import speciesSource from "@/data/species-in-pieces.json";
import { VERIFIED_SPECIES_STATISTICS } from "@/config/poly-species-research";
import type { Locale } from "@/i18n/types";

export type SpeciesSeriesPoint = {
  label: string;
  value: string;
};

export type SpeciesStatisticSource = {
  date: string;
  organization: string;
};

export type SpeciesStatistic =
  | {
      kind: "headline";
      note: string;
      source?: SpeciesStatisticSource;
      title: string;
      value: string;
    }
  | {
      kind: "series";
      points: SpeciesSeriesPoint[];
      source?: SpeciesStatisticSource;
      title: string;
    }
  | {
      facts: SpeciesSeriesPoint[];
      kind: "profile";
      source: SpeciesStatisticSource;
      title: string;
    };

export type SpeciesRecord = {
  id: string;
  index: number;
  name: string;
  range: string;
  scientificName: string;
  statistics: SpeciesStatistic[];
  theme: {
    accent: string;
    background: string;
  };
  threat: [string, string, string];
};

const NON_CONSERVATION_STATISTICS = new Set([
  "Length",
  "Length of Tongue",
  "Size",
  "Wingspan",
]);

export const POLY_SPECIES = (speciesSource as SpeciesRecord[]).map((species) => ({
  ...species,
  statistics: [
    ...(VERIFIED_SPECIES_STATISTICS[species.id] ?? []),
    ...species.statistics.filter(
      (statistic) => !NON_CONSERVATION_STATISTICS.has(statistic.title),
    ),
  ],
}));

export type SpeciesView = "exhibit" | "index" | "threat" | "statistics";

type PolySpeciesUi = {
  allPieces: string;
  archiveSource: string;
  autoCycle: string;
  back: string;
  backToThreat: string;
  close: string;
  collection: string;
  indexCaption: string;
  indexEyebrow: string;
  language: string;
  motion: string;
  next: string;
  openThreat: string;
  piece: string;
  piecesCountLabel: string;
  previous: string;
  random: string;
  range: string;
  scientificName: string;
  selectStatistic: string;
  source: string;
  speciesCountLabel: string;
  statistics: string;
  survivalLabel: string;
  theme: string;
  threat: string;
  viewStatistics: string;
};

export const POLY_SPECIES_UI: Record<Locale, PolySpeciesUi> = {
  zh: {
    allPieces: "全部物种",
    archiveSource: "原始档案数据 / 2015 版",
    autoCycle: "自动巡游",
    back: "返回空间",
    backToThreat: "返回威胁说明",
    close: "关闭",
    collection: "碎片物种",
    indexCaption: "选择一个碎片，或让系统随机带你前往",
    indexEyebrow: "碎片之中",
    language: "切换语言",
    motion: "暂停动态",
    next: "下一个物种",
    openThreat: "它正面临什么？",
    piece: "碎片",
    piecesCountLabel: "组碎片",
    previous: "上一个物种",
    random: "随机选择",
    range: "分布区域",
    scientificName: "学名",
    selectStatistic: "选择一组数据查看",
    source: "来源",
    speciesCountLabel: "个物种",
    statistics: "数据统计",
    survivalLabel: "同一个破碎的生存处境",
    theme: "切换明暗模式",
    threat: "生存威胁",
    viewStatistics: "查看数据统计",
  },
  en: {
    allPieces: "All pieces",
    archiveSource: "Archive dataset / original 2015 edition",
    autoCycle: "Auto cycle",
    back: "Back to space",
    backToThreat: "Back to threat",
    close: "Close",
    collection: "Species in pieces",
    indexCaption: "Choose a piece, or let the system take you somewhere at random",
    indexEyebrow: "In pieces",
    language: "Change language",
    motion: "Pause motion",
    next: "Next species",
    openThreat: "What's the threat?",
    piece: "Piece",
    piecesCountLabel: "pieces",
    previous: "Previous species",
    random: "Random piece",
    range: "Range",
    scientificName: "Scientific name",
    selectStatistic: "Select a dataset to inspect",
    source: "Source",
    speciesCountLabel: "species",
    statistics: "Statistics",
    survivalLabel: "one fragmented survival",
    theme: "Change color mode",
    threat: "The threat",
    viewStatistics: "View statistics",
  },
  fr: {
    allPieces: "Toutes les especes",
    archiveSource: "Donnees d'archive / edition originale 2015",
    autoCycle: "Defilement auto",
    back: "Retour a l'espace",
    backToThreat: "Retour a la menace",
    close: "Fermer",
    collection: "Especes en fragments",
    indexCaption: "Choisissez un fragment, ou laissez le systeme vous guider au hasard",
    indexEyebrow: "En fragments",
    language: "Changer de langue",
    motion: "Suspendre le mouvement",
    next: "Espece suivante",
    openThreat: "Quelle est la menace ?",
    piece: "Fragment",
    piecesCountLabel: "fragments",
    previous: "Espece precedente",
    random: "Choix aleatoire",
    range: "Aire de repartition",
    scientificName: "Nom scientifique",
    selectStatistic: "Selectionnez un jeu de donnees",
    source: "Source",
    speciesCountLabel: "especes",
    statistics: "Statistiques",
    survivalLabel: "une survie morcelee",
    theme: "Changer le mode couleur",
    threat: "La menace",
    viewStatistics: "Voir les statistiques",
  },
};
