import express from "express";
import { AuthController } from "../controller/auth.controller";

export const publicRouter = express.Router();
publicRouter.post('/api/auth/login', AuthController.login);
publicRouter.post('/api/auth/register', AuthController.register);
