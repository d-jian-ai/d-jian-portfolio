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

export type EditorMode = "inspect" | "delete" | "restore" | "place" | "move";

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
  added: Set<string>;
  autoRotate: boolean;
  deleted: Set<string>;
  focusBuildingId: string;
  focusSignal: number;
  hovered: HoveredVoxel;
  isolate: boolean;
  mode: EditorMode;
  onDelete: (buildingId: string, cell: VoxelCoordinate) => void;
  onHover: (voxel: HoveredVoxel) => void;
  onPlace: (buildingId: string, cell: VoxelCoordinate) => void;
  onRestore: (buildingId: string, cell: VoxelCoordinate) => void;
  onSelect: (buildingId: string) => void;
  positions: BuildingPositions;
  presentationMode: boolean;
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
    background: "#f5f6f4",
    fog: "#f5f6f4",
    ground: "#eceeeb",
    gridMajor: "#9ba4a2",
    gridMinor: "#d4d9d7",
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
    const previousIntensity = scene.environmentIntensity;
    scene.environment = environment;
    scene.environmentIntensity = 1.3;
    return () => {
      scene.environment = null;
      scene.environmentIntensity = previousIntensity;
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
  onPlace,
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
  onPlace: VoxelEditorModelProps["onPlace"];
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
    if (!ghost && mode === "place" && event.face) {
      const normal = event.face.normal;
      const axes = [
        { axis: "x" as const, value: normal.x },
        { axis: "y" as const, value: normal.y },
        { axis: "z" as const, value: normal.z },
      ];
      const dominant = axes.reduce((best, candidate) => (
        Math.abs(candidate.value) > Math.abs(best.value) ? candidate : best
      ));
      onPlace(building.id, {
        ...cell,
        [dominant.axis]: cell[dominant.axis] + Math.sign(dominant.value),
      });
    }
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
          attenuationColor={theme === "original" ? color : "#ffffff"}
          attenuationDistance={theme === "original" ? 0.72 : Infinity}
          clearcoat={1}
          clearcoatRoughness={theme === "iridescent" ? 0.035 : theme === "original" ? 0.07 : 0.12}
          color={color}
          emissive={selected ? color : "#000000"}
          emissiveIntensity={selected ? 0.035 : 0}
          envMapIntensity={theme === "original" ? 1.8 : 1.2}
          ior={theme === "original" ? 1.47 : 1.5}
          metalness={theme === "dior" ? 0.48 : theme === "iridescent" ? 0.3 : theme === "original" ? 0.06 : 0.02}
          opacity={theme === "iridescent" ? 0.9 : 1}
          roughness={theme === "dior" ? 0.1 : theme === "iridescent" ? 0.055 : theme === "original" ? 0.14 : 0.2}
          specularIntensity={theme === "original" ? 1 : 0.72}
          thickness={theme === "original" ? 0.45 : 0.22}
          transmission={theme === "original" ? 0.42 : theme === "iridescent" ? 0.08 : 0}
          transparent={theme === "iridescent"}
        />
      )}
    </instancedMesh>
  );
}

function BuildingGroup(props: {
  added: Set<string>;
  building: VoxelBuilding;
  deleted: Set<string>;
  mode: EditorMode;
  onDelete: VoxelEditorModelProps["onDelete"];
  onHover: VoxelEditorModelProps["onHover"];
  onPlace: VoxelEditorModelProps["onPlace"];
  onRestore: VoxelEditorModelProps["onRestore"];
  onSelect: VoxelEditorModelProps["onSelect"];
  position: BuildingPosition;
  selected: boolean;
  theme: SceneTheme;
}) {
  const { added, building, deleted, mode, position, selected } = props;
  const addedCells = useMemo(
    () => [...added]
      .filter((key) => key.startsWith(`${building.id}/`))
      .map((key) => {
        const [, x, y, z] = key.split("/");
        return { x: Number(x), y: Number(y), z: Number(z) };
      }),
    [added, building.id],
  );
  const activeCells = useMemo(
    () => [
      ...building.cells.filter((cell) => !deleted.has(voxelKey(building.id, cell))),
      ...addedCells,
    ],
    [addedCells, building, deleted],
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
  presentationMode,
  positions,
}: {
  autoRotate: boolean;
  buildingId: string;
  focusSignal: number;
  presentationMode: boolean;
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
    if (presentationMode) camera.position.set(0, 16.5, 34);
    next.target.set(0, presentationMode ? 4 : 3.4, 0);
    next.update();
    controls.current = next;
    return () => next.dispose();
  }, [camera, gl, presentationMode]);

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
  { position: [-0.92, 2.42, 0.08] as const, scale: [0.92, 0.86, 0.9] as const },
  { position: [-0.58, 2.93, -0.28] as const, scale: [1.02, 0.94, 0.96] as const },
  { position: [-0.1, 3.18, 0.04] as const, scale: [1.08, 1.02, 1.04] as const },
  { position: [0.48, 3.0, -0.18] as const, scale: [0.98, 0.96, 0.94] as const },
  { position: [0.92, 2.48, 0.02] as const, scale: [0.86, 0.82, 0.86] as const },
  { position: [-0.54, 2.4, 0.62] as const, scale: [1.04, 0.88, 0.92] as const },
  { position: [0.05, 2.58, 0.68] as const, scale: [1.08, 0.9, 0.96] as const },
  { position: [0.62, 2.42, 0.56] as const, scale: [0.9, 0.84, 0.88] as const },
  { position: [-0.94, 2.5, -0.58] as const, scale: [0.82, 0.78, 0.82] as const },
  { position: [0.04, 2.55, -0.68] as const, scale: [0.98, 0.88, 0.94] as const },
  { position: [0.82, 2.62, -0.54] as const, scale: [0.78, 0.76, 0.8] as const },
  { position: [-0.32, 3.55, -0.18] as const, scale: [0.84, 0.8, 0.82] as const },
  { position: [0.35, 3.48, 0.22] as const, scale: [0.8, 0.76, 0.8] as const },
];

const TREE_BRANCHES = [
  { from: [0, 0, 0] as const, to: [0.08, 2.28, 0] as const, start: 0.34, end: 0.19 },
  { from: [0.03, 1.22, 0] as const, to: [-0.72, 2.48, 0.08] as const, start: 0.17, end: 0.09 },
  { from: [0.06, 1.42, 0] as const, to: [0.68, 2.58, -0.16] as const, start: 0.16, end: 0.08 },
  { from: [0.06, 1.68, -0.02] as const, to: [-0.2, 2.9, -0.48] as const, start: 0.14, end: 0.075 },
  { from: [0.05, 1.62, 0.02] as const, to: [0.22, 2.78, 0.5] as const, start: 0.14, end: 0.075 },
];

const GARDEN_STONES = [
  [-0.08, 0.18, 1.48] as const,
  [0.1, 0.2, 1.08] as const,
  [-0.04, 0.19, 0.68] as const,
  [0.08, 0.2, 0.3] as const,
];

const GARDEN_SHRUBS = [
  [-1.18, 0.3, -0.92, 0.42] as const,
  [1.18, 0.29, -0.88, 0.38] as const,
  [-1.28, 0.28, 0.92, 0.34] as const,
  [1.25, 0.27, 0.88, 0.32] as const,
];

function TreeBranch({
  endRadius,
  from,
  startRadius,
  to,
}: {
  endRadius: number;
  from: readonly [number, number, number];
  startRadius: number;
  to: readonly [number, number, number];
}) {
  const branch = useMemo(() => {
    const start = new THREE.Vector3(...from);
    const finish = new THREE.Vector3(...to);
    const direction = finish.clone().sub(start);
    const geometry = new THREE.CylinderGeometry(endRadius, startRadius, direction.length(), 24, 2);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize(),
    );
    return {
      geometry,
      position: start.clone().add(finish).multiplyScalar(0.5),
      quaternion,
    };
  }, [endRadius, from, startRadius, to]);

  return (
    <mesh castShadow geometry={branch.geometry} position={branch.position} quaternion={branch.quaternion}>
      <meshStandardMaterial color="#82411f" roughness={0.68} />
    </mesh>
  );
}

function CrownBlob({
  color,
  position,
  scale,
}: {
  color: string;
  position: readonly [number, number, number];
  scale: readonly [number, number, number];
}) {
  return (
    <mesh castShadow position={position} scale={scale}>
      <sphereGeometry args={[0.78, 36, 28]} />
      <meshPhysicalMaterial
        clearcoat={0.3}
        clearcoatRoughness={0.28}
        color={color}
        roughness={0.46}
      />
    </mesh>
  );
}

function OrangeTree() {
  return (
    <group position={[0, 0.14, -0.1]} scale={1.05}>
      {TREE_BRANCHES.map((branch, index) => (
        <TreeBranch
          endRadius={branch.end}
          from={branch.from}
          key={index}
          startRadius={branch.start}
          to={branch.to}
        />
      ))}
      {TREE_CROWN.map((blob, index) => (
        <CrownBlob
          color={index % 4 === 0 ? "#ffb52d" : index % 4 === 1 ? "#f89b1c" : index % 4 === 2 ? "#ffbf3c" : "#f5a01f"}
          key={index}
          position={blob.position}
          scale={blob.scale}
        />
      ))}
      {[-0.42, 0.02, 0.46].map((x, index) => (
        <mesh
          castShadow
          key={x}
          position={[x, 0.12, index === 1 ? 0.18 : -0.02]}
          rotation={[Math.PI / 2, index * 1.8, 0]}
        >
          <cylinderGeometry args={[0.05, 0.17, 0.85, 16]} />
          <meshStandardMaterial color="#733817" roughness={0.72} />
        </mesh>
      ))}
    </group>
  );
}

function RooftopGarden({ position }: { position: BuildingPosition }) {
  return (
    <group position={[position.x + 1.5, position.y + 2.02, position.z + 1.5]}>
      <mesh castShadow receiveShadow position={[0, 0.08, 0]}>
        <cylinderGeometry args={[1.86, 1.9, 0.16, 64]} />
        <meshStandardMaterial color="#8b9b58" roughness={0.82} />
      </mesh>
      <mesh position={[0, 0.17, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.76, 0.045, 12, 96]} />
        <meshStandardMaterial color="#d9c48f" roughness={0.72} />
      </mesh>
      {GARDEN_STONES.map((stone, index) => (
        <mesh
          castShadow
          key={index}
          position={stone}
          rotation={[0, index * 0.42, 0]}
          scale={[0.28, 0.075, 0.2]}
        >
          <sphereGeometry args={[1, 24, 14]} />
          <meshStandardMaterial color={index % 2 ? "#efe4c7" : "#d9ccb0"} roughness={0.78} />
        </mesh>
      ))}
      {GARDEN_SHRUBS.map(([x, y, z, size], index) => (
        <group key={index} position={[x, y, z]}>
          <mesh castShadow scale={[size, size * 0.72, size]}>
            <sphereGeometry args={[1, 24, 18]} />
            <meshStandardMaterial color={index % 2 ? "#4f7046" : "#68804b"} roughness={0.78} />
          </mesh>
          <mesh castShadow position={[size * 0.44, size * 0.08, size * 0.16]} scale={size * 0.58}>
            <sphereGeometry args={[1, 20, 14]} />
            <meshStandardMaterial color={index % 2 ? "#e89635" : "#f1b34b"} roughness={0.72} />
          </mesh>
        </group>
      ))}
      <OrangeTree />
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
      <RooftopGarden position={position} />
      <group position={[position.x + 1.5, position.y + 4.5, position.z + 1.18]}>
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
      {props.theme === "original" ? null : <fog attach="fog" args={[themeSpec.fog, 52, 102]} />}
      <ambientLight intensity={props.theme === "original" ? 0.12 : 0.62} />
      <hemisphereLight color="#fffdf7" groundColor="#56615f" intensity={props.theme === "original" ? 0.3 : 0.74} />
      <directionalLight
        castShadow
        color="#fff1df"
        intensity={props.theme === "original" ? 2.45 : 2.35}
        position={[12, 25, 16]}
        shadow-bias={-0.00035}
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight color="#7898ff" intensity={props.theme === "original" ? 0.5 : 0.7} position={[-16, 12, -10]} />
      <EditorCamera
        autoRotate={props.autoRotate}
        buildingId={props.focusBuildingId}
        focusSignal={props.focusSignal}
        presentationMode={props.presentationMode}
        positions={props.positions}
      />

      {VOXEL_BUILDINGS.map((building) => {
        const selected = building.id === props.selectedBuildingId;
        if (props.isolate && !selected) return null;
        return (
          <BuildingGroup
            added={props.added}
            building={building}
            deleted={props.deleted}
            key={building.id}
            mode={props.mode}
            onDelete={props.onDelete}
            onHover={props.onHover}
            onPlace={props.onPlace}
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

      {props.presentationMode ? null : (
        <gridHelper args={[44, 44, themeSpec.gridMajor, themeSpec.gridMinor]} position={[0, 0.01, 0]} />
      )}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
        <planeGeometry args={[54, 54]} />
        <meshStandardMaterial
          color={themeSpec.ground}
          metalness={props.theme === "dior" ? 0.22 : props.theme === "original" ? 0.08 : 0}
          roughness={props.theme === "original" ? 0.4 : 0.82}
        />
      </mesh>
    </>
  );
}

export default function VoxelEditorModel(props: VoxelEditorModelProps) {
  return (
    <Canvas
      camera={{ far: 120, fov: 38, near: 0.1, position: [22, 22, 33] }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 0.9;
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
      onPointerMissed={() => props.onHover(null)}
      shadows
    >
      <Scene {...props} />
    </Canvas>
  );
}
