"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationLogin = exports.validationUser = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const customError = () => {
    return new Error('Invalid password must be a number and one capital letter');
};
exports.validationUser = (user) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        username: joi_1.default.string().alphanum().min(5).max(12).required(),
        email: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
        password: joi_1.default.string()
            .min(8)
            .max(16)
            .pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
            .error(customError)
            .required(),
    });
    return schema.validate(user);
};
exports.validationLogin = (user) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
        password: joi_1.default.string().alphanum().min(8).max(16).required(),
    });
    return schema.validate(user);
};
//# sourceMappingURL=Validations.js.map