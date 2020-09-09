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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipeController = exports.updateRecipeController = exports.createRecipeController = exports.oneRecipecontroller = exports.recipesController = exports.myRecipeController = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const Auth_1 = require("../Utils/Auth");
exports.myRecipeController = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = yield typeorm_1.getRepository(entity_1.Recipe).find({
        where: { author: id },
        relations: ['author', 'category'],
    });
    return recipe;
});
exports.recipesController = () => {
    return typeorm_1.getRepository(entity_1.Recipe).find({ relations: ['category', 'author'] });
};
exports.oneRecipecontroller = (id) => {
    return typeorm_1.getRepository(entity_1.Recipe).findOne({
        where: { id },
        relations: ['category', 'author'],
    });
};
exports.createRecipeController = ({ input }, { req }) => __awaiter(void 0, void 0, void 0, function* () {
    Auth_1.isAuth(req);
    const { category } = input, data = __rest(input, ["category"]);
    const findCategory = yield typeorm_1.getRepository(entity_1.Category).findOne({
        where: { name: category },
    });
    let newCategory;
    if (!findCategory) {
        newCategory = typeorm_1.getRepository(entity_1.Category).create({ name: category });
    }
    else {
        newCategory = findCategory;
    }
    const recipe = typeorm_1.getRepository(entity_1.Recipe).create({
        author: data.author,
        category: newCategory,
        ingredients: data.ingredients,
        description: data.description,
        name: data.name,
    });
    return typeorm_1.getRepository(entity_1.Recipe).save(recipe);
});
exports.updateRecipeController = (input, req) => __awaiter(void 0, void 0, void 0, function* () {
    Auth_1.isAuth(req);
    yield typeorm_1.getConnection()
        .createQueryBuilder()
        .update(entity_1.Recipe)
        .set({
        description: input.description,
        name: input.name,
        ingredients: input.ingredients,
    })
        .where('id= :id', { id: input.id })
        .execute();
    return true;
});
exports.deleteRecipeController = ({ userId, id }, { req }) => __awaiter(void 0, void 0, void 0, function* () {
    Auth_1.isAuth(req);
    const user = yield typeorm_1.getRepository(entity_1.Recipe).findOne({
        where: { author: userId },
    });
    if (!user) {
        throw new Error('usuario invalido');
    }
    console.log(user.author);
    yield typeorm_1.getConnection()
        .createQueryBuilder()
        .delete()
        .from(entity_1.Recipe)
        .where('id= :id', { id })
        .execute();
    return true;
});
//# sourceMappingURL=Recipe.Controller.js.map