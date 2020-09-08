import { Request } from 'express'

import {
  myRecipeController,
  recipesController,
  oneRecipecontroller,
  createRecipeController,
  updateRecipeController,
  deleteRecipeController,
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
    createRecipe: (_: any, { input }: any, { req }: { req: Request }) => {
      return createRecipeController({ input }, { req })
    },
    updateRecipe: async (
      _: any,
      { input }: any,
      { req }: { req: Request }
    ): Promise<any> => {
      return updateRecipeController(input, req)
    },
    deleteRecipe: (
      _: any,
      { id }: { id: string },
      { req }: { req: Request }
    ): any => {
      return deleteRecipeController(id, { req })
    },
  },
}
