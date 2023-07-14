import { NextFunction, Request, Response } from "express";


export default class ErrorMiddleware {
  static handler(err: Error, req: Request, res: Response, _next: NextFunction) {
    return res.status(500).json({ message: err.message })
  }
}