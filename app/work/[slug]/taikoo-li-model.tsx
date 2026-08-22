"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  REFERENCE_CAMERA,
  SIGN_PLACEMENTS,
  TAIKOO_UNIT,
  TAIKOO_VOXELS,
  type SignKind,
  type Voxel,
  type VoxelPalette,
} from "./taikoo-li-scene-data";

type TaikooLiModelProps = {
  autoRotate: boolean;
  resetSignal: number;
};

type IconNode = Array<
  [
    "path" | "circle" | "line",
    Record<string, string>,
  ]
>;

const ICONS: Record<SignKind, IconNode> = {
  help: [
    ["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }],
  ],
  parking: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }],
  ],
  profile: [
    ["path", { d: "M17.925 20.056a6 6 0 0 0-11.851.001" }],
    ["circle", { cx: "12", cy: "11", r: "4" }],
    ["circle", { cx: "12", cy: "12", r: "10" }],
  ],
  fastForward: [
    ["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" }],
    ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" }],
  ],
  login: [
    ["path", { d: "m10 17 5-5-5-5" }],
    ["path", { d: "M15 12H3" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }],
  ],
  recycle: [
    ["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }],
    ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }],
    ["path", { d: "m14 16-3 3 3 3" }],
    ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }],
    ["path", { d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" }],
    ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }],
  ],
  sparkles: [
    ["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }],
    ["path", { d: "M20 2v4" }],
    ["path", { d: "M22 4h-4" }],
    ["circle", { cx: "4", cy: "20", r: "2" }],
  ],
  scan: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
    ["path", { d: "M9 9h.01" }],
    ["path", { d: "M15 9h.01" }],
  ],
};

const PALETTES: Record<VoxelPalette, { base: string; light: string }> = {
  red: { base: "#a6001c", light: "#ed1635" },
  blue: { base: "#151eac", light: "#4d50df" },
  cyan: { base: "#007f99", light: "#18b8c8" },
  taupe: { base: "#8f7563", light: "#c6ad98" },
  bronze: { base: "#5e483d", light: "#8d7261" },
};

function RoundedVoxelGroup({ cells, palette }: { cells: Voxel[]; palette: VoxelPalette }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const geometry = useMemo(
    () => new RoundedBoxGeometry(TAIKOO_UNIT * 0.92, TAIKOO_UNIT * 0.92, TAIKOO_UNIT * 0.92, 2, 0.028),
    [],
  );

  useLayoutEffect(() => {
    if (!mesh.current) return;

    const matrix = new THREE.Matrix4();
    const base = new THREE.Color(PALETTES[palette].base);
    const light = new THREE.Color(PALETTES[palette].light);

    cells.forEach((cell, index) => {
      matrix.makeTranslation(cell.x, cell.y, cell.z);
      mesh.current?.setMatrixAt(index, matrix);
      mesh.current?.setColorAt(index, base.clone().lerp(light, cell.shade * 0.56));
    });

    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  }, [cells, palette]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <instancedMesh castShadow receiveShadow args={[geometry, undefined, cells.length]} ref={mesh}>
      <meshPhysicalMaterial
        color={PALETTES[palette].base}
        clearcoat={1}
        clearcoatRoughness={0.12}
        emissive={PALETTES[palette].base}
        emissiveIntensity={0.035}
        envMapIntensity={1.72}
        metalness={0.02}
        opacity={palette === "taupe" || palette === "bronze" ? 0.74 : 0.69}
        roughness={0.12}
        side={THREE.DoubleSide}
        transparent
        transmission={0.09}
      />
    </instancedMesh>
  );
}

function useIconTexture(kind: SignKind) {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, 256, 256);
    context.strokeStyle = "#fff8dd";
    context.fillStyle = "#fff8dd";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 2.15;
    context.save();
    context.translate(28, 28);
    context.scale(200 / 24, 200 / 24);

    ICONS[kind].forEach(([element, attributes]) => {
      context.beginPath();
      if (element === "path") {
        const path = new Path2D(attributes.d);
        context.stroke(path);
        return;
      }
      if (element === "circle") {
        context.arc(Number(attributes.cx), Number(attributes.cy), Number(attributes.r), 0, Math.PI * 2);
        context.stroke();
        return;
      }
      context.moveTo(Number(attributes.x1), Number(attributes.y1));
      context.lineTo(Number(attributes.x2), Number(attributes.y2));
      context.stroke();
    });
    context.restore();

    const nextTexture = new THREE.CanvasTexture(canvas);
    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.anisotropy = 8;
    setTexture(nextTexture);

    return () => nextTexture.dispose();
  }, [kind]);

  return texture;
}

function BuildingSign({ kind, position, rotation = [0, 0, 0], scale = 0.7 }: (typeof SIGN_PLACEMENTS)[number]) {
  const texture = useIconTexture(kind);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[1, 1, 0.095]} />
        <meshPhysicalMaterial color="#11100f" clearcoat={1} metalness={0.36} roughness={0.18} />
      </mesh>
      {texture && (
        <mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[0.76, 0.76]} />
          <meshBasicMaterial alphaTest={0.08} map={texture} transparent />
        </mesh>
      )}
    </group>
  );
}

function useCircularTextTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, 1024, 1024);
    context.fillStyle = "rgba(43,160,176,0.94)";
    context.beginPath();
    context.arc(512, 512, 465, 0, Math.PI * 2);
    context.arc(512, 512, 338, 0, Math.PI * 2, true);
    context.fill();

    const text = "LET'S FASHION FORWARD  •  LET'S FASHION FORWARD  •  ";
    context.font = "600 45px Arial, sans-serif";
    context.fillStyle = "rgba(255,255,255,0.94)";
    context.textAlign = "center";
    context.textBaseline = "middle";
    const radius = 405;
    const step = (Math.PI * 2) / text.length;

    [...text].forEach((character, index) => {
      const angle = index * step - Math.PI / 2;
      context.save();
      context.translate(512 + Math.cos(angle) * radius, 512 + Math.sin(angle) * radius);
      context.rotate(angle + Math.PI / 2);
      context.fillText(character, 0, 0);
      context.restore();
    });

    const nextTexture = new THREE.CanvasTexture(canvas);
    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.anisotropy = 12;
    setTexture(nextTexture);
    return () => nextTexture.dispose();
  }, []);

  return texture;
}

function TriangleFrame({ x }: { x: number }) {
  const shape = useMemo(() => {
    const outer = new THREE.Shape();
    outer.moveTo(-0.68, -0.6);
    outer.lineTo(0.5, 0);
    outer.lineTo(-0.68, 0.6);
    outer.closePath();

    const hole = new THREE.Path();
    hole.moveTo(-0.42, -0.34);
    hole.lineTo(0.23, 0);
    hole.lineTo(-0.42, 0.34);
    hole.closePath();
    outer.holes.push(hole);
    return outer;
  }, []);

  return (
    <mesh position={[x, 0, 0]}>
      <extrudeGeometry args={[shape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 3 }]} />
      <meshPhysicalMaterial color="#ffe789" emissive="#9d6500" emissiveIntensity={0.35} metalness={0.72} roughness={0.18} />
    </mesh>
  );
}

function Portal() {
  const group = useRef<THREE.Group>(null);
  const ringTexture = useCircularTextTexture();

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = 4.72 + Math.sin(state.clock.elapsedTime * 0.75) * 0.08;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.06;
  });

  return (
    <group position={[0, 4.72, 1.12]} ref={group}>
      <mesh castShadow scale={[1.82, 0.96, 1.28]}>
        <sphereGeometry args={[1, 64, 48]} />
        <meshPhysicalMaterial
          color="#bca8e4"
          clearcoat={1}
          envMapIntensity={2.2}
          opacity={0.46}
          roughness={0.08}
          thickness={0.8}
          transparent
          transmission={0.66}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.52, 2.18, 128]} />
        <meshPhysicalMaterial
          color="#ffffff"
          map={ringTexture ?? undefined}
          opacity={0.86}
          roughness={0.2}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.82, 0.055, 16, 128]} />
        <meshPhysicalMaterial color="#d7fbff" clearcoat={1} opacity={0.72} roughness={0.12} transparent />
      </mesh>
      <group position={[-0.15, 0.12, 0.94]} rotation={[0.02, 0, 0]} scale={0.65}>
        <TriangleFrame x={-0.38} />
        <TriangleFrame x={0.38} />
      </group>
    </group>
  );
}

function ChromeSculpture() {
  const mesh = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const next = new THREE.SphereGeometry(1, 72, 52);
    const position = next.attributes.position;
    const point = new THREE.Vector3();

    for (let index = 0; index < position.count; index += 1) {
      point.fromBufferAttribute(position, index);
      const theta = Math.atan2(point.z, point.x);
      const phi = Math.acos(THREE.MathUtils.clamp(point.y, -1, 1));
      const ripple = 1 + Math.sin(theta * 5 + phi * 2.2) * 0.13 + Math.sin(phi * 7 - theta * 2) * 0.085;
      point.multiplyScalar(ripple);
      const twist = point.y * 0.38;
      const x = point.x * Math.cos(twist) - point.z * Math.sin(twist);
      const z = point.x * Math.sin(twist) + point.z * Math.cos(twist);
      point.set(x * 0.82, point.y * 1.14, z * 0.78);
      position.setXYZ(index, point.x, point.y, point.z);
    }

    next.computeVertexNormals();
    return next;
  }, []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.position.y = 2.18 + Math.sin(state.clock.elapsedTime * 1.05) * 0.055;
  });

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh castShadow geometry={geometry} position={[0, 2.18, 4.15]} ref={mesh} scale={0.82}>
      <meshPhysicalMaterial color="#f6f4f2" envMapIntensity={2.8} metalness={1} roughness={0.065} />
    </mesh>
  );
}

function CameraRig({ autoRotate, resetSignal }: TaikooLiModelProps) {
  const { camera, gl, size } = useThree();
  const controls = useRef<OrbitControls | null>(null);

  const cameraPosition = useMemo<[number, number, number]>(
    () => (size.width / size.height < 0.7 ? [4.6, 14.4, 37] : [5.2, 11.4, 23.8]),
    [size.height, size.width],
  );

  useEffect(() => {
    const nextControls = new OrbitControls(camera, gl.domElement);
    nextControls.enableDamping = true;
    nextControls.dampingFactor = 0.055;
    nextControls.enablePan = false;
    nextControls.minDistance = 9;
    nextControls.maxDistance = 31;
    nextControls.maxPolarAngle = Math.PI * 0.48;
    nextControls.target.fromArray(REFERENCE_CAMERA.target);
    nextControls.update();
    controls.current = nextControls;
    return () => nextControls.dispose();
  }, [camera, gl]);

  useEffect(() => {
    camera.position.fromArray(cameraPosition);
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = REFERENCE_CAMERA.fov;
      camera.updateProjectionMatrix();
    }
    controls.current?.target.fromArray(REFERENCE_CAMERA.target);
    controls.current?.update();
  }, [camera, cameraPosition, resetSignal]);

  useFrame(() => {
    if (!controls.current) return;
    controls.current.autoRotate = autoRotate;
    controls.current.autoRotateSpeed = 0.34;
    controls.current.update();
  });

  return null;
}

function Environment() {
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

  return null;
}

function CityScene(props: TaikooLiModelProps) {
  return (
    <>
      <color attach="background" args={["#e9ecef"]} />
      <fog attach="fog" args={["#e9ecef", 42, 68]} />
      <ambientLight intensity={0.9} />
      <directionalLight castShadow intensity={2.5} position={[7, 15, 12]} shadow-bias={-0.0004} shadow-mapSize={[2048, 2048]} />
      <directionalLight color="#b9d7ff" intensity={0.9} position={[-9, 8, -5]} />
      <Environment />
      <CameraRig {...props} />

      <group position={[0, 0, -0.45]}>
        {(Object.keys(TAIKOO_VOXELS) as VoxelPalette[]).map((palette) => (
          <RoundedVoxelGroup cells={TAIKOO_VOXELS[palette]} key={palette} palette={palette} />
        ))}
        {SIGN_PLACEMENTS.map((sign) => (
          <BuildingSign {...sign} key={`${sign.kind}-${sign.position.join("-")}`} />
        ))}
        <Portal />
        <ChromeSculpture />
      </group>

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[36, 42]} />
        <meshStandardMaterial color="#e7e9e9" metalness={0.03} roughness={0.62} />
      </mesh>
      <gridHelper args={[30, 48, "#c8cccd", "#d9dcdd"]} position={[0, 0.005, 0]} />
    </>
  );
}

export default function TaikooLiModel(props: TaikooLiModelProps) {
  return (
    <Canvas
      camera={{ fov: REFERENCE_CAMERA.fov, near: 0.1, far: 90, position: REFERENCE_CAMERA.position }}
      dpr={[1, 1.65]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      shadows
    >
      <CityScene {...props} />
    </Canvas>
  );
}
