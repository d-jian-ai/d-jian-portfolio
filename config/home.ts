import type { ColorTheme } from "@/types/theme";

export type HomeScenePalette = {
  accent: string;
  background: string;
  contour: string;
  membrane: string;
  particle: string;
  shadow: string;
};

export const HOME_SCENE_CONFIG = {
  breakpoint: 820,
  camera: {
    far: 26,
    fov: 38,
    near: 0.1,
    position: [0, 0, 7.4] as [number, number, number],
  },
  motion: {
    pointerLerp: 0.038,
    scrollDrift: 0.62,
    speed: 0.32,
  },
  performance: {
    maxDpr: 1.5,
    particles: {
      desktop: 36000,
      mobile: 14000,
    },
  },
  surface: {
    height: 7.2,
    segments: [128, 80] as [number, number],
    width: 11.6,
  },
  palettes: {
    dark: {
      accent: "#d9e98f",
      background: "#171b19",
      contour: "#c9d2cc",
      membrane: "#82958b",
      particle: "#dce3de",
      shadow: "#0b100d",
    },
    light: {
      accent: "#c8d870",
      background: "#f5f4f0",
      contour: "#69746e",
      membrane: "#7f8e87",
      particle: "#4b5550",
      shadow: "#e0e1dc",
    },
  } satisfies Record<ColorTheme, HomeScenePalette>,
} as const;
