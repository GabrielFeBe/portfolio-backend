import * as jwt from 'jsonwebtoken'
import { TokenGenerator, userDefault } from './User';

export default class TokenGeneratorJwt implements TokenGenerator {
  private jwt = jwt;
  static jwtSecret = process.env.JWT_SECRET || 'segurodms';
  static jwtExpiration = process.env.JWT_EXPIRATION || (60 * 60 * 24);
  generate(user: userDefault): string {
    const token = this.jwt.sign({ id: user.id, email: user.email }, TokenGeneratorJwt.jwtSecret, { expiresIn: TokenGeneratorJwt.jwtExpiration })
    return token;
  }

}