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
const User_1 = __importDefault(require("../controllers/User"));
const multer_1 = require("../config/multer");
// import { pipeline } from 'stream'
// import { promisify } from 'util'
// import { resolve } from "path";
// import { createReadStream, createWriteStream } from "fs";
// const pump = promisify(pipeline)
const multer_2 = __importDefault(require("multer"));
const TokenMiddleware_1 = __importDefault(require("../middleware/TokenMiddleware"));
const User_2 = __importDefault(require("../services/User"));
const TokenGeneratorJwt_1 = __importDefault(require("../services/TokenGeneratorJwt"));
const EncrypterBcrypt_1 = __importDefault(require("../services/EncrypterBcrypt"));
const postService = new Posts_1.default();
const postController = new Post_1.default(postService);
const tokenGenerator = new TokenGeneratorJwt_1.default();
const encrypter = new EncrypterBcrypt_1.default();
const userService = new User_2.default(encrypter, tokenGenerator);
const userController = new User_1.default(userService);
const router = (0, express_1.Router)();
router.get('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.findPostById(req, res); }));
router.get('/posts', ((req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.findAllPosts(req, res); })));
router.get('/favorites', ((req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.findAllFavoritesPosts(req, res); })));
router.post('/posts', TokenMiddleware_1.default.decoder, ValidateMid_1.default.validatePost, ((req, res) => __awaiter(void 0, void 0, void 0, function* () { return postController.creatingPost(req, res); })));
router.post('/user/login', ValidateMid_1.default.validateUser, ((req, res) => __awaiter(void 0, void 0, void 0, function* () { return userController.login(req, res); })));
router.post('/upload', (0, multer_2.default)(multer_1.multerConfig).single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (file) {
        const host = req.get('host');
        const fullUrl = req.protocol.concat('://').concat(host);
        const fileUrl = new URL(`/uploads/${file.filename}`, fullUrl).toString();
        return res.status(200).json(fileUrl);
    }
    return res.status(500).json({ message: 'something went wrong' });
}));
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