import type { ColorTheme } from "@/types/theme";

export type HeroFilamentPalette = {
  accent: string;
  background: string;
  base: string;
  dust: string;
  highlight: string;
  lineOpacity: number;
  membraneOpacity: number;
  pointOpacity: number;
};

export const HERO_FILAMENT_CONFIG = {
  breakpoint: 820,
  camera: {
    far: 30,
    fov: 42,
    near: 0.1,
    position: [0, 0, 7.2] as [number, number, number],
  },
  motion: {
    pointerDepth: 0.62,
    pointerFalloff: 0.42,
    pointerLerp: 0.045,
    pointerScale: [4.8, 2.9] as [number, number],
    scrollDepth: 0.8,
    scrollShift: 0.48,
  },
  performance: {
    maxDpr: 1.5,
    dust: { desktop: 5200, mobile: 2200 },
  },
  layers: [
    {
      opacity: 1,
      phase: 0.2,
      position: [0.65, 0.48, -1.05] as [number, number, number],
      rotation: [-0.24, 0.15, -0.15] as [number, number, number],
      samples: { desktop: 112, mobile: 72 },
      scale: [1.15, 1, 1] as [number, number, number],
      speed: 0.13,
      strands: { desktop: 150, mobile: 74 },
    },
    {
      opacity: 0.88,
      phase: 2.4,
      position: [-1.35, 0.15, -1.75] as [number, number, number],
      rotation: [0.34, -0.16, 0.72] as [number, number, number],
      samples: { desktop: 96, mobile: 64 },
      scale: [0.78, 0.92, 0.9] as [number, number, number],
      speed: 0.09,
      strands: { desktop: 105, mobile: 48 },
    },
    {
      opacity: 0.72,
      phase: 4.8,
      position: [2.05, -0.78, -2.05] as [number, number, number],
      rotation: [0.14, 0.28, -0.58] as [number, number, number],
      samples: { desktop: 88, mobile: 58 },
      scale: [0.9, 0.72, 1] as [number, number, number],
      speed: 0.075,
      strands: { desktop: 82, mobile: 38 },
    },
  ],
  palettes: {
    dark: {
      accent: "#e0a087",
      background: "#202625",
      base: "#7f9895",
      dust: "#c1cfca",
      highlight: "#c0e2dc",
      lineOpacity: 0.4,
      membraneOpacity: 0.12,
      pointOpacity: 0.3,
    },
    light: {
      accent: "#a76856",
      background: "#eff2ef",
      base: "#506869",
      dust: "#536966",
      highlight: "#7fa7a8",
      lineOpacity: 0.25,
      membraneOpacity: 0.075,
      pointOpacity: 0.2,
    },
  } satisfies Record<ColorTheme, HeroFilamentPalette>,
} as const;
