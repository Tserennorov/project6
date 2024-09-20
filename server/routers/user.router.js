import { Router } from "express";
import { loginController } from "../controllers/user/login.controller.js";
import { signUpController } from "../controllers/user/sign-up.controller.js";
const userRouter = Router();

userRouter.route("/user/login").post(loginController);
userRouter.route("/user/signup").post(signUpController);

export default userRouter;
