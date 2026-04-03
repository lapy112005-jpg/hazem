"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_service_1 = __importDefault(require("./auth.service"));
const success_response_1 = require("../../common/response/success.response");
const auth_validition_1 = require("./auth.validition");
const validition_middleware_1 = require("../../middleware/validition.middleware");
const router = (0, express_1.Router)();
router.post("/signup", (0, validition_middleware_1.validition)(auth_validition_1.signup_schema), async (req, res, next) => {
    const result = await auth_service_1.default.signup(req.body);
    (0, success_response_1.sucessResponse)({ res, data: result });
});
router.post("/login", (0, validition_middleware_1.validition)(auth_validition_1.login_schema), async (req, res, next) => {
    const result = await auth_service_1.default.login(req.body);
    (0, success_response_1.sucessResponse)({ res, data: result, status: 201 });
});
exports.default = router;
