import express from 'express';
import 'express-async-errors'
import ErrorMiddleware from './middleware/errorMiddleware';
import router from './routes'
import cors from 'cors'
import path from 'path';

const uploadsDirectory = path.resolve(__dirname, '../uploads');


class App {
  public app: express.Express
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use('/uploads', express.static(uploadsDirectory));
    this.routes()
    this.app.get('/', (_req, res) => res.status(200).send('portfolio on'))
    this.app.use(ErrorMiddleware.handler)
  }

  private routes(): void {
    this.app.use(router)
  }

  public start(PORT: string | number) {

    this.app.listen({
      port: PORT,
      host: '0.0.0.0',
    }, () => console.log(
      `Server is running on PORT: ${PORT}`,
    ));
  }
}




export default App