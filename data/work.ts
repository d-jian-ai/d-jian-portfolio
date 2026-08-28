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
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
