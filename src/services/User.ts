import User from "../class/User";
import UserModel from '../database/models/user.model'
import Encrypter from "../interfaces/Encypter";
import { TokenGenerator } from "../interfaces/ITokenGenerator";
import EncrypterBcrypt from "./EncrypterBcrypt";
import TokenGeneratorJwt from "./TokenGeneratorJwt";


class UserService {
  private encrypter: Encrypter;
  private tokenGenerator: TokenGenerator;
  constructor(encrypter: Encrypter, tokenGenerator: TokenGenerator, private userModel = UserModel) {
    this.encrypter = new EncrypterBcrypt()
    this.tokenGenerator = new TokenGeneratorJwt()
  }

  async longinUser(user: User): Promise<string> {
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