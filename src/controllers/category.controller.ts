import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { sendSuccessResponse, sendErrorResponse } from "../utils/apiResponse";

// Initialize service outside the class
const categoryService = new CategoryService();

export class CategoryController {
  static async getCategories(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllCategories();
      sendSuccessResponse(res, categories);
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching categories",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  static async getCategoryById(req: Request<{ id: string }>, res: Response) {
    try {
      const category = await categoryService.getCategoryById(
        parseInt(req.params.id)
      );
      if (category) {
        sendSuccessResponse(res, category);
      } else {
        sendErrorResponse(res, 404, "Category not found");
      }
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching category",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
}
