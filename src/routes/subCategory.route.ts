import { Router } from "express";
import { SubCategoryController } from "../controllers/subCategory.controller";

const router = Router();

router.get("/", SubCategoryController.getSubCategories);
router.get(
  "/category/:cat_id",
  SubCategoryController.getSubCategoriesByCategory
);
router.get("/:id", SubCategoryController.getSubCategoryById);

export default router;
