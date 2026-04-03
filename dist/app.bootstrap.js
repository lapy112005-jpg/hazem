"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = require("./modules/index");
const cors_1 = __importDefault(require("cors"));
const middleware_1 = require("./middleware");
const connection_db_1 = require("./DB/connection.db");
const config_1 = require("./config/config");
const redis_connection_1 = require("./DB/redis.connection");
const bootstrap = async () => {
    const app = (0, express_1.default)();
    await (0, connection_db_1.connectDB)();
    await (0, redis_connection_1.redisConnection)();
    app.use((0, cors_1.default)(), express_1.default.json());
    app.get("/", (req, res, next) => {
        res.json({ message: "hhhhh" });
    });
    app.use("/auth", index_1.authRouter);
    app.use(middleware_1.globalErrorHandler);
    app.listen(config_1.PORT, () => {
        console.log("server is running port ..... ", config_1.PORT);
    });
};
exports.bootstrap = bootstrap;
