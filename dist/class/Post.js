"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Post extends User_1.default {
    constructor(post) {
        super(post.email, post.password);
    }
}
exports.default = Post;
//# sourceMappingURL=Post.js.map