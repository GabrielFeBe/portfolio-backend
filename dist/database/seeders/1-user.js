"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('users', [
            {
                email: 'hu3master.zord@hotmail.com',
                password: bcryptjs_1.default.hashSync('teste', SALT_ROUNDS),
            },
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('users', {});
    }
};
//# sourceMappingURL=1-user.js.map