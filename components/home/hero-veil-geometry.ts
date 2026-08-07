import * as THREE from "three";

function seededRandom(index: number, salt: number) {
  const value = Math.sin(index * 91.731 + salt * 47.113) * 43758.5453;
  return value - Math.floor(value);
}

export function createVeilPointGeometry(
  count: number,
  width: number,
  height: number,
) {
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);

  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (seededRandom(index, 1) - 0.5) * width;
    positions[index * 3 + 1] = (seededRandom(index, 2) - 0.5) * height;
    positions[index * 3 + 2] = (seededRandom(index, 3) - 0.5) * 0.04;
    seeds[index] = seededRandom(index, 4);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  return geometry;
}

export function createVeilContourGeometry(width: number, height: number) {
  const vertices: number[] = [];
  const seeds: number[] = [];
  const horizontalLines = 8;
  const verticalLines = 4;
  const horizontalSamples = 96;
  const verticalSamples = 64;

  for (let line = 0; line < horizontalLines; line += 1) {
    const y = THREE.MathUtils.lerp(
      -height * 0.48,
      height * 0.48,
      line / (horizontalLines - 1),
    );
    for (let sample = 0; sample < horizontalSamples - 1; sample += 1) {
      const x0 = THREE.MathUtils.lerp(-width * 0.49, width * 0.49, sample / (horizontalSamples - 1));
      const x1 = THREE.MathUtils.lerp(-width * 0.49, width * 0.49, (sample + 1) / (horizontalSamples - 1));
      const y0 = y + Math.sin(x0 * 0.52 + line * 0.78) * 0.13;
      const y1 = y + Math.sin(x1 * 0.52 + line * 0.78) * 0.13;
      vertices.push(x0, y0, 0.018, x1, y1, 0.018);
      seeds.push(line / horizontalLines, line / horizontalLines);
    }
  }

  for (let line = 0; line < verticalLines; line += 1) {
    const x = THREE.MathUtils.lerp(
      -width * 0.47,
      width * 0.47,
      line / (verticalLines - 1),
    );
    for (let sample = 0; sample < verticalSamples - 1; sample += 1) {
      const y0 = THREE.MathUtils.lerp(-height * 0.49, height * 0.49, sample / (verticalSamples - 1));
      const y1 = THREE.MathUtils.lerp(-height * 0.49, height * 0.49, (sample + 1) / (verticalSamples - 1));
      const x0 = x + Math.sin(y0 * 0.46 + line * 0.84) * 0.18;
      const x1 = x + Math.sin(y1 * 0.46 + line * 0.84) * 0.18;
      vertices.push(x0, y0, 0.02, x1, y1, 0.02);
      seeds.push(0.5 + line / verticalLines, 0.5 + line / verticalLines);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  geometry.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));
  return geometry;
}
