"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup_schema = exports.login_schema = void 0;
const zod_1 = require("zod");
exports.login_schema = {
    body: zod_1.z.strictObject({
        email: zod_1.z.email(),
        password: zod_1.z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: "password must be at least 8 characters and contain at least 1 letter and 1 digit" }),
    })
};
exports.signup_schema = {
    body: exports.login_schema.body.extend({
        username: zod_1.z.string().min(3).max(20),
        confirmPassword: zod_1.z.string()
    }).refine((data) => {
        return data.password === data.confirmPassword;
    }, {
        error: "password mismatch confirm paswword"
    })
};
