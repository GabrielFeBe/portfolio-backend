import User from "../class/User";
import UserModel from '../database/models/user.model'
import Encrypter from "../interfaces/Encypter";
import EncrypterBcrypt from "./EncrypterBcrypt";
import TokenGeneratorJwt from "./TokenGeneratorJwt";

export interface userDefault {
  email: string;
  password: string;
  id: number;
}

export interface TokenGenerator {
  generate(user: userDefault): string
}

class UserService {
  private encrypter: Encrypter;
  private tokenGenerator: TokenGenerator;
  constructor(private userModel = UserModel) {
    this.encrypter = new EncrypterBcrypt()
    this.tokenGenerator = new TokenGeneratorJwt()
  }

  async longinUser(user: User) {
    const returningValidUser = user.getUser()
    const response = await this.userModel.findOne({
      where: { email: returningValidUser.email }
    })
    if (!response) throw new Error('Usuario não encontrado')
    const isValid = await this.encrypter.compare(returningValidUser.password, response.password)
    if (!isValid) throw new Error('Senha incorreta')
    const token = this.tokenGenerator.generate(response)
    return token;
  }
}

export default UserService;