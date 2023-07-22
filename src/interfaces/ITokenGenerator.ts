export interface userDefault {
  email: string;
  password: string;
  id: number;
}

export interface TokenGenerator {
  generate(user: userDefault): string
}



export interface JwtPayload {
  id: number;
  username: string
}
