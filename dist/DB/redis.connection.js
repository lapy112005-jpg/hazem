"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnection = exports.redisClient = void 0;
const redis_1 = require("redis");
const config_1 = require("../config/config");
exports.redisClient = (0, redis_1.createClient)({
    url: config_1.REDIS_URL
});
console.log(config_1.REDIS_URL);
const redisConnection = async () => {
    try {
        await exports.redisClient.connect();
        console.log("redis connected succeffuly");
    }
    catch (error) {
        console.log("fail to connect with redis", error);
        console.log(config_1.REDIS_URL);
    }
};
exports.redisConnection = redisConnection;
