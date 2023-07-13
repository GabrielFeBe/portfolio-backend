import { NextFunction, Request, Response } from "express";

class Validate {
  static validatePost(req: Request, res: Response, next: NextFunction) {
    const post = req.body;
    const requiredKeys = [
      'projectImage',
      'projectDescription',
      'repositoryLink',
      'userId']
    const notFoundKey = requiredKeys.find((key) => !(key in post));
    if (notFoundKey) {
      throw new Error(`${notFoundKey} is required`)
    }

    next()
  }
}

export default Validate