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
const express_1 = __importDefault(require("express"));
const user_model_1 = __importDefault(require("./database/models/user.model"));
const posts_model_1 = __importDefault(require("./database/models/posts.model"));
// import router from './routes'
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        // this.routes()
        this.app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const postsByUser = yield user_model_1.default.findByPk(1, {
                include: [{
                        model: posts_model_1.default,
                        as: 'posts'
                    }]
            });
            res.send({ postsByUser });
        }));
    }
    // private routes(): void {
    //   this.app.use(router)
    // }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map