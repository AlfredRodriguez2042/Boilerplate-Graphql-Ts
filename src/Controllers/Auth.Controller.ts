import { getRepository } from 'typeorm'
import { compare } from 'bcrypt'
import { Response } from 'express'
import { CreateSendToken } from '../Utils/Auth'
import { validationLogin } from '../Utils/Validations'
import { Users } from '../entity'

export const LoginController = async (
  { input }: any,
  { res, req }: { req: any; res: Response }
): Promise<any> => {
  const { error } = validationLogin(input)
  if (error) {
    throw new Error(`${error.message}`)
  }
  const { email, password } = input

  const user = await getRepository(Users).findOne({ where: { email } })

  if (!user) {
    throw new Error('invalid email/password, try again')
  }
  const IsMatch = await compare(password, user.password)

  if (!IsMatch) {
    throw new Error('invalid email/password, try again')
  }
  req.userId = user.id
  const token = CreateSendToken(user.id, res)

  return { token, user }
}
export const LogoutController = (
  { input }: any,
  { res }: { res: Response }
) => {
  console.log(input)
  res.cookie('x-token', 'logout...', {
    httpOnly: true,
    expires: new Date(Date.now() + 1),
  })
  return true
}
