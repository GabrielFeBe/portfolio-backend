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
const Post_1 = __importDefault(require("../class/Post"));
class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    findPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.postService.findById(+id);
            return res.status(200).json(response);
        });
    }
    findAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postService.getingAllPosts();
            return res.status(200).json(response);
        });
    }
    findAllFavoritesPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postService.getingAllFavoritesPosts();
            return res.status(200).json(response);
        });
    }
    creatingPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectToCreate = req.body;
            const post = new Post_1.default(objectToCreate);
            const response = yield this.postService.creatingPost(post);
            return res.status(200).json(response);
        });
    }
}
exports.default = PostController;
//# sourceMappingURL=Post.js.map