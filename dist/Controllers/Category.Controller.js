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
exports.deleteCategoryController = exports.updateCategoryController = exports.createCategoryController = exports.getOneCategoryController = exports.getCategoriesController = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const Auth_1 = require("../Utils/Auth");
exports.getCategoriesController = () => {
    return typeorm_1.getRepository(entity_1.Category).find();
};
exports.getOneCategoryController = ({ name }) => {
    return typeorm_1.getRepository(entity_1.Category).findOne({ where: { name } });
};
exports.createCategoryController = ({ input }, req) => {
    Auth_1.isAuth(req);
    const category = typeorm_1.getRepository(entity_1.Category).create(input);
    return typeorm_1.getRepository(entity_1.Category).save(category);
};
exports.updateCategoryController = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    Auth_1.isAuth(req);
    yield typeorm_1.getConnection()
        .createQueryBuilder()
        .update(entity_1.Category)
        .set({ name: input.name })
        .where('id= :id', { id: input.id })
        .execute();
    return true;
});
exports.deleteCategoryController = ({ id }, req) => __awaiter(void 0, void 0, void 0, function* () {
    Auth_1.isAuth(req);
    yield typeorm_1.getConnection()
        .createQueryBuilder()
        .delete()
        .from(entity_1.Category)
        .where('id= :id', { id })
        .execute();
    return true;
});
//# sourceMappingURL=Category.Controller.js.map