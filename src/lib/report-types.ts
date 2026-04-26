import type { CategoryHeatmapItem } from "../components/category-heatmap";

export type ReportLink = {
  label: string;
  href: string;
};

export type RichSegment = {
  text: string;
  strong?: boolean;
};

export type RichTextBlock = RichSegment[];

export type FindingImage = {
  url: string;
  alt: string;
  type: "official newsroom" | "app store preview";
  sourceLabel: string;
  sourceHref?: string;
  note: string;
};

export type Finding = {
  name: string;
  market: "美国" | "中国";
  date: string;
  type: "new app" | "feature launch" | "notable update" | "social signal";
  summary: RichTextBlock[];
  whyItMatters: RichTextBlock[];
  sources: ReportLink[];
  image?: FindingImage;
};

export type TrendJudgment = {
  title: string;
  evidence: RichTextBlock;
  comparison: RichTextBlock;
};

export type MarketSummaryPoint = {
  title: string;
  bullets: RichTextBlock[];
  sources: ReportLink[];
};

export type ReportArchiveItem = {
  date: string;
  title: string;
  href: string;
  status: "current" | "archive";
  note: string;
};

export type ReportData = {
  reportDate: string;
  topFindings: Finding[];
  trendJudgments: TrendJudgment[];
  categoryHeatmapItems: CategoryHeatmapItem[];
  usSummaryPoints: MarketSummaryPoint[];
  cnSummaryPoints: MarketSummaryPoint[];
};

export function t(text: string, strong = false): RichSegment {
  return { text, strong };
}
