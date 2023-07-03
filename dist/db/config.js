"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Posts_model_1 = require("../models/Posts.model");
const Categories_model_1 = require("../models/Categories.model");
const Post_Categories_model_1 = require("../models/Post-Categories.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    models: [Posts_model_1.Post, Categories_model_1.Category, Post_Categories_model_1.PostCategory],
});
exports.default = sequelize;
