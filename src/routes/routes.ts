import { Router } from "express";
import {
    createPost
} from "../controller/posts"
const router = Router();
router.post("/",createPost);