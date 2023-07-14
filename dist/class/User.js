"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Email_1 = __importDefault(require("./Email"));
const Password_1 = __importDefault(require("./Password"));
class User {
    constructor(email, password) {
        this._email = new Email_1.default(email);
        this._password = new Password_1.default(password);
    }
    getUser() {
        return {
            email: this._email.getEmail(),
            password: this._password.getPassword()
        };
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map