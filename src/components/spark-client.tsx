"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import {
  Archive,
  CalendarDays,
  Check,
  Hash,
  Menu,
  RotateCcw,
  Sparkles,
  Trash2,
  WandSparkles,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import type { DailyPlayback, Device, Thought, ThoughtStatus } from "@/lib/types";

type View = "input" | "sort" | "playback" | "archive" | "trash";

const DEVICE_KEY = "spark_device_token";

function createDeviceToken() {
  return globalThis.crypto?.randomUUID?.() ?? `device-${Math.random().toString(36).slice(2)}`;
}

async function requestJson<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    credentials: "include",
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.error ?? "请求失败。");
  }

  return json as T;
}

function formatCardDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
    .format(new Date(value))
    .replace(",", "");
}

function formatMonthLabel(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
  }).format(new Date(value));
}

function formatWeekday(value: string) {
  return new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(new Date(value));
}

function getTodayKey(timezone: string) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(new Date());
}

function groupThoughtsByMonth(thoughts: Thought[]) {
  return thoughts.reduce<Record<string, Thought[]>>((acc, thought) => {
    const key = formatMonthLabel(thought.createdAt);
    acc[key] ??= [];
    acc[key].push(thought);
    return acc;
  }, {});
}

function ThoughtCard({
  thought,
  compact = false,
  onArchive,
  onDelete,
}: {
  thought: Thought;
  compact?: boolean;
  onArchive?: (id: string) => void;
  onDelete?: (id: string) => void;
}) {
  return (
    <article
      className={cn(
        "scrapbook-card paper-grid relative overflow-hidden rounded-[28px]",
        compact ? "p-5" : "p-8",
      )}
    >
      <div className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full bg-[var(--petal)]/40" />
      <div className="absolute bottom-3 right-3 h-2.5 w-2.5 rounded-full bg-[var(--sprout)]/40" />
      <div className="mb-5 border-b border-[var(--line)] pb-4 text-center">
        <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[var(--sprout)]/14 px-4 py-1 text-[var(--sprout-deep)]">
          <Sparkles className="h-3.5 w-3.5" />
          <Sparkles className="h-3.5 w-3.5" />
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <div className="font-serif text-sm text-[var(--earth)]">{formatCardDate(thought.createdAt)}</div>
        <div className="font-serif text-xs italic text-[var(--earth-soft)]">
          {formatWeekday(thought.createdAt)}
        </div>
      </div>
      <p className={cn("font-display leading-relaxed text-[var(--ink)]", compact ? "text-xl" : "text-3xl")}>
        {thought.content}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4 text-[11px] uppercase tracking-[0.32em] text-[var(--earth-soft)]">
        <span>灵感</span>
        <div className="flex items-center gap-4">
          {onArchive ? (
            <button onClick={() => onArchive(thought.id)} className="transition hover:text-[var(--sprout-deep)]">
              <Archive className="h-4 w-4" />
            </button>
          ) : null}
          {onDelete ? (
            <button onClick={() => onDelete(thought.id)} className="transition hover:text-[var(--petal-deep)]">
              <Trash2 className="h-4 w-4" />
            </button>
          ) : null}
        </div>
        <span>类型</span>
      </div>
    </article>
  );
}

function Composer({ onSave }: { onSave: (value: string) => Promise<void> }) {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  function handleSubmit() {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    startTransition(async () => {
      await onSave(trimmed);
      setValue("");
    });
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <div className="paper-panel relative overflow-hidden rounded-[36px] border border-white/80 p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,152,155,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(148,166,132,0.12),transparent_34%)]" />
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                event.preventDefault();
                handleSubmit();
              }
            }}
            placeholder="随意输入你的想法，代办……"
            className="min-h-[280px] w-full resize-none rounded-[28px] border border-[var(--line)] bg-[color:rgba(255,250,240,0.92)] px-7 py-8 pr-32 text-2xl leading-relaxed text-[var(--ink)] outline-none transition placeholder:text-[var(--earth-soft)] focus:border-[var(--sprout)] focus:bg-white"
          />
          <Image
            src="/cat_input.svg"
            alt=""
            width={160}
            height={160}
            className={cn(
              "pointer-events-none absolute bottom-5 right-4 h-32 w-32 select-none object-contain transition duration-500 sm:h-40 sm:w-40",
              value.trim() ? "scale-95 opacity-15" : "opacity-75",
            )}
          />
          <AnimatePresence>
            {value.trim() ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                onClick={handleSubmit}
                disabled={isPending}
                className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sprout)] text-white shadow-[0_16px_30px_rgba(111,129,97,0.34)] transition hover:bg-[var(--sprout-deep)] disabled:opacity-60"
              >
                <Check className="h-6 w-6" />
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-4 text-center font-serif text-sm italic text-[var(--earth-soft)]">
        “在思绪飘走前抓住它……”
      </p>
    </section>
  );
}

function SortDeck({
  thoughts,
  onAction,
  onComplete,
}: {
  thoughts: Thought[];
  onAction: (id: string, status: ThoughtStatus) => Promise<void>;
  onComplete: () => void;
}) {
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const visibleThoughts = thoughts.filter((thought) => !dismissedIds.includes(thought.id));
  const active = visibleThoughts[0];
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-18, 18]);
  const leftOpacity = useTransform(x, [-160, -60], [1, 0]);
  const rightOpacity = useTransform(x, [60, 160], [0, 1]);

  async function applyAction(status: ThoughtStatus) {
    if (!active) {
      return;
    }

    setDismissedIds((current) => [...current, active.id]);
    await onAction(active.id, status);

    if (visibleThoughts.length <= 1) {
      window.setTimeout(onComplete, 260);
    }
  }

  if (!active) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center text-[var(--earth-soft)]">
        <WandSparkles className="mb-4 h-12 w-12 opacity-30" />
        <p className="font-serif text-xl italic">思绪已整理完毕。</p>
        <button
          onClick={onComplete}
          className="mt-8 rounded-full bg-[var(--sprout)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--sprout-deep)]"
        >
          返回首页
        </button>
      </div>
    );
  }

  return (
    <section className="mx-auto flex h-[620px] w-full max-w-md items-center justify-center px-4">
      <div className="relative h-[500px] w-full">
        {visibleThoughts.slice(1, 4).map((thought, index) => {
          const offset = index + 1;
          return (
            <div
              key={thought.id}
              className="absolute inset-0"
              style={{
                transform: `translateY(${offset * 16}px) translateX(${offset % 2 === 0 ? 14 : -14}px) rotate(${offset % 2 === 0 ? 4 : -4}deg) scale(${1 - offset * 0.05})`,
                opacity: 0.55 / offset,
              }}
            >
              <ThoughtCard thought={thought} compact />
            </div>
          );
        })}

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -110) {
              void applyAction("trash");
            }

            if (info.offset.x > 110) {
              void applyAction("archived");
            }
          }}
          style={{ x, rotate }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <ThoughtCard thought={active} />
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 -left-8 -right-8 flex items-center justify-between">
          <motion.div style={{ opacity: leftOpacity }} className="flex flex-col items-center gap-2">
            <div className="rounded-full border border-[var(--petal)]/30 bg-white/90 p-4 text-[var(--petal-deep)] shadow-lg">
              <Trash2 className="h-7 w-7" />
            </div>
            <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--petal-deep)] shadow-sm">
              放进垃圾桶
            </span>
          </motion.div>
          <motion.div style={{ opacity: rightOpacity }} className="flex flex-col items-center gap-2">
            <div className="rounded-full border border-[var(--sprout)]/30 bg-white/90 p-4 text-[var(--sprout-deep)] shadow-lg">
              <Archive className="h-7 w-7" />
            </div>
            <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--sprout-deep)] shadow-sm">
              收进收集箱
            </span>
          </motion.div>
        </div>

        <div className="absolute -bottom-24 left-0 right-0 flex items-center justify-center gap-10">
          <button
            onClick={() => void applyAction("trash")}
            className="rounded-full border border-[var(--line)] bg-white p-4 text-[var(--petal-deep)] shadow-lg transition hover:scale-105"
          >
            <Trash2 className="h-6 w-6" />
          </button>
          <button
            onClick={() => void applyAction("archived")}
            className="rounded-full border border-[var(--line)] bg-white p-4 text-[var(--sprout-deep)] shadow-lg transition hover:scale-105"
          >
            <Archive className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute -top-16 left-0 right-0 text-center">
          <span className="rounded-full bg-white/70 px-4 py-1 font-serif text-sm italic text-[var(--earth-soft)]">
            还有 {visibleThoughts.length} 条思绪待整理
          </span>
        </div>
      </div>
    </section>
  );
}

function ThoughtsGrid({
  thoughts,
  emptyText,
  onDelete,
}: {
  thoughts: Thought[];
  emptyText: string;
  onDelete?: (id: string) => void;
}) {
  const grouped = groupThoughtsByMonth(thoughts);
  const entries = Object.entries(grouped);

  if (entries.length === 0) {
    return <div className="py-20 text-center font-serif text-xl italic text-[var(--earth-soft)]">{emptyText}</div>;
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4">
      {entries.map(([month, items]) => (
        <section key={month} className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-3xl text-[var(--earth)]">{month}</h2>
            <div className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-serif text-sm italic text-[var(--earth-soft)]">{items.length} 条思绪</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {items.map((thought) => (
              <ThoughtCard key={thought.id} thought={thought} compact onDelete={onDelete} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function PlaybackView({
  playback,
  loading,
}: {
  playback: DailyPlayback | null;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="py-20 text-center text-[var(--earth-soft)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-lg"
        >
          <Sparkles className="h-8 w-8 text-[var(--sprout-deep)]" />
        </motion.div>
        <p className="font-serif text-xl italic">正在汇集你零散的思绪……</p>
      </div>
    );
  }

  if (!playback) {
    return <div className="py-20 text-center font-serif text-xl italic text-[var(--earth-soft)]">今天还没有回顾内容。</div>;
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <div className="scrapbook-card rounded-[34px] p-8 sm:p-10">
        <div className="mb-8 flex flex-col gap-4 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-[22px] bg-[var(--sprout)]/14 p-3 text-[var(--sprout-deep)]">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-[var(--earth)]">思绪回放</h2>
              <p className="font-serif text-sm italic text-[var(--earth-soft)]">你的每日反思</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-serif text-[var(--earth-soft)]">
            <CalendarDays className="h-4 w-4" />
            <span>{playback.playbackDate}</span>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--earth-soft)]">今日摘要</h3>
            <p className="font-display text-3xl leading-relaxed text-[var(--ink)]">{playback.summary}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--earth-soft)]">高频主题</h3>
            <div className="flex flex-wrap gap-3">
              {playback.themes.map((theme) => (
                <span
                  key={theme}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--earth)] shadow-sm"
                >
                  <Hash className="h-3.5 w-3.5 text-[var(--sprout-deep)]" />
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SparkClient() {
  const [device, setDevice] = useState<Device | null>(null);
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [playback, setPlayback] = useState<DailyPlayback | null>(null);
  const [view, setView] = useState<View>("input");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [booting, setBooting] = useState(true);
  const [loadingPlayback, setLoadingPlayback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeThoughts = useMemo(
    () => thoughts.filter((thought) => thought.status === "active"),
    [thoughts],
  );
  const archivedThoughts = useMemo(
    () => thoughts.filter((thought) => thought.status === "archived"),
    [thoughts],
  );
  const trashThoughts = useMemo(
    () => thoughts.filter((thought) => thought.status === "trash"),
    [thoughts],
  );

  async function bootstrap() {
    setBooting(true);
    setError(null);

    try {
      let deviceToken = window.localStorage.getItem(DEVICE_KEY);

      if (!deviceToken) {
        deviceToken = createDeviceToken();
        window.localStorage.setItem(DEVICE_KEY, deviceToken);
      }

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const locale = navigator.language;

      const deviceResponse = await requestJson<{ device: Device }>("/api/devices/bootstrap", {
        method: "POST",
        body: JSON.stringify({ deviceToken, timezone, locale }),
      });

      window.localStorage.setItem(DEVICE_KEY, deviceResponse.device.deviceToken);
      setDevice(deviceResponse.device);

      const thoughtsResponse = await requestJson<{ thoughts: Thought[] }>("/api/thoughts");
      setThoughts(thoughtsResponse.thoughts);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "初始化失败。");
    } finally {
      setBooting(false);
    }
  }

  useEffect(() => {
    void bootstrap();
  }, []);

  async function saveThought(content: string) {
    const response = await requestJson<{ thought: Thought }>("/api/thoughts", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
    setThoughts((current) => [response.thought, ...current]);
  }

  async function updateThought(id: string, status: ThoughtStatus) {
    const response = await requestJson<{ thought: Thought }>(`/api/thoughts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    setThoughts((current) => current.map((item) => (item.id === id ? response.thought : item)));
  }

  async function deleteThought(id: string) {
    await requestJson<{ success: boolean }>(`/api/thoughts/${id}`, {
      method: "DELETE",
    });
    setThoughts((current) => current.filter((item) => item.id !== id));
  }

  async function loadPlayback() {
    if (!device) {
      return;
    }

    setView("playback");
    setLoadingPlayback(true);
    setError(null);

    try {
      const response = await requestJson<{ playback: DailyPlayback }>("/api/playback", {
        method: "POST",
        body: JSON.stringify({
          date: getTodayKey(device.timezone ?? "UTC"),
          timezone: device.timezone ?? "UTC",
        }),
      });
      setPlayback(response.playback);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "加载回顾失败。");
    } finally {
      setLoadingPlayback(false);
    }
  }

  const navItems: Array<{
    key: View;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
  }> = [
    { key: "input", label: "灵感", icon: <WandSparkles className="h-5 w-5" /> },
    {
      key: "playback",
      label: "今日回顾",
      icon: <Sparkles className="h-5 w-5" />,
      onClick: () => {
        void loadPlayback();
      },
    },
    { key: "archive", label: "收集箱", icon: <Archive className="h-5 w-5" /> },
    { key: "trash", label: "垃圾桶", icon: <Trash2 className="h-5 w-5" /> },
  ];

  if (booting) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="paper-panel max-w-md rounded-[32px] px-8 py-10 text-center">
          <Sparkles className="mx-auto mb-4 h-10 w-10 text-[var(--sprout-deep)]" />
          <p className="font-display text-3xl text-[var(--earth)]">正在为这台设备准备 Spark…</p>
          <p className="mt-3 font-serif text-lg italic text-[var(--earth-soft)]">
            你的记录空间会按设备独立保存。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {sidebarOpen ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-[rgba(63,53,47,0.28)] backdrop-blur-sm"
          />
        ) : null}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 24, stiffness: 220 }}
        className="paper-panel fixed left-0 top-0 z-50 flex h-full w-72 flex-col rounded-r-[30px] p-7"
      >
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-2xl bg-[var(--sprout)] p-2.5 text-white shadow-md">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-3xl text-[var(--earth)]">Spark</h1>
            <p className="font-serif text-sm italic text-[var(--earth-soft)]">滋养你闪烁的灵感</p>
          </div>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else {
                  setView(item.key);
                }
                setSidebarOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition",
                view === item.key
                  ? "bg-[var(--earth)] text-white shadow-md"
                  : "text-[var(--earth)] hover:bg-[rgba(125,90,80,0.08)]",
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-[24px] border border-[var(--line)] bg-white/70 p-4 text-sm text-[var(--earth-soft)]">
          <p className="font-serif italic">当前设备</p>
          <p className="mt-2 break-all font-mono text-xs">{device?.deviceToken}</p>
        </div>
      </motion.aside>

      <header className="relative z-20 flex items-center justify-between px-4 py-5 sm:px-6">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-2xl border border-[var(--line)] bg-white/80 p-3 text-[var(--earth)] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-3">
          {view !== "input" && view !== "sort" ? (
            <button
              onClick={() => setView("input")}
              className="font-serif text-sm italic text-[var(--earth-soft)] transition hover:text-[var(--earth)]"
            >
              返回灵感
            </button>
          ) : null}
          {view !== "sort" ? (
            <button
              onClick={() => setView("sort")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2.5 text-sm font-medium text-[var(--earth)] shadow-sm backdrop-blur-sm transition hover:bg-white"
            >
              <Archive className="h-4 w-4" />
              整理
              {activeThoughts.length ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--petal)] text-[10px] text-white">
                  {activeThoughts.length}
                </span>
              ) : null}
            </button>
          ) : (
            <button
              onClick={() => setView("input")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2.5 text-sm text-[var(--earth)] shadow-sm backdrop-blur-sm transition hover:bg-white"
            >
              <RotateCcw className="h-4 w-4" />
              返回
            </button>
          )}
        </div>
      </header>

      <main className="pb-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <section className="px-4 text-center sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="section-label text-lg">轻轻记下，一点一点整理</p>
              <h2 className="mt-2 font-display text-5xl text-[var(--earth)] sm:text-6xl">
                让每一个一闪而过的念头，
                <span className="text-[var(--sprout-deep)]"> 都有地方落下。</span>
              </h2>
            </div>
          </section>

          {error ? (
            <div className="mx-auto w-full max-w-3xl px-4">
              <div className="rounded-[24px] border border-[var(--petal)]/40 bg-white/70 px-5 py-4 text-sm text-[var(--earth)]">
                {error}
              </div>
            </div>
          ) : null}

          <AnimatePresence mode="wait">
            {view === "input" ? (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                className="space-y-12"
              >
                <Composer onSave={saveThought} />
                <section className="mx-auto w-full max-w-6xl px-4">
                  <div className="mb-6 flex items-center gap-4">
                    <h3 className="section-label text-2xl">正在停靠的灵感</h3>
                    <div className="h-px flex-1 bg-[var(--line)]" />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {activeThoughts.slice(0, 6).map((thought) => (
                      <ThoughtCard
                        key={thought.id}
                        thought={thought}
                        compact
                        onArchive={(id) => void updateThought(id, "archived")}
                        onDelete={(id) => void updateThought(id, "trash")}
                      />
                    ))}
                  </div>
                </section>
              </motion.div>
            ) : null}

            {view === "sort" ? (
              <motion.div key="sort" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SortDeck
                  thoughts={activeThoughts}
                  onAction={updateThought}
                  onComplete={() => setView("archive")}
                />
              </motion.div>
            ) : null}

            {view === "playback" ? (
              <motion.div key="playback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <PlaybackView playback={playback} loading={loadingPlayback} />
              </motion.div>
            ) : null}

            {view === "archive" ? (
              <motion.div key="archive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ThoughtsGrid thoughts={archivedThoughts} emptyText="你的收集箱是空的。" onDelete={(id) => void updateThought(id, "trash")} />
              </motion.div>
            ) : null}

            {view === "trash" ? (
              <motion.div key="trash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-10">
                <ThoughtsGrid thoughts={trashThoughts} emptyText="垃圾桶还是空的。" onDelete={(id) => void deleteThought(id)} />
                {trashThoughts.length ? (
                  <div className="text-center">
                    <button
                      onClick={() => {
                        trashThoughts.forEach((thought) => {
                          void deleteThought(thought.id);
                        });
                      }}
                      className="font-serif text-lg italic text-[var(--petal-deep)] transition hover:underline"
                    >
                      清空垃圾桶
                    </button>
                  </div>
                ) : null}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
