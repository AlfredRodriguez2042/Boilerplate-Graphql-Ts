import { getRepository, getConnection } from 'typeorm'
import { Users } from '../../entity'

export default {
  Query: {
    getUser: (_: any, { id }: any): any => {
      const user = getRepository(Users).findOne({
        where: { id },
        relations: ['recipe'],
      })

      return user
    },
    getUsers: async () => {
      const user = await getRepository(Users).find({ relations: ['recipe'] })
      return user
    },
  },
  Mutation: {
    signUp: (_: any, { input }: any): any => {
      const user = getRepository(Users).create(input)
      return getRepository(Users).save(user)
    },
    updateUser: async (_: any, { input }: any): Promise<any> => {
      await getConnection()
        .createQueryBuilder()
        .update(Users)
        .set({ email: input.email })
        .where('id= :id', { id: input.id })
        .execute()

      return true
    },
    deleteUser: async (_: any, { id }: any): Promise<any> => {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where('id= :id', { id })
        .execute()
      return true
    },
  },
}
