export type VoxelCoordinate = {
  x: number;
  y: number;
  z: number;
};

export type VoxelBuilding = {
  id: string;
  index: number;
  dimensions: string;
  note: string;
  color: string;
  origin: [number, number];
  cells: VoxelCoordinate[];
};

function box(
  length: number,
  depth: number,
  height: number,
  offset: VoxelCoordinate = { x: 0, y: 0, z: 0 },
) {
  const cells: VoxelCoordinate[] = [];
  for (let x = 0; x < length; x += 1) {
    for (let z = 0; z < depth; z += 1) {
      for (let y = 0; y < height; y += 1) {
        cells.push({ x: x + offset.x, y: y + offset.y, z: z + offset.z });
      }
    }
  }
  return cells;
}

function unique(cells: VoxelCoordinate[]) {
  const seen = new Set<string>();
  return cells.filter((cell) => {
    const key = `${cell.x}:${cell.y}:${cell.z}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const red = "#d3132c";
const rose = "#b77f87";
const neutral = "#9a8582";
const blue = "#3342c8";
const cyan = "#089fb0";

export const VOXEL_BUILDINGS: VoxelBuilding[] = [
  {
    id: "building-1",
    index: 1,
    dimensions: "5 × 3 × 10",
    note: "完整长方体",
    color: rose,
    origin: [-10, -15],
    cells: box(5, 3, 10),
  },
  {
    id: "building-2",
    index: 2,
    dimensions: "6 × 3 × 10",
    note: "左右各 3 格，前后错位 1 格",
    color: red,
    origin: [-17, -7],
    cells: unique([
      ...box(3, 3, 10),
      ...box(3, 3, 10, { x: 3, y: 0, z: 1 }),
    ]),
  },
  {
    id: "building-3",
    index: 3,
    dimensions: "5 × 5 × 8",
    note: "完整长方体",
    color: "#b31c33",
    origin: [-17, 3],
    cells: box(5, 5, 8),
  },
  {
    id: "building-4",
    index: 4,
    dimensions: "5 × 4 × 3 + 1",
    note: "顶部附加 1 个方块",
    color: "#9f5060",
    origin: [-15, 13],
    cells: [...box(5, 4, 3), { x: 2, y: 3, z: 2 }],
  },
  {
    id: "building-5",
    index: 5,
    dimensions: "2 × 4 × 10",
    note: "完整长方体",
    color: "#bb92a0",
    origin: [-3, -16],
    cells: box(2, 4, 10),
  },
  {
    id: "building-6",
    index: 6,
    dimensions: "5 × 3 × 10",
    note: "完整长方体",
    color: neutral,
    origin: [3, -16],
    cells: box(5, 3, 10),
  },
  {
    id: "building-7",
    index: 7,
    dimensions: "3 × 3 × 10",
    note: "完整长方体",
    color: cyan,
    origin: [11, -14],
    cells: box(3, 3, 10),
  },
  {
    id: "building-8",
    index: 8,
    dimensions: "2 × 3 × 7",
    note: "完整长方体",
    color: "#5f70ca",
    origin: [3, -7],
    cells: box(2, 3, 7),
  },
  {
    id: "building-9",
    index: 9,
    dimensions: "3 × 5 × 8",
    note: "完整长方体",
    color: "#5565d0",
    origin: [11, -4],
    cells: box(3, 5, 8),
  },
  {
    id: "building-10",
    index: 10,
    dimensions: "5 × 3 × 6 + 2 × 5 × 2",
    note: "第一至六层为 5 × 3，第七至八层为 2 × 5",
    color: blue,
    origin: [9, 8],
    cells: unique([
      ...box(5, 3, 6),
      ...box(2, 5, 2, { x: 3, y: 6, z: -2 }),
    ]),
  },
  {
    id: "building-11",
    index: 11,
    dimensions: "4 × 4 × 2",
    note: "中央低层建筑",
    color: "#766e6b",
    origin: [-3, 8],
    cells: box(4, 4, 2),
  },
  {
    id: "building-12",
    index: 12,
    dimensions: "2 × 3 × 7",
    note: "位于建筑 5 后方，与建筑 1、6 对齐",
    color: "#a88586",
    origin: [-3, -14],
    cells: box(2, 3, 7),
  },
];

export const VOXEL_TOTAL = VOXEL_BUILDINGS.reduce(
  (sum, building) => sum + building.cells.length,
  0,
);

export function voxelKey(buildingId: string, cell: VoxelCoordinate) {
  return `${buildingId}/${cell.x}/${cell.y}/${cell.z}`;
}

export function parseVoxelKey(key: string) {
  const [buildingId, x, y, z] = key.split("/");
  return {
    buildingId,
    cell: { x: Number(x), y: Number(y), z: Number(z) },
  };
}

export const VALID_VOXEL_KEYS = new Set(
  VOXEL_BUILDINGS.flatMap((building) =>
    building.cells.map((cell) => voxelKey(building.id, cell)),
  ),
);
