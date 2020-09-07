import jwt from 'jsonwebtoken'
import { Response, Request } from 'express'
import { AuthenticationError } from 'apollo-server-express'

export const CreateSendToken = (id: string, res: Response): string => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
  })

  try {
    res.cookie('x-token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })
  } catch (error) {
    console.log(error)
  }
  return token
}
export const isAuth = (req: Request) => {
  if (!req.headers.cookie) {
    throw new AuthenticationError('Error, must be authenticated')
  }
}
