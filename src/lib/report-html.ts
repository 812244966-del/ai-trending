import type { CategoryHeatmapItem } from "../components/category-heatmap";
import type {
  Finding,
  MarketSummaryPoint,
  ReportArchiveItem,
  ReportData,
  RichTextBlock,
  TrendJudgment,
} from "./report-types";

const markets = ["美国", "中国"] as const;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function serializeForScript(value: unknown) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function renderRichInline(block: RichTextBlock) {
  return block
    .map((segment) => (segment.strong ? `<strong>${escapeHtml(segment.text)}</strong>` : escapeHtml(segment.text)))
    .join("");
}

function needsInlineSpace(previous: RichTextBlock, next: RichTextBlock) {
  const previousText = previous.map((segment) => segment.text).join("").trim();
  const nextText = next.map((segment) => segment.text).join("").trim();
  const previousLast = previousText.slice(-1);
  const nextFirst = nextText.charAt(0);
  return /[A-Za-z0-9)]/.test(previousLast) && /[A-Za-z0-9(]/.test(nextFirst);
}

function renderRichInlineBlocks(blocks: RichTextBlock[]) {
  return blocks
    .map((block, index) => `${index > 0 && needsInlineSpace(blocks[index - 1], block) ? " " : ""}${renderRichInline(block)}`)
    .join("");
}

function renderRichBulletList(blocks: RichTextBlock[]) {
  return `<ul class="insight-list">${blocks
    .map(
      (block) => `
        <li>
          <span class="bullet"></span>
          <span>${renderRichInline(block)}</span>
        </li>
      `,
    )
    .join("")}</ul>`;
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
            <p class="summary-inline">${renderRichInlineBlocks(finding.summary)}</p>
            <p class="sources"><strong>来源：</strong>${renderLinks(finding.sources)}</p>
          </div>
          <div class="insight">
            <div class="insight-head">
              <span class="insight-accent"></span>
              <p class="eyebrow">why_it_matters</p>
            </div>
            ${renderRichBulletList(finding.whyItMatters)}
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
        ${point.bullets
          .map(
            (block) => `
              <div class="summary-bullet">
                <span class="bullet"></span>
                <p>${renderRichInline(block)}</p>
              </div>
            `,
          )
          .join("")}
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

function heatClass(intensity: CategoryHeatmapItem["intensity"]) {
  return `heat-${intensity}`;
}

function productPreview(products: string[]) {
  return products.slice(0, 2);
}

function patternPreview(pattern: string) {
  return pattern.length > 34 ? `${pattern.slice(0, 34)}...` : pattern;
}

function strongestCategories(items: CategoryHeatmapItem[], market: CategoryHeatmapItem["market"]) {
  return [...items]
    .filter((item) => item.market === market && item.intensity > 0)
    .sort((a, b) => b.intensity - a.intensity || a.category.localeCompare(b.category))
    .slice(0, 2)
    .map((item) => item.category);
}

function renderHeatmapCell(
  item: CategoryHeatmapItem,
  {
    categoryIndex,
    selectedId,
  }: {
    categoryIndex: number;
    selectedId: string;
  },
) {
  const previewProducts = productPreview(item.products);

  return `
    <div class="heat-cell-wrap">
      <button
        type="button"
        class="heat-cell ${heatClass(item.intensity)} ${selectedId === item.id ? "is-selected" : ""}"
        data-heatmap-id="${escapeHtml(item.id)}"
        data-category-index="${categoryIndex}"
        data-market="${escapeHtml(item.market)}"
        aria-pressed="${selectedId === item.id ? "true" : "false"}"
      >
        <span class="heat-cell-top">
          <span class="heat-market">${escapeHtml(item.market)}</span>
          <span class="heat-pill ${heatClass(item.intensity)}">${escapeHtml(item.signalLabel)}</span>
        </span>
        <span class="heat-products">
          ${
            previewProducts.length > 0
              ? previewProducts
                  .map((product) => `<span class="heat-tag">${escapeHtml(product)}</span>`)
                  .join("")
              : `<span class="heat-tag muted">暂无代表产品</span>`
          }
        </span>
        <span class="heat-pattern">${escapeHtml(patternPreview(item.pattern))}</span>
      </button>
    </div>
  `;
}

function renderHeatmapDetail(item: CategoryHeatmapItem) {
  return `
    <div class="heat-detail-head">
      <div class="meta-row">
        <span class="detail-market">${escapeHtml(item.market)}</span>
        <span class="heat-pill ${heatClass(item.intensity)}">${escapeHtml(item.signalLabel)}</span>
      </div>
      <h3>${escapeHtml(item.category)}</h3>
      <div class="detail-accent ${heatClass(item.intensity)}"></div>
    </div>
    <div class="detail-tags">
      ${
        item.products.length > 0
          ? item.products.map((product) => `<span class="detail-tag">${escapeHtml(product)}</span>`).join("")
          : `<span class="detail-tag muted">本周暂无代表产品</span>`
      }
    </div>
    <div class="detail-stack">
      <div class="detail-block">
        <p class="detail-label">产品形态</p>
        <p>${escapeHtml(item.pattern)}</p>
      </div>
      <div class="detail-block">
        <p class="detail-label">产品机会</p>
        <p>${escapeHtml(item.opportunity)}</p>
      </div>
      <div class="detail-block">
        <p class="detail-label">继续观察</p>
        <p>${escapeHtml(item.watchNext)}</p>
      </div>
    </div>
    <div class="detail-sources">
      <p class="detail-label">来源</p>
      ${
        item.sources.length > 0
          ? `<div class="source-chip-row">${item.sources
              .map(
                (source) =>
                  `<a class="source-chip" href="${escapeHtml(source.href)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>`,
              )
              .join("")}</div>`
          : `<p class="detail-empty">本周暂无足够可验证事件，未附来源。</p>`
      }
    </div>
  `;
}

function renderHeatmapSection(items: CategoryHeatmapItem[]) {
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const selected =
    [...items].sort((a, b) => b.intensity - a.intensity || a.category.localeCompare(b.category))[0] ?? items[0];
  const usStrongest = strongestCategories(items, "美国");
  const cnStrongest = strongestCategories(items, "中国");
  const watchCategories = categories.filter((category) =>
    items.filter((item) => item.category === category).every((item) => item.intensity <= 1),
  );

  return `
    <div class="heat-overview">
      <article class="heat-overview-card us">
        <p class="overview-kicker">美国更强</p>
        <p class="overview-value">${escapeHtml(usStrongest.join(" / ") || "暂无明确主导方向")}</p>
        <p class="overview-copy">近 60 天的强信号主要集中在助手、效率与工作台类入口。</p>
      </article>
      <article class="heat-overview-card cn">
        <p class="overview-kicker">中国更强</p>
        <p class="overview-value">${escapeHtml(cnStrongest.join(" / ") || "暂无明确主导方向")}</p>
        <p class="overview-copy">近 60 天更清晰的是超级入口、视频创作和生活决策类能力整合。</p>
      </article>
      <article class="heat-overview-card watch">
        <p class="overview-kicker">空白观察</p>
        <p class="overview-value">${escapeHtml(watchCategories.slice(0, 2).join(" / ") || "暂无明显低信号方向")}</p>
        <p class="overview-copy">这些方向没有强行延用旧案例，等下一个可验证发布窗口再抬高权重。</p>
      </article>
    </div>

    <div class="heat-legend">
      <span class="legend-title">信号强度</span>
      ${[
        ["暂无", 0],
        ["弱", 1],
        ["中", 2],
        ["强", 3],
        ["极强", 4],
      ]
        .map(
          ([label, intensity]) => `
            <span class="legend-chip ${heatClass(intensity as CategoryHeatmapItem["intensity"])}">
              <span class="legend-dot"></span>
              ${escapeHtml(String(label))}
            </span>
          `,
        )
        .join("")}
    </div>

    <div class="heat-layout" data-heatmap-root data-selected-id="${escapeHtml(selected?.id ?? "")}">
      <div class="heat-board">
        <div class="heat-head">
          <span>方向</span>
          ${markets.map((market) => `<span>${escapeHtml(market)}</span>`).join("")}
        </div>
        <div class="heat-rows">
          ${categories
            .map(
              (category, categoryIndex) => `
                <div class="heat-row">
                  <div class="heat-category">
                    <p class="heat-category-index">${String(categoryIndex + 1).padStart(2, "0")}</p>
                    <p class="heat-category-name">${escapeHtml(category)}</p>
                  </div>
                  <div class="heat-market-grid">
                    ${markets
                      .map((market) => items.find((item) => item.category === category && item.market === market))
                      .filter(Boolean)
                      .map((item) =>
                        renderHeatmapCell(item as CategoryHeatmapItem, {
                          categoryIndex,
                          selectedId: selected?.id ?? "",
                        }),
                      )
                      .join("")}
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <aside class="heat-detail" data-heatmap-detail>
        ${selected ? renderHeatmapDetail(selected) : ""}
      </aside>
      <div class="heat-hover hidden" data-heatmap-hover></div>
      <script type="application/json" data-heatmap-items>${serializeForScript(items)}</script>
    </div>
    <script>
      (() => {
        const root = document.querySelector("[data-heatmap-root]");
        if (!root) return;

        const dataNode = root.querySelector("[data-heatmap-items]");
        const detailNode = root.querySelector("[data-heatmap-detail]");
        const hoverNode = root.querySelector("[data-heatmap-hover]");
        if (!dataNode || !detailNode || !hoverNode) return;

        const items = JSON.parse(dataNode.textContent || "[]");
        if (!Array.isArray(items) || items.length === 0) return;

        const byId = new Map(items.map((item) => [item.id, item]));
        const buttons = Array.from(root.querySelectorAll("[data-heatmap-id]"));
        const desktopQuery = window.matchMedia("(min-width: 768px)");

        const escapeHtml = (value) =>
          String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;");

        const heatClass = (intensity) => "heat-" + intensity;
        const renderProductTags = (products, emptyText, tagClass) => {
          if (!Array.isArray(products) || products.length === 0) {
            return '<span class="' + tagClass + ' muted">' + escapeHtml(emptyText) + "</span>";
          }

          return products
            .map((product) => '<span class="' + tagClass + '">' + escapeHtml(product) + "</span>")
            .join("");
        };

        const renderSourceChips = (sources) => {
          if (!Array.isArray(sources) || sources.length === 0) {
            return '<p class="detail-empty">本周暂无足够可验证事件，未附来源。</p>';
          }

          return '<div class="source-chip-row">' + sources
            .map(
              (source) =>
                '<a class="source-chip" href="' +
                escapeHtml(source.href) +
                '" target="_blank" rel="noreferrer">' +
                escapeHtml(source.label) +
                "</a>",
            )
            .join("") + "</div>";
        };

        const renderDetail = (item) => {
          return '' +
            '<div class="heat-detail-head">' +
              '<div class="meta-row">' +
                '<span class="detail-market">' + escapeHtml(item.market) + '</span>' +
                '<span class="heat-pill ' + heatClass(item.intensity) + '">' + escapeHtml(item.signalLabel) + '</span>' +
              '</div>' +
              '<h3>' + escapeHtml(item.category) + '</h3>' +
              '<div class="detail-accent ' + heatClass(item.intensity) + '"></div>' +
            '</div>' +
            '<div class="detail-tags">' + renderProductTags(item.products, '本周暂无代表产品', 'detail-tag') + '</div>' +
            '<div class="detail-stack">' +
              '<div class="detail-block"><p class="detail-label">产品形态</p><p>' + escapeHtml(item.pattern) + '</p></div>' +
              '<div class="detail-block"><p class="detail-label">产品机会</p><p>' + escapeHtml(item.opportunity) + '</p></div>' +
              '<div class="detail-block"><p class="detail-label">继续观察</p><p>' + escapeHtml(item.watchNext) + '</p></div>' +
            '</div>' +
            '<div class="detail-sources"><p class="detail-label">来源</p>' + renderSourceChips(item.sources) + '</div>';
        };

        const renderHover = (item) => {
          return '' +
            '<div class="hover-head">' +
              '<div class="meta-row">' +
                '<span class="hover-accent ' + heatClass(item.intensity) + '"></span>' +
                '<div><p class="hover-market">' + escapeHtml(item.market) + '</p><p class="hover-category">' + escapeHtml(item.category) + '</p></div>' +
              '</div>' +
              '<span class="heat-pill ' + heatClass(item.intensity) + '">' + escapeHtml(item.signalLabel) + '</span>' +
            '</div>' +
            '<div class="hover-tags">' + renderProductTags(item.products, '暂无代表产品', 'hover-tag') + '</div>' +
            '<div class="hover-stack">' +
              '<div><p class="detail-label">产品形态</p><p>' + escapeHtml(item.pattern) + '</p></div>' +
              '<div><p class="detail-label">产品机会</p><p>' + escapeHtml(item.opportunity) + '</p></div>' +
              '<div><p class="detail-label">继续观察</p><p>' + escapeHtml(item.watchNext) + '</p></div>' +
            '</div>';
        };

        const setSelected = (id) => {
          const item = byId.get(id);
          if (!item) return;
          root.dataset.selectedId = id;
          detailNode.innerHTML = renderDetail(item);
          buttons.forEach((button) => {
            const selected = button.dataset.heatmapId === id;
            button.setAttribute("aria-pressed", selected ? "true" : "false");
            button.classList.toggle("is-selected", selected);
          });
        };

        const hideHover = () => {
          hoverNode.classList.add("hidden");
          hoverNode.innerHTML = "";
          hoverNode.style.left = "";
          hoverNode.style.top = "";
        };

        const showHover = (id, button) => {
          if (!desktopQuery.matches) return;
          const item = byId.get(id);
          if (!item) return;

          hoverNode.innerHTML = renderHover(item);
          hoverNode.classList.remove("hidden");

          const rect = button.getBoundingClientRect();
          const hoverRect = hoverNode.getBoundingClientRect();
          const gap = 16;
          let left = item.market === "中国" ? rect.right - hoverRect.width : rect.left;
          let top = rect.bottom + gap;

          if (top + hoverRect.height > window.innerHeight - 16) {
            top = rect.top - hoverRect.height - gap;
          }

          left = Math.max(16, Math.min(left, window.innerWidth - hoverRect.width - 16));
          top = Math.max(16, Math.min(top, window.innerHeight - hoverRect.height - 16));

          hoverNode.style.left = left + "px";
          hoverNode.style.top = top + "px";
        };

        buttons.forEach((button) => {
          const id = button.dataset.heatmapId;
          if (!id) return;

          button.addEventListener("click", () => setSelected(id));
          button.addEventListener("mouseenter", () => showHover(id, button));
          button.addEventListener("mouseleave", hideHover);
          button.addEventListener("focus", () => showHover(id, button));
          button.addEventListener("blur", hideHover);
        });

        window.addEventListener("scroll", hideHover, { passive: true });
        window.addEventListener("resize", hideHover);

        setSelected(root.dataset.selectedId || buttons[0]?.dataset.heatmapId || items[0]?.id);
      })();
    </script>
  `;
}

function renderArchive(archive: ReportArchiveItem[]) {
  return archive
    .map(
      (item) => `
        <a class="archive-item" href="${escapeHtml(item.href)}">
          <div class="meta-row">
            <span>${escapeHtml(item.date)}</span>
            <span class="chip ${item.status === "archive" ? "chip-muted" : ""}">${escapeHtml(item.status)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
        </a>
      `,
    )
    .join("");
}

function renderArchiveWidget(reportDate: string, archive: ReportArchiveItem[]) {
  return `
      <details class="archive">
        <summary>Weekly Archive</summary>
        <div class="archive-grid" data-archive-grid data-current-report-date="${escapeHtml(reportDate)}">${renderArchive(archive)}</div>
      </details>
      <script>
        (() => {
          const grid = document.querySelector("[data-archive-grid]");
          if (!grid) return;

          const escapeHtml = (value) =>
            String(value)
              .replaceAll("&", "&amp;")
              .replaceAll("<", "&lt;")
              .replaceAll(">", "&gt;")
              .replaceAll('"', "&quot;")
              .replaceAll("'", "&#39;");

          const renderItem = (item) => {
            return \`
              <a class="archive-item" href="\${escapeHtml(item.href)}">
                <div class="meta-row">
                  <span>\${escapeHtml(item.date)}</span>
                  <span class="chip \${item.status === "archive" ? "chip-muted" : ""}">\${escapeHtml(item.status)}</span>
                </div>
                <h3>\${escapeHtml(item.title)}</h3>
                \${item.note ? \`<p>\${escapeHtml(item.note)}</p>\` : ""}
              </a>
            \`;
          };

          fetch("/reports/archive.json", { cache: "no-store" })
            .then((response) => (response.ok ? response.json() : null))
            .then((items) => {
              if (!Array.isArray(items) || items.length === 0) return;
              grid.innerHTML = items.map(renderItem).join("");
            })
            .catch(() => {});
        })();
      </script>
  `;
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
        --text: #0f172a;
        --muted: #475569;
        --border: #dbe1ea;
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
      .archive-item, .card, .heat-board, .heat-detail, .heat-overview-card {
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
      .chip { border: 1px solid #bae6fd; background: #ecfeff; color: #0e7490; text-transform: uppercase; letter-spacing: 0.08em; }
      .chip-muted { border-color: #e2e8f0; background: rgba(255,255,255,0.88); color: #64748b; }
      .label { color: #0e7490; text-transform: uppercase; letter-spacing: 0.18em; padding-left: 0; }
      strong { font-weight: 800; color: #020617; }
      .summary p, .summary-list p, .sources { color: #334155; line-height: 1.9; }
      .summary-inline { margin: 12px 0 0; }
      .summary-bullet, .insight-list li { display: flex; gap: 12px; align-items: flex-start; }
      .bullet { width: 8px; height: 8px; margin-top: 11px; border-radius: 999px; background: #0891b2; flex: none; }
      .eyebrow { margin: 0; color: #64748b; text-transform: uppercase; letter-spacing: 0.18em; font-size: 12px; font-weight: 700; }
      .insight { margin-top: 20px; padding: 20px; border-radius: 24px; border: 1px solid rgba(165,243,252,0.8); background: linear-gradient(135deg, rgba(236,254,255,0.92), rgba(248,250,252,0.96)); }
      .insight-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
      .insight-accent { width: 4px; height: 40px; border-radius: 999px; background: #06b6d4; }
      .insight-list { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; color: #1e293b; line-height: 1.9; font-weight: 600; }
      .thumb { margin: 0; overflow: hidden; border-radius: 22px; border: 1px solid #e2e8f0; background: #f8fafc; }
      .thumb img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
      .thumb figcaption { padding: 8px 12px; font-size: 11px; color: #64748b; background: rgba(255,255,255,0.92); border-top: 1px solid #e2e8f0; }

      .heat-overview { display: grid; gap: 12px; margin-top: 24px; }
      .heat-overview-card { padding: 18px; }
      .heat-overview-card.us { border-color: #c9ddf7; background: linear-gradient(135deg,#fbfdff,rgba(231,243,255,0.96)); }
      .heat-overview-card.cn { border-color: #f0d493; background: linear-gradient(135deg,#fffdf7,rgba(255,242,214,0.96)); }
      .heat-overview-card.watch { border-color: #e2c0c4; background: linear-gradient(135deg,#fffdfd,rgba(247,228,231,0.96)); }
      .overview-kicker { margin: 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; }
      .heat-overview-card.us .overview-kicker { color: #306ba7; }
      .heat-overview-card.cn .overview-kicker { color: #8b6210; }
      .heat-overview-card.watch .overview-kicker { color: #9a555c; }
      .overview-value { margin: 12px 0 0; font-size: 18px; line-height: 1.6; font-weight: 700; }
      .overview-copy { margin: 8px 0 0; color: #475569; line-height: 1.8; }

      .heat-legend { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 24px; }
      .legend-title { margin-right: 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #64748b; }
      .legend-chip, .heat-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid transparent;
        font-size: 12px;
        font-weight: 700;
      }
      .legend-dot { width: 10px; height: 10px; border-radius: 999px; background: currentColor; opacity: 0.9; }

      .heat-layout { position: relative; display: grid; gap: 24px; margin-top: 20px; }
      .heat-board { padding: 18px; }
      .heat-head { display: none; }
      .heat-rows { display: grid; gap: 16px; }
      .heat-row { display: grid; gap: 12px; }
      .heat-category {
        height: 156px;
        padding: 16px;
        border-radius: 20px;
        border: 1px solid #e2e8f0;
        background: #f5f6fb;
      }
      .heat-category-index { margin: 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.22em; color: #94a3b8; }
      .heat-category-name { margin: 12px 0 0; font-size: 15px; line-height: 1.7; font-weight: 700; color: #1e293b; }
      .heat-market-grid { display: grid; gap: 12px; }
      .heat-cell-wrap { position: relative; }
      .heat-cell {
        width: 100%;
        height: 156px;
        padding: 16px;
        border-radius: 20px;
        border: 1px solid transparent;
        text-align: left;
        transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, filter 180ms ease;
        cursor: pointer;
      }
      .heat-cell:hover { transform: translateY(-2px); filter: brightness(1.02); }
      .heat-cell:focus-visible { outline: 0; box-shadow: 0 0 0 4px rgba(217, 222, 248, 0.9); }
      .heat-cell.is-selected { box-shadow: 0 0 0 3px rgba(46,132,213,0.18), 0 20px 48px rgba(15,23,42,0.14); }
      .heat-cell-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      .heat-market { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; opacity: 0.8; }
      .heat-products { display: flex; flex-wrap: wrap; gap: 8px; min-height: 44px; margin-top: 20px; align-content: flex-start; }
      .heat-pattern { display: block; margin-top: auto; font-size: 14px; line-height: 1.7; opacity: 0.78; }
      .heat-tag, .detail-tag, .hover-tag {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.65);
        background: rgba(255,255,255,0.75);
        font-size: 12px;
        font-weight: 700;
        color: #334155;
      }
      .muted { color: #64748b; }

      .heat-0 { background: #f6f6fb; border-color: #e2e8f0; color: #475569; }
      .heat-1 { background: #eaf4ff; border-color: #b8d7fb; color: #0f172a; }
      .heat-2 { background: #d6ebff; border-color: #79b5f1; color: #0f172a; }
      .heat-3 { background: #ffe8b3; border-color: #ebbe59; color: #0f172a; }
      .heat-4 { background: #efc1c7; border-color: #cf858d; color: #0f172a; }
      .heat-pill.heat-0, .legend-chip.heat-0 { background: rgba(255,255,255,0.92); border-color: #e2e8f0; color: #64748b; }
      .heat-pill.heat-1, .legend-chip.heat-1 { background: rgba(255,255,255,0.92); border-color: #cfe3fb; color: #2f6ba7; }
      .heat-pill.heat-2, .legend-chip.heat-2 { background: rgba(255,255,255,0.92); border-color: #bddaf8; color: #235f9d; }
      .heat-pill.heat-3, .legend-chip.heat-3 { background: rgba(255,255,255,0.92); border-color: #f2ddb1; color: #8b6210; }
      .heat-pill.heat-4, .legend-chip.heat-4 { background: rgba(255,255,255,0.92); border-color: #e8c3c7; color: #9a555c; }

      .heat-detail {
        padding: 24px;
        background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(246,248,255,0.95));
      }
      .heat-detail-head h3 { margin: 16px 0 0; font-size: 36px; line-height: 1.15; }
      .detail-market {
        display: inline-flex;
        align-items: center;
        padding: 6px 12px;
        border-radius: 999px;
        background: #020617;
        color: white;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }
      .detail-accent { width: 64px; height: 6px; margin-top: 12px; border-radius: 999px; }
      .detail-accent.heat-0 { background: #cbd5e1; }
      .detail-accent.heat-1 { background: #7fb5ee; }
      .detail-accent.heat-2 { background: #2e84d5; }
      .detail-accent.heat-3 { background: #d2941e; }
      .detail-accent.heat-4 { background: #b85762; }
      .detail-tags, .hover-tags, .source-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
      .detail-stack { display: grid; gap: 16px; margin-top: 24px; }
      .detail-block {
        padding: 16px;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.72);
        background: rgba(255,255,255,0.72);
      }
      .detail-label {
        margin: 0;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #94a3b8;
      }
      .detail-block p:last-child, .detail-sources p:last-child, .hover-stack p:last-child { margin: 8px 0 0; color: #334155; line-height: 1.9; }
      .detail-sources { margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
      .source-chip {
        display: inline-flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid #e2e8f0;
        background: white;
        font-size: 12px;
        font-weight: 700;
        text-decoration: none;
        color: #334155;
      }
      .detail-empty { color: #64748b; line-height: 1.9; }

      .heat-hover {
        position: fixed;
        z-index: 30;
        width: min(24rem, calc(100vw - 2.5rem));
        padding: 20px;
        border-radius: 22px;
        border: 1px solid #dfe5f7;
        background: rgba(255,255,255,0.98);
        box-shadow: 0 24px 70px rgba(27,39,94,0.16);
        backdrop-filter: blur(10px);
        pointer-events: none;
      }
      .hidden { display: none; }
      .hover-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .hover-accent { width: 6px; height: 36px; border-radius: 999px; flex: none; }
      .hover-accent.heat-0 { background: #cbd5e1; }
      .hover-accent.heat-1 { background: #7fb5ee; }
      .hover-accent.heat-2 { background: #2e84d5; }
      .hover-accent.heat-3 { background: #d2941e; }
      .hover-accent.heat-4 { background: #b85762; }
      .hover-market { margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #5a67a8; }
      .hover-category { margin: 6px 0 0; font-size: 14px; font-weight: 700; color: #020617; }
      .hover-stack { display: grid; gap: 16px; margin-top: 16px; color: #334155; line-height: 1.8; }

      @media (min-width: 780px) {
        .heat-overview { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .heat-market-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (min-width: 1100px) {
        .heat-layout { grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr); align-items: start; }
        .heat-head {
          display: grid;
          grid-template-columns: 180px repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding: 0 4px;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #64748b;
        }
        .heat-row { grid-template-columns: 180px minmax(0, 1fr); align-items: stretch; }
        .heat-detail { position: sticky; top: 28px; }
      }
      @media (max-width: 860px) {
        .card-head { flex-direction: column; }
        .card-body.with-image { grid-template-columns: 1fr; }
      }
      @media (max-width: 767px) {
        .heat-hover { display: none !important; }
      }
    </style>
  </head>
  <body>
    <main>
      ${renderArchiveWidget(report.reportDate, archive)}

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
        ${renderHeatmapSection(report.categoryHeatmapItems)}
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
