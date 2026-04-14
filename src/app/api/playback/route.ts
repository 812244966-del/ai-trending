import { and, desc, eq, gte, lt } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { dailyPlaybacks, thoughts } from "@/db/schema";
import { requireDevice } from "@/lib/device";
import { generatePlayback } from "@/lib/playback";
import { createJsonResponse } from "@/lib/utils";

const schema = z.object({
  date: z.string().trim().min(1),
  timezone: z.string().trim().min(1),
});

function getUtcDayRange(dateKey: string, timezone: string) {
  const dtf = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const target = new Date(`${dateKey}T12:00:00.000Z`);
  const parts = dtf.formatToParts(target);
  const partMap = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const localMidnightIso = `${partMap.year}-${partMap.month}-${partMap.day}T00:00:00`;
  const localMidnight = new Date(localMidnightIso);
  const nextMidnight = new Date(localMidnight.getTime() + 24 * 60 * 60 * 1000);

  return { start: localMidnight, end: nextMidnight };
}

export async function POST(request: Request) {
  try {
    const device = await requireDevice();
    const db = getDb();
    const json = await request.json();
    const input = schema.parse(json);
    const { start, end } = getUtcDayRange(input.date, input.timezone);

    const dayThoughts = await db.query.thoughts.findMany({
      where: and(
        eq(thoughts.deviceId, device.id),
        gte(thoughts.createdAt, start),
        lt(thoughts.createdAt, end),
      ),
      orderBy: [desc(thoughts.createdAt)],
    });

    const sourceThoughtIds = dayThoughts.map((item) => item.id).sort();

    const cached = await db.query.dailyPlaybacks.findFirst({
      where: and(
        eq(dailyPlaybacks.deviceId, device.id),
        eq(dailyPlaybacks.playbackDate, input.date),
      ),
      orderBy: [desc(dailyPlaybacks.createdAt)],
    });

    if (
      cached &&
      JSON.stringify(cached.sourceThoughtIds.slice().sort()) === JSON.stringify(sourceThoughtIds)
    ) {
      return createJsonResponse({
        playback: {
          id: cached.id,
          playbackDate: cached.playbackDate,
          summary: cached.summary,
          themes: cached.themes,
          sourceThoughtIds: cached.sourceThoughtIds,
          createdAt: cached.createdAt.toISOString(),
        },
      });
    }

    const playback = await generatePlayback({
      thoughts: dayThoughts.map((item) => ({ content: item.content })),
      dateLabel: input.date,
    });

    const [created] = await db
      .insert(dailyPlaybacks)
      .values({
        deviceId: device.id,
        playbackDate: input.date,
        summary: playback.summary,
        themes: playback.themes,
        sourceThoughtIds,
      })
      .returning();

    return createJsonResponse({
      playback: {
        id: created.id,
        playbackDate: created.playbackDate,
        summary: created.summary,
        themes: created.themes,
        sourceThoughtIds: created.sourceThoughtIds,
        createdAt: created.createdAt.toISOString(),
      },
    });
  } catch (error) {
    return createJsonResponse(
      { error: error instanceof Error ? error.message : "生成回顾失败。" },
      { status: 400 },
    );
  }
}
