import type { Locale } from "@/i18n/types";

export type WorkType = "visual" | "web" | "video";

export type LocalizedText = Record<Locale, string>;

export type Work = {
  slug: string;
  type: WorkType;
  year: string;
  role: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText;
  tags: string[];
  featured: boolean;
  accent: "moss" | "amber" | "mist" | "violet";
  index: string;
  liveUrl?: string;
};

export const typeLabels: Record<WorkType, LocalizedText> = {
  visual: {
    zh: "视觉设计",
    en: "Visual design",
    fr: "Design visuel",
  },
  web: {
    zh: "网页与交互",
    en: "Web & interaction",
    fr: "Web & interaction",
  },
  video: {
    zh: "动态影像",
    en: "Moving image",
    fr: "Image en mouvement",
  },
};

export const works: Work[] = [
  {
    slug: "forest-loading-gate",
    type: "web",
    year: "2026",
    index: "01",
    role: {
      zh: "界面设计 / 创意开发",
      en: "Interface design / Creative development",
      fr: "Design d'interface / Développement créatif",
    },
    title: {
      zh: "森林入口实验",
      en: "Forest Entry Study",
      fr: "Étude d'une entrée forestière",
    },
    summary: {
      zh: "一个用天气、雾气和实时交互建立第一印象的数字入口。",
      en: "A digital threshold shaped by weather, fog, and real-time interaction.",
      fr: "Un seuil numérique façonné par la météo, la brume et l'interaction en temps réel.",
    },
    body: {
      zh: "这个实验把进入网站的过程当成体验本身。实时天气改变空间的色温与粒子密度，指针影响相机与光线，滚动则把观看者从森林边缘带入更抽象的数字场域。技术不只是装饰，而是让每次访问都略有不同。",
      en: "This study treats entering the website as an experience in itself. Live weather shifts the color temperature and particle density, the pointer bends the camera and light, and scrolling moves the viewer from the edge of a forest into a more abstract digital field. Technology is not decoration; it makes every visit slightly different.",
      fr: "Cette étude considère l'entrée dans le site comme une expérience à part entière. La météo module la température et les particules, le pointeur infléchit la caméra et la lumière, et le défilement conduit de la lisière vers un champ numérique plus abstrait. La technique n'est pas un décor: chaque visite devient légèrement différente.",
    },
    tags: ["Next.js", "WebGL", "Weather API"],
    featured: true,
    accent: "moss",
  },
  {
    slug: "quiet-system",
    type: "visual",
    year: "2025",
    index: "02",
    role: {
      zh: "视觉系统 / 编辑设计",
      en: "Visual system / Editorial design",
      fr: "Système visuel / Design éditorial",
    },
    title: {
      zh: "安静的视觉系统",
      en: "Quiet Visual System",
      fr: "Système visuel silencieux",
    },
    summary: {
      zh: "为内容型品牌建立低噪声、高可读、能持续扩展的视觉规则。",
      en: "A quiet, highly readable, and extensible system for a content-led brand.",
      fr: "Un système discret, lisible et extensible pour une marque centrée sur le contenu.",
    },
    body: {
      zh: "项目围绕长阅读、图文混排和多端展示展开。网格保持稳定，颜色承担导航，字体比例负责节奏。动态只发生在层级变化的时刻，让大量内容仍然拥有清晰的呼吸和方向。",
      en: "The project is built around long-form reading, image-text rhythm, and presentation across screens. The grid stays stable, color carries navigation, and type scale controls tempo. Motion appears only when hierarchy changes, giving dense content breath and direction.",
      fr: "Le projet s'organise autour de la lecture longue, du rythme texte-image et de l'affichage multi-écran. La grille reste stable, la couleur guide, l'échelle typographique règle le tempo. Le mouvement n'apparaît qu'aux changements de hiérarchie, pour donner souffle et direction au contenu dense.",
    },
    tags: ["Identity", "Typography", "Editorial"],
    featured: true,
    accent: "mist",
  },
  {
    slug: "archive-commerce",
    type: "web",
    year: "2025",
    index: "03",
    role: {
      zh: "产品原型 / 交互设计",
      en: "Product prototype / Interaction design",
      fr: "Prototype produit / Design d'interaction",
    },
    title: {
      zh: "档案式商店原型",
      en: "Archive Commerce Prototype",
      fr: "Prototype de boutique-archive",
    },
    summary: {
      zh: "把商品浏览做成可检索、可比较、也值得停留的内容体验。",
      en: "A commerce experience designed for searching, comparing, and lingering.",
      fr: "Une expérience commerciale pensée pour chercher, comparer et prendre le temps.",
    },
    body: {
      zh: "这个原型把传统商品卡片拆成材料、时间、故事和状态四类信息。界面在高密度与安静之间找到平衡，并通过细微的磁性反馈让筛选、对比和阅读形成连续动作。",
      en: "This prototype separates conventional product cards into material, time, story, and status. The interface balances density with calm, using subtle magnetic feedback to turn filtering, comparing, and reading into one continuous action.",
      fr: "Ce prototype décompose les cartes produit en matière, temps, récit et statut. L'interface équilibre densité et calme, avec un retour magnétique subtil qui relie filtrage, comparaison et lecture dans un geste continu.",
    },
    tags: ["Prototype", "Commerce", "UX"],
    featured: false,
    accent: "amber",
  },
  {
    slug: "motion-notes",
    type: "video",
    year: "2024",
    index: "04",
    role: {
      zh: "剪辑 / 动态设计",
      en: "Editing / Motion design",
      fr: "Montage / Motion design",
    },
    title: {
      zh: "动态札记",
      en: "Motion Notes",
      fr: "Notes en mouvement",
    },
    summary: {
      zh: "一组关于节奏、停顿和画面呼吸感的短片研究。",
      en: "Short studies in rhythm, pause, and the breath of a frame.",
      fr: "De courtes études sur le rythme, la pause et la respiration du cadre.",
    },
    body: {
      zh: "短片来自日常拍摄和设计片段。每一段只解决一个问题：速度如何变慢、画面如何停住、文字如何进入，又怎样在最恰当的时刻退出。它们共同构成一套可以迁移到界面中的时间语言。",
      en: "The studies grow from daily footage and design fragments. Each solves one question: how speed slows, how a frame rests, how type enters, and when it should leave. Together they form a language of time that can move back into interface work.",
      fr: "Ces études naissent d'images quotidiennes et de fragments graphiques. Chacune répond à une question: ralentir, laisser le cadre se poser, faire entrer le texte et choisir son départ. Ensemble, elles forment un langage du temps transposable à l'interface.",
    },
    tags: ["Editing", "Motion", "Video"],
    featured: true,
    accent: "violet",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
