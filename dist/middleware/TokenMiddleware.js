"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../database/models/user.model"));
const TokenGeneratorJwt_1 = __importDefault(require("../services/TokenGeneratorJwt"));
const tokenGenerator = new TokenGeneratorJwt_1.default();
class TokenMiddleware {
    static decoder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization } = req.headers;
            console.log(authorization);
            const verify = tokenGenerator.verifyToken(authorization);
            console.log(verify);
            if (!verify)
                throw new Error('Token invalido');
            const lookingForUser = yield user_model_1.default.findByPk(verify.id);
            if (!lookingForUser)
                throw new Error('User invalido');
            req.body.userId = verify.id;
            return next();
        });
    }
}
exports.default = TokenMiddleware;
//# sourceMappingURL=TokenMiddleware.js.map