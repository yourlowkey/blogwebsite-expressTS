import { Category } from './../models/categoryModel';
import { RequestHandler } from "express";
import { Post } from '../models/postModel';

export const createCategory: RequestHandler = async (req, res, next) => {
    var category = await Category.create({ ...req.body })
    return res.status(200)
        .json({ message: "Categories created successfully", data: category })
}
export const deleteCategory: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedCategory: Category | null = await Category.findByPk(id)
    await Category.destroy({ where: { id } })
    return res.status(200)
        .json({ message: "Categories deleted successfully", data: deletedCategory })
}
export const getallCategory: RequestHandler = async (req, res, next) => {
    const allCategories: Category[] = await Category.findAll()
    return res.status(200)
        .json({ message: "Categories found all successfully", data: allCategories })
}
export const getCategoryById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const category: Category | null = await Category.findByPk(id);
    return res.status(200)
        .json({ message: "Categories found successfully", data: category })
}
export const updateCategory: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Category.update({ ...req.body }, { where: { id } })
    const updatedCategory: Category | null = await Category.findByPk(id);
    return res.status(200)
        .json({ message: "Categories found successfully", data: updatedCategory })
}
