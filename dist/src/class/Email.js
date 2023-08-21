"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
class Email {
    constructor(email) {
        if (!validator_1.default.isEmail(email)) {
            throw new Error('email invalido');
        }
        this._email = email;
    }
    getEmail() {
        return this._email;
    }
}
exports.default = Email;
//# sourceMappingURL=Email.js.map