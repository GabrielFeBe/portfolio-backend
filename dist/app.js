"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.routes();
        this.app.get('/', (_req, res) => res.status(200).send('portfolio on'));
        this.app.use(errorMiddleware_1.default.handler);
    }
    routes() {
        this.app.use(routes_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map