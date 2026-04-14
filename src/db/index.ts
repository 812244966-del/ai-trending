import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

declare global {
  var __sparkSqlite__: Database.Database | undefined;
}

function getDatabasePath() {
  const configuredPath = process.env.SQLITE_DB_PATH;

  if (configuredPath) {
    return resolve(process.cwd(), configuredPath);
  }

  return join(process.cwd(), "data", "spark.db");
}

function ensureSchema(client: Database.Database) {
  client.pragma("journal_mode = WAL");
  client.pragma("foreign_keys = ON");
  client.exec(`
    CREATE TABLE IF NOT EXISTS devices (
      id TEXT PRIMARY KEY NOT NULL,
      device_token TEXT NOT NULL UNIQUE,
      user_agent TEXT,
      timezone TEXT,
      locale TEXT,
      created_at INTEGER NOT NULL,
      last_seen_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS thoughts (
      id TEXT PRIMARY KEY NOT NULL,
      device_id TEXT NOT NULL,
      content TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS daily_playbacks (
      id TEXT PRIMARY KEY NOT NULL,
      device_id TEXT NOT NULL,
      playback_date TEXT NOT NULL,
      summary TEXT NOT NULL,
      themes TEXT NOT NULL DEFAULT '[]',
      source_thought_ids TEXT NOT NULL DEFAULT '[]',
      created_at INTEGER NOT NULL,
      FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS thoughts_device_idx ON thoughts(device_id);
    CREATE INDEX IF NOT EXISTS thoughts_device_status_idx ON thoughts(device_id, status);
    CREATE INDEX IF NOT EXISTS daily_playbacks_device_date_idx ON daily_playbacks(device_id, playback_date);
  `);
}

export function getDb() {
  const dbPath = getDatabasePath();

  if (!globalThis.__sparkSqlite__) {
    mkdirSync(dirname(dbPath), { recursive: true });
    globalThis.__sparkSqlite__ = new Database(dbPath);
    ensureSchema(globalThis.__sparkSqlite__);
  }

  return drizzle(globalThis.__sparkSqlite__, { schema });
}
