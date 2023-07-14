import express from 'express';
import 'express-async-errors'
import ErrorMiddleware from './middleware/errorMiddleware';
import router from './routes'


class App {
  public app: express.Express
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.routes()
    this.app.get('/', (_req, res) => res.status(200).send('portfolio on'))
    this.app.use(ErrorMiddleware.handler)
  }

  private routes(): void {
    this.app.use(router)
  }

  public start(PORT: string | number) {

    this.app.listen(PORT, () => console.log(
      `Server is running on PORT: ${PORT}`,
    ));
  }
}




export default App