"use client";

import { useMemo, useState } from "react";

export type CategoryHeatmapSource = {
  label: string;
  href: string;
};

export type CategoryHeatmapItem = {
  id: string;
  category: string;
  market: "美国" | "中国";
  intensity: 0 | 1 | 2 | 3 | 4;
  signalLabel: "暂无" | "弱" | "中" | "强" | "极强";
  products: string[];
  pattern: string;
  opportunity: string;
  watchNext: string;
  sources: CategoryHeatmapSource[];
};

const markets = ["美国", "中国"] as const;

const heatStyles: Record<
  CategoryHeatmapItem["intensity"],
  {
    cell: string;
    label: string;
    dot: string;
    panelAccent: string;
    glow: string;
  }
> = {
  0: {
    cell: "border-slate-200 bg-[#f6f6fb] text-slate-700 hover:border-slate-300",
    label: "bg-white/90 text-slate-500 ring-slate-200",
    dot: "bg-slate-300",
    panelAccent: "bg-slate-300",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]",
  },
  1: {
    cell: "border-[#b8d7fb] bg-[#eaf4ff] text-slate-800 hover:border-[#95c2f7]",
    label: "bg-white/92 text-[#2f6ba7] ring-[#cfe3fb]",
    dot: "bg-[#7fb5ee]",
    panelAccent: "bg-[#7fb5ee]",
    glow: "shadow-[0_10px_26px_rgba(75,148,220,0.10),inset_0_1px_0_rgba(255,255,255,0.50)]",
  },
  2: {
    cell: "border-[#79b5f1] bg-[#d6ebff] text-slate-900 hover:border-[#5aa1e7]",
    label: "bg-white/92 text-[#235f9d] ring-[#bddaf8]",
    dot: "bg-[#2e84d5]",
    panelAccent: "bg-[#2e84d5]",
    glow: "shadow-[0_14px_34px_rgba(46,132,213,0.16),inset_0_1px_0_rgba(255,255,255,0.52)]",
  },
  3: {
    cell: "border-[#ebbe59] bg-[#ffe8b3] text-slate-950 hover:border-[#dca53a]",
    label: "bg-white/92 text-[#8b6210] ring-[#f2ddb1]",
    dot: "bg-[#d2941e]",
    panelAccent: "bg-[#d2941e]",
    glow: "shadow-[0_16px_38px_rgba(210,148,30,0.18),inset_0_1px_0_rgba(255,255,255,0.50)]",
  },
  4: {
    cell: "border-[#cf858d] bg-[#efc1c7] text-slate-950 hover:border-[#bd6d77]",
    label: "bg-white/92 text-[#9a555c] ring-[#e8c3c7]",
    dot: "bg-[#b85762]",
    panelAccent: "bg-[#b85762]",
    glow: "shadow-[0_18px_42px_rgba(184,87,98,0.22),inset_0_1px_0_rgba(255,255,255,0.45)]",
  },
};

const legendItems = [
  { label: "暂无", intensity: 0 },
  { label: "弱", intensity: 1 },
  { label: "中", intensity: 2 },
  { label: "强", intensity: 3 },
  { label: "极强", intensity: 4 },
] as const;

function productPreview(products: string[]) {
  if (products.length === 0) {
    return [];
  }

  return products.slice(0, 2);
}

function patternPreview(pattern: string) {
  return pattern.length > 48 ? `${pattern.slice(0, 48)}...` : pattern;
}

function strongestCategories(items: CategoryHeatmapItem[], market: CategoryHeatmapItem["market"]) {
  return [...items]
    .filter((item) => item.market === market && item.intensity > 0)
    .sort((a, b) => b.intensity - a.intensity || a.category.localeCompare(b.category))
    .slice(0, 2)
    .map((item) => item.category);
}

export function CategoryHeatmap({ items }: { items: CategoryHeatmapItem[] }) {
  const categories = useMemo(() => Array.from(new Set(items.map((item) => item.category))), [items]);
  const defaultItem = useMemo(
    () => [...items].sort((a, b) => b.intensity - a.intensity || a.category.localeCompare(b.category))[0],
    [items],
  );
  const [selectedId, setSelectedId] = useState(defaultItem?.id ?? items[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const selected = items.find((item) => item.id === selectedId) ?? defaultItem ?? items[0];
  const usStrongest = useMemo(() => strongestCategories(items, "美国"), [items]);
  const cnStrongest = useMemo(() => strongestCategories(items, "中国"), [items]);
  const watchCategories = useMemo(
    () =>
      categories.filter((category) =>
        items.filter((item) => item.category === category).every((item) => item.intensity <= 1),
      ),
    [categories, items],
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        <article className="rounded-[1.4rem] border border-[#c9ddf7] bg-[linear-gradient(135deg,#fbfdff,rgba(231,243,255,0.96))] p-4 shadow-[0_12px_34px_rgba(15,23,42,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#306ba7]">美国更强</p>
          <p className="mt-3 text-base font-semibold leading-7 text-slate-900">{usStrongest.join(" / ") || "暂无明确主导方向"}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">近 60 天的强信号主要集中在助手、效率与工作台类入口。</p>
        </article>
        <article className="rounded-[1.4rem] border border-[#f0d493] bg-[linear-gradient(135deg,#fffdf7,rgba(255,242,214,0.96))] p-4 shadow-[0_12px_34px_rgba(15,23,42,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6210]">中国更强</p>
          <p className="mt-3 text-base font-semibold leading-7 text-slate-900">{cnStrongest.join(" / ") || "暂无明确主导方向"}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">近 60 天更清晰的是超级入口、视频创作和生活决策类能力整合。</p>
        </article>
        <article className="rounded-[1.4rem] border border-[#e2c0c4] bg-[linear-gradient(135deg,#fffdfd,rgba(247,228,231,0.96))] p-4 shadow-[0_12px_34px_rgba(15,23,42,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a555c]">空白观察</p>
          <p className="mt-3 text-base font-semibold leading-7 text-slate-900">
            {watchCategories.slice(0, 2).join(" / ") || "暂无明显低信号方向"}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">这些方向没有强行延用旧案例，等下一个可验证发布窗口再抬高权重。</p>
        </article>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">信号强度</span>
        {legendItems.map((item) => {
          const style = heatStyles[item.intensity];

          return (
            <span
              key={item.label}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${style.cell}`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
              {item.label}
            </span>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] xl:items-start">
        <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-5">
          <div className="hidden grid-cols-[180px_repeat(2,minmax(0,1fr))] gap-3 px-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 lg:grid">
            <span>方向</span>
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>

          <div className="space-y-4">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="grid gap-3 lg:grid-cols-[180px_repeat(2,minmax(0,1fr))] lg:items-stretch">
                <div className="rounded-[1.25rem] border border-slate-200 bg-[#f5f6fb] px-4 py-4 text-slate-800 h-[11.25rem]">
                  <div className="flex h-full flex-col">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-6">{category}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:contents">
                  {markets.map((market) => {
                    const item = items.find((candidate) => candidate.category === category && candidate.market === market);

                    if (!item) {
                      return null;
                    }

                    const style = heatStyles[item.intensity];
                    const isSelected = selected?.id === item.id;
                    const isHovered = hoveredId === item.id;
                    const previewProducts = productPreview(item.products);
                    const alignClass = market === "中国" ? "right-0 origin-top-right" : "left-0 origin-top-left";
                    const isUpperPanel = categoryIndex >= categories.length - 2;
                    const verticalClass = isUpperPanel ? "bottom-full mb-4" : "top-full mt-4";
                    const panelShiftClass = market === "中国" ? "md:translate-x-1" : "md:-translate-x-1";
                    const markerClass = isUpperPanel ? "bottom-[-7px]" : "top-[-7px]";

                    return (
                      <div key={item.id} className="relative">
                        <button
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelectedId(item.id)}
                          onMouseEnter={() => setHoveredId(item.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          onFocus={() => setHoveredId(item.id)}
                          onBlur={() => setHoveredId(null)}
                          className={`h-[11.25rem] w-full overflow-hidden rounded-[1.25rem] border p-4 text-left transition focus:outline-none focus:ring-4 focus:ring-[#d9def8] ${style.cell} ${
                            isSelected
                              ? "shadow-[0_0_0_3px_rgba(46,132,213,0.18),0_20px_48px_rgba(15,23,42,0.14)]"
                              : isHovered
                                ? style.glow
                                : `${style.glow} hover:-translate-y-0.5 hover:brightness-[1.02]`
                          }`}
                        >
                          <div className="flex h-full flex-col">
                            <span className="flex items-center justify-between gap-3">
                              <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">{market}</span>
                              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${style.label}`}>
                                {item.signalLabel}
                              </span>
                            </span>
                            <span className="mt-5 flex min-h-[3.25rem] flex-wrap content-start gap-2 overflow-hidden">
                              {previewProducts.length > 0 ? (
                                previewProducts.map((product) => (
                                  <span
                                    key={product}
                                    className="rounded-full border border-white/60 bg-white/72 px-2.5 py-1 text-xs font-semibold text-slate-700"
                                  >
                                    {product}
                                  </span>
                                ))
                              ) : (
                                <span className="rounded-full border border-white/60 bg-white/72 px-2.5 py-1 text-xs font-semibold text-slate-500">
                                  暂无代表产品
                                </span>
                              )}
                            </span>
                            <span className="mt-auto block overflow-hidden text-sm leading-6 opacity-75 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                              {patternPreview(item.pattern)}
                            </span>
                          </div>
                        </button>

                        {isHovered ? (
                          <div
                            className={`pointer-events-none absolute z-30 hidden w-[min(24rem,calc(100vw-2.5rem))] rounded-[1.35rem] border border-[#dfe5f7] bg-white/98 p-5 text-left shadow-[0_24px_70px_rgba(27,39,94,0.16)] backdrop-blur transition-transform md:block ${alignClass} ${verticalClass} ${panelShiftClass}`}
                          >
                            <span
                              className={`absolute left-8 h-3.5 w-3.5 rotate-45 border border-[#dfe5f7] bg-white ${markerClass} ${market === "中国" ? "left-auto right-8" : ""}`}
                            />
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <span className={`h-9 w-1.5 rounded-full ${style.panelAccent}`} />
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a67a8]">{item.market}</p>
                                  <p className="mt-1 text-sm font-bold text-slate-950">{item.category}</p>
                                </div>
                              </div>
                              <p className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${style.label}`}>{item.signalLabel}</p>
                            </div>

                            <div className="mt-4 border-t border-slate-100 pt-4">
                              <div className="flex flex-wrap gap-2">
                                {item.products.length > 0 ? (
                                  item.products.map((product) => (
                                    <span
                                      key={product}
                                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                                    >
                                      {product}
                                    </span>
                                  ))
                                ) : (
                                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                                    暂无代表产品
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">产品形态</p>
                                <p className="mt-2">{item.pattern}</p>
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">产品机会</p>
                                <p className="mt-2">{item.opportunity}</p>
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">继续观察</p>
                                <p className="mt-2">{item.watchNext}</p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selected ? (
          <aside className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,248,255,0.95))] p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] xl:sticky xl:top-28">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {selected.market}
              </span>
              <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${heatStyles[selected.intensity].label}`}>
                {selected.signalLabel}
              </span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-950">{selected.category}</h3>

            <div className={`mt-2 h-1.5 w-16 rounded-full ${heatStyles[selected.intensity].panelAccent}`} />

            <div className="mt-5 flex flex-wrap gap-2">
              {selected.products.length > 0 ? (
                selected.products.map((product) => (
                  <span key={product} className="rounded-full border border-slate-200 bg-white/88 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {product}
                  </span>
                ))
              ) : (
                <span className="rounded-full border border-slate-200 bg-white/88 px-3 py-1.5 text-xs font-semibold text-slate-500">
                  本周暂无代表产品
                </span>
              )}
            </div>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
              <div className="rounded-[1.25rem] border border-white/70 bg-white/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">产品形态</p>
                <p className="mt-2">{selected.pattern}</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/70 bg-white/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">产品机会</p>
                <p className="mt-2">{selected.opportunity}</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/70 bg-white/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">继续观察</p>
                <p className="mt-2">{selected.watchNext}</p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">来源</p>
              {selected.sources.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.sources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-slate-950"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-7 text-slate-500">本周暂无足够可验证事件，未附来源。</p>
              )}
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
