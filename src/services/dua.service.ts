import { initializeDatabase } from "../config/database";
import { Dua } from "../models/dua.model";

export class DuaService {
  async getAllDuas(): Promise<Dua[]> {
    const db = await initializeDatabase();
    return db.all<Dua[]>(`
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
  }

  async getDuasByCategory(cat_id: number): Promise<Dua[]> {
    const db = await initializeDatabase();
    return db.all<Dua[]>(
      `
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
        `,
      [cat_id]
    );
  }

  async getDuasBySubCategory(subcat_id: number): Promise<Dua[]> {
    const db = await initializeDatabase();
    return db.all<Dua[]>(
      `
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
        `,
      [subcat_id]
    );
  }

  async getDuaById(id: number): Promise<Dua | undefined> {
    const db = await initializeDatabase();
    return db.get<Dua>(
      `
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
        `,
      [id]
    );
  }
}
