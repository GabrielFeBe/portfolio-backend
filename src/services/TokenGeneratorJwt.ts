import jwt from 'jsonwebtoken'
import { JwtPayload, TokenGenerator, userDefault } from '../interfaces/ITokenGenerator';

const jwtSecret = process.env.JWT_SECRET || 'segurodms';



export default class TokenGeneratorJwt implements TokenGenerator {
  private jwt = jwt;
  static jwtExpiration = process.env.JWT_EXPIRATION || (60 * 60 * 24 * 7);
  generate(user: userDefault): string {
    const token = this.jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: TokenGeneratorJwt.jwtExpiration })
    return token;
  }
  verifyToken(token: string) {
    const data = this.jwt.verify(token, jwtSecret) as JwtPayload;
    return data;
  }


}