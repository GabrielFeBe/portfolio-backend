import express from 'express';
import UserModel from './database/models/user.model';
import { Request, Response } from 'express';
import ProductModel from './database/models/posts.model'
// import router from './routes'
import 'express-async-errors'

class App {
  public app: express.Express
  constructor() {
    this.app = express()
    this.app.use(express.json())
    // this.routes()
    this.app.get('/', async (req: Request, res: Response) => {
      const postsByUser = await UserModel.findByPk(1, {
        include: [{
          model: ProductModel,
          as: 'posts'
        }]
      })
      res.send({ postsByUser });
    });

  }

  // private routes(): void {
  //   this.app.use(router)
  // }

  public start(PORT: string | number) {

    this.app.listen(PORT, () => console.log(
      `Server is running on PORT: ${PORT}`,
    ));
  }
}




export default App