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
const typeorm_1 = require("typeorm");
const entity_1 = require("../../entity");
exports.default = {
    Query: {
        getUser: (_, { id }) => {
            const user = typeorm_1.getRepository(entity_1.Users).findOne({
                where: { id },
                relations: ['recipe'],
            });
            return user;
        },
        getUsers: () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield typeorm_1.getRepository(entity_1.Users).find({ relations: ['recipe'] });
            return user;
        }),
    },
    Mutation: {
        signUp: (_, { input }) => {
            const user = typeorm_1.getRepository(entity_1.Users).create(input);
            return typeorm_1.getRepository(entity_1.Users).save(user);
        },
        updateUser: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(entity_1.Users)
                .set({ email: input.email })
                .where('id= :id', { id: input.id })
                .execute();
            return true;
        }),
        deleteUser: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .delete()
                .from(entity_1.Users)
                .where('id= :id', { id })
                .execute();
            return true;
        }),
    },
};
//# sourceMappingURL=User.js.map