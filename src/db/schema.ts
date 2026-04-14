import { randomUUID } from "node:crypto";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const devices = sqliteTable(
  "devices",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => randomUUID()),
    deviceToken: text("device_token").notNull(),
    userAgent: text("user_agent"),
    timezone: text("timezone"),
    locale: text("locale"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .$defaultFn(() => new Date())
      .notNull(),
    lastSeenAt: integer("last_seen_at", { mode: "timestamp_ms" })
      .$defaultFn(() => new Date())
      .notNull(),
  },
  (table) => ({
    deviceTokenIdx: uniqueIndex("devices_device_token_idx").on(table.deviceToken),
  }),
);

export const thoughts = sqliteTable(
  "thoughts",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => randomUUID()),
    deviceId: text("device_id")
      .notNull()
      .references(() => devices.id, { onDelete: "cascade" }),
    content: text("content").notNull(),
    status: text("status", { enum: ["active", "archived", "trash"] })
      .default("active")
      .notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .$defaultFn(() => new Date())
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$defaultFn(() => new Date())
      .notNull(),
  },
  (table) => ({
    deviceIdx: index("thoughts_device_idx").on(table.deviceId),
    deviceStatusIdx: index("thoughts_device_status_idx").on(table.deviceId, table.status),
  }),
);

export const dailyPlaybacks = sqliteTable(
  "daily_playbacks",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => randomUUID()),
    deviceId: text("device_id")
      .notNull()
      .references(() => devices.id, { onDelete: "cascade" }),
    playbackDate: text("playback_date").notNull(),
    summary: text("summary").notNull(),
    themes: text("themes", { mode: "json" }).$type<string[]>().notNull().default([]),
    sourceThoughtIds: text("source_thought_ids", { mode: "json" })
      .$type<string[]>()
      .notNull()
      .default([]),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .$defaultFn(() => new Date())
      .notNull(),
  },
  (table) => ({
    deviceDateIdx: index("daily_playbacks_device_date_idx").on(
      table.deviceId,
      table.playbackDate,
    ),
  }),
);
