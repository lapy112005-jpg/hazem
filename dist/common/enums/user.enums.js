"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleEnum = exports.genderEnum = void 0;
var genderEnum;
(function (genderEnum) {
    genderEnum[genderEnum["male"] = 0] = "male";
    genderEnum[genderEnum["female"] = 1] = "female";
})(genderEnum || (exports.genderEnum = genderEnum = {}));
var roleEnum;
(function (roleEnum) {
    roleEnum[roleEnum["admin"] = 0] = "admin";
    roleEnum[roleEnum["user"] = 1] = "user";
})(roleEnum || (exports.roleEnum = roleEnum = {}));
