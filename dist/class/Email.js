"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(email) {
        if (!Email.emailRegex.test(email)) {
            throw new Error('email invalido');
        }
        this._email = email;
    }
    getEmail() {
        return this._email;
    }
}
exports.default = Email;
Email.emailRegex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
//# sourceMappingURL=Email.js.map