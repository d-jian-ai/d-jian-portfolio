"use client";

import { Canvas, type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { TaikooPortal } from "../taikoo-li-model";
import {
  VOXEL_BUILDINGS,
  type VoxelBuilding,
  type VoxelCoordinate,
  voxelKey,
} from "./voxel-editor-data";

export type EditorMode = "inspect" | "delete" | "restore" | "move";

export type BuildingPosition = {
  x: number;
  y: number;
  z: number;
};

export type BuildingPositions = Record<string, BuildingPosition>;

export type SceneTheme = "original" | "mondrian" | "iridescent" | "vangogh" | "dior";

export type HoveredVoxel = {
  buildingId: string;
  cell: VoxelCoordinate;
} | null;

type VoxelEditorModelProps = {
  autoRotate: boolean;
  deleted: Set<string>;
  focusBuildingId: string;
  focusSignal: number;
  hovered: HoveredVoxel;
  isolate: boolean;
  mode: EditorMode;
  onDelete: (buildingId: string, cell: VoxelCoordinate) => void;
  onHover: (voxel: HoveredVoxel) => void;
  onRestore: (buildingId: string, cell: VoxelCoordinate) => void;
  onSelect: (buildingId: string) => void;
  positions: BuildingPositions;
  selectedBuildingId: string;
  theme: SceneTheme;
};

const THEME_SPECS: Record<SceneTheme, {
  background: string;
  fog: string;
  ground: string;
  gridMajor: string;
  gridMinor: string;
  colors: string[];
}> = {
  original: {
    background: "#e8ebea",
    fog: "#e8ebea",
    ground: "#e6e8e7",
    gridMajor: "#9ca2a1",
    gridMinor: "#c8cdcc",
    colors: [],
  },
  mondrian: {
    background: "#f1f0eb",
    fog: "#f1f0eb",
    ground: "#deded7",
    gridMajor: "#5b5b55",
    gridMinor: "#b8b8ae",
    colors: ["#f7f5ed", "#ef2b24", "#f2c900", "#114cc8", "#20201d"],
  },
  iridescent: {
    background: "#dce9eb",
    fog: "#dce9eb",
    ground: "#bfcfd0",
    gridMajor: "#617a7c",
    gridMinor: "#9fb6b7",
    colors: ["#071a2c", "#40d8d2", "#f0c7a2", "#e6eef1", "#4d2456", "#d89aa9"],
  },
  vangogh: {
    background: "#102a3d",
    fog: "#102a3d",
    ground: "#17394c",
    gridMajor: "#d1c44a",
    gridMinor: "#31576a",
    colors: ["#173e5e", "#216b8c", "#1c5579", "#5c8aa0", "#d6c84c"],
  },
  dior: {
    background: "#9a7148",
    fog: "#9a7148",
    ground: "#7f542d",
    gridMajor: "#e0ba73",
    gridMinor: "#9f7649",
    colors: ["#171311", "#6f421e", "#b77832", "#d7aa64", "#3e2415"],
  },
};

function useEditorEnvironment() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = environment;
    return () => {
      scene.environment = null;
      environment.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
}

function VoxelInstances({
  building,
  cells,
  ghost = false,
  mode,
  onDelete,
  onHover,
  onRestore,
  onSelect,
  selected,
  theme,
}: {
  building: VoxelBuilding;
  cells: VoxelCoordinate[];
  ghost?: boolean;
  mode: EditorMode;
  onDelete: VoxelEditorModelProps["onDelete"];
  onHover: VoxelEditorModelProps["onHover"];
  onRestore: VoxelEditorModelProps["onRestore"];
  onSelect: VoxelEditorModelProps["onSelect"];
  selected: boolean;
  theme: SceneTheme;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const geometry = useMemo(
    () => new RoundedBoxGeometry(0.92, 0.92, 0.92, 2, 0.045),
    [],
  );
  const themeSpec = THEME_SPECS[theme];
  const color = theme === "original"
    ? building.color
    : themeSpec.colors[(building.index - 1) % themeSpec.colors.length];

  useLayoutEffect(() => {
    if (!mesh.current) return;
    const matrix = new THREE.Matrix4();
    cells.forEach((cell, index) => {
      matrix.makeTranslation(cell.x, cell.y + 0.5, cell.z);
      mesh.current?.setMatrixAt(index, matrix);
    });
    mesh.current.count = cells.length;
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.computeBoundingBox();
    mesh.current.computeBoundingSphere();
  }, [cells]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  function cellFromEvent(event: { instanceId?: number }) {
    if (event.instanceId === undefined) return null;
    return cells[event.instanceId] ?? null;
  }

  function handleClick(event: ThreeEvent<MouseEvent>) {
    if (event.button !== 0 || event.delta > 4) return;
    const cell = cellFromEvent(event);
    if (!cell) return;
    event.stopPropagation();
    onSelect(building.id);
    if (ghost && mode === "restore") onRestore(building.id, cell);
    if (!ghost && mode === "delete") onDelete(building.id, cell);
  }

  return (
    <instancedMesh
      args={[geometry, undefined, Math.max(cells.length, 1)]}
      castShadow={!ghost}
      onClick={handleClick}
      onPointerMove={(event) => {
        const cell = cellFromEvent(event);
        if (!cell) return;
        event.stopPropagation();
        onHover({ buildingId: building.id, cell });
      }}
      onPointerOut={() => onHover(null)}
      receiveShadow={!ghost}
      ref={mesh}
    >
      {ghost ? (
        <meshBasicMaterial
          color={color}
          depthWrite={false}
          opacity={0.18}
          transparent
          wireframe
        />
      ) : theme === "vangogh" ? (
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#000000"}
          emissiveIntensity={selected ? 0.08 : 0}
          metalness={0.08}
          roughness={0.58}
        />
      ) : (
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={theme === "iridescent" ? 0.035 : 0.12}
          color={color}
          emissive={selected ? color : "#000000"}
          emissiveIntensity={selected ? 0.09 : 0}
          metalness={theme === "dior" ? 0.48 : theme === "iridescent" ? 0.3 : 0.04}
          opacity={theme === "original" ? (selected ? 0.82 : 0.62) : theme === "iridescent" ? 0.84 : 1}
          roughness={theme === "dior" ? 0.1 : theme === "iridescent" ? 0.055 : 0.2}
          transparent={theme === "original" || theme === "iridescent"}
        />
      )}
    </instancedMesh>
  );
}

function BuildingGroup(props: {
  building: VoxelBuilding;
  deleted: Set<string>;
  mode: EditorMode;
  onDelete: VoxelEditorModelProps["onDelete"];
  onHover: VoxelEditorModelProps["onHover"];
  onRestore: VoxelEditorModelProps["onRestore"];
  onSelect: VoxelEditorModelProps["onSelect"];
  position: BuildingPosition;
  selected: boolean;
  theme: SceneTheme;
}) {
  const { building, deleted, mode, position, selected } = props;
  const activeCells = useMemo(
    () => building.cells.filter((cell) => !deleted.has(voxelKey(building.id, cell))),
    [building, deleted],
  );
  const removedCells = useMemo(
    () => building.cells.filter((cell) => deleted.has(voxelKey(building.id, cell))),
    [building, deleted],
  );
  return (
    <group position={[position.x, position.y, position.z]}>
      <VoxelInstances {...props} cells={activeCells} />
      {selected && mode === "restore" && removedCells.length > 0 ? (
        <VoxelInstances {...props} cells={removedCells} ghost />
      ) : null}
    </group>
  );
}

function EditorCamera({
  autoRotate,
  buildingId,
  focusSignal,
  positions,
}: {
  autoRotate: boolean;
  buildingId: string;
  focusSignal: number;
  positions: BuildingPositions;
}) {
  const { camera, gl } = useThree();
  const controls = useRef<OrbitControls | null>(null);
  const positionsRef = useRef(positions);

  useEffect(() => {
    positionsRef.current = positions;
  }, [positions]);

  useEffect(() => {
    const next = new OrbitControls(camera, gl.domElement);
    next.enableDamping = true;
    next.dampingFactor = 0.07;
    next.enablePan = true;
    next.maxDistance = 64;
    next.maxPolarAngle = Math.PI * 0.49;
    next.minDistance = 5;
    next.target.set(0, 3.4, 0);
    next.update();
    controls.current = next;
    return () => next.dispose();
  }, [camera, gl]);

  useEffect(() => {
    if (!controls.current) return;
    controls.current.autoRotate = autoRotate;
    controls.current.autoRotateSpeed = 0.7;
  }, [autoRotate]);

  useEffect(() => {
    if (!focusSignal || !controls.current) return;
    const building = VOXEL_BUILDINGS.find((item) => item.id === buildingId);
    if (!building) return;
    const minX = Math.min(...building.cells.map((cell) => cell.x));
    const minY = Math.min(...building.cells.map((cell) => cell.y));
    const minZ = Math.min(...building.cells.map((cell) => cell.z));
    const maxX = Math.max(...building.cells.map((cell) => cell.x));
    const maxY = Math.max(...building.cells.map((cell) => cell.y));
    const maxZ = Math.max(...building.cells.map((cell) => cell.z));
    const position = positionsRef.current[building.id] ?? {
      x: building.origin[0],
      y: 0,
      z: building.origin[1],
    };
    const center = new THREE.Vector3(
      position.x + (minX + maxX) / 2,
      position.y + (minY + maxY) / 2 + 0.5,
      position.z + (minZ + maxZ) / 2,
    );
    const radius = Math.max(maxX - minX, maxY - minY, maxZ - minZ) + 4;
    controls.current.target.copy(center);
    camera.position.set(center.x + radius * 0.78, center.y + radius * 0.72, center.z + radius);
    camera.lookAt(center);
    controls.current.update();
  }, [buildingId, camera, focusSignal]);

  useFrame(() => controls.current?.update());
  return null;
}

const TREE_CROWN = [
  { position: [-0.72, 1.92, 0.08] as const, scale: [0.78, 0.7, 0.72] as const },
  { position: [-0.35, 2.38, -0.15] as const, scale: [0.86, 0.78, 0.8] as const },
  { position: [0.18, 2.48, 0.08] as const, scale: [0.92, 0.84, 0.86] as const },
  { position: [0.7, 2.12, -0.02] as const, scale: [0.76, 0.72, 0.72] as const },
  { position: [-0.15, 1.96, 0.44] as const, scale: [0.92, 0.76, 0.78] as const },
  { position: [0.42, 1.82, 0.46] as const, scale: [0.72, 0.66, 0.68] as const },
  { position: [-0.62, 2.0, -0.48] as const, scale: [0.66, 0.62, 0.65] as const },
  { position: [0.48, 2.42, -0.45] as const, scale: [0.72, 0.68, 0.7] as const },
  { position: [0.02, 2.78, -0.12] as const, scale: [0.68, 0.62, 0.66] as const },
];

function OrangeTree({ position }: { position: BuildingPosition }) {
  return (
    <group position={[position.x + 1.5, position.y + 2.02, position.z + 1.5]} scale={0.78}>
      <mesh castShadow position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.17, 0.3, 1.65, 20]} />
        <meshStandardMaterial color="#8b431f" roughness={0.58} />
      </mesh>
      <mesh castShadow position={[-0.25, 1.38, 0]} rotation={[0, 0, -0.52]}>
        <cylinderGeometry args={[0.09, 0.14, 0.95, 14]} />
        <meshStandardMaterial color="#8b431f" roughness={0.58} />
      </mesh>
      <mesh castShadow position={[0.28, 1.35, 0.04]} rotation={[0.08, 0, 0.56]}>
        <cylinderGeometry args={[0.08, 0.13, 0.88, 14]} />
        <meshStandardMaterial color="#8b431f" roughness={0.58} />
      </mesh>
      {TREE_CROWN.map((blob, index) => (
        <mesh castShadow key={index} position={blob.position} scale={blob.scale}>
          <sphereGeometry args={[0.72, 28, 22]} />
          <meshPhysicalMaterial
            clearcoat={0.22}
            color={index % 3 === 0 ? "#ffad1f" : index % 3 === 1 ? "#f89a17" : "#ffb52b"}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function BuildingElevenDecor({
  position,
  theme,
}: {
  position: BuildingPosition;
  theme: SceneTheme;
}) {
  const themeSpec = THEME_SPECS[theme];
  const accentColor = theme === "original" ? undefined : themeSpec.colors[2 % themeSpec.colors.length];
  const edgeColor = theme === "original" ? undefined : themeSpec.colors[3 % themeSpec.colors.length];
  return (
    <>
      <OrangeTree position={position} />
      <group position={[position.x + 1.5, position.y + 0.82, position.z + 1.18]}>
        <TaikooPortal accentColor={accentColor} cameraPreset="far" edgeColor={edgeColor} />
      </group>
    </>
  );
}

function Scene(props: VoxelEditorModelProps) {
  useEditorEnvironment();
  const themeSpec = THEME_SPECS[props.theme];
  const hoveredBuilding = props.hovered
    ? VOXEL_BUILDINGS.find((building) => building.id === props.hovered?.buildingId)
    : null;
  const buildingEleven = VOXEL_BUILDINGS.find((building) => building.id === "building-11");
  const buildingElevenPosition = props.positions["building-11"] ?? {
    x: buildingEleven?.origin[0] ?? -3,
    y: 0,
    z: buildingEleven?.origin[1] ?? 1,
  };

  return (
    <>
      <color attach="background" args={[themeSpec.background]} />
      <fog attach="fog" args={[themeSpec.fog, 42, 78]} />
      <ambientLight intensity={1.1} />
      <directionalLight castShadow intensity={2.2} position={[10, 24, 14]} shadow-mapSize={[2048, 2048]} />
      <directionalLight color="#b7cdfd" intensity={0.75} position={[-14, 10, -8]} />
      <EditorCamera
        autoRotate={props.autoRotate}
        buildingId={props.focusBuildingId}
        focusSignal={props.focusSignal}
        positions={props.positions}
      />

      {VOXEL_BUILDINGS.map((building) => {
        const selected = building.id === props.selectedBuildingId;
        if (props.isolate && !selected) return null;
        return (
          <BuildingGroup
            building={building}
            deleted={props.deleted}
            key={building.id}
            mode={props.mode}
            onDelete={props.onDelete}
            onHover={props.onHover}
            onRestore={props.onRestore}
            onSelect={props.onSelect}
            position={props.positions[building.id] ?? {
              x: building.origin[0],
              y: 0,
              z: building.origin[1],
            }}
            selected={selected}
            theme={props.theme}
          />
        );
      })}

      {(!props.isolate || props.selectedBuildingId === "building-11") ? (
        <BuildingElevenDecor position={buildingElevenPosition} theme={props.theme} />
      ) : null}

      {props.hovered && hoveredBuilding ? (
        <mesh
          position={[
            (props.positions[hoveredBuilding.id]?.x ?? hoveredBuilding.origin[0]) + props.hovered.cell.x,
            (props.positions[hoveredBuilding.id]?.y ?? 0) + props.hovered.cell.y + 0.5,
            (props.positions[hoveredBuilding.id]?.z ?? hoveredBuilding.origin[1]) + props.hovered.cell.z,
          ]}
        >
          <boxGeometry args={[1.03, 1.03, 1.03]} />
          <meshBasicMaterial color="#fff7aa" depthWrite={false} opacity={0.42} transparent wireframe />
        </mesh>
      ) : null}

      <gridHelper args={[44, 44, themeSpec.gridMajor, themeSpec.gridMinor]} position={[0, 0.01, 0]} />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
        <planeGeometry args={[54, 54]} />
        <meshStandardMaterial color={themeSpec.ground} metalness={props.theme === "dior" ? 0.22 : 0} roughness={0.82} />
      </mesh>
    </>
  );
}

export default function VoxelEditorModel(props: VoxelEditorModelProps) {
  return (
    <Canvas
      camera={{ far: 120, fov: 38, near: 0.1, position: [22, 22, 33] }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onPointerMissed={() => props.onHover(null)}
      shadows
    >
      <Scene {...props} />
    </Canvas>
  );
}
