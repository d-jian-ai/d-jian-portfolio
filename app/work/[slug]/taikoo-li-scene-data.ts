export type VoxelPalette = "red" | "blue" | "cyan" | "taupe" | "bronze";

export type Voxel = {
  cluster: string;
  x: number;
  y: number;
  z: number;
  shade: number;
};

type GridVoxel = {
  cluster: string;
  x: number;
  y: number;
  z: number;
};

type BoxRange = {
  x: [number, number];
  y: [number, number];
  z: [number, number];
};

const UNIT = 0.62;
const grids: Record<VoxelPalette, Map<string, GridVoxel>> = {
  red: new Map(),
  blue: new Map(),
  cyan: new Map(),
  taupe: new Map(),
  bronze: new Map(),
};

function key(x: number, y: number, z: number) {
  return `${x}:${y}:${z}`;
}

function addBox(palette: VoxelPalette, cluster: string, range: BoxRange) {
  for (let x = range.x[0]; x <= range.x[1]; x += 1) {
    for (let y = range.y[0]; y <= range.y[1]; y += 1) {
      for (let z = range.z[0]; z <= range.z[1]; z += 1) {
        grids[palette].set(key(x, y, z), { cluster, x, y, z });
      }
    }
  }
}

function removeBox(palette: VoxelPalette, range: BoxRange) {
  for (let x = range.x[0]; x <= range.x[1]; x += 1) {
    for (let y = range.y[0]; y <= range.y[1]; y += 1) {
      for (let z = range.z[0]; z <= range.z[1]; z += 1) {
        grids[palette].delete(key(x, y, z));
      }
    }
  }
}

function addCells(
  palette: VoxelPalette,
  cluster: string,
  cells: Array<[number, number, number]>,
) {
  cells.forEach(([x, y, z]) => {
    grids[palette].set(key(x, y, z), { cluster, x, y, z });
  });
}

/*
 * The city is reconstructed as discrete, countable clusters. Each range is
 * inclusive and every subtraction is an intentional opening visible in the
 * supplied orbit frames. The central x=-2…2 corridor stays empty above the
 * two-level plinth so the portal and sculpture float on one clear sight line.
 */

// RED / western district ----------------------------------------------------
addBox("red", "red-rear-tower", { x: [-8, -4], y: [0, 11], z: [-7, -6] });
removeBox("red", { x: [-6, -5], y: [1, 7], z: [-7, -6] });
addCells("red", "red-rear-tower", [
  [-6, 5, -7],
  [-5, 5, -7],
  [-4, 6, -5],
  [-4, 7, -5],
]);

// Main hollow gate: two piers, a two-level bridge and a genuinely empty core.
addBox("red", "red-hollow-gate-left", { x: [-8, -7], y: [0, 8], z: [-5, 0] });
addBox("red", "red-hollow-gate-right", { x: [-4, -3], y: [0, 8], z: [-5, 0] });
addBox("red", "red-hollow-gate-bridge", { x: [-8, -3], y: [8, 9], z: [-5, -3] });
addBox("red", "red-hollow-gate-sill", { x: [-6, -5], y: [0, 1], z: [-4, -1] });
addCells("red", "red-hollow-gate-floaters", [
  [-6, 4, -4],
  [-5, 4, -4],
  [-6, 5, -3],
  [-5, 5, -3],
  [-6, 2, 0],
  [-5, 2, 0],
]);
removeBox("red", { x: [-8, -8], y: [2, 4], z: [-2, -1] });
removeBox("red", { x: [-3, -3], y: [1, 3], z: [-1, 0] });

// Mid-street red stacks and their smaller openings.
addBox("red", "red-mid-left", { x: [-10, -8], y: [0, 5], z: [1, 4] });
removeBox("red", { x: [-9, -8], y: [2, 3], z: [3, 4] });
addBox("red", "red-mid-right", { x: [-6, -5], y: [0, 4], z: [1, 4] });
removeBox("red", { x: [-6, -5], y: [1, 2], z: [3, 3] });
addCells("red", "red-mid-floaters", [
  [-7, 4, 1],
  [-7, 5, 1],
  [-7, 5, 2],
  [-4, 3, 2],
  [-4, 4, 2],
]);

// Low near block with the parking sign.
addBox("red", "red-parking-plinth", { x: [-9, -6], y: [0, 3], z: [9, 11] });
removeBox("red", { x: [-8, -7], y: [0, 1], z: [10, 11] });
addBox("red", "red-sign-spine", { x: [-7, -6], y: [0, 4], z: [6, 8] });

// BLUE / eastern district ---------------------------------------------------
addBox("blue", "blue-rear-wall", { x: [2, 6], y: [0, 10], z: [-7, -6] });
removeBox("blue", { x: [3, 4], y: [3, 7], z: [-7, -6] });
removeBox("blue", { x: [6, 6], y: [1, 2], z: [-7, -6] });
addCells("blue", "blue-rear-wall", [
  [3, 3, -5],
  [4, 3, -5],
  [5, 6, -5],
  [6, 6, -5],
]);

// Main blue arcade kept to the right of the central void.
addBox("blue", "blue-arcade-inner", { x: [4, 5], y: [0, 8], z: [-5, 1] });
addBox("blue", "blue-arcade-outer", { x: [6, 6], y: [0, 6], z: [-5, 1] });
addBox("blue", "blue-arcade-bridge", { x: [3, 6], y: [8, 9], z: [-4, -2] });
removeBox("blue", { x: [4, 5], y: [1, 6], z: [-1, 1] });
removeBox("blue", { x: [6, 6], y: [1, 2], z: [0, 1] });
addCells("blue", "blue-arcade-floaters", [
  [3, 4, -2],
  [3, 5, -2],
  [3, 3, 0],
  [5, 5, 1],
]);

addBox("blue", "blue-profile-plinth", { x: [3, 5], y: [0, 2], z: [7, 9] });
removeBox("blue", { x: [3, 3], y: [1, 2], z: [8, 9] });
addBox("blue", "blue-near-spine", { x: [5, 6], y: [0, 5], z: [5, 8] });
removeBox("blue", { x: [5, 5], y: [2, 4], z: [7, 8] });

// CYAN / outer eastern arcade ----------------------------------------------
addBox("cyan", "cyan-rear-tower", { x: [7, 9], y: [0, 10], z: [-7, -6] });
removeBox("cyan", { x: [7, 8], y: [1, 5], z: [-7, -6] });

addBox("cyan", "cyan-arcade-left", { x: [7, 7], y: [0, 8], z: [-4, 2] });
addBox("cyan", "cyan-arcade-right", { x: [9, 9], y: [0, 8], z: [-4, 2] });
addBox("cyan", "cyan-arcade-bridge", { x: [7, 9], y: [8, 9], z: [-4, -2] });
addCells("cyan", "cyan-arcade-floaters", [
  [8, 5, -1],
  [8, 4, 0],
  [8, 3, 2],
]);

addBox("cyan", "cyan-near-spine", { x: [7, 8], y: [0, 5], z: [8, 11] });
removeBox("cyan", { x: [7, 7], y: [2, 4], z: [9, 11] });
addCells("cyan", "cyan-near-cap", [
  [9, 4, 4],
  [9, 5, 4],
  [9, 5, 5],
  [8, 6, 3],
]);

// TAUPE / neutral fragments stay behind the floating centerline.
addBox("taupe", "taupe-rear-column", { x: [-2, -1], y: [0, 6], z: [-7, -6] });
removeBox("taupe", { x: [-2, -2], y: [2, 4], z: [-7, -6] });
addCells("taupe", "taupe-suspended", [
  [-1, 4, -4],
  [-1, 5, -4],
  [-1, 6, -4],
  [0, 3, -3],
  [0, 4, -3],
]);

// Two-level central plinth only; everything above is floating geometry.
addBox("bronze", "central-left-plinth", { x: [-2, -1], y: [0, 1], z: [3, 5] });
addBox("blue", "central-right-plinth", { x: [1, 2], y: [0, 1], z: [3, 5] });
addCells("taupe", "central-sculpture-seat", [
  [0, 0, 3],
  [0, 1, 3],
  [0, 0, 4],
  [0, 1, 4],
  [-1, 2, 3],
  [1, 2, 3],
]);

function noise(x: number, y: number, z: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function resolvePalette(palette: VoxelPalette): Voxel[] {
  return [...grids[palette].values()].map((cell) => {
    const isEasternBackground =
      (palette === "blue" || palette === "cyan") &&
      (cell.cluster.includes("rear") || cell.cluster.includes("arcade"));
    const isRedForeground = cell.cluster === "red-parking-plinth";
    const resolvedX = cell.x + (isEasternBackground ? -1 : 0) + (isRedForeground ? 2 : 0);
    return {
      cluster: cell.cluster,
      x: resolvedX * UNIT,
      y: cell.y * UNIT + UNIT / 2,
      z: cell.z * UNIT,
      shade: noise(cell.x, cell.y, cell.z),
    };
  });
}

export const TAIKOO_UNIT = UNIT;
export const TAIKOO_VOXELS: Record<VoxelPalette, Voxel[]> = {
  red: resolvePalette("red"),
  blue: resolvePalette("blue"),
  cyan: resolvePalette("cyan"),
  taupe: resolvePalette("taupe"),
  bronze: resolvePalette("bronze"),
};

export const TAIKOO_VOXEL_COUNTS: Record<VoxelPalette | "total", number> = {
  red: TAIKOO_VOXELS.red.length,
  blue: TAIKOO_VOXELS.blue.length,
  cyan: TAIKOO_VOXELS.cyan.length,
  taupe: TAIKOO_VOXELS.taupe.length,
  bronze: TAIKOO_VOXELS.bronze.length,
  total: Object.values(TAIKOO_VOXELS).reduce((sum, cells) => sum + cells.length, 0),
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
  { kind: "help", position: [-2.12, 5.48, -0.02], scale: 0.76 },
  { kind: "recycle", position: [-4.82, 5.62, -0.02], scale: 0.72 },
  { kind: "parking", position: [-3.42, 1.48, 7.06], scale: 0.78 },
  { kind: "sparkles", position: [-0.64, 4.86, -1.2], scale: 0.7 },
  { kind: "scan", position: [1.3, 3.16, -3.68], scale: 0.66 },
  { kind: "profile", position: [2.86, 1.5, 5.66], scale: 0.74 },
  { kind: "login", position: [0, 1.2, 3.46], scale: 1.42 },
  { kind: "fastForward", position: [2.86, 3.18, -0.02], scale: 0.68 },
];

export type CameraPreset = "far" | "near";

export const CAMERA_PRESETS: Record<
  CameraPreset,
  { position: [number, number, number]; target: [number, number, number]; fov: number }
> = {
  far: {
    position: [5.4, 12.8, 23.8],
    target: [0, 3.05, -0.3],
    fov: 28,
  },
  near: {
    position: [2.6, 4.7, 16.4],
    target: [0, 3.65, 0.4],
    fov: 24,
  },
};
