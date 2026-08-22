"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Box, Camera, MousePointer2, Pause, Play } from "lucide-react";
import { useState } from "react";
import type { Work } from "@/data/work";
import { useLanguage } from "@/providers/language-provider";
import { TAIKOO_VOXEL_COUNTS, type CameraPreset } from "./taikoo-li-scene-data";
import styles from "./work-taikoo-li.module.css";

const TaikooLiModel = dynamic(() => import("./taikoo-li-model"), {
  ssr: false,
  loading: () => (
    <div className={styles.loadingModel} role="status">
      <span />
      正在构建立体街区
    </div>
  ),
});

const copy = {
  zh: {
    back: "返回作品",
    eyebrow: "三里屯太古里会员小程序概念提案 / 2023",
    modelLabel: "可交互空间复原 01",
    modelNote: "拖拽旋转 · 滚轮缩放 · 双击并不会离开场景",
    rotate: "自动环绕",
    pause: "暂停环绕",
    farView: "远角",
    nearView: "近角",
    reference: "PPT 动态影像与静帧",
    reconstructed: "实时 Three.js 场景",
    chapter: "从一组扁平演示图，重新构成立体空间",
    lead: "原始提案把会员功能压缩成一座可进入的数字街区：红、蓝、青三组透明体素建筑围合步行空间，功能图标嵌入立面，中央悬浮装置成为会员体验的入口。这个网页版本不播放预渲染视频，而是重新搭建几何、材质、灯光与相机，让观看者真正进入模型。",
    details: [
      ["空间骨架", "{count} 个独立圆角体素按逐层矩阵组成塔群、连桥、开口与街巷。"],
      ["材质语言", "透明彩色亚克力、暖灰玻璃、镜面有机雕塑与发光金色入口。"],
      ["体验方式", "参考机位保持原提案的视角，自由轨道允许检查建筑背面与空间关系。"],
    ],
    status: "复原状态",
    statusText: "第一轮视觉标定：结构、圆角、主色与核心装置已进入实时模型；后续将继续依据原始动画逐镜校准比例和细部。",
  },
  en: {
    back: "Back to work",
    eyebrow: "Taikoo Li Sanlitun member mini-program concept / 2023",
    modelLabel: "Interactive spatial reconstruction 01",
    modelNote: "Drag to orbit · Scroll to zoom · Stay inside the scene",
    rotate: "Auto orbit",
    pause: "Pause orbit",
    farView: "Far view",
    nearView: "Near view",
    reference: "PPT motion and stills",
    reconstructed: "Real-time Three.js scene",
    chapter: "Rebuilding a dimensional place from a flattened presentation",
    lead: "The original proposal compresses member services into a digital district: transparent red, blue, and cyan voxel towers shape a pedestrian corridor, functional symbols live on the façades, and a floating device becomes the entry point. The web version rebuilds the geometry, materials, lighting, and camera so the viewer can enter the model rather than watch a pre-rendered clip.",
    details: [
      ["Spatial frame", "{count} individually counted rounded voxels form the towers, bridges, openings, and streets."],
      ["Material language", "Transparent colored acrylic, warm-grey glass, a chrome organic sculpture, and a luminous gold portal."],
      ["Experience", "A reference view preserves the proposal camera while free orbit reveals the reverse sides and spatial relationships."],
    ],
    status: "Reconstruction status",
    statusText: "First visual calibration: structure, corner radius, palette, and the central device are now real-time. The next pass will use the original motion frame by frame to refine scale and detail.",
  },
  fr: {
    back: "Retour aux projets",
    eyebrow: "Concept de mini-programme membre Taikoo Li Sanlitun / 2023",
    modelLabel: "Reconstitution spatiale interactive 01",
    modelNote: "Glisser pour tourner · Molette pour zoomer · Rester dans la scène",
    rotate: "Rotation automatique",
    pause: "Arrêter la rotation",
    farView: "Vue éloignée",
    nearView: "Vue proche",
    reference: "Animations et images du PPT",
    reconstructed: "Scène Three.js en temps réel",
    chapter: "Reconstruire un espace tridimensionnel depuis une présentation aplatie",
    lead: "La proposition d'origine condense les services membres dans un quartier numérique : des tours transparentes rouges, bleues et cyan composent un passage piéton, les fonctions s'inscrivent dans les façades et un dispositif flottant devient le point d'entrée. Cette version web reconstruit géométrie, matières, lumière et caméra pour permettre d'entrer dans le modèle.",
    details: [
      ["Structure", "{count} voxels arrondis comptés individuellement forment tours, ponts, ouvertures et rues."],
      ["Matières", "Acrylique coloré transparent, verre gris chaud, sculpture organique chromée et portail doré lumineux."],
      ["Expérience", "La vue de référence conserve la caméra d'origine ; l'orbite libre révèle l'arrière et les rapports spatiaux."],
    ],
    status: "État de la reconstitution",
    statusText: "Premier étalonnage visuel : structure, rayons, palette et dispositif central sont en temps réel. La suite affinera l'échelle et les détails image par image.",
  },
} as const;

export function TaikooLiCaseStudy({ work }: { work: Work }) {
  const { locale } = useLanguage();
  const text = copy[locale];
  const [autoRotate, setAutoRotate] = useState(false);
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>("far");
  const [resetSignal, setResetSignal] = useState(0);

  function selectCamera(preset: CameraPreset) {
    setAutoRotate(false);
    setCameraPreset(preset);
    setResetSignal((value) => value + 1);
  }

  return (
    <article className={styles.page}>
      <header className={styles.modelStage}>
        <div className={styles.stageChrome}>
          <Link className={styles.back} href="/work">
            <ArrowLeft aria-hidden="true" size={16} />
            {text.back}
          </Link>
          <div className={styles.stageIdentity}>
            <span>{text.modelLabel}</span>
            <strong>TAIKOO LI / DIGITAL DISTRICT</strong>
          </div>
          <div className={styles.stageStatus}>
            <i />
            REAL-TIME MODEL
          </div>
        </div>

        <div className={styles.canvasWrap} data-testid="taikoo-model-stage">
          <TaikooLiModel autoRotate={autoRotate} cameraPreset={cameraPreset} resetSignal={resetSignal} />
          <div className={styles.canvasNote}>
            <MousePointer2 aria-hidden="true" size={14} />
            {text.modelNote}
          </div>
          <div className={styles.modelLegend} aria-hidden="true">
            <span><i className={styles.red} />MEMBER</span>
            <span><i className={styles.blue} />COMMUNITY</span>
            <span><i className={styles.cyan} />SERVICE</span>
          </div>
        </div>

        <div className={styles.controls} aria-label="3D model controls">
          <button data-active={cameraPreset === "far"} onClick={() => selectCamera("far")} type="button">
            <Camera aria-hidden="true" size={15} />
            {text.farView}
          </button>
          <button data-active={cameraPreset === "near"} onClick={() => selectCamera("near")} type="button">
            <Camera aria-hidden="true" size={15} />
            {text.nearView}
          </button>
          <button onClick={() => setAutoRotate((value) => !value)} type="button">
            {autoRotate ? <Pause aria-hidden="true" size={15} /> : <Play aria-hidden="true" size={15} />}
            {autoRotate ? text.pause : text.rotate}
          </button>
        </div>
      </header>

      <section className={styles.intro}>
        <div className={styles.indexColumn}>
          <span>PROJECT / {work.index}</span>
          <span>2023—2026</span>
        </div>
        <div className={styles.introMain}>
          <p className={styles.eyebrow}>{text.eyebrow}</p>
          <h1>{work.title[locale]}</h1>
          <p className={styles.summary}>{work.summary[locale]}</p>
        </div>
        <aside className={styles.sourceCard}>
          <Box aria-hidden="true" size={24} strokeWidth={1.4} />
          <span>{text.reference}</span>
          <i />
          <span>{text.reconstructed}</span>
        </aside>
      </section>

      <section className={styles.story}>
        <p className={styles.storyIndex}>01 / RECONSTRUCTION</p>
        <div>
          <h2>{text.chapter}</h2>
          <p className={styles.lead}>{text.lead}</p>
          <dl className={styles.detailGrid}>
            {text.details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value.replace("{count}", TAIKOO_VOXEL_COUNTS.total.toString())}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.statusPanel}>
        <span>{text.status}</span>
        <p>{text.statusText}</p>
      </section>
    </article>
  );
}
