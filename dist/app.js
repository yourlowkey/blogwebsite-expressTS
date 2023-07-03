"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Categories_model_1 = require("./models/Categories.model");
const Posts_model_1 = require("./models/Posts.model");
const Post_Categories_model_1 = require("./models/Post-Categories.model");
const config_1 = __importDefault(require("./db/config"));
const app = (0, express_1.default)();
async function run() {
    try {
        await config_1.default.authenticate();
        console.log('Connected to the database.');
        // Synchronize the models with the database
        config_1.default.addModels([Categories_model_1.Category, Posts_model_1.Post, Post_Categories_model_1.PostCategory]);
        await config_1.default.sync(); // This will create the "users" table in the database
        // Your application code here
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
run();
app.listen(3000);
