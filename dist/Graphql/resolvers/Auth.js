"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_Controller_1 = require("../../Controllers/Auth.Controller");
exports.default = {
    Mutation: {
        Login: (_, { input }, { req, res }) => {
            return Auth_Controller_1.LoginController({ input }, { req, res });
        },
        Logout: (_, { input }, { res }) => {
            return Auth_Controller_1.LogoutController({ input }, { res });
        },
    },
};
//# sourceMappingURL=Auth.js.map