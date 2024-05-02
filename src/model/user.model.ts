import {EnumRole, User} from "@prisma/client";

export type UserResponse = {
    username: string;
    name: string;
    token?: string;
}

export type CreateUserRequest = {
    email: string;
    name: string;
    uniq_id: string;
    username: string;
    password: string;
    role: string;
    user_detail: {
        address: string;
        place_of_birth: string;
        date_of_birth: string;
        gender: EnumRole;
        phone_number: string;
    }
}

export type LoginUserRequest = {
    username: string;
    password: string;
}

export type UpdateUserRequest = {
    name?: string;
    password?: string;
}

export function toUserResponse(user: User): UserResponse {
    return {
        name: user.name,
        username: user.username
    }
}
