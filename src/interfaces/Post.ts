

export type TPostS = {
  id?: number;
  projectImage: string;
  projectDescription: string;
  repositoryLink: string;
  userId: number;
  isFavorite: boolean;
  title: string;
  mainLanguage: string;
  createdAt: Date;
  deployLink?: string;
}
export default TPostS