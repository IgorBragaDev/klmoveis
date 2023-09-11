import { Router } from "express";
import userController from "../controllers/user.controller";
import validate from "../middlewares/validate.middleware";
import { userSchemaCreate, userUpdateSchema } from "../schemas/user.shema";
import checkName from "../middlewares/checkName.middleware";
import checkAdm from "../middlewares/checkAdm.middleware";
import checkOnwerOrAdm from "../middlewares/checkOnwerOrAdm.middleware";


const userRouter: Router = Router()



userRouter.post("", validate(userSchemaCreate), checkName, userController.create)
userRouter.get("", checkAdm, userController.read)
userRouter.patch("/:id", validate(userUpdateSchema), checkOnwerOrAdm, userController.patch)
userRouter.delete("/:id", checkAdm, userController.destroy)




export default userRouter