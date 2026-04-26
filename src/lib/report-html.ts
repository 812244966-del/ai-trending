import type { CategoryHeatmapItem } from "../components/category-heatmap";
import type {
  Finding,
  MarketSummaryPoint,
  ReportArchiveItem,
  ReportData,
  RichTextBlock,
  TrendJudgment,
} from "./report-types";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderRichInline(block: RichTextBlock) {
  return block
    .map((segment) => (segment.strong ? `<strong>${escapeHtml(segment.text)}</strong>` : escapeHtml(segment.text)))
    .join("");
}

function renderRichParagraphs(blocks: RichTextBlock[]) {
  return blocks.map((block) => `<p>${renderRichInline(block)}</p>`).join("");
}

function renderLinks(
  links: Array<{
    label: string;
    href: string;
  }>,
) {
  return links
    .map(
      (link) =>
        `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
    )
    .join("、");
}

function renderFinding(finding: Finding, index: number) {
  return `
    <article class="card">
      <div class="card-head">
        <div>
          <div class="meta-row">
            <span class="index">${String(index + 1).padStart(2, "0")}</span>
            <span class="chip">${escapeHtml(finding.type)}</span>
          </div>
          <h3>${escapeHtml(finding.name)}</h3>
        </div>
        <div class="meta-col">
          <div><strong>market</strong>: ${escapeHtml(finding.market)}</div>
          <div><strong>date</strong>: ${escapeHtml(finding.date)}</div>
        </div>
      </div>
      <div class="card-body ${finding.image ? "with-image" : ""}">
        <div class="copy">
          <div class="summary">
            <p class="eyebrow">summary</p>
            ${renderRichParagraphs(finding.summary)}
            <p class="sources"><strong>来源：</strong>${renderLinks(finding.sources)}</p>
          </div>
          <div class="insight">
            <p class="eyebrow">why_it_matters</p>
            <div class="list">${finding.whyItMatters.map((block) => `<p>${renderRichInline(block)}</p>`).join("")}</div>
          </div>
        </div>
        ${
          finding.image
            ? `<figure class="thumb">
                 <img src="${escapeHtml(finding.image.url)}" alt="${escapeHtml(finding.image.alt)}" />
                 <figcaption>${escapeHtml(finding.image.sourceLabel)}</figcaption>
               </figure>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderSummaryPoint(point: MarketSummaryPoint, index: number) {
  return `
    <article class="card">
      <div class="meta-row">
        <span class="index">${String(index + 1).padStart(2, "0")}</span>
        <span class="label">分点总结</span>
      </div>
      <h3>${escapeHtml(point.title)}</h3>
      <div class="summary-list">
        ${point.bullets.map((block) => `<p>${renderRichInline(block)}</p>`).join("")}
      </div>
      <p class="sources"><strong>来源：</strong>${renderLinks(point.sources)}</p>
    </article>
  `;
}

function renderTrend(item: TrendJudgment, index: number) {
  return `
    <article class="card">
      <div class="meta-row">
        <span class="index">${String(index + 1).padStart(2, "0")}</span>
        <span class="label">趋势判断</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <div class="summary-list">
        <p><strong>证据</strong>: ${renderRichInline(item.evidence)}</p>
        <p><strong>对比</strong>: ${renderRichInline(item.comparison)}</p>
      </div>
    </article>
  `;
}

function renderHeatmapCard(item: CategoryHeatmapItem) {
  return `
    <article class="heat-card heat-${item.intensity}">
      <div class="meta-row">
        <span class="label">${escapeHtml(item.market)}</span>
        <span class="chip">${escapeHtml(item.signalLabel)}</span>
      </div>
      <h4>${escapeHtml(item.category)}</h4>
      <p class="products">${item.products.map(escapeHtml).join(" / ") || "暂无代表产品"}</p>
      <p>${escapeHtml(item.pattern)}</p>
      <p><strong>产品机会</strong>: ${escapeHtml(item.opportunity)}</p>
      <p><strong>继续观察</strong>: ${escapeHtml(item.watchNext)}</p>
      ${
        item.sources.length > 0
          ? `<p class="sources"><strong>来源：</strong>${renderLinks(item.sources)}</p>`
          : `<p class="sources"><strong>来源：</strong>本期暂无足够可验证事件。</p>`
      }
    </article>
  `;
}

function renderArchive(archive: ReportArchiveItem[]) {
  return archive
    .map(
      (item) => `
        <a class="archive-item" href="${escapeHtml(item.href)}">
          <div class="meta-row">
            <span>${escapeHtml(item.date)}</span>
            <span class="chip">${escapeHtml(item.status)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.note)}</p>
        </a>
      `,
    )
    .join("");
}

export function buildReportHtml(report: ReportData, archive: ReportArchiveItem[]) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>中美 AI C 端周报 | ${escapeHtml(report.reportDate)}</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f8f6f0;
        --text: #0f172a;
        --muted: #475569;
        --border: #dbe1ea;
        --card: #ffffff;
        --accent: #0891b2;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
        background: linear-gradient(180deg, #f6f1e8 0%, #f8f7f2 28%, #eef4f7 100%);
        color: var(--text);
      }
      a { color: inherit; }
      main { max-width: 1200px; margin: 0 auto; padding: 24px 16px 48px; }
      .hero {
        background: #020617;
        color: white;
        border-radius: 32px;
        padding: 36px 32px;
        box-shadow: 0 40px 120px rgba(15, 23, 42, 0.24);
      }
      .hero h1 { margin: 12px 0 0; font-size: clamp(42px, 7vw, 88px); line-height: 0.94; }
      .hero p { max-width: 780px; color: #cbd5e1; line-height: 1.9; }
      .archive { margin: 0 0 16px; }
      .archive summary { cursor: pointer; font-weight: 700; list-style: none; }
      .archive-grid { margin-top: 16px; display: grid; gap: 12px; padding-left: 16px; border-left: 1px solid var(--border); }
      .archive-item, .card, .heat-card {
        background: rgba(255,255,255,0.92);
        border: 1px solid var(--border);
        border-radius: 28px;
        box-shadow: 0 18px 70px rgba(15,23,42,0.08);
      }
      .archive-item { display: block; padding: 16px; text-decoration: none; }
      section { margin-top: 32px; padding: 28px; border-radius: 32px; border: 1px solid rgba(226,232,240,0.8); background: rgba(255,255,255,0.6); }
      .section-head h2 { margin: 8px 0 0; font-size: 36px; line-height: 1.15; }
      .section-head p { margin: 12px 0 0; color: var(--muted); line-height: 1.9; }
      .section-grid { display: grid; gap: 20px; margin-top: 24px; }
      .card { padding: 24px 28px; }
      .card h3 { margin: 18px 0 0; font-size: 30px; line-height: 1.2; }
      .card-head { display: flex; justify-content: space-between; gap: 16px; padding-bottom: 18px; border-bottom: 1px solid #e2e8f0; }
      .card-body { padding-top: 24px; }
      .card-body.with-image { display: grid; grid-template-columns: minmax(0,1fr) 240px; gap: 20px; }
      .meta-row { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
      .meta-col { min-width: 220px; color: #475569; display: grid; gap: 8px; font-size: 14px; }
      .index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        padding: 0 12px;
        border-radius: 999px;
        background: #020617;
        color: white;
        font-weight: 700;
        letter-spacing: 0.08em;
        font-size: 12px;
      }
      .chip, .label {
        display: inline-flex;
        align-items: center;
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
      }
      .chip { border: 1px solid #bae6fd; background: #ecfeff; color: #0e7490; }
      .label { color: #0e7490; text-transform: uppercase; letter-spacing: 0.18em; padding-left: 0; }
      .summary p, .summary-list p, .sources, .heat-card p { color: #334155; line-height: 1.9; }
      .eyebrow { margin: 0 0 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.18em; font-size: 12px; font-weight: 700; }
      .insight { margin-top: 20px; padding: 20px; border-radius: 24px; border: 1px solid rgba(165,243,252,0.8); background: linear-gradient(135deg, rgba(236,254,255,0.92), rgba(248,250,252,0.96)); }
      .thumb { margin: 0; overflow: hidden; border-radius: 22px; border: 1px solid #e2e8f0; background: #f8fafc; }
      .thumb img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
      .thumb figcaption { padding: 8px 12px; font-size: 11px; color: #64748b; background: rgba(255,255,255,0.92); border-top: 1px solid #e2e8f0; }
      .heat-grid { display: grid; gap: 16px; margin-top: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
      .heat-card { padding: 20px; }
      .heat-card h4 { margin: 14px 0 10px; font-size: 20px; }
      .heat-card .products { font-weight: 700; color: #0f172a; }
      .heat-0 { background: #f8fafc; }
      .heat-1 { background: #eef6ff; border-color: #c5ddfb; }
      .heat-2 { background: #d6ebff; border-color: #79b5f1; }
      .heat-3 { background: #ffe8b3; border-color: #ebbe59; }
      .heat-4 { background: #efc1c7; border-color: #cf858d; }
      @media (max-width: 860px) {
        .card-head { flex-direction: column; }
        .card-body.with-image { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    <main>
      <details class="archive">
        <summary>Weekly Archive</summary>
        <div class="archive-grid">${renderArchive(archive)}</div>
      </details>

      <section class="hero">
        <p>${escapeHtml(report.reportDate)}</p>
        <h1>Weekly AI<br />Consumer Trends</h1>
        <p>本网站整理并分析在过去7天内中美市场的AI行业相关应用的最新趋势，信息来源于产品官网、App Store 及行业媒体。</p>
      </section>

      <section>
        <div class="section-head">
          <p class="label">Section 1</p>
          <h2>Section 1：本周重点发现</h2>
          <p>保留最重要的 6 个中美 AI C 端信号，影响面较窄的条目下沉到对应市场模块中。</p>
        </div>
        <div class="section-grid">${report.topFindings.map(renderFinding).join("")}</div>
      </section>

      <section>
        <div class="section-head">
          <p class="label">Section 2</p>
          <h2>Section 2：AI+各方向最新应用情况</h2>
          <p>按方向对比中美近期的代表产品、分发强度与产品机会。</p>
        </div>
        <div class="heat-grid">${report.categoryHeatmapItems.map(renderHeatmapCard).join("")}</div>
      </section>

      <section>
        <div class="section-head">
          <p class="label">Section 3</p>
          <h2>Section 3：美国市场近1周动态</h2>
          <p>以下总结了美国市场近1周的市场动态，方便你快速了解市场上发生了什么。</p>
        </div>
        <div class="section-grid">${report.usSummaryPoints.map(renderSummaryPoint).join("")}</div>
      </section>

      <section>
        <div class="section-head">
          <p class="label">Section 4</p>
          <h2>Section 4：中国市场近1周动态</h2>
          <p>以下总结了中国市场近1周的市场动态，方便你快速了解市场上发生了什么。</p>
        </div>
        <div class="section-grid">${report.cnSummaryPoints.map(renderSummaryPoint).join("")}</div>
      </section>

      <section>
        <div class="section-head">
          <p class="label">Section 5</p>
          <h2>Section 5：跨市场趋势判断</h2>
          <p>以下判断都明确区分来源事实与推断，证据来自本期已收录条目与榜单快照。</p>
        </div>
        <div class="section-grid">${report.trendJudgments.map(renderTrend).join("")}</div>
      </section>
    </main>
  </body>
</html>`;
}
