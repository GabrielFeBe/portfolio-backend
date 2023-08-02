import TPostS from "../interfaces/Post";
import { z } from "zod";
import { fromZodError } from 'zod-validation-error'

class CPost implements TPostS {
  readonly projectImage: string;
  readonly repositoryLink: string;
  readonly userId: number;
  readonly projectDescription: string;
  readonly isFavorite: boolean;
  readonly title: string;
  readonly mainLanguage: string;
  readonly createdAt: Date;
  constructor(post: TPostS) {
    const schema = z.object({
      projectImage: z.string(),
      repositoryLink: z.string(),
      userId: z.number(),
      projectDescription: z.string().min(50),
      isFavorite: z.boolean(),
      title: z.string().min(6),
      mainLanguage: z.string().min(6),
      createdAt: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}$/),
    });

    const result = schema.safeParse(post)

    if (!result.success) {
      const issues = fromZodError(result.error);
      throw new Error(issues.message)

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

  get objectForUse(): TPostS {
    return {
      projectImage: this.projectImage,
      repositoryLink: this.repositoryLink,
      userId: this.userId,
      projectDescription: this.projectDescription,
      isFavorite: this.isFavorite,
      title: this.title,
      mainLanguage: this.mainLanguage,
      createdAt: this.createdAt,
    }
  }

}

export default CPost;