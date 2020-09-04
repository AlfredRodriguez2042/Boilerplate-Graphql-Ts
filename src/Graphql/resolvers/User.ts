import { getRepository } from 'typeorm'
import { User } from '../../entity/User'

export default {
  Query: {
    User: (_: any, { id }: any): any => {
      const user = getRepository(User).findByIds(id)
      return user
    },
    Users: () => {
      return getRepository(User).find()
    },
  },
  Mutation: {
    createUser: (_: any, { input }: any): any => {
      return getRepository(User).create(input)
    },
    updateUser: (_: any, { input }: any): any => {
      console.log(input)
      return null
    },
    deleteUser: () => {
      return true
    },
  },
}
