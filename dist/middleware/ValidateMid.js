"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validate {
    static validatePost(req, res, next) {
        const post = req.body;
        const requiredKeys = [
            'projectImage',
            'projectDescription',
            'repositoryLink',
            'userId'
        ];
        const notFoundKey = requiredKeys.find((key) => !(key in post));
        if (notFoundKey) {
            throw new Error(`${notFoundKey} is required`);
        }
        next();
    }
}
exports.default = Validate;
//# sourceMappingURL=ValidateMid.js.map