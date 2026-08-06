import type { ColorTheme } from "@/types/theme";
import type { Dictionary } from "@/i18n/dictionaries";

type ExperimentKey = keyof Dictionary["space"]["experiments"];

export type SpacePreviewKind = "particle-field";

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
      position: [0.1, 0.7, 0] as [number, number, number],
      scale: 0.68,
    },
  },
  motion: {
    morphRate: 2.35,
    pointerLerp: 0.08,
  },
  performance: {
    desktopParticles: 28000,
    initialParticles: 16000,
    maxDpr: 1.5,
    mobileParticles: 9000,
  },
  shader: {
    ambientSpeed: 0.17,
    ambientStrength: 0.055,
    colorCycleSpeed: 0.018,
    colorSpatialFrequency: 0.085,
    depthSpeed: 0.13,
    depthStrength: 0.075,
    pointerDepth: 1.55,
    pointerFalloff: 0.72,
    pointerForce: 0.72,
    pointerScale: [4.6, 2.8] as [number, number],
  },
} as const;
