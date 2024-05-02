import {User} from "@prisma/client";

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
