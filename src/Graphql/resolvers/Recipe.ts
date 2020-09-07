import { getRepository, getConnection } from 'typeorm'
import { Recipe, Category } from '../../entity'

export default {
  Query: {
    getMyRecipe: (_: any, { id }: any): any => {
      const user = getRepository(Recipe).find({
        where: { author: id },
        relations: ['author', 'category'],
      })
      return user
    },
    getRecipes: () => {
      return getRepository(Recipe).find({ relations: ['category', 'author'] })
    },
    getOneRecipe: (_: any, { id }: any): any => {
      const user = getRepository(Recipe).findOne(id)
      return user
    },
    getCategories: () => {
      return getRepository(Category).find({ relations: ['recipe'] })
    },
  },
  Mutation: {
    createRecipe: async (_: any, { input }: any): Promise<any> => {
      const { category, ...data } = input
      const findCategory = await getRepository(Category).findOne({
        where: { name: category },
      })

      let newCategory: any

      if (!findCategory) {
        newCategory = getRepository(Category).create({ name: category })
      } else {
        newCategory = findCategory
      }

      const recipe = getRepository(Recipe).create({
        author: data.author,
        category: newCategory,
        ingredients: data.ingredients,
        description: data.description,
        name: data.name,
      })

      return getRepository(Recipe).save(recipe)
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
