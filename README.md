# AI Trending

中美 AI 消费趋势周报网站，采用纵向浏览的 editorial landing page 形式展示最近 7 天的 AI 产品动态、榜单异动和跨市场趋势判断。

线上地址：
[https://ai-trending.vercel.app/](https://ai-trending.vercel.app/)

## 项目内容

- 首页周报：展示中美 AI C 端周报的 5 个可见 section，包括重点发现、美国市场、中国市场、趋势判断和继续跟踪。
- 静态落地页：[weekly-ai-report-2026-04-14.html](/Users/lulu/Desktop/codex/adhd/weekly-ai-report-2026-04-14.html)
- Next.js 首页实现：[src/app/page.tsx](/Users/lulu/Desktop/codex/adhd/src/app/page.tsx)

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## 本地开发

安装依赖后运行：

```bash
npm install
npm run dev
```

默认访问地址：

```bash
http://localhost:3000
```

## 主要脚本

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 说明

- 当前线上站点重点用于展示周报首页内容。
- 仓库内仍保留了一些本地数据与 API 相关代码；如果要把这些能力作为生产功能继续部署，建议后续再拆分持久化方案，不直接依赖本地 SQLite。
- 周报内容与页面样式可以继续按周迭代，复用现有首页结构。
