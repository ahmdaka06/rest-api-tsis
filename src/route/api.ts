import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { AuthController } from "../controller/auth.controller";

export const apiRouter = express.Router();
apiRouter.use(authMiddleware);

// User API
apiRouter.get("/api/auth/account", AuthController.get);
apiRouter.patch("/api/auth/account", AuthController.update);
apiRouter.delete("/api/auth/logout", AuthController.logout);