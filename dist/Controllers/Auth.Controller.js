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
exports.LogoutController = exports.LoginController = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const Auth_1 = require("../Utils/Auth");
const Validations_1 = require("../Utils/Validations");
const entity_1 = require("../entity");
exports.LoginController = ({ input }, { res, req }) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = Validations_1.validationLogin(input);
    if (error) {
        throw new Error(`${error.message}`);
    }
    const { email, password } = input;
    const user = yield typeorm_1.getRepository(entity_1.Users).findOne({ where: { email } });
    if (!user) {
        throw new Error('invalid email/password, try again');
    }
    const IsMatch = yield bcrypt_1.compare(password, user.password);
    if (!IsMatch) {
        throw new Error('invalid email/password, try again');
    }
    req.userId = user.id;
    const token = Auth_1.CreateSendToken(user.id, res);
    return { token, user };
});
exports.LogoutController = ({ input }, { res }) => {
    console.log(input);
    res.cookie('x-token', 'logout...', {
        httpOnly: true,
        expires: new Date(Date.now() + 1),
    });
    return true;
};
//# sourceMappingURL=Auth.Controller.js.map