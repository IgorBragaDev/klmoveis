import { Request, Response } from "express";
import schedulesService from "../services/schedules.service";

const create = async (req: Request, res: Response) => {

    const create = await schedulesService.create(req.body)

    return res.status(201).json(create)
}

export default { create }