"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recipe_Controller_1 = require("../../Controllers/Recipe.Controller");
exports.default = {
    Query: {
        getMyRecipe: (_, { id }) => {
            return Recipe_Controller_1.myRecipeController(id);
        },
        getRecipes: () => {
            return Recipe_Controller_1.recipesController();
        },
        getOneRecipe: (_, { id }) => {
            return Recipe_Controller_1.oneRecipecontroller(id);
        },
    },
    Mutation: {
        createRecipe: (_, { input }, { req }) => {
            return Recipe_Controller_1.createRecipeController({ input }, { req });
        },
        updateRecipe: (_, { input }, { req }) => __awaiter(void 0, void 0, void 0, function* () {
            return Recipe_Controller_1.updateRecipeController(input, req);
        }),
        deleteRecipe: (_, { id, userId }, { req }) => {
            return Recipe_Controller_1.deleteRecipeController({ userId, id }, { req });
        },
    },
};
//# sourceMappingURL=Recipe.js.map