"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationMidFunction_1 = __importDefault(require("./ValidationMidFunction"));
class Validate {
    static validatePost(req, res, next) {
        const post = req.body;
        const requiredKeys = [
            'projectImage',
            'projectDescription',
            'repositoryLink'
        ];
        ValidationMidFunction_1.default.notFoundKey(requiredKeys, post);
        next();
    }
    static validateUser(req, res, next) {
        const post = req.body;
        const requiredKeys = ['password', 'email'];
        ValidationMidFunction_1.default.notFoundKey(requiredKeys, post);
        next();
    }
}
exports.default = Validate;
//# sourceMappingURL=ValidateMid.js.map