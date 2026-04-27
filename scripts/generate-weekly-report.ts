import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { GoogleGenAI, Type } from "@google/genai";
import { z } from "zod";
import type { CategoryHeatmapItem } from "../src/components/category-heatmap";
import { reportArchive as currentArchive } from "../src/data/reports/archive";
import { buildReportHtml } from "../src/lib/report-html";
import type {
  Finding,
  FindingImage,
  MarketSummaryPoint,
  ReportArchiveItem,
  ReportData,
  ReportLink,
  RichTextBlock,
  TrendJudgment,
} from "../src/lib/report-types";

type SourceSeed = {
  label: string;
  url: string;
  market: "美国" | "中国" | "跨市场";
  kind: "official" | "media" | "app-store" | "ranking";
};

type DirectFindingImageHint = {
  sourceHref?: string;
  nameIncludes?: string[];
  image: FindingImage;
};

type AppStoreFallbackHint = {
  label: string;
  href: string;
  nameIncludes: string[];
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

const DIRECT_FINDING_IMAGE_HINTS: DirectFindingImageHint[] = [
  {
    sourceHref: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
    nameIncludes: ["Meta", "Muse Spark"],
    image: {
      url: "https://about.fb.com/wp-content/uploads/2026/04/01_Subagent-1.gif?resize=960%2C836",
      alt: "Meta AI 在官方新闻稿中的产品演示图",
      type: "official newsroom",
      sourceLabel: "Meta 官方新闻稿",
      sourceHref: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
      note: "官方新闻稿里的 Meta AI 产品演示图，用来对应 Muse Spark 带动的消费端入口更新。",
    },
  },
];

const APP_STORE_FALLBACK_HINTS: AppStoreFallbackHint[] = [
  {
    label: "ChatGPT App Store",
    href: "https://apps.apple.com/us/app/chatgpt/id6448311069",
    nameIncludes: ["ChatGPT", "GPT-5.5", "GPT-5.3", "ChatGPT Images"],
  },
  {
    label: "Gemini App Store",
    href: "https://apps.apple.com/us/app/google-gemini/id6477489729",
    nameIncludes: ["Gemini"],
  },
  {
    label: "Claude App Store",
    href: "https://apps.apple.com/us/app/claude-by-anthropic/id6473753684",
    nameIncludes: ["Claude"],
  },
  {
    label: "Replika App Store",
    href: "https://apps.apple.com/us/app/replika/id1158555867",
    nameIncludes: ["Replika"],
  },
  {
    label: "豆包 App Store",
    href: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E9%9A%8F%E6%97%B6%E5%B8%AE%E5%BF%99%E7%9A%84-ai-%E5%8A%A9%E6%89%8B/id6459478672",
    nameIncludes: ["豆包"],
  },
  {
    label: "即梦AI App Store",
    href: "https://apps.apple.com/cn/app/%E5%8D%B3%E6%A2%A6ai-%E6%8A%96%E9%9F%B3%E6%97%97%E4%B8%8Bai%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%B7%A5%E5%85%B7/id6503676563",
    nameIncludes: ["即梦AI", "即梦"],
  },
  {
    label: "腾讯元宝 App Store",
    href: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D-%E6%8E%A5%E5%85%A5deepseek-r1%E6%9C%80%E6%96%B0%E6%A8%A1%E5%9E%8B/id6480446430",
    nameIncludes: ["腾讯元宝", "元宝"],
  },
  {
    label: "点点 App Store",
    href: "https://apps.apple.com/us/app/%E7%82%B9%E7%82%B9-%E4%BD%A0%E7%9A%84ai%E7%94%9F%E6%B4%BB%E5%B0%8F%E5%8A%A9%E6%89%8B/id6529536122",
    nameIncludes: ["点点"],
  },
  {
    label: "星野 App Store",
    href: "https://apps.apple.com/cn/app/%E6%98%9F%E9%87%8E-%E6%89%80%E5%BB%BA%E7%9A%86%E4%BD%A0%E6%89%80ai/id6463076337",
    nameIncludes: ["星野"],
  },
  {
    label: "千问智学 App Store",
    href: "https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE%E6%99%BA%E5%AD%A6/id6749571440",
    nameIncludes: ["千问智学", "千问"],
  },
  {
    label: "Rokid AI App Store",
    href: "https://apps.apple.com/cn/app/rokid-ai-%E4%B9%90%E5%A5%87ai%E7%9C%BC%E9%95%9C/id6738470564",
    nameIncludes: ["Rokid AI", "Rokid"],
  },
  {
    label: "Hi Rokid App Store",
    href: "https://apps.apple.com/us/app/hi-rokid/id6749669942",
    nameIncludes: ["Hi Rokid"],
  },
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

const modelReportSchema = z.object({
  topFindings: z.array(findingSchema).min(3).max(6),
  trendJudgments: z.array(trendSchema).max(5).default([]),
  categoryHeatmapItems: z.array(heatmapItemSchema).min(1),
  usSummaryPoints: z.array(marketSummarySchema).max(5).default([]),
  cnSummaryPoints: z.array(marketSummarySchema).max(5).default([]),
});

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    topFindings: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          market: { type: Type.STRING },
          date: { type: Type.STRING },
          type: { type: Type.STRING },
          summary: {
            type: Type.ARRAY,
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  strong: { type: Type.BOOLEAN },
                },
                required: ["text"],
              },
            },
          },
          whyItMatters: {
            type: Type.ARRAY,
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  strong: { type: Type.BOOLEAN },
                },
                required: ["text"],
              },
            },
          },
          sources: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                href: { type: Type.STRING },
              },
              required: ["label", "href"],
            },
          },
        },
        required: ["name", "market", "date", "type", "summary", "whyItMatters", "sources"],
      },
    },
    trendJudgments: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          evidence: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING },
                strong: { type: Type.BOOLEAN },
              },
              required: ["text"],
            },
          },
          comparison: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING },
                strong: { type: Type.BOOLEAN },
              },
              required: ["text"],
            },
          },
        },
        required: ["title", "evidence", "comparison"],
      },
    },
    categoryHeatmapItems: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          category: { type: Type.STRING },
          market: { type: Type.STRING },
          intensity: { type: Type.NUMBER },
          signalLabel: { type: Type.STRING },
          products: { type: Type.ARRAY, items: { type: Type.STRING } },
          pattern: { type: Type.STRING },
          opportunity: { type: Type.STRING },
          watchNext: { type: Type.STRING },
          sources: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                href: { type: Type.STRING },
              },
              required: ["label", "href"],
            },
          },
        },
        required: [
          "id",
          "category",
          "market",
          "intensity",
          "signalLabel",
          "products",
          "pattern",
          "opportunity",
          "watchNext",
          "sources",
        ],
      },
    },
    usSummaryPoints: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          bullets: {
            type: Type.ARRAY,
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  strong: { type: Type.BOOLEAN },
                },
                required: ["text"],
              },
            },
          },
          sources: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                href: { type: Type.STRING },
              },
              required: ["label", "href"],
            },
          },
        },
        required: ["title", "bullets", "sources"],
      },
    },
    cnSummaryPoints: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          bullets: {
            type: Type.ARRAY,
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  strong: { type: Type.BOOLEAN },
                },
                required: ["text"],
              },
            },
          },
          sources: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                href: { type: Type.STRING },
              },
              required: ["label", "href"],
            },
          },
        },
        required: ["title", "bullets", "sources"],
      },
    },
  },
  required: [
    "topFindings",
    "trendJudgments",
    "categoryHeatmapItems",
    "usSummaryPoints",
    "cnSummaryPoints",
  ],
} as const;

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
10.1 topFindings[].summary 必须写成 2-4 个 block，优先分别覆盖：发生了什么 / 功能或分发细节 / 上线范围或用户对象。
10.2 topFindings[].whyItMatters 必须写成 2-4 个 block，优先分别覆盖：用户价值 / 更大的产品趋势或中美对比 / 接下来该观察什么。
10.3 不要把 summary 和 whyItMatters 压缩成单句；信息要尽量完整，保持接近研究周报原始分析的细节密度。
11. 严格使用以下英文键名，不要使用中文键名，也不要改写字段名：
   - topFindings[].name / market / date / type / summary / whyItMatters / sources
   - trendJudgments[].title / evidence / comparison
   - categoryHeatmapItems[].id / category / market / intensity / signalLabel / products / pattern / opportunity / watchNext / sources
   - usSummaryPoints[].title / bullets / sources
   - cnSummaryPoints[].title / bullets / sources
12. topFindings[].market 和 categoryHeatmapItems[].market 只能填写“美国”或“中国”。
13. topFindings[].type 只能填写 "new app"、"feature launch"、"notable update"、"social signal" 四种之一。
14. categoryHeatmapItems[].signalLabel 只能填写 “暂无 / 弱 / 中 / 强 / 极强”。
15. 只返回 JSON，不要附带解释文字、Markdown、代码块标记。

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

function buildArchiveJson(archive: ReportArchiveItem[]) {
  return serialize(archive);
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
  const archivedPrevious = deduped.map((item) => ({
    ...item,
    status: "archive" as const,
    note: undefined,
  }));

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

function extractAppStoreId(url: string) {
  const match = url.match(/id(\d+)/);
  return match ? match[1] : undefined;
}

function extractAppStoreCountry(url: string) {
  try {
    const parsed = new URL(url);
    const [, country] = parsed.pathname.split("/");
    return /^[a-z]{2}$/i.test(country ?? "") ? country : undefined;
  } catch {
    return undefined;
  }
}

const appStoreImageCache = new Map<string, Promise<FindingImage | undefined>>();

async function fetchAppStoreImage({
  href,
  label,
}: {
  href: string;
  label: string;
}): Promise<FindingImage | undefined> {
  const cacheKey = `${label}:${href}`;
  const cached = appStoreImageCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const pending = (async () => {
    const appId = extractAppStoreId(href);
    if (!appId) {
      return undefined;
    }

    const lookupUrl = new URL("https://itunes.apple.com/lookup");
    lookupUrl.searchParams.set("id", appId);

    const country = extractAppStoreCountry(href);
    if (country) {
      lookupUrl.searchParams.set("country", country);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);

    try {
      const response = await fetch(lookupUrl, {
        headers: {
          accept: "application/json",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        return undefined;
      }

      const payload = (await response.json()) as {
        results?: Array<{
          trackName?: string;
          screenshotUrls?: string[];
          ipadScreenshotUrls?: string[];
          artworkUrl512?: string;
          artworkUrl100?: string;
        }>;
      };

      const result = payload.results?.[0];
      if (!result) {
        return undefined;
      }

      const imageUrl =
        result.screenshotUrls?.[0] ??
        result.ipadScreenshotUrls?.[0] ??
        result.artworkUrl512 ??
        result.artworkUrl100;

      if (!imageUrl) {
        return undefined;
      }

      const productName = result.trackName ?? label.replace(/ App Store$/u, "");

      return {
        url: imageUrl,
        alt: `${productName} App Store 预览图`,
        type: "app store preview",
        sourceLabel: label,
        sourceHref: href,
        note: `使用 ${productName} 的 App Store 官方预览图，帮助读者快速识别产品形态。`,
      } satisfies FindingImage;
    } catch {
      return undefined;
    } finally {
      clearTimeout(timeout);
    }
  })();

  appStoreImageCache.set(cacheKey, pending);
  return pending;
}

function matchDirectFindingImage(finding: Finding) {
  return DIRECT_FINDING_IMAGE_HINTS.find((hint) => {
    const nameMatch =
      hint.nameIncludes?.some((keyword) =>
        finding.name.toLowerCase().includes(keyword.toLowerCase()),
      ) ?? false;
    const sourceMatch =
      hint.sourceHref !== undefined &&
      finding.sources.some((source) => source.href === hint.sourceHref);

    return nameMatch || sourceMatch;
  })?.image;
}

function matchAppStoreFallback(finding: Finding) {
  const fromSources = finding.sources.find((source) => /apps\.apple\.com\/.+\/app\//.test(source.href));
  if (fromSources) {
    return {
      label: fromSources.label,
      href: fromSources.href,
    };
  }

  const fallback = APP_STORE_FALLBACK_HINTS.find((hint) =>
    hint.nameIncludes.some((keyword) => finding.name.toLowerCase().includes(keyword.toLowerCase())),
  );

  if (!fallback) {
    return undefined;
  }

  return {
    label: fallback.label,
    href: fallback.href,
  };
}

async function enrichTopFindingsWithImages(findings: Finding[]) {
  return Promise.all(
    findings.map(async (finding) => {
      const directImage = matchDirectFindingImage(finding);
      if (directImage) {
        return {
          ...finding,
          image: directImage,
        } satisfies Finding;
      }

      const appStoreSource = matchAppStoreFallback(finding);
      if (!appStoreSource) {
        return finding;
      }

      const image = await fetchAppStoreImage(appStoreSource);
      if (!image) {
        return finding;
      }

      return {
        ...finding,
        image,
      } satisfies Finding;
    }),
  );
}

function textBlock(text: string, strong = false): RichTextBlock {
  return [{ text, strong }];
}

function plainTextFromBlock(block: RichTextBlock) {
  return block.map((segment) => segment.text).join("").trim();
}

function splitIntoNarrativeBlocks(blocks: RichTextBlock[]) {
  const merged = blocks
    .map(plainTextFromBlock)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (!merged) {
    return blocks;
  }

  const sentences = merged
    .split(/(?<=[。！？!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length <= 1) {
    return blocks;
  }

  return sentences.slice(0, 4).map((sentence) => textBlock(sentence));
}

function normalizeFindingNarrativeBlocks(findings: Finding[]) {
  return findings.map((finding) => ({
    ...finding,
    summary: finding.summary.length >= 2 ? finding.summary.slice(0, 4) : splitIntoNarrativeBlocks(finding.summary),
    whyItMatters:
      finding.whyItMatters.length >= 2
        ? finding.whyItMatters.slice(0, 4)
        : splitIntoNarrativeBlocks(finding.whyItMatters),
  }));
}

function dedupeLinks(links: ReportLink[]) {
  const seen = new Set<string>();
  const result: ReportLink[] = [];

  for (const link of links) {
    if (seen.has(link.href)) {
      continue;
    }

    seen.add(link.href);
    result.push(link);
  }

  return result;
}

function strongestHeatmap(items: CategoryHeatmapItem[], market: "美国" | "中国") {
  return [...items]
    .filter((item) => item.market === market)
    .sort((a, b) => b.intensity - a.intensity || a.category.localeCompare(b.category))
    .slice(0, 2);
}

function buildFallbackSummaryPoints({
  market,
  findings,
  heatmapItems,
}: {
  market: "美国" | "中国";
  findings: Finding[];
  heatmapItems: CategoryHeatmapItem[];
}) {
  const marketFindings = findings.filter((finding) => finding.market === market);
  const pointsFromFindings = marketFindings.map((finding) => ({
    title: finding.name,
    bullets: [...finding.summary.slice(0, 2), ...(finding.summary.length >= 2 ? [] : finding.whyItMatters.slice(0, 1))].slice(0, 2),
    sources: finding.sources,
  })) satisfies MarketSummaryPoint[];

  const pointsFromHeatmap = strongestHeatmap(heatmapItems, market).map((item) => ({
    title: `${item.category}：${market}方向信号`,
    bullets: [textBlock(item.pattern), textBlock(item.opportunity)],
    sources: item.sources.length > 0 ? item.sources : dedupeLinks(marketFindings.flatMap((finding) => finding.sources)).slice(0, 2),
  })) satisfies MarketSummaryPoint[];

  return [...pointsFromFindings, ...pointsFromHeatmap];
}

function ensureMarketSummaryPoints({
  existing,
  market,
  findings,
  heatmapItems,
}: {
  existing: MarketSummaryPoint[];
  market: "美国" | "中国";
  findings: Finding[];
  heatmapItems: CategoryHeatmapItem[];
}) {
  const result = [...existing];
  const seenTitles = new Set(result.map((item) => item.title));
  const fallbackItems = buildFallbackSummaryPoints({ market, findings, heatmapItems });

  for (const item of fallbackItems) {
    if (result.length >= 5) {
      break;
    }

    if (seenTitles.has(item.title)) {
      continue;
    }

    if (item.sources.length === 0) {
      continue;
    }

    seenTitles.add(item.title);
    result.push(item);
  }

  return result.slice(0, 5);
}

function buildFallbackTrendJudgments({
  findings,
  heatmapItems,
}: {
  findings: Finding[];
  heatmapItems: CategoryHeatmapItem[];
}) {
  const usFindings = findings.filter((finding) => finding.market === "美国").slice(0, 2);
  const cnFindings = findings.filter((finding) => finding.market === "中国").slice(0, 2);
  const [usStrongest] = strongestHeatmap(heatmapItems, "美国");
  const [cnStrongest] = strongestHeatmap(heatmapItems, "中国");

  return [
    {
      title: "中美都在继续把 AI 产品入口前移",
      evidence: textBlock(
        `本期美国的 ${usFindings.map((finding) => finding.name).join("、") || "头部助手更新"}，以及中国的 ${cnFindings.map((finding) => finding.name).join("、") || "头部入口迭代"}，都说明消费者能直接感知的 AI 入口还在继续前推。`,
      ),
      comparison: textBlock("这是基于本期已验证发布与分发信号的归纳，不直接外推为长期格局。"),
    },
    {
      title: "美国更偏向模型能力和工作流深度升级",
      evidence: textBlock(
        usStrongest?.pattern ??
          "美国本期最强信号仍集中在助手与生产力能力升级，重点是让模型更稳定地接住复杂任务。",
      ),
      comparison: textBlock(
        cnStrongest?.pattern ??
          "相比之下，中国更常把多个高频任务继续压进现有入口，而不是只强调单个模型升级。",
      ),
    },
    {
      title: "中国更偏向入口整合和高频场景覆盖",
      evidence: textBlock(
        cnStrongest?.pattern ??
          "中国本期更清楚的信号，是头部产品继续把创作、学习、生活决策等能力压进主入口。",
      ),
      comparison: textBlock(
        usStrongest?.watchNext ??
          "和美国相比，中国更强调多场景覆盖；美国则更强调单次升级带来的产品能力跃迁。",
      ),
    },
  ] satisfies TrendJudgment[];
}

function ensureTrendJudgments({
  existing,
  findings,
  heatmapItems,
}: {
  existing: TrendJudgment[];
  findings: Finding[];
  heatmapItems: CategoryHeatmapItem[];
}) {
  const result = [...existing];
  const seenTitles = new Set(result.map((item) => item.title));

  for (const item of buildFallbackTrendJudgments({ findings, heatmapItems })) {
    if (result.length >= 5) {
      break;
    }

    if (seenTitles.has(item.title)) {
      continue;
    }

    seenTitles.add(item.title);
    result.push(item);
  }

  return result.slice(0, 5);
}

function parseReportText(text: string) {
  const raw = JSON.parse(text || "{}");
  return modelReportSchema.safeParse(raw);
}

async function generateStructuredReport({
  client,
  model,
  prompt,
}: {
  client: GoogleGenAI;
  model: string;
  prompt: string;
}) {
  const config = {
    responseMimeType: "application/json" as const,
    responseSchema,
  };

  async function generateContentWithRetry(contents: string) {
    let lastError: unknown;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        return await client.models.generateContent({
          model,
          contents,
          config,
        });
      } catch (error) {
        lastError = error;
        const message = error instanceof Error ? error.message : String(error);
        const isRetriable =
          /503/.test(message) || /UNAVAILABLE/.test(message) || /high demand/i.test(message);

        if (!isRetriable || attempt === 2) {
          throw error;
        }

        const delayMs = 3000 * (attempt + 1);
        console.warn(`Model request failed (${message}). Retrying in ${delayMs}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }

    throw lastError instanceof Error ? lastError : new Error(String(lastError));
  }

  const initial = await generateContentWithRetry(prompt);

  const initialText = initial.text ?? "{}";
  const initialParsed = parseReportText(initialText);

  if (initialParsed.success) {
    return initialParsed.data;
  }

  console.error("Initial model response failed schema validation. Retrying with repair prompt...");

  const repairPrompt = `${prompt}

上一版返回的 JSON 没有通过结构校验。请不要重新发挥，只基于上一版已有内容修复结构，并严格遵守指定键名。

错误摘要：
${JSON.stringify(initialParsed.error.issues.slice(0, 20), null, 2)}

上一版 JSON：
${initialText}
`;

  const repaired = await generateContentWithRetry(repairPrompt);

  const repairedText = repaired.text ?? "{}";
  const repairedParsed = parseReportText(repairedText);

  if (repairedParsed.success) {
    return repairedParsed.data;
  }

  console.error("Final invalid JSON excerpt:");
  console.error(repairedText.slice(0, 4000));
  console.error(JSON.stringify(repairedParsed.error.issues.slice(0, 40), null, 2));
  throw new Error("Generated report JSON did not match schema after repair retry.");
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
  const parsed = await generateStructuredReport({
    client,
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    prompt,
  });
  const topFindings = normalizeFindingNarrativeBlocks(
    await enrichTopFindingsWithImages(parsed.topFindings as Finding[]),
  );
  const categoryHeatmapItems = normalizeHeatmapItems(parsed.categoryHeatmapItems as CategoryHeatmapItem[]);
  const trendJudgments = ensureTrendJudgments({
    existing: parsed.trendJudgments as TrendJudgment[],
    findings: topFindings,
    heatmapItems: categoryHeatmapItems,
  });
  const usSummaryPoints = ensureMarketSummaryPoints({
    existing: parsed.usSummaryPoints as MarketSummaryPoint[],
    market: "美国",
    findings: topFindings,
    heatmapItems: categoryHeatmapItems,
  });
  const cnSummaryPoints = ensureMarketSummaryPoints({
    existing: parsed.cnSummaryPoints as MarketSummaryPoint[],
    market: "中国",
    findings: topFindings,
    heatmapItems: categoryHeatmapItems,
  });

  const findingsWithImages = topFindings.filter((finding) => finding.image).length;
  const minimumImageCount = Math.min(3, topFindings.length);
  if (findingsWithImages < minimumImageCount) {
    throw new Error(
      `Generated report only has ${findingsWithImages} finding images after enrichment; expected at least ${minimumImageCount}.`,
    );
  }

  const report: ReportData = {
    reportDate,
    topFindings,
    trendJudgments,
    categoryHeatmapItems,
    usSummaryPoints,
    cnSummaryPoints,
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
  const archiveJson = buildArchiveJson(archive);
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
  atomicWrite(join(process.cwd(), "public/reports/archive.json"), archiveJson);
  atomicWrite(join(process.cwd(), `public/reports/weekly-ai-report-${reportDate}.html`), html);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
