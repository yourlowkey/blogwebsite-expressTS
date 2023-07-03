"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const Posts_model_1 = require("../models/Posts.model");
const createPost = async (req, res, next) => {
    var posts = await Posts_model_1.Post.create(Object.assign({}, req.body));
    return res.status(200)
        .json({ message: "Posts create successfully", data: posts });
};
exports.createPost = createPost;
