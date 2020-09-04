import { getRepository } from 'typeorm'
import { Recipe } from '../../entity/Recipe'

export default {
  Query: {
    Recipe: (_: any, { id }: any): any => {
      const user = getRepository(Recipe).findByIds(id)
      return user
    },
    Recipies: () => {
      return getRepository(Recipe).find()
    },
  },
  Mutation: {
    createRecipe: (_: any, { input }: any): any => {
      return getRepository(Recipe).create(input)
    },
    updateRecipe: (_: any, { input }: any): any => {
      console.log(input)
      return null
    },
    deleteRecipe: (): any => {
      return true
    },
  },
}
