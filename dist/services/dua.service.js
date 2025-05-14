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
exports.DuaService = void 0;
const database_1 = require("../config/database");
class DuaService {
    getAllDuas() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.initializeDatabase)();
            return db.all(`
            SELECT 
                id,
                cat_id,
                subcat_id,
                dua_id,
                dua_name_bn,
                dua_name_en,
                top_bn,
                top_en,
                dua_arabic,
                dua_indopak,
                clean_arabic,
                transliteration_bn,
                transliteration_en,
                translation_bn,
                translation_en,
                bottom_bn,
                bottom_en,
                refference_bn,
                refference_en,
                audio
            FROM dua
            ORDER BY cat_id, subcat_id, dua_id
        `);
        });
    }
    getDuasByCategory(cat_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.initializeDatabase)();
            return db.all(`
            SELECT 
                id,
                cat_id,
                subcat_id,
                dua_id,
                dua_name_bn,
                dua_name_en,
                top_bn,
                top_en,
                dua_arabic,
                dua_indopak,
                clean_arabic,
                transliteration_bn,
                transliteration_en,
                translation_bn,
                translation_en,
                bottom_bn,
                bottom_en,
                refference_bn,
                refference_en,
                audio
            FROM dua
            WHERE cat_id = ?
            ORDER BY subcat_id, dua_id
        `, [cat_id]);
        });
    }
    getDuasBySubCategory(subcat_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.initializeDatabase)();
            return db.all(`
            SELECT 
                id,
                cat_id,
                subcat_id,
                dua_id,
                dua_name_bn,
                dua_name_en,
                top_bn,
                top_en,
                dua_arabic,
                dua_indopak,
                clean_arabic,
                transliteration_bn,
                transliteration_en,
                translation_bn,
                translation_en,
                bottom_bn,
                bottom_en,
                refference_bn,
                refference_en,
                audio
            FROM dua
            WHERE subcat_id = ?
            ORDER BY dua_id
        `, [subcat_id]);
        });
    }
    getDuaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.initializeDatabase)();
            return db.get(`
            SELECT 
                id,
                cat_id,
                subcat_id,
                dua_id,
                dua_name_bn,
                dua_name_en,
                top_bn,
                top_en,
                dua_arabic,
                dua_indopak,
                clean_arabic,
                transliteration_bn,
                transliteration_en,
                translation_bn,
                translation_en,
                bottom_bn,
                bottom_en,
                refference_bn,
                refference_en,
                audio
            FROM dua
            WHERE dua_id = ?
        `, [id]);
        });
    }
}
exports.DuaService = DuaService;
