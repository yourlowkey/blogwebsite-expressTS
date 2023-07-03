import {Sequelize} from "sequelize-typescript"
import {Post} from '../models/Posts.model'
import {Category} from '../models/Categories.model'
import { PostCategory } from "../models/Post-Categories.model"
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  export default sequelize;