# 数字街区 DIGITAL BLOCK — 源码全文

一个滚动驱动的 3D 项目页：整页是一座连续的体素城市，滚动即镜头穿行。
Vite 6 + TypeScript + Three.js + GSAP ScrollTrigger + Lenis，无框架依赖。

- 相机：每章一段贝塞尔弧线，写入 `exp.desired`，由 Experience 内部做指数平滑跟随
- 文案：固定浮层按章节进度淡入淡出，不随页面滚动，因此不会抖
- 城市：中心 12 栋来自还原的体素模型，外围为程序生成塔楼（两套材质互不影响）
- `src/experience/taikoo/layout.json` 是体素删除表（镂空数据），未收录于本文件

生成于 2026-08-28

---

## `package.json`

```json
{
  "name": "tkl-experience",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.12.5",
    "lenis": "^1.1.14",
    "three": "^0.170.0"
  },
  "devDependencies": {
    "@types/three": "^0.170.0",
    "puppeteer-core": "^25.9.0",
    "typescript": "^5.6.3",
    "vite": "^6.0.3"
  }
}

```

---

## `vite.config.ts`

```ts
import { defineConfig } from "vite";

export default defineConfig({
  /**
   * 挂到主站子路径时用 `VITE_BASE=/tkl/ npm run build` 构建，
   * 产物里的资源引用会带上该前缀。默认根目录，本地 dev 不受影响。
   */
  base: process.env.VITE_BASE || "/",
});

```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "types": ["vite/client"],
    "useDefineForClassFields": true
  },
  "include": ["src"]
}

```

---

## `index.html`

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>数字街区 · 未来软件猜想</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet" />
</head>
<body>

  <!-- ══════════ Loader ══════════ -->
  <div id="loader" aria-hidden="true">
    <div class="loader-logo" id="loader-logo"></div>
    <div class="loader-tag">FAST FORWARD</div>
  </div>

  <!-- ══════════ 3D 画布（固定全屏） ══════════ -->
  <canvas id="webgl"></canvas>

  <!-- ══════════ 左侧黄线进度轨 ══════════ -->
  <nav id="rail" aria-label="章节导航">
    <div class="rail-line"><div class="rail-fill" id="rail-fill"></div></div>
    <ul class="rail-dots" id="rail-dots"></ul>
  </nav>

  <!-- ══════════ 顶部标识条 ══════════ -->
  <header id="topbar">
    <div class="topbar-logo">数字街区<span>DIGITAL BLOCK</span></div>
    <div class="topbar-meta">2023 · 空间化界面实验</div>
  </header>

  <!-- ══════════ 标牌浮动标签（远景章节） ══════════ -->
  <div id="icon-labels"></div>


  <!-- ══════════ 章节文字浮层（固定定位，随章节淡入淡出，不跟滚） ══════════ -->
  <div id="overlays">

    <!-- 01 起点 -->
    <div class="overlay" data-for="ch-context">
      <div class="card card--left">
        <div class="card-head"><span class="card-no">01</span><span class="card-fr">Origin</span></div>
        <h2>从一片街区开始</h2>
        <p>它的原型，是北京一片由立方体建筑组成的开放式街区。店铺沿街生长，人群在楼宇之间穿行——"逛"这件事，本身就是空间里的体验。</p>
        <p>2023 年，一次难得不设限的机会落在我们手里：不必先算成本，不必迁就现成的方案。于是我们决定，把这种在楼宇之间穿行的体验，原样搬进屏幕。</p>
      </div>
      <figure class="photo-item photo-item--switch" id="context-photo">
        <div class="photo-crop">
          <img class="photo-layer photo-layer--day" src="/assets/media/context-day.webp" alt="街区实景 · 白天" loading="lazy" />
          <img class="photo-layer photo-layer--night" src="/assets/media/context-night.webp" alt="街区实景 · 夜景" loading="lazy" />
        </div>
        <figcaption><span data-cap="day">开放式街区 · 楼宇之间的动线</span><span data-cap="night">立方体建筑群 · 概念的原点</span></figcaption>
      </figure>
    </div>

    <!-- 02 概念 -->
    <div class="overlay overlay--center" data-for="ch-concept">
      <div class="card card--frosted">
        <div class="card-head"><span class="card-no">02</span><span class="card-fr">Concept</span></div>
        <h2>建筑 → 体素</h2>
        <p>把街区的立方体建筑拆到最小单位，再用色彩、光和呼吸感重新堆起来。熟悉的空间秩序还在，材质和逻辑已经完全是数字的。</p>
        <p>远看是一座城市；走近了，每一块都是一个入口。</p>
      </div>
    </div>

    <!-- 03 开屏（新章节） -->
    <div class="overlay" data-for="ch-opening">
      <div class="video-stage">
        <video src="/assets/media/concept-video.webm" muted loop playsinline preload="metadata"></video>
        <p class="caption">开屏动画 · 从像素到色彩</p>
      </div>
      <div class="card card--right">
        <div class="card-head"><span class="card-no">03</span><span class="card-fr">Opening</span></div>
        <h2>开屏 · 进化之路</h2>
        <p>按下开屏，画面从黑白像素开始生长，一路快进到色彩鲜明。这是向一款老游戏的致敬，也是项目想说的第一句话——</p>
        <p>设计从像素时代一路进化到今天，而它还想继续向前。双箭头，就是那记快进键。</p>
      </div>
    </div>

    <!-- 04 远景 -->
    <div class="overlay" data-for="ch-far" data-fade-out="0.82">
      <div class="card card--left">
        <div class="card-head"><span class="card-no">04</span><span class="card-fr">Navigation</span></div>
        <h2>远景 · 一眼看全</h2>
        <p>站在街区上空，功能一览无余：停车、积分、会员、客服、社区。它们不是列表里的条目，而是挂在建筑上的招牌。</p>
        <p>你不是在"找功能"，你是在"认路"。</p>
        <ul class="feature-list">
          <li>全局导航 · 一眼看全</li>
          <li>即点即达 · 无需层层进入</li>
        </ul>
        <div class="view-toggle"><video src="/assets/media/view-toggle.webm" autoplay muted loop playsinline aria-hidden="true"></video><span>远景 ⇄ 近景 · 一键切换</span></div>
      </div>
      <figure class="demo-frame">
        <video src="/assets/media/demo-near.webm" autoplay muted loop playsinline aria-label="首页远景 · 动态演示"></video>
        <figcaption>远景 · 实机演示</figcaption>
      </figure>
    </div>

    <!-- 05 近景 -->
    <div class="overlay" data-for="ch-dive" data-fade-in="0.2">
      <figure class="demo-frame demo-frame--left">
        <video src="/assets/media/demo-far.webm" autoplay muted loop playsinline aria-label="首页近景 · 动态演示"></video>
        <figcaption>近景 · 实机演示</figcaption>
      </figure>
      <div class="card card--right">
        <div class="card-head"><span class="card-no">05</span><span class="card-fr">Immersion</span></div>
        <h2>近景 · 走进去</h2>
        <p>视角落下来，城市变成空间。雕塑、悬浮球、楼宇之间的缝隙——功能入口成了可以走近、可以触摸的场景。</p>
        <ul class="feature-list">
          <li>空间俯冲 · 从俯瞰到置身其中</li>
          <li>沉浸交互 · 功能即场景</li>
        </ul>
        <div class="view-toggle"><video src="/assets/media/view-toggle.webm" autoplay muted loop playsinline aria-hidden="true"></video><span>远景 ⇄ 近景 · 一键切换</span></div>
      </div>
    </div>

    <!-- 07 延展 -->
    <div class="overlay" data-for="ch-skins">
      <div class="card card--left card--frosted skins-card">
        <div class="card-head"><span class="card-no">07</span><span class="card-fr">Extension</span></div>
        <h2>换一种色彩<br />就是另一座城</h2>
        <p>蒙德里安的原色、波普的糖果、星夜的蓝与金、高定的香槟——同一座街区，在不同的艺术语言里醒来。城市不必重建，联名可以一直生长。</p>
        <p class="hint-text">滚动切换，或点击下方色卡。</p>
        <ul class="skin-chips" id="skin-chips">
          <li class="chip is-active" data-skin="glass"><i style="--c1:#d40f2c;--c2:#2434c8"></i>晶体 · 光学玻璃</li>
          <li class="chip" data-skin="mondrian"><i style="--c1:#ef2b24;--c2:#f2c900"></i>蒙德里安 · 原色构成</li>
          <li class="chip" data-skin="koons"><i style="--c1:#40d8d2;--c2:#d89aa9"></i>波普 · 镜面糖果</li>
          <li class="chip" data-skin="vangogh"><i style="--c1:#173e5e;--c2:#d6c84c"></i>星夜 · 蓝与金</li>
          <li class="chip" data-skin="dior"><i style="--c1:#b77832;--c2:#d7aa64"></i>高定 · 金香槟</li>
        </ul>
      </div>
    </div>

    <!-- 08 演进 -->
    <div class="overlay" data-for="ch-ar">
      <div class="card card--left">
        <div class="card-head"><span class="card-no">08</span><span class="card-fr">Evolution</span></div>
        <h2>接到现实上</h2>
        <p>把导航接到实景上，路径变成可以看见的东西。体素语言可以一直长下去——新的活动、新的季节、新的联名。</p>
      </div>
      <div class="ar-media">
        <figure><video src="/assets/media/ar-nav.webm" autoplay muted loop playsinline aria-label="AR 实景导航"></video><figcaption>AR 实景导航</figcaption></figure>
        <figure><video src="/assets/media/evolution.webm" autoplay muted loop playsinline aria-label="持续演进"></video><figcaption>体素语言的持续演进</figcaption></figure>
      </div>
    </div>

    <!-- 后记：三拍浮层 -->
    <div class="overlay overlay--end" data-for="ch-end">
      <div class="end-stage" data-stage="title">
        <p class="hero-kicker">2023 · 后记</p>
        <h2 class="end-title">一份写给未来的草稿</h2>
      </div>
      <div class="end-stage" data-stage="copy">
        <div class="end-copy">
          <p>那一年的许多个深夜，办公室的灯一直亮着，笑声也没停过。没有人谈成本，没有人谈边界——我们只是想看看，软件还能长成什么样子。</p>
          <p>后来我常常想起它：想起页面可以是场所，功能可以是风景，想起一群人把天马行空当作日常的那段时间。</p>
          <p class="end-pull">双箭头的意思是"快进"。它至今仍指着前方。<svg class="ff-arrows" viewBox="0 0 100 60" aria-hidden="true"><path d="M8 6 L44 30 L8 54 Z"/><path d="M52 6 L88 30 L52 54 Z"/></svg></p>
        </div>
      </div>
      <div class="end-stage end-stage--outro" data-stage="outro">
        <button id="back-top" type="button">回到街区上空 ↑</button>
      </div>
    </div>

  </div>

  <main id="story">

    <!-- ── Hero（正文流内，自然滚出） ── -->
    <section class="chapter chapter--hero" id="ch-hero" data-title="开场">
      <div class="hero-inner">
        <p class="hero-kicker">2023 · 一次不设限的提案 · 一座可以走进去的城市</p>
        <h1 class="hero-title">
          <span class="hero-title-row"><span class="split-target">Fast</span></span>
          <span class="hero-title-row"><span class="split-target">Forward</span><svg class="ff-arrows" viewBox="0 0 100 60" aria-hidden="true"><path d="M8 6 L44 30 L8 54 Z"/><path d="M52 6 L88 30 L52 54 Z"/></svg></span>
        </h1>
        <p class="hero-sub">如果软件不再是一张张页面，而是一座可以走进去的城市，会是什么样子？</p>
        <div class="hero-scroll-hint">
          <span class="hint-line"></span><span>向下滚动，进入街区</span>
        </div>
      </div>
    </section>

    <!-- 滚动空间：每个 section 只承担滚动长度与相机段落，文字在浮层 -->
    <section class="chapter chapter--spacer chapter--wide" id="ch-context" data-title="起点"></section>
    <section class="chapter chapter--spacer chapter--tall" id="ch-concept" data-title="概念"></section>
    <section class="chapter chapter--spacer" id="ch-opening" data-title="开屏"></section>
    <section class="chapter chapter--spacer chapter--tall" id="ch-far" data-title="远景"></section>
    <section class="chapter chapter--spacer chapter--tall" id="ch-dive" data-title="近景"></section>

    <!-- ── 界面画廊（pinned 横向滚动，自成一体） ── -->
    <section class="chapter chapter--gallery" id="ch-gallery" data-title="界面">
      <div class="gallery-pin" id="gallery-pin">
        <div class="gallery-head">
          <div class="card-head"><span class="card-no">06</span><span class="card-fr">Interface</span></div>
          <h2>界面落地</h2>
          <p>概念要能落地才算成立。从首页到会员、积分、停车，每一屏都在同一套体素语言里，该有的效率一点没少。</p>
        </div>
        <div class="gallery-track" id="gallery-track">
          <figure class="phone"><img src="/assets/mockups/home-far.webp" alt="首页 · 远景" loading="lazy" /><figcaption>首页 · 远景</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/home-near.webp" alt="首页 · 近景" loading="lazy" /><figcaption>首页 · 近景</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/home-arrow-far.webp" alt="会员码 · 远景" loading="lazy" /><figcaption>会员码 · 远景</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/home-arrow-near.webp" alt="会员码 · 近景" loading="lazy" /><figcaption>会员码 · 近景</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/home-activity-far.webp" alt="活动 · 远景" loading="lazy" /><figcaption>活动 · 远景</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/home-activity.webp" alt="活动 · 近景" loading="lazy" /><figcaption>活动 · 近景</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/member.webp" alt="会员中心" loading="lazy" /><figcaption>会员中心</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/member-edit.webp" alt="会员信息编辑" loading="lazy" /><figcaption>会员 · 信息编辑</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/points.webp" alt="积分兑换" loading="lazy" /><figcaption>积分兑换</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/points-history.webp" alt="积分记录" loading="lazy" /><figcaption>积分 · 兑换记录</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/parking-car.webp" alt="停车场 车辆信息" loading="lazy" /><figcaption>停车场 · 车辆信息</figcaption></figure>
          <figure class="phone"><img src="/assets/mockups/parking-empty.webp" alt="停车场 无车辆" loading="lazy" /><figcaption>停车场 · 无车辆</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="chapter chapter--spacer chapter--skins" id="ch-skins" data-title="延展"></section>
    <section class="chapter chapter--spacer chapter--tall" id="ch-ar" data-title="演进"></section>

    <!-- ── 后记：三拍（标题 → 正文 → 全景无 UI） ── -->
    <section class="chapter chapter--spacer chapter--end" id="ch-end" data-title="后记"></section>

  </main>

  <script type="module" src="/src/main.ts"></script>
</body>
</html>

```

---

## `src/main.ts`

```ts
import "./styles.css";
import gsap from "gsap";
import { Experience } from "./experience/Experience";
import { setupScroll, type ScrollHandle } from "./scroll/chapters";

/**
 * 入口：Loader（体素双箭头拼合）→ 启动 3D → 绑定滚动 → 播放开场。
 * 无框架依赖；嵌入 Next.js 时调用 mountTKLExperience()，卸载时调用返回的 destroy()。
 */

/** 9×7 网格里组成 ">>" 的格子索引 */
const ARROW_CELLS = [
  [0, 0], [0, 4],
  [1, 1], [1, 5],
  [2, 2], [2, 6],
  [3, 3], [3, 7],
  [4, 2], [4, 6],
  [5, 1], [5, 5],
  [6, 0], [6, 4],
].map(([r, c]) => r * 9 + c);

function buildLoader(): Promise<void> {
  const grid = document.getElementById("loader-logo")!;
  const cells: HTMLElement[] = [];
  for (let i = 0; i < 63; i++) {
    const cell = document.createElement("i");
    if ((i * 7 + 3) % 11 === 0) cell.classList.add("gold");
    grid.appendChild(cell);
    cells.push(cell);
  }
  const arrowCells = ARROW_CELLS.map((i) => cells[i]).filter(Boolean);
  return new Promise((resolve) => {
    gsap
      .timeline({ onComplete: () => resolve() })
      .to(arrowCells, {
        opacity: 1,
        scale: 1,
        duration: 0.32,
        ease: "back.out(2.2)",
        stagger: { each: 0.055, from: "start" },
      })
      .to(".loader-tag", { opacity: 1, duration: 0.4 }, "-=0.4")
      .to({}, { duration: 0.35 });
  });
}

export interface TKLHandle {
  destroy: () => void;
}

export function mountTKLExperience(): TKLHandle {
  const canvas = document.getElementById("webgl") as HTMLCanvasElement;
  const loaderDone = buildLoader();

  let exp: Experience | null = null;
  let scroll: ScrollHandle | null = null;

  try {
    exp = new Experience(canvas);
  } catch (err) {
    console.warn("WebGL 初始化失败，降级为静态展示", err);
    canvas.style.display = "none";
  }

  if (exp) scroll = setupScroll(exp);

  // 字体就绪后再收起 loader，避免标题在开场动画中途重排
  Promise.allSettled([document.fonts?.ready, loaderDone]).then(() => {
    document.getElementById("loader")!.classList.add("is-done");
    scroll?.playIntro();
  });

  return {
    destroy() {
      scroll?.destroy();
      exp?.destroy();
    },
  };
}

// 独立页面直接自启动；作为模块被引入时由宿主调用 mountTKLExperience()
if (!(window as any).__TKL_EMBED__) mountTKLExperience();

```

---

## `src/styles.css`

```css
/* ═══════════ TKL Experience ═══════════ */
:root {
  --bg: #f1f1ef;
  --ink: #17181c;
  --ink-soft: #55575e;
  --yellow: #f5c400;
  --card-bg: rgba(255, 255, 255, 0.78);
  --card-border: rgba(23, 24, 28, 0.08);
  --font-display: "Archivo", "Noto Sans SC", system-ui, sans-serif;
  --font-body: "Noto Sans SC", "Archivo", system-ui, sans-serif;
  --side-pad: 8vw;
  /* 内容区避让左侧进度轨的最小左内边距。桌面 310px；
     窄屏下轨道只占 14px，必须收窄，否则内容会被挤出屏幕。 */
  --rail-gap: 310px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scrollbar-width: thin; }
html.lenis,
html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-weight: 400;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ── canvas ── */
#webgl {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  z-index: 0;
}

/* ── loader ── */
#loader {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  transition: opacity 0.7s ease, visibility 0.7s;
}
#loader.is-done { opacity: 0; visibility: hidden; }
.loader-logo {
  display: grid;
  grid-template-columns: repeat(9, 14px);
  grid-template-rows: repeat(7, 14px);
  gap: 3px;
}
.loader-logo i {
  background: var(--ink);
  opacity: 0;
  border-radius: 2px;
  transform: scale(0.3);
}
.loader-logo i.gold { background: var(--yellow); }
.loader-tag {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.42em;
  color: var(--ink-soft);
  opacity: 0;
}

/* ── topbar ── */
#topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 40;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 34px 22px 74px;
  pointer-events: none;
  mix-blend-mode: multiply;
}
.topbar-logo {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.28em;
}
.topbar-logo span {
  font-family: var(--font-display);
  font-weight: 400;
  margin-left: 10px;
  letter-spacing: 0.2em;
  color: var(--ink-soft);
  font-size: 12px;
}
.topbar-meta {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--ink-soft);
}

/* ── rail：黄线进度 + 小方块章节点（呼应远近景切换的立方体图标） ── */
#rail {
  position: fixed;
  left: 34px;
  top: 0;
  bottom: 0;
  z-index: 18; /* 在浮层文字之下，不与卡片穿插 */
  display: flex;
  align-items: center;
  gap: 12px;
}
.rail-line {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: rgba(23, 24, 28, 0.1);
}
.rail-fill {
  width: 100%;
  height: 0%;
  background: var(--yellow);
}
.rail-dots {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 10px;
}
/* li 本身不旋转（旋转会带偏标签），菱形交给 ::before */
.rail-dots li {
  position: relative;
  width: 10px; height: 10px;
  cursor: pointer;
}
.rail-dots li::before {
  content: "";
  position: absolute;
  left: 1.5px; top: 1.5px;
  width: 7px; height: 7px;
  border-radius: 1.5px;
  background: rgba(23, 24, 28, 0.22);
  transform: rotate(45deg);
  transition: background 0.3s, transform 0.3s;
}
.rail-dots li:hover::before { background: rgba(23, 24, 28, 0.5); }
.rail-dots li.is-active::before {
  background: var(--ink);
  transform: rotate(45deg) scale(1.2);
}
/* 标签竖排贴在菱形右侧、与之垂直居中 */
.rail-dots li::after {
  content: attr(data-title);
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--ink);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.rail-dots li.is-active::after { opacity: 0.7; }

/* ── 章节骨架：spacer 只承担滚动长度 ── */
#story { position: relative; z-index: 10; }
.chapter { position: relative; }
.chapter--spacer { min-height: 190vh; pointer-events: none; }
.chapter--tall { min-height: 230vh; }
/* 起点章节运镜跨度大，给它更长的滚动距离把速度压下来 */
.chapter--wide { min-height: 275vh; }
.chapter--skins { min-height: 560vh; } /* 5 个联名，每个约 1.3 屏 */

/* 章节长度 = 内容需求优先，其次才对齐镜头巡航速度。
   开屏要放完 11 秒视频、延展要走完 5 个联名，这两章按内容定长，
   镜头位移随之加大以免速度掉下来；其余章节按镜头弧长分配。 */
#ch-context { min-height: 400vh; }
#ch-concept { min-height: 520vh; }  /* 体素炸开→重塑，给足时间 */
#ch-opening { min-height: 430vh; }  /* 兜圈弧仍是 119°，时长收短 */
#ch-far { min-height: 345vh; }  /* 落点更近后行程变长，同步加时长以压住速度 */
#ch-dive { min-height: 240vh; }  /* 起点前移后行程变短，时长同步收，观感速度与远景持平 */
#ch-ar { min-height: 255vh; }  /* 两段 GIF + 配色回归 */

.chapter--hero {
  min-height: 128vh;
  display: flex;
  align-items: center;
  padding: 0 var(--side-pad);
}

/* ── 浮层系统：固定定位，章节进出时淡入淡出，滚动中纹丝不动 ── */
#overlays {
  position: fixed;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4vw;
  padding: 12vh var(--side-pad) 8vh;
  /* 内容整体向中间靠：宁可略压主体，也要远离左侧进度轨 */
  padding-left: max(var(--side-pad), var(--rail-gap));
  opacity: 0;
  visibility: hidden;
}
.overlay.is-on { visibility: visible; }
.overlay.is-on > * { pointer-events: auto; }
.overlay--center { justify-content: center; }

/* ── 卡片 ── */
.card {
  width: min(378px, 30vw);
  max-height: 76vh;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 34px 32px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 4px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 24px 60px -30px rgba(23, 24, 28, 0.25);
}
.card::-webkit-scrollbar { display: none; }
.card--frosted { background: rgba(255, 255, 255, 0.85); }
.card-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
}
.card-no {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 30px;
  color: #c9a300;
}
.card-fr {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--ink-soft);
}
.card h2 {
  font-size: clamp(24px, 2.6vw, 34px);
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
}
.card p {
  font-size: 14px;
  line-height: 2;
  color: var(--ink-soft);
}
.card p + p { margin-top: 12px; }
.hint-text {
  font-size: 12px !important;
  letter-spacing: 0.08em;
  opacity: 0.75;
}

.feature-list {
  list-style: none;
  margin-top: 20px;
  border-top: 1px solid var(--card-border);
}
.feature-list li {
  padding: 12px 2px;
  border-bottom: 1px solid var(--card-border);
  font-family: var(--font-display);
  font-size: 12.5px;
  letter-spacing: 0.14em;
  color: var(--ink);
}

/* ── 起点：单图框，滚动驱动日夜切换 ── */
.photo-item {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 4px;
  padding: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 20px 50px -28px rgba(23, 24, 28, 0.3);
}
.photo-item--switch {
  width: min(420px, 33vw);
  --photoswap: 0; /* 0 = 白天，1 = 夜景（滚动驱动，已带缓动） */
}
.photo-crop {
  overflow: hidden;
  border-radius: 3px;
  aspect-ratio: 4 / 3;
  position: relative;
}
.photo-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 丝滑切换：夜景淡入同时从 1.05 缩到 1，白天同步微推近，像一次呼吸 */
.photo-layer--day {
  transform: scale(calc(1 + var(--photoswap) * 0.04));
}
.photo-layer--night {
  opacity: var(--photoswap);
  transform: scale(calc(1.05 - var(--photoswap) * 0.05));
}
.photo-item--switch figcaption { position: relative; height: 1.4em; }
.photo-item--switch figcaption span {
  position: absolute;
  left: 0;
  transition: opacity 0.3s;
}
.photo-item--switch figcaption [data-cap="day"] { opacity: calc(1 - var(--photoswap)); }
.photo-item--switch figcaption [data-cap="night"] { opacity: var(--photoswap); }
.photo-item figcaption,
.caption {
  margin-top: 10px;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
}

/* ── 远/近景：GIF 实机演示框 ── */
.demo-frame {
  width: min(300px, 24vw);
  padding: 14px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 6px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 30px 60px -22px rgba(23, 24, 28, 0.38);
}
.demo-frame img,
.demo-frame video {
  width: 100%;
  display: block;
  border-radius: 4px;
  background: #101014;
}
.demo-frame figcaption {
  margin-top: 10px;
  font-size: 11.5px;
  letter-spacing: 0.12em;
  color: var(--ink-soft);
  text-align: center;
}

/* ── 视角切换立方体：作为卡片内的一条说明，不再浮在页面上遮挡内容 ── */
.view-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--card-border);
  font-size: 11.5px;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
}
.view-toggle img,
.view-toggle video {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  object-fit: cover;
  background: rgba(23, 24, 28, 0.05);
}

/* ── 开屏章节：视频台（竖屏媒体，控制占位不喧宾夺主） ── */
.video-stage {
  width: min(300px, 24vw);
  padding: 14px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 6px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 30px 60px -20px rgba(23, 24, 28, 0.35);
}
.video-stage video {
  width: 100%;
  border-radius: 4px;
  background: #101014;
  display: block;
}

/* ── 手机样机 ── */
.phone { flex-shrink: 0; }
.phone img,
.phone video {
  display: block;
  filter: drop-shadow(0 30px 50px rgba(23, 24, 28, 0.28));
}
.phone figcaption {
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
}

/* ── gallery（pinned 横向） ── */
.chapter--gallery { padding: 0; min-height: auto; }
.gallery-pin {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15vh;
  padding-bottom: 6vh;
  overflow: hidden;
  background: linear-gradient(rgba(241, 241, 239, 0.6), rgba(241, 241, 239, 0.92));
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.gallery-head {
  padding: 0 var(--side-pad);
  padding-left: max(var(--side-pad), var(--rail-gap));
  margin-bottom: 1vh;
  display: flex;
  align-items: baseline;
  gap: 26px;
  flex: 0 0 auto;
}
.gallery-head .card-head { margin-bottom: 0; }
.gallery-head h2 { font-size: clamp(20px, 2vw, 26px); letter-spacing: 0.04em; }
.gallery-head p { color: var(--ink-soft); font-size: 12.5px; line-height: 1.85; max-width: 430px; }
.gallery-head .card-no { font-size: 24px; }
/* 轨道占满头部之外的全部高度，样机在其中垂直居中——不再留大片空白 */
.gallery-track {
  display: flex;
  gap: 8vw;
  padding: 0 34vw; /* 首尾也能滚到正中 */
  will-change: transform;
  align-items: center;
  flex: 1 1 auto;
  min-height: 0;
}
/* 焦点放大：居中的样机放大到近全屏高，两侧收小变淡退后（JS 写入 --focus 0..1） */
.gallery-track .phone {
  --focus: 0;
  position: relative;
  transform: scale(calc(0.62 + var(--focus) * 0.48));
  opacity: calc(0.26 + var(--focus) * 0.74);
  transform-origin: center center;
  transition: none;
}
.gallery-track .phone img,
.gallery-track .phone video { height: 62vh; width: auto; }
/* 标题绝对定位在样机下方，不撑高轨道 */
.gallery-track .phone figcaption {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  margin-top: 14px;
  font-size: 11.5px;
  letter-spacing: 0.16em;
  opacity: var(--focus);
  white-space: nowrap;
}
.gallery-track.is-native-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 12px;
}
.gallery-track.is-native-scroll .phone { scroll-snap-align: center; }

/* ── 换肤色卡 ── */
.skins-card { width: min(390px, 32vw); }
.skin-chips {
  list-style: none;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.chip {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 16px;
  border: 1px solid var(--card-border);
  border-radius: 3px;
  font-family: var(--font-display);
  font-size: 13px;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
  background: rgba(255, 255, 255, 0.5);
}
.chip:hover { transform: translateX(6px); }
.chip.is-active { border-color: var(--ink); background: #fff; }
.chip i {
  width: 26px; height: 14px;
  border-radius: 2px;
  background: linear-gradient(100deg, var(--c1) 0 50%, var(--c2) 50% 100%);
}

/* ── AR ── */
.ar-media { display: flex; gap: 2.5vw; }
.ar-media figure { width: min(280px, 24vw); }
.ar-media img,
.ar-media video {
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 26px 60px -24px rgba(23, 24, 28, 0.4);
}
.ar-media figcaption {
  margin-top: 10px;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--ink-soft);
}

/* ── hero ── */
.hero-inner { max-width: 780px; margin-left: max(4vw, 76px); }
.hero-kicker {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.38em;
  color: var(--ink-soft);
  margin-bottom: 26px;
}
.hero-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(52px, 8.5vw, 112px);
  line-height: 0.98;
  letter-spacing: -0.015em;
  text-transform: uppercase;
}
.hero-title-row { display: block; }
.hero-title .split-target { display: inline-block; }
.hero-title .split-target > div { overflow: hidden; }
.ff-arrows {
  height: 0.6em;
  width: auto;
  fill: var(--yellow);
  margin-left: 0.12em;
  display: inline-block;
}
.hero-sub {
  margin-top: 28px;
  max-width: 460px;
  font-size: 15px;
  line-height: 1.9;
  color: var(--ink-soft);
}
.hero-scroll-hint {
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  letter-spacing: 0.3em;
  color: var(--ink-soft);
}
.hint-line {
  width: 1px; height: 46px;
  background: linear-gradient(var(--ink), transparent);
  animation: hint 2s ease-in-out infinite;
  transform-origin: top;
}
@keyframes hint {
  0% { transform: scaleY(0); opacity: 0; }
  40% { transform: scaleY(1); opacity: 1; }
  100% { transform: scaleY(1) translateY(18px); opacity: 0; }
}

/* ── end ── */
/* 后记：三拍各占一屏多，并给收尾运镜足够的滚动长度（速度才与前段匹配） */
.chapter--end { min-height: 490vh; }

/* 后记浮层：容器常显，由内部三拍各自控制淡入淡出 */
.overlay--end {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  opacity: 1;
  visibility: visible;
}
/* 用 flex 居中而非 transform 居中：JS 要用 transform 做位移动画 */
.end-stage {
  position: absolute;
  inset: 0;
  padding-left: max(var(--side-pad), var(--rail-gap));
  padding-right: var(--side-pad);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
}
.end-stage--outro { justify-content: flex-end; padding-bottom: 12vh; z-index: 2; }
/* 结尾按钮命中区：加大内边距并置顶，避免被其它浮层压住 */
/* pointer-events 写死为 auto，不依赖 .is-on：滚到页面最底部时该类若被移除，
   按钮会继承 #overlays 的 none 而变得点不动。 */
#back-top { position: relative; z-index: 3; padding: 16px 24px; pointer-events: auto; }
/* 满屏的三拍容器不能吃掉点击，否则侧栏章节点不到。
   必须压过 `.overlay.is-on > *`（特异度更高），否则依然会挡住。 */
.overlay--end.is-on > .end-stage { pointer-events: none; }
.overlay--end.is-on > .end-stage > * { pointer-events: auto; }
.end-title {
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: 0.06em;
  margin: 22px 0 36px;
  text-shadow: 0 2px 24px rgba(241, 241, 239, 0.9);
}
.end-copy {
  max-width: 560px;
  margin: 0 auto 26px;
  text-align: left;
  padding: 32px 36px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 4px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}
.end-copy p {
  font-size: 14.5px;
  line-height: 2.1;
  color: var(--ink-soft);
}
.end-copy p + p { margin-top: 14px; }
.end-copy .end-pull {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--card-border);
  font-size: 16px;
  font-weight: 500;
  color: var(--ink);
  text-align: center;
}
.end-copy .end-pull .ff-arrows { height: 0.7em; margin-left: 0.3em; }
/* 无描边、无边框：只有字与一条细下划线 */
#back-top {
  font-family: var(--font-display);
  font-size: 12.5px;
  letter-spacing: 0.26em;
  padding: 10px 2px;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(23, 24, 28, 0.28);
  border-radius: 0;
  cursor: pointer;
  color: var(--ink);
  transition: border-color 0.3s, letter-spacing 0.4s;
}
#back-top:hover { border-bottom-color: var(--ink); letter-spacing: 0.32em; }

/* ── 标牌浮动标签 ── */
#icon-labels { position: fixed; inset: 0; z-index: 15; pointer-events: none; }
.icon-label {
  position: absolute;
  /* 位置全部走 transform（JS 每帧覆写），不用 left/top：
     后者每帧触发一次布局，7 个标签叠加起来就是滚动时看到的抖动。 */
  left: 0;
  top: 0;
  transform: translate3d(-9999px, -9999px, 0) translate(-50%, -130%);
  will-change: transform;
  backface-visibility: hidden;
  background: var(--ink);
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.12em;
  padding: 6px 12px;
  border-radius: 999px;
  opacity: 0;
  transition: opacity 0.4s;
  white-space: nowrap;
}
.icon-label::after {
  content: "";
  position: absolute;
  left: 50%; top: 100%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--ink);
}
.icon-label.is-on { opacity: 1; }

/* ── 微交互 ── */
.photo-item .photo-crop { transition: box-shadow 0.4s; }
.photo-item:hover .photo-crop { box-shadow: 0 10px 40px -12px rgba(23, 24, 28, 0.35); }
.demo-frame,
.video-stage {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s;
}
.demo-frame:hover,
.video-stage:hover {
  transform: translateY(-5px);
  box-shadow: 0 40px 70px -24px rgba(23, 24, 28, 0.45);
}
.chip i { transition: transform 0.3s; }
.chip:hover i { transform: scaleX(1.25); }

/* ════════ 适配 ════════ */

/* 短屏（笔记本 768 高）：整体收紧，保证浮层不超出 */
@media (max-height: 840px) {
  .overlay { padding: 10vh 6vw 6vh; }
  .card { padding: 26px 26px; max-height: 82vh; }
  .card h2 { font-size: clamp(21px, 2.4vw, 28px); margin-bottom: 12px; }
  .card p { font-size: 13px; line-height: 1.85; }
  .card-no { font-size: 26px; }
  .hero-title { font-size: clamp(46px, 7.5vw, 92px); }
  .gallery-track .phone img,
.gallery-track .phone video { height: 42vh; }
  .skin-chips { gap: 6px; }
  .chip { padding: 9px 14px; font-size: 12px; }
  .end-copy { padding: 24px 28px; }
}

/* 窄屏 ── 平板与手机：浮层纵向堆叠 */
@media (max-width: 1024px) {
  :root { --side-pad: 6vw; --rail-gap: 96px; }
  .overlay { flex-direction: column; align-items: flex-start; justify-content: center; gap: 3vh; }
  .card { width: min(480px, 88vw); max-height: 56vh; }
  .photo-item { flex: 1; }
  .video-stage { width: min(260px, 60vw); }
  .ar-media figure { width: min(240px, 40vw); }
  .skins-card { width: min(480px, 88vw); }
}
@media (max-width: 820px) {
  :root { --side-pad: 5vw; --rail-gap: 42px; }
  #rail { left: 10px; }
  /* 顶栏两端的字在窄屏会各自折行并互相顶到一起：缩号、收字距、禁止折行 */
  #topbar { padding: 14px 16px 14px 34px; gap: 10px; }
  .topbar-logo,
.topbar-meta { white-space: nowrap; font-size: 10px; letter-spacing: 0.12em; }
  .topbar-logo { font-size: 12px; }
  .topbar-logo span { font-size: 9px; }
  /* 手机上卡片是压在城市上方而非并排，必须更实才读得清 */
  :root { --card-bg: rgba(255, 255, 255, 0.95); }
  /* 卡片按"扣掉左右内边距后的实际可用宽度"算，不再用固定 480px */
  .card,
.skins-card { width: calc(100vw - var(--side-pad) - var(--rail-gap)); max-width: none; max-height: 52vh; }
  .overlay { gap: 2vh; }
  .video-stage { width: min(200px, 44vw); }
  .ar-media figure { width: min(180px, 38vw); }
  .rail-dots li::after { display: none; }
  .hero-inner { margin-left: 0; }
  .gallery-head { flex-direction: column; gap: 8px; }
  .ar-media { flex-wrap: wrap; }
}

/* 回到街区上空的转场：城市散开期间收起所有文字层，避免闪烁 */
body.is-warping #overlays,
body.is-warping #icon-labels,
body.is-warping .hero-inner { opacity: 0; transition: opacity 0.35s; }

```

---

## `src/scroll/chapters.ts`

```ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { Experience, CameraState, K } from "../experience/Experience";
import { SKIN_SEQUENCE } from "../experience/palettes";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * 滚动编排
 *
 * - 章节 section 只是滚动空间；文字在 #overlays 固定浮层里，
 *   随章节进度淡入淡出——滚动过程中纹丝不动（解决跟滚晃动）。
 * - 相机：scrub 进度 → exp.desired → Experience 内部指数平滑。
 * - 全部动画建在 gsap.context() 内，destroy() 一次卸载（嵌入 Next.js 用）。
 */

interface Segment {
  el: string;
  from: CameraState;
  to: CameraState;
  mid?: { x: number; y: number; z: number };
  ease?: string;
  /** 段内进度重映射：让镜头提前到位、末尾留白（如结尾自转屏） */
  pMap?: (p: number) => number;
  onProgress?: (p: number) => void;
  onToggle?: (active: boolean) => void;
}

const lerpState = (seg: Segment, t: number, out: CameraState) => {
  const { from: a, to: b } = seg;
  if (seg.mid) {
    const u = 1 - t;
    const m = seg.mid;
    out.pos.set(
      u * u * a.pos.x + 2 * u * t * m.x + t * t * b.pos.x,
      u * u * a.pos.y + 2 * u * t * m.y + t * t * b.pos.y,
      u * u * a.pos.z + 2 * u * t * m.z + t * t * b.pos.z
    );
  } else {
    out.pos.lerpVectors(a.pos, b.pos, t);
  }
  out.target.lerpVectors(a.target, b.target, t);
};

/**
 * 构造段内进度映射：让镜头在段首缓入、段尾缓出。
 * 速度曲线是梯形（头 inF 比例从 0 线性升到 1，尾 outF 比例从 1 降到 0），
 * 位移取其归一化积分——因此速度连续，且端点速度恰为 0，
 * 用在"休止章节"（画廊 / 演进）两侧就不会出现速度断层。
 */
const ramp = (inF: number, outF: number) => {
  const total = 1 - inF / 2 - outF / 2;
  return (t: number) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    let area: number;
    if (t < inF) area = (t * t) / (2 * inF);
    else if (t < 1 - outF) area = inF / 2 + (t - inF);
    else {
      const u = t - (1 - outF);
      area = inF / 2 + (1 - inF - outF) + u - (u * u) / (2 * outF);
    }
    return area / total;
  };
};

const THREE_CLAMP = (v: number) => Math.min(1, Math.max(0, v));

const smoothstep = (x: number, min: number, max: number) => {
  const t = Math.min(1, Math.max(0, (x - min) / (max - min)));
  return t * t * (3 - 2 * t);
};

export interface ScrollHandle {
  playIntro: () => void;
  destroy: () => void;
}

export function setupScroll(exp: Experience): ScrollHandle {
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ── Lenis 平滑滚动（官方 GSAP 集成写法） ── */
  /* lerp 越小阻尼越强：微小滚轮输入被吸收，不会让画面产生细碎抖动 */
  const lenis = new Lenis({ lerp: 0.062, wheelMultiplier: 0.85 });
  const onLenisScroll = () => ScrollTrigger.update();
  lenis.on("scroll", onLenisScroll);
  const rafTick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(rafTick);
  gsap.ticker.lagSmoothing(0);

  const scratch: CameraState = K(0, 0, 0, 0, 0, 0);
  let introTl: gsap.core.Timeline | null = null;

  /** 回到城市上空的转场进行中——期间禁用吸附，避免争抢滚动控制权 */
  let warping = false;
  /** 吸附检测的 ticker 回调，destroy 时需要摘除 */
  let snapTickRef: (() => void) | null = null;

  const chips = Array.from(document.querySelectorAll<HTMLElement>("#skin-chips .chip"));
  const syncChips = (pos: number) => {
    const idx = Math.round(pos);
    chips.forEach((c, i) => c.classList.toggle("is-active", i === idx));
  };


  const segments: Segment[] = [
    {
      // 开场：远景全貌，镜头比上一版更近
      el: "#ch-hero",
      from: K(43, 27, 52, 0, 6, 0),
      to: K(33, 20, 43, 0, 6, 0),
      onProgress: () => exp.city.setSignsOpacity(0),
    },
    {
      // 01 起点：环绕城市；滚动同时驱动实景照片日→夜切换
      el: "#ch-context",
      from: K(33, 20, 43, 0, 6, 0),
      to: K(-44, 22, 38, 0, 6, 0),
      onProgress(p) {
        const photo = document.getElementById("context-photo");
        photo?.style.setProperty("--photoswap", String(smoothstep(p, 0.34, 0.72)));
        exp.city.setSignsOpacity(0); // 素体阶段无标牌
      },
    },
    {
      // 02 概念：绕到背面，炸开 → 重组（保持单色，上色留给开屏章节）
      el: "#ch-concept",
      from: K(-44, 22, 38, 0, 6, 0),
      to: K(-22, 34, -40, 0, 6, 0),
      /* 这一段原本是两点之间的直线，半径会从 58 一路掉到 33 再弹回 45.6——
         镜头等于横穿城市奔向一个写死的落点。改成沿城背的圆弧：
         方位角 139°→167°→188°→209°→241° 单调推进，半径 58.1→57.7→52.3→45.6
         平滑收拢，末端的方向与开屏那段的起始切线一致，交接处没有"到站"感。 */
      mid: { x: -81.3, y: 30, z: -14.6 },
      onProgress(p) {
        // 重组一直铺到本章最末才合拢：合并完成的那一刻镜头已经走到弧线尾段，
        // 而不是停在某个设定好的点位上
        const s = p < 0.42 ? p / 0.42 : Math.max(0, 1 - (p - 0.42) / 0.58);
        exp.city.setScatter(s);
        exp.city.setSignsOpacity(0); // 炸开与重组全程无标牌
      },
    },
    {
      // 03 开屏：视频从黑白像素进化到彩色——城市同步从单色染上色彩
      el: "#ch-opening",
      from: K(-22, 34, -40, 0, 6, 0),
      to: K(45.6, 34, 0, -0.5, 6, 0),
      /* 等距兜圈：起止两点到城心的距离都是 53.5，本章只绕不拉近。
         控制点取 R = r(2 - cos(θ/2))，能让二次贝塞尔贴合半径 45.6 的圆弧
         （实测全程半径 43.0~45.7），方位角 -119° → 0° 单调推进。
         收在 0°（正右侧）：把后面的弧留给远景去兜。 */
      mid: { x: 34.6, y: 38, z: -58.6 },
      onProgress(p) {
        exp.city.setMonoMix(1 - smoothstep(p, 0.15, 0.7));
        exp.city.setSignsOpacity(0); // 开屏章节全程不出现标牌
      },
    },
    {
      // 04 远景：升到高空俯瞰，立面标牌标签点亮
      el: "#ch-far",
      from: K(45.6, 34, 0, -0.5, 6, 0),
      to: K(4.7, 14, 18.4, -1.0, 4.0, 1.0),
      /* 接着开屏的旋转方向继续走，同时螺旋收拢——不再"先拉远再拉近"。
         弧长 80°，控制点落在角平分线 40°、半径 45.7（= 均值半径 / cos(θ/2)），偏向 +z（建筑正面）那侧，
         所以路径先朝正面荡出去再收回来。终点 (4.7, 18.4) 贴在会员中心（world x 4~8 / z 8~10）正前方约 8 格处，高度也压到 14。实测方位角 0°→18°→35°→53°→80° 单调增，
         半径 45.6→40.9→36.4→30.6→24.4 单调减：只朝一个方向转、一路收近。 */
      mid: { x: 32.3, y: 26, z: 25.1 },
      onToggle(a) {
        exp.setLabelsOn(a);
      },
      onProgress(p) {
        // 标牌在远景章节开头浮现（此前的章节全程无标牌）
        exp.city.setSignsOpacity(smoothstep(p, 0.06, 0.26));
      },
    },
    {
      // 05 近景：俯冲入城，落点对准中央雕塑纵列（基座→铬雕塑→飞行器）
      el: "#ch-dive",
      from: K(4.7, 14, 18.4, -1.0, 4.0, 1.0),
      to: K(-5.8, 3.4, 13.2, -1.5, 4.4, 3.5),
      /* 远景已经绕到 80°，近景只需再转 33.7°——横向变化很小，
         主要是往下沉、往里收：高度 18→3.4、半径 24.4→14.4，
         看上去就是"降下去拉近"，而不是再绕半圈。 */
      mid: { x: -1.5, y: 10, z: 17.6 },
    },
    {
      // 06 界面画廊：前景遮挡期间，机位悄悄退到中景
      el: "#ch-gallery",
      from: K(-5.8, 3.4, 13.2, -1.5, 4.4, 3.5),
      to: K(32, 19, 40, -1.5, 5, 1),
    },
    {
      // 07 延展：沿弧线拉出环绕；环绕楼群回满色，让换肤铺满全城
      el: "#ch-skins",
      from: K(32, 19, 40, -1.5, 5, 1),
      to: K(-40, 24, 44, 0, 6, 0),
      mid: { x: 4, y: 32, z: 64 },
      onProgress(p) {
        const w = smoothstep(p, 0, 0.2) * (1 - smoothstep(p, 0.85, 1));
        exp.city.setRingWash(0.12 * (1 - w));
        exp.city.setBaseReturn(0); // 本章要看到联名本身
      },
    },
    {
      // 08 演进：承接上一段的向左运动，并在本章中段（约 62%）平滑折返向右，
      // 折返点放在章节内部而不是交界处，衔接才不会"先左突然向右"。
      el: "#ch-ar",
      from: K(-40, 24, 44, 0, 6, 0),
      to: K(-46, 27, 12, 0, 6.5, 0),
      mid: { x: -56, y: 26, z: 32 },
      // 从高定金香槟平缓回到基础配色：直接混合，不经过任何中间联名
      // 回归基础配色：铺满整个演进章节，慢慢褪回来
      onProgress: (p) => exp.city.setBaseReturn(smoothstep(p, 0.08, 0.95)),
    },
    {
      // 后记：沿弧线稳稳转到正面远景。终点距离与开场相当，不再过度拉远；
      // 停稳后由 setAutoSpin 让场景缓慢自转。
      el: "#ch-end",
      from: K(-46, 27, 12, 0, 6.5, 0),
      to: K(30, 20, 38, 0, 6, 0), // 终点比开场略近
      /* 控制点大幅外扩并抬高：镜头先荡开、越过城市上空再俯身回落，
         视差和高差都足够强。x 仍单调递增（-44 → -16 → 30），
         所以不会出现"向左闪回再向右"，冲击力和连贯性两者兼顾。 */
      mid: { x: -34, y: 27, z: 36 },
      /* 全片唯一带缓动的一段：这是真正的终点，需要"停稳"。
         用 ease-out 而非 inOut——起始速度与上一段的匀速衔接，末端才减速。
         80% 时到位，最后一屏留给自转。 */
      // 段首从演进的低速缓缓提起，末端在最后一屏之前停稳（之后交给自转）
      // 唯一保留的缓动：终点到站收势（纯尾部减速，不做缓入）
      pMap: (p) => ramp(0, 0.34)(Math.min(1, p / 0.84)),
    },
  ];

  /* ═══════════ 全部动画收进 context ═══════════ */
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 821px)",
        isMobile: "(max-width: 820px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (mmCtx) => {
        const { isDesktop, reduceMotion } = mmCtx.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        /* ── 相机段落 ── */
        for (const seg of segments) {
          if (reduceMotion) {
            ScrollTrigger.create({
              trigger: seg.el,
              start: "top 60%",
              end: "bottom 40%",
              onToggle(self) {
                if (self.isActive) {
                  lerpState(seg, 1, scratch);
                  exp.desired.pos.copy(scratch.pos);
                  exp.desired.target.copy(scratch.target);
                  seg.onProgress?.(1);
                }
                seg.onToggle?.(self.isActive);
              },
            });
            continue;
          }
          const easeFn = seg.ease ? gsap.parseEase(seg.ease) : null;
          ScrollTrigger.create({
            trigger: seg.el,
            /* 关键：以视口中线为界，相邻章节首尾相接、互不重叠。
               用 top bottom / bottom top 时每对相邻区间会重叠整整一屏，
               两段同时写相机、后者覆盖前者，这正是衔接不自然的根因。 */
            start: seg.el === "#ch-hero" ? "top top" : "top center",
            end: "bottom center",
            scrub: true,
            onUpdate(self) {
              const raw = seg.pMap ? seg.pMap(self.progress) : self.progress;
              const p = easeFn ? easeFn(raw) : raw;
              lerpState(seg, p, scratch);
              exp.desired.pos.copy(scratch.pos);
              exp.desired.target.copy(scratch.target);
              seg.onProgress?.(p);
            },
            onToggle(self) {
              seg.onToggle?.(self.isActive);
            },
          });
        }
        if (reduceMotion) {
          exp.city.setScatter(0);
          exp.city.setMonoMix(0);
        }

        /* ── 后记三拍：标题 → 正文 → 全景无 UI ── */
        const endOverlay = document.querySelector<HTMLElement>(".overlay--end");
        if (endOverlay) {
          const stages = Array.from(endOverlay.querySelectorAll<HTMLElement>(".end-stage"));
          const band = (p: number, a: number, b: number, c: number, d: number) =>
            smoothstep(p, a, b) * (1 - smoothstep(p, c, d));
          ScrollTrigger.create({
            trigger: "#ch-end",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate(self) {
              const p = self.progress;
              const o = [
                band(p, 0.04, 0.16, 0.28, 0.4), // 一拍：只有标题
                band(p, 0.44, 0.56, 0.7, 0.82), // 二拍：正文与信息
                smoothstep(p, 0.86, 0.96), // 三拍：全景，只留按钮
              ];
              stages.forEach((el, i) => {
                el.style.opacity = String(o[i]);
                el.style.visibility = o[i] > 0.01 ? "visible" : "hidden";
                el.style.transform = `translateY(${(1 - o[i]) * 22}px)`;
              });
              endOverlay.classList.toggle("is-on", Math.max(...o) > 0.01);
            },
          });
        }

        /* ── 浮层：随章节进度淡入淡出，滚动中位置固定 ── */
        const overlays = gsap.utils
          .toArray<HTMLElement>("#overlays .overlay")
          .filter((el) => !el.classList.contains("overlay--end"));
        for (const overlay of overlays) {
          const forSel = `#${overlay.dataset.for}`;
          if (!document.querySelector(forSel)) continue;
          if (reduceMotion) {
            ScrollTrigger.create({
              trigger: forSel,
              start: "top 60%",
              end: "bottom 40%",
              onToggle(self) {
                overlay.classList.toggle("is-on", self.isActive);
                overlay.style.opacity = self.isActive ? "1" : "0";
              },
            });
            continue;
          }
          ScrollTrigger.create({
            trigger: forSel,
            // 与相机区间同源（略微提前进入、延后退出，形成交叉淡化）
            start: "top 78%",
            end: "bottom 22%",
            scrub: true,
            onUpdate(self) {
              const p = self.progress;
              /* 淡入起点 / 淡出终点可由 data-fade-in、data-fade-out 覆写：
                 远景提前收、近景延后开，两者之间就留出一段纯画面的间歇。 */
              const i0 = +(overlay.dataset.fadeIn ?? 0.06);
              const o1 = +(overlay.dataset.fadeOut ?? 0.94);
              const fadeIn = smoothstep(p, i0, i0 + 0.14);
              const fadeOut = 1 - smoothstep(p, o1 - 0.14, o1);
              const o = fadeIn * fadeOut;
              overlay.style.opacity = String(o);
              overlay.style.transform = `translateY(${(1 - fadeIn) * 34 - (1 - fadeOut) * 22}px)`;
              /* 不再做入场模糊：filter 会让整层浮层（含正在播放的视频）每帧重新
                 栅格化，实测在章节交界处会多出 20~30ms 的长帧。淡入 + 上移已经够了。 */
              overlay.classList.toggle("is-on", o > 0.01);
            },
          });
        }

        /* 后记不再复位色板：把 skinPos 插值回 0 必然依次经过
           星夜→波普→蒙德里安，视觉上就是"回闪其他颜色"。
           保留观众最后选定的皮肤，结尾更连贯。 */

        /* ── 换肤进度 ── */
        ScrollTrigger.create({
          trigger: "#ch-skins",
          start: "top 45%",
          end: "bottom 80%",
          scrub: reduceMotion ? false : true,
          onUpdate(self) {
            /* 不要在 progress<=0 时提前 return——那样滚回上方章节时
               skinPos 会停在最后选中的联名（例如星夜），导致后续章节
               一路残留花纹墙体。让本章完整拥有 skinPos 的全区间。 */
            const pos = self.progress * (SKIN_SEQUENCE.length - 1);
            if (self.progress > 0) exp.city.setMonoMix(0);
            exp.city.setSkinPos(pos);
            syncChips(pos);
          },
        });

        /* ── 界面画廊：横向推进 + 焦点放大（居中的样机放大，两侧收小变淡） ── */
        const track = document.getElementById("gallery-track")!;
        const pin = document.getElementById("gallery-pin")!;
        const phones = Array.from(track.querySelectorAll<HTMLElement>(".phone"));
        const updateFocus = () => {
          const mid = innerWidth / 2;
          for (const phone of phones) {
            const r = phone.getBoundingClientRect();
            const d = Math.abs(r.left + r.width / 2 - mid);
            const focus = Math.max(0, 1 - d / (innerWidth * 0.3));
            phone.style.setProperty("--focus", focus.toFixed(3));
          }
        };
        if (isDesktop && !reduceMotion) {
          /* 位移直接由滚动进度驱动：首、尾样机都能正好停在屏幕正中。
             （用 fromTo 的函数式起始值在 pin 场景下不可靠，会到不了最后一张） */
          const centerX = (el: HTMLElement) =>
            innerWidth / 2 - (el.offsetLeft + el.offsetWidth / 2);
          let sx = 0;
          let ex = 0;
          const measure = () => {
            if (!phones.length) return;
            sx = centerX(phones[0]);
            ex = centerX(phones[phones.length - 1]);
          };
          const applyGallery = (p: number) => {
            gsap.set(track, { x: sx + (ex - sx) * p });
            updateFocus();
          };
          measure();
          ScrollTrigger.create({
            trigger: "#ch-gallery",
            start: "top top",
            end: () => `+=${Math.max(1, sx - ex)}`,
            pin,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            refreshPriority: 1,
            onRefresh(self) {
              measure();
              applyGallery(self.progress);
            },
            onUpdate(self) {
              applyGallery(self.progress);
            },
          });
        } else {
          track.classList.add("is-native-scroll");
          gsap.set(track, { clearProps: "transform" });
          phones.forEach((p) => p.style.setProperty("--focus", "1"));
          track.addEventListener("scroll", updateFocus, { passive: true });
        }

        /* ── 流内元素 reveal（hero 之外只剩画廊头与结尾） ── */
        gsap.utils
          .toArray<HTMLElement>(".gallery-head, .end-copy")
          .forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: reduceMotion ? 0 : 36,
              duration: reduceMotion ? 0.3 : 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
                fastScrollEnd: true,
              },
            });
          });

        /* ── Hero 开场：SplitText 逐字揭示 ── */
        introTl = gsap.timeline({ paused: true });
        const splits: SplitText[] = [];
        gsap.utils.toArray<HTMLElement>(".hero-title .split-target").forEach((row, i) => {
          const split = SplitText.create(row, { type: "chars", mask: "chars" });
          splits.push(split);
          introTl!.from(
            split.chars,
            {
              yPercent: reduceMotion ? 0 : 118,
              opacity: reduceMotion ? 0 : 1,
              duration: reduceMotion ? 0.3 : 1.2,
              // power2.out 比 expo.out 更沉稳：没有那种猛地窜出的感觉
              ease: "power2.out",
              stagger: reduceMotion ? 0 : 0.038,
            },
            i * 0.16
          );
        });
        introTl
          .from(".hero-inner .hero-kicker", { opacity: 0, y: 18, duration: 1.1, ease: "power2.out" }, 0)
          .from(".hero-title .ff-arrows", { opacity: 0, scale: 0.7, duration: 0.9, ease: "back.out(1.6)" }, 0.85)
          .from(".hero-sub", { opacity: 0, y: 26, duration: 1.2, ease: "power2.out" }, 0.95)
          .from(".hero-scroll-hint", { opacity: 0, duration: 0.9 }, 1.35)
          .from("#topbar", { opacity: 0, duration: 1.1 }, 0.15);

        return () => {
          splits.forEach((s) => s.revert());
          introTl?.kill();
          introTl = null;
          track.classList.remove("is-native-scroll");
        };
      }
    );

    /* ── 开屏视频：进入章节才加载并播放 ── */
    const video = document.querySelector<HTMLVideoElement>(".video-stage video");
    if (video) {
      ScrollTrigger.create({
        trigger: "#ch-opening",
        start: "top 80%",
        end: "bottom 20%",
        onToggle(self) {
          if (self.isActive) {
            video.preload = "auto";
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
      });
    }

    /* ── 换肤色卡：点击平滑过渡 ── */
    const skinProxy = { v: 0 };
    chips.forEach((chip, i) => {
      chip.addEventListener("click", () => {
        skinProxy.v = exp.city.getSkinPos();
        gsap.to(skinProxy, {
          v: i,
          duration: 1.1,
          ease: "power2.inOut",
          overwrite: true,
          onUpdate() {
            exp.city.setMonoMix(0);
            exp.city.setSkinPos(skinProxy.v);
          },
        });
        syncChips(i);
      });
    });

    /* ── 左侧黄线进度轨 ── */
    const fill = document.getElementById("rail-fill")!;
    const dotsWrap = document.getElementById("rail-dots")!;
    const sections = gsap.utils.toArray<HTMLElement>(".chapter");
    const dots = sections.map((sec) => {
      const li = document.createElement("li");
      li.dataset.title = sec.dataset.title ?? "";
      li.addEventListener("click", () => lenis.scrollTo(sec, { duration: 1.6 }));
      dotsWrap.appendChild(li);
      return li;
    });
    /* 滚动吸附：在每个章节的起点与中点设停靠点，滚动停下后轻轻吸过去。
       小幅滚动会被吸回原处，画面因此不会随微小滚动抖动；
       大幅滚动则正常推进（snap 只在滚动停止 delay 之后才触发）。 */
    const snapPoints = () => {
      const max = ScrollTrigger.maxScroll(window);
      if (max <= 0) return [0];
      const step = innerHeight * 0.5; // 每半屏一个停靠点
      const pts = new Set<number>([0, 1]);
      for (let y = 0; y <= max; y += step) pts.add(THREE_CLAMP(y / max));
      // 章节起点也作为停靠点，滚到章节开头会自然对齐
      for (const sec of gsap.utils.toArray<HTMLElement>(".chapter")) {
        pts.add(THREE_CLAMP(sec.offsetTop / max));
      }
      return [...pts].sort((a, b) => a - b);
    };
    let cachedPoints = snapPoints();
    ScrollTrigger.addEventListener("refresh", () => (cachedPoints = snapPoints()));

    /* 滚动吸附
       在 GSAP ticker 里主动检测"滚动已静止"，而不是依赖 Lenis 的 scroll 事件
       （实测滚轮之后该事件不会再触发）。静止约 180ms 后，若离最近的停靠点
       在半径内就轻轻吸过去：小幅滚动被收拢回原处，画面不会因微小滚动而抖动；
       大幅滚动超出半径，正常推进不受干扰。 */
    /* 停靠半径用视口比例而非全页比例：页面越长时前者不会跟着膨胀，
       否则会把人从原处硬拽走几百像素。 */
    const snapRadius = () => innerHeight * 0.18;
    let lastY = -1;
    let stableAt = 0;
    let snapArmed = true;
    const snapTick = () => {
      if (warping) return;
      // 自动化审计时可临时关闭吸附，避免它把测量用的滚动位置拉走
      if (import.meta.env.DEV && (window as any).__TKL_NOSNAP__) return;
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 0.6) {
        lastY = y;
        stableAt = 0;
        snapArmed = true;
        return;
      }
      if (!snapArmed) return;
      const now = performance.now();
      if (stableAt === 0) {
        stableAt = now;
        return;
      }
      if (now - stableAt < 180) return;
      snapArmed = false; // 一次静止只吸附一次，避免自我触发
      const max = ScrollTrigger.maxScroll(window);
      if (max <= 0) return;
      let best = -1;
      let bestD = Infinity;
      for (const q of cachedPoints) {
        const d = Math.abs(q * max - y);
        if (d < bestD) {
          bestD = d;
          best = q * max;
        }
      }
      if (best < 0 || bestD <= 2 || bestD > snapRadius()) return;
      lenis.scrollTo(best, {
        duration: 0.55,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    };
    gsap.ticker.add(snapTick);
    snapTickRef = snapTick;

    ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      invalidateOnRefresh: true,
      onUpdate(self) {
        fill.style.height = `${self.progress * 100}%`;
        // 自转只在真正停在底部时开启；稍一上滚立即交还给滚动镜头
        // 转场期间必须锁死自转，否则它会和相机归位争抢控制权
        const atBottom = ScrollTrigger.maxScroll(window) - self.scroll() < 3;
        exp.setAutoSpin(!warping && atBottom ? 1 : 0);
      },
    });
    sections.forEach((sec, i) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 50%",
        end: "bottom 50%",
        onToggle(self) {
          if (self.isActive) dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
        },
      });
    });

    /* 回到街区上空：不做"倒放整篇"的反向滚动，而是复用概念章节的体素语言——
       城市散开 → 在散开的掩护下把滚动与相机瞬时归位 → 城市重新聚合成开场画面。 */
    /* 用 document 捕获阶段 + pointerdown：
       比绑在按钮上的 click 稳得多——不受浮层堆叠顺序、pointer-events 继承、
       或任何在冒泡途中吞掉 click 的逻辑影响。 */
    /* 触发器加固：
       - pointerdown 与 click 双保险（任一先到即执行，warping 保证只跑一次）
       - 捕获阶段监听 document，不受浮层堆叠 / pointer-events / 冒泡拦截影响
       - 看门狗：万一时间线异常中断，8 秒后强制解锁，不会永久卡住 */
    const backBtn = document.getElementById("back-top");
    const startWarp = (ev: Event) => {
      const t = ev.target as HTMLElement | null;
      let onBtn = !!t && !!t.closest("#back-top");
      /* 坐标兜底：即便有浮层把事件目标抢走，只要指针落在按钮矩形内就算命中。
         这让按钮的优先级高于任何堆叠顺序 / pointer-events 继承。 */
      if (!onBtn && backBtn && backBtn.offsetParent !== null) {
        const pe = ev as PointerEvent;
        const r = backBtn.getBoundingClientRect();
        if (r.width > 0 && typeof pe.clientX === "number")
          onBtn = pe.clientX >= r.left && pe.clientX <= r.right && pe.clientY >= r.top && pe.clientY <= r.bottom;
      }
      if (!onBtn) return;
      if (import.meta.env.DEV) console.log("[回到上空] 已触发", ev.type, "warping=", warping);
      if (warping) return;
      warping = true;
      window.setTimeout(() => {
        if (warping) {
          warping = false;
          lenis.start();
          document.body.classList.remove("is-warping");
        }
      }, 8000);
      /* 回到街区上空：一次"波纹式消散 → 重建"。
         方块沿离城心的距离由内向外依次升空、缩小、消融；画面归空后
         才做滚动与相机的瞬时归位，因此跳转完全不可见；随后由外向内
         逐层落回，重新聚成开场画面。炸开效果留给概念章节专用，两处不重复。 */
      const proxy = { d: 0 };
      const push = () => exp.city.setDissolve(proxy.d);
      document.body.classList.add("is-warping");
      lenis.stop();
      /* 先冻结再消散：freezeSpin 把已转过的角度并入机位，
         所以旋转是"就地停住"，而不是倒着转回自转起点。 */
      exp.freezeSpin();

      gsap.timeline({
        onComplete() {
          document.body.classList.remove("is-warping");
          lenis.start();
          warping = false;
        },
      })
        // 消散：由内向外一圈圈升空消融
        .to(proxy, { d: 1, duration: 1.9, ease: "power1.inOut", onUpdate: push })
        // 画面已空：此刻归位，跳转不可见
        .add(() => {
          lenis.scrollTo(0, { immediate: true, force: true });
          // 兜底：Lenis 若因任何状态未生效，用原生滚动强制归零再同步回去
          if (window.scrollY > 5) {
            window.scrollTo(0, 0);
            lenis.scrollTo(0, { immediate: true, force: true });
          }
          ScrollTrigger.update();
          exp.snapCamera();
          exp.city.setDissolve(1);
        })
        .to({}, { duration: 0.12 })
        // 重建：由外向内逐层落回
        .to(proxy, { d: 0, duration: 2.6, ease: "power2.out", onUpdate: push })
        // 文字与重建的尾段重叠登场，不必空等整条时间线跑完
          .add(() => {
            /* 必须先摘掉 is-warping 再播开场：该类会把 .hero-inner 透明度压到 0，
               若留到时间线结束才摘，文字的上划动画会在遮罩下白播一遍。 */
            document.body.classList.remove("is-warping");
            introTl?.play(0);
          }, "-=1.35");
    };
    document.addEventListener("pointerdown", startWarp, true);
    document.addEventListener("click", startWarp, true);
  });

  /* ── 图片 / 字体就绪后统一重算 ── */
  const refreshWhenReady = () => {
    const imgs = Array.from(document.images).filter((img) => !img.complete);
    if (!imgs.length) {
      ScrollTrigger.refresh(true);
      return;
    }
    let left = imgs.length;
    const done = () => {
      if (--left <= 0) ScrollTrigger.refresh(true);
    };
    imgs.forEach((img) => {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  };
  document.fonts?.ready.then(() => ScrollTrigger.refresh(true));
  window.addEventListener("load", refreshWhenReady, { once: true });
  refreshWhenReady();

  // 调试探针：仅开发环境挂载，生产构建会被摇树移除
  if (import.meta.env.DEV) {
  /* 各标牌最终挂在哪一格、朝哪一面 */
  (window as any).__TKL_SIGNS__ = () =>
    ((exp.city as any).allSigns ?? []).map((h: any) => h.userData.mount).filter(Boolean);
  /* 读回实例矩阵中浮动方块的实际 Y：验证浮动确实生效，并实测幅度。
     （只看 cluster.offset 不够——矩阵有没有真的写下去是两回事。） */
  (window as any).__TKL_MATY__ = () => {
    const c = exp.city as any;
    const out: Record<string, number> = {};
    for (const b of c.buildings ?? []) {
      const i = b.cubes.findIndex((cu: any) => cu.floatCluster >= 0);
      if (i < 0) continue;
      out[b.index] = +b.mesh.instanceMatrix.array[i * 16 + 13].toFixed(3);
    }
    return out;
  };
  /* 悬浮碰撞检查：每个悬浮簇下沉时，与其正下方静止方块的最小净空。 */
  (window as any).__TKL_FLOATCHK__ = () => {
    const c = exp.city as any;
    const out: any[] = [];
    for (const b of c.buildings ?? []) {
      const per = new Map<number, { n: number; clear: number }>();
      const columns = new Map<string, number[]>();
      for (const cu of b.cubes) {
        if (cu.floatCluster >= 0) continue;
        const k = cu.x + "," + cu.z;
        const arr = columns.get(k);
        if (arr) arr.push(cu.y);
        else columns.set(k, [cu.y]);
      }
      for (const cu of b.cubes) {
        if (cu.floatCluster < 0) continue;
        const e = per.get(cu.floatCluster) ?? { n: 0, clear: Infinity };
        e.n++;
        for (const sy of columns.get(cu.x + "," + cu.z) ?? [])
          if (sy < cu.y) e.clear = Math.min(e.clear, cu.y - sy - 1);
        per.set(cu.floatCluster, e);
      }
      for (const [cid, e] of per) {
        const cl = b.clusters[cid];
        const sink = -cl.down; // 实际下沉量
        out.push({
          楼: b.index,
          簇: cid,
          方块数: e.n,
          最小净空: e.clear === Infinity ? "悬空" : +e.clear.toFixed(2),
          行程: `${cl.down.toFixed(2)} ~ ${cl.up.toFixed(2)}`,
          幅度: +(cl.up - cl.down).toFixed(2),
          判定: e.clear === Infinity || sink <= e.clear + 1e-6 ? "OK" : "穿模 " + (sink - e.clear).toFixed(2),
        });
      }
    }
    return out;
  };
  /* 消散同步探针：给定消散度，返回方块消失比例与标牌消失比例，两者应当同步。 */
  (window as any).__TKL_DISSOLVE__ = (v: number) => {
    const c = exp.city as any;
    c.setDissolve(v);
    let cubes = 0, gone = 0;
    for (const b of c.buildings ?? [])
      for (const cu of b.cubes) { cubes++; if (c.localDissolve(cu.wave) > 0.99) gone++; }
    const signs = c.allSigns ?? [];
    const signGone = signs.filter((h: any) => !h.visible).length;
    return {
      消散度: v,
      方块已消失: +(gone / Math.max(1, cubes) * 100).toFixed(1),
      标牌已消失: +(signGone / Math.max(1, signs.length) * 100).toFixed(1),
      飞行器: c.portal.group.visible, 雕塑: c.chrome.mesh.visible,
    };
  };
  (window as any).__TKL_DEBUG__ = () => {
    const c = exp.city as any;
    const cam = exp.camera.position;
    return {
      cam: [+cam.x.toFixed(2), +cam.y.toFixed(2), +cam.z.toFixed(2)],
      desired: [
        +exp.desired.pos.x.toFixed(2),
        +exp.desired.pos.y.toFixed(2),
        +exp.desired.pos.z.toFixed(2),
      ],
      desiredTarget: [
        +exp.desired.target.x.toFixed(2),
        +exp.desired.target.y.toFixed(2),
        +exp.desired.target.z.toFixed(2),
      ],
      autoSpin: (exp as any).autoSpin,
      skinPos: exp.city.getSkinPos(),
      mapMix: c.mapMix?.value,
      monoMix: c.monoMix,
      scatter: c.scatter,
      dissolve: c.dissolve,
      baseReturn: c.baseReturn,
      floatScale: c.floatScale,
      signs: c.allSigns?.length,
      signMounts: exp.city.icons.map((i: any) => i.id + (Math.abs(i.mesh.rotation.x) > 1 ? ":顶面" : ":立面")),
      labels: exp.city.icons.length,
      floatingSigns: c.floatingSigns?.map((f: any) => ({ b: f.building.index, cl: f.cluster })),
      floatByBuilding: c.buildings
        ?.filter((x: any) => x.hasFloaters)
        .map((x: any) => ({
          idx: x.index,
          clusters: x.clusters.length,
          cells: x.cubes.filter((q: any) => q.floatCluster >= 0).length,
        })),
    };
  };
  }

  return {
    playIntro: () => introTl?.play(0),
    destroy() {
      ctx.revert();
      lenis.off("scroll", onLenisScroll);
      gsap.ticker.remove(rafTick);
      if (snapTickRef) gsap.ticker.remove(snapTickRef);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    },
  };
}

```

---

## `src/experience/Experience.ts`

```ts
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { VoxelCity } from "./VoxelCity";

export interface CameraState {
  pos: THREE.Vector3;
  target: THREE.Vector3;
}

export const K = (px: number, py: number, pz: number, tx: number, ty: number, tz: number): CameraState => ({
  pos: new THREE.Vector3(px, py, pz),
  target: new THREE.Vector3(tx, ty, tz),
});

/** 渲染器 + 场景 + 摄像机装置。滚动逻辑只需要写 desired 状态，这里负责平滑跟随。 */
export class Experience {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  city: VoxelCity;

  /** 滚动侧写入的目标机位 */
  desired: CameraState = K(43, 27, 52, 0, 6, 0);

  private currentPos = new THREE.Vector3().copy(this.desired.pos);
  private currentTarget = new THREE.Vector3().copy(this.desired.target);
  private mouse = new THREE.Vector2();
  private parallax = new THREE.Vector2();
  private clock = new THREE.Clock();
  private labelEls = new Map<string, HTMLElement>();
  /** 标签的屏幕坐标（做二次平滑用）；on=false 表示上一帧不在画面内 */
  private labelPos = new Map<string, { x: number; y: number; on: boolean }>();
  private labelsOn = false;
  private v = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement) {
    const isMobile = window.matchMedia("(max-width: 820px)").matches;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: false,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.scene.background = new THREE.Color("#f1f1ef");
    this.scene.fog = new THREE.Fog("#f1f1ef", 130, 250);

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 400);

    // 环境反射：RoomEnvironment + 暖色补光板（移植自原模型的摄影棚配置）
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const studio = new RoomEnvironment();
    const panelGeometry = new THREE.PlaneGeometry(12, 12);
    const panels = [
      { color: "#fff0d5", intensity: 4.4, position: [0, 12, 4], rotation: [Math.PI / 2, 0, 0], scale: [1.8, 1, 1] },
      { color: "#ffc38f", intensity: 3.25, position: [-11, 6, -2], rotation: [0, Math.PI / 2, 0], scale: [1.2, 1, 1] },
      { color: "#d88465", intensity: 2.65, position: [11, 5, -4], rotation: [0, -Math.PI / 2, 0], scale: [1, 0.9, 1] },
      { color: "#ffe2be", intensity: 3.1, position: [0, 6, 12], rotation: [0, 0, 0], scale: [1.4, 0.8, 1] },
    ] as const;
    for (const panel of panels) {
      const mesh = new THREE.Mesh(
        panelGeometry,
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(panel.color).multiplyScalar(panel.intensity),
          side: THREE.DoubleSide,
          toneMapped: false,
        })
      );
      mesh.position.set(panel.position[0], panel.position[1], panel.position[2]);
      mesh.rotation.set(panel.rotation[0], panel.rotation[1], panel.rotation[2]);
      mesh.scale.set(panel.scale[0], panel.scale[1], panel.scale[2]);
      studio.add(mesh);
    }
    this.scene.environment = pmrem.fromScene(studio, 0.055).texture;
    pmrem.dispose();

    // 灯光：暖主光 + 冷侧逆光（轮廓感），环境光稍降让明暗更立体
    const dir = new THREE.DirectionalLight("#fff2e0", 2.1);
    dir.position.set(30, 50, 20);
    this.scene.add(dir);
    const rim = new THREE.DirectionalLight("#cfe0ff", 0.7);
    rim.position.set(-24, 30, -28);
    this.scene.add(rim);
    this.scene.add(new THREE.AmbientLight("#ffffff", 0.42));

    this.city = new VoxelCity(isMobile ? 0.6 : 1, isMobile);
    this.scene.add(this.city.group);

    // 接触阴影：中心建筑群下方一片柔和的暗渍（假 AO，成本为零但落地感强）
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = shadowCanvas.height = 256;
    const sctx = shadowCanvas.getContext("2d")!;
    const grad = sctx.createRadialGradient(128, 128, 20, 128, 128, 128);
    grad.addColorStop(0, "rgba(20,18,26,0.34)");
    grad.addColorStop(0.55, "rgba(20,18,26,0.16)");
    grad.addColorStop(1, "rgba(20,18,26,0)");
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 256, 256);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const contactShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(72, 66),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.set(0, 0.015, 0);
    this.scene.add(contactShadow);

    // 背景与地面始终保持浅灰摄影棚（换肤只改建筑本身，不改环境）

    this.buildIconLabels();
    /* 贴图与着色器预热：标牌贴图是异步加载的，必须等它们全部到齐再做，
       否则 compile 时纹理还是空的，开销照样留在远景章节那一帧。 */
    this.city.onSignTexReady = () => this.city.warmUpSigns(this.renderer, this.scene, this.camera);

    window.addEventListener("resize", this.onResize);
    window.addEventListener("pointermove", this.onPointerMove);
    this.resize();

    this.renderer.setAnimationLoop(() => this.tick());
  }

  /** 结尾自转：仅在滚到底部时开启；一旦滚动，镜头控制权立即交还给滚动动画 */
  private autoSpin = 0; // 目标值 0/1
  private spinBlend = 0; // 平滑后的实际混合度
  private spinAngle = 0;
  setAutoSpin(v: number) {
    this.autoSpin = THREE.MathUtils.clamp(v, 0, 1);
  }

  /** 立即冻结自转：把已累积的角度并入当前机位与目标机位后清零。
      画面既不跳变、也不会像 blend 自然衰减那样倒着转回自转起点——
      「点击后直接停止旋转」靠的就是这一步。 */
  freezeSpin() {
    const ang = this.spinAngle * this.spinBlend;
    this.autoSpin = 0;
    this.spinAngle = 0;
    this.spinBlend = 0;
    if (Math.abs(ang) < 1e-4) return;
    const cos = Math.cos(ang), sin = Math.sin(ang);
    const rot = (v: THREE.Vector3) => {
      const ox = v.x - this.currentTarget.x;
      const oz = v.z - this.currentTarget.z;
      v.x = this.currentTarget.x + ox * cos - oz * sin;
      v.z = this.currentTarget.z + ox * sin + oz * cos;
    };
    rot(this.currentPos);
    rot(this.desired.pos); // 目标位同步，否则相机会缓缓漂回未自转的位置
  }

  /** 相机瞬时归位到 desired（转场遮罩期间使用，避免归位过程被看到） */
  snapCamera() {
    this.currentPos.copy(this.desired.pos);
    this.currentTarget.copy(this.desired.target);
    this.spinAngle = 0;
    this.spinBlend = 0;
  }

  private onResize = () => this.resize();
  private onPointerMove = (e: PointerEvent) => {
    this.mouse.set((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
  };

  /** 完整卸载：停循环、摘监听、释放 GPU 资源（嵌入 SPA 时必须调用） */
  destroy() {
    this.renderer.setAnimationLoop(null);
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("pointermove", this.onPointerMove);
    this.labelEls.forEach((el) => el.remove());
    this.labelEls.clear();
    this.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (!mat) return;
      const list = Array.isArray(mat) ? mat : [mat];
      for (const m of list) {
        for (const value of Object.values(m)) {
          if (value && (value as THREE.Texture).isTexture) (value as THREE.Texture).dispose();
        }
        m.dispose();
      }
    });
    this.scene.environment?.dispose();
    this.renderer.dispose();
  }

  private buildIconLabels() {
    const wrap = document.getElementById("icon-labels")!;
    for (const icon of this.city.icons) {
      const el = document.createElement("div");
      el.className = "icon-label";
      el.textContent = icon.label;
      wrap.appendChild(el);
      this.labelEls.set(icon.id, el);
      this.labelPos.set(icon.id, { x: 0, y: 0, on: false });
    }
  }

  /** ch4 远景章节开关标签 */
  setLabelsOn(on: boolean) {
    if (on === this.labelsOn) return;
    this.labelsOn = on;
    if (!on) {
      this.labelEls.forEach((el) => el.classList.remove("is-on"));
      // 重新入画时要直接就位，否则会从上次的旧坐标滑进来
      this.labelPos.forEach((s) => (s.on = false));
    }
  }

  private resize() {
    const w = innerWidth, h = innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  private tick() {
    // 必须先取 delta 再读 elapsedTime：getElapsedTime() 内部会消费掉 delta，
    // 反序会让 dt 恒接近 0，相机平滑系数随之失真。
    const dt = Math.min(this.clock.getDelta(), 0.05) || 0.016;
    const t = this.clock.elapsedTime;

    // 平滑跟随目标机位（丝滑的关键：帧率无关的指数平滑）
    // 跟随时间常数放缓：镜头更有惯性，微小滚动不会立刻反映为画面抖动
    const k = 1 - Math.exp(-dt * 3.4);
    this.parallax.lerp(this.mouse, 1 - Math.exp(-dt * 2.5));
    this.currentPos.lerp(this.desired.pos, k);
    this.currentTarget.lerp(this.desired.target, k);

    // 鼠标视差：在机位垂直平面上偏移
    const dist = this.currentPos.distanceTo(this.currentTarget);
    const px = this.parallax.x * Math.min(2.4, dist * 0.04);
    const py = -this.parallax.y * Math.min(1.4, dist * 0.025);
    this.camera.position.copy(this.currentPos);

    /* 结尾自转：只在停在底部时累积角度；离开底部后 blend 平滑归零，
       相机自然回到滚动动画给定的位置，两者不会同时争夺控制权。 */
    this.spinBlend += (this.autoSpin - this.spinBlend) * (1 - Math.exp(-dt * 1.8));
    if (this.autoSpin > 0.5) this.spinAngle += dt * 0.05;
    else if (this.spinBlend < 0.002) this.spinAngle = 0;
    const spinAng = this.spinAngle * this.spinBlend;
    if (Math.abs(spinAng) > 1e-4) {
      const ox = this.camera.position.x - this.currentTarget.x;
      const oz = this.camera.position.z - this.currentTarget.z;
      const cos = Math.cos(spinAng);
      const sin = Math.sin(spinAng);
      this.camera.position.x = this.currentTarget.x + ox * cos - oz * sin;
      this.camera.position.z = this.currentTarget.z + ox * sin + oz * cos;
    }

    this.camera.position.x += px;
    this.camera.position.y += py;
    this.camera.lookAt(this.currentTarget);

    this.city.update(t);
    this.city.updateOcclusion(this.camera.position, this.currentTarget);

    // 图标标签投影
    if (this.labelsOn) {
      // 屏幕空间再做一层平滑：相机已经是平滑的，但投影对机位极敏感，
      // 近处标签仍会随滚动高频抖动。约 90ms 的时间常数够压住抖，又不会明显拖尾。
      const la = 1 - Math.exp(-dt * 11);
      for (const icon of this.city.icons) {
        const el = this.labelEls.get(icon.id)!;
        const s = this.labelPos.get(icon.id)!;
        // 用挂载基准点而非实时世界坐标：牌子随建筑浮动，但文字标签保持稳定
        this.v.copy(icon.worldPos);
        this.v.y += 1.4;
        this.v.project(this.camera);
        const behind = this.v.z > 1;
        if (behind || Math.abs(this.v.x) > 1.05 || Math.abs(this.v.y) > 1.05) {
          el.classList.remove("is-on");
          s.on = false;
          continue;
        }
        const tx = (this.v.x * 0.5 + 0.5) * innerWidth;
        const ty = (-this.v.y * 0.5 + 0.5) * innerHeight;
        if (s.on) {
          s.x += (tx - s.x) * la;
          s.y += (ty - s.y) * la;
        } else {
          s.x = tx;
          s.y = ty;
          s.on = true;
        }
        el.classList.add("is-on");
        el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0) translate(-50%, -130%)`;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

```

---

## `src/experience/VoxelCity.ts`

```ts
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { PALETTES, pickColor, SKIN_SEQUENCE } from "./palettes";
import {
  TAIKOO_CENTER,
  CENTER_BOUNDS,
  BUILDING_SURFACES,
  BUILDING_THEMES,
  BUILDING_POSITIONS,
  type CenterVoxel,
} from "./taikoo/model";
import { SIGN_PLACEMENTS, SIGN_LABELS } from "./taikoo/signs";
import { TaikooPortal, ChromeSculpture } from "./taikoo/portal";

/** 立面/顶面标牌：正好覆盖 2×2，厚度很薄，平贴在建筑表面 */
const PLAQUE_THICK = 0.16;
/** 悬浮：统一角频率；行程向下 0.7 格、向上 0.3 格 */
const FLOAT_OMEGA = 0.78;
const FLOAT_DOWN = -0.38;
const FLOAT_UP = 0.17;
/** 浮动总幅度恒为一格；下沉量按净空裁剪后，整段行程随之上移 */
const FLOAT_TRAVEL = FLOAT_UP - FLOAT_DOWN;
const PLAQUE_HALF = PLAQUE_THICK / 2;

/**
 * 这几栋楼结构上仍与地面相连，但设计稿里上半部分是浮动的：
 * 3 = 潮玩社区，6 = 智能客服旁同高度那栋，12 = 宇宙中心后方那栋
 */
const FLOAT_TOP_BUILDINGS = new Set([3, 6, 12]);

/**
 * 消散波相位：由离城心的水平距离与高度合成，
 * 中心低处最先消散、外围高处最后消散，形成一圈圈向外扩散的波。
 */
function waveOf(x: number, y: number, z: number) {
  const d = Math.hypot(x, z) / 46; // 归一化到城市半径
  const h = y / 14;
  return Math.min(1, d * 0.72 + h * 0.28);
}

/** 回归基础配色时的临时色 */
const tmpBase = new THREE.Color();

/** mulberry32 种子随机，保证每次刷新城市形态一致 */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface RingCube {
  base: THREE.Vector3;
  scatterDir: THREE.Vector3;
  angle: number;
  rand: number;
  /** 消散波相位 0..1 */
  wave: number;
}

interface CenterCube extends CenterVoxel {
  scatterDir: THREE.Vector3;
  angle: number;
  /** 悬浮簇编号；-1 = 落地静止（原动画里只有脱离地面的簇在浮动） */
  floatCluster: number;
  /** 消散波相位 0..1：越大越晚消散、越早重现 */
  wave: number;
}

/**
 * 悬浮簇（对照 PPT 远景演示）：
 * 全部使用同一频率、同样的行程（一个方块单位），只有相位彼此错开，
 * 因此各建筑此起彼伏但节奏一致；行程不对称——向下 0.7、向上 0.3。
 */
interface FloatCluster {
  phase: number;
  /** 当前帧的垂直偏移（簇内共享） */
  offset: number;
  /** 本簇的行程下界：按它与正下方静止方块的净空裁剪，避免沉进楼体 */
  down: number;
  /** 行程上界 = down + 一格，总幅度恒定 */
  up: number;
}

interface Building {
  index: number;
  group: THREE.Group;
  mesh: THREE.InstancedMesh;
  cubes: CenterCube[];
  clusters: FloatCluster[];
  hasFloaters: boolean;
}

export interface IconCube {
  id: string;
  label: string;
  /** 标牌所属对象（随建筑浮动），投影标签时取世界坐标 */
  mesh: THREE.Object3D;
  worldPos: THREE.Vector3;
}

/**
 * 城市 = 中心建筑群（用户复原的 12 栋镂空模型，逐栋独立浮动 + 原位立面标牌）
 *      + 环绕楼群（程序化背景，退为衬托：更远、更矮、色彩更淡）
 *      + 中央雕塑（悬浮球 / 光环 / 金色双箭头）
 */
export class VoxelCity {
  group = new THREE.Group();
  icons: IconCube[] = [];

  private buildings: Building[] = [];
  private ringMesh!: THREE.InstancedMesh;
  private ringCubes: RingCube[] = [];
  private dummy = new THREE.Object3D();
  private cubeMat!: THREE.MeshPhysicalMaterial;
  private ringMat!: THREE.MeshPhysicalMaterial;
  /** 星夜贴图混合度 uniform（0=无贴图，1=每块砖一片画） */
  private mapMix = { value: 0 };
  private starryTex: THREE.CanvasTexture | null = null;
  /** 当前主题的逐块明暗抖动强度 */
  private themeVariation = 1;
  /**
   * 回归基础配色的混合度（0=当前联名，1=完全回到晶体玻璃）。
   * 用"当前色 → 基础色"的直接混合，而不是把 skinPos 插值回 0——
   * 后者必然依次经过星夜、波普、蒙德里安，视觉上就是一路回闪。
   */
  private baseReturn = 0;
  /** 尚未加载完的标牌贴图数量；归零时触发预热 */
  private signTexPending = 0;
  /** 标牌贴图全部就绪的回调（Experience 用它做 GPU 预热） */
  onSignTexReady: (() => void) | null = null;
  /** 全部立面标牌（含小号），进出场编排统一管理 */
  private allSigns: THREE.Group[] = [];
  /** 挂在悬浮簇上的标牌，需每帧跟随该簇位移 */
  private floatingSigns: Array<{
    holder: THREE.Group;
    building: Building;
    cluster: number;
    baseY: number;
  }> = [];
  /** 外围建筑的遮挡淡出属性 */
  private ringFadeAttr!: THREE.InstancedBufferAttribute;
  private occFrame = 0;

  private monoMix = 1;
  private skinPos = 0;
  private scatter = 0;
  /** 环绕楼群向背景色的混合度（最初版本是全饱和，默认仅 0.05 极轻降调） */
  private ringWash = 0.05;
  private dirty = { color: true, matrix: true };
  /** 悬浮簇动画总开关（炸开时收零） */
  private floatScale = 1;

  private portal!: TaikooPortal;
  private chrome!: ChromeSculpture;
  /** 中央 4×4 低层建筑（building-11，x -3..0 / z 1..4）的几何中心 */
  private sculptureAnchor = new THREE.Vector3(-1.5, 0, 2.5);

  /**
   * 每个色板的材质性格——数值对照 PPT 各联名效果图定的，不是通用微调：
   *  glass    宝石玻璃：高透射、低粗糙
   *  mondrian 哑光塑料：完全不透明、无清漆、粗糙面（参考图里是柔和的无光泽原色块）
   *  koons    镜面铬：满金属度 + 近乎镜面，环境反射拉满（参考图是全镜面糖果色）
   *  vangogh  哑光颜料 + 笔触凹凸 + 星夜贴图
   *  dior     琥珀金属玻璃：高金属度 + 部分透射，暖金质感
   */
  private static THEME_MAT: Record<
    string,
    {
      metalness: number;
      roughness: number;
      clearcoat: number;
      clearcoatRoughness: number;
      transmission: number;
      thickness: number;
      ior: number;
      envMapIntensity: number;
      bumpScale: number;
      iridescence: number;
      /** 逐块明暗抖动强度：蒙德里安要平整，波普/玻璃可以强一些 */
      variation: number;
    }
  > = {
    glass:    { metalness: 0.0,  roughness: 0.06, clearcoat: 1,    clearcoatRoughness: 0.06, transmission: 0.90, thickness: 0.80, ior: 1.45, envMapIntensity: 1.30, bumpScale: 0,    iridescence: 0.05, variation: 1.0 },
    mondrian: { metalness: 0.0,  roughness: 0.62, clearcoat: 0,    clearcoatRoughness: 0.60, transmission: 0.00, thickness: 0.00, ior: 1.40, envMapIntensity: 0.55, bumpScale: 0,    iridescence: 0.00, variation: 0.25 },
    koons:    { metalness: 1.0,  roughness: 0.025,clearcoat: 1,    clearcoatRoughness: 0.02, transmission: 0.00, thickness: 0.00, ior: 2.40, envMapIntensity: 3.20, bumpScale: 0,    iridescence: 0.85, variation: 0.7 },
    vangogh:  { metalness: 0.04, roughness: 0.70, clearcoat: 0.10, clearcoatRoughness: 0.55, transmission: 0.00, thickness: 0.00, ior: 1.40, envMapIntensity: 0.55, bumpScale: 0.85, iridescence: 0.00, variation: 0.5 },
    dior:     { metalness: 0.82, roughness: 0.09, clearcoat: 1,    clearcoatRoughness: 0.06, transmission: 0.30, thickness: 0.55, ior: 1.70, envMapIntensity: 2.60, bumpScale: 0,    iridescence: 0.12, variation: 0.8 },
  };

  constructor(private densityScale = 1, private lowPerf = false) {
    this.build();
  }

  /* ───────────────────────── 生成 ───────────────────────── */

  private build() {
    const rnd = mulberry32(20230116);
    // 中心建筑：细倒角 + 真折射玻璃（低端设备退回清漆树脂）；换肤时整套材质随主题变形
    const geo = new RoundedBoxGeometry(0.94, 0.94, 0.94, 2, 0.04);
    this.cubeMat = this.lowPerf
      ? new THREE.MeshPhysicalMaterial({
          color: "#ffffff",
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          metalness: 0.05,
          roughness: 0.15,
          envMapIntensity: 1.5,
        })
      : new THREE.MeshPhysicalMaterial({
          color: "#ffffff",
          metalness: 0,
          roughness: 0.06,
          clearcoat: 1,
          clearcoatRoughness: 0.06,
          transmission: 0.9,
          thickness: 0.8,
          ior: 1.45,
          envMapIntensity: 1.3,
          bumpMap: makeBrushBump(),
          bumpScale: 0,
        });
    // 星夜画布延迟挂载：只在接近"星夜"色板时才赋给 map，
    // 否则 USE_MAP 会通过透射通道把纹理漏到其它章节
    this.starryTex = this.lowPerf ? null : makeStarryTexture();
    // "每个砖块不一样"：每个方块采样星夜画布的不同区域（实例化 UV 偏移），
    // 换肤到"星夜"时 uMapMix→1，整片建筑群拼成一幅被打散重组的画
    if (!this.lowPerf) {
      this.cubeMat.onBeforeCompile = (shader) => {
        shader.uniforms.uMapMix = this.mapMix;
        shader.vertexShader = shader.vertexShader
          .replace("#include <common>", "#include <common>\nattribute vec3 aUvRect;")
          .replace(
            "#include <uv_vertex>",
            "#include <uv_vertex>\n#ifdef USE_MAP\n\tvMapUv = vMapUv * aUvRect.z + aUvRect.xy;\n#endif"
          );
        shader.fragmentShader = shader.fragmentShader
          .replace("#include <common>", "#include <common>\nuniform float uMapMix;")
          .replace(
            "#include <map_fragment>",
            "#ifdef USE_MAP\n\tvec4 tklTexel = texture2D( map, vMapUv );\n\tdiffuseColor.rgb = mix( diffuseColor.rgb, tklTexel.rgb, uMapMix );\n#endif"
          );
      };
      this.cubeMat.customProgramCacheKey = () => "tkl-center-starry";
    }
    // 外围楼群：完整保留最初版本的配方——锐边方块 + 半透明宝石玻璃，不随主题变形
    const ringGeo = new THREE.BoxGeometry(0.92, 0.92, 0.92);
    this.ringMat = new THREE.MeshPhysicalMaterial({
      metalness: 0,
      roughness: 0.16,
      transparent: true,
      opacity: 0.85,
      envMapIntensity: 1.05, // 亮度整体压低，衬托中心
      clearcoat: 0.5,
      clearcoatRoughness: 0.25,
    });

    const makeScatterDir = (x: number, z: number) => {
      const dir = new THREE.Vector3(x, 0, z);
      if (dir.lengthSq() < 0.01) dir.set(1, 0, 0);
      dir.normalize();
      return new THREE.Vector3(
        dir.x + (rnd() - 0.5) * 1.2,
        0.6 + rnd() * 1.6,
        dir.z + (rnd() - 0.5) * 1.2
      )
        .normalize()
        .multiplyScalar(20 + rnd() * 32);
    };

    /* ── 中心：12 栋建筑各自成组 ── */
    const byBuilding = new Map<number, CenterVoxel[]>();
    for (const v of TAIKOO_CENTER) {
      const list = byBuilding.get(v.buildingIndex) ?? [];
      list.push(v);
      byBuilding.set(v.buildingIndex, list);
    }
    for (const [index, voxels] of byBuilding) {
      const cubes: CenterCube[] = voxels.map((v) => ({
        ...v,
        scatterDir: makeScatterDir(v.x, v.z),
        angle: Math.atan2(v.z, v.x),
        floatCluster: -1,
        wave: waveOf(v.x, v.y, v.z),
      }));

      /* 悬浮簇分析（对应原 GIF 演示：只有脱离地面的方块簇在浮动）——
         从落地层做 6 邻域连通遍历，未被触达的连通分量即悬浮簇 */
      const key = (x: number, y: number, z: number) => `${x},${y},${z}`;
      const cellIndex = new Map<string, number>();
      cubes.forEach((c, i) => cellIndex.set(key(c.x, c.y - 0.5, c.z), i));
      /* 只有与地面"完全不相连"的方块簇才浮动——即 PPT 里那些上下分离的部分。
         （用"正下方是否有支撑"的严格判定会把实心楼的悬挑也算进来，那是错的。） */
      const dirs = [
        [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
      ];
      const grounded = new Set<number>();
      const queue: number[] = [];
      cubes.forEach((c, i) => {
        if (Math.round(c.y - 0.5) === 0) { grounded.add(i); queue.push(i); }
      });
      while (queue.length) {
        const i = queue.pop()!;
        const c = cubes[i];
        for (const [dx, dy, dz] of dirs) {
          const j = cellIndex.get(key(c.x + dx, c.y - 0.5 + dy, c.z + dz));
          if (j !== undefined && !grounded.has(j)) { grounded.add(j); queue.push(j); }
        }
      }
      const clusters: FloatCluster[] = [];
      const clusterOf = new Map<number, number>();
      const pendingMembers: number[][] = [];
      cubes.forEach((_, i) => {
        if (grounded.has(i) || clusterOf.has(i)) return;
        const cid = clusters.length;
        pendingMembers.push([]);
        // 频率与行程全局统一，只把相位错开，形成此起彼伏的韵律
        clusters.push({ phase: rnd() * Math.PI * 2, offset: 0, down: FLOAT_DOWN, up: FLOAT_UP });
        const bfs = [i];
        clusterOf.set(i, cid);
        pendingMembers[cid].push(i);
        while (bfs.length) {
          const a = bfs.pop()!;
          const c = cubes[a];
          for (const [dx, dy, dz] of dirs) {
            const j = cellIndex.get(key(c.x + dx, c.y - 0.5 + dy, c.z + dz));
            if (j !== undefined && !grounded.has(j) && !clusterOf.has(j)) {
              clusterOf.set(j, cid);
              pendingMembers[cid].push(j);
              bfs.push(j);
            }
          }
        }
      });
      // 太小的簇（1–2 块）会显得零碎抖动，忽略掉
      clusterOf.forEach((cid, i) => {
        if (pendingMembers[cid].length >= 3) cubes[i].floatCluster = cid;
      });

      /* 这几栋的镂空在设计稿里本来就把上下断开了——每一列都有竖向断点，
         只是断点高度各不相同。6 邻域连通遍历会顺着错落的缺口"绕"上去，
         于是误判成与地面相连。改为逐列找该列最高的那处断点，断点以上归入
         同一个悬浮簇：上半部分整体浮动，且每列与下方都留着至少一格空隙。 */
      if (FLOAT_TOP_BUILDINGS.has(index)) {
        const byColumn = new Map<string, number[]>();
        for (const c of cubes) {
          if (c.floatCluster >= 0) continue;
          const k = c.x + "," + c.z;
          const y = Math.round(c.y - 0.5);
          const arr = byColumn.get(k);
          if (arr) arr.push(y);
          else byColumn.set(k, [y]);
        }
        /** 列 → 该列悬浮部分的起始层（该列最高一处断点之上） */
        const floatFrom = new Map<string, number>();
        for (const [k, ys] of byColumn) {
          ys.sort((p, q) => p - q);
          for (let i = ys.length - 1; i > 0; i--)
            if (ys[i] - ys[i - 1] > 1) {
              floatFrom.set(k, ys[i]);
              break;
            }
        }
        // 先收集再落簇：数量不足时直接放弃，不会留下指向已弹出簇的悬空编号
        const picked: number[] = [];
        cubes.forEach((c, i) => {
          if (c.floatCluster >= 0) return;
          const from = floatFrom.get(c.x + "," + c.z);
          if (from !== undefined && Math.round(c.y - 0.5) >= from) picked.push(i);
        });
        /* 兜底：整栋没有任何镂空的实心楼（如 12 号，2×3×7 完整长方体）
           逐列找不到断点，退回"最窄腰线以上整体浮动"。这类楼腰线上下贴合、
           净空为 0，后面的行程裁剪会自动把它改成纯向上浮，同样不会穿模。 */
        if (picked.length < 3) {
          const perY = new Map<number, number>();
          let maxY = 0;
          for (const c of cubes) {
            const y = Math.round(c.y - 0.5);
            perY.set(y, (perY.get(y) ?? 0) + 1);
            if (y > maxY) maxY = y;
          }
          let waist = -1;
          let waistCount = Infinity;
          for (let y = Math.ceil(maxY * 0.45); y <= maxY - 2; y++) {
            const n = perY.get(y) ?? 0;
            if (n > 0 && n < waistCount) {
              waistCount = n;
              waist = y;
            }
          }
          if (waist > 0) {
            picked.length = 0;
            cubes.forEach((c, i) => {
              if (c.floatCluster < 0 && Math.round(c.y - 0.5) > waist) picked.push(i);
            });
          }
        }
        if (picked.length >= 3) {
          const cid = clusters.length;
          clusters.push({ phase: rnd() * Math.PI * 2, offset: 0, down: FLOAT_DOWN, up: FLOAT_UP });
          for (const i of picked) cubes[i].floatCluster = cid;
        }
      }

      /* 行程按"正下方净空"裁剪：总幅度仍是一格，但下沉量不会超过该簇与
         其正下方静止方块之间的空隙。腰线以上整体浮动的那几栋（会员社区、
         智能客服旁那栋、宇宙中心后那栋）净空为 0，因此改为纯向上浮动，
         不再下沉 0.7 格而穿进楼体。真正脱离地面的簇净空为 1，规格不变。 */
      if (clusters.length) {
        const staticCols = new Map<string, number[]>();
        for (const c of cubes) {
          if (c.floatCluster >= 0) continue;
          const k = c.x + "," + c.z;
          const arr = staticCols.get(k);
          if (arr) arr.push(c.y);
          else staticCols.set(k, [c.y]);
        }
        const clear = new Array<number>(clusters.length).fill(Infinity);
        for (const c of cubes) {
          if (c.floatCluster < 0) continue;
          for (const sy of staticCols.get(c.x + "," + c.z) ?? [])
            if (sy < c.y) clear[c.floatCluster] = Math.min(clear[c.floatCluster], c.y - sy - 1);
        }
        for (let i = 0; i < clusters.length; i++) {
          clusters[i].down = -Math.min(-FLOAT_DOWN, Math.max(0, clear[i]));
          clusters[i].up = clusters[i].down + FLOAT_TRAVEL;
        }
      }

      // 每栋建筑克隆几何以携带自己的实例化 UV 区域（星夜贴图的"每块砖一片画"）
      const bGeo = geo.clone();
      const uvRect = new Float32Array(cubes.length * 3);
      for (let i = 0; i < cubes.length; i++) {
        const scale = 0.2 + rnd() * 0.14;
        uvRect[i * 3] = rnd() * (1 - scale);
        uvRect[i * 3 + 1] = rnd() * (1 - scale);
        uvRect[i * 3 + 2] = scale;
      }
      bGeo.setAttribute("aUvRect", new THREE.InstancedBufferAttribute(uvRect, 3));
      const mesh = new THREE.InstancedMesh(bGeo, this.cubeMat, cubes.length);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.instanceColor = new THREE.InstancedBufferAttribute(
        new Float32Array(cubes.length * 3),
        3
      );
      const group = new THREE.Group();
      group.add(mesh);
      this.group.add(group);
      this.buildings.push({
        index,
        group,
        mesh,
        cubes,
        clusters,
        hasFloaters: clusters.length > 0,
      });
    }
    this.buildSigns();

    /* ── 环绕楼群（背景衬托） ── */
    const margin = 7;
    const keepClear = (x: number, z: number) =>
      x > CENTER_BOUNDS.minX - margin &&
      x < CENTER_BOUNDS.maxX + margin &&
      z > CENTER_BOUNDS.minZ - margin &&
      z < CENTER_BOUNDS.maxZ + margin;
    // 俯冲镜头进场走廊：只留一条窄缝，不再切掉整个象限（初版四周是完整环绕的）
    const inCorridor = (x: number, z: number) => x > 2 && x < 15 && z > 18;

    const ringCubes: RingCube[] = [];
    const occupied = new Set<string>();
    const addRingCube = (x: number, y: number, z: number) => {
      const k = `${x},${y},${z}`;
      if (occupied.has(k)) return;
      occupied.add(k);
      ringCubes.push({
        base: new THREE.Vector3(x, y, z),
        scatterDir: makeScatterDir(x, z),
        angle: Math.atan2(z, x),
        rand: rnd(),
        wave: waveOf(x, y, z),
      });
    };

    // 环绕楼群：沿用最初版本的塔楼形态（错落阶梯、彩色玻璃），略高于主建筑群
    const towerCount = Math.round(38 * this.densityScale);
    const placed: { x: number; z: number; r: number }[] = [];
    for (let i = 0; i < towerCount; i++) {
      let cx = 0,
        cz = 0,
        ok = false;
      for (let attempt = 0; attempt < 60 && !ok; attempt++) {
        const ang = rnd() * Math.PI * 2;
        const dist = 24 + rnd() * 18;
        cx = Math.round(Math.cos(ang) * dist);
        cz = Math.round(Math.sin(ang) * dist * 0.9);
        ok =
          !keepClear(cx, cz) &&
          !inCorridor(cx, cz) &&
          placed.every((p) => (p.x - cx) ** 2 + (p.z - cz) ** 2 > (p.r + 3.2) ** 2);
      }
      if (!ok) continue;
      const w = 2 + Math.floor(rnd() * 3);
      const d = 2 + Math.floor(rnd() * 3);
      const distC0 = Math.hypot(cx, cz);
      const hMax = 5 + Math.min(12, Math.round((distC0 - 22) * 0.55 + rnd() * 5));
      placed.push({ x: cx, z: cz, r: Math.max(w, d) });
      for (let ix = 0; ix < w; ix++) {
        for (let iz = 0; iz < d; iz++) {
          const hCol = Math.max(2, Math.round(hMax * (0.55 + rnd() * 0.5)));
          for (let iy = 0; iy < hCol; iy++) {
            if (iy > 1 && rnd() < 0.06) continue;
            addRingCube(cx + ix - Math.floor(w / 2), iy + 0.5, cz + iz - Math.floor(d / 2));
          }
        }
      }
    }
    const platCount = Math.round(14 * this.densityScale);
    for (let i = 0; i < platCount; i++) {
      const ang = rnd() * Math.PI * 2;
      const dist = 23 + rnd() * 16;
      const cx = Math.round(Math.cos(ang) * dist);
      const cz = Math.round(Math.sin(ang) * dist * 0.9);
      if (keepClear(cx, cz) || inCorridor(cx, cz)) continue;
      const w = 1 + Math.floor(rnd() * 3);
      const d = 1 + Math.floor(rnd() * 3);
      for (let ix = 0; ix < w; ix++)
        for (let iz = 0; iz < d; iz++)
          if (rnd() > 0.2) addRingCube(cx + ix, 0.5, cz + iz);
    }
    this.ringCubes = ringCubes;
    // 遮挡淡出：每个外围实例带一个 aFade（1=正常，0=完全透明）
    const fadeArr = new Float32Array(ringCubes.length).fill(1);
    this.ringFadeAttr = new THREE.InstancedBufferAttribute(fadeArr, 1);
    ringGeo.setAttribute("aFade", this.ringFadeAttr);
    this.ringMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nattribute float aFade;\nvarying float vFade;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\n\tvFade = aFade;");
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying float vFade;")
        .replace(
          "#include <dithering_fragment>",
          "#include <dithering_fragment>\n\tgl_FragColor.a *= vFade;"
        );
    };
    this.ringMat.customProgramCacheKey = () => "tkl-ring-fade";
    this.ringMesh = new THREE.InstancedMesh(ringGeo, this.ringMat, ringCubes.length);
    this.ringMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.ringMesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(ringCubes.length * 3),
      3
    );
    this.group.add(this.ringMesh);

    this.buildSculpture();
    this.buildGround();

    this.applyMatrices();
    this.applyColors();
    this.setSignsOpacity(0); // 标牌初始隐藏，滚到远景章节才浮现
  }

  /**
   * 立面标牌
   * - 主牌覆盖 2×2、小牌覆盖 1×1，都平贴在建筑外露面上（对照 PPT 效果图）
   * - 朝向在 ±x / ±z 四个水平面里挑：必须外露，并优先朝向镜头常在的前右方
   * - 若挂载处属于悬浮簇，标牌每帧跟随该簇一起浮动
   */
  private buildSigns() {
    const loader = new THREE.TextureLoader();
    const bigGeo = new RoundedBoxGeometry(1.92, 1.92, PLAQUE_THICK, 4, 0.06);
    const smallGeo = new RoundedBoxGeometry(0.94, 0.94, PLAQUE_THICK, 3, 0.04);
    /* transparent 必须在这里就设成 true。它是 THREE 的着色器程序缓存键之一，
       如果留到 applySignAppearance 里才翻转，MeshPhysicalMaterial 这套最贵的
       着色器会在远景章节标牌首次淡入时整批重编译——实测那一帧要 76ms。 */
    const plaqueMat = new THREE.MeshPhysicalMaterial({
      transparent: true,
      opacity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      color: "#171311",
      envMapIntensity: 1.55,
      metalness: 0.34,
      roughness: 0.16,
    });

    /**
     * 可挂载的面。原始 SIGN_PLACEMENTS 里带 rotation 的（会员社区/停车服务/会员中心）
     * 本就是顶面牌，只在顶面里选；其余在四个水平面里选，
     * weight 越大表示越朝向镜头常驻的前右方。
     */
    type Face = { nx: number; ny: number; nz: number; weight: number; top?: boolean };
    const SIDE_FACES: Face[] = [
      { nx: 0, ny: 0, nz: 1, weight: 1.0 },
      { nx: 1, ny: 0, nz: 0, weight: 0.85 },
      { nx: -1, ny: 0, nz: 0, weight: 0.25 },
      { nx: 0, ny: 0, nz: -1, weight: 0.15 },
    ];
    const TOP_FACES: Face[] = [{ nx: 0, ny: 1, nz: 0, weight: 1, top: true }];
    const faceRotation = (f: Face) =>
      f.top
        ? new THREE.Euler(-Math.PI / 2, 0, 0)
        : new THREE.Euler(0, Math.atan2(f.nx, f.nz), 0);

    for (const placement of SIGN_PLACEMENTS) {
      const building = this.buildings.find((b) => b.index === placement.buildingIndex);
      if (!building) continue;
      const base = BUILDING_POSITIONS[placement.buildingIndex] ?? { x: 0, y: 0, z: 0 };
      const isSmall = placement.scale < 1;
      const span = isSmall ? 1 : 2; // 覆盖的方块数

      // 该栋楼的占用格 + 所属悬浮簇
      const cellCluster = new Map<string, number>();
      const ck = (x: number, y: number, z: number) =>
        `${Math.round(x)},${Math.round(y)},${Math.round(z)}`;
      for (const c of building.cubes) {
        cellCluster.set(ck(c.x, c.y - 0.5, c.z), c.floatCluster);
      }
      const filled = (x: number, y: number, z: number) => cellCluster.has(ck(x, y, z));

      const wx0 = base.x + placement.localPosition[0];
      const wy0 = base.y + placement.localPosition[1];
      const wz0 = base.z + placement.localPosition[2];

      /* 候选偏移：2×2 牌挂在四格公共角点（±0.5），1×1 牌挂在单格中心（0） */
      const offs: number[] = span === 2 ? [-0.5, 0.5] : [0];
      const quad: Array<[number, number]> =
        span === 2 ? [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]] : [[0, 0]];

      let best = Infinity;
      let chosen: {
        x: number; y: number; z: number; face: Face; cluster: number;
      } | null = null;

      // 原数据带 rotation 的是顶面牌，只在顶面里找
      const candidates = placement.rotation ? TOP_FACES : SIDE_FACES;

      for (const face of candidates) {
        for (const c of building.cubes) {
          const cy = Math.round(c.y - 0.5);
          // 该格在此朝向上必须外露
          if (filled(c.x + face.nx, cy + face.ny, c.z + face.nz)) continue;
          for (const oa of offs) {
            for (const ob of offs) {
              /* 面内的两个轴：顶面是 x/z，立面是 (水平轴)/y */
              const ax = face.top ? c.x + oa : face.nz !== 0 ? c.x + oa : c.x;
              const az = face.top ? c.z + ob : face.nx !== 0 ? c.z + oa : c.z;
              const ay = face.top ? cy : cy + ob;
              // 2×2 立面牌的最低合法中心是 0.5（覆盖 y=0、1），低矮楼全靠它
              if (!face.top && ay < (isSmall ? 0 : 0.5)) continue;
              // 覆盖范围内每一格都要存在、且都朝该方向外露
              let ok = true;
              let cluster = -2;
              for (const [du, dv] of quad) {
                const qx = face.top ? ax + du : face.nz !== 0 ? ax + du : ax;
                const qz = face.top ? az + dv : face.nx !== 0 ? az + du : az;
                const qy = face.top ? ay : ay + dv;
                if (
                  !filled(qx, qy, qz) ||
                  filled(qx + face.nx, qy + face.ny, qz + face.nz)
                ) {
                  ok = false;
                  break;
                }
                const cl = cellCluster.get(ck(qx, qy, qz)) ?? -1;
                if (cluster === -2) cluster = cl;
                else if (cluster !== cl) { ok = false; break; } // 不能横跨两个运动状态
              }
              if (!ok) continue;
              // 越接近原设计位置、越朝向镜头，得分越低；顶面牌额外偏好更高的楼层
              const d =
                (ax - wx0) ** 2 + (ay - wy0) ** 2 + (az - wz0) ** 2 +
                (1 - face.weight) * 26 +
                (face.top ? -ay * 1.2 : 0);
              if (d < best) {
                best = d;
                chosen = { x: ax, y: ay, z: az, face, cluster };
              }
            }
          }
        }
      }
      if (!chosen) continue;

      /* 方块中心 =(x, cellY+0.5, z)、半边长 0.47；面板平贴其外表面并微微凸出 */
      const face = chosen.face;
      const holder = new THREE.Group();
      holder.position.set(
        chosen.x + face.nx * (0.47 + PLAQUE_HALF),
        chosen.y + 0.5 + face.ny * (0.47 + PLAQUE_HALF),
        chosen.z + face.nz * (0.47 + PLAQUE_HALF)
      );
      holder.rotation.copy(faceRotation(face));

      holder.add(new THREE.Mesh(isSmall ? smallGeo : bigGeo, plaqueMat));

      this.signTexPending++;
      const tex = loader.load(placement.url, () => {
        // 贴图是异步到的：全部到齐后才预热，否则 compile 时纹理还是空的
        if (--this.signTexPending === 0) this.onSignTexReady?.();
      }, undefined, () => {
        if (--this.signTexPending === 0) this.onSignTexReady?.();
      });
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      const glyph = new THREE.Mesh(
        new THREE.PlaneGeometry(isSmall ? 0.74 : 1.5, isSmall ? 0.74 : 1.5),
        new THREE.MeshBasicMaterial({
          map: tex,
          alphaTest: 0.05,
          transparent: true,
          toneMapped: false,
          polygonOffset: true,
          polygonOffsetFactor: -2,
        })
      );
      glyph.position.z = PLAQUE_THICK / 2 + 0.004;
      holder.add(glyph);
      // 记下挂载方块的波相位：标牌要和它所在的那批方块同时消散，
      // 而不是等全城消散过半后统一 pop 掉（否则牌子会悬在空气里）
      holder.userData.wave = waveOf(chosen.x, chosen.y, chosen.z);
      // 调试用：记下最终挂载格与朝向，便于核对牌子落在楼体的哪一面哪一格
      holder.userData.mount = { kind: placement.kind, scale: placement.scale,
        cell: [chosen.x, chosen.y, chosen.z], n: [face.nx, face.ny, face.nz] };
      building.group.add(holder);
      this.allSigns.push(holder);

      // 挂载处若属于悬浮簇，标牌每帧跟随该簇上下浮动
      if (chosen.cluster >= 0) {
        this.floatingSigns.push({
          holder,
          building,
          cluster: chosen.cluster,
          baseY: holder.position.y,
        });
      }

      // 只有主牌配浮动文字标签；小牌是近景补充，会员码只保留立面标牌
      if (!isSmall && placement.kind !== "login") {
        this.icons.push({
          id: `${placement.kind}-${placement.buildingIndex}`,
          label: SIGN_LABELS[placement.kind],
          mesh: holder,
          // 标签固定在挂载基准点：牌子会随簇浮动，但文字标签保持稳定
          worldPos: holder.position.clone(),
        });
      }
    }
  }

  private buildSculpture() {
    // 飞行器与铬雕塑垂直叠放在中央 4×4 建筑正上方：基座 → 铬雕塑 → 悬浮门户
    this.portal = new TaikooPortal(this.sculptureAnchor, 8.6);
    this.group.add(this.portal.group);
    this.chrome = new ChromeSculpture(
      new THREE.Vector3(this.sculptureAnchor.x, 3.5, this.sculptureAnchor.z),
      new THREE.Vector3(1.6, 1.4, 1.0)
    );
    this.group.add(this.chrome.mesh);
    this.portalWave = waveOf(this.sculptureAnchor.x, 8.6, this.sculptureAnchor.z);
    this.chromeWave = waveOf(this.sculptureAnchor.x, 3.5, this.sculptureAnchor.z);
  }

  private groundMat!: THREE.MeshStandardMaterial;
  private buildGround() {
    this.groundMat = new THREE.MeshStandardMaterial({
      color: PALETTES.mono.ground,
      roughness: 0.95,
      metalness: 0,
    });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(120, 64), this.groundMat);
    ground.rotation.x = -Math.PI / 2;
    this.group.add(ground);
  }

  /* ───────────────────────── 状态驱动 ───────────────────────── */

  setMonoMix(v: number) {
    v = THREE.MathUtils.clamp(v, 0, 1);
    if (Math.abs(v - this.monoMix) < 0.004) return;
    this.monoMix = v;
    this.dirty.color = true;
    this.updateStarryMix(); // 素体阶段必须同步压掉星夜贴图
  }

  setBaseReturn(v: number) {
    v = THREE.MathUtils.clamp(v, 0, 1);
    if (Math.abs(v - this.baseReturn) < 0.004) return;
    this.baseReturn = v;
    this.dirty.color = true;
    this.applyThemeMaterial();
    this.updateStarryMix();
  }

  setSkinPos(v: number) {
    v = THREE.MathUtils.clamp(v, 0, SKIN_SEQUENCE.length - 1);
    if (Math.abs(v - this.skinPos) < 0.004) return;
    this.skinPos = v;
    this.dirty.color = true;
    this.applyThemeMaterial();
    this.updateStarryMix();
  }

  /**
   * 星夜贴图的实际混合度 = 色板接近度 × (1 - 单色度)。
   * 必须乘上单色度：否则滚回首页时城市已恢复单色白，
   * 贴图却仍满混合，墙面会残留星夜花纹。
   */
  private updateStarryMix() {
    const skinMix = Math.max(0, 1 - Math.abs(this.skinPos - 3));
    const eff = skinMix * (1 - this.monoMix) * (1 - this.baseReturn);
    this.mapMix.value = eff;
    // 贴图只在真正需要时挂载，避免从透射通道漏到其它章节
    const want = eff > 0.001 ? this.starryTex : null;
    if (this.cubeMat.map !== want) {
      this.cubeMat.map = want;
      this.cubeMat.needsUpdate = true;
    }
  }

  /** 材质随色板插值：换的不只是颜色，还有整套材质性格 */
  private applyThemeMaterial() {
    if (this.lowPerf) return;
    const idx = Math.floor(this.skinPos);
    const frac = this.skinPos - idx;
    const a = VoxelCity.THEME_MAT[SKIN_SEQUENCE[idx]];
    const b = VoxelCity.THEME_MAT[SKIN_SEQUENCE[Math.min(idx + 1, SKIN_SEQUENCE.length - 1)]];
    const g = VoxelCity.THEME_MAT.glass;
    const r = this.baseReturn;
    // 先在相邻两个联名之间插值，再整体混回基础材质
    const L = (x: number, y: number) => {
      const v = x + (y - x) * frac;
      return v + (0 - v) * 0; // 占位，实际混合在 LB 里
    };
    const LB = (k: keyof typeof g) => {
      const v = L(a[k] as number, b[k] as number);
      return v + ((g[k] as number) - v) * r;
    };
    void L;
    const m = this.cubeMat;
    m.metalness = LB("metalness");
    m.roughness = LB("roughness");
    m.clearcoat = LB("clearcoat");
    m.clearcoatRoughness = LB("clearcoatRoughness");
    m.transmission = LB("transmission");
    m.envMapIntensity = LB("envMapIntensity");
    m.bumpScale = LB("bumpScale");
    m.thickness = LB("thickness");
    m.ior = LB("ior");
    m.iridescence = LB("iridescence");
    m.iridescenceIOR = 1.9;
    const nextVar = LB("variation");
    if (Math.abs(nextVar - this.themeVariation) > 0.01) {
      this.themeVariation = nextVar;
      this.dirty.color = true;
    }
  }

  setScatter(v: number) {
    this.scrollScatter = THREE.MathUtils.clamp(v, 0, 1);
    this.applyScatter();
  }

  /**
   * 转场专用的散开通道（回到顶部时使用）。
   * 与滚动驱动的散开取最大值——这样滚动位置被重置时，
   * 章节回调写入的 0 不会把转场动画打断。
   */
  setTransitionScatter(v: number) {
    this.transitionScatter = THREE.MathUtils.clamp(v, 0, 1);
    this.applyScatter();
  }

  private scrollScatter = 0;
  private transitionScatter = 0;
  /** 消散度（0=实体，1=完全消失）。转场时用它把跳转藏进画面真空里 */
  private dissolve = 0;
  /**
   * 波纹式消散（0=实体，1=全部消失）。
   * 方块沿"离城心距离 + 高度"合成的波相位依次升空、缩小、消融；
   * 反向播放即为由外向内逐层落回重建。转场的跳转藏在全消散的那一刻。
   */
  setDissolve(v: number) {
    v = THREE.MathUtils.clamp(v, 0, 1);
    if (Math.abs(v - this.dissolve) < 0.002) return;
    this.dissolve = v;
    this.dirty.matrix = true;
    /* 雕塑按自身所在位置的波相位退场，和脚下那批方块同步，
       而不是从消散一开始就整体缩小。 */
    for (const [obj, wave] of [
      [this.portal.group, this.portalWave] as const,
      [this.chrome.mesh, this.chromeWave] as const,
    ]) {
      const s = 1 - this.localDissolve(wave);
      obj.visible = s > 0.01;
      obj.scale.setScalar(Math.max(0.001, s));
    }
    this.applySignAppearance();
  }

  /** 雕塑各自的消散波相位（构造后一次算定） */
  private portalWave = 0;
  private chromeWave = 0;

  /** 单个方块的实际消散度：全局进度减去它自己的波相位延迟 */
  private localDissolve(wave: number) {
    if (this.dissolve <= 0) return 0;
    const SPREAD = 0.78; // 波的宽度：越大波纹拖得越长、空窗越短
    const t = (this.dissolve - wave * SPREAD) / (1 - SPREAD);
    return t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
  }

  private applyScatter() {
    const v = Math.max(this.scrollScatter, this.transitionScatter);
    if (Math.abs(v - this.scatter) < 0.003) return;
    this.scatter = v;
    this.dirty.matrix = true;
    this.floatScale = 1 - v; // 炸开时悬浮动画收零
  }

  /** 环绕楼群向背景的混合度：0 = 满色（换肤章节），0.3 = 默认衬托 */
  setRingWash(v: number) {
    v = THREE.MathUtils.clamp(v, 0, 0.8);
    if (Math.abs(v - this.ringWash) < 0.01) return;
    this.ringWash = v;
    this.dirty.color = true;
  }

  getSkinPos() {
    return this.skinPos;
  }

  private lastTime = 0;
  update(time: number) {
    const dt = Math.min(time - this.lastTime, 0.05) || 0.016;
    this.lastTime = time;
    if (this.dirty.matrix) {
      this.applyMatrices();
      this.dirty.matrix = false;
    }
    if (this.dirty.color) {
      this.applyColors();
      this.dirty.color = false;
    }
    // 悬浮簇动画：只有脱离地面的方块簇在缓缓浮动（对应原 GIF 演示）
    // 散开期间必须让位给 applyMatrices，否则悬浮簇会被每帧写回原位（看起来"不散开"）
    if (this.scatter < 0.001 && this.floatScale > 0.01) {
      for (const b of this.buildings) {
        if (!b.hasFloaters) continue;
        for (const cl of b.clusters) {
          // sin ∈ [-1,1] → 行程 [down, up]（总幅度恒一格，下界按净空裁剪）
          const s01 = (Math.sin(time * FLOAT_OMEGA + cl.phase) + 1) * 0.5;
          cl.offset = (cl.down + (cl.up - cl.down) * s01) * this.floatScale;
        }
        for (let i = 0; i < b.cubes.length; i++) {
          const c = b.cubes[i];
          if (c.floatCluster < 0) continue;
          this.dummy.position.set(c.x, c.y + b.clusters[c.floatCluster].offset, c.z);
          this.dummy.rotation.set(0, 0, 0);
          const ldf = this.localDissolve(c.wave);
          this.dummy.position.y += ldf * 7;
          this.dummy.scale.setScalar(Math.max(0.0001, 1 - ldf));
          this.dummy.updateMatrix();
          b.mesh.setMatrixAt(i, this.dummy.matrix);
        }
        b.mesh.instanceMatrix.needsUpdate = true;
      }
      // 挂在悬浮簇上的标牌同步位移，避免牌子留在原地、方块飘走
      for (const fs2 of this.floatingSigns) {
        fs2.holder.position.y = fs2.baseY + fs2.building.clusters[fs2.cluster].offset;
      }
    }
    // 飞行器与铬雕塑
    this.portal.update(time);
    this.chrome.update(time, dt);
  }

  private occV = new THREE.Vector3();
  private occDir = new THREE.Vector3();
  /**
   * 遮挡淡出：位于相机与主体建筑群之间、且贴近视线中轴的外围方块降低不透明度，
   * 让镜头环绕时主体始终可见。每 3 帧算一次，结果做时间平滑避免闪烁。
   */
  updateOcclusion(camPos: THREE.Vector3, target: THREE.Vector3) {
    if (!this.ringFadeAttr) return;
    if (this.occFrame++ % 3 !== 0) return;
    this.occDir.copy(target).sub(camPos);
    const camToTarget = this.occDir.length();
    if (camToTarget < 0.001) return;
    this.occDir.divideScalar(camToTarget);
    const arr = this.ringFadeAttr.array as Float32Array;
    let changed = false;
    for (let i = 0; i < this.ringCubes.length; i++) {
      const base = this.ringCubes[i].base;
      this.occV.copy(base).sub(camPos);
      const along = this.occV.dot(this.occDir);
      let want = 1;
      // 只处理位于相机与主体之间的方块
      if (along > 1 && along < camToTarget - 6) {
        // 到视线中轴的垂直距离
        const perp = Math.sqrt(Math.max(0, this.occV.lengthSq() - along * along));
        // 视锥随距离张开：近处判定半径小，远处大
        const radius = 7 + along * 0.22;
        if (perp < radius) {
          const edge = THREE.MathUtils.clamp(perp / radius, 0, 1);
          want = 0.12 + 0.88 * edge * edge;
        }
      }
      const cur = arr[i];
      if (Math.abs(cur - want) > 0.004) {
        arr[i] = cur + (want - cur) * 0.22; // 时间平滑
        changed = true;
      }
    }
    if (changed) this.ringFadeAttr.needsUpdate = true;
  }

  private applyMatrices() {
    const s = this.scatter;
    const ease = s * s * (3 - 2 * s);
    for (const b of this.buildings) {
      for (let i = 0; i < b.cubes.length; i++) {
        const c = b.cubes[i];
        this.dummy.position.set(
          c.x + c.scatterDir.x * ease,
          c.y + c.scatterDir.y * ease,
          c.z + c.scatterDir.z * ease
        );
        const rot = ease * (c.variation - 0.9) * 20;
        this.dummy.rotation.set(rot, rot * 1.3, rot * 0.7);
        const ld = this.localDissolve(c.wave);
        if (ld > 0) {
          this.dummy.position.y += ld * 7; // 消散时向上飘升
          this.dummy.scale.setScalar(Math.max(0.0001, 1 - ld));
        } else {
          this.dummy.scale.setScalar(1);
        }
        this.dummy.updateMatrix();
        b.mesh.setMatrixAt(i, this.dummy.matrix);
      }
      b.mesh.instanceMatrix.needsUpdate = true;
    }
    for (let i = 0; i < this.ringCubes.length; i++) {
      const c = this.ringCubes[i];
      this.dummy.position.set(
        c.base.x + c.scatterDir.x * ease,
        c.base.y + c.scatterDir.y * ease,
        c.base.z + c.scatterDir.z * ease
      );
      const rot = ease * (c.rand - 0.5) * 4;
      this.dummy.rotation.set(rot, rot * 1.3, rot * 0.7);
      const ldr = this.localDissolve(c.wave);
      if (ldr > 0) {
        this.dummy.position.y += ldr * 7;
        this.dummy.scale.setScalar(Math.max(0.0001, 1 - ldr));
      } else {
        this.dummy.scale.setScalar(1);
      }
      this.dummy.updateMatrix();
      this.ringMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.ringMesh.instanceMatrix.needsUpdate = true;
  }

  private cA = new THREE.Color();
  private cB = new THREE.Color();
  private cM = new THREE.Color();
  private bgMix = new THREE.Color("#f1f1ef");

  /** 中心建筑某一色板下的目标色 */
  private centerColor(c: CenterCube, skinName: string, out: THREE.Color) {
    const v = 1 + (c.variation - 0.92) * this.themeVariation;
    if (skinName === "glass") {
      out.set(BUILDING_SURFACES[c.buildingIndex]);
    } else if (skinName === "vangogh") {
      // 星夜：底色近中性，画面交给贴图
      out.set("#c8d0da");
    } else {
      const colors = BUILDING_THEMES[skinName];
      out.set(colors[(c.buildingIndex - 1) % colors.length]);
    }
    if (this.baseReturn > 0.001) {
      // 直接混到该栋楼的基础表面色，不经过任何中间联名
      tmpBase.set(BUILDING_SURFACES[c.buildingIndex]);
      out.lerp(tmpBase, this.baseReturn);
    }
    out.multiplyScalar(v);
  }

  private applyColors() {
    const idx = Math.floor(this.skinPos);
    const frac = this.skinPos - idx;
    const nameA = SKIN_SEQUENCE[idx];
    const nameB = SKIN_SEQUENCE[Math.min(idx + 1, SKIN_SEQUENCE.length - 1)];
    const mono = PALETTES.mono;

    for (const b of this.buildings) {
      const attr = b.mesh.instanceColor!;
      for (let i = 0; i < b.cubes.length; i++) {
        const c = b.cubes[i];
        this.centerColor(c, nameA, this.cA);
        if (frac > 0.001) {
          this.centerColor(c, nameB, this.cB);
          this.cA.lerp(this.cB, frac);
        }
        if (this.monoMix > 0.001) {
          // 素体阶段：中心建筑亮暖白，与外围的暗冷灰拉开明度差
          pickColor(mono, c.angle, c.variation, this.cM);
          this.cM.lerp(gB.set("#fffdf6"), 0.72);
          this.cM.multiplyScalar(1.02 + c.variation * 0.06);
          this.cA.lerp(this.cM, this.monoMix);
        }
        attr.setXYZ(i, this.cA.r, this.cA.g, this.cA.b);
      }
      attr.needsUpdate = true;
    }

    // 环绕楼群：同色板但向背景色靠 45%，退为衬托
    const ringAttr = this.ringMesh.instanceColor!;
    for (let i = 0; i < this.ringCubes.length; i++) {
      const c = this.ringCubes[i];
      pickColor(PALETTES[nameA], c.angle, c.rand, this.cA);
      if (frac > 0.001) {
        pickColor(PALETTES[nameB], c.angle, c.rand, this.cB);
        this.cA.lerp(this.cB, frac);
      }
      if (this.baseReturn > 0.001) {
        // 外围与中心同步回到基础色板，否则会出现"中心已恢复、四周还留着香槟金"
        pickColor(PALETTES.glass, c.angle, c.rand, this.cB);
        this.cA.lerp(this.cB, this.baseReturn);
      }
      this.cA.lerp(this.bgMix, this.ringWash);
      this.cA.multiplyScalar(0.84); // 外围整体压暗一档
      if (this.monoMix > 0.001) {
        // 素体阶段：外围压成暗冷灰，与暖白的中心区分开
        pickColor(mono, c.angle, c.rand, this.cM);
        this.cM.lerp(gB.set("#c8ccd4"), 0.5);
        this.cM.multiplyScalar(0.72);
        this.cA.lerp(this.cM, this.monoMix);
      }
      ringAttr.setXYZ(i, this.cA.r, this.cA.g, this.cA.b);
    }
    ringAttr.needsUpdate = true;
  }

  /** 标牌整体透明度（初始隐藏，远景章节才浮现）。管理全部标牌，含小号 */
  private signsOpacity = 1;

  /**
   * 预热标牌：加载阶段就把贴图和着色器推上 GPU。
   * 标牌在前四章全程 visible=false，不预热的话会在远景章节第一次显形时
   * 集中上传十几张贴图并编译材质——实测那一帧要 75ms，就是交界处的卡顿。
   */
  warmUpSigns(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    const prev = this.allSigns.map((s) => s.visible);
    for (const s of this.allSigns) {
      s.visible = true;
      s.traverse((o) => {
        const m = (o as THREE.Mesh).material as (THREE.Material & { map?: THREE.Texture }) | undefined;
        if (m && m.map) renderer.initTexture(m.map);
      });
    }
    renderer.compile(scene, camera);
    /* 预热完再关掉着色器错误检查：getProgramInfoLog 每次链接程序都会同步
       等 GPU 回话，实测占那一帧的 16ms。启动期保持开启，真有编译错误照样能看到。 */
    renderer.debug.checkShaderErrors = false;
    this.allSigns.forEach((s, i) => (s.visible = prev[i]));
  }

  setSignsOpacity(v: number) {
    v = THREE.MathUtils.clamp(v, 0, 1);
    if (Math.abs(v - this.signsOpacity) < 0.01) return;
    this.signsOpacity = v;
    this.applySignAppearance();
  }

  /**
   * 标牌外观的唯一出口：章节整体透明度 × 各自的波纹消散度。
   * 两者相乘，所以牌子既会随远景章节浮现，也会跟着自己脚下那批方块一起消失。
   */
  private applySignAppearance() {
    for (const holder of this.allSigns) {
      const base = (holder.userData.baseScale ??= holder.scale.x);
      const ld = this.localDissolve((holder.userData.wave as number) ?? 0);
      const v = this.signsOpacity * (1 - ld);
      holder.visible = v > 0.02;
      if (!holder.visible) continue;
      holder.scale.setScalar(Math.max(0.001, base * (0.6 + 0.4 * this.signsOpacity) * (1 - ld)));
      holder.traverse((obj) => {
        const m = (obj as THREE.Mesh).material as THREE.Material | undefined;
        // 只改 opacity：transparent 已在建材质时定好，这里再动会触发重编译
        if (m && "opacity" in m) (m as THREE.Material & { opacity: number }).opacity = v;
      });
    }
  }
}

const gB = new THREE.Color();

/** 程序生成的"星夜"风画布：深蓝夜空 + 旋涡笔触 + 金黄星点，供每块砖采样不同区域 */
function makeStarryTexture(): THREE.CanvasTexture {
  const s = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = s;
  const ctx = canvas.getContext("2d")!;
  let seed = 18890615; // 星夜完成年月
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  // 夜空底
  const bg = ctx.createLinearGradient(0, 0, 0, s);
  bg.addColorStop(0, "#152a52");
  bg.addColorStop(0.55, "#1c3a66");
  bg.addColorStop(1, "#122040");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, s, s);
  // 旋涡笔触：多层弧线，蓝青为主，点缀黄
  const strokes = ["#27498a", "#3a64ad", "#5b8ac8", "#7fa8d8", "#2c3f75", "#d9c65a"];
  ctx.lineCap = "round";
  for (let i = 0; i < 1400; i++) {
    const cx = rnd() * s;
    const cy = rnd() * s;
    const r = 6 + rnd() * 46;
    const a0 = rnd() * Math.PI * 2;
    const a1 = a0 + 0.5 + rnd() * 1.4;
    const c = strokes[Math.floor(rnd() * (rnd() < 0.84 ? 5 : 6))];
    ctx.strokeStyle = c;
    ctx.globalAlpha = 0.5 + rnd() * 0.5;
    ctx.lineWidth = 3 + rnd() * 7;
    ctx.beginPath();
    ctx.arc(cx, cy, r, a0, a1);
    ctx.stroke();
  }
  // 星与月：金黄旋涡亮斑
  ctx.globalAlpha = 1;
  for (let i = 0; i < 26; i++) {
    const cx = rnd() * s;
    const cy = rnd() * s * 0.85;
    const r = 14 + rnd() * 30;
    const glow = ctx.createRadialGradient(cx, cy, 1, cx, cy, r * 2.2);
    glow.addColorStop(0, "rgba(244,224,130,0.95)");
    glow.addColorStop(0.4, "rgba(230,196,90,0.5)");
    glow.addColorStop(1, "rgba(230,196,90,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#f0dc8a";
    ctx.lineWidth = 3;
    for (let k = 0; k < 3; k++) {
      ctx.globalAlpha = 0.7 - k * 0.2;
      ctx.beginPath();
      ctx.arc(cx, cy, r * (0.5 + k * 0.35), rnd() * 6, rnd() * 6 + 4);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** 梵高笔触凹凸贴图：随机弧线笔划，换肤到"星夜"时 bumpScale 淡入 */
function makeBrushBump(): THREE.CanvasTexture {
  const s = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = s;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, s, s);
  let seed = 20230116;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 90; i++) {
    const x = rnd() * s;
    const y = rnd() * s;
    const r = 14 + rnd() * 36;
    const a0 = rnd() * Math.PI * 2;
    const a1 = a0 + 0.7 + rnd() * 1.6;
    const tone = 96 + Math.floor(rnd() * 96);
    ctx.strokeStyle = `rgb(${tone},${tone},${tone})`;
    ctx.lineWidth = 2.5 + rnd() * 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(x, y, r, a0, a1);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

```

---

## `src/experience/palettes.ts`

```ts
import * as THREE from "three";

/** 色彩家族：每个方向的楼群从对应家族中取色（呼应样机：西红东蓝北青南暖） */
export interface Palette {
  name: string;
  west: string[]; // -x 方向
  east: string[]; // +x 方向
  north: string[]; // -z 方向
  south: string[]; // +z 方向
  ground: string;
}

export const PALETTES: Record<string, Palette> = {
  /** 单色（Hero/背景章节的“未上色”状态，呼应 PPT 灰白线框） */
  mono: {
    name: "mono",
    west: ["#ffffff", "#ececec", "#dcdcdc"],
    east: ["#f8f8f8", "#e4e4e4", "#d2d2d4"],
    north: ["#ffffff", "#e8e8ea", "#d8d8da"],
    south: ["#f4f4f2", "#e2e2e0", "#d6d6d2"],
    ground: "#ececea",
  },
  /** 默认玻璃宝石色（Let's Fashion Forward 首页配色） */
  glass: {
    name: "glass",
    west: ["#d40f2c", "#ff5a3c", "#8c1020", "#e8742c"],
    east: ["#2434c8", "#3c50e0", "#141c78", "#5064e8"],
    north: ["#14b4c8", "#1890b4", "#0c6880"],
    south: ["#c88a3c", "#b0b0b8", "#d8d8e0"],
    ground: "#ececea",
  },
  /** Mondrian 几何抽象 */
  mondrian: {
    name: "mondrian",
    west: ["#e02020", "#f4f4f4", "#e02020"],
    east: ["#1b4bd2", "#f4f4f4", "#1b4bd2"],
    north: ["#f7d417", "#f4f4f4"],
    south: ["#f4f4f4", "#f7d417", "#17181c"],
    ground: "#f4f4f2",
  },
  /** Jeff Koons 新表现主义（气球狗金属糖果色） */
  koons: {
    name: "koons",
    west: ["#ff7ab8", "#f0439a", "#ffb0d4"],
    east: ["#c46ce0", "#9a4ad0", "#d8a0f0"],
    north: ["#7de0d8", "#4ac8c0"],
    south: ["#f0c0d8", "#e8e8f0", "#ffd88a"],
    ground: "#f6eef2",
  },
  /** van Gogh 后印象派（星夜） */
  vangogh: {
    name: "vangogh",
    west: ["#f2c744", "#e8a020", "#d88818"],
    east: ["#1e3a8a", "#3b6bd8", "#152860"],
    north: ["#2c5090", "#4878c0"],
    south: ["#3a6858", "#f2c744", "#28406e"],
    ground: "#eae6d8",
  },
  /** Dior J'adore（金香槟） */
  dior: {
    name: "dior",
    west: ["#d8b060", "#c89840", "#f0d8a0"],
    east: ["#e8b4b8", "#d89498", "#f4d8da"],
    north: ["#b89868", "#e0c890"],
    south: ["#503028", "#d8c8a8", "#f0e4c8"],
    ground: "#f2ece0",
  },
};

/** 换肤章节的滚动顺序 */
export const SKIN_SEQUENCE = ["glass", "mondrian", "koons", "vangogh", "dior"] as const;

const tmp = new THREE.Color();

/** 依据方位角与随机值从 palette 中为一个方块取色，写入 out */
export function pickColor(
  palette: Palette,
  angle: number, // atan2(z, x)
  rand: number, // 0..1 稳定随机
  out: THREE.Color
): void {
  const deg = ((angle * 180) / Math.PI + 360) % 360;
  let family: string[];
  if (deg >= 120 && deg < 240) family = palette.west;
  else if (deg < 60 || deg >= 300) family = palette.east;
  else if (deg >= 240) family = palette.north;
  else family = palette.south;
  tmp.set(family[Math.floor(rand * family.length) % family.length]);
  // 轻微明度抖动，避免大片死板
  const jitter = 0.92 + rand * 0.16;
  out.setRGB(tmp.r * jitter, tmp.g * jitter, tmp.b * jitter);
}

```

---

## `src/experience/taikoo/model.ts`

```ts
import { VOXEL_BUILDINGS, voxelKey } from "./voxel-editor-data";
import layout from "./layout.json";

/**
 * 中心建筑群：用户完整复原的 12 栋体素建筑。
 * 数据源自原始编辑器导出——含镂空删除表与最终位置，网格单位 = 1，与环绕城市一致。
 */

export interface CenterVoxel {
  x: number;
  y: number;
  z: number;
  buildingIndex: number; // 1..12
  /** 逐实例明暗抖动（原模型 presentation 模式公式，0.84–1.0） */
  variation: number;
}

/** 原模型 presentation 材质的每栋表面色（清漆树脂） */
export const BUILDING_SURFACES: Record<number, string> = {
  1: "#bd1737",
  2: "#8e0928",
  3: "#760722",
  4: "#aa3151",
  5: "#8a7063",
  6: "#202d8a",
  7: "#006f80",
  8: "#293b91",
  9: "#213181",
  10: "#19236f",
  11: "#514541",
  12: "#76564f",
};

/** 原模型主题色板：中心建筑按 (index-1) % len 取色（与源实现一致） */
export const BUILDING_THEMES: Record<string, string[]> = {
  // 纯正原色 + 白与黑，占比以白为主（对照 PPT 蒙德里安效果图）
  mondrian: ["#f2f0ea", "#e02418", "#f5c400", "#0f47c4", "#1b1b18", "#f2f0ea"],
  // 镜面糖果：金、玫瑰金、洋红、青、铬白、紫、铜（对照 PPT 波普效果图）
  koons: ["#b8860b", "#a8305f", "#0f8f96", "#c9ccd2", "#5a2d82", "#a8552a", "#1f6fb2"],
  // 星夜底色由贴图承担，这里仅留中性备用
  vangogh: ["#c8d0da", "#b9c4d2", "#cdd6e0", "#c2ccd8", "#b4c0cf"],
  // 高定金香槟：暖金、古铜、香槟、深棕（对照 PPT Dior 效果图）
  dior: ["#d9a441", "#a8712c", "#f0dcb0", "#8a5520", "#c99a4e"],
};

const deleted = new Set<string>(layout.deleted);
const positions = new Map(layout.positions.map((p) => [p.id, p]));

/** 每栋建筑的布局位置（立面标牌的 localPosition 以此为基准） */
export const BUILDING_POSITIONS: Record<number, { x: number; y: number; z: number }> =
  Object.fromEntries(
    layout.positions.map((p) => [Number(p.id.replace("building-", "")), { x: p.x, y: p.y, z: p.z }])
  );

function buildCenter(): CenterVoxel[] {
  const out: CenterVoxel[] = [];
  for (const building of VOXEL_BUILDINGS) {
    const offset = positions.get(building.id) ?? { x: 0, y: 0, z: 0 };
    for (const cell of building.cells) {
      if (deleted.has(voxelKey(building.id, cell))) continue;
      out.push({
        x: cell.x + offset.x,
        y: cell.y + offset.y + 0.5,
        z: cell.z + offset.z,
        buildingIndex: building.index,
        variation:
          0.84 +
          (((cell.x * 17 + cell.y * 11 + cell.z * 7 + building.index * 5) % 9) / 8) * 0.16,
      });
    }
  }
  return out;
}

export const TAIKOO_CENTER: CenterVoxel[] = buildCenter();

/** 中心建筑群的包围盒（xz 平面），环绕楼群据此保持净空 */
export const CENTER_BOUNDS = TAIKOO_CENTER.reduce(
  (b, v) => ({
    minX: Math.min(b.minX, v.x),
    maxX: Math.max(b.maxX, v.x),
    minZ: Math.min(b.minZ, v.z),
    maxZ: Math.max(b.maxZ, v.z),
  }),
  { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity }
);

```

---

## `src/experience/taikoo/signs.ts`

```ts
/**
 * 立面标牌：位置与尺寸 1:1 移植自原模型 taikoo-li-facade-signs.tsx，
 * localPosition 相对所属建筑的组原点（含 layout.json 的最终位置偏移已由建筑组承担）。
 */

export type SignKind =
  | "profile"
  | "community"
  | "exchange"
  | "points"
  | "login"
  | "help"
  | "parking";

export interface SignPlacement {
  buildingIndex: number;
  kind: SignKind;
  localPosition: [number, number, number];
  rotation?: [number, number, number];
  scale: number;
  url: string;
}

export const SIGN_LABELS: Record<SignKind, string> = {
  help: "会员客服",
  exchange: "积分兑换",
  community: "会员社区",
  parking: "停车服务",
  points: "会员积分",
  profile: "会员中心",
  login: "会员码",
};

// 走 BASE_URL：这串是运行时拼的，Vite 的 base 重写不会碰它
const url = (kind: SignKind) =>
  `${import.meta.env.BASE_URL}images/taikoo-li/icons/${kind}.png`;

const HALF_PI = Math.PI / 2;

/** 注意：原数据 localPosition 相对 layout.json 的建筑位置；建筑组即以该位置为原点 */
export const SIGN_PLACEMENTS: SignPlacement[] = [
  { buildingIndex: 1, kind: "help", localPosition: [3.75, 7.75, 2.54], scale: 1.48, url: url("help") },
  { buildingIndex: 2, kind: "exchange", localPosition: [4.5, 8.6, 3.54], scale: 1.5, url: url("exchange") },
  { buildingIndex: 2, kind: "exchange", localPosition: [5.05, 1.75, 3.54], scale: 0.62, url: url("exchange") },
  { buildingIndex: 3, kind: "community", localPosition: [2, 8.04, 2], rotation: [-HALF_PI, 0, 0], scale: 1.72, url: url("community") },
  { buildingIndex: 4, kind: "parking", localPosition: [3.25, 3.04, 2.15], rotation: [-HALF_PI, 0, 0], scale: 1.92, url: url("parking") },
  { buildingIndex: 4, kind: "parking", localPosition: [2, 4.04, 0], rotation: [-HALF_PI, 0, 0], scale: 0.76, url: url("parking") },
  { buildingIndex: 5, kind: "points", localPosition: [0.5, 6.85, 3.54], scale: 1.34, url: url("points") },
  { buildingIndex: 5, kind: "points", localPosition: [0.5, 2.2, 3.54], scale: 0.58, url: url("points") },
  { buildingIndex: 10, kind: "profile", localPosition: [3.5, 8.04, 0], rotation: [-HALF_PI, 0, 0], scale: 1.88, url: url("profile") },
  { buildingIndex: 11, kind: "login", localPosition: [1.5, 1, 3.54], scale: 1.56, url: url("login") },
];

```

---

## `src/experience/taikoo/portal.ts`

```ts
import * as THREE from "three";

/**
 * 中央飞行器（悬浮门户）+ 铬金属雕塑
 * 1:1 移植自原模型 taikoo-li-model.tsx 的 TaikooPortal / ChromeSculpture，
 * 原场景单位 0.62，这里按 SCALE 放大到本场景的 1 单位网格。
 */

const SCALE = 1.7;
const PORTAL_RING_TILT = Math.PI / 12; // 15° 光环倾角

/** 环形字带纹理："LET'S FASHION FORWARD •" 环排 */
function circularTextTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1024;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, 1024, 1024);
  ctx.fillStyle = "rgba(43,160,176,0.94)";
  ctx.beginPath();
  ctx.arc(512, 512, 465, 0, Math.PI * 2);
  ctx.arc(512, 512, 338, 0, Math.PI * 2, true);
  ctx.fill();

  const text = "LET'S FASHION FORWARD  •  LET'S FASHION FORWARD  •  ";
  ctx.font = "600 45px Arial, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.94)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const radius = 405;
  const step = (Math.PI * 2) / text.length;
  [...text].forEach((character, index) => {
    const angle = index * step - Math.PI / 2;
    ctx.save();
    ctx.translate(512 + Math.cos(angle) * radius, 512 + Math.sin(angle) * radius);
    ctx.rotate(angle + Math.PI / 2);
    ctx.fillText(character, 0, 0);
    ctx.restore();
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 12;
  return tex;
}

/** 金色镂空三角框（双箭头单元） */
function triangleFrame(x: number): THREE.Mesh {
  const outer = new THREE.Shape();
  outer.moveTo(-0.68, -0.6);
  outer.lineTo(0.5, 0);
  outer.lineTo(-0.68, 0.6);
  outer.closePath();
  const hole = new THREE.Path();
  hole.moveTo(-0.42, -0.34);
  hole.lineTo(0.23, 0);
  hole.lineTo(-0.42, 0.34);
  hole.closePath();
  outer.holes.push(hole);
  const mesh = new THREE.Mesh(
    new THREE.ExtrudeGeometry(outer, {
      depth: 0.08,
      bevelEnabled: true,
      bevelSize: 0.025,
      bevelThickness: 0.025,
      bevelSegments: 3,
    }),
    new THREE.MeshPhysicalMaterial({
      color: "#ffe789",
      emissive: "#9d6500",
      emissiveIntensity: 0.35,
      metalness: 0.72,
      roughness: 0.18,
    })
  );
  mesh.position.x = x;
  return mesh;
}

export class TaikooPortal {
  group = new THREE.Group();
  private portalY: number;

  constructor(anchor: THREE.Vector3, portalY = 8.2) {
    this.portalY = portalY;
    this.group.position.set(anchor.x, portalY, anchor.z);
    this.group.scale.setScalar(SCALE);

    const tilted = new THREE.Group();
    tilted.rotation.x = PORTAL_RING_TILT;
    this.group.add(tilted);

    // 深色环体（挤出圆环，带倒角）
    const annulusShape = new THREE.Shape();
    annulusShape.absarc(0, 0, 1.78, 0, Math.PI * 2, false);
    const annulusHole = new THREE.Path();
    annulusHole.absarc(0, 0, 1.18, 0, Math.PI * 2, true);
    annulusShape.holes.push(annulusHole);
    const annulus = new THREE.Mesh(
      new THREE.ExtrudeGeometry(annulusShape, {
        bevelEnabled: true,
        bevelSegments: 3,
        bevelSize: 0.025,
        bevelThickness: 0.025,
        depth: 0.16,
      }),
      new THREE.MeshPhysicalMaterial({
        color: "#26223f",
        clearcoat: 1,
        envMapIntensity: 2.2,
        metalness: 0.42,
        opacity: 0.82,
        roughness: 0.08,
        transparent: true,
      })
    );
    annulus.position.y = 0.03;
    annulus.rotation.x = Math.PI / 2;
    tilted.add(annulus);

    // 环形字带
    const band = new THREE.Mesh(
      new THREE.RingGeometry(1.18, 1.78, 128),
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        map: circularTextTexture(),
        opacity: 0.94,
        roughness: 0.2,
        side: THREE.DoubleSide,
        transparent: true,
      })
    );
    band.position.y = 0.08;
    band.rotation.x = -Math.PI / 2;
    tilted.add(band);

    // 冰蓝描边
    const edge = new THREE.Mesh(
      new THREE.TorusGeometry(1.78, 0.06, 16, 128),
      new THREE.MeshPhysicalMaterial({
        color: "#d7fbff",
        clearcoat: 1,
        opacity: 0.72,
        roughness: 0.12,
        transparent: true,
      })
    );
    edge.position.y = 0.08;
    edge.rotation.x = Math.PI / 2;
    tilted.add(edge);

    // 紫玻璃悬浮球
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 48),
      new THREE.MeshPhysicalMaterial({
        color: "#9b7fbd",
        clearcoat: 1,
        envMapIntensity: 2.2,
        opacity: 0.5,
        roughness: 0.08,
        thickness: 0.8,
        transparent: true,
        transmission: 0.5,
      })
    );
    sphere.scale.setScalar(1.08);
    this.group.add(sphere);

    // 金色双箭头
    const arrows = new THREE.Group();
    arrows.position.set(-0.08, 0.05, 0.24);
    arrows.rotation.x = 0.02;
    arrows.scale.setScalar(0.52);
    arrows.add(triangleFrame(-0.38), triangleFrame(0.38));
    this.group.add(arrows);
  }

  update(t: number) {
    const breath = Math.sin(t * 1.12);
    this.group.position.y = this.portalY + breath * 0.14 * SCALE;
    this.group.rotation.y = Math.sin(t * 0.24) * 0.045;
    const s = SCALE * (1 + breath * 0.014);
    this.group.scale.setScalar(s);
  }
}

/** 铬金属软雕塑（广场上的银色"软冰淇淋"） */
export class ChromeSculpture {
  mesh: THREE.Mesh;
  private baseY: number;

  constructor(position: THREE.Vector3, scale: THREE.Vector3) {
    const geo = new THREE.SphereGeometry(1, 72, 52);
    const pos = geo.attributes.position;
    const point = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      point.fromBufferAttribute(pos, i);
      const theta = Math.atan2(point.z, point.x);
      const vertical = point.y;
      const lowerWeight = (1 - vertical) * 0.5;
      const fold =
        1 +
        Math.sin(vertical * 11 + theta * 1.6) * 0.1 +
        Math.sin(vertical * 19 - theta * 0.7) * 0.04;
      point.x *= fold * (0.88 + lowerWeight * 0.22);
      point.z *= fold * (0.68 + lowerWeight * 0.14);
      point.y *= 1.08;
      point.x += Math.sin((vertical + 1) * 2.4) * 0.16 + 0.08 - vertical * 0.06;
      const twist = vertical * 0.18;
      const x = point.x * Math.cos(twist) - point.z * Math.sin(twist);
      const z = point.x * Math.sin(twist) + point.z * Math.cos(twist);
      pos.setXYZ(i, x, point.y, z);
    }
    geo.computeVertexNormals();
    this.mesh = new THREE.Mesh(
      geo,
      new THREE.MeshPhysicalMaterial({
        color: "#f6f4f2",
        envMapIntensity: 2.8,
        metalness: 1,
        roughness: 0.065,
      })
    );
    this.mesh.position.copy(position);
    this.mesh.scale.copy(scale);
    this.baseY = position.y;
  }

  update(t: number, dt: number) {
    this.mesh.rotation.y += dt * 0.18;
    this.mesh.position.y = this.baseY + Math.sin(t * 1.05) * 0.045 * 1.7;
  }
}

```

---

## `src/experience/taikoo/voxel-editor-data.ts`

```ts
export type VoxelCoordinate = {
  x: number;
  y: number;
  z: number;
};

export type VoxelBuilding = {
  id: string;
  index: number;
  dimensions: string;
  note: string;
  color: string;
  origin: [number, number];
  cells: VoxelCoordinate[];
};

function box(
  length: number,
  depth: number,
  height: number,
  offset: VoxelCoordinate = { x: 0, y: 0, z: 0 },
) {
  const cells: VoxelCoordinate[] = [];
  for (let x = 0; x < length; x += 1) {
    for (let z = 0; z < depth; z += 1) {
      for (let y = 0; y < height; y += 1) {
        cells.push({ x: x + offset.x, y: y + offset.y, z: z + offset.z });
      }
    }
  }
  return cells;
}

function unique(cells: VoxelCoordinate[]) {
  const seen = new Set<string>();
  return cells.filter((cell) => {
    const key = `${cell.x}:${cell.y}:${cell.z}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const red = "#ad082b";
const rose = "#c32244";
const neutral = "#786966";
const blue = "#203397";
const cyan = "#007d93";

export const VOXEL_BUILDINGS: VoxelBuilding[] = [
  {
    id: "building-1",
    index: 1,
    dimensions: "5 × 3 × 10",
    note: "完整长方体",
    color: rose,
    origin: [-10, -15],
    cells: box(5, 3, 10),
  },
  {
    id: "building-2",
    index: 2,
    dimensions: "6 × 3 × 10",
    note: "左右各 3 格，前后错位 1 格",
    color: red,
    origin: [-17, -7],
    cells: unique([
      ...box(3, 3, 10),
      ...box(3, 3, 10, { x: 3, y: 0, z: 1 }),
    ]),
  },
  {
    id: "building-3",
    index: 3,
    dimensions: "5 × 5 × 8",
    note: "完整长方体",
    color: "#920725",
    origin: [-17, 3],
    cells: box(5, 5, 8),
  },
  {
    id: "building-4",
    index: 4,
    dimensions: "5 × 4 × 3 + 1",
    note: "顶部附加 1 个方块",
    color: "#b43852",
    origin: [-15, 13],
    cells: [...box(5, 4, 3), { x: 2, y: 3, z: 0 }],
  },
  {
    id: "building-5",
    index: 5,
    dimensions: "2 × 4 × 10",
    note: "完整长方体",
    color: "#b89d91",
    origin: [-3, -16],
    cells: box(2, 4, 10),
  },
  {
    id: "building-6",
    index: 6,
    dimensions: "5 × 3 × 10",
    note: "完整长方体",
    color: neutral,
    origin: [3, -16],
    cells: box(5, 3, 10),
  },
  {
    id: "building-7",
    index: 7,
    dimensions: "3 × 3 × 10",
    note: "完整长方体",
    color: cyan,
    origin: [11, -14],
    cells: box(3, 3, 10),
  },
  {
    id: "building-8",
    index: 8,
    dimensions: "2 × 3 × 7",
    note: "完整长方体",
    color: "#3a4da1",
    origin: [3, -7],
    cells: box(2, 3, 7),
  },
  {
    id: "building-9",
    index: 9,
    dimensions: "3 × 5 × 8",
    note: "完整长方体",
    color: "#3047ad",
    origin: [11, -4],
    cells: box(3, 5, 8),
  },
  {
    id: "building-10",
    index: 10,
    dimensions: "5 × 3 × 6 + 2 × 5 × 2",
    note: "第一至六层为 5 × 3，第七至八层为 2 × 5",
    color: blue,
    origin: [9, 8],
    cells: unique([
      ...box(5, 3, 6),
      ...box(2, 5, 2, { x: 3, y: 6, z: -2 }),
    ]),
  },
  {
    id: "building-11",
    index: 11,
    dimensions: "4 × 4 × 2",
    note: "中央低层建筑",
    color: "#655a57",
    origin: [-3, 8],
    cells: box(4, 4, 2),
  },
  {
    id: "building-12",
    index: 12,
    dimensions: "2 × 3 × 7",
    note: "位于建筑 5 后方，与建筑 1、6 对齐",
    color: "#966d72",
    origin: [-3, -14],
    cells: box(2, 3, 7),
  },
];

export function voxelKey(buildingId: string, cell: VoxelCoordinate) {
  return `${buildingId}/${cell.x}/${cell.y}/${cell.z}`;
}

```
