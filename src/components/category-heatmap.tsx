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
  }
> = {
  0: {
    cell: "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300",
    label: "bg-white text-slate-500 ring-slate-200",
    dot: "bg-slate-300",
  },
  1: {
    cell: "border-sky-200 bg-sky-50 text-slate-800 hover:border-sky-400",
    label: "bg-white text-sky-700 ring-sky-200",
    dot: "bg-sky-400",
  },
  2: {
    cell: "border-teal-200 bg-teal-100 text-slate-900 hover:border-teal-500",
    label: "bg-white text-teal-700 ring-teal-200",
    dot: "bg-teal-500",
  },
  3: {
    cell: "border-amber-300 bg-amber-200 text-slate-950 hover:border-amber-500",
    label: "bg-white/90 text-amber-800 ring-amber-300",
    dot: "bg-amber-500",
  },
  4: {
    cell: "border-rose-300 bg-rose-500 text-white hover:border-rose-600",
    label: "bg-white/95 text-rose-700 ring-rose-200",
    dot: "bg-rose-100",
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
    return "暂无代表产品";
  }

  return products.slice(0, 2).join(" / ");
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

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">热度图例</span>
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
            <span>Category</span>
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>

          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category} className="grid gap-3 lg:grid-cols-[180px_repeat(2,minmax(0,1fr))] lg:items-stretch">
                <div className="flex items-center rounded-[1.25rem] border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-semibold text-white lg:min-h-[8.5rem]">
                  {category}
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
                          className={`min-h-[8.5rem] w-full rounded-[1.25rem] border p-4 text-left transition focus:outline-none focus:ring-4 focus:ring-cyan-200 ${style.cell} ${
                            isSelected
                              ? "shadow-[0_0_0_3px_rgba(8,145,178,0.28),0_18px_45px_rgba(15,23,42,0.16)]"
                              : "shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
                          }`}
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">{market}</span>
                            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${style.label}`}>
                              {item.signalLabel}
                            </span>
                          </span>
                          <span className="mt-6 block text-base font-bold leading-6">{productPreview(item.products)}</span>
                          <span className="mt-3 line-clamp-2 block text-sm leading-6 opacity-80">{item.pattern}</span>
                        </button>

                        {isHovered ? (
                          <div className="pointer-events-none absolute left-1/2 top-0 z-30 hidden w-72 -translate-x-1/2 -translate-y-[calc(100%+0.75rem)] rounded-[1rem] border border-slate-200 bg-white p-4 text-left shadow-[0_20px_70px_rgba(15,23,42,0.18)] md:block">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">{item.market}</p>
                              <p className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-semibold text-white">{item.signalLabel}</p>
                            </div>
                            <p className="mt-2 text-sm font-bold text-slate-950">{item.category}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{productPreview(item.products)}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-700">{item.pattern}</p>
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
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] xl:sticky xl:top-28">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {selected.market}
              </span>
              <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${heatStyles[selected.intensity].label}`}>
                {selected.signalLabel}
              </span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-950">{selected.category}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {selected.products.length > 0 ? (
                selected.products.map((product) => (
                  <span key={product} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {product}
                  </span>
                ))
              ) : (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                  本周暂无代表产品
                </span>
              )}
            </div>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
              <p>
                <span className="font-semibold text-slate-950">产品形态</span>: {selected.pattern}
              </p>
              <p>
                <span className="font-semibold text-slate-950">产品机会</span>: {selected.opportunity}
              </p>
              <p>
                <span className="font-semibold text-slate-950">继续观察</span>: {selected.watchNext}
              </p>
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
