import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

type ExperimentKey = keyof Dictionary["space"]["experiments"];

export type SpacePreviewKind = "particle-field" | "poly-species";

export const STANDALONE_SPACE_ROUTES = [
  "/space/generative-field",
  "/space/poly-species",
] as const;

export function isStandaloneSpaceRoute(pathname: string) {
  return STANDALONE_SPACE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export const SPACE_EXPERIMENTS: ReadonlyArray<{
  code: string;
  href: string;
  key: ExperimentKey;
  preview: SpacePreviewKind;
  slug: string;
  year: string;
}> = [
  {
    code: "01",
    href: "/space/generative-field",
    key: "generativeField",
    preview: "particle-field",
    slug: "generative-field",
    year: "2026",
  },
  {
    code: "02",
    href: "/space/poly-species",
    key: "polySpecies",
    preview: "poly-species",
    slug: "poly-species",
    year: "2026",
  },
];

export type SpaceIndexPreviewKind =
  | "district-image"
  | "particle-field"
  | "poly-species";

type SpaceIndexExperimentCopy = {
  category: string;
  summary: string;
  title: string;
};
export type SpaceIndexExperiment = {
  code: string;
  colors: {
    accent: string;
    dark: string;
    light: string;
  };
  copy: Record<Locale, SpaceIndexExperimentCopy>;
  href: string;
  preview: SpaceIndexPreviewKind;
  tags: readonly string[];
  year: string;
};

export const SPACE_INDEX_EXPERIMENTS: readonly SpaceIndexExperiment[] = [
  {
    code: "001",
    colors: {
      accent: "#6bdde7",
      dark: "#05070c",
      light: "#edf0ec",
    },
    copy: {
      zh: {
        category: "沉浸叙事 / 粒子系统",
        summary: "从一粒被唤醒的微光开始，穿过感知、连接、分化、成形与记忆。",
        title: "粒子纪事",
      },
      en: {
        category: "Immersive narrative / Particle system",
        summary: "One awakened point of light moves through sensing, bonding, difference, form, and memory.",
        title: "Particle Chronicle",
      },
      fr: {
        category: "Récit immersif / Système particulaire",
        summary: "Un point de lumière traverse la perception, le lien, la différence, la forme et la mémoire.",
        title: "Chronique particulaire",
      },
    },
    href: "/space/generative-field",
    preview: "particle-field",
    tags: ["WEBGL", "PARTICLES", "STORY"],
    year: "2026",
  },
  {
    code: "002",
    colors: {
      accent: "#fec54f",
      dark: "#171410",
      light: "#f4f0e7",
    },
    copy: {
      zh: {
        category: "形态研究 / 低多边形",
        summary: "三十枚低多边形面片在原创数字物种之间连续重组。",
        title: "多面生命",
      },
      en: {
        category: "Morphology / Low-poly",
        summary: "Thirty low-poly shards continually reorganize across original digital species.",
        title: "Poly Species",
      },
      fr: {
        category: "Morphologie / Low-poly",
        summary: "Trente facettes low-poly se réorganisent entre des espèces numériques originales.",
        title: "Espèces polygonales",
      },
    },
    href: "/space/poly-species",
    preview: "poly-species",
    tags: ["MORPH", "LOW-POLY", "INTERACTION"],
    year: "2026",
  },
  {
    code: "003",
    colors: {
      accent: "#7aa6ff",
      dark: "#0b1019",
      light: "#eef1f5",
    },
    copy: {
      zh: {
        category: "数字空间 / 体素系统",
        summary: "一座由体素建筑组成、可以持续扩展和编辑的数字街区。",
        title: "数字街区",
      },
      en: {
        category: "Digital space / Voxel system",
        summary: "An expandable digital district assembled from a system of voxel buildings.",
        title: "Digital District",
      },
      fr: {
        category: "Espace numérique / Voxels",
        summary: "Un quartier numérique extensible construit à partir d'un système de bâtiments en voxels.",
        title: "Quartier numérique",
      },
    },
    href: "/work/taikoo-li-digital-district/editor",
    preview: "district-image",
    tags: ["VOXEL", "EDITOR", "WEBGL"],
    year: "2026",
  },
] as const;

export const SPACE_INDEX_INTERFACE_COPY: Record<
  Locale,
  {
    all: string;
    collection: string;
    footer: string;
    grid: string;
    heroLines: readonly [string, string, string];
    lead: string;
    list: string;
    open: string;
    scroll: string;
  }
> = {
  zh: {
    all: "持续发生",
    collection: "CREER / 空间研发集",
    footer: "形态没有终点，只有下一次触发。",
    grid: "场景",
    heroLines: ["感知试验场", "空间正在发生", "边界尚未命名"],
    lead: "这里收集正在发生的空间实验。触碰留下轨迹，移动改变形态；每个场景，都从你的介入开始。",
    list: "索引",
    open: "进入实验",
    scroll: "继续探索",
  },
  en: {
    all: "Always in motion",
    collection: "CREER / SPATIAL R&D",
    footer: "No form is final. There is only the next disturbance.",
    grid: "Scenes",
    heroLines: ["A FIELD FOR SENSE", "SPACE IN MOTION", "EDGES UNNAMED"],
    lead: "A collection of spatial experiments in progress. Touch leaves a trace, movement alters form, and every scene begins with your presence.",
    list: "Index",
    open: "Enter experiment",
    scroll: "Explore further",
  },
  fr: {
    all: "Toujours en mouvement",
    collection: "CREER / RECHERCHE SPATIALE",
    footer: "Aucune forme n'est définitive. Il n'existe que la prochaine perturbation.",
    grid: "Scènes",
    heroLines: ["UN CHAMP SENSIBLE", "L'ESPACE EN MOUVEMENT", "DES BORDS SANS NOM"],
    lead: "Une collection d'expériences spatiales en cours. Le toucher laisse une trace, le mouvement transforme la forme et chaque scène commence par votre présence.",
    list: "Index",
    open: "Entrer dans l'expérience",
    scroll: "Explorer plus loin",
  },
};
