import { Router } from "express";
import categoryController from "../controllers/category.controller";
import validate from "../middlewares/validate.middleware";
import { categorieCreate } from "../schemas/category.schema";
import checkAdm from "../middlewares/checkAdm.middleware";

const categoryRoutes: Router = Router()


categoryRoutes.post("", checkAdm, validate(categorieCreate), categoryController.create)
categoryRoutes.get("", categoryController.read)


export default categoryRoutes