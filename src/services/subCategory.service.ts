import { initializeDatabase } from "../config/database";
import { SubCategory } from "../models/subCategory.model";

export class SubCategoryService {
  async getAllSubCategories(): Promise<SubCategory[]> {
    const db = await initializeDatabase();
    return db.all<SubCategory[]>(`
            SELECT 
                id,
                cat_id,
                subcat_id,
                subcat_name_bn,
                subcat_name_en,
                no_of_dua
            FROM sub_category
            ORDER BY cat_id, subcat_id
        `);
  }

  async getSubCategoriesByCategory(cat_id: number): Promise<SubCategory[]> {
    const db = await initializeDatabase();
    return db.all<SubCategory[]>(
      `
            SELECT 
                id,
                cat_id,
                subcat_id,
                subcat_name_bn,
                subcat_name_en,
                no_of_dua
            FROM sub_category
            WHERE cat_id = ?
            ORDER BY subcat_id
        `,
      [cat_id]
    );
  }

  async getSubCategoryById(id: number): Promise<SubCategory | undefined> {
    const db = await initializeDatabase();
    return db.get<SubCategory>(
      `
            SELECT 
                id,
                cat_id,
                subcat_id,
                subcat_name_bn,
                subcat_name_en,
                no_of_dua
            FROM sub_category
            WHERE subcat_id = ?
        `,
      [id]
    );
  }
}
