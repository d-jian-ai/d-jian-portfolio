export const filamentVertexShader = /* glsl */ `
  attribute float aPhase;
  attribute float aWeight;

  uniform float uPointerDepth;
  uniform float uPointerFalloff;
  uniform float uScroll;
  uniform float uScrollDepth;
  uniform float uScrollShift;
  uniform float uSpeed;
  uniform float uTime;
  uniform vec2 uPointer;
  uniform vec2 uPointerScale;

  varying float vDepth;
  varying float vLight;
  varying float vPhase;
  varying float vWeight;

  void main() {
    vec3 transformed = position;
    float time = uTime * uSpeed;
    float longWave = sin(transformed.x * 0.48 + aPhase + time);
    float crossWave = cos(transformed.y * 0.76 - aPhase * 0.71 - time * 0.68);
    float detail = sin((transformed.x + transformed.y) * 1.16 + aPhase * 1.37 + time * 0.42);

    transformed.x += crossWave * 0.055;
    transformed.y += longWave * 0.15 + detail * 0.035;
    transformed.z += longWave * 0.24 + crossWave * 0.12 + detail * 0.035;

    vec2 pointerPosition = uPointer * uPointerScale;
    vec2 pointerDelta = transformed.xy - pointerPosition;
    float influence = exp(-dot(pointerDelta, pointerDelta) * uPointerFalloff);
    transformed.z += influence * uPointerDepth;
    transformed.xy += normalize(pointerDelta + vec2(0.0001)) * influence * 0.045;

    transformed.y += uScroll * uScrollShift;
    transformed.z -= uScroll * uScrollDepth;

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    vDepth = smoothstep(10.5, 2.2, -viewPosition.z);
    vLight = 0.5 + 0.5 * sin(aPhase + transformed.x * 0.34 - transformed.y * 0.22 + time);
    vPhase = fract(aPhase * 0.159 + uTime * 0.0035);
    vWeight = aWeight;
  }
`;

export const filamentFragmentShader = /* glsl */ `
  uniform vec3 uAccent;
  uniform vec3 uBase;
  uniform vec3 uHighlight;
  uniform float uOpacity;

  varying float vDepth;
  varying float vLight;
  varying float vPhase;
  varying float vWeight;

  void main() {
    vec3 coolColor = mix(uBase, uHighlight, smoothstep(0.18, 0.9, vLight));
    float warmth = smoothstep(0.68, 0.98, sin(vPhase * 6.28318) * 0.5 + 0.5);
    vec3 color = mix(coolColor, uAccent, warmth * 0.58);
    float alpha = uOpacity * vDepth * vWeight * (0.64 + vLight * 0.36);

    if (alpha < 0.008) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

export const membraneVertexShader = /* glsl */ `
  uniform float uPointerDepth;
  uniform float uScroll;
  uniform float uSpeed;
  uniform float uTime;
  uniform vec2 uPointer;
  uniform vec2 uPointerScale;

  varying float vDepth;
  varying float vSheen;
  varying vec2 vUv;

  void main() {
    vec3 transformed = position;
    float time = uTime * uSpeed;
    float longWave = sin(transformed.x * 0.5 + transformed.y * 0.3 + time);
    float crossWave = cos(transformed.y * 0.74 - transformed.x * 0.18 - time * 0.72);
    float detail = sin((transformed.x - transformed.y) * 1.05 + time * 0.46);

    transformed.y += longWave * 0.16 + detail * 0.035;
    transformed.z += longWave * 0.48 + crossWave * 0.2 + detail * 0.055;

    vec2 pointerDelta = transformed.xy - uPointer * uPointerScale;
    transformed.z += exp(-dot(pointerDelta, pointerDelta) * 0.42) * uPointerDepth;
    transformed.y += uScroll * 0.48;
    transformed.z -= uScroll * 0.8;

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    vDepth = smoothstep(10.5, 2.4, -viewPosition.z);
    vSheen = pow(0.5 + 0.5 * sin(transformed.x * 0.62 - transformed.y * 0.38 + time), 3.0);
    vUv = uv;
  }
`;

export const membraneFragmentShader = /* glsl */ `
  uniform vec3 uAccent;
  uniform vec3 uBase;
  uniform vec3 uHighlight;
  uniform float uOpacity;

  varying float vDepth;
  varying float vSheen;
  varying vec2 vUv;

  void main() {
    float edge =
      smoothstep(0.0, 0.14, vUv.x) *
      smoothstep(0.0, 0.14, 1.0 - vUv.x) *
      smoothstep(0.0, 0.18, vUv.y) *
      smoothstep(0.0, 0.18, 1.0 - vUv.y);
    float warmBand = pow(0.5 + 0.5 * sin(vUv.x * 8.0 + vUv.y * 3.0), 6.0);
    vec3 color = mix(uBase, uHighlight, vSheen);
    color = mix(color, uAccent, warmBand * 0.34);
    float alpha = uOpacity * edge * vDepth * (0.24 + vSheen * 0.76);

    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

export const dustVertexShader = /* glsl */ `
  attribute float aPhase;
  attribute float aSize;

  uniform float uTime;
  uniform vec2 uPointer;
  uniform vec2 uPointerScale;

  varying float vDepth;
  varying float vPulse;

  void main() {
    vec3 transformed = position;
    float time = uTime * 0.055;
    transformed.x += sin(time + aPhase) * 0.075;
    transformed.y += cos(time * 0.83 + aPhase * 1.7) * 0.06;
    transformed.z += sin(time * 0.61 + aPhase * 0.73) * 0.09;

    vec2 pointerDelta = transformed.xy - uPointer * uPointerScale;
    transformed.z += exp(-dot(pointerDelta, pointerDelta) * 0.5) * 0.22;

    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = clamp(aSize * 7.0 / max(1.0, -viewPosition.z), 1.0, 2.8);
    vDepth = smoothstep(11.5, 2.6, -viewPosition.z);
    vPulse = 0.72 + 0.28 * sin(aPhase + uTime * 0.12);
  }
`;

export const dustFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;

  varying float vDepth;
  varying float vPulse;

  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.08, radius) * uOpacity * vDepth * vPulse;
    if (alpha < 0.008) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;
