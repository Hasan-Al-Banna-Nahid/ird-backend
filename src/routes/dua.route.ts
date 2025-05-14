import { Router } from "express";
import { DuaController } from "../controllers/dua.controller";

const router = Router();

router.get("/", DuaController.getDuas);
router.get("/category/:cat_id", DuaController.getDuasByCategory);
router.get("/sub-category/:subcat_id", DuaController.getDuasBySubCategory);
router.get("/:id", DuaController.getDuaById);

export default router;
