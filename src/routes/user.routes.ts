import { Router } from "express";
import userController from "../controllers/user.controller";
import validate from "../middlewares/validate.middleware";
import { userSchemaCreate } from "../schemas/user.shema";
import checkName from "../middlewares/checkName.middleware";


const userRouter: Router = Router()



userRouter.post("", validate(userSchemaCreate), checkName, userController.create)
userRouter.get("", userController.read)




export default userRouter