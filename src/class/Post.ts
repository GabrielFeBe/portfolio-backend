import TPostS from "../interfaces/Post";
import { z } from "zod";
import { fromZodError } from 'zod-validation-error'

class CPost implements TPostS {
  readonly projectImage: string;
  readonly repositoryLink: string;
  readonly userId: number;
  readonly projectDescription: string;
  constructor(post: TPostS) {
    const schema = z.object({
      projectImage: z.string(),
      repositoryLink: z.string(),
      userId: z.number(),
      projectDescription: z.string().min(50),
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
  }

  get objectForUse(): TPostS {
    return {
      projectImage: this.projectImage,
      repositoryLink: this.repositoryLink,
      userId: this.userId,
      projectDescription: this.projectDescription,
    }
  }

}

export default CPost;