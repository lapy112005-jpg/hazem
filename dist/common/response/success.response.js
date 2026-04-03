"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sucessResponse = void 0;
const sucessResponse = ({ res, message = "sucess", data, status = 200 }) => {
    return res.status(status).json({ message, data });
};
exports.sucessResponse = sucessResponse;
