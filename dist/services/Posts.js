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
const posts_model_1 = __importDefault(require("../database/models/posts.model"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
class PostService {
    constructor(postModel = posts_model_1.default) {
        this.postModel = postModel;
    }
    creatingPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postObj = post.objectForUse;
            const user = yield user_model_1.default.findByPk(postObj.userId);
            if (!user)
                throw new Error('não existe user com esse id');
            const posts = yield this.postModel.findAll({
                where: {
                    isFavorite: true
                }
            });
            if (posts.length >= 2)
                throw new Error('Limite de 2 posts favoritos atingidos');
            const result = yield this.postModel.create(postObj);
            return result;
        });
    }
    getingAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.postModel.findAll();
            return result;
        });
    }
    getingAllFavoritesPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postModel.findAll({
                where: {
                    isFavorite: true
                }
            });
            return posts;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.postModel.findByPk(id);
            if (!result)
                throw new Error('não existe post com esse id');
            return result;
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=Posts.js.map