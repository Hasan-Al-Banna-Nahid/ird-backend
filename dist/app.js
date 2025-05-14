"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const category_model_1 = require("./models/category.model");
const subCategory_model_1 = require("./models/subCategory.model");
const dua_model_1 = require("./models/dua.model");
const category_route_1 = __importDefault(require("./routes/category.route"));
const subCategory_route_1 = __importDefault(require("./routes/subCategory.route"));
const dua_route_1 = __importDefault(require("./routes/dua.route"));
function createApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        // Database initialization with logging
        console.log("⏳ Initializing database connection...");
        try {
            yield (0, database_1.initializeDatabase)();
            yield Promise.all([
                (0, category_model_1.createCategoryTable)(),
                (0, subCategory_model_1.createSubCategoryTable)(),
                (0, dua_model_1.createDuaTable)(),
            ]);
            console.log("✅ Database connection established and tables verified");
        }
        catch (error) {
            console.error("❌ Database initialization failed:", error);
            process.exit(1);
        }
        // Middleware
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        // Routes
        app.use("/api/categories", category_route_1.default);
        app.use("/api/sub-categories", subCategory_route_1.default);
        app.use("/api/duas", dua_route_1.default);
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
    });
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
