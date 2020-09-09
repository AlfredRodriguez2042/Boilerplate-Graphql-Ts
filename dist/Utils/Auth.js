"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = exports.CreateSendToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_express_1 = require("apollo-server-express");
exports.CreateSendToken = (id, res) => {
    const token = jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    try {
        res.cookie('x-token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
    }
    catch (error) {
        console.log(error);
    }
    return token;
};
exports.isAuth = (req) => {
    if (!req.headers.cookie) {
        throw new apollo_server_express_1.AuthenticationError('Error, must be authenticated');
    }
};
//# sourceMappingURL=Auth.js.map