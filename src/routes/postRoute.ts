import { Router } from "express";
import {
    createPost,
    deletePost,
    getPostById,
    getallPost,
    updatePost
} from "../controllers/postController"
const router = Router();
router.get("/",getallPost);
router.get("/:id",getPostById);
router.post("/",createPost);
router.put("/:id",updatePost);
router.delete("/:id",deletePost)
export = router