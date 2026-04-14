import { z } from "zod";
import { bootstrapDevice } from "@/lib/device";
import { createJsonResponse } from "@/lib/utils";

const schema = z.object({
  deviceToken: z.string().trim().optional(),
  timezone: z.string().trim().optional(),
  locale: z.string().trim().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const input = schema.parse(json);
    const device = await bootstrapDevice(input);

    return createJsonResponse({
      device: {
        id: device.id,
        deviceToken: device.deviceToken,
        timezone: device.timezone,
        locale: device.locale,
        createdAt: device.createdAt.toISOString(),
        lastSeenAt: device.lastSeenAt.toISOString(),
      },
    });
  } catch (error) {
    return createJsonResponse(
      {
        error: error instanceof Error ? error.message : "设备初始化失败。",
      },
      { status: 400 },
    );
  }
}
