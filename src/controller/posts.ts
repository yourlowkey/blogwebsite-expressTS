import { RequestHandler } from "express";

import {Post} from "../models/Posts.model"

export const createPost: RequestHandler = async (req,res,next)=>{
    var posts = await Post.create({...req.body})
    return res.status(200)
    .json({message: "Posts create successfully",data:posts})
}