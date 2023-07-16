"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.JWT_SECRET || 'segurodms';
class TokenGeneratorJwt {
    constructor() {
        this.jwt = jsonwebtoken_1.default;
    }
    generate(user) {
        const token = this.jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: TokenGeneratorJwt.jwtExpiration });
        return token;
    }
    verifyToken(token) {
        const data = this.jwt.verify(token, jwtSecret);
        return data;
    }
}
exports.default = TokenGeneratorJwt;
TokenGeneratorJwt.jwtExpiration = process.env.JWT_EXPIRATION || (60 * 60 * 24 * 7);
//# sourceMappingURL=TokenGeneratorJwt.js.map