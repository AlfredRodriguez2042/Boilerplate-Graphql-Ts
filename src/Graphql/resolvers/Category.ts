import { Request } from 'express'
import {
  getCategoriesController,
  getOneCategoryController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from '../../Controllers/Category.Controller'

export default {
  Query: {
    getCategories: () => {
      return getCategoriesController()
    },
    getOneCategory: (_: any, { input }: any) => {
      return getOneCategoryController(input)
    },
  },
  Mutation: {
    createCategory: (_: any, { input }: any, { req }: { req: Request }) => {
      return createCategoryController({ input }, req)
    },
    updateCategory: (_: any, { input }: any, { req }: { req: Request }) => {
      return updateCategoryController({ input }, req)
    },
    deleteCategory: (_: any, { input }: any, { req }: { req: Request }) => {
      return deleteCategoryController(input, req)
    },
  },
}
