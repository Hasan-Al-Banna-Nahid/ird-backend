"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subCategory_controller_1 = require("../controllers/subCategory.controller");
const router = (0, express_1.Router)();
router.get("/", subCategory_controller_1.SubCategoryController.getSubCategories);
router.get("/category/:cat_id", subCategory_controller_1.SubCategoryController.getSubCategoriesByCategory);
router.get("/:id", subCategory_controller_1.SubCategoryController.getSubCategoryById);
exports.default = router;
