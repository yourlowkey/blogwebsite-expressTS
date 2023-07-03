"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controller/posts");
const router = (0, express_1.Router)();
router.post("/", posts_1.createPost);
