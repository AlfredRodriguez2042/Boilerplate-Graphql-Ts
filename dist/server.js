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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.server = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./Graphql/index");
const app = express_1.default();
const path = '/graphql';
const cors = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:5000'],
};
app.use(cookie_parser_1.default());
const context = ({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
    return { req, res };
});
exports.server = new apollo_server_express_1.ApolloServer({
    schema: index_1.schema,
    tracing: process.env.NODE_ENV === 'development',
    introspection: process.env.NODE_ENV === 'development',
    context,
});
exports.server.applyMiddleware({ app, path, cors });
exports.App = app;
//# sourceMappingURL=server.js.map