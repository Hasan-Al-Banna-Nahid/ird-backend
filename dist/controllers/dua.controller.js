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
exports.DuaController = void 0;
const dua_service_1 = require("../services/dua.service");
const apiResponse_1 = require("../utils/apiResponse");
// Initialize service instance at the top level
const duaService = new dua_service_1.DuaService();
class DuaController {
    static getDuas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const duas = yield duaService.getAllDuas();
                (0, apiResponse_1.sendSuccessResponse)(res, duas, "Duas fetched successfully");
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching duas", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
    static getDuasByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catId = parseInt(req.params.cat_id);
                const duas = yield duaService.getDuasByCategory(catId);
                if (duas.length === 0) {
                    (0, apiResponse_1.sendNotFoundResponse)(res, "No duas found for this category");
                }
                else {
                    (0, apiResponse_1.sendSuccessResponse)(res, duas, "Duas fetched successfully");
                }
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching duas by category", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
    static getDuasBySubCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subcatId = parseInt(req.params.subcat_id);
                const duas = yield duaService.getDuasBySubCategory(subcatId);
                if (duas.length === 0) {
                    (0, apiResponse_1.sendNotFoundResponse)(res, "No duas found for this sub-category");
                }
                else {
                    (0, apiResponse_1.sendSuccessResponse)(res, duas, "Duas fetched successfully");
                }
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching duas by sub-category", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
    static getDuaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const duaId = parseInt(req.params.id);
                const dua = yield duaService.getDuaById(duaId);
                if (dua) {
                    (0, apiResponse_1.sendSuccessResponse)(res, dua, "Dua fetched successfully");
                }
                else {
                    (0, apiResponse_1.sendNotFoundResponse)(res, "Dua not found");
                }
            }
            catch (error) {
                (0, apiResponse_1.sendErrorResponse)(res, 500, "Error fetching dua", error instanceof Error ? error.message : "Unknown error");
            }
        });
    }
}
exports.DuaController = DuaController;
