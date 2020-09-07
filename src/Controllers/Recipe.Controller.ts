import { getRepository, getConnection } from 'typeorm'
import { Recipe, Category } from '../entity'

export const myRecipeController = (id: string) => {
  const user = getRepository(Recipe).find({
    where: { author: id },
    relations: ['author', 'category'],
  })
  return user
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
export const createRecipeController = (input: any) => {
  const { category, ...data } = input
  const findCategory = getRepository(Category).findOne({
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
export const updateRecipeController = async (input: any) => {
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
