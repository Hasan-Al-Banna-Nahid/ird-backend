import { Request, Response } from "express";
import { DuaService } from "../services/dua.service";
import {
  sendSuccessResponse,
  sendErrorResponse,
  sendNotFoundResponse,
} from "../utils/apiResponse";

// Initialize service instance at the top level
const duaService = new DuaService();

export class DuaController {
  static async getDuas(req: Request, res: Response) {
    try {
      const duas = await duaService.getAllDuas();
      sendSuccessResponse(res, duas, "Duas fetched successfully");
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching duas",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  static async getDuasByCategory(
    req: Request<{ cat_id: string }>,
    res: Response
  ) {
    try {
      const catId = parseInt(req.params.cat_id);
      const duas = await duaService.getDuasByCategory(catId);

      if (duas.length === 0) {
        sendNotFoundResponse(res, "No duas found for this category");
      } else {
        sendSuccessResponse(res, duas, "Duas fetched successfully");
      }
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching duas by category",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  static async getDuasBySubCategory(
    req: Request<{ subcat_id: string }>,
    res: Response
  ) {
    try {
      const subcatId = parseInt(req.params.subcat_id);
      const duas = await duaService.getDuasBySubCategory(subcatId);

      if (duas.length === 0) {
        sendNotFoundResponse(res, "No duas found for this sub-category");
      } else {
        sendSuccessResponse(res, duas, "Duas fetched successfully");
      }
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching duas by sub-category",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  static async getDuaById(req: Request<{ id: string }>, res: Response) {
    try {
      const duaId = parseInt(req.params.id);
      const dua = await duaService.getDuaById(duaId);

      if (dua) {
        sendSuccessResponse(res, dua, "Dua fetched successfully");
      } else {
        sendNotFoundResponse(res, "Dua not found");
      }
    } catch (error) {
      sendErrorResponse(
        res,
        500,
        "Error fetching dua",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }
}
