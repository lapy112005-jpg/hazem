"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message || "internal server error",
        stack: error.stack,
        cause: error.cause,
        error: error.message
    });
};
exports.globalErrorHandler = globalErrorHandler;
