"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zod_validation_error_1 = require("zod-validation-error");
class CPost {
    constructor(post) {
        const schema = zod_1.z.object({
            projectImage: zod_1.z.string(),
            repositoryLink: zod_1.z.string(),
            userId: zod_1.z.number(),
            projectDescription: zod_1.z.string().min(50),
            isFavorite: zod_1.z.boolean(),
            title: zod_1.z.string().min(6),
            mainLanguage: zod_1.z.string().min(6),
            createdAt: zod_1.z
                .string()
                .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}$/),
        });
        const result = schema.safeParse(post);
        if (!result.success) {
            const issues = (0, zod_validation_error_1.fromZodError)(result.error);
            throw new Error(issues.message);
        }
        this.projectImage = post.projectImage;
        this.repositoryLink = post.repositoryLink;
        this.userId = post.userId;
        this.projectDescription = post.projectDescription;
        this.isFavorite = post.isFavorite;
        this.title = post.title;
        this.mainLanguage = post.mainLanguage;
        this.createdAt = post.createdAt;
    }
    get objectForUse() {
        return {
            projectImage: this.projectImage,
            repositoryLink: this.repositoryLink,
            userId: this.userId,
            projectDescription: this.projectDescription,
            isFavorite: this.isFavorite,
            title: this.title,
            mainLanguage: this.mainLanguage,
            createdAt: this.createdAt,
        };
    }
}
exports.default = CPost;
//# sourceMappingURL=Post.js.map