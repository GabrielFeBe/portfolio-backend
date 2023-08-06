"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const uploadsDirectory = path_1.default.resolve(__dirname, '../uploads');
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use('/uploads', express_1.default.static(uploadsDirectory));
        this.routes();
        this.app.get('/', (_req, res) => res.status(200).send('portfolio on'));
        this.app.use(errorMiddleware_1.default.handler);
    }
    routes() {
        this.app.use(routes_1.default);
    }
    start(PORT) {
        this.app.listen({
            port: PORT,
            host: '0.0.0.0',
        }, () => console.log(`Server is running on PORT: ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map