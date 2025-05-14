import { initializeDatabase } from "../config/database";

export interface Dua {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn?: string;
  top_en?: string;
  dua_arabic: string;
  dua_indopak?: string;
  clean_arabic?: string;
  transliteration_bn?: string;
  transliteration_en?: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn?: string;
  bottom_en?: string;
  refference_bn?: string;
  refference_en?: string;
  audio?: string;
}

export const createDuaTable = async () => {
  const db = await initializeDatabase();
  await db.get("SELECT 1 FROM dua LIMIT 1");
};
