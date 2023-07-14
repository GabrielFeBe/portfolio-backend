import { Router } from "express";
import PostController from "../controllers/Post";
import PostService from "../services/Posts";
import { Request, Response } from 'express';
import Validate from "../middleware/ValidateMid";


const postService = new PostService()
const postController = new PostController(postService)




const router = Router();
router.get('/posts/:id', async (req: Request, res: Response) => postController.findPostById(req, res))

router.get('/posts', (async (req: Request, res: Response) => postController.findAllPosts(req, res)))
router.post('/posts', Validate.validatePost, (async (req: Request, res: Response) => postController.creatingPost(req, res)))
// router.use('/posts/:id', (async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const postsByUser = await UserModel.findByPk(1, {
//     include: [{
//       model: ProductModel,
//       as: 'posts'
//     }]
//   })
//   res.send({ postsByUser });
// }))

export default router;