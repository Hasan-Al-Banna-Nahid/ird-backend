import { initializeDatabase } from "../config/database";
import { Category } from "../models/category.model";

export class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    const db = await initializeDatabase();
    return db.all<Category[]>(`
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
  }

  async getCategoryById(id: number): Promise<Category | undefined> {
    const db = await initializeDatabase();
    return db.get<Category>(
      `
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
        `,
      [id]
    );
  }
}
