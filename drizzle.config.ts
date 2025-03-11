import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  // driver: "pg",
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123123',
    database: 'postgres',
    ssl: false, // can be boolean | "require" | "allow" | "prefer" | "verify-full" | options from node:tls
  },
  out: "./drizzle",
  // verbose: true,
  // strict: true,
});