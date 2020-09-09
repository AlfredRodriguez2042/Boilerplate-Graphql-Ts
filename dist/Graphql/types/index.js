"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const merge_graphql_schemas_ts_1 = require("merge-graphql-schemas-ts");
const typesArray = merge_graphql_schemas_ts_1.fileLoader(path_1.default.join(__dirname, './'));
const typeDefs = merge_graphql_schemas_ts_1.mergeTypes(typesArray);
exports.default = typeDefs;
//# sourceMappingURL=index.js.map