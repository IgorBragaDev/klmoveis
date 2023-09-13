import { Router } from "express";
import scheduleController from "../controllers/schedule.controller";
import checkAdm from "../middlewares/checkAdm.middleware";
import checktoken from "../middlewares/checktoken.middleware";
import validate from "../middlewares/validate.middleware";
import { scheduleCreate } from "../schemas/schedule.schema";


const scheduleRoutes: Router = Router()


scheduleRoutes.post("", checktoken, validate(scheduleCreate), scheduleController.create)
scheduleRoutes.get("/realEstate/:id", checkAdm, scheduleController.read)



export default scheduleRoutes