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
const EncrypterBcrypt_1 = __importDefault(require("./EncrypterBcrypt"));
const TokenGeneratorJwt_1 = __importDefault(require("./TokenGeneratorJwt"));
class UserService {
    constructor(userModel = user_model_1.default) {
        this.userModel = userModel;
        this.encrypter = new EncrypterBcrypt_1.default();
        this.tokenGenerator = new TokenGeneratorJwt_1.default();
    }
    longinUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const returningValidUser = user.getUser();
            const response = yield this.userModel.findOne({
                where: { email: returningValidUser.email }
            });
            if (!response)
                throw new Error('Usuario não encontrado');
            const isValid = yield this.encrypter.compare(returningValidUser.password, response.password);
            if (!isValid)
                throw new Error('Senha incorreta');
            const token = this.tokenGenerator.generate(response);
            return token;
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=User.js.map