# D-JIAN Portfolio

一个沉浸式个人作品集网站，面向设计、网页和影像作品展示。项目使用 Next.js App Router 构建，适合托管到 GitHub 并由 Vercel 自动部署。

正式网站：<https://d-jian-portfolio.vercel.app>

## 跨账号协作

新的 Codex、GPT 账号或开发者开始修改前，必须先阅读：

- `AGENTS.md`：修改范围、验证和 Git 工作规则。
- `ARCHITECTURE.md`：模块边界、依赖关系和新增模块流程。
- `config/module-boundaries.json`：机器可读的文件白名单。

指定模块后使用以下命令检查是否越界：

```bash
npm run check:scope -- <scope>
```

跨模块任务必须同时列出经过确认的范围，例如：

```bash
npm run check:scope -- space-poly-species shared
```

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看网站。

## 部署到 Vercel

1. 将本项目推送到 GitHub 仓库。
2. 在 Vercel 里选择 `Add New Project`。
3. 导入这个 GitHub 仓库。
4. Framework Preset 选择 `Next.js`。
5. 点击 Deploy。

Vercel 会读取 `vercel.json` 和 `package.json`，自动安装依赖并运行 `npm run build`。

## 内容替换

作品数据集中在 `data/work.ts`。后续替换真实作品时，优先替换标题、简介、年份、角色、类型、链接和图片路径。

## 项目结构

```text
app/                    路由、Metadata 与全站基础样式
components/             页面和可复用界面组件
components/navigation/  导航状态协调、桌面导航、移动抽屉
config/                 站点结构与实验场可调参数
data/                   作品等业务数据
i18n/                   语言类型与纯字典数据
providers/              语言、主题等全局状态
styles/                 按功能拆分的全局组件样式
types/                  跨模块共享类型
```

## 扩展入口

- 新增导航页面：修改 `config/site.ts` 的 `NAVIGATION_ITEMS`，并在语言字典的 `nav` 中补充标签。
- 新增语言：扩展 `i18n/types.ts`、`i18n/dictionaries.ts` 和 `config/site.ts` 的语言选项与导航文案。
- 调整实验场：粒子数量、性能档位、主题材质、交互阈值、运动速度和移动端构图统一位于 `config/space.ts`。
- 新增实验章节：在三个语言字典的 `space.chapters` 中添加内容；章节导航和计数会自动根据数组长度更新。
- 修改导航或实验场视觉：分别编辑 `styles/navigation.css` 与 `styles/space.css`，无需在全站样式中搜索。

组件不得直接读写主题或语言的 DOM 状态；统一使用 `useTheme()` 与 `useLanguage()`。可调体验参数优先进入 `config/`，避免散落在组件渲染逻辑中。
