"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const auth_controller_1 = require("../controller/auth.controller");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.use(auth_middleware_1.authMiddleware);
// User API
exports.apiRouter.get("/api/auth/account", auth_controller_1.AuthController.get);
exports.apiRouter.patch("/api/auth/account", auth_controller_1.AuthController.update);
exports.apiRouter.delete("/api/auth/logout", auth_controller_1.AuthController.logout);
