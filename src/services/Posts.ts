import CPost from "../class/Post";
import Post from "../database/models/posts.model";
import User from "../database/models/user.model";
import TPostS from "../interfaces/Post";


class PostService {

  constructor(private postModel = Post) {

  }

  async editingPost(post: TPostS , id:number): Promise<number | null> {
    // const postObj = post.objectForUse
    const user = await User.findByPk(post.userId)
    if (!user) throw new Error('não existe user com esse id')
 
    const [result] = await this.postModel.update(post, {
      where: {
        id: id,
      }
    })
    return result;

  }

  async creatingPost(post: CPost): Promise<TPostS> {
    const postObj = post.objectForUse
    const user = await User.findByPk(postObj.userId)
    if (!user) throw new Error('não existe user com esse id')
    const posts = await this.postModel.findAll({
      where: {
        isFavorite: true
      }
    })
    if (posts.length >= 2 && postObj.isFavorite) throw new Error('Limite de 2 posts favoritos atingidos')
    const result = await this.postModel.create(postObj)
    return result;
  }

  async getingAllPosts(): Promise<TPostS[]> {
    const result = await this.postModel.findAll()
    return result
  }
  async getingAllFavoritesPosts(): Promise<TPostS[]> {
    const posts = await this.postModel.findAll({
      where: {
        isFavorite: true
      }
    })

    return posts
  }
  async findById(id: number): Promise<TPostS> {
    const result = await this.postModel.findByPk(id)
    if (!result) throw new Error('não existe post com esse id')
    return result
  }
}

export default PostService