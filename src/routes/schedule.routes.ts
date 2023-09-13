import { Router } from "express";
import scheduleController from "../controllers/schedule.controller";


const scheduleRoutes: Router = Router()


scheduleRoutes.post("", scheduleController.create)



export default scheduleRoutes