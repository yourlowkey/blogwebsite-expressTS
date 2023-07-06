import { Router } from "express";
import {
    createPost,
    deletePost,
    getPostById,
    getallPost,
    updatePost,
    listPostbyCategory
} from "../controllers/postController"
const router = Router();
router.get("/",getallPost);
router.get("/:id",getPostById);
router.get("/posts/:categoryId",listPostbyCategory)
router.post("/",createPost);
router.put("/:id",updatePost);
router.delete("/:id",deletePost)
export = router