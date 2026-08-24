"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  Download,
  Eye,
  Focus,
  Move3D,
  MousePointer2,
  Redo2,
  RotateCcw,
  Trash2,
  Undo2,
  Upload,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import type {
  BuildingPosition,
  BuildingPositions,
  EditorMode,
  HoveredVoxel,
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

const STORAGE_KEY = "taikoo-li-voxel-editor-v2";
const DEFAULT_DELETED = new Set(
  defaultVoxelLayout.deleted.filter((key) => VALID_VOXEL_KEYS.has(key)),
);

type PresetId = "reference" | "solid";

type LayoutState = {
  deleted: Set<string>;
  positions: BuildingPositions;
};

type PresetLayouts = Record<PresetId, LayoutState>;

function createDefaultPositions(): BuildingPositions {
  return Object.fromEntries(
    VOXEL_BUILDINGS.map((building) => [
      building.id,
      { x: building.origin[0], y: 0, z: building.origin[1] },
    ]),
  );
}

function createCanonicalLayout(preset: PresetId): LayoutState {
  return {
    deleted: preset === "reference" ? new Set(DEFAULT_DELETED) : new Set(),
    positions: createDefaultPositions(),
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
    deleted: new Set(value.deleted),
    positions: clonePositions(value.positions),
  };
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

function serializeLayout(layout: LayoutState) {
  return {
    deleted: [...layout.deleted].sort(),
    positions: VOXEL_BUILDINGS.map((building) => ({
      id: building.id,
      ...layout.positions[building.id],
    })),
  };
}

function parseLayout(value: unknown, fallback: LayoutState): LayoutState {
  if (!value || typeof value !== "object") return cloneLayout(fallback);
  const item = value as Record<string, unknown>;
  return {
    deleted: Array.isArray(item.deleted)
      ? parseDeleted(item.deleted)
      : new Set(fallback.deleted),
    positions: parsePositions(item.positions, fallback.positions),
  };
}

const copy = {
  zh: {
    back: "返回项目",
    title: "建筑体素编辑器",
    subtitle: "11 组独立建筑 / 可迁移数据原型",
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
    move: "移动",
    inspectHelp: "点击方块选择建筑，拖拽空白处旋转视角。",
    deleteHelp: "点击任意实体方块删除；悬停会显示当前坐标。",
    restoreHelp: "已删除位置显示为线框，点击线框补回方块。",
    moveHelp: "点击建筑进行选择，再用坐标按钮将整栋建筑移动一格。",
    position: "整体位置",
    moveBuilding: "移动当前建筑 / 每次一格",
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
    instruction: "建议先聚焦一栋建筑，再从外层逐块删除。所有删除记录都能撤销并导出。",
  },
  en: {
    back: "Back to project",
    title: "Building voxel editor",
    subtitle: "11 independent groups / portable data prototype",
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
    move: "Move",
    inspectHelp: "Click a voxel to select a building. Drag empty space to orbit.",
    deleteHelp: "Click a solid voxel to remove it. Hover shows its coordinates.",
    restoreHelp: "Removed positions appear as wireframes. Click one to restore it.",
    moveHelp: "Select a building, then move the whole group one grid unit at a time.",
    position: "Group position",
    moveBuilding: "Move selected / one grid unit",
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
    instruction: "Focus one building, then remove its outer voxels. Every edit can be undone and exported.",
  },
  fr: {
    back: "Retour au projet",
    title: "Éditeur de voxels",
    subtitle: "11 groupes indépendants / données transférables",
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
    move: "Déplacer",
    inspectHelp: "Cliquer pour sélectionner ; glisser dans le vide pour tourner.",
    deleteHelp: "Cliquer sur un voxel pour le supprimer. Le survol affiche ses coordonnées.",
    restoreHelp: "Les voxels supprimés apparaissent en filaire. Cliquer pour les restaurer.",
    moveHelp: "Sélectionner un bâtiment, puis déplacer le groupe d'une unité à la fois.",
    position: "Position du groupe",
    moveBuilding: "Déplacer l'actif / une unité",
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
    instruction: "Cadrez un bâtiment puis supprimez ses voxels extérieurs. Chaque action peut être annulée et exportée.",
  },
} as const;

export function TaikooVoxelEditor() {
  const { locale } = useLanguage();
  const text = copy[locale];
  const [layouts, setLayouts] = useState<PresetLayouts>(createCanonicalLayouts);
  const [activePreset, setActivePreset] = useState<PresetId>("reference");
  const [undoStack, setUndoStack] = useState<LayoutState[]>([]);
  const [redoStack, setRedoStack] = useState<LayoutState[]>([]);
  const [mode, setMode] = useState<EditorMode>("delete");
  const [selectedBuildingId, setSelectedBuildingId] = useState("building-1");
  const [focusSignal, setFocusSignal] = useState(0);
  const [isolate, setIsolate] = useState(false);
  const [hovered, setHovered] = useState<HoveredVoxel>(null);
  const [message, setMessage] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const currentLayout = layouts[activePreset];
  const { deleted, positions } = currentLayout;

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
        if (payload.version === 2 && payload.presets && typeof payload.presets === "object") {
          const storedPresets = payload.presets as Record<string, unknown>;
          const canonical = createCanonicalLayouts();
          setLayouts({
            reference: parseLayout(storedPresets.reference, canonical.reference),
            solid: parseLayout(storedPresets.solid, canonical.solid),
          });
        }
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
        version: 2,
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
    const key = voxelKey(buildingId, cell);
    if (deleted.has(key)) return;
    const nextDeleted = new Set(deleted);
    nextDeleted.add(key);
    commit({ deleted: nextDeleted, positions });
  }

  function restoreVoxel(buildingId: string, cell: VoxelCoordinate) {
    const key = voxelKey(buildingId, cell);
    if (!deleted.has(key)) return;
    const nextDeleted = new Set(deleted);
    nextDeleted.delete(key);
    commit({ deleted: nextDeleted, positions });
  }

  function resetSelected() {
    const baseline = createCanonicalLayout(activePreset);
    const prefix = `${selectedBuildingId}/`;
    const nextDeleted = new Set(
      [...deleted].filter((key) => !key.startsWith(prefix)),
    );
    baseline.deleted.forEach((key) => {
      if (key.startsWith(prefix)) nextDeleted.add(key);
    });
    commit({
      deleted: nextDeleted,
      positions: {
        ...clonePositions(positions),
        [selectedBuildingId]: { ...baseline.positions[selectedBuildingId] },
      },
    });
    setMessage(text.resetDone);
  }

  function resetAll() {
    commit(createCanonicalLayout(activePreset));
    setMessage(text.resetDone);
  }

  function switchPreset(preset: PresetId) {
    setActivePreset(preset);
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
      deleted: new Set(deleted),
      positions: {
        ...clonePositions(positions),
        [selectedBuildingId]: {
          ...current,
          [axis]: current[axis] + amount,
        },
      },
    });
    setMode("move");
    setHovered(null);
  }

  function exportConfiguration() {
    const payload = {
      version: 2,
      project: "taikoo-li-digital-district",
      totalVoxels: VOXEL_TOTAL,
      activePreset,
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
      if (payload.version === 2 && payload.presets && typeof payload.presets === "object") {
        const presets = payload.presets as Record<string, unknown>;
        setLayouts({
          reference: parseLayout(presets.reference, canonical.reference),
          solid: parseLayout(presets.solid, canonical.solid),
        });
      } else {
        const reference = {
          deleted: parseDeleted(payload.deleted),
          positions: parsePositions(payload.positions, canonical.reference.positions),
        };
        setLayouts({ reference, solid: canonical.solid });
      }
      setActivePreset("reference");
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

  return (
    <main className={styles.page}>
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

      <div className={styles.workspace}>
        <aside className={styles.buildingPanel}>
          <div className={styles.panelHeading}>
            <span>{text.buildings}</span>
            <strong>11</strong>
          </div>
          <div className={styles.buildingList}>
            {VOXEL_BUILDINGS.map((building) => {
              const removed = removedByBuilding.get(building.id) ?? 0;
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
                  <em>{building.cells.length - removed}/{building.cells.length}</em>
                </button>
              );
            })}
          </div>
        </aside>

        <section className={styles.stage} data-mode={mode} data-testid="voxel-editor-stage">
          <VoxelEditorModel
            deleted={deleted}
            focusBuildingId={selectedBuildingId}
            focusSignal={focusSignal}
            hovered={hovered}
            isolate={isolate}
            mode={mode}
            onDelete={deleteVoxel}
            onHover={setHovered}
            onRestore={restoreVoxel}
            onSelect={setSelectedBuildingId}
            positions={positions}
            selectedBuildingId={selectedBuildingId}
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

        <aside className={styles.toolPanel}>
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
              <div><dt>{text.remaining}</dt><dd>{selectedBuilding.cells.length - (removedByBuilding.get(selectedBuilding.id) ?? 0)}</dd></div>
              <div><dt>{text.removed}</dt><dd>{removedByBuilding.get(selectedBuilding.id) ?? 0}</dd></div>
            </dl>
          </section>

          <section className={styles.toolSection}>
            <span className={styles.toolLabel}>{text.mode}</span>
            <div className={styles.modeSwitch}>
              <button data-active={mode === "inspect"} onClick={() => setMode("inspect")} type="button">{text.inspect}</button>
              <button data-active={mode === "delete"} onClick={() => setMode("delete")} type="button">{text.delete}</button>
              <button data-active={mode === "restore"} onClick={() => setMode("restore")} type="button">{text.restore}</button>
              <button data-active={mode === "move"} onClick={() => setMode("move")} type="button">{text.move}</button>
            </div>
            <p className={styles.modeHelp}>{modeHelp}</p>
          </section>

          <section className={styles.toolSection}>
            <span className={styles.toolLabel}>{text.position}</span>
            <div className={styles.positionReadout}>
              <span>X<strong>{selectedPosition.x}</strong></span>
              <span>Y<strong>{selectedPosition.y}</strong></span>
              <span>Z<strong>{selectedPosition.z}</strong></span>
            </div>
            <div className={styles.moveHeading}>
              <Move3D aria-hidden="true" size={14} />
              <span>{text.moveBuilding}</span>
            </div>
            <div className={styles.moveGrid}>
              <button aria-label="X 减 1" onClick={() => moveSelected("x", -1)} type="button">X−</button>
              <button aria-label="X 加 1" onClick={() => moveSelected("x", 1)} type="button">X+</button>
              <button aria-label="Y 减 1" onClick={() => moveSelected("y", -1)} type="button">Y−</button>
              <button aria-label="Y 加 1" onClick={() => moveSelected("y", 1)} type="button">Y+</button>
              <button aria-label="Z 减 1" onClick={() => moveSelected("z", -1)} type="button">Z−</button>
              <button aria-label="Z 加 1" onClick={() => moveSelected("z", 1)} type="button">Z+</button>
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
