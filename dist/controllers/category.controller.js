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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../services/category.service");
const apiResponse_1 = require("../utils/apiResponse");
// Initialize service outside the class
const categoryService = new category_service_1.CategoryService();
class CategoryController {
    static getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoryService.getAllCategories();
                (0, apiResponse_1.sendSuccessResponse)(res, categories);
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching categories", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
    static getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield categoryService.getCategoryById(parseInt(req.params.id));
                if (category) {
                    (0, apiResponse_1.sendSuccessResponse)(res, category);
                }
                else {
                    (0, apiResponse_1.sendErrorResponse)(res, 404, "Category not found");
                }
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching category", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
}
exports.CategoryController = CategoryController;
