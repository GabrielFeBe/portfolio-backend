import { NextFunction, Request, Response } from "express";
import ValidateMidFunctions from "./ValidationMidFunction";

class Validate {
  static validatePost(req: Request, res: Response, next: NextFunction) {
    const post = req.body;
    const requiredKeys = [
      'projectImage',
      'projectDescription',
      'repositoryLink'];

    ValidateMidFunctions.notFoundKey(requiredKeys, post)

    next()
  }
  static validateUser(req: Request, res: Response, next: NextFunction) {
    const post = req.body;
    const requiredKeys = ['password', 'email'];

    ValidateMidFunctions.notFoundKey(requiredKeys, post)

    next()
  }
}

export default Validate