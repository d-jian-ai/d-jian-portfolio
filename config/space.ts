import type { ColorTheme } from "@/types/theme";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

type ExperimentKey = keyof Dictionary["space"]["experiments"];

export type SpacePreviewKind = "particle-field" | "poly-species";

export type FieldTelemetry = {
  coherence: number;
  energy: number;
  wake: number;
};

export const STANDALONE_SPACE_ROUTES = ["/space/poly-species"] as const;

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

type FieldAppearance = {
  blending: "additive" | "normal";
  colors: readonly [string, string, string];
  opacity: number;
  pointSize: {
    desktop: number;
    mobile: number;
  };
};

export const GENERATIVE_FIELD_CONFIG = {
  appearance: {
    dark: {
      blending: "additive",
      colors: ["#f1f4ed", "#d8ed8c", "#68c6dc"],
      opacity: 0.86,
      pointSize: { desktop: 1.35, mobile: 1.7 },
    },
    light: {
      blending: "normal",
      colors: ["#0a865c", "#b92f5a", "#147a99"],
      opacity: 0.82,
      pointSize: { desktop: 1.65, mobile: 1.7 },
    },
  } satisfies Record<ColorTheme, FieldAppearance>,
  camera: {
    far: 40,
    fov: 48,
    near: 0.1,
    position: [0, 0, 8.2] as [number, number, number],
  },
  interaction: {
    chapterCooldownMs: 680,
    touchThreshold: 46,
    wheelThreshold: 18,
  },
  layout: {
    desktop: {
      position: [0.55, 0.08, 0] as [number, number, number],
      scale: 1,
    },
    mobile: {
      position: [0, 0.52, 0] as [number, number, number],
      scale: 0.64,
    },
    preview: {
      position: [0, 0, 0] as [number, number, number],
      scale: 0.92,
    },
    previewMobile: {
      position: [0, 0, 0] as [number, number, number],
      scale: 0.58,
    },
  },
  motion: {
    autonomousPointerSpeed: 0.24,
    groupDrift: 0.075,
    morphRate: 2.35,
    pointerLerp: 0.075,
    wakeLerp: 0.11,
  },
  performance: {
    desktopParticles: 26000,
    initialParticles: 14000,
    maxDpr: 1.5,
    mobileParticles: 7600,
    previewParticles: 6200,
  },
  shader: {
    colorCycleSpeed: 0.018,
    colorSpatialFrequency: 0.105,
    flowDetailStrength: 0.058,
    flowScale: 0.74,
    flowSpeed: 0.34,
    flowStrength: 0.24,
    pointerDepth: 1.55,
    pointerFalloff: 0.72,
    pointerForce: 0.72,
    pointerScale: [4.6, 2.8] as [number, number],
  },
  stageColors: {
    dark: [
      ["#ecf4ee", "#a8d8bd", "#62a89e"],
      ["#eff4e9", "#bddd78", "#58b6d0"],
      ["#f3eee8", "#e6a65f", "#74a5d5"],
      ["#f3edf5", "#d989b5", "#83c8b3"],
    ],
    light: [
      ["#17664f", "#3b8f73", "#346f78"],
      ["#116b55", "#8a922a", "#20758b"],
      ["#7c4221", "#b45d37", "#326992"],
      ["#6c315c", "#a43e70", "#267b68"],
    ],
  } satisfies Record<ColorTheme, ReadonlyArray<readonly [string, string, string]>>,
} as const;

type FieldStageMeta = {
  principle: string;
  readings: readonly [
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
  ];
};

export const GENERATIVE_FIELD_STAGE_META: Record<
  Locale,
  readonly FieldStageMeta[]
> = {
  zh: [
    {
      principle: "十二束初始流线建立均匀种子场",
      readings: [
        { label: "拓扑", value: "源流束" },
        { label: "采样", value: "确定性抖动" },
        { label: "行为", value: "自主漂移" },
      ],
    },
    {
      principle: "粒子沿连续速度场平流，指针改变局部方向",
      readings: [
        { label: "拓扑", value: "平流层" },
        { label: "求解", value: "旋度近似" },
        { label: "响应", value: "局部排斥" },
      ],
    },
    {
      principle: "环状相干结构揭示速度场中的涡量",
      readings: [
        { label: "拓扑", value: "嵌套涡环" },
        { label: "深度", value: "三维相位" },
        { label: "运动", value: "无散流" },
      ],
    },
    {
      principle: "五级扰动历史形成会自然衰减的短时记忆",
      readings: [
        { label: "拓扑", value: "记忆轨迹" },
        { label: "历史", value: "五级延迟" },
        { label: "衰减", value: "连续阻尼" },
      ],
    },
  ],
  en: [
    {
      principle: "Twelve seeded filaments establish an even source field",
      readings: [
        { label: "Topology", value: "Source filaments" },
        { label: "Sampling", value: "Deterministic jitter" },
        { label: "Behavior", value: "Autonomous drift" },
      ],
    },
    {
      principle: "Particles advect through a continuous field while the pointer bends local flow",
      readings: [
        { label: "Topology", value: "Advection sheet" },
        { label: "Solver", value: "Curl approximation" },
        { label: "Response", value: "Local repulsion" },
      ],
    },
    {
      principle: "Coherent rings expose the vorticity carried by the velocity field",
      readings: [
        { label: "Topology", value: "Nested vortex" },
        { label: "Depth", value: "3D phase" },
        { label: "Motion", value: "Divergence free" },
      ],
    },
    {
      principle: "Five delayed disturbances form a short memory that decays naturally",
      readings: [
        { label: "Topology", value: "Memory trace" },
        { label: "History", value: "Five delays" },
        { label: "Decay", value: "Continuous damping" },
      ],
    },
  ],
  fr: [
    {
      principle: "Douze filaments amorcent un champ source regulier",
      readings: [
        { label: "Topologie", value: "Filaments source" },
        { label: "Echantillon", value: "Jitter deterministe" },
        { label: "Comportement", value: "Derive autonome" },
      ],
    },
    {
      principle: "Les particules suivent le champ continu et le pointeur infléchit le courant local",
      readings: [
        { label: "Topologie", value: "Nappe d'advection" },
        { label: "Solveur", value: "Approximation curl" },
        { label: "Reponse", value: "Repulsion locale" },
      ],
    },
    {
      principle: "Des anneaux coherents rendent visible la vorticite du champ",
      readings: [
        { label: "Topologie", value: "Vortex imbriques" },
        { label: "Profondeur", value: "Phase 3D" },
        { label: "Mouvement", value: "Sans divergence" },
      ],
    },
    {
      principle: "Cinq perturbations retardees composent une memoire breve qui s'efface",
      readings: [
        { label: "Topologie", value: "Trace memoire" },
        { label: "Historique", value: "Cinq retards" },
        { label: "Declin", value: "Amortissement continu" },
      ],
    },
  ],
};

export const GENERATIVE_FIELD_TELEMETRY_LABELS: Record<
  Locale,
  { coherence: string; energy: string; wake: string }
> = {
  zh: { coherence: "相干度", energy: "场能", wake: "记忆尾迹" },
  en: { coherence: "Coherence", energy: "Field energy", wake: "Wake memory" },
  fr: { coherence: "Coherence", energy: "Energie", wake: "Memoire" },
};
