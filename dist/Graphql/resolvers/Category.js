"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_Controller_1 = require("../../Controllers/Category.Controller");
exports.default = {
    Query: {
        getCategories: () => {
            return Category_Controller_1.getCategoriesController();
        },
        getOneCategory: (_, { input }) => {
            return Category_Controller_1.getOneCategoryController(input);
        },
    },
    Mutation: {
        createCategory: (_, { input }, { req }) => {
            return Category_Controller_1.createCategoryController({ input }, req);
        },
        updateCategory: (_, { input }, { req }) => {
            return Category_Controller_1.updateCategoryController({ input }, req);
        },
        deleteCategory: (_, { id }, { req }) => {
            return Category_Controller_1.deleteCategoryController({ id }, req);
        },
    },
};
//# sourceMappingURL=Category.js.map