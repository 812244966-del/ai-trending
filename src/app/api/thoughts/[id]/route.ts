import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { thoughts } from "@/db/schema";
import { requireDevice } from "@/lib/device";
import { createJsonResponse } from "@/lib/utils";

const paramsSchema = z.object({
  id: z.string().uuid("记录 ID 无效。"),
});

const patchSchema = z.object({
  status: z.enum(["active", "archived", "trash"]).optional(),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const device = await requireDevice();
    const db = getDb();
    const { id } = paramsSchema.parse(await params);
    const json = await request.json();
    const input = patchSchema.parse(json);

    const [updated] = await db
      .update(thoughts)
      .set({
        ...input,
        updatedAt: new Date(),
      })
      .where(and(eq(thoughts.id, id), eq(thoughts.deviceId, device.id)))
      .returning();

    if (!updated) {
      return createJsonResponse({ error: "记录不存在。" }, { status: 404 });
    }

    return createJsonResponse({
      thought: {
        id: updated.id,
        content: updated.content,
        status: updated.status,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    return createJsonResponse(
      { error: error instanceof Error ? error.message : "更新记录失败。" },
      { status: 400 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const device = await requireDevice();
    const db = getDb();
    const { id } = paramsSchema.parse(await params);

    const [deleted] = await db
      .delete(thoughts)
      .where(and(eq(thoughts.id, id), eq(thoughts.deviceId, device.id)))
      .returning({ id: thoughts.id });

    if (!deleted) {
      return createJsonResponse({ error: "记录不存在。" }, { status: 404 });
    }

    return createJsonResponse({ success: true });
  } catch (error) {
    return createJsonResponse(
      { error: error instanceof Error ? error.message : "删除记录失败。" },
      { status: 400 },
    );
  }
}
