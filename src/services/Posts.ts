import CPost from "../class/Post";
import Post from "../database/models/posts.model";
import User from "../database/models/user.model";


class PostService {

  constructor(private postModel = Post) {

  }
  async creatingPost(post: CPost) {
    const postObj = post.objectForUse
    const user = await User.findByPk(postObj.userId)
    if (!user) throw new Error('não existe user com esse id')
    const result = await this.postModel.create(postObj)
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