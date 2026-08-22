export type VoxelPalette = "red" | "blue" | "cyan" | "taupe" | "bronze";

export type Voxel = {
  x: number;
  y: number;
  z: number;
  shade: number;
};

type TowerOptions = {
  x: number;
  z: number;
  width: number;
  depth: number;
  height: number;
  stepBack?: (x: number, z: number, level: number) => boolean;
  void?: (x: number, z: number, level: number) => boolean;
};

const UNIT = 0.62;

function noise(x: number, y: number, z: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function tower(options: TowerOptions): Voxel[] {
  const cells: Voxel[] = [];

  for (let level = 0; level < options.height; level += 1) {
    for (let x = 0; x < options.width; x += 1) {
      for (let z = 0; z < options.depth; z += 1) {
        if (options.stepBack?.(x, z, level) || options.void?.(x, z, level)) {
          continue;
        }

        cells.push({
          x: (options.x + x) * UNIT,
          y: level * UNIT + UNIT / 2,
          z: (options.z + z) * UNIT,
          shade: noise(options.x + x, level, options.z + z),
        });
      }
    }
  }

  return cells;
}

const red = [
  ...tower({
    x: -8,
    z: -9,
    width: 5,
    depth: 4,
    height: 10,
    stepBack: (x, z, level) => level > 7 && (x > 2 || z > 1),
    void: (x, z, level) => level > 1 && level < 5 && x > 1 && x < 4 && z === 3,
  }),
  ...tower({
    x: -9,
    z: -4,
    width: 4,
    depth: 5,
    height: 13,
    stepBack: (x, z, level) => level > 9 && (x === 0 || z > 2),
    void: (x, z, level) => level > 1 && level < 6 && x > 0 && x < 3 && z === 4,
  }),
  ...tower({
    x: -7,
    z: 2,
    width: 4,
    depth: 5,
    height: 8,
    stepBack: (x, z, level) => level > 5 && (x > 1 || z > 2),
    void: (x, z, level) => level < 3 && x === 2 && z > 1,
  }),
  ...tower({
    x: -8,
    z: 8,
    width: 5,
    depth: 3,
    height: 6,
    stepBack: (x, _z, level) => level > 3 && x > 2,
  }),
  ...tower({ x: -4, z: -3, width: 2, depth: 3, height: 6 }),
];

const blue = [
  ...tower({
    x: 1,
    z: -10,
    width: 6,
    depth: 4,
    height: 11,
    stepBack: (x, z, level) => level > 8 && (x < 2 || z > 1),
    void: (x, z, level) => level > 2 && level < 6 && x < 3 && z === 3,
  }),
  ...tower({
    x: 3,
    z: -5,
    width: 5,
    depth: 5,
    height: 12,
    stepBack: (x, z, level) => level > 8 && (x < 2 || z > 2),
    void: (x, z, level) => level < 4 && x < 2 && z === 4,
  }),
  ...tower({
    x: 4,
    z: 1,
    width: 4,
    depth: 6,
    height: 9,
    stepBack: (x, z, level) => level > 5 && (x < 1 || (x > 1 && z > 2)),
    void: (x, z, level) => level > 1 && level < 6 && x === 0 && z > 1,
  }),
  ...tower({
    x: 2,
    z: 8,
    width: 4,
    depth: 3,
    height: 5,
    stepBack: (x, _z, level) => level > 2 && x < 2,
  }),
];

const cyan = [
  ...tower({
    x: 7,
    z: -8,
    width: 3,
    depth: 7,
    height: 10,
    stepBack: (_x, z, level) => level > 7 && z > 3,
  }),
  ...tower({
    x: 7,
    z: 0,
    width: 3,
    depth: 8,
    height: 9,
    stepBack: (x, z, level) => level > 5 && (x < 1 || z > 4),
    void: (x, z, level) => level < 4 && x === 0 && z > 2 && z < 6,
  }),
];

const taupe = [
  ...tower({
    x: -2,
    z: -8,
    width: 3,
    depth: 3,
    height: 8,
    stepBack: (x, z, level) => level > 5 && (x === 0 || z === 2),
  }),
  ...tower({
    x: -2,
    z: -3,
    width: 3,
    depth: 4,
    height: 7,
    stepBack: (x, z, level) => level > 4 && (x === 0 || z > 1),
  }),
  ...tower({
    x: -1,
    z: 6,
    width: 3,
    depth: 2,
    height: 2,
    void: (x, z, level) => level > 0 && x === 1 && z === 1,
  }),
  ...tower({ x: 0, z: -2, width: 2, depth: 2, height: 4 }),
];

const bronze = [
  ...tower({ x: -1, z: 3, width: 2, depth: 2, height: 2 }),
  ...tower({ x: -3, z: 8, width: 3, depth: 2, height: 3 }),
];

export const TAIKOO_UNIT = UNIT;

export const TAIKOO_VOXELS: Record<VoxelPalette, Voxel[]> = {
  red,
  blue,
  cyan,
  taupe,
  bronze,
};

export type SignKind =
  | "help"
  | "parking"
  | "profile"
  | "fastForward"
  | "login"
  | "recycle"
  | "sparkles"
  | "scan";

export type SignPlacement = {
  kind: SignKind;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

export const SIGN_PLACEMENTS: SignPlacement[] = [
  { kind: "help", position: [-3.72, 5.65, -2.12], scale: 0.76 },
  { kind: "recycle", position: [-5.58, 4.35, 0.34], scale: 0.72 },
  { kind: "parking", position: [-4.72, 1.76, 6.84], scale: 0.78 },
  { kind: "sparkles", position: [-0.62, 4.24, -3.18], scale: 0.7 },
  { kind: "scan", position: [1.86, 3.72, -3.04], scale: 0.66 },
  { kind: "profile", position: [2.16, 2.14, 5.28], scale: 0.72 },
  { kind: "login", position: [-0.14, 1.06, 5.6], scale: 0.76 },
  { kind: "fastForward", position: [4.18, 4.34, 0.66], scale: 0.68 },
];

export const REFERENCE_CAMERA = {
  position: [5.2, 10.2, 22.6] as [number, number, number],
  target: [0.1, 3.2, -0.3] as [number, number, number],
  fov: 30,
};
