import { getRepository } from 'typeorm'
import { compare } from 'bcrypt'
import { Response, Request } from 'express'
import { CreateSendToken } from '../Utils/Auth'
import { Users } from '../entity'

export const LoginController = async (
  { input }: any,
  { req, res }: { req: Request; res: Response }
): Promise<any> => {
  const { email, password } = input

  const user = await getRepository(Users).findOne({ where: { email } })

  if (!user) {
    throw new Error('invalid email/password, try again')
  }
  const IsMatch = await compare(password, user.password)

  if (!IsMatch) {
    throw new Error('invalid email/password, try again')
  }
  const token = CreateSendToken(user.id, res)
  console.log(req.headers)
  return { token, user }
}
