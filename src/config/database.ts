import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function initializeDatabase() {
  try {
    const db = await open({
      filename: path.join(__dirname, "../../dua_main.sqlite"),
      driver: sqlite3.Database,
    });

    await db.get("SELECT 1");
    console.log("✅ Database connected successfully");
    return db;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}
