const veilDeformation = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uPointer;

  vec3 deformVeil(vec3 point) {
    float time = uTime;
    float broadFold = sin(point.x * 0.48 + point.y * 0.18 + time) * 0.82;
    float crossFold = sin(point.y * 0.76 - point.x * 0.16 - time * 0.72) * 0.52;
    float diagonal = sin((point.x + point.y) * 0.34 + time * 0.45) * 0.34;
    float ridgeAxis = point.x * 0.3 + point.y * 0.2 - 0.2 - uScroll * 0.24;
    float ridge = exp(-ridgeAxis * ridgeAxis * 1.8) * 0.94;

    vec2 pointerPosition = uPointer * vec2(4.4, 2.8);
    float pointerDistance = length(point.xy - pointerPosition);
    float pointerLift = exp(-pointerDistance * pointerDistance * 0.16) * 0.46;

    point.x += sin(point.y * 0.42 + time * 0.62) * 0.38 + point.y * point.y * 0.014;
    point.y += sin(point.x * 0.3 - time * 0.48) * 0.26 + uScroll * 0.24;
    point.z += broadFold + crossFold + diagonal + ridge + pointerLift;
    point.z += point.y * point.y * 0.026 - point.x * point.y * 0.012;
    return point;
  }
`;

export const veilVertexShader = /* glsl */ `
  ${veilDeformation}

  varying float vFold;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vec3 displaced = deformVeil(position);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    vFold = displaced.z;
    vViewPosition = viewPosition.xyz;
    vUv = uv;
    gl_Position = projectionMatrix * viewPosition;
  }
`;

export const veilFragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uAccent;
  uniform vec3 uColor;
  uniform vec3 uShadow;
  uniform float uOpacity;

  varying float vFold;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  float random(vec2 point) {
    return fract(sin(dot(point, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
    vec3 viewDirection = normalize(-vViewPosition);
    float fresnel = pow(1.0 - abs(dot(normal, viewDirection)), 1.65);
    float light = smoothstep(-0.8, 1.05, vFold);
    float foldBand = pow(0.5 + 0.5 * sin(vFold * 4.2 + vUv.x * 2.4), 7.0);
    float grain = random(gl_FragCoord.xy) - 0.5;
    vec3 color = mix(uShadow, uColor, 0.34 + light * 0.46);
    color = mix(color, uAccent, fresnel * 0.12);
    color = mix(color, uShadow, foldBand * 0.28);
    color += grain * 0.025;
    float edgeFade = smoothstep(0.0, 0.11, vUv.x) * smoothstep(0.0, 0.11, 1.0 - vUv.x);
    edgeFade *= smoothstep(0.0, 0.12, vUv.y) * smoothstep(0.0, 0.12, 1.0 - vUv.y);
    float alpha = (0.3 + fresnel * 0.54 + light * 0.12 + foldBand * 0.2) * uOpacity * edgeFade;
    gl_FragColor = vec4(color, alpha);
  }
`;

export const veilPointVertexShader = /* glsl */ `
  ${veilDeformation}

  attribute float aSeed;
  uniform float uPointSize;
  varying float vAlpha;

  void main() {
    vec3 displaced = deformVeil(position);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    float depthScale = 7.0 / max(2.0, -viewPosition.z);
    float densityWave = 0.5 + 0.5 * sin(displaced.z * 4.6 + displaced.x * 0.28 - displaced.y * 0.16);
    float crease = pow(densityWave, 7.0);
    gl_PointSize = uPointSize * mix(0.58, 1.24, aSeed) * (0.72 + crease * 1.18) * depthScale;
    gl_Position = projectionMatrix * viewPosition;
    vAlpha = clamp(mix(0.16, 0.64, aSeed) + crease * 0.58, 0.0, 1.0);
  }
`;

export const veilPointFragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;

  void main() {
    vec2 point = gl_PointCoord - 0.5;
    float alpha = smoothstep(0.5, 0.08, length(point));
    if (alpha < 0.02) discard;
    gl_FragColor = vec4(uColor, alpha * uOpacity * vAlpha);
  }
`;

export const veilContourVertexShader = /* glsl */ `
  ${veilDeformation}

  attribute float aSeed;
  varying float vAlpha;

  void main() {
    vec3 displaced = deformVeil(position);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    vAlpha = 0.42 + fract(aSeed * 3.17) * 0.42;
  }
`;

export const veilContourFragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;

  void main() {
    gl_FragColor = vec4(uColor, uOpacity * vAlpha);
  }
`;
