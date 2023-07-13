import Encrypter from "../interfaces/Encypter";
import * as bcrypt from 'bcrypt';


class EncrypterBcrypt implements Encrypter {
  private bcrypt = bcrypt
  static SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;


  async encrypt(password: string): Promise<string> {
    const hash = await this.bcrypt.hash(password, EncrypterBcrypt.SALT_ROUNDS)
    return hash;
  }
  async compare(password: string, hash: string): Promise<boolean> {
    const isValid = await this.bcrypt.compare(password, hash)
    return isValid;
  }

}

export default EncrypterBcrypt;