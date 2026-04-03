"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflictException = exports.badRequestException = exports.notFoundException = exports.ApplicationExptions = void 0;
class ApplicationExptions extends Error {
    statusCode;
    constructor(message, statusCode, cause) {
        super(message, { cause });
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ApplicationExptions = ApplicationExptions;
class notFoundException extends ApplicationExptions {
    constructor(message, cause) {
        super(message, 404, { cause });
    }
}
exports.notFoundException = notFoundException;
class badRequestException extends ApplicationExptions {
    constructor(message, cause) {
        super(message, 400, { cause });
    }
}
exports.badRequestException = badRequestException;
class conflictException extends ApplicationExptions {
    constructor(message, cause) {
        super(message, 409, { cause });
    }
}
exports.conflictException = conflictException;
