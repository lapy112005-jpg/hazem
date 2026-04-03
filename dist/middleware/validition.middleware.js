"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validition = void 0;
const exceptions_1 = require("../common/exceptions");
const validition = (schema) => {
    return (req, res, next) => {
        const validitionErrors = [];
        for (const key of Object.keys(schema)) {
            if (!schema[key])
                continue;
            const validitionResult = schema[key].safeParse(req[key]);
            if (!validitionResult.success) {
                const error = validitionResult.error;
                validitionErrors.push({ key, issues: error.issues.map(issue => {
                        return { message: issue.message, path: issue.path };
                    }) });
            }
        }
        if (validitionErrors.length) {
            throw new exceptions_1.badRequestException("validition error", validitionErrors);
        }
        next();
    };
};
exports.validition = validition;
