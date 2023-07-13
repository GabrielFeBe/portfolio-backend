"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Password {
    constructor(password) {
        if (password.length < 6)
            throw new Error('invalid password');
        this._password = password;
    }
    getPassword() {
        return this._password;
    }
}
exports.default = Password;
//# sourceMappingURL=Password.js.map