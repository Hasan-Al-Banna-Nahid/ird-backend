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
exports.SubCategoryController = void 0;
const subCategory_service_1 = require("../services/subCategory.service");
const apiResponse_1 = require("../utils/apiResponse");
// Initialize service instance outside the class
const subCategoryService = new subCategory_service_1.SubCategoryService();
class SubCategoryController {
    static getSubCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subCategories = yield subCategoryService.getAllSubCategories();
                (0, apiResponse_1.sendSuccessResponse)(res, subCategories, "Sub-categories fetched successfully");
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching sub-categories", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
    static getSubCategoriesByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catId = parseInt(req.params.cat_id);
                const subCategories = yield subCategoryService.getSubCategoriesByCategory(catId);
                if (subCategories.length === 0) {
                    (0, apiResponse_1.sendNotFoundResponse)(res, "No sub-categories found for this category");
                }
                else {
                    (0, apiResponse_1.sendSuccessResponse)(res, subCategories, "Sub-categories fetched successfully");
                }
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching sub-categories by category", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
    static getSubCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subcatId = parseInt(req.params.id);
                const subCategory = yield subCategoryService.getSubCategoryById(subcatId);
                if (subCategory) {
                    (0, apiResponse_1.sendSuccessResponse)(res, subCategory, "Sub-category fetched successfully");
                }
                else {
                    (0, apiResponse_1.sendNotFoundResponse)(res, "Sub-category not found");
                }
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching sub-category", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
}
exports.SubCategoryController = SubCategoryController;
