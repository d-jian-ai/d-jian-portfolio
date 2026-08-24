"use client";

import { Canvas, type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
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

export type HoveredVoxel = {
  buildingId: string;
  cell: VoxelCoordinate;
} | null;

type VoxelEditorModelProps = {
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
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const geometry = useMemo(
    () => new RoundedBoxGeometry(0.92, 0.92, 0.92, 2, 0.045),
    [],
  );

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
          color={building.color}
          depthWrite={false}
          opacity={0.18}
          transparent
          wireframe
        />
      ) : (
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.16}
          color={building.color}
          emissive={selected ? building.color : "#000000"}
          emissiveIntensity={selected ? 0.09 : 0}
          metalness={0.03}
          opacity={selected ? 0.91 : 0.78}
          roughness={0.16}
          transparent
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
  buildingId,
  focusSignal,
  positions,
}: {
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

function Scene(props: VoxelEditorModelProps) {
  useEditorEnvironment();
  const hoveredBuilding = props.hovered
    ? VOXEL_BUILDINGS.find((building) => building.id === props.hovered?.buildingId)
    : null;

  return (
    <>
      <color attach="background" args={["#e8ebea"]} />
      <fog attach="fog" args={["#e8ebea", 42, 78]} />
      <ambientLight intensity={1.1} />
      <directionalLight castShadow intensity={2.2} position={[10, 24, 14]} shadow-mapSize={[2048, 2048]} />
      <directionalLight color="#b7cdfd" intensity={0.75} position={[-14, 10, -8]} />
      <EditorCamera
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
          />
        );
      })}

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

      <gridHelper args={[44, 44, "#9ca2a1", "#c8cdcc"]} position={[0, 0.01, 0]} />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
        <planeGeometry args={[54, 54]} />
        <meshStandardMaterial color="#e6e8e7" roughness={0.82} />
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
