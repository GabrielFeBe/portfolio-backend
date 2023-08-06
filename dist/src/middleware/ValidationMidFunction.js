"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateMidFunctions {
    static notFoundKey(requiredKeys, post) {
        const keys = requiredKeys.find((key) => !(key in post));
        if (keys) {
            throw new Error(`${keys} is required`);
        }
    }
}
exports.default = ValidateMidFunctions;
//# sourceMappingURL=ValidationMidFunction.js.map