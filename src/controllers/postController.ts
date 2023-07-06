import { Model } from 'sequelize-typescript';
import { RequestHandler } from "express";
import { Post } from "../models/postModel"
import { Category } from './../models/categoryModel';
import { PostCategory } from "../models/postCategoryModel";
import { FindOptions, Optional, ValidationError } from "sequelize";
import { NullishPropertiesOf } from "sequelize/types/utils";

export const createPost: RequestHandler = async (req, res, next) => {
    try {
        var category = await Category.findAll({ where: { id: req.body.categoryId } })
        if (!category) return res.status(404).json({ message: "category not found" })
        var post = await Post.create({ ...req.body })
        for (let i = 0; i < req.body.categoryId.length; i++) {
            await PostCategory.create({ postId: post.id as number, categoryId: req.body.categoryId[i] as number } as Optional<PostCategory, NullishPropertiesOf<PostCategory>>)
        }
        return res.status(200)
            .json({ message: "Posts created successfully", data: post })
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(error.errors[0].message);
            return res.status(409).json({ message: error.errors[0].message });
        }
        return res.sendStatus(400);
    }
}
export const deletePost: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPost: Post | null = await Post.findByPk(id)
        await Post.destroy({ where: { id } })
        return res.status(200)
            .json({ message: "Posts deleted successfully", data: deletedPost })
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getallPost: RequestHandler = async (req, res, next) => {
    try {
        const allPosts: Post[] = await Post.findAll({ include: [{ model: Category, attributes: ["id", "name"], through: { attributes: [] } }] })
        return res.status(200)
            .json({ message: "Posts found all successfully", data: allPosts })
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getPostById: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post: Post | null = await Post.findByPk(id);
        return res.status(200)
            .json({ message: "Posts found successfully", data: post })
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const updatePost: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Post.update({ ...req.body }, { where: { id } })
        const updatedPost: Post | null = await Post.findByPk(id);
        return res.status(200)
            .json({ message: "Posts found successfully", data: updatedPost })
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const listPostbyCategory: RequestHandler = async (req, res, next) => {
    try {
        const categoryId = req.params.categoryId;
        const category = await Category.findByPk(categoryId, {
            include: [{ model: Post }],
        });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.status(200).json(category.postId);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}