import PostController from "../controllers/Post";
import PostService from "../services/Posts";
import { Request, Response, Router } from 'express';
import Validate from "../middleware/ValidateMid";
import UserController from "../controllers/User";
import { multerConfig } from '../config/multer'
import multer from "multer";
import TokenMiddleware from "../middleware/TokenMiddleware";
import UserService from "../services/User";
import TokenGeneratorJwt from "../services/TokenGeneratorJwt";
import EncrypterBcrypt from "../services/EncrypterBcrypt";


const postService = new PostService()
const postController = new PostController(postService)
const tokenGenerator = new TokenGeneratorJwt()
const encrypter = new EncrypterBcrypt()
const userService = new UserService(encrypter, tokenGenerator)
const userController = new UserController(userService)



const router = Router();
router.get('/posts/:id', async (req: Request, res: Response) => postController.findPostById(req, res))
router.get('/posts', (async (req: Request, res: Response) => postController.findAllPosts(req, res)))
router.patch('/posts/editing', TokenMiddleware.decoder, (async (req: Request, res: Response) => postController.editingPost(req, res)))
router.get('/favorites', (async (req: Request, res: Response) => postController.findAllFavoritesPosts(req, res)))
router.post('/posts', TokenMiddleware.decoder, Validate.validatePost, (async (req: Request, res: Response) => postController.creatingPost(req, res)))
router.post('/user/login', Validate.validateUser, (async (req: Request, res: Response) => userController.login(req, res)))

router.post('/upload', TokenMiddleware.decoder, multer(multerConfig).single('file'), async (req: Request, res: Response) => {
  const file = req.file;
  if (file) {
    const host: any = req.get('host')
    const fullUrl = req.protocol.concat('://').concat(host)
    const fileUrl = new URL(`/uploads/${file.filename}`, fullUrl).toString()
    return res.status(200).json(fileUrl)
  }
  return res.status(500).json({ message: 'something went wrong' })
})

export default router;