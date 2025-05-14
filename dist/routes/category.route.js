"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const router = (0, express_1.Router)();
router.get("/", category_controller_1.CategoryController.getCategories);
router.get("/:id", category_controller_1.CategoryController.getCategoryById);
exports.default = router;
