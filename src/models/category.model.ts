import { initializeDatabase } from "../config/database";

export interface Category {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}

export const createCategoryTable = async () => {
  const db = await initializeDatabase();
  await db.get("SELECT 1 FROM category LIMIT 1");
};
