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
    slug: "taikoo-li-digital-district",
    type: "web",
    year: "2023",
    index: "01",
    role: {
      zh: "概念设计 / 三维空间 / 交互叙事",
      en: "Concept design / 3D space / Interactive narrative",
      fr: "Concept / Espace 3D / Narration interactive",
    },
    title: {
      zh: "数字街区",
      en: "Digital Block",
      fr: "Quartier numérique",
    },
    summary: {
      zh: "如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？",
      en: "What if software stopped behaving like pages and became a city you could enter?",
      fr: "Et si le logiciel cessait d'être une suite de pages pour devenir une ville à parcourir ?",
    },
    body: {
      zh: "项目从北京一片开放式街区出发，把建筑拆成体素，再把会员、积分、停车、社区和客服等功能变成建筑上的入口。远景负责一眼看全，近景让人真正走进去。同一座城市还可以随着活动、季节和联名持续变换色彩。",
      en: "The project begins with an open district in Beijing, reduces its architecture to voxels, then turns membership, points, parking, community, and service into entrances on the buildings. The far view gives orientation; the near view creates immersion. The same city can keep changing with events, seasons, and collaborations.",
      fr: "Le projet part d'un quartier ouvert de Pékin, réduit son architecture en voxels, puis transforme adhésion, points, parking, communauté et service en entrées placées sur les bâtiments. La vue éloignée donne les repères, la vue proche crée l'immersion. La ville peut ensuite changer au rythme des événements, des saisons et des collaborations.",
    },
    tags: ["Three.js", "Scrolltelling", "Spatial UI"],
    featured: true,
    accent: "violet",
  },
  {
    slug: "digital-personality",
    type: "web",
    year: "2026",
    index: "02",
    role: {
      zh: "产品设计 / 数据叙事 / 交互开发",
      en: "Product design / Data storytelling / Interaction development",
      fr: "Design produit / Récit de données / Développement interactif",
    },
    title: {
      zh: "数字人格插件",
      en: "Digital Personality Plugin",
      fr: "Plugin de personnalité numérique",
    },
    summary: {
      zh: "让数字身份中的噪音被看见、被理解、被拦截。",
      en: "The noise around digital identity becomes visible, legible, and controllable.",
      fr: "Le bruit de l'identité numérique devient visible, lisible et maîtrisable.",
    },
    body: {
      zh: "项目从数字身份与现实人格之间的张力出发，把问卷、访谈与二手研究组织成可探索的数据叙事。用户先在噪音场中操作四类内容过滤器，再进入三维身份关系图，并沿着用户画像、旅程图和设计过程理解插件如何落成。",
      en: "The project begins with the tension between digital identity and lived personality, organizing surveys, interviews, and secondary research into an explorable data narrative. Visitors operate four content filters inside a field of social noise, enter a three-dimensional identity map, then follow the personas, journey, and design process behind the plugin.",
      fr: "Le projet part de la tension entre identité numérique et personnalité vécue, puis transforme questionnaires, entretiens et recherches secondaires en récit de données à explorer. Le visiteur manipule quatre filtres dans un champ de bruit social, entre dans une carte identitaire en trois dimensions et suit les personas, le parcours et le processus de conception du plugin.",
    },
    tags: ["D3.js", "GSAP", "Interactive Data"],
    featured: true,
    accent: "mist",
  },
  {
    slug: "project02",
    type: "web",
    year: "2024",
    index: "03",
    role: {
      zh: "服务设计 / 用户研究 / 界面设计",
      en: "Service design / User research / Interface design",
      fr: "Design de service / Recherche utilisateur / Design d'interface",
    },
    title: {
      zh: "孕育陪伴系统",
      en: "Maternity Care System",
      fr: "Accompagnement de la maternité",
    },
    summary: {
      zh: "为在华外籍孕产妇连接信息、就医与日常陪伴的服务系统。",
      en: "A service connecting information, healthcare, and everyday support for international mothers in China.",
      fr: "Un service reliant information, soins et accompagnement quotidien pour les futures mères étrangères en Chine.",
    },
    body: {
      zh: "从跨语言就医与孕期信息的障碍出发，项目通过访谈、用户画像、旅程图与服务蓝图，探索孕产妇、家人和医疗机构之间的协作。交互案例呈现从研究到移动端与医院端界面的完整设计过程。",
      en: "Starting with language barriers in healthcare and access to pregnancy information, the project uses interviews, personas, journey maps, and a service blueprint to explore collaboration between mothers, families, and healthcare providers. The interactive case study follows the design from research to mobile and hospital interfaces.",
      fr: "À partir des barrières linguistiques dans les soins et l'accès à l'information, le projet explore la collaboration entre mères, familles et établissements médicaux à travers entretiens, personas, parcours et blueprint de service. L'étude interactive retrace la conception, de la recherche aux interfaces mobiles et hospitalières.",
    },
    tags: ["Service Design", "UX Research", "Interactive Prototype"],
    featured: false,
    accent: "moss",
    liveUrl: "/images/project02/index.html",
  },
  {
    slug: "project03",
    type: "visual",
    year: "",
    index: "04",
    role: {
      zh: "产品设计 / 信息设计 / 交互原型",
      en: "Product design / Information design / Interactive prototype",
      fr: "Design produit / Design d'information / Prototype interactif",
    },
    title: {
      zh: "天气开关",
      en: "Weather Switch",
      fr: "Interrupteur météo",
    },
    summary: {
      zh: "把温度与出行建议放进熟悉的墙面开关，让老年人在出门前感知室内外温差。",
      en: "A familiar wall switch brings temperature and travel advice into everyday use, helping older adults prepare for the cold outside.",
      fr: "Un interrupteur familier affiche la température et des conseils de sortie pour aider les personnes âgées à anticiper le froid extérieur.",
    },
    body: {
      zh: "项目围绕天气信息的获取方式展开，从情境观察、信息分析和用户画像走向实体产品。通过地图、三维模型、使用故事和测试记录，呈现一个天气信息开关的设计过程。",
      en: "The project studies how people access weather information, moving from context, information analysis, and personas to a physical product. Maps, a three-dimensional model, usage stories, and testing records document the design of a weather information switch.",
      fr: "Le projet étudie l'accès à l'information météorologique, du contexte et des personas jusqu'au produit physique. Cartes, modèle tridimensionnel, scénarios d'usage et essais racontent la conception d'un interrupteur météo.",
    },
    tags: ["Product Design", "Weather", "Three.js"],
    featured: false,
    accent: "amber",
    liveUrl: "/images/project03/index.html",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
