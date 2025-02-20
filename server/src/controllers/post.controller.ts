import { PostService } from "../services/post.services.js";
import { Request, Response, NextFunction } from "express";
import { sendResponse } from "../utils/api.response.js";
import { send } from "process";

export class PostController {
    private postService = new PostService();

    public createPost = async (req : Request, res : Response, next : NextFunction) => {
        try {
            const postData = req.body
            const posts = await this.postService.createPost(postData);
            sendResponse(res, 201, true, "Posts fetched successfully", posts);
        } catch (error) {
            next(error)
        }
    };

    public updatePost = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const post = await this.postService.updatePost(Number(req.params.id), req.body)
            sendResponse(res, 200, true, "Update post successful", post)
        }catch(error){
            next(error)
        }
    }

    public getPosts = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const posts = await this.postService.getPosts()
            sendResponse(res, 200, true, "Posts fecthed successfully", posts)
        }catch(error){
            next(error)
        }
    }

    public getPostById = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const post = await this.postService.getPostById(Number(req.params.id))
            sendResponse(res, 200, true, 'Post fetched successfully', post)

        }catch(error){
            next(error)
        }
    }

    public deletePost = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const post = await this.postService.deletePost(Number(req.params.id))
            sendResponse(res, 200, true, 'Post deleted successful', post)
        }catch(error){
            next(error)
        }
    }
}
