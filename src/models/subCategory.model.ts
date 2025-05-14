import { initializeDatabase } from "../config/database";

export interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}

export const createSubCategoryTable = async () => {
  const db = await initializeDatabase();
  await db.get("SELECT 1 FROM sub_category LIMIT 1");
};
