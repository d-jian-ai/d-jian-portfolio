export type Locale = "zh" | "en";

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
  liveUrl?: string;
};

export const typeLabels: Record<WorkType, LocalizedText> = {
  visual: {
    zh: "视觉设计",
    en: "Visual",
  },
  web: {
    zh: "网页产品",
    en: "Web",
  },
  video: {
    zh: "视频动态",
    en: "Motion",
  },
};

export const works: Work[] = [
  {
    slug: "forest-loading-gate",
    type: "web",
    year: "2026",
    role: {
      zh: "界面设计 / 前端开发",
      en: "Interface design / Front-end",
    },
    title: {
      zh: "森林入口实验",
      en: "Forest Entry Study",
    },
    summary: {
      zh: "一个用天气、雾气和轻交互建立第一印象的作品集入口。",
      en: "A portfolio entry that uses weather, fog, and soft interaction to shape a first impression.",
    },
    body: {
      zh: "这个实验把加载页当成网站气质的一部分，而不是等待时的空白。画面会读取本地缓存的天气氛围，在网络失败时回落到晨雾状态；进入主站后，雾、光和粒子继续成为整站的背景语言。",
      en: "This study treats the loading gate as part of the site's atmosphere instead of an empty wait state. It keeps a cached weather mood, falls back to morning mist when the network fails, and carries fog, light, and particles into the main experience.",
    },
    tags: ["Next.js", "Atmosphere", "Weather"],
    featured: true,
    accent: "moss",
  },
  {
    slug: "quiet-system",
    type: "visual",
    year: "2025",
    role: {
      zh: "视觉系统 / 版式",
      en: "Visual system / Editorial",
    },
    title: {
      zh: "安静的视觉系统",
      en: "Quiet Visual System",
    },
    summary: {
      zh: "为内容型品牌建立低噪声、高可读的版式与色彩规则。",
      en: "A low-noise, highly readable visual system for a content-led brand.",
    },
    body: {
      zh: "项目围绕长阅读、图文混排和多端展示展开。核心不是制造强烈视觉冲击，而是在密集信息里保留空气感，让阅读节奏稳定、层级清楚。",
      en: "The project focuses on long-form reading, image-text rhythm, and multi-screen presentation. The goal is not visual volume, but clarity and breathing room inside dense content.",
    },
    tags: ["Identity", "Typography", "Layout"],
    featured: true,
    accent: "mist",
  },
  {
    slug: "archive-commerce",
    type: "web",
    year: "2025",
    role: {
      zh: "产品原型 / 交互设计",
      en: "Product prototype / Interaction",
    },
    title: {
      zh: "档案式商店原型",
      en: "Archive Commerce Prototype",
    },
    summary: {
      zh: "把商品浏览做成可检索、可比较、可停留的内容体验。",
      en: "A commerce prototype shaped around browsing, comparing, and lingering.",
    },
    body: {
      zh: "这个原型把传统商品卡片拆成材料、时间、故事和状态四类信息。界面重点放在筛选、对比和详情阅读，适合小型品牌或作品周边。",
      en: "This prototype breaks product cards into material, time, story, and status. The interface emphasizes filtering, comparison, and detail reading for small brands or portfolio editions.",
    },
    tags: ["Prototype", "Commerce", "UX"],
    featured: false,
    accent: "amber",
  },
  {
    slug: "motion-notes",
    type: "video",
    year: "2024",
    role: {
      zh: "剪辑 / 动态设计",
      en: "Editing / Motion design",
    },
    title: {
      zh: "动态札记",
      en: "Motion Notes",
    },
    summary: {
      zh: "一组关于节奏、留白和画面呼吸感的视频短片练习。",
      en: "A set of short motion studies about rhythm, pause, and visual breath.",
    },
    body: {
      zh: "短片练习来自日常拍摄和设计片段。每一段都只解决一个问题：速度如何变慢、画面如何停住、文字如何进入，又怎样不打扰影像。",
      en: "These short studies come from daily footage and design fragments. Each piece solves one question: how speed slows down, how a frame rests, how type enters, and how it avoids interrupting the image.",
    },
    tags: ["Editing", "Motion", "Video"],
    featured: true,
    accent: "violet",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
