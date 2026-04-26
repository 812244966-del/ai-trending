import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { GoogleGenAI, Type } from "@google/genai";
import { z } from "zod";
import type { CategoryHeatmapItem } from "../src/components/category-heatmap";
import { reportArchive as currentArchive } from "../src/data/reports/archive";
import { buildReportHtml } from "../src/lib/report-html";
import type {
  Finding,
  MarketSummaryPoint,
  ReportArchiveItem,
  ReportData,
  TrendJudgment,
} from "../src/lib/report-types";

type SourceSeed = {
  label: string;
  url: string;
  market: "美国" | "中国" | "跨市场";
  kind: "official" | "media" | "app-store" | "ranking";
};

const CATEGORY_ORDER = [
  "AI 助手/搜索",
  "AI 教育/学习",
  "AI 陪伴/情感/社交",
  "AI 游戏/互动娱乐",
  "AI 创作",
  "AI 效率/办公",
  "AI 生活工具",
  "AI 硬件入口",
] as const;

const MARKETS = ["美国", "中国"] as const;

const SOURCE_SEEDS: SourceSeed[] = [
  { label: "Meta 官方", url: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/", market: "美国", kind: "official" },
  { label: "Google notebooks", url: "https://blog.google/products/gemini/notebooks-gemini-notebooklm/", market: "美国", kind: "official" },
  { label: "Gemini Drop", url: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/", market: "美国", kind: "official" },
  { label: "OpenAI Release Notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes", market: "美国", kind: "official" },
  { label: "Google AI Edge Eloquent", url: "https://apps.apple.com/us/app/google-ai-edge-eloquent/id6756505519", market: "美国", kind: "app-store" },
  { label: "Character.AI Blog", url: "https://blog.character.ai/pipsqueak2-and-more/", market: "美国", kind: "official" },
  { label: "Replika App Store", url: "https://apps.apple.com/us/app/replika/id1158555867", market: "美国", kind: "app-store" },
  { label: "Hi Rokid App Store", url: "https://apps.apple.com/us/app/hi-rokid/id6749669942", market: "美国", kind: "app-store" },
  { label: "Apple 美国总榜", url: "https://apps.apple.com/us/genre/ios-apps/id6016", market: "美国", kind: "ranking" },
  { label: "Apple 美国摄影与录像榜", url: "https://apps.apple.com/us/iphone/charts/6008?chart=top-free", market: "美国", kind: "ranking" },
  { label: "豆包 App Store", url: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672", market: "中国", kind: "app-store" },
  { label: "即梦AI App Store", url: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563", market: "中国", kind: "app-store" },
  { label: "腾讯元宝 App Store", url: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430", market: "中国", kind: "app-store" },
  { label: "点点 App Store", url: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122", market: "中国", kind: "app-store" },
  { label: "星野 App Store", url: "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337", market: "中国", kind: "app-store" },
  { label: "千问智学 App Store", url: "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440", market: "中国", kind: "app-store" },
  { label: "Rokid AI App Store", url: "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564", market: "中国", kind: "app-store" },
  { label: "Apple 中国总榜", url: "https://apps.apple.com/cn/charts/iphone", market: "中国", kind: "ranking" },
  { label: "Apple 中国摄影与录像榜", url: "https://apps.apple.com/cn/iphone/charts/6008?chart=top-free", market: "中国", kind: "ranking" },
];

const richSegmentSchema = z.object({
  text: z.string().min(1),
  strong: z.boolean().optional(),
});

const richTextBlockSchema = z.array(richSegmentSchema);

const findingSchema = z.object({
  name: z.string().min(1),
  market: z.enum(["美国", "中国"]),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  type: z.enum(["new app", "feature launch", "notable update", "social signal"]),
  summary: z.array(richTextBlockSchema).min(1).max(4),
  whyItMatters: z.array(richTextBlockSchema).min(1).max(4),
  sources: z.array(z.object({ label: z.string().min(1), href: z.string().url() })).min(1),
});

const trendSchema = z.object({
  title: z.string().min(1),
  evidence: richTextBlockSchema.min(1),
  comparison: richTextBlockSchema.min(1),
});

const marketSummarySchema = z.object({
  title: z.string().min(1),
  bullets: z.array(richTextBlockSchema).min(2).max(4),
  sources: z.array(z.object({ label: z.string().min(1), href: z.string().url() })).min(1),
});

const heatmapItemSchema = z.object({
  id: z.string().min(1),
  category: z.string().min(1),
  market: z.enum(["美国", "中国"]),
  intensity: z.number().int().min(0).max(4),
  signalLabel: z.enum(["暂无", "弱", "中", "强", "极强"]),
  products: z.array(z.string()).max(5),
  pattern: z.string().min(1),
  opportunity: z.string().min(1),
  watchNext: z.string().min(1),
  sources: z.array(z.object({ label: z.string().min(1), href: z.string().url() })),
});

const reportSchema = z.object({
  topFindings: z.array(findingSchema).min(3).max(6),
  trendJudgments: z.array(trendSchema).min(3).max(5),
  categoryHeatmapItems: z.array(heatmapItemSchema).min(1),
  usSummaryPoints: z.array(marketSummarySchema).min(2).max(5),
  cnSummaryPoints: z.array(marketSummarySchema).min(2).max(5),
});

function parseArgs() {
  const args = process.argv.slice(2);
  const params = new Map<string, string | boolean>();

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (!arg.startsWith("--")) continue;

    const [key, inlineValue] = arg.slice(2).split("=");

    if (inlineValue !== undefined) {
      params.set(key, inlineValue);
      continue;
    }

    const next = args[index + 1];
    if (!next || next.startsWith("--")) {
      params.set(key, true);
      continue;
    }

    params.set(key, next);
    index += 1;
  }

  return {
    date: typeof params.get("date") === "string" ? String(params.get("date")) : undefined,
    dryRun: Boolean(params.get("dry-run")),
  };
}

function resolveReportDate(input?: string) {
  if (input) return input;
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
}

function shiftDate(dateString: string, days: number) {
  const date = new Date(`${dateString}T00:00:00+08:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchSource(source: SourceSeed) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const response = await fetch(source.url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const text = stripHtml(html).slice(0, 6000);

    return {
      ...source,
      ok: true as const,
      excerpt: text,
    };
  } catch (error) {
    return {
      ...source,
      ok: false as const,
      excerpt: error instanceof Error ? error.message : "fetch failed",
    };
  } finally {
    clearTimeout(timeout);
  }
}

function buildPrompt({
  weeklyStart,
  weeklyEnd,
  heatmapStart,
  heatmapEnd,
  sourcePayload,
}: {
  weeklyStart: string;
  weeklyEnd: string;
  heatmapStart: string;
  heatmapEnd: string;
  sourcePayload: string;
}) {
  return `
你是一位中美 AI 消费产品研究员。请基于给定来源，为周报网站生成结构化 JSON。

要求：
1. topFindings、usSummaryPoints、cnSummaryPoints、trendJudgments 只覆盖 ${weeklyStart} 到 ${weeklyEnd} 的最近 7 天动态。
2. categoryHeatmapItems 覆盖 ${heatmapStart} 到 ${heatmapEnd} 的最近 60 天信号。
3. 只使用给定来源里的事实，不要编造不存在的发布。
4. 语言为中文，产品名保留原文。
5. topFindings 选择 3-6 条最重要发现。
6. trendJudgments 必须是市场趋势判断，不要写方法论提醒。
7. categoryHeatmapItems 必须覆盖以下 8 个分类，每个分类都要同时给美国和中国一条，共 16 条：
   - AI 助手/搜索
   - AI 教育/学习
   - AI 陪伴/情感/社交
   - AI 游戏/互动娱乐
   - AI 创作
   - AI 效率/办公
   - AI 生活工具
   - AI 硬件入口
8. 如果某个分类缺少强证据，也要输出该项，并把 intensity 设为 0 或 1，signalLabel 设为 暂无 或 弱。
9. sources 里只保留你实际使用到的来源链接。
10. summary / whyItMatters / bullets / evidence / comparison 均使用 RichTextBlock 结构，即数组，数组内每项为 { "text": "...", "strong": true|false }。

来源摘要：
${sourcePayload}
`;
}

function serialize(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function buildLatestModule(reportDate: string, report: Omit<ReportData, "reportDate">) {
  return `import type { CategoryHeatmapItem } from "../../components/category-heatmap";
import type { Finding, MarketSummaryPoint, TrendJudgment } from "../../lib/report-types";

export const reportDate = ${JSON.stringify(reportDate)};

export const topFindings: Finding[] = ${serialize(report.topFindings)};

export const trendJudgments: TrendJudgment[] = ${serialize(report.trendJudgments)};

export const categoryHeatmapItems: CategoryHeatmapItem[] = ${serialize(report.categoryHeatmapItems)};

export const usSummaryPoints: MarketSummaryPoint[] = ${serialize(report.usSummaryPoints)};

export const cnSummaryPoints: MarketSummaryPoint[] = ${serialize(report.cnSummaryPoints)};
`;
}

function buildArchiveModule(archive: ReportArchiveItem[]) {
  return `import type { ReportArchiveItem } from "../../lib/report-types";

export const reportArchive: ReportArchiveItem[] = ${serialize(archive)};
`;
}

function atomicWrite(path: string, content: string) {
  mkdirSync(dirname(path), { recursive: true });
  const tempPath = `${path}.tmp`;
  writeFileSync(tempPath, content);
  renameSync(tempPath, path);
}

function normalizeHeatmapItems(items: CategoryHeatmapItem[]) {
  const byKey = new Map(items.map((item) => [`${item.category}:${item.market}`, item] as const));

  return CATEGORY_ORDER.flatMap((category) =>
    MARKETS.map((market) => {
      const existing = byKey.get(`${category}:${market}`);

      if (existing) {
        return existing;
      }

      return {
        id: `${category}-${market}`.replace(/[^\w\u4e00-\u9fa5-]+/g, "-").toLowerCase(),
        category,
        market,
        intensity: 0,
        signalLabel: "暂无",
        products: [],
        pattern: `${market}${category}方向本期暂无足够可验证的新信号。`,
        opportunity: "先保持观察，等待更明确的消费者级发布或分发变化。",
        watchNext: "继续跟踪官方发布、应用商店排名和代表产品更新。",
        sources: [],
      } satisfies CategoryHeatmapItem;
    }),
  );
}

function updateArchive(reportDate: string) {
  const href = `/reports/weekly-ai-report-${reportDate}.html`;
  const deduped = currentArchive.filter((item) => item.date !== reportDate);
  const archivedPrevious = deduped.map((item) => ({ ...item, status: "archive" as const }));

  return [
    {
      date: reportDate,
      title: "Weekly AI Consumer Trends",
      href,
      status: "current" as const,
      note: "当前线上版本，同时保留一份静态 HTML 归档页。",
    },
    ...archivedPrevious,
  ];
}

async function main() {
  const { date, dryRun } = parseArgs();
  const reportDate = resolveReportDate(date);
  const weeklyEnd = reportDate;
  const weeklyStart = shiftDate(reportDate, -6);
  const heatmapStart = shiftDate(reportDate, -59);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const fetchedSources = await Promise.all(SOURCE_SEEDS.map(fetchSource));
  const successful = fetchedSources.filter((item) => item.ok);

  if (successful.length < 8) {
    throw new Error(`Too few successful sources: ${successful.length}`);
  }

  const sourcePayload = successful
    .map(
      (item) => `- [${item.market} | ${item.kind}] ${item.label}\n  URL: ${item.url}\n  摘要: ${item.excerpt}`,
    )
    .join("\n\n");

  const client = new GoogleGenAI({ apiKey });
  const prompt = buildPrompt({
    weeklyStart,
    weeklyEnd,
    heatmapStart,
    heatmapEnd: reportDate,
    sourcePayload,
  });

  const result = await client.models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          topFindings: { type: Type.ARRAY, items: { type: Type.OBJECT } },
          trendJudgments: { type: Type.ARRAY, items: { type: Type.OBJECT } },
          categoryHeatmapItems: { type: Type.ARRAY, items: { type: Type.OBJECT } },
          usSummaryPoints: { type: Type.ARRAY, items: { type: Type.OBJECT } },
          cnSummaryPoints: { type: Type.ARRAY, items: { type: Type.OBJECT } },
        },
        required: [
          "topFindings",
          "trendJudgments",
          "categoryHeatmapItems",
          "usSummaryPoints",
          "cnSummaryPoints",
        ],
      },
    },
  });

  const raw = JSON.parse(result.text ?? "{}");
  const parsed = reportSchema.parse(raw);
  const categoryHeatmapItems = normalizeHeatmapItems(parsed.categoryHeatmapItems as CategoryHeatmapItem[]);

  const report: ReportData = {
    reportDate,
    topFindings: parsed.topFindings as Finding[],
    trendJudgments: parsed.trendJudgments as TrendJudgment[],
    categoryHeatmapItems,
    usSummaryPoints: parsed.usSummaryPoints as MarketSummaryPoint[],
    cnSummaryPoints: parsed.cnSummaryPoints as MarketSummaryPoint[],
  };

  const archive = updateArchive(reportDate);
  const latestModule = buildLatestModule(reportDate, {
    topFindings: report.topFindings,
    trendJudgments: report.trendJudgments,
    categoryHeatmapItems: report.categoryHeatmapItems,
    usSummaryPoints: report.usSummaryPoints,
    cnSummaryPoints: report.cnSummaryPoints,
  });
  const archiveModule = buildArchiveModule(archive);
  const html = buildReportHtml(report, archive);

  if (dryRun) {
    console.log(
      JSON.stringify(
        {
          reportDate,
          weeklyStart,
          weeklyEnd,
          heatmapStart,
          fetchedSources: successful.length,
          archiveCount: archive.length,
          topFindingCount: report.topFindings.length,
        },
        null,
        2,
      ),
    );
    return;
  }

  atomicWrite(join(process.cwd(), "src/data/reports/latest.ts"), latestModule);
  atomicWrite(join(process.cwd(), "src/data/reports/archive.ts"), archiveModule);
  atomicWrite(join(process.cwd(), `public/reports/weekly-ai-report-${reportDate}.html`), html);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
