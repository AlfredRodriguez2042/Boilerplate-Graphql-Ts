import { getConnection } from 'typeorm'
import { Request } from 'express'
import { Recipe } from '../../entity'
import {
  myRecipeController,
  recipesController,
  oneRecipecontroller,
  createRecipeController,
} from '../../Controllers/Recipe.Controller'

export default {
  Query: {
    getMyRecipe: (_: any, { id }: { id: string }): any => {
      return myRecipeController(id)
    },
    getRecipes: () => {
      return recipesController()
    },
    getOneRecipe: (_: any, { id }: { id: string }): any => {
      return oneRecipecontroller(id)
    },
  },
  Mutation: {
    createRecipe: async (
      _: any,
      { input }: any,
      { req }: { req: Request }
    ): Promise<any> => {
      return createRecipeController({ input })
    },
    updateRecipe: async (_: any, { input }: any): Promise<any> => {
      await getConnection()
        .createQueryBuilder()
        .update(Recipe)
        .set({
          ingredients: input.ingredients,
          description: input.description,
          name: input.name,
        })
        .where('id= :id', { id: input.id })
        .execute()
      return true
    },
    deleteRecipe: (): any => {
      return true
    },
  },
}
