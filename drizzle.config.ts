import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.SQLITE_DB_PATH ?? "./data/spark.db",
  },
  strict: true,
} satisfies Config;
