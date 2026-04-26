import { CategoryHeatmap } from "@/components/category-heatmap";
import { reportArchive } from "@/data/reports/archive";
import {
  categoryHeatmapItems,
  cnSummaryPoints,
  reportDate,
  topFindings,
  trendJudgments,
  usSummaryPoints,
} from "@/data/reports/latest";
import type {
  Finding,
  FindingImage,
  MarketSummaryPoint,
  ReportLink,
  RichTextBlock,
} from "@/lib/report-types";

const navigation = [
  ["section-1", "本周重点"],
  ["section-2", "AI+各方向最新应用情况"],
  ["section-3", "美国市场"],
  ["section-4", "中国市场"],
  ["section-5", "趋势判断"],
] as const;

function renderInline(block: RichTextBlock, strongClassName = "font-semibold text-slate-950") {
  return block.map((segment, index) =>
    segment.strong ? (
      <strong key={`${segment.text}-${index}`} className={strongClassName}>
        {segment.text}
      </strong>
    ) : (
      <span key={`${segment.text}-${index}`}>{segment.text}</span>
    ),
  );
}

function needsInlineSpace(previous: RichTextBlock, next: RichTextBlock) {
  const previousText = previous.map((segment) => segment.text).join("").trim();
  const nextText = next.map((segment) => segment.text).join("").trim();
  const previousLast = previousText.slice(-1);
  const nextFirst = nextText.charAt(0);
  return /[A-Za-z0-9)]/.test(previousLast) && /[A-Za-z0-9(]/.test(nextFirst);
}

function RichInlineParagraph({
  blocks,
  className,
  strongClassName,
}: {
  blocks: RichTextBlock[];
  className?: string;
  strongClassName?: string;
}) {
  return (
    <p className={className ?? "text-sm leading-7 text-slate-700 sm:text-[15px]"}>
      {blocks.map((block, index) => (
        <span key={index}>
          {index > 0 && needsInlineSpace(blocks[index - 1], block) ? " " : ""}
          {renderInline(block, strongClassName)}
        </span>
      ))}
    </p>
  );
}

function SourceLine({ links }: { links: ReportLink[] }) {
  return (
    <p className="mt-3 text-sm leading-7 text-slate-500">
      <span className="font-semibold text-slate-700">来源：</span>
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? "、" : ""}
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950 hover:decoration-cyan-500"
          >
            {link.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function InsightBlock({ blocks }: { blocks: RichTextBlock[] }) {
  return (
    <div className="rounded-[1.5rem] border border-cyan-200/80 bg-[linear-gradient(135deg,rgba(236,254,255,0.92),rgba(248,250,252,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-10 w-1 rounded-full bg-cyan-500" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">why_it_matters</p>
      </div>
      <ul className="space-y-3">
        {blocks.map((block, index) => (
          <li key={index} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
            <span>{renderInline(block)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FindingImageFigure({ image }: { image: FindingImage }) {
  return (
    <figure className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-50 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="block aspect-[4/3] w-full object-cover"
      />
      <figcaption className="border-t border-slate-200 bg-white/90 px-3 py-2 text-[11px] leading-5 text-slate-500">
        {image.sourceLabel}
      </figcaption>
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function FindingCard({ finding, index }: { finding: Finding; index: number }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-slate-950 px-3 text-xs font-semibold tracking-[0.2em] text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              {finding.type}
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-950">{finding.name}</h3>
        </div>

        <div className="grid gap-3 text-sm text-slate-600 sm:min-w-[220px]">
          <div>
            <span className="font-semibold text-slate-950">market</span>: {finding.market}
          </div>
          <div>
            <span className="font-semibold text-slate-950">date</span>: {finding.date}
          </div>
        </div>
      </div>

      <div
        className={
          finding.image
            ? "grid gap-5 pt-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start xl:grid-cols-[minmax(0,1fr)_240px]"
            : "space-y-5 pt-6"
        }
      >
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">summary</p>
            <RichInlineParagraph blocks={finding.summary} className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]" />
            <SourceLine links={finding.sources} />
          </div>
          <InsightBlock blocks={finding.whyItMatters} />
        </div>
        {finding.image ? (
          <div className="lg:pl-1">
            <FindingImageFigure image={finding.image} />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function SummaryPointCard({ point, index }: { point: MarketSummaryPoint; index: number }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-7">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-slate-950 px-3 text-xs font-semibold tracking-[0.2em] text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">分点总结</p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950">{point.title}</h3>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {point.bullets.map((block, bulletIndex) => (
          <li key={bulletIndex} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
            <span>{renderInline(block)}</span>
          </li>
        ))}
      </ul>

      <SourceLine links={point.sources} />
    </article>
  );
}

export default function Home() {
  const heatmapWindowStart = (() => {
    const date = new Date(`${reportDate}T00:00:00+08:00`);
    date.setDate(date.getDate() - 59);
    return date.toISOString().slice(0, 10);
  })();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f6f1e8_0%,#f8f7f2_28%,#eef4f7_100%)] text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <details className="group mb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-sm font-semibold tracking-[0.18em] text-slate-950 marker:content-none">
            <span className="uppercase">Weekly Archive</span>
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-700 transition group-open:text-slate-500">
              查看过往周报
            </span>
          </summary>
          <div className="mt-3 border-l border-slate-200 pl-4 sm:pl-5">
            <div className="grid gap-3">
              {reportArchive.map((item) => (
                <a
                  key={item.date}
                  href={item.href}
                  className="rounded-[1.1rem] px-3 py-3 transition hover:bg-white/80"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-slate-950">{item.date}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        item.status === "current"
                          ? "border border-cyan-200 bg-cyan-50 text-cyan-700"
                          : "border border-slate-200 bg-white/80 text-slate-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
        </details>

        <section className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_40px_120px_rgba(15,23,42,0.24)] sm:px-8 lg:px-10 lg:py-10">
          <div className="max-w-5xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">{reportDate}</p>
            <h1 className="font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-[6.8rem]">
              Weekly AI
              <br />
              Consumer Trends
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              本网站整理并分析在过去7天内中美市场的AI行业相关应用的最新趋势，信息来源于产品官网，appstore及36氪等行业媒体
            </p>
          </div>
        </section>

        <nav className="sticky top-4 z-20 mt-6 rounded-[1.5rem] border border-slate-200 bg-white/88 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-slate-950"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-8 space-y-8">
          <section id="section-1" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 1"
              title="Section 1：本周重点发现"
              description="保留最重要的 6 个中美 AI C 端信号，影响面较窄的条目下沉到对应市场模块中。"
            />
            <div className="space-y-5">
              {topFindings.map((finding, index) => (
                <FindingCard key={`${finding.name}-${finding.date}`} finding={finding} index={index} />
              ))}
            </div>
          </section>

          <section id="section-2" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 2"
              title="Section 2：AI+各方向最新应用情况"
              description={`仅保留 ${heatmapWindowStart} 至 ${reportDate} 的可验证信号，按方向对比中美近 60 天的代表产品、分发强度与产品机会；桌面端悬停格子可查看详细分析。`}
            />
            <CategoryHeatmap items={categoryHeatmapItems} />
          </section>

          <section id="section-3" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 3"
              title="Section 3：美国市场近1周动态"
              description="以下总结了美国市场近1周的市场动态，方便你快速了解市场上发生了什么。"
            />
            <div className="grid gap-5">
              {usSummaryPoints.map((point, index) => (
                <SummaryPointCard key={point.title} point={point} index={index} />
              ))}
            </div>
          </section>

          <section id="section-4" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 4"
              title="Section 4：中国市场近1周动态"
              description="以下总结了中国市场近1周的市场动态，方便你快速了解市场上发生了什么。"
            />
            <div className="grid gap-5">
              {cnSummaryPoints.map((point, index) => (
                <SummaryPointCard key={point.title} point={point} index={index} />
              ))}
            </div>
          </section>

          <section id="section-5" className="space-y-6 rounded-[2.25rem] border border-slate-200/80 bg-white/60 p-6 backdrop-blur sm:p-8">
            <SectionHeader
              eyebrow="Section 5"
              title="Section 5：跨市场趋势判断"
              description="以下判断都明确区分来源事实与推断，证据来自本期已收录条目与榜单快照。"
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {trendJudgments.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-600 px-3 text-xs font-semibold tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">趋势判断</p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">{item.title}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-950">证据</span>: {renderInline(item.evidence)}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">对比</span>: {renderInline(item.comparison)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
