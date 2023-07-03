"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.getPostById = exports.getallPost = exports.deletePost = exports.createPost = void 0;
const Posts_model_1 = require("../models/Posts.model");
const createPost = async (req, res, next) => {
    console.log("req", Object.assign({}, req.body));
    var posts = await Posts_model_1.Post.create(Object.assign({}, req.body));
    return res.status(200)
        .json({ message: "Posts created successfully", data: posts });
};
exports.createPost = createPost;
const deletePost = async (req, res, next) => {
    const { id } = req.params;
    const deletedPost = await Posts_model_1.Post.findByPk(id);
    await Posts_model_1.Post.destroy({ where: { id } });
    return res.status(200)
        .json({ message: "Posts deleted successfully", data: deletedPost });
};
exports.deletePost = deletePost;
const getallPost = async (req, res, next) => {
    const allPosts = await Posts_model_1.Post.findAll();
    return res.status(200)
        .json({ message: "Posts found all successfully", data: allPosts });
};
exports.getallPost = getallPost;
const getPostById = async (req, res, next) => {
    const { id } = req.params;
    const post = await Posts_model_1.Post.findByPk(id);
    return res.status(200)
        .json({ message: "Posts found successfully", data: post });
};
exports.getPostById = getPostById;
const updatePost = async (req, res, next) => {
    const { id } = req.params;
    await Posts_model_1.Post.update(Object.assign({}, req.body), { where: { id } });
    const updatedPost = await Posts_model_1.Post.findByPk(id);
    return res.status(200)
        .json({ message: "Posts found successfully", data: updatedPost });
};
exports.updatePost = updatePost;
