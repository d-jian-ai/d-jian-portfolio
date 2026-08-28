export type GuideSpiritId = "core" | "ribbon" | "branch" | "echo" | "mist";
export type GuideResponseMode = 0 | 1 | 2 | 3 | 4;

export type GuideSpiritConfig = {
  accent: string;
  accentRgb: readonly [number, number, number];
  code: string;
  field: {
    amplitude: number;
    frequency: number;
    pointerForce: number;
    pointerRadius: number;
    rotation: number;
    speed: number;
  };
  fieldBase: string;
  fieldMist: string;
  id: GuideSpiritId;
  ink: string;
  palette: readonly [string, string, string, string];
  responseMode: GuideResponseMode;
  spring: {
    damping: number;
    maxVelocity: number;
    stiffness: number;
  };
  surface: string;
  trail: {
    interval: number;
    lifetime: number;
    speedThreshold: number;
  };
};

export const GUIDE_SPIRITS: readonly GuideSpiritConfig[] = [
  {
    accent: "#2f6dff",
    accentRgb: [47, 109, 255],
    code: "G-01",
    field: {
      amplitude: 0.26,
      frequency: 1.9,
      pointerForce: 0.72,
      pointerRadius: 0.52,
      rotation: 0.035,
      speed: 0.82,
    },
    fieldBase: "#050914",
    fieldMist: "#12254a",
    id: "core",
    ink: "#071126",
    palette: ["#7fa7ff", "#2f6dff", "#c9d8ff", "#1844b8"],
    responseMode: 0,
    spring: { damping: 14.8, maxVelocity: 2450, stiffness: 58 },
    surface: "#dce7ff",
    trail: { interval: 46, lifetime: 620, speedThreshold: 560 },
  },
  {
    accent: "#f05245",
    accentRgb: [240, 82, 69],
    code: "G-02",
    field: {
      amplitude: 0.34,
      frequency: 1.35,
      pointerForce: 0.9,
      pointerRadius: 0.58,
      rotation: 0.075,
      speed: 1.18,
    },
    fieldBase: "#140706",
    fieldMist: "#4a1713",
    id: "ribbon",
    ink: "#250906",
    palette: ["#ff9187", "#f05245", "#ffd1cc", "#b52822"],
    responseMode: 1,
    spring: { damping: 12.2, maxVelocity: 2860, stiffness: 54 },
    surface: "#ffd8d2",
    trail: { interval: 34, lifetime: 700, speedThreshold: 470 },
  },
  {
    accent: "#18a56a",
    accentRgb: [24, 165, 106],
    code: "G-03",
    field: {
      amplitude: 0.22,
      frequency: 2.25,
      pointerForce: 0.62,
      pointerRadius: 0.46,
      rotation: 0.018,
      speed: 0.68,
    },
    fieldBase: "#04110b",
    fieldMist: "#123c29",
    id: "branch",
    ink: "#061d12",
    palette: ["#6be3aa", "#18a56a", "#c5f5db", "#0c7148"],
    responseMode: 2,
    spring: { damping: 16.4, maxVelocity: 2050, stiffness: 62 },
    surface: "#d3f2df",
    trail: { interval: 62, lifetime: 760, speedThreshold: 640 },
  },
  {
    accent: "#7654e8",
    accentRgb: [118, 84, 232],
    code: "G-04",
    field: {
      amplitude: 0.3,
      frequency: 1.58,
      pointerForce: 0.82,
      pointerRadius: 0.66,
      rotation: 0.052,
      speed: 0.92,
    },
    fieldBase: "#0c0718",
    fieldMist: "#2d205e",
    id: "echo",
    ink: "#150a32",
    palette: ["#ad98ff", "#7654e8", "#ded6ff", "#4b2dac"],
    responseMode: 3,
    spring: { damping: 13.6, maxVelocity: 2350, stiffness: 48 },
    surface: "#e3dcff",
    trail: { interval: 52, lifetime: 840, speedThreshold: 520 },
  },
  {
    accent: "#d88900",
    accentRgb: [216, 137, 0],
    code: "G-05",
    field: {
      amplitude: 0.42,
      frequency: 1.05,
      pointerForce: 0.54,
      pointerRadius: 0.72,
      rotation: 0.025,
      speed: 0.54,
    },
    fieldBase: "#140e03",
    fieldMist: "#49320c",
    id: "mist",
    ink: "#241702",
    palette: ["#ffc65d", "#d88900", "#ffe7b6", "#9f6000"],
    responseMode: 4,
    spring: { damping: 18.2, maxVelocity: 1780, stiffness: 40 },
    surface: "#ffe9ba",
    trail: { interval: 78, lifetime: 920, speedThreshold: 710 },
  },
] as const;

export const GUIDE_COUNT = GUIDE_SPIRITS.length;
