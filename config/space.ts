import type { ColorTheme } from "@/types/theme";

type FieldAppearance = {
  blending: "additive" | "normal";
  color: string;
  opacity: number;
  pointSize: {
    desktop: number;
    mobile: number;
  };
};

export const SPACE_CONFIG = {
  appearance: {
    dark: {
      blending: "additive",
      color: "#dce9e1",
      opacity: 0.86,
      pointSize: { desktop: 1.35, mobile: 1.7 },
    },
    light: {
      blending: "normal",
      color: "#19382d",
      opacity: 0.72,
      pointSize: { desktop: 1.5, mobile: 1.55 },
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
    breathingAmount: 0.012,
    breathingSpeed: 0.14,
    driftAmount: 0.045,
    driftSpeed: 0.18,
    morphRate: 2.35,
    pointerLerp: 0.08,
    rotationEase: 1.25,
    rotationSpeed: 0.018,
  },
  performance: {
    desktopParticles: 28000,
    initialParticles: 16000,
    maxDpr: 1.5,
    mobileParticles: 9000,
  },
  shader: {
    ambientSpeed: 0.12,
    ambientStrength: 0.022,
    depthSpeed: 0.22,
    depthStrength: 0.045,
    pointerDepth: 1.55,
    pointerFalloff: 0.72,
    pointerForce: 0.72,
    pointerScale: [4.6, 2.8] as [number, number],
  },
} as const;
