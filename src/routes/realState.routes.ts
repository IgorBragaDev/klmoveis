import { Router } from "express";
import realStateController from "../controllers/realState.controller";
import validate from "../middlewares/validate.middleware";
import { realStateCreate, realStateSchema } from "../schemas/realState.Schema";
import checkAdm from "../middlewares/checkAdm.middleware";

const realStateRoutes: Router = Router()



realStateRoutes.post("", checkAdm, validate(realStateCreate), realStateController.create)
realStateRoutes.get("", realStateController.read)



export default realStateRoutes