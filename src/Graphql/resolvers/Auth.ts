import { Request, Response } from 'express'
import { LoginController } from '../../Controllers/Auth.Controller'

export default {
  Mutation: {
    Login: (
      _: any,
      { input }: any,
      { req, res }: { req: Request; res: Response }
    ) => {
      return LoginController({ input }, { req, res })
    },
  },
}
