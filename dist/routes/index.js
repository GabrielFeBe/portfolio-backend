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
const express_1 = require("express");
const Post_1 = __importDefault(require("../controllers/Post"));
const Posts_1 = __importDefault(require("../services/Posts"));
const ValidateMid_1 = __importDefault(require("../middleware/ValidateMid"));
const postService = new Posts_1.default();
const postController = new Post_1.default(postService);
const router = (0, express_1.Router)();
router.get('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.findPostById(req, res); }));
router.get('/posts', ((req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.findAllPosts(req, res); })));
router.post('/posts', ValidateMid_1.default.validatePost, ((req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.creatingPost(req, res); })));
// router.use('/posts/:id', (async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const postsByUser = await UserModel.findByPk(1, {
//     include: [{
//       model: ProductModel,
//       as: 'posts'
//     }]
//   })
//   res.send({ postsByUser });
// }))
exports.default = router;
//# sourceMappingURL=index.js.map