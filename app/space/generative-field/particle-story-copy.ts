import type { Locale } from "@/i18n/types";
import type { GuideSpiritId } from "./guide-spirit-config";

type ParticleFieldChapter = {
  code: string;
  instruction: string;
  name: string;
  title: string;
};

type GuideSpiritCopy = {
  fieldAction: string;
  fieldEffect: string;
  name: string;
  trait: string;
};

type ParticleStoryCopy = {
  back: string;
  changeGuide: string;
  chapterAria: string;
  chapters: readonly ParticleFieldChapter[];
  chooseAria: string;
  enter: string;
  guideBody: string;
  guideTitle: string;
  spirits: Record<GuideSpiritId, GuideSpiritCopy>;
};

export const PARTICLE_STORY_COPY: Record<Locale, ParticleStoryCopy> = {
  zh: {
    back: "返回空间",
    changeGuide: "更换场灵",
    chapterAria: "选择粒子场景",
    chapters: [
      { code: "01", instruction: "移动场灵，抬升近处山脊", name: "山谷", title: "穿行群峰" },
      { code: "02", instruction: "观察群落自演化，按住可介入重连", name: "社会", title: "关系正在生长" },
      { code: "03", instruction: "快速横切，留下尾流", name: "海洋", title: "划开潮汐" },
      { code: "04", instruction: "快速掠过草梢，唤起一阵飞絮", name: "草地", title: "穿过风丘" },
      { code: "05", instruction: "靠近云核，推开尘埃与光流", name: "星云", title: "进入云腔" },
      { code: "06", instruction: "绕过轨心，改变环带的进动方向", name: "螺旋", title: "拨动轨心" },
    ],
    chooseAria: "选择引导场灵",
    enter: "进入粒子场",
    guideBody: "每个引导体都会重写六个粒子场的反馈方式。",
    guideTitle: "选择一种回应法则",
    spirits: {
      core: { fieldAction: "吸附并压缩", fieldEffect: "靠近时收束，按住后压缩局部结构。", name: "引力", trait: "聚合" },
      ribbon: { fieldAction: "加速并拉长", fieldEffect: "移动越快，尾流越长，切面越明显。", name: "流线", trait: "加速" },
      branch: { fieldAction: "沿结构传播", fieldEffect: "扰动会从触点出发，沿粒子结构向外生长。", name: "脉络", trait: "传播" },
      echo: { fieldAction: "留下延迟波", fieldEffect: "每次按下都会形成多重延迟回声。", name: "回声", trait: "留痕" },
      mist: { fieldAction: "旋散并松开", fieldEffect: "慢移形成涡流，停留会推开粒子边界。", name: "漫游", trait: "扩散" },
    },
  },
  en: {
    back: "Back to Space",
    changeGuide: "Change guide",
    chapterAria: "Choose a particle scene",
    chapters: [
      { code: "01", instruction: "Move the guide to lift nearby ridges", name: "Valley", title: "Cross the peaks" },
      { code: "02", instruction: "Watch communities evolve. Hold to intervene", name: "Society", title: "Relations keep growing" },
      { code: "03", instruction: "Cut quickly to leave a wake", name: "Ocean", title: "Open the tide" },
      { code: "04", instruction: "Sweep the grass quickly to lift drifting seeds", name: "Grassland", title: "Cross the wind hills" },
      { code: "05", instruction: "Approach the core to move dust and light", name: "Nebula", title: "Enter the cloud chamber" },
      { code: "06", instruction: "Orbit the core to redirect the moving rings", name: "Spiral", title: "Turn the axis" },
    ],
    chooseAria: "Choose a field guide",
    enter: "Enter the particle field",
    guideBody: "Each guide rewrites how all six particle fields respond.",
    guideTitle: "Choose a response law",
    spirits: {
      core: { fieldAction: "Attract and compress", fieldEffect: "Approach to gather. Hold to compress the local structure.", name: "Gravity", trait: "gather" },
      ribbon: { fieldAction: "Accelerate and stretch", fieldEffect: "Faster movement creates a longer, sharper wake.", name: "Stream", trait: "accelerate" },
      branch: { fieldAction: "Propagate through structure", fieldEffect: "A disturbance grows outward through connected particles.", name: "Network", trait: "propagate" },
      echo: { fieldAction: "Leave delayed waves", fieldEffect: "Every press produces multiple delayed responses.", name: "Echo", trait: "remember" },
      mist: { fieldAction: "Swirl and release", fieldEffect: "Slow motion creates vortices. Dwelling opens the boundary.", name: "Drift", trait: "diffuse" },
    },
  },
  fr: {
    back: "Retour à l’espace",
    changeGuide: "Changer de guide",
    chapterAria: "Choisir une scène particulaire",
    chapters: [
      { code: "01", instruction: "Déplacer le guide pour soulever les crêtes", name: "Vallée", title: "Traverser les sommets" },
      { code: "02", instruction: "Observer l’évolution. Maintenir pour intervenir", name: "Société", title: "Les relations grandissent" },
      { code: "03", instruction: "Traverser vite pour laisser un sillage", name: "Océan", title: "Ouvrir la marée" },
      { code: "04", instruction: "Balayer l’herbe rapidement pour soulever les aigrettes", name: "Prairie", title: "Traverser les collines" },
      { code: "05", instruction: "Approcher le cœur pour déplacer poussière et lumière", name: "Nébuleuse", title: "Entrer dans la chambre" },
      { code: "06", instruction: "Tourner autour du cœur pour orienter les anneaux", name: "Spirale", title: "Faire pivoter l’axe" },
    ],
    chooseAria: "Choisir un guide vivant",
    enter: "Entrer dans le champ",
    guideBody: "Chaque guide réécrit la réponse des six champs de particules.",
    guideTitle: "Choisir une loi de réponse",
    spirits: {
      core: { fieldAction: "Attirer et comprimer", fieldEffect: "Approcher pour rassembler. Maintenir pour comprimer la structure.", name: "Gravité", trait: "agréger" },
      ribbon: { fieldAction: "Accélérer et étirer", fieldEffect: "Un mouvement rapide crée un sillage plus long et plus net.", name: "Flux", trait: "accélérer" },
      branch: { fieldAction: "Propager dans la structure", fieldEffect: "La perturbation grandit depuis le point de contact.", name: "Réseau", trait: "propager" },
      echo: { fieldAction: "Laisser des ondes retardées", fieldEffect: "Chaque pression produit plusieurs réponses retardées.", name: "Écho", trait: "mémoriser" },
      mist: { fieldAction: "Tourbillonner et ouvrir", fieldEffect: "Le mouvement lent crée des vortex et ouvre la limite.", name: "Dérive", trait: "diffuser" },
    },
  },
};
