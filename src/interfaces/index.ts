export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent: any, arg: any, context: any, info: any) => any
  }
}
