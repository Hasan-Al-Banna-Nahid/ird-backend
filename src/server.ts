import { createApp } from "./app";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("⚠️ Uncaught Exception:", error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection at:", promise, "reason:", reason);
});

// Start the server
(async () => {
  try {
    console.log("⏳ Starting server initialization...");
    const app = await createApp();

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server successfully started on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
    });

    // Handle graceful shutdown
    process.on("SIGTERM", () => {
      console.log("🛑 SIGTERM received - shutting down gracefully");
      server.close(() => {
        console.log("🔴 Server terminated");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
