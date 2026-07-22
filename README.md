# CREER Portfolio

一个沉浸式个人作品集网站，面向设计、网页和影像作品展示。项目使用 Next.js App Router 构建，适合托管到 GitHub 并由 Vercel 自动部署。

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
