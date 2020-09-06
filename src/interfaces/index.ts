export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent: any, arg: any, context: any, info: any) => any
  }
}

export interface IUserAuth {
  token: string
  user: object
}
export interface IToken {
  token: string
}
