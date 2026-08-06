import type { Locale } from "@/i18n/types";

export type Dictionary = {
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
    kicker: string;
    title: string;
    lead: string;
    collectionLabel: string;
    open: string;
    experiments: {
      generativeField: {
        title: string;
        summary: string;
        category: string;
        status: string;
      };
    };
  };
  generativeField: {
    back: string;
    title: string;
    lead: string;
    chapterNav: string;
    chapters: Array<{
      kicker: string;
      title: string;
      body: string;
      metric: string;
    }>;
    notesTitle: string;
    notes: string[];
    gesture: string;
    particles: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    nav: {
      home: "首页",
      work: "作品",
      space: "空间",
    },
    home: {
      kicker: "数字设计师 / 创意开发者",
      title: "CREER",
      lead: "在设计、代码与影像之间，构建会呼吸的数字体验。",
      manifesto:
        "我把界面看作一种空间：它有天气、距离、阻力和回声。每个项目都从清晰的内容出发，再用技术把感受推得更远。",
      explore: "探索作品",
      playground: "进入空间",
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
      kicker: "00 / DIGITAL SPACE",
      title: "空间",
      lead: "收录实时图形、交互系统与持续生长的数字实验。每个入口，都是一种独立的空间状态。",
      collectionLabel: "空间效果",
      open: "进入效果",
      experiments: {
        generativeField: {
          title: "生成力场",
          summary: "一组会感知指针、改变形态并缓慢流动的实时粒子系统。",
          category: "实时粒子系统",
          status: "持续演化",
        },
      },
    },
    generativeField: {
      back: "返回空间",
      title: "生成力场",
      lead: "移动指针，改变空气。这里没有固定画面，只有你留下的轨迹。",
      chapterNav: "实验章节",
      chapters: [
        {
          kicker: "00 / MATTER FIELD",
          title: "生成力场",
          body: "移动指针，改变空气。这里没有固定画面，只有同一批粒子不断重组。",
          metric: "实时生成 / 持续演化",
        },
        {
          kicker: "01 / DISTURBANCE",
          title: "扰动空气",
          body: "指针不只负责选择，它会推开场域、改变深度，并在运动经过的位置留下短暂回声。",
          metric: "指针力场 / 空间位移",
        },
        {
          kicker: "02 / MORPHOLOGY",
          title: "形态之间",
          body: "滚动让球体、地形、入口和花形在同一组坐标间连续迁移，章节因此成为空间状态。",
          metric: "四种形态 / 一组粒子",
        },
        {
          kicker: "03 / RESIDUAL MEMORY",
          title: "短暂记忆",
          body: "每次动作都会消失，但它曾经造成的密度、光线与方向，会在下一次变化前停留片刻。",
          metric: "痕迹衰减 / 场域记忆",
        },
      ],
      notesTitle: "场域记录",
      notes: [
        "速度决定痕迹的密度，停留会让光线聚集。",
        "场景会根据当前天气改变底层色温。",
        "每一条轨迹都会消失，但空间会短暂记住它。",
      ],
      gesture: "滚动切换 / 移动扰动",
      particles: "粒子",
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      space: "Space",
    },
    home: {
      kicker: "Digital designer / Creative developer",
      title: "CREER",
      lead: "Breathing digital experiences between design, code, and moving image.",
      manifesto:
        "I see an interface as a space with weather, distance, resistance, and echo. Every project begins with clear content, then uses technology to carry the feeling further.",
      explore: "Explore work",
      playground: "Enter space",
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
      kicker: "00 / DIGITAL SPACE",
      title: "SPACE",
      lead: "A collection of real-time graphics, interaction systems, and digital experiments that keep evolving. Each entry is its own spatial state.",
      collectionLabel: "Spatial effects",
      open: "Enter effect",
      experiments: {
        generativeField: {
          title: "Generative field",
          summary: "A real-time particle system that senses the pointer, changes form, and drifts at its own pace.",
          category: "Real-time particles",
          status: "Always evolving",
        },
      },
    },
    generativeField: {
      back: "Back to space",
      title: "Generative field",
      lead: "Move the pointer and change the air. There is no fixed image, only the trace you leave.",
      chapterNav: "Field chapters",
      chapters: [
        {
          kicker: "00 / MATTER FIELD",
          title: "Generative field",
          body: "Move the pointer and change the air. There is no fixed image, only one body of particles continually reorganizing.",
          metric: "Real-time / Always evolving",
        },
        {
          kicker: "01 / DISTURBANCE",
          title: "Disturb the air",
          body: "The pointer does more than select. It pushes the field, bends its depth, and leaves a brief echo along its path.",
          metric: "Pointer force / Spatial shift",
        },
        {
          kicker: "02 / MORPHOLOGY",
          title: "Between forms",
          body: "Scroll moves a sphere, terrain, portal, and bloom through the same coordinates, turning each chapter into a spatial state.",
          metric: "Four forms / One particle body",
        },
        {
          kicker: "03 / RESIDUAL MEMORY",
          title: "Brief memory",
          body: "Every gesture fades, but the density, light, and direction it changed remain for a moment before the field moves on.",
          metric: "Trace decay / Field memory",
        },
      ],
      notesTitle: "Field notes",
      notes: [
        "Speed shapes the density of a trace; staying still lets light gather.",
        "The scene changes its base temperature with the current weather.",
        "Every trace disappears, but the field remembers it for a moment.",
      ],
      gesture: "Scroll to morph / Move to disturb",
      particles: "particles",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      work: "Projets",
      space: "Espace",
    },
    home: {
      kicker: "Designer numérique / Développeur créatif",
      title: "CREER",
      lead: "Des expériences numériques vivantes, entre design, code et image en mouvement.",
      manifesto:
        "Je considère l'interface comme un espace avec sa météo, sa distance, sa résistance et son écho. Chaque projet part d'un contenu clair, puis la technologie prolonge la sensation.",
      explore: "Explorer les projets",
      playground: "Entrer dans l’espace",
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
      kicker: "00 / DIGITAL SPACE",
      title: "ESPACE",
      lead: "Une collection de graphismes temps réel, de systèmes interactifs et d’expériences numériques en évolution. Chaque entrée forme son propre état spatial.",
      collectionLabel: "Effets spatiaux",
      open: "Entrer dans l’effet",
      experiments: {
        generativeField: {
          title: "Champ génératif",
          summary: "Un système de particules en temps réel qui perçoit le pointeur, change de forme et dérive à son propre rythme.",
          category: "Particules temps réel",
          status: "Toujours en évolution",
        },
      },
    },
    generativeField: {
      back: "Retour à l’espace",
      title: "Champ génératif",
      lead: "Déplacez le pointeur et transformez l'air. Aucune image fixe, seulement votre trace.",
      chapterNav: "Chapitres du champ",
      chapters: [
        {
          kicker: "00 / MATTER FIELD",
          title: "Champ génératif",
          body: "Déplacez le pointeur et transformez l'air. Aucune image fixe, seulement un même corps de particules en recomposition continue.",
          metric: "Temps réel / Toujours en évolution",
        },
        {
          kicker: "01 / DISTURBANCE",
          title: "Troubler l'air",
          body: "Le pointeur ne fait pas que sélectionner. Il repousse le champ, infléchit sa profondeur et laisse un bref écho sur son passage.",
          metric: "Force du pointeur / Déplacement spatial",
        },
        {
          kicker: "02 / MORPHOLOGY",
          title: "Entre les formes",
          body: "Le défilement transforme sphère, relief, portail et floraison dans les mêmes coordonnées; chaque chapitre devient un état spatial.",
          metric: "Quatre formes / Un corps de particules",
        },
        {
          kicker: "03 / RESIDUAL MEMORY",
          title: "Mémoire brève",
          body: "Chaque geste s'efface, mais la densité, la lumière et la direction qu'il a modifiées persistent encore un instant.",
          metric: "Déclin des traces / Mémoire du champ",
        },
      ],
      notesTitle: "Notes du champ",
      notes: [
        "La vitesse façonne la densité; l'immobilité laisse la lumière s'accumuler.",
        "La scène adapte sa température à la météo actuelle.",
        "Chaque trace disparaît, mais le champ s'en souvient un instant.",
      ],
      gesture: "Défiler pour transformer / Bouger pour troubler",
      particles: "particules",
    },
  },
};
