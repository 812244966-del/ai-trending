import { cookies, headers } from "next/headers";
import { and, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { devices } from "@/db/schema";

export const DEVICE_COOKIE_NAME = "spark_device_token";

type BootstrapInput = {
  deviceToken?: string;
  timezone?: string;
  locale?: string;
};

export async function bootstrapDevice(input: BootstrapInput) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const db = getDb();
  const token = input.deviceToken?.trim() || cookieStore.get(DEVICE_COOKIE_NAME)?.value;

  if (!token) {
    throw new Error("缺少设备标识。");
  }

  const existing = await db.query.devices.findFirst({
    where: eq(devices.deviceToken, token),
  });

  const payload = {
    deviceToken: token,
    userAgent: headerStore.get("user-agent"),
    timezone: input.timezone ?? null,
    locale: input.locale ?? null,
    lastSeenAt: new Date(),
  };

  let device;

  if (existing) {
    const [updated] = await db
      .update(devices)
      .set(payload)
      .where(and(eq(devices.id, existing.id), eq(devices.deviceToken, token)))
      .returning();

    device = updated;
  } else {
    const [created] = await db
      .insert(devices)
      .values(payload)
      .returning();

    device = created;
  }

  cookieStore.set(DEVICE_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return device;
}

export async function requireDevice() {
  const cookieStore = await cookies();
  const token = cookieStore.get(DEVICE_COOKIE_NAME)?.value;

  if (!token) {
    throw new Error("当前设备尚未初始化。");
  }

  const db = getDb();
  const device = await db.query.devices.findFirst({
    where: eq(devices.deviceToken, token),
  });

  if (!device) {
    throw new Error("设备不存在，请重新初始化。");
  }

  return device;
}
