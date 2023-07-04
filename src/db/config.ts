import { Sequelize } from "sequelize-typescript"
import { Post } from '../models/postModel'
import { Category } from '../models/categoryModel'
import { PostCategory } from "../models/postCategoryModel"
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Post, Category, PostCategory],
});

export default sequelize;