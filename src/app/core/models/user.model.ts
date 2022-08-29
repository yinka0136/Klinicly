export interface ICurrentUser {
    email: string
    id:string
    isVerified: true
    jwToken: string
    refreshToken: string
    refreshTokenExpiration: string
    roles: string[]
    tokenExpires: string
    userId: string
    userName: string
  }