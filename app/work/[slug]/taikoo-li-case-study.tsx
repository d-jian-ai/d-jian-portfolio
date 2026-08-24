"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Box } from "lucide-react";
import type { Work } from "@/data/work";
import { useLanguage } from "@/providers/language-provider";
import { TAIKOO_VOXEL_COUNTS } from "./taikoo-li-scene-data";
import styles from "./work-taikoo-li.module.css";

const copy = {
  zh: {
    back: "返回作品",
    eyebrow: "三里屯太古里会员小程序概念提案 / 2023",
    modelLabel: "最终镂空空间 / 静态成片",
    modelNote: "最终体素数据 · 高分辨率静态渲染",
    rotate: "自动环绕",
    pause: "暂停环绕",
    farView: "远角",
    nearView: "近角",
    reference: "PPT 动态影像与静帧",
    reconstructed: "最终体素结构静态渲染",
    chapter: "从一组扁平演示图，重新构成立体空间",
    lead: "原始提案把会员功能压缩成一座可进入的数字街区：红、蓝、青三组透明体素建筑围合步行空间，功能图标嵌入立面，中央悬浮装置成为会员体验的入口。这个网页版本沿用最终确认的镂空体素数据，重新标定彩色玻璃、金属、灯光与相机，并以高分辨率成片呈现，避免作品阅读时重复加载实时编辑场景。",
    details: [
      ["空间骨架", "{count} 个独立圆角体素按逐层矩阵组成塔群、连桥、开口与街巷。"],
      ["材质语言", "透明彩色亚克力、暖灰玻璃、镜面有机雕塑与发光金色入口。"],
      ["体验方式", "参考机位保持原提案的视角，自由轨道允许检查建筑背面与空间关系。"],
    ],
    status: "复原状态",
    statusText: "十二组建筑的数量、错位、镂空与中央装置已经固化为展示版本；实时搭建工具保留在空间实验中，作品页只承载最终视觉成片。",
  },
  en: {
    back: "Back to work",
    eyebrow: "Taikoo Li Sanlitun member mini-program concept / 2023",
    modelLabel: "Final carved district / Still render",
    modelNote: "Final voxel data · High-resolution still render",
    rotate: "Auto orbit",
    pause: "Pause orbit",
    farView: "Far view",
    nearView: "Near view",
    reference: "PPT motion and stills",
    reconstructed: "Final voxel-structure render",
    chapter: "Rebuilding a dimensional place from a flattened presentation",
    lead: "The original proposal compresses member services into a digital district: transparent red, blue, and cyan voxel towers shape a pedestrian corridor, functional symbols live on the façades, and a floating device becomes the entry point. This page uses the approved carved-voxel data, recalibrated glass, metal, lighting, and camera, then presents the result as a high-resolution still so the editing scene is not loaded during portfolio reading.",
    details: [
      ["Spatial frame", "{count} individually counted rounded voxels form the towers, bridges, openings, and streets."],
      ["Material language", "Transparent colored acrylic, warm-grey glass, a chrome organic sculpture, and a luminous gold portal."],
      ["Experience", "A reference view preserves the proposal camera while free orbit reveals the reverse sides and spatial relationships."],
    ],
    status: "Reconstruction status",
    statusText: "The counts, offsets, openings, and central installation across all twelve groups are fixed in the display version. The live construction tool remains available as a Space experiment.",
  },
  fr: {
    back: "Retour aux projets",
    eyebrow: "Concept de mini-programme membre Taikoo Li Sanlitun / 2023",
    modelLabel: "Quartier évidé final / Rendu fixe",
    modelNote: "Données voxel finales · Rendu fixe haute définition",
    rotate: "Rotation automatique",
    pause: "Arrêter la rotation",
    farView: "Vue éloignée",
    nearView: "Vue proche",
    reference: "Animations et images du PPT",
    reconstructed: "Rendu final de la structure voxel",
    chapter: "Reconstruire un espace tridimensionnel depuis une présentation aplatie",
    lead: "La proposition d'origine condense les services membres dans un quartier numérique : des tours transparentes rouges, bleues et cyan composent un passage piéton, les fonctions s'inscrivent dans les façades et un dispositif flottant devient le point d'entrée. Cette page reprend les données voxel évidées validées, réétalonne le verre, le métal, la lumière et la caméra, puis présente un rendu fixe haute définition pour éviter de charger l'éditeur pendant la lecture.",
    details: [
      ["Structure", "{count} voxels arrondis comptés individuellement forment tours, ponts, ouvertures et rues."],
      ["Matières", "Acrylique coloré transparent, verre gris chaud, sculpture organique chromée et portail doré lumineux."],
      ["Expérience", "La vue de référence conserve la caméra d'origine ; l'orbite libre révèle l'arrière et les rapports spatiaux."],
    ],
    status: "État de la reconstitution",
    statusText: "Les quantités, décalages, ouvertures et l'installation centrale des douze groupes sont figés dans la version de présentation. L'outil de construction reste accessible dans Espace.",
  },
} as const;

export function TaikooLiCaseStudy({ work }: { work: Work }) {
  const { locale } = useLanguage();
  const text = copy[locale];

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
            FINAL RENDER
          </div>
        </div>

        <div className={styles.canvasWrap} data-testid="taikoo-model-stage">
          <Image
            alt="Final carved Taikoo Li digital district voxel scene"
            className={styles.finalRender}
            fill
            priority
            sizes="100vw"
            src="/images/taikoo-li/digital-district-hollow-render.png"
          />
          <div className={styles.canvasNote}>
            {text.modelNote}
          </div>
          <div className={styles.modelLegend} aria-hidden="true">
            <span><i className={styles.red} />MEMBER</span>
            <span><i className={styles.blue} />COMMUNITY</span>
            <span><i className={styles.cyan} />SERVICE</span>
          </div>
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
