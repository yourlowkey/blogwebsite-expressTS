import { RequestHandler } from "express";
import { Post } from "../models/postModel"

export const createPost: RequestHandler = async (req, res, next) => {
    var post = await Post.create({ ...req.body })
    return res.status(200)
        .json({ message: "Posts created successfully", data: post })
}
export const deletePost: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedPost: Post | null = await Post.findByPk(id)
    await Post.destroy({ where: { id } })
    return res.status(200)
        .json({ message: "Posts deleted successfully", data: deletedPost })
}
export const getallPost: RequestHandler = async (req, res, next) => {
    const allPosts: Post[] = await Post.findAll()
    return res.status(200)
        .json({ message: "Posts found all successfully", data: allPosts })
}
export const getPostById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const post: Post | null = await Post.findByPk(id);
    return res.status(200)
        .json({ message: "Posts found successfully", data: post })
}
export const updatePost: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Post.update({ ...req.body }, { where: { id } })
    const updatedPost: Post | null = await Post.findByPk(id);
    return res.status(200)
        .json({ message: "Posts found successfully", data: updatedPost })
}