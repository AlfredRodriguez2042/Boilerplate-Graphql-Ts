export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent: any, arg: any, context: any, info: any) => any
  }
}

export interface IToken {
  id: string
  iat: number
  exp: number
}
export interface IUser {
  id: string
  email: string
  name: string
  password: string
}
export interface IUserAuth {
  token: string
  user: IUser
}
export interface ICategory {
  name: string
}
export interface IRecipe {
  name: string
  description: string
  id: string
  author: IUser
  ingredients: string
  category: ICategory
}
