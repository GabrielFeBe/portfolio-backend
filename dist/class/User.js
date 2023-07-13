"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    getUser() {
        return {
            email: this._email,
            password: this._password
        };
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map