import { Router } from "express";
import loginController from "../controllers/login.controller";


const loginRouter: Router = Router()



loginRouter.post("", loginController.login)



export default loginRouter