import { Request, Response } from "express";
import { SubCategoryService } from "../services/subCategory.service";
import {
  sendSuccessResponse,
  sendErrorResponse,
  sendNotFoundResponse,
} from "../utils/apiResponse";

// Initialize service instance outside the class
const subCategoryService = new SubCategoryService();

export class SubCategoryController {
  static async getSubCategories(req: Request, res: Response) {
    try {
      const subCategories = await subCategoryService.getAllSubCategories();
      sendSuccessResponse(
        res,
        subCategories,
        "Sub-categories fetched successfully"
      );
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching sub-categories",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  static async getSubCategoriesByCategory(
    req: Request<{ cat_id: string }>,
    res: Response
  ) {
    try {
      const catId = parseInt(req.params.cat_id);
      const subCategories = await subCategoryService.getSubCategoriesByCategory(
        catId
      );

      if (subCategories.length === 0) {
        sendNotFoundResponse(res, "No sub-categories found for this category");
      } else {
        sendSuccessResponse(
          res,
          subCategories,
          "Sub-categories fetched successfully"
        );
      }
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching sub-categories by category",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  static async getSubCategoryById(req: Request<{ id: string }>, res: Response) {
    try {
      const subcatId = parseInt(req.params.id);
      const subCategory = await subCategoryService.getSubCategoryById(subcatId);

      if (subCategory) {
        sendSuccessResponse(
          res,
          subCategory,
          "Sub-category fetched successfully"
        );
      } else {
        sendNotFoundResponse(res, "Sub-category not found");
      }
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching sub-category",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
}
