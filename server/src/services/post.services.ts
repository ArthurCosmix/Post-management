import { Request, Response } from "express";
import  AppDataSource  from "../config/data-source.js";
import { Post } from "../entities/Post.js";
import { Ipost, PostInputDTO, Upost } from "../interfaces/post.interface.js";
const postRepository = AppDataSource.getRepository(Post);

// 📌 Create Post
export class PostService {
    public createPost = async (postData : PostInputDTO) : Promise<Ipost> => {
            const post = new Post();
            post.title = postData.title;
            post.description = postData.description;
    
            const savedPost = await postRepository.save(post);
            return savedPost;
    };
    
    // 📌 Get All Posts
    public getPosts = async () : Promise<Ipost[]> => {
            return await postRepository.find();
    };
    
    // 📌 Get Single Post by ID
    public getPostById = async (id : number) : Promise<Ipost | null> => {
            const post = await postRepository.findOneBy({ id: Number(id) });
            if (!post) throw new Error('post not found');
            return post
    };
    
    // 📌 Update Post
    public updatePost = async (id : number , postData : Upost) => {
                
            let post = await postRepository.findOneBy({ id: Number(id) });
            if (!post) throw new Error('Post not found')
    
            post.title = postData.title ?? post.title;
            post.description = postData.description ?? post.description;

            const updatedPost = await postRepository.save(post);
            return updatedPost

    };
    
    // 📌 Delete Post
   public deletePost = async (id : number) : Promise<Ipost>=> {
            const post = await postRepository.findOneBy({ id: Number(id) });
            if (!post) throw new Error("Post not found")
            await postRepository.remove(post);
            return post
    };
    
}