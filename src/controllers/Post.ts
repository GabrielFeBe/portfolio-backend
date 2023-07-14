import PostService from "../services/Posts";
import { Request, Response } from 'express';
import CPost from "../class/Post";



class PostController {
  private postService: PostService
  constructor(postService: PostService) {
    this.postService = postService;
  }

  async findPostById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.postService.findById(+id)
    return res.status(200).json(response);
  }
  async findAllPosts(req: Request, res: Response) {
    const response = await this.postService.getingAllPosts()
    return res.status(200).json(response);
  }
  async creatingPost(req: Request, res: Response) {
    const objectToCreate = req.body;
    const post = new CPost(objectToCreate)
    const response = await this.postService.creatingPost(post)
    return res.status(200).json(response);
  }

}

export default PostController;