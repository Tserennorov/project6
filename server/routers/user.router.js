import { Router } from "express";
import { loginController } from "../controllers/user/login.controller.js";
import { signUpController } from "../controllers/user/sign-up.controller.js";
import { checkedAuth } from "../middlewares/auth.js";
import { currencyController } from "../controllers/user/currency.controller.js";
import { balanceController } from "../controllers/user/balance.controller.js";
const userRouter = Router();

userRouter.route("/user/login").post(loginController);
userRouter.route("/user/signup").post(signUpController);

userRouter.post("/user/currency", checkedAuth, currencyController);
userRouter.post("/user/balance", checkedAuth, balanceController);

export default userRouter;
