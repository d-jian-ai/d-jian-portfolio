"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/data/work";

type Dictionary = {
  nav: {
    home: string;
    work: string;
    space: string;
  };
  home: {
    kicker: string;
    title: string;
    lead: string;
    manifesto: string;
    explore: string;
    playground: string;
    scroll: string;
    featured: string;
    archive: string;
    selected: string;
    recent: string;
    quote: string;
    practice: string;
    practiceLead: string;
    capabilities: string[];
    contactKicker: string;
    contactTitle: string;
    contactLead: string;
    github: string;
  };
  work: {
    title: string;
    lead: string;
    all: string;
    open: string;
    next: string;
    previous: string;
    back: string;
    role: string;
    process: string;
    processSteps: string[];
  };
  space: {
    title: string;
    lead: string;
    modeMist: string;
    modeLight: string;
    modeRain: string;
    notesTitle: string;
    notes: string[];
    gesture: string;
    clear: string;
    traces: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    nav: {
      home: "首页",
      work: "作品",
      space: "实验场",
    },
    home: {
      kicker: "数字设计师 / 创意开发者",
      title: "CREER",
      lead: "在设计、代码与影像之间，构建会呼吸的数字体验。",
      manifesto:
        "我把界面看作一种空间：它有天气、距离、阻力和回声。每个项目都从清晰的内容出发，再用技术把感受推得更远。",
      explore: "探索作品",
      playground: "进入实验场",
      scroll: "向下探索",
      featured: "精选作品",
      archive: "查看完整作品库",
      selected: "Selected / 01—03",
      recent: "设计立场",
      quote: "不是把效果放进页面，而是让每一次移动都有原因。",
      practice: "跨越媒介的创作实践",
      practiceLead:
        "从品牌视觉到实时 3D，从产品界面到动态影像。方法会改变，但对节奏、细节和人的注意力始终保持敏感。",
      capabilities: ["视觉系统", "交互设计", "创意开发", "实时 3D", "动态影像"],
      contactKicker: "Next signal",
      contactTitle: "让下一件作品开始生长。",
      contactLead: "这里会持续记录新的实验、过程与完整项目。",
      github: "在 GitHub 查看过程",
    },
    work: {
      title: "作品档案",
      lead: "一些完成的项目，以及仍在生长中的数字实验。",
      all: "全部",
      open: "打开项目",
      next: "下一个项目",
      previous: "上一个项目",
      back: "返回作品档案",
      role: "角色",
      process: "方法与过程",
      processSteps: ["观察与提炼", "系统与原型", "动效与交付"],
    },
    space: {
      title: "生成实验场",
      lead: "移动指针，改变空气。这里没有固定画面，只有你留下的轨迹。",
      modeMist: "雾",
      modeLight: "光",
      modeRain: "雨",
      notesTitle: "场域记录",
      notes: [
        "速度决定痕迹的密度，停留会让光线聚集。",
        "场景会根据当前天气改变底层色温。",
        "每一条轨迹都会消失，但空间会短暂记住它。",
      ],
      gesture: "移动 / 拖动",
      clear: "清空轨迹",
      traces: "轨迹",
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      space: "Field",
    },
    home: {
      kicker: "Digital designer / Creative developer",
      title: "CREER",
      lead: "Breathing digital experiences between design, code, and moving image.",
      manifesto:
        "I see an interface as a space with weather, distance, resistance, and echo. Every project begins with clear content, then uses technology to carry the feeling further.",
      explore: "Explore work",
      playground: "Enter the field",
      scroll: "Scroll to explore",
      featured: "Selected work",
      archive: "View complete archive",
      selected: "Selected / 01—03",
      recent: "Design position",
      quote: "Do not add effects to a page. Give every movement a reason.",
      practice: "A practice across mediums",
      practiceLead:
        "From visual identities to real-time 3D, product interfaces to moving image. The method changes, while rhythm, detail, and human attention remain central.",
      capabilities: [
        "Visual systems",
        "Interaction design",
        "Creative development",
        "Real-time 3D",
        "Moving image",
      ],
      contactKicker: "Next signal",
      contactTitle: "Let the next piece begin to grow.",
      contactLead:
        "New experiments, processes, and complete projects will keep appearing here.",
      github: "Follow the process on GitHub",
    },
    work: {
      title: "Work archive",
      lead: "A selection of finished projects and digital experiments still in motion.",
      all: "All",
      open: "Open project",
      next: "Next project",
      previous: "Previous project",
      back: "Back to archive",
      role: "Role",
      process: "Method & process",
      processSteps: ["Observe & distill", "System & prototype", "Motion & delivery"],
    },
    space: {
      title: "Generative field",
      lead: "Move the pointer and change the air. There is no fixed image, only the trace you leave.",
      modeMist: "Mist",
      modeLight: "Light",
      modeRain: "Rain",
      notesTitle: "Field notes",
      notes: [
        "Speed shapes the density of a trace; staying still lets light gather.",
        "The scene changes its base temperature with the current weather.",
        "Every trace disappears, but the field remembers it for a moment.",
      ],
      gesture: "Move / drag",
      clear: "Clear traces",
      traces: "Traces",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      work: "Projets",
      space: "Champ",
    },
    home: {
      kicker: "Designer numérique / Développeur créatif",
      title: "CREER",
      lead: "Des expériences numériques vivantes, entre design, code et image en mouvement.",
      manifesto:
        "Je considère l'interface comme un espace avec sa météo, sa distance, sa résistance et son écho. Chaque projet part d'un contenu clair, puis la technologie prolonge la sensation.",
      explore: "Explorer les projets",
      playground: "Entrer dans le champ",
      scroll: "Faire défiler",
      featured: "Projets choisis",
      archive: "Voir toutes les archives",
      selected: "Sélection / 01—03",
      recent: "Position de design",
      quote: "Ne pas ajouter des effets à une page. Donner une raison à chaque mouvement.",
      practice: "Une pratique entre les médiums",
      practiceLead:
        "De l'identité visuelle à la 3D temps réel, de l'interface produit à l'image en mouvement. La méthode change, mais le rythme, le détail et l'attention restent au centre.",
      capabilities: [
        "Systèmes visuels",
        "Design d'interaction",
        "Développement créatif",
        "3D temps réel",
        "Image en mouvement",
      ],
      contactKicker: "Prochain signal",
      contactTitle: "Laisser la prochaine création prendre racine.",
      contactLead:
        "De nouvelles expériences, processus et projets complets apparaîtront ici.",
      github: "Suivre le processus sur GitHub",
    },
    work: {
      title: "Archives des projets",
      lead: "Une sélection de projets terminés et d'expériences numériques encore en mouvement.",
      all: "Tous",
      open: "Ouvrir le projet",
      next: "Projet suivant",
      previous: "Projet précédent",
      back: "Retour aux archives",
      role: "Rôle",
      process: "Méthode & processus",
      processSteps: ["Observer & extraire", "Système & prototype", "Mouvement & livraison"],
    },
    space: {
      title: "Champ génératif",
      lead: "Déplacez le pointeur et transformez l'air. Aucune image fixe, seulement votre trace.",
      modeMist: "Brume",
      modeLight: "Lumière",
      modeRain: "Pluie",
      notesTitle: "Notes du champ",
      notes: [
        "La vitesse façonne la densité; l'immobilité laisse la lumière s'accumuler.",
        "La scène adapte sa température à la météo actuelle.",
        "Chaque trace disparaît, mais le champ s'en souvient un instant.",
      ],
      gesture: "Déplacer / glisser",
      clear: "Effacer les traces",
      traces: "Traces",
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("creer-locale");
    if (saved === "zh" || saved === "en" || saved === "fr") {
      updateLocale(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale === "zh" ? "zh-CN" : locale === "fr" ? "fr" : "en";
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale: (nextLocale) => {
        window.localStorage.setItem("creer-locale", nextLocale);
        updateLocale(nextLocale);
      },
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
