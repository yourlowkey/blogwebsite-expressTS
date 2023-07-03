import express from 'express'
import { Category } from './models/Categories.model';
import { Post } from './models/Posts.model';
import { PostCategory } from './models/Post-Categories.model';
import sequelize from './db/config';
const app = express()
async function run() {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database.');

        // Synchronize the models with the database
        sequelize.addModels([Category, Post, PostCategory]);
        await sequelize.sync(); // This will create the "users" table in the database

        // Your application code here
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

run()

app.listen(3000)
