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
    featured: string;
    archive: string;
    selected: string;
    recent: string;
  };
  work: {
    title: string;
    lead: string;
    all: string;
    open: string;
    next: string;
    previous: string;
    back: string;
  };
  space: {
    title: string;
    lead: string;
    modeMist: string;
    modeLight: string;
    modeRain: string;
    notesTitle: string;
    notes: string[];
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    nav: {
      home: "首页",
      work: "作品",
      space: "空间",
    },
    home: {
      kicker: "Design / Web / Moving Image",
      title: "CREER",
      lead: "一个把作品、天气和个人叙事放在同一片森林里的作品集。",
      manifesto:
        "界面应该先让人愿意停留，再把内容清楚地交给他。这个版本把视觉气氛做轻，把作品入口做明确，后续真实素材可以逐步替换。",
      featured: "精选作品",
      archive: "进入作品库",
      selected: "已选",
      recent: "最近的思考",
    },
    work: {
      title: "作品库",
      lead: "按类型筛选设计、网页和影像项目。现在使用占位内容，结构已经为真实作品准备好。",
      all: "全部",
      open: "查看项目",
      next: "下一个",
      previous: "上一个",
      back: "返回作品",
    },
    space: {
      title: "空间",
      lead: "一个轻量的互动练习区，用触摸和指针留下生长、雾气与雨痕。",
      modeMist: "雾",
      modeLight: "光",
      modeRain: "雨",
      notesTitle: "记录",
      notes: [
        "作品集不是一次性完成的页面，而是一种可以持续更新的容器。",
        "动效最好像呼吸，存在但不抢话。",
        "真实素材到位后，首页会从占位气氛转向更个人的影像记忆。",
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      space: "Space",
    },
    home: {
      kicker: "Design / Web / Moving Image",
      title: "CREER",
      lead: "A portfolio that lets work, weather, and personal narrative live in the same forest.",
      manifesto:
        "An interface should first make people want to stay, then hand the work to them clearly. This version keeps the atmosphere soft and the project paths direct, ready for real material to replace the placeholders.",
      featured: "Featured Work",
      archive: "Open archive",
      selected: "Selected",
      recent: "Recent Notes",
    },
    work: {
      title: "Work Archive",
      lead: "Filter design, web, and moving image projects. Placeholder content is in place while the structure is ready for real work.",
      all: "All",
      open: "View project",
      next: "Next",
      previous: "Previous",
      back: "Back to work",
    },
    space: {
      title: "Space",
      lead: "A light interaction field where touch and pointer movement leave growth, mist, and rain traces.",
      modeMist: "Mist",
      modeLight: "Light",
      modeRain: "Rain",
      notesTitle: "Notes",
      notes: [
        "A portfolio is not a finished page, but a container that keeps evolving.",
        "Motion works best when it breathes without interrupting.",
        "Once real assets arrive, the home page can shift from placeholder atmosphere to personal visual memory.",
      ],
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("creer-locale");
    if (saved === "zh" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      toggleLocale: () => {
        setLocale((current) => {
          const next = current === "zh" ? "en" : "zh";
          window.localStorage.setItem("creer-locale", next);
          return next;
        });
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
