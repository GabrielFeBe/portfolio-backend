export interface UserDefault {
  email: string;
  password: string;
  id: number;
}

export interface TokenGenerator {
  generate(user: UserDefault): string
}



export interface JwtPayload {
  id: number;
  username: string
}
