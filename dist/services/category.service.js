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
exports.CategoryService = void 0;
const database_1 = require("../config/database");
class CategoryService {
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.initializeDatabase)();
            return db.all(`
            SELECT 
                id,
                cat_id,
                cat_name_bn,
                cat_name_en,
                no_of_subcat,
                no_of_dua,
                cat_icon
            FROM category
            ORDER BY cat_id
        `);
        });
    }
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.initializeDatabase)();
            return db.get(`
            SELECT 
                id,
                cat_id,
                cat_name_bn,
                cat_name_en,
                no_of_subcat,
                no_of_dua,
                cat_icon
            FROM category
            WHERE cat_id = ?
        `, [id]);
        });
    }
}
exports.CategoryService = CategoryService;
