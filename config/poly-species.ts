import type { ColorTheme } from "@/types/theme";

type Point = readonly [number, number];

export type PolyShard = {
  clipPath: string;
  tone: number;
};

type PolySpeciesTheme = {
  accent: string;
  background: string;
  ink: string;
  muted: string;
  palette: readonly [string, string, string, string, string];
};

export type PolySpeciesForm = {
  center: Point;
  id: "aero-ray" | "signal-moth" | "delta-heron" | "tidal-fox";
  innerScale: readonly number[];
  outer: readonly Point[];
  theme: Record<ColorTheme, PolySpeciesTheme>;
};

const INNER_SCALE = [0.46, 0.58, 0.42, 0.61, 0.49, 0.56, 0.44, 0.6, 0.47, 0.54] as const;

export const POLY_SPECIES_FORMS: readonly PolySpeciesForm[] = [
  {
    center: [50, 48],
    id: "aero-ray",
    innerScale: INNER_SCALE,
    outer: [
      [50, 25],
      [69, 34],
      [93, 47],
      [71, 56],
      [55, 62],
      [52, 91],
      [46, 62],
      [28, 57],
      [7, 47],
      [30, 34],
    ],
    theme: {
      dark: {
        accent: "#f492b1",
        background: "#191521",
        ink: "#faf6ff",
        muted: "rgba(250, 246, 255, 0.62)",
        palette: ["#f7b6ca", "#e86f98", "#c3386c", "#8f224f", "#5b1739"],
      },
      light: {
        accent: "#9a204e",
        background: "#d3c5eb",
        ink: "#231727",
        muted: "rgba(35, 23, 39, 0.62)",
        palette: ["#ef9eb8", "#db557f", "#bd2e62", "#8f1d4d", "#61163b"],
      },
    },
  },
  {
    center: [50, 49],
    id: "signal-moth",
    innerScale: [0.4, 0.56, 0.47, 0.61, 0.43, 0.58, 0.43, 0.61, 0.47, 0.56],
    outer: [
      [50, 15],
      [68, 31],
      [94, 20],
      [76, 51],
      [91, 82],
      [55, 69],
      [50, 91],
      [45, 69],
      [9, 82],
      [24, 51],
    ],
    theme: {
      dark: {
        accent: "#ffc84f",
        background: "#241b12",
        ink: "#fff8e8",
        muted: "rgba(255, 248, 232, 0.62)",
        palette: ["#ffd866", "#f4aa3f", "#df6d35", "#a93f32", "#662936"],
      },
      light: {
        accent: "#7c2f2c",
        background: "#f0d36f",
        ink: "#2a1b13",
        muted: "rgba(42, 27, 19, 0.62)",
        palette: ["#ffdf67", "#f5b341", "#dd7634", "#ad4231", "#6e2935"],
      },
    },
  },
  {
    center: [49, 48],
    id: "delta-heron",
    innerScale: [0.52, 0.43, 0.6, 0.46, 0.59, 0.42, 0.57, 0.48, 0.61, 0.44],
    outer: [
      [47, 15],
      [66, 10],
      [94, 25],
      [69, 31],
      [80, 49],
      [57, 58],
      [64, 92],
      [49, 63],
      [34, 90],
      [36, 54],
    ],
    theme: {
      dark: {
        accent: "#80ddc1",
        background: "#0f211e",
        ink: "#edfdf7",
        muted: "rgba(237, 253, 247, 0.62)",
        palette: ["#a5ead7", "#65cdb7", "#269d91", "#176d70", "#183f51"],
      },
      light: {
        accent: "#174d56",
        background: "#a9d0c2",
        ink: "#102b2a",
        muted: "rgba(16, 43, 42, 0.62)",
        palette: ["#c4f0dd", "#6ed3b8", "#2da395", "#1d7376", "#164b5b"],
      },
    },
  },
  {
    center: [51, 49],
    id: "tidal-fox",
    innerScale: [0.45, 0.61, 0.43, 0.57, 0.48, 0.63, 0.42, 0.55, 0.46, 0.6],
    outer: [
      [51, 15],
      [65, 31],
      [94, 38],
      [70, 50],
      [77, 85],
      [53, 63],
      [30, 82],
      [35, 57],
      [5, 49],
      [34, 29],
    ],
    theme: {
      dark: {
        accent: "#ff9c78",
        background: "#251512",
        ink: "#fff5ee",
        muted: "rgba(255, 245, 238, 0.62)",
        palette: ["#ffc0a1", "#ef8b68", "#cf594a", "#96393a", "#59283a"],
      },
      light: {
        accent: "#7f2630",
        background: "#dda18c",
        ink: "#2b1717",
        muted: "rgba(43, 23, 23, 0.62)",
        palette: ["#ffd0b4", "#f0936d", "#ce5947", "#943536", "#57243a"],
      },
    },
  },
] as const;

function pointAtScale(center: Point, outer: Point, scale: number): Point {
  return [
    center[0] + (outer[0] - center[0]) * scale,
    center[1] + (outer[1] - center[1]) * scale,
  ];
}

function triangleToClipPath(points: readonly [Point, Point, Point]) {
  return `polygon(${points.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(", ")})`;
}

export function createPolyShards(form: PolySpeciesForm): PolyShard[] {
  const inner = form.outer.map((point, index) =>
    pointAtScale(
      form.center,
      point,
      form.innerScale[index % form.innerScale.length],
    ),
  );

  return form.outer.flatMap((outerPoint, index) => {
    const next = (index + 1) % form.outer.length;
    const baseTone = index % 5;

    return [
      {
        clipPath: triangleToClipPath([
          form.center,
          inner[index],
          inner[next],
        ]),
        tone: (baseTone + 1) % 5,
      },
      {
        clipPath: triangleToClipPath([
          inner[index],
          outerPoint,
          form.outer[next],
        ]),
        tone: baseTone,
      },
      {
        clipPath: triangleToClipPath([
          inner[index],
          form.outer[next],
          inner[next],
        ]),
        tone: (baseTone + 3) % 5,
      },
    ];
  });
}

export const POLY_SPECIES_SHARDS = POLY_SPECIES_FORMS.map(createPolyShards);
