"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Focus,
  Move3D,
  MousePointer2,
  Palette,
  Redo2,
  RotateCcw,
  RefreshCw,
  Trash2,
  Undo2,
  Upload,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { useLanguage } from "@/providers/language-provider";
import type {
  BuildingPosition,
  BuildingPositions,
  EditorMode,
  HoveredVoxel,
  SceneTheme,
} from "./voxel-editor-model";
import {
  VALID_VOXEL_KEYS,
  VOXEL_BUILDINGS,
  VOXEL_TOTAL,
  type VoxelCoordinate,
  voxelKey,
} from "./voxel-editor-data";
import defaultVoxelLayout from "./taikoo-li-voxel-layout.json";
import styles from "./voxel-editor.module.css";

const VoxelEditorModel = dynamic(() => import("./voxel-editor-model"), {
  ssr: false,
  loading: () => (
    <div className={styles.loading} role="status">
      <span />
      Loading voxel workspace
    </div>
  ),
});

const STORAGE_KEY = "taikoo-li-voxel-editor-v4";
const LEGACY_STORAGE_KEY = "taikoo-li-voxel-editor-v3";
const DEFAULT_DELETED = new Set(
  defaultVoxelLayout.deleted.filter((key) => VALID_VOXEL_KEYS.has(key)),
);
const BUILDING_IDS = new Set(VOXEL_BUILDINGS.map((building) => building.id));

type PresetId = "reference" | "solid";

type LayoutState = {
  added: Set<string>;
  deleted: Set<string>;
  positions: BuildingPositions;
  theme: SceneTheme;
};

type PresetLayouts = Record<PresetId, LayoutState>;
const SCENE_THEMES: SceneTheme[] = [
  "original",
  "mondrian",
  "iridescent",
  "vangogh",
  "dior",
];

function createDefaultPositions(): BuildingPositions {
  return Object.fromEntries(
    VOXEL_BUILDINGS.map((building) => [
      building.id,
      { x: building.origin[0], y: 0, z: building.origin[1] },
    ]),
  );
}

function createCanonicalLayout(preset: PresetId): LayoutState {
  const defaultPositions = createDefaultPositions();
  return {
    added: new Set(),
    deleted: preset === "reference" ? new Set(DEFAULT_DELETED) : new Set(),
    positions: preset === "reference"
      ? parsePositions(defaultVoxelLayout.positions, defaultPositions)
      : defaultPositions,
    theme: "original",
  };
}

function createCanonicalLayouts(): PresetLayouts {
  return {
    reference: createCanonicalLayout("reference"),
    solid: createCanonicalLayout("solid"),
  };
}

function clonePositions(value: BuildingPositions): BuildingPositions {
  return Object.fromEntries(
    Object.entries(value).map(([id, position]) => [id, { ...position }]),
  );
}

function cloneLayout(value: LayoutState): LayoutState {
  return {
    added: new Set(value.added),
    deleted: new Set(value.deleted),
    positions: clonePositions(value.positions),
    theme: value.theme,
  };
}

function parseAdded(value: unknown) {
  if (!Array.isArray(value)) return new Set<string>();
  return new Set(
    value.filter((key): key is string => {
      if (typeof key !== "string" || VALID_VOXEL_KEYS.has(key)) return false;
      const [buildingId, x, y, z, extra] = key.split("/");
      const coordinates = [Number(x), Number(y), Number(z)];
      return !extra &&
        BUILDING_IDS.has(buildingId) &&
        coordinates.every(Number.isInteger) &&
        coordinates[1] >= 0 &&
        coordinates.every((coordinate) => Math.abs(coordinate) <= 48);
    }),
  );
}

function parseDeleted(value: unknown) {
  if (!Array.isArray(value)) throw new Error("Invalid deleted voxels");
  return new Set(
    value.filter(
      (key): key is string =>
        typeof key === "string" && VALID_VOXEL_KEYS.has(key),
    ),
  );
}

function parsePositions(value: unknown, fallback: BuildingPositions) {
  const positions = clonePositions(fallback);
  if (!Array.isArray(value)) return positions;
  value.forEach((entry) => {
    if (!entry || typeof entry !== "object") return;
    const item = entry as Record<string, unknown>;
    if (
      typeof item.id !== "string" ||
      !(item.id in positions) ||
      typeof item.x !== "number" ||
      typeof item.y !== "number" ||
      typeof item.z !== "number" ||
      !Number.isFinite(item.x) ||
      !Number.isFinite(item.y) ||
      !Number.isFinite(item.z)
    ) return;
    positions[item.id] = {
      x: Math.round(item.x),
      y: Math.round(item.y),
      z: Math.round(item.z),
    };
  });
  return positions;
}

function parseTheme(value: unknown, fallback: SceneTheme) {
  return typeof value === "string" && SCENE_THEMES.includes(value as SceneTheme)
    ? value as SceneTheme
    : fallback;
}

function serializeLayout(layout: LayoutState) {
  return {
    added: [...layout.added].sort(),
    deleted: [...layout.deleted].sort(),
    positions: VOXEL_BUILDINGS.map((building) => ({
      id: building.id,
      ...layout.positions[building.id],
    })),
    theme: layout.theme,
  };
}

function parseLayout(value: unknown, fallback: LayoutState): LayoutState {
  if (!value || typeof value !== "object") return cloneLayout(fallback);
  const item = value as Record<string, unknown>;
  return {
    added: parseAdded(item.added),
    deleted: Array.isArray(item.deleted)
      ? parseDeleted(item.deleted)
      : new Set(fallback.deleted),
    positions: parsePositions(item.positions, fallback.positions),
    theme: parseTheme(item.theme, fallback.theme),
  };
}

function migrateLegacyLayouts(value: unknown): PresetLayouts {
  const canonical = createCanonicalLayouts();
  if (!value || typeof value !== "object") return canonical;
  const payload = value as Record<string, unknown>;
  if (!payload.presets || typeof payload.presets !== "object") return canonical;
  const storedPresets = payload.presets as Record<string, unknown>;
  const legacyReference = parseLayout(storedPresets.reference, canonical.reference);
  const buildingTenPrefix = "building-10/";
  return {
    reference: {
      ...canonical.reference,
      deleted: new Set([
        ...[...canonical.reference.deleted].filter((key) => !key.startsWith(buildingTenPrefix)),
        ...[...legacyReference.deleted].filter((key) => key.startsWith(buildingTenPrefix)),
      ]),
      theme: legacyReference.theme,
    },
    solid: canonical.solid,
  };
}

function scrollPanel(event: ReactWheelEvent<HTMLElement>) {
  const nested = event.currentTarget.querySelector<HTMLElement>("[data-panel-scroll]");
  const target = nested ?? event.currentTarget;
  if (target.scrollHeight <= target.clientHeight) return;
  target.scrollTop += event.deltaY;
  event.preventDefault();
  event.stopPropagation();
}

const copy = {
  zh: {
    back: "返回项目",
    title: "建筑体素编辑器",
    subtitle: "12 组独立建筑 / 可迁移数据原型",
    buildings: "建筑组",
    remaining: "剩余",
    removed: "已删除",
    total: "初始总量",
    selected: "当前建筑",
    preset: "模型版本",
    referencePreset: "已完成镂空",
    solidPreset: "原始完整体块",
    mode: "编辑模式",
    inspect: "查看",
    delete: "删除",
    restore: "补回",
    place: "放置",
    move: "移动",
    inspectHelp: "点击方块选择建筑，拖拽空白处旋转视角。",
    deleteHelp: "点击任意实体方块删除；悬停会显示当前坐标。",
    restoreHelp: "已删除位置显示为线框，点击线框补回方块。",
    placeHelp: "点击任意方块表面，在相邻网格放置一个新立方体。",
    moveHelp: "点击建筑进行选择，再用坐标按钮将整栋建筑移动一格。",
    position: "整体位置",
    moveBuilding: "移动当前建筑 / 每次一格",
    special: "场景预览",
    spinStart: "开始全景旋转",
    spinStop: "停止全景旋转",
    changeStyle: "切换整体风格",
    styleOriginal: "原始彩色玻璃",
    styleMondrian: "蒙德里安色调",
    styleIridescent: "虹彩珠宝色调",
    styleVangogh: "深蓝绘画色调",
    styleDior: "Dior 金棕色调",
    hideBuildings: "隐藏建筑列表",
    showBuildings: "显示建筑列表",
    hideTools: "隐藏编辑工具",
    showTools: "显示编辑工具",
    focus: "聚焦当前建筑",
    isolate: "仅显示当前建筑",
    allBuildings: "显示全部建筑",
    undo: "撤销",
    redo: "重做",
    resetSelected: "恢复建筑基准",
    resetAll: "恢复当前版本",
    export: "导出 JSON",
    import: "导入 JSON",
    saved: "修改会自动保存在当前浏览器",
    imported: "已导入体素配置",
    importError: "文件不是有效的体素配置",
    resetDone: "已恢复当前版本的基准状态",
    coordinate: "坐标",
    noHover: "将鼠标移到方块上查看坐标",
    instruction: "完整体块版本可删除、补回或沿方块表面继续搭建；所有操作都能撤销。",
  },
  en: {
    back: "Back to project",
    title: "Building voxel editor",
    subtitle: "12 independent groups / portable data prototype",
    buildings: "Building groups",
    remaining: "Remaining",
    removed: "Removed",
    total: "Initial total",
    selected: "Selected building",
    preset: "Model version",
    referencePreset: "Finished cut-outs",
    solidPreset: "Original solids",
    mode: "Edit mode",
    inspect: "Inspect",
    delete: "Delete",
    restore: "Restore",
    place: "Place",
    move: "Move",
    inspectHelp: "Click a voxel to select a building. Drag empty space to orbit.",
    deleteHelp: "Click a solid voxel to remove it. Hover shows its coordinates.",
    restoreHelp: "Removed positions appear as wireframes. Click one to restore it.",
    placeHelp: "Click a voxel face to place a new cube in the adjacent grid cell.",
    moveHelp: "Select a building, then move the whole group one grid unit at a time.",
    position: "Group position",
    moveBuilding: "Move selected / one grid unit",
    special: "Scene preview",
    spinStart: "Start scene rotation",
    spinStop: "Stop scene rotation",
    changeStyle: "Change scene style",
    styleOriginal: "Original colored glass",
    styleMondrian: "Mondrian palette",
    styleIridescent: "Iridescent jewel palette",
    styleVangogh: "Deep blue painted palette",
    styleDior: "Dior gold-brown palette",
    hideBuildings: "Hide building list",
    showBuildings: "Show building list",
    hideTools: "Hide editing tools",
    showTools: "Show editing tools",
    focus: "Focus selected",
    isolate: "Show selected only",
    allBuildings: "Show all buildings",
    undo: "Undo",
    redo: "Redo",
    resetSelected: "Restore building baseline",
    resetAll: "Restore this version",
    export: "Export JSON",
    import: "Import JSON",
    saved: "Changes are saved automatically in this browser",
    imported: "Voxel configuration imported",
    importError: "This is not a valid voxel configuration",
    resetDone: "This version's baseline was restored",
    coordinate: "Coordinate",
    noHover: "Hover a voxel to inspect its coordinates",
    instruction: "In the solids preset, remove, restore, or extend a building from any voxel face. Every action can be undone.",
  },
  fr: {
    back: "Retour au projet",
    title: "Éditeur de voxels",
    subtitle: "12 groupes indépendants / données transférables",
    buildings: "Groupes",
    remaining: "Restants",
    removed: "Supprimés",
    total: "Total initial",
    selected: "Bâtiment actif",
    preset: "Version du modèle",
    referencePreset: "Découpes finalisées",
    solidPreset: "Volumes complets",
    mode: "Mode d'édition",
    inspect: "Observer",
    delete: "Supprimer",
    restore: "Restaurer",
    place: "Placer",
    move: "Déplacer",
    inspectHelp: "Cliquer pour sélectionner ; glisser dans le vide pour tourner.",
    deleteHelp: "Cliquer sur un voxel pour le supprimer. Le survol affiche ses coordonnées.",
    restoreHelp: "Les voxels supprimés apparaissent en filaire. Cliquer pour les restaurer.",
    placeHelp: "Cliquer sur une face pour placer un cube dans la cellule voisine.",
    moveHelp: "Sélectionner un bâtiment, puis déplacer le groupe d'une unité à la fois.",
    position: "Position du groupe",
    moveBuilding: "Déplacer l'actif / une unité",
    special: "Aperçu de la scène",
    spinStart: "Lancer la rotation globale",
    spinStop: "Arrêter la rotation globale",
    changeStyle: "Changer le style global",
    styleOriginal: "Verre coloré d'origine",
    styleMondrian: "Palette Mondrian",
    styleIridescent: "Palette bijou irisée",
    styleVangogh: "Palette picturale bleu nuit",
    styleDior: "Palette Dior or-brun",
    hideBuildings: "Masquer la liste",
    showBuildings: "Afficher la liste",
    hideTools: "Masquer les outils",
    showTools: "Afficher les outils",
    focus: "Cadrer le bâtiment",
    isolate: "Afficher seulement l'actif",
    allBuildings: "Afficher tous les bâtiments",
    undo: "Annuler",
    redo: "Rétablir",
    resetSelected: "Restaurer la base active",
    resetAll: "Restaurer cette version",
    export: "Exporter JSON",
    import: "Importer JSON",
    saved: "Les modifications sont sauvegardées dans ce navigateur",
    imported: "Configuration importée",
    importError: "Configuration de voxels non valide",
    resetDone: "La base de cette version est restaurée",
    coordinate: "Coordonnée",
    noHover: "Survoler un voxel pour voir ses coordonnées",
    instruction: "Dans les volumes complets, supprimer, restaurer ou prolonger un bâtiment depuis une face. Chaque action peut être annulée.",
  },
} as const;

export function TaikooVoxelEditor() {
  const { locale } = useLanguage();
  const text = copy[locale];
  const [layouts, setLayouts] = useState<PresetLayouts>(createCanonicalLayouts);
  const [activePreset, setActivePreset] = useState<PresetId>("reference");
  const [undoStack, setUndoStack] = useState<LayoutState[]>([]);
  const [redoStack, setRedoStack] = useState<LayoutState[]>([]);
  const [mode, setMode] = useState<EditorMode>("inspect");
  const [selectedBuildingId, setSelectedBuildingId] = useState("building-1");
  const [focusSignal, setFocusSignal] = useState(0);
  const [isolate, setIsolate] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [sceneAutoRotate, setSceneAutoRotate] = useState(false);
  const [hovered, setHovered] = useState<HoveredVoxel>(null);
  const [message, setMessage] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const currentLayout = layouts[activePreset];
  const { added, deleted, positions, theme } = currentLayout;

  const selectedBuilding = VOXEL_BUILDINGS.find(
    (building) => building.id === selectedBuildingId,
  ) ?? VOXEL_BUILDINGS[0];

  const removedByBuilding = useMemo(() => {
    const counts = new Map<string, number>();
    deleted.forEach((key) => {
      const buildingId = key.split("/")[0];
      counts.set(buildingId, (counts.get(buildingId) ?? 0) + 1);
    });
    return counts;
  }, [deleted]);

  const addedByBuilding = useMemo(() => {
    const counts = new Map<string, number>();
    added.forEach((key) => {
      const buildingId = key.split("/")[0];
      counts.set(buildingId, (counts.get(buildingId) ?? 0) + 1);
    });
    return counts;
  }, [added]);

  const commit = useCallback((next: LayoutState) => {
    setUndoStack((stack) => [...stack, cloneLayout(currentLayout)]);
    setRedoStack([]);
    setLayouts((value) => ({ ...value, [activePreset]: cloneLayout(next) }));
  }, [activePreset, currentLayout]);

  const undo = useCallback(() => {
    if (undoStack.length === 0) return;
    const previous = undoStack[undoStack.length - 1];
    setRedoStack((stack) => [...stack, cloneLayout(currentLayout)]);
    setLayouts((value) => ({
      ...value,
      [activePreset]: cloneLayout(previous),
    }));
    setUndoStack((stack) => stack.slice(0, -1));
  }, [activePreset, currentLayout, undoStack]);

  const redo = useCallback(() => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack((stack) => [...stack, cloneLayout(currentLayout)]);
    setLayouts((value) => ({
      ...value,
      [activePreset]: cloneLayout(next),
    }));
    setRedoStack((stack) => stack.slice(0, -1));
  }, [activePreset, currentLayout, redoStack]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const payload = JSON.parse(stored) as Record<string, unknown>;
        if (payload.version === 4 && payload.presets && typeof payload.presets === "object") {
          const storedPresets = payload.presets as Record<string, unknown>;
          const canonical = createCanonicalLayouts();
          setLayouts({
            reference: parseLayout(storedPresets.reference, canonical.reference),
            solid: parseLayout(storedPresets.solid, canonical.solid),
          });
        }
      } else {
        const legacy = window.localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) setLayouts(migrateLegacyLayouts(JSON.parse(legacy)));
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 4,
        presets: {
          reference: serializeLayout(layouts.reference),
          solid: serializeLayout(layouts.solid),
        },
      }),
    );
  }, [hydrated, layouts]);

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "z") return;
      event.preventDefault();
      if (event.shiftKey) redo();
      else undo();
    }
    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [redo, undo]);

  useEffect(() => {
    if (!message) return;
    const timeout = window.setTimeout(() => setMessage(""), 2400);
    return () => window.clearTimeout(timeout);
  }, [message]);

  function deleteVoxel(buildingId: string, cell: VoxelCoordinate) {
    if (activePreset !== "solid") return;
    const key = voxelKey(buildingId, cell);
    if (added.has(key)) {
      const nextAdded = new Set(added);
      nextAdded.delete(key);
      commit({ added: nextAdded, deleted: new Set(deleted), positions, theme });
      return;
    }
    if (deleted.has(key)) return;
    const nextDeleted = new Set(deleted);
    nextDeleted.add(key);
    commit({ added: new Set(added), deleted: nextDeleted, positions, theme });
  }

  function restoreVoxel(buildingId: string, cell: VoxelCoordinate) {
    if (activePreset !== "solid") return;
    const key = voxelKey(buildingId, cell);
    if (!deleted.has(key)) return;
    const nextDeleted = new Set(deleted);
    nextDeleted.delete(key);
    commit({ added: new Set(added), deleted: nextDeleted, positions, theme });
  }

  function placeVoxel(buildingId: string, cell: VoxelCoordinate) {
    if (activePreset !== "solid" || cell.y < 0) return;
    const key = voxelKey(buildingId, cell);
    if (added.has(key) || (VALID_VOXEL_KEYS.has(key) && !deleted.has(key))) return;
    if (deleted.has(key)) {
      const nextDeleted = new Set(deleted);
      nextDeleted.delete(key);
      commit({ added: new Set(added), deleted: nextDeleted, positions, theme });
      return;
    }
    const nextAdded = new Set(added);
    nextAdded.add(key);
    commit({ added: nextAdded, deleted: new Set(deleted), positions, theme });
  }

  function resetSelected() {
    const baseline = createCanonicalLayout(activePreset);
    const prefix = `${selectedBuildingId}/`;
    const nextDeleted = new Set(
      [...deleted].filter((key) => !key.startsWith(prefix)),
    );
    const nextAdded = new Set(
      [...added].filter((key) => !key.startsWith(prefix)),
    );
    baseline.deleted.forEach((key) => {
      if (key.startsWith(prefix)) nextDeleted.add(key);
    });
    commit({
      added: nextAdded,
      deleted: nextDeleted,
      positions: {
        ...clonePositions(positions),
        [selectedBuildingId]: { ...baseline.positions[selectedBuildingId] },
      },
      theme,
    });
    setMessage(text.resetDone);
  }

  function resetAll() {
    commit(createCanonicalLayout(activePreset));
    setMessage(text.resetDone);
  }

  function switchPreset(preset: PresetId) {
    setActivePreset(preset);
    setMode("inspect");
    setUndoStack([]);
    setRedoStack([]);
    setHovered(null);
  }

  function moveSelected(axis: keyof BuildingPosition, amount: number) {
    const current = positions[selectedBuildingId] ?? {
      x: selectedBuilding.origin[0],
      y: 0,
      z: selectedBuilding.origin[1],
    };
    commit({
      added: new Set(added),
      deleted: new Set(deleted),
      positions: {
        ...clonePositions(positions),
        [selectedBuildingId]: {
          ...current,
          [axis]: current[axis] + amount,
        },
      },
      theme,
    });
    setMode("move");
    setHovered(null);
  }

  function toggleSpin() {
    setSceneAutoRotate((value) => !value);
    setMode("inspect");
    setHovered(null);
  }

  function cycleStyle() {
    if (activePreset !== "reference") return;
    const currentIndex = SCENE_THEMES.indexOf(theme);
    const nextTheme = SCENE_THEMES[(currentIndex + 1) % SCENE_THEMES.length];
    commit({
      added: new Set(added),
      deleted: new Set(deleted),
      positions,
      theme: nextTheme,
    });
  }

  function exportConfiguration() {
    const payload = {
      version: 4,
      project: "taikoo-li-digital-district",
      totalVoxels: VOXEL_TOTAL,
      activePreset,
      added: [...added].sort(),
      deleted: [...deleted].sort(),
      positions: serializeLayout(currentLayout).positions,
      presets: {
        reference: serializeLayout(layouts.reference),
        solid: serializeLayout(layouts.solid),
      },
      buildings: VOXEL_BUILDINGS.map((building) => ({
        id: building.id,
        index: building.index,
        dimensions: building.dimensions,
        initialCount: building.cells.length,
        addedCount: addedByBuilding.get(building.id) ?? 0,
        deletedCount: removedByBuilding.get(building.id) ?? 0,
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "taikoo-li-voxel-layout.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importConfiguration(file: File) {
    try {
      const payload = JSON.parse(await file.text()) as Record<string, unknown>;
      const canonical = createCanonicalLayouts();
      if (payload.presets && typeof payload.presets === "object") {
        const presets = payload.presets as Record<string, unknown>;
        setLayouts({
          reference: parseLayout(presets.reference, canonical.reference),
          solid: parseLayout(presets.solid, canonical.solid),
        });
      } else {
        const solid = {
          added: parseAdded(payload.added),
          deleted: parseDeleted(payload.deleted),
          positions: parsePositions(payload.positions, canonical.solid.positions),
          theme: "original" as const,
        };
        setLayouts({ reference: canonical.reference, solid });
      }
      setActivePreset("solid");
      setMode("inspect");
      setUndoStack([]);
      setRedoStack([]);
      setMessage(text.imported);
    } catch {
      setMessage(text.importError);
    }
  }

  const modeHelp = mode === "delete"
    ? text.deleteHelp
    : mode === "restore"
      ? text.restoreHelp
      : mode === "place"
        ? text.placeHelp
        : mode === "move"
          ? text.moveHelp
          : text.inspectHelp;
  const hoveredBuilding = hovered
    ? VOXEL_BUILDINGS.find((building) => building.id === hovered.buildingId)
    : null;
  const selectedPosition = positions[selectedBuilding.id] ?? {
    x: selectedBuilding.origin[0],
    y: 0,
    z: selectedBuilding.origin[1],
  };
  const selectedStyleLabel = {
    original: text.styleOriginal,
    mondrian: text.styleMondrian,
    iridescent: text.styleIridescent,
    vangogh: text.styleVangogh,
    dior: text.styleDior,
  }[theme];

  return (
    <main className={styles.page} data-voxel-editor-page>
      <header className={styles.topbar}>
        <Link className={styles.back} href="/work/taikoo-li-digital-district">
          <ArrowLeft aria-hidden="true" size={16} />
          {text.back}
        </Link>
        <div className={styles.titleGroup}>
          <span>{text.subtitle}</span>
          <h1>{text.title}</h1>
        </div>
        <div className={styles.totalBadge}>
          <span>{text.total}</span>
          <strong>{VOXEL_TOTAL}</strong>
        </div>
      </header>

      <div
        className={styles.workspace}
        data-left-collapsed={leftCollapsed}
        data-right-collapsed={rightCollapsed}
      >
        <button
          aria-expanded={!leftCollapsed}
          aria-label={leftCollapsed ? text.showBuildings : text.hideBuildings}
          className={`${styles.panelToggle} ${styles.leftToggle}`}
          onClick={() => setLeftCollapsed((value) => !value)}
          type="button"
        >
          {leftCollapsed ? <ChevronRight aria-hidden="true" size={15} /> : <ChevronLeft aria-hidden="true" size={15} />}
        </button>
        <button
          aria-expanded={!rightCollapsed}
          aria-label={rightCollapsed ? text.showTools : text.hideTools}
          className={`${styles.panelToggle} ${styles.rightToggle}`}
          onClick={() => setRightCollapsed((value) => !value)}
          type="button"
        >
          {rightCollapsed ? <ChevronLeft aria-hidden="true" size={15} /> : <ChevronRight aria-hidden="true" size={15} />}
        </button>

        <aside
          className={styles.buildingPanel}
          data-collapsed={leftCollapsed}
          onWheel={scrollPanel}
        >
          <div className={styles.panelHeading}>
            <span>{text.buildings}</span>
            <strong>{VOXEL_BUILDINGS.length}</strong>
          </div>
          <div className={styles.buildingList} data-panel-scroll>
            {VOXEL_BUILDINGS.map((building) => {
              const removed = removedByBuilding.get(building.id) ?? 0;
              const placed = addedByBuilding.get(building.id) ?? 0;
              return (
                <button
                  data-active={building.id === selectedBuildingId}
                  key={building.id}
                  onClick={() => setSelectedBuildingId(building.id)}
                  type="button"
                >
                  <i style={{ background: building.color }} />
                  <span>
                    <b>建筑 {building.index}</b>
                    <small>{building.dimensions}</small>
                  </span>
                  <em>{building.cells.length - removed + placed}/{building.cells.length}</em>
                </button>
              );
            })}
          </div>
        </aside>

        <section className={styles.stage} data-mode={mode} data-testid="voxel-editor-stage">
          <VoxelEditorModel
            added={added}
            autoRotate={sceneAutoRotate}
            deleted={deleted}
            focusBuildingId={selectedBuildingId}
            focusSignal={focusSignal}
            hovered={hovered}
            isolate={isolate}
            mode={mode}
            onDelete={deleteVoxel}
            onHover={setHovered}
            onPlace={placeVoxel}
            onRestore={restoreVoxel}
            onSelect={setSelectedBuildingId}
            positions={positions}
            selectedBuildingId={selectedBuildingId}
            theme={activePreset === "reference" ? theme : "original"}
          />
          <div className={styles.stageLabel}>
            <span>BUILDING {String(selectedBuilding.index).padStart(2, "0")}</span>
            <strong>{selectedBuilding.dimensions}</strong>
          </div>
          <div className={styles.hoverReadout}>
            <MousePointer2 aria-hidden="true" size={14} />
            {hovered && hoveredBuilding ? (
              <span>
                建筑 {hoveredBuilding.index} · {text.coordinate} X{hovered.cell.x + 1} / Y{hovered.cell.y + 1} / Z{hovered.cell.z + 1}
              </span>
            ) : (
              <span>{text.noHover}</span>
            )}
          </div>
        </section>

        <aside
          className={styles.toolPanel}
          data-collapsed={rightCollapsed}
          onWheel={scrollPanel}
        >
          <section className={styles.presetSection}>
            <span className={styles.toolLabel}>{text.preset}</span>
            <div className={styles.presetSwitch}>
              <button
                data-active={activePreset === "reference"}
                onClick={() => switchPreset("reference")}
                type="button"
              >
                {text.referencePreset}
              </button>
              <button
                data-active={activePreset === "solid"}
                onClick={() => switchPreset("solid")}
                type="button"
              >
                {text.solidPreset}
              </button>
            </div>
          </section>

          <section className={styles.selectedCard}>
            <span>{text.selected}</span>
            <div>
              <i style={{ background: selectedBuilding.color }} />
              <strong>建筑 {selectedBuilding.index}</strong>
            </div>
            <p>{selectedBuilding.note}</p>
            <dl>
              <div><dt>{text.remaining}</dt><dd>{selectedBuilding.cells.length - (removedByBuilding.get(selectedBuilding.id) ?? 0) + (addedByBuilding.get(selectedBuilding.id) ?? 0)}</dd></div>
              <div><dt>{text.removed}</dt><dd>{removedByBuilding.get(selectedBuilding.id) ?? 0}</dd></div>
            </dl>
          </section>

          <section className={styles.toolSection}>
            <span className={styles.toolLabel}>{text.mode}</span>
            <div className={styles.modeSwitch} data-protected={activePreset === "reference"}>
              <button data-active={mode === "inspect"} onClick={() => setMode("inspect")} type="button">{text.inspect}</button>
              {activePreset === "solid" ? (
                <>
                  <button data-active={mode === "delete"} onClick={() => setMode("delete")} type="button">{text.delete}</button>
                  <button data-active={mode === "restore"} onClick={() => setMode("restore")} type="button">{text.restore}</button>
                  <button data-active={mode === "place"} onClick={() => setMode("place")} type="button">{text.place}</button>
                  <button data-active={mode === "move"} onClick={() => setMode("move")} type="button">{text.move}</button>
                </>
              ) : null}
            </div>
            <p className={styles.modeHelp}>{modeHelp}</p>
          </section>

          <section className={styles.toolSection}>
            <span className={styles.toolLabel}>{text.position}</span>
            <div className={styles.moveHeading}>
              <Move3D aria-hidden="true" size={14} />
              <span>{text.moveBuilding}</span>
            </div>
            <div className={styles.moveGrid}>
              {(["x", "y", "z"] as const).map((axis) => (
                <div key={axis}>
                  <span>{axis.toUpperCase()}</span>
                  <strong>{selectedPosition[axis]}</strong>
                  <div>
                    <button aria-label={`${axis.toUpperCase()} 减 1`} onClick={() => moveSelected(axis, -1)} type="button">−</button>
                    <button aria-label={`${axis.toUpperCase()} 加 1`} onClick={() => moveSelected(axis, 1)} type="button">+</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.toolSection}>
            <span className={styles.toolLabel}>{text.special}</span>
            <div className={styles.specialActions} data-single={activePreset !== "reference"}>
              <button data-active={sceneAutoRotate} onClick={toggleSpin} type="button">
                <RefreshCw aria-hidden="true" size={15} />
                {sceneAutoRotate ? text.spinStop : text.spinStart}
              </button>
              {activePreset === "reference" ? (
                <button onClick={cycleStyle} type="button">
                  <Palette aria-hidden="true" size={15} />
                  <span>{text.changeStyle}<small>{selectedStyleLabel}</small></span>
                </button>
              ) : null}
            </div>
          </section>

          <section className={styles.actionGrid}>
            <button onClick={() => setFocusSignal((value) => value + 1)} type="button">
              <Focus aria-hidden="true" size={15} /> {text.focus}
            </button>
            <button onClick={() => setIsolate((value) => !value)} type="button">
              <Eye aria-hidden="true" size={15} /> {isolate ? text.allBuildings : text.isolate}
            </button>
            <button disabled={undoStack.length === 0} onClick={undo} type="button">
              <Undo2 aria-hidden="true" size={15} /> {text.undo}
            </button>
            <button disabled={redoStack.length === 0} onClick={redo} type="button">
              <Redo2 aria-hidden="true" size={15} /> {text.redo}
            </button>
            <button onClick={resetSelected} type="button">
              <RotateCcw aria-hidden="true" size={15} /> {text.resetSelected}
            </button>
            <button className={styles.danger} onClick={resetAll} type="button">
              <Trash2 aria-hidden="true" size={15} /> {text.resetAll}
            </button>
          </section>

          {activePreset === "solid" ? (
            <section className={styles.fileActions}>
              <button onClick={exportConfiguration} type="button">
                <Download aria-hidden="true" size={15} /> {text.export}
              </button>
              <button onClick={() => fileInput.current?.click()} type="button">
                <Upload aria-hidden="true" size={15} /> {text.import}
              </button>
              <input
                accept="application/json,.json"
                hidden
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void importConfiguration(file);
                  event.target.value = "";
                }}
                ref={fileInput}
                type="file"
              />
            </section>
          ) : null}

          <div className={styles.saveNote}>
            <Box aria-hidden="true" size={16} />
            <span>{text.saved}</span>
          </div>
          <p className={styles.instruction}>{text.instruction}</p>
        </aside>
      </div>

      {message ? <div className={styles.toast} role="status">{message}</div> : null}
    </main>
  );
}
