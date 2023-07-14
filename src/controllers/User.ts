import UserService from "../services/User";
import { Request, Response } from 'express';
import User from "../class/User";



class UserController {
  constructor(private userService = new UserService()) { }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const afterValidation = new User(email, password)
    const token = await this.userService.longinUser(afterValidation);
    return res.status(200).json({ token })
  }
}

export default UserController;