import express from "express";
const authRouter = express.Router();
import userController from "../controllers/auth_controller.js";

authRouter.route("/register").post(userController.register);
authRouter.route("/users").get(userController.allUsers);
authRouter.route("/login").post(userController.login);

export default authRouter;