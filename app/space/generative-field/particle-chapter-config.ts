export type ParticleChapterDynamics = {
  amplitude: number;
  cameraDamping: number;
  cameraEnergyDolly: number;
  cameraFov: number;
  cameraLook: readonly [number, number, number];
  cameraOrbit: readonly [number, number, number];
  cameraPointer: readonly [number, number, number];
  cameraPosition: readonly [number, number, number];
  cameraSpeed: number;
  depthResponse: number;
  desktopOffset: readonly [number, number];
  desktopScale: number;
  energyDecay: number;
  interaction: number;
  mobileOffset: readonly [number, number];
  mobileScale: number;
  motion: number;
  particleRatio: number;
  pointerRadius: number;
  pressAttack: number;
  pressRelease: number;
  transitionSeconds: number;
};

export const PARTICLE_CHAPTER_DYNAMICS: readonly ParticleChapterDynamics[] = [
  {
    amplitude: 0.56,
    cameraDamping: 1.35,
    cameraEnergyDolly: -0.55,
    cameraFov: 53,
    cameraLook: [0, -1.8, -3.1],
    cameraOrbit: [3.6, 0.86, 2.1],
    cameraPointer: [0.24, 0.1, 0.14],
    cameraPosition: [1, 8.2, 18.2],
    cameraSpeed: 0.058,
    depthResponse: 1.42,
    desktopOffset: [0, -0.28],
    desktopScale: 1.08,
    energyDecay: 1.35,
    interaction: 1.12,
    mobileOffset: [0, 0.34],
    mobileScale: 0.84,
    motion: 0.68,
    particleRatio: 0.86,
    pointerRadius: 0.68,
    pressAttack: 5.8,
    pressRelease: 2.2,
    transitionSeconds: 1.05,
  },
  {
    amplitude: 0.3,
    cameraDamping: 1.5,
    cameraEnergyDolly: -0.8,
    cameraFov: 52,
    cameraLook: [0, 0, -0.3],
    cameraOrbit: [4.2, 2.1, 2.2],
    cameraPointer: [0.46, 0.34, 0.28],
    cameraPosition: [0.4, 0.55, 9.8],
    cameraSpeed: 0.11,
    depthResponse: 1.9,
    desktopOffset: [0, 0],
    desktopScale: 1.26,
    energyDecay: 0.75,
    interaction: 1.88,
    mobileOffset: [0, 0.28],
    mobileScale: 0.9,
    motion: 0.48,
    particleRatio: 0.66,
    pointerRadius: 1.18,
    pressAttack: 7,
    pressRelease: 1.5,
    transitionSeconds: 1.2,
  },
  {
    amplitude: 0.18,
    cameraDamping: 1.72,
    cameraEnergyDolly: -0.35,
    cameraFov: 58,
    cameraLook: [0, -1.32, -5.4],
    cameraOrbit: [3.4, 0.38, 1.7],
    cameraPointer: [0.38, 0.12, 0.22],
    cameraPosition: [0, 2.55, 11.8],
    cameraSpeed: 0.135,
    depthResponse: 1.16,
    desktopOffset: [0, -0.18],
    desktopScale: 1.12,
    energyDecay: 0.95,
    interaction: 1.68,
    mobileOffset: [0, 0.1],
    mobileScale: 0.88,
    motion: 1.34,
    particleRatio: 0.78,
    pointerRadius: 0.62,
    pressAttack: 4.8,
    pressRelease: 1.8,
    transitionSeconds: 1.1,
  },
  {
    amplitude: 0.12,
    cameraDamping: 1.48,
    cameraEnergyDolly: -0.24,
    cameraFov: 60,
    cameraLook: [0, -1.5, -3.7],
    cameraOrbit: [3.8, 0.52, 1.8],
    cameraPointer: [0.34, 0.16, 0.16],
    cameraPosition: [0.2, 1.4, 9.6],
    cameraSpeed: 0.09,
    depthResponse: 0.68,
    desktopOffset: [0, -0.26],
    desktopScale: 1.22,
    energyDecay: 1.7,
    interaction: 1.48,
    mobileOffset: [0, -0.02],
    mobileScale: 1.02,
    motion: 1.04,
    particleRatio: 0.74,
    pointerRadius: 0.74,
    pressAttack: 8,
    pressRelease: 2.8,
    transitionSeconds: 0.95,
  },
  {
    amplitude: 0.38,
    cameraDamping: 1.2,
    cameraEnergyDolly: -1.2,
    cameraFov: 54,
    cameraLook: [0, 0.1, -0.4],
    cameraOrbit: [3.8, 2.1, 2.2],
    cameraPointer: [0.42, 0.34, 0.55],
    cameraPosition: [0.3, 0.8, 10.1],
    cameraSpeed: 0.068,
    depthResponse: 2.28,
    desktopOffset: [0, -0.02],
    desktopScale: 1.18,
    energyDecay: 0.62,
    interaction: 1.16,
    mobileOffset: [0, 0.12],
    mobileScale: 0.9,
    motion: 0.84,
    particleRatio: 0.62,
    pointerRadius: 0.58,
    pressAttack: 3.8,
    pressRelease: 1.1,
    transitionSeconds: 1.35,
  },
  {
    amplitude: 0.16,
    cameraDamping: 1.34,
    cameraEnergyDolly: -0.9,
    cameraFov: 54,
    cameraLook: [0, 0, 0],
    cameraOrbit: [3.8, 2.1, 1.7],
    cameraPointer: [0.4, 0.34, 0.46],
    cameraPosition: [0.6, 1.3, 10.5],
    cameraSpeed: 0.08,
    depthResponse: 1.76,
    desktopOffset: [0, 0],
    desktopScale: 1.18,
    energyDecay: 0.8,
    interaction: 1.72,
    mobileOffset: [0, 0.04],
    mobileScale: 0.78,
    motion: 1.08,
    particleRatio: 0.56,
    pointerRadius: 0.72,
    pressAttack: 6,
    pressRelease: 1.4,
    transitionSeconds: 1.25,
  },
] as const;

export const PARTICLE_FIELD_PERFORMANCE = {
  desktop: 36000,
  mobile: 18000,
  reducedMotion: 12000,
} as const;
