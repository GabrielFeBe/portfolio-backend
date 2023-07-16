import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../database/models/user.model";
import TokenGeneratorJwt from "../services/TokenGeneratorJwt";


const tokenGenerator = new TokenGeneratorJwt()


export default class TokenMiddleware {

  static async decoder(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    console.log(authorization)
    const verify = tokenGenerator.verifyToken(authorization as string)
    console.log(verify)
    if (!verify) throw new Error('Token invalido')
    const lookingForUser = await User.findByPk(verify.id)
    if (!lookingForUser) throw new Error('User invalido')
    req.body.userId = verify.id
    return next()
  }

}