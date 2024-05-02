"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
class UserValidation {
}
exports.UserValidation = UserValidation;
UserValidation.REGISTER = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    email: zod_1.z.string().email(),
    uniq_id: zod_1.z.string().min(1).max(100),
    username: zod_1.z.string().min(1).max(100),
    password: zod_1.z.string().min(1).max(100),
    user_detail: zod_1.z.object({
        address: zod_1.z.string().min(1).max(100),
        place_of_birth: zod_1.z.string().min(1).max(100),
        date_of_birth: zod_1.z.string().min(1).max(100),
        phone_number: zod_1.z.string().min(1).max(100),
        gender: zod_1.z.string().min(1).max(100)
    })
});
UserValidation.LOGIN = zod_1.z.object({
    username: zod_1.z.string().min(1).max(100),
    password: zod_1.z.string().min(1).max(100)
});
UserValidation.UPDATE = zod_1.z.object({
    password: zod_1.z.string().min(1).max(100).optional(),
    name: zod_1.z.string().min(1).max(100).optional()
});
