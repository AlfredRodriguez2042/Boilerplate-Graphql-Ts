import { getRepository, getConnection } from 'typeorm'
import { Recipe, Category } from '../entity'
import { isAuth } from '../Utils/Auth'
import { IRecipe } from '../interfaces'

export const myRecipeController = async (id: string): Promise<IRecipe[]> => {
  const recipe = await getRepository(Recipe).find({
    where: { author: id },
    relations: ['author', 'category'],
  })
  return recipe
}

export const recipesController = () => {
  return getRepository(Recipe).find({ relations: ['category', 'author'] })
}

export const oneRecipecontroller = (id: string) => {
  return getRepository(Recipe).findOne({
    where: { id },
    relations: ['category', 'author'],
  })
}
export const createRecipeController = async (
  { input }: any,
  { req }: any
): Promise<IRecipe> => {
  isAuth(req)
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
}
export const updateRecipeController = async (
  input: any,
  req: any
): Promise<boolean> => {
  isAuth(req)
  await getConnection()
    .createQueryBuilder()
    .update(Recipe)
    .set({
      description: input.description,
      name: input.name,
      ingredients: input.ingredients,
    })
    .where('id= :id', { id: input.id })
    .execute()
  return true
}
export const deleteRecipeController = async (
  { userId, id }: { userId: string; id: string },
  { req }: any
): Promise<boolean> => {
  isAuth(req)
  const user = await getRepository(Recipe).findOne({
    where: { author: userId },
  })
  if (!user) {
    throw new Error('usuario invalido')
  }
  console.log(user.author)

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Recipe)
    .where('id= :id', { id })
    .execute()
  return true
}
