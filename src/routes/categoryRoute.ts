import { Router } from "express";
import {
    createCategory,
    getallCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController"
const router = Router();
router.get("/", getallCategory);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory)
export = router