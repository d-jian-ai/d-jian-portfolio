import * as THREE from "three";

export function createFilamentGeometry(
  strands: number,
  samples: number,
  phase: number,
) {
  const segmentCount = strands * (samples - 1);
  const positions = new Float32Array(segmentCount * 2 * 3);
  const phases = new Float32Array(segmentCount * 2);
  const weights = new Float32Array(segmentCount * 2);
  let vertex = 0;

  for (let strand = 0; strand < strands; strand += 1) {
    const lane = (strand / Math.max(1, strands - 1) - 0.5) * 2;
    const strandPhase = phase + hash(strand * 1.91 + phase) * Math.PI * 2;

    for (let sample = 0; sample < samples - 1; sample += 1) {
      const tA = (sample / Math.max(1, samples - 1) - 0.5) * 2;
      const tB = ((sample + 1) / Math.max(1, samples - 1) - 0.5) * 2;

      vertex = writeFilamentVertex(
        positions,
        phases,
        weights,
        vertex,
        tA,
        lane,
        strandPhase,
      );
      vertex = writeFilamentVertex(
        positions,
        phases,
        weights,
        vertex,
        tB,
        lane,
        strandPhase,
      );
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aWeight", new THREE.BufferAttribute(weights, 1));
  return geometry;
}

export function createDustGeometry(count: number) {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const sizes = new Float32Array(count);

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    positions[offset] = (hash(index * 1.31 + 0.7) - 0.5) * 12.4;
    positions[offset + 1] = (hash(index * 2.17 + 3.4) - 0.5) * 7.2;
    positions[offset + 2] = -3.8 + hash(index * 3.73 + 7.1) * 4.8;
    phases[index] = hash(index * 4.91 + 2.2) * Math.PI * 2;
    sizes[index] = 0.7 + hash(index * 5.37 + 8.8) * 1.25;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  return geometry;
}

function writeFilamentVertex(
  positions: Float32Array,
  phases: Float32Array,
  weights: Float32Array,
  vertex: number,
  t: number,
  lane: number,
  phase: number,
) {
  const positionOffset = vertex * 3;
  const edgeFade =
    Math.pow(Math.max(0, Math.sin(((t + 1) * Math.PI) / 2)), 0.34) *
    Math.pow(Math.max(0, Math.sin(((lane + 1) * Math.PI) / 2)), 0.22);

  positions[positionOffset] = t * 5.8 + Math.sin(lane * 2.2 + phase) * 0.18;
  positions[positionOffset + 1] =
    lane * 2.55 +
    Math.sin(t * 2.15 + lane * 1.7 + phase) * 0.18 +
    Math.sin(t * 0.82 + phase * 0.6) * 0.22;
  positions[positionOffset + 2] =
    Math.sin(t * 1.3 + lane * 2.05 + phase) * 0.58 +
    Math.cos(t * 2.7 - lane * 1.35 + phase * 0.4) * 0.17;
  phases[vertex] = phase + t * 0.85 + lane * 0.45;
  weights[vertex] = edgeFade * (0.54 + hash(vertex * 0.37 + phase) * 0.46);
  return vertex + 1;
}

function hash(value: number) {
  return Math.abs(Math.sin(value * 127.1) * 43758.5453) % 1;
}
