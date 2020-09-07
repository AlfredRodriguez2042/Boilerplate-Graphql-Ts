import { Request, Response } from 'express'
import {
  LoginController,
  LogoutController,
} from '../../Controllers/Auth.Controller'

export default {
  Mutation: {
    Login: (
      _: any,
      { input }: any,
      { req, res }: { req: Request; res: Response }
    ) => {
      return LoginController({ input }, { req, res })
    },
    Logout: (_: any, { input }: any, { res }: { res: Response }) => {
      return LogoutController({ input }, { res })
    },
  },
}
