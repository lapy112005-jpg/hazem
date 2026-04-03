"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../../common/exceptions");
const model_1 = require("../../DB/model");
const redis_connection_1 = require("../../DB/redis.connection");
const user_repository_1 = require("../../DB/repository/user.repository");
class AuthServices {
    userRepository;
    constructor() {
        this.userRepository = new user_repository_1.UserRepository(model_1.userModel);
    }
    signup = async (data) => {
        const { email, password, username, confirmPassword } = data;
        const [user] = await this.userRepository.create({ data: [{ email, password, username, confirmPassword }] }) || [];
        if (!user) {
            throw new exceptions_1.badRequestException("fail to add user in database");
        }
        return user.toJSON();
    };
    login = async (data) => {
        const { email, password } = data;
        const user = await this.userRepository.findOne({ filter: { email, password } });
        return user;
    };
    confirmEmail = async ({ email, otp }) => {
        const user = await this.userRepository.findOne({ filter: { email } });
        if (!user) {
            throw new exceptions_1.badRequestException("wrong email");
        }
        const hashed_OTP_in_radis = await redis_connection_1.redisClient.get(`signup_otp:${email}`);
        if (!hashed_OTP_in_radis) {
            throw new Error("otp expired");
        }
        if () {
        }
        return user;
    };
}
exports.default = new AuthServices();
