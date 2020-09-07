import { getRepository, getConnection } from 'typeorm'
import { Category } from '../entity'
import { isAuth } from '../Utils/Auth'

export const getCategoriesController = () => {
  return getRepository(Category).find()
}

export const getOneCategoryController = ({ name }: any) => {
  return getRepository(Category).findOne({ where: { name } })
}

export const createCategoryController = ({ input }: any, req: any) => {
  isAuth(req)
  const category = getRepository(Category).create(input)
  return getRepository(Category).save(category)
}
export const updateCategoryController = async (
  { input }: any,
  req: any
): Promise<boolean> => {
  isAuth(req)
  await getConnection()
    .createQueryBuilder()
    .update(Category)
    .set({ name: input.name })
    .where('id= :id', { id: input.id })
    .execute()
  return true
}

export const deleteCategoryController = async (
  { id }: { id: string },
  req: any
) => {
  isAuth(req)
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Category)
    .where('id= :id', { id })
    .execute()
  return true
}
