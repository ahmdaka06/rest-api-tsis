import {z, ZodType} from "zod";

export class UserValidation {

    static readonly REGISTER: ZodType = z.object({
        name: z.string().min(1).max(100),
        email: z.string().email(),
        uniq_id: z.string().min(1).max(100),
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100),
        user_detail: z.object({
            address: z.string().min(1).max(100),
            place_of_birth: z.string().min(1).max(100),
            date_of_birth: z.string().min(1).max(100),
            phone_number: z.string().min(1).max(100),
            gender: z.string().min(1).max(100)
        })
    });

    static readonly LOGIN: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    });

    static readonly UPDATE: ZodType = z.object({
        password: z.string().min(1).max(100).optional(),
        name: z.string().min(1).max(100).optional()
    });

}
