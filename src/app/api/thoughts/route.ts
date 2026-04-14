import { asc, desc } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { thoughts } from "@/db/schema";
import { requireDevice } from "@/lib/device";
import { createJsonResponse } from "@/lib/utils";

const createSchema = z.object({
  content: z.string().trim().min(1, "请输入内容。").max(500, "单条内容请控制在 500 字内。"),
});

const statusSchema = z.enum(["active", "archived", "trash"]).optional();

export async function GET(request: Request) {
  try {
    const device = await requireDevice();
    const db = getDb();
    const { searchParams } = new URL(request.url);
    const statusResult = statusSchema.safeParse(searchParams.get("status") ?? undefined);
    const filterStatus = statusResult.success ? statusResult.data : undefined;

    const rows = await db.query.thoughts.findMany({
      where: filterStatus
        ? (table, { and, eq: innerEq }) =>
            and(innerEq(table.deviceId, device.id), innerEq(table.status, filterStatus))
        : (table, { eq: innerEq }) => innerEq(table.deviceId, device.id),
      orderBy: [desc(thoughts.createdAt), asc(thoughts.id)],
    });

    return createJsonResponse({
      thoughts: rows.map((item) => ({
        id: item.id,
        content: item.content,
        status: item.status,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
      })),
    });
  } catch (error) {
    return createJsonResponse(
      { error: error instanceof Error ? error.message : "读取记录失败。" },
      { status: 400 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const device = await requireDevice();
    const db = getDb();
    const json = await request.json();
    const input = createSchema.parse(json);

    const [row] = await db
      .insert(thoughts)
      .values({
        deviceId: device.id,
        content: input.content,
      })
      .returning();

    return createJsonResponse({
      thought: {
        id: row.id,
        content: row.content,
        status: row.status,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    return createJsonResponse(
      { error: error instanceof Error ? error.message : "新增记录失败。" },
      { status: 400 },
    );
  }
}
