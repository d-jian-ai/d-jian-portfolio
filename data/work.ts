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
      en: "Concept design / 3D space / Interaction narrative",
      fr: "Concept / Espace 3D / Narration interactive",
    },
    title: {
      zh: "三里屯太古里数字街区",
      en: "Taikoo Li Digital District",
      fr: "Quartier numérique Taikoo Li",
    },
    summary: {
      zh: "把会员功能变成一座可以进入、游览和操作的透明数字街区。",
      en: "Member services transformed into a transparent digital district to enter, explore, and operate.",
      fr: "Des services membres transformés en quartier numérique transparent à parcourir et manipuler.",
    },
    body: {
      zh: "这是为三里屯太古里会员小程序构想的空间化体验提案。功能不再只是菜单，而是被映射为红、蓝、青三组圆角透明体素建筑；个人空间、社区、积分兑换、停车和客服等入口嵌入立面。中央悬浮装置与镜面雕塑负责建立识别度，也把浏览变成穿行于数字街区的连续动作。",
      en: "This spatial experience concept was developed for a Taikoo Li Sanlitun member mini-program. Functions become rounded transparent voxel buildings rather than a conventional menu, with personal space, community, points, parking, and customer-service entries embedded in their façades. A floating central device and chrome sculpture create an identifiable landmark and turn browsing into movement through a digital district.",
      fr: "Ce concept spatial a été imaginé pour le mini-programme membre de Taikoo Li Sanlitun. Les fonctions deviennent des bâtiments en voxels transparents et arrondis, avec les accès personnels, communautaires, points, parking et service client intégrés aux façades. Un dispositif flottant et une sculpture chromée transforment la navigation en traversée d'un quartier numérique.",
    },
    tags: ["Three.js", "Spatial UI", "3D Experience"],
    featured: true,
    accent: "violet",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
