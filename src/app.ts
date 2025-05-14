import express from "express";
import cors from "cors";
import { initializeDatabase } from "./config/database";
import { createCategoryTable } from "./models/category.model";
import { createSubCategoryTable } from "./models/subCategory.model";
import { createDuaTable } from "./models/dua.model";
import categoryRoutes from "./routes/category.route";
import subCategoryRoutes from "./routes/subCategory.route";
import duaRoutes from "./routes/dua.route";

export async function createApp() {
  const app = express();

  // Database initialization with logging
  console.log("⏳ Initializing database connection...");
  try {
    await initializeDatabase();
    await Promise.all([
      createCategoryTable(),
      createSubCategoryTable(),
      createDuaTable(),
    ]);
    console.log("✅ Database connection established and tables verified");
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    process.exit(1);
  }

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.get("/", (req, res) => {
    res.send("Welcome");
  });
  app.use("/api/categories", categoryRoutes);
  app.use("/api/sub-categories", subCategoryRoutes);
  app.use("/api/duas", duaRoutes);

  // Health check endpoint
  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "OK",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  });

  // 404 Handler
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: "Endpoint not found",
    });
  });

  return app;
}

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  createApp()
    .then((app) => {
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Failed to start application:", error);
      process.exit(1);
    });
}
