"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorMiddleware {
    static handler(err, req, res, _next) {
        return res.status(500).json({ message: err.message });
    }
}
exports.default = ErrorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map