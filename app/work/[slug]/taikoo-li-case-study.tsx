"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FastForward, Orbit, ScanSearch } from "lucide-react";
import { useState, type CSSProperties } from "react";
import type { Work } from "@/data/work";
import { useLanguage } from "@/providers/language-provider";
import TaikooLiModel from "./taikoo-li-model";
import type { CameraPreset } from "./taikoo-li-scene-data";
import styles from "./work-taikoo-li.module.css";

const copy = {
  zh: {
    back: "返回作品",
    meta: "2023 / 空间化界面实验",
    heroLead: "如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？",
    modelTitle: "一座可以进入的界面",
    modelBody: "远景负责建立方向，近景把功能变成可以靠近的场所。切换视角，观察同一套界面如何从导航变成空间。",
    farView: "远景",
    nearView: "近景",
    originTitle: "从一片街区开始",
    originBody: [
      "项目的原型，是北京一片由立方体建筑组成的开放式街区。店铺沿街生长，人群在楼宇之间穿行，逛这件事本身就是空间体验。",
      "这次提案没有先从菜单和页面出发。我们把建筑拆到最小单位，再用色彩、光和呼吸感重新堆起一座数字城市。",
    ],
    conceptTitle: "建筑变成体素",
    conceptBody: "远看是一座城市，走近后，每一块都是入口。熟悉的空间秩序仍然存在，材质和交互逻辑已经完全数字化。",
    interfaceTitle: "功能成为街区里的地标",
    interfaceBody: "停车、积分、会员、客服和社区不再藏在列表里。它们成为建筑上的招牌，人不需要找功能，只需要认路。",
    features: [
      ["一眼看全", "从城市上空识别全部服务入口。"],
      ["走进界面", "镜头俯冲，把浏览变成空间穿行。"],
      ["触达功能", "入口嵌入立面，点击即可到达。"],
      ["持续生长", "活动、季节和联名共享同一套体素语言。"],
    ],
    paletteTitle: "换一种色彩，就是另一座城",
    paletteBody: "城市不必重建。材质与色彩改变后，同一套空间可以不断承接新的内容。",
    palettes: ["晶体", "蒙德里安", "波普", "星夜", "金香槟"],
    futureTitle: "把导航接到现实上",
    futureBody: "当路径叠加到真实街区，导航变成可以看见的空间线索。体素语言也可以继续延伸到新的活动、季节和联名。",
    epilogueTitle: "一份写给未来的草稿",
    epilogueBody: "那一年，我们只是想看看软件还能长成什么样子。后来我常常想起它：页面可以是场所，功能可以是风景。",
    epiloguePull: "双箭头的意思是“快进”。它至今仍指着前方。",
  },
  en: {
    back: "Back to work",
    meta: "2023 / Spatial interface experiment",
    heroLead: "What if software stopped behaving like pages and became a city you could enter?",
    modelTitle: "An interface you can enter",
    modelBody: "The far view creates orientation. The near view turns functions into places you can approach. Switch perspectives to see navigation become space.",
    farView: "Far view",
    nearView: "Near view",
    originTitle: "It began with a district",
    originBody: [
      "The prototype was an open district in Beijing made of cubic buildings. Shops grow along the streets and people move between them. Browsing is already a spatial experience.",
      "The proposal did not begin with menus and pages. We reduced the architecture to its smallest unit, then rebuilt a digital city with color, light, and rhythm.",
    ],
    conceptTitle: "Architecture becomes voxels",
    conceptBody: "From afar it reads as a city. Up close, every block is an entrance. The spatial order remains familiar while the material and interaction become entirely digital.",
    interfaceTitle: "Functions become landmarks",
    interfaceBody: "Parking, points, membership, service, and community no longer hide in a list. They become signs on buildings. You do not search for functions; you recognize the route.",
    features: [
      ["See the whole", "Read every service from above the city."],
      ["Enter the interface", "A camera dive turns browsing into movement."],
      ["Reach a function", "Entrances live on façades and open directly."],
      ["Keep evolving", "Events, seasons, and collaborations share one voxel language."],
    ],
    paletteTitle: "A new color wakes a new city",
    paletteBody: "The city does not need to be rebuilt. New materials and colors let the same space carry new content.",
    palettes: ["Crystal", "Mondrian", "Pop", "Starry night", "Champagne"],
    futureTitle: "Connect navigation to reality",
    futureBody: "When a route is layered over the physical district, navigation becomes a visible spatial cue. The voxel language can continue through future events, seasons, and collaborations.",
    epilogueTitle: "A draft addressed to the future",
    epilogueBody: "That year, we simply wanted to see what software could become. I still return to the thought that pages can be places and functions can be scenery.",
    epiloguePull: "The double arrow means fast forward. It still points ahead.",
  },
  fr: {
    back: "Retour aux projets",
    meta: "2023 / Expérience d'interface spatiale",
    heroLead: "Et si le logiciel cessait d'être une suite de pages pour devenir une ville à parcourir ?",
    modelTitle: "Une interface dans laquelle entrer",
    modelBody: "La vue éloignée donne les repères. La vue proche transforme les fonctions en lieux accessibles. Changez de point de vue pour voir la navigation devenir espace.",
    farView: "Vue éloignée",
    nearView: "Vue proche",
    originTitle: "Tout commence par un quartier",
    originBody: [
      "Le prototype est un quartier ouvert de Pékin composé de bâtiments cubiques. Les boutiques longent les rues et les visiteurs circulent entre elles. Parcourir est déjà une expérience spatiale.",
      "La proposition ne part pas des menus et des pages. Nous avons réduit l'architecture à son unité minimale, puis reconstruit une ville numérique avec la couleur, la lumière et le rythme.",
    ],
    conceptTitle: "L'architecture devient voxel",
    conceptBody: "De loin, c'est une ville. De près, chaque bloc devient une entrée. L'ordre spatial reste familier, tandis que la matière et l'interaction deviennent entièrement numériques.",
    interfaceTitle: "Les fonctions deviennent des repères",
    interfaceBody: "Parking, points, adhésion, service et communauté ne se cachent plus dans une liste. Ils deviennent des enseignes sur les bâtiments. On ne cherche plus une fonction, on reconnaît son chemin.",
    features: [
      ["Tout voir", "Lire tous les services depuis le ciel."],
      ["Entrer dans l'interface", "La plongée transforme la navigation en mouvement."],
      ["Atteindre une fonction", "Les entrées vivent sur les façades et s'ouvrent directement."],
      ["Continuer à évoluer", "Événements, saisons et collaborations partagent un langage voxel."],
    ],
    paletteTitle: "Une nouvelle couleur réveille une nouvelle ville",
    paletteBody: "La ville n'a pas besoin d'être reconstruite. Matières et couleurs permettent au même espace d'accueillir de nouveaux contenus.",
    palettes: ["Cristal", "Mondrian", "Pop", "Nuit étoilée", "Champagne"],
    futureTitle: "Relier la navigation au réel",
    futureBody: "Lorsque le trajet se superpose au quartier physique, la navigation devient un repère spatial visible. Le langage voxel peut continuer à travers les événements, les saisons et les collaborations.",
    epilogueTitle: "Un brouillon adressé au futur",
    epilogueBody: "Cette année-là, nous voulions simplement voir ce que le logiciel pouvait devenir. Je reviens souvent à cette idée : les pages peuvent être des lieux et les fonctions des paysages.",
    epiloguePull: "La double flèche signifie avance rapide. Elle pointe toujours vers l'avenir.",
  },
} as const;

const paletteColors = [
  ["#b8d7e0", "#d5a7b5"],
  ["#ef2b24", "#f2c900"],
  ["#36c9c4", "#d891ae"],
  ["#173e5e", "#d6c84c"],
  ["#b77832", "#e0bc7a"],
] as const;

export function TaikooLiCaseStudy({ work }: { work: Work }) {
  const { locale } = useLanguage();
  const text = copy[locale];
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>("far");
  const [resetSignal, setResetSignal] = useState(0);

  function selectCamera(nextPreset: CameraPreset) {
    setCameraPreset(nextPreset);
    setResetSignal((value) => value + 1);
  }

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <Image
          alt="Digital Block voxel city seen from above"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src="/images/taikoo-li/digital-district-hollow-render.png"
        />
        <div className={styles.heroWash} />
        <Link className={styles.back} href="/work">
          <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.5} />
          {text.back}
        </Link>
        <div className={styles.heroCopy}>
          <p>{text.meta}</p>
          <h1 aria-label={work.title[locale]}>
            <span>Fast</span>
            <span>
              Forward
              <FastForward aria-hidden="true" size={72} strokeWidth={1.15} />
            </span>
          </h1>
          <p className={styles.heroLead}>{text.heroLead}</p>
        </div>
      </header>

      <section className={styles.modelStory}>
        <div className={styles.modelStage}>
          <TaikooLiModel
            autoRotate
            cameraPreset={cameraPreset}
            resetSignal={resetSignal}
          />
          <div className={styles.cameraControls} aria-label="Digital Block camera views">
            <button
              aria-pressed={cameraPreset === "far"}
              onClick={() => selectCamera("far")}
              type="button"
            >
              <Orbit aria-hidden="true" size={16} strokeWidth={1.5} />
              {text.farView}
            </button>
            <button
              aria-pressed={cameraPreset === "near"}
              onClick={() => selectCamera("near")}
              type="button"
            >
              <ScanSearch aria-hidden="true" size={16} strokeWidth={1.5} />
              {text.nearView}
            </button>
          </div>
        </div>
        <div className={styles.modelCopy}>
          <div>
            <h2>{text.modelTitle}</h2>
            <p>{text.modelBody}</p>
          </div>
          <div>
            <h2>{text.conceptTitle}</h2>
            <p>{text.conceptBody}</p>
          </div>
        </div>
      </section>

      <section className={styles.origin}>
        <div className={styles.originCopy}>
          <h2>{text.originTitle}</h2>
          {text.originBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.originVisual}>
          <Image
            alt="Digital Block transparent voxel buildings"
            fill
            sizes="(max-width: 760px) 100vw, 58vw"
            src="/images/taikoo-li/digital-district-reference.webp"
          />
        </div>
      </section>

      <section className={styles.interfaceSection}>
        <div className={styles.interfaceIntro}>
          <h2>{text.interfaceTitle}</h2>
          <p>{text.interfaceBody}</p>
        </div>
        <div className={styles.interfaceBody}>
          <div className={styles.interfaceVisual}>
            <Image
              alt="Completed Digital Block interface city"
              fill
              sizes="(max-width: 760px) 100vw, 54vw"
              src="/images/taikoo-li/digital-district-voxel-completed.png"
            />
          </div>
          <div className={styles.featureGrid}>
            {text.features.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.paletteSection}>
        <div>
          <h2>{text.paletteTitle}</h2>
          <p>{text.paletteBody}</p>
        </div>
        <div className={styles.paletteTrack}>
          {text.palettes.map((name, index) => (
            <div
              className={styles.palette}
              key={name}
              style={
                {
                  "--palette-a": paletteColors[index][0],
                  "--palette-b": paletteColors[index][1],
                } as CSSProperties
              }
            >
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.futureSection}>
        <Image
          alt="Digital Block city extending toward real space"
          className={styles.futureImage}
          fill
          sizes="100vw"
          src="/images/taikoo-li/digital-district-hollow-render.png"
        />
        <div className={styles.futureWash} />
        <div>
          <h2>{text.futureTitle}</h2>
          <p>{text.futureBody}</p>
        </div>
      </section>

      <footer className={styles.epilogue}>
        <div>
          <h2>{text.epilogueTitle}</h2>
          <p>{text.epilogueBody}</p>
        </div>
        <p className={styles.epiloguePull}>
          {text.epiloguePull}
          <FastForward aria-hidden="true" size={46} strokeWidth={1.1} />
        </p>
      </footer>
    </article>
  );
}
