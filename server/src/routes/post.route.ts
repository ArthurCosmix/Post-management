import e, { Router } from "express";
import { PostController } from "../controllers/post.controller.js";

const router = Router()
const postController = new PostController()

router.get('/getPosts', postController.getPosts)
router.get('/getPostById/:id', postController.getPostById)
router.post('/createPost', postController.createPost)
router.post('/updatePost/:id', postController.updatePost)
router.delete('/deletePost/:id', postController.deletePost)

export default router