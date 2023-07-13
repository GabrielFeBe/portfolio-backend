import CPost from "../class/Post";
import Post from "../database/models/posts.model";


class PostService {

  constructor(private postModel = Post) {

  }

  async creatingPost(post: CPost) {
    const result = await this.postModel.create(post.objectForUse)
    return result;
  }

  async getingAllPosts() {
    const result = await this.postModel.findAll()
    return result
  }
  async findById(id: number) {
    const result = await this.postModel.findByPk(id)
    if (!result) throw new Error('não existe post com esse id')
    return result

  }
}

export default PostService