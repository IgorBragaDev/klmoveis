import { Request, Response } from "express";
import schedulesService from "../services/schedules.service";

const create = async (req: Request, res: Response) => {

    console.log(res.locals.decoded.sub)
    const create = await schedulesService.create(req.body, res.locals.decoded.sub)

    return res.status(201).json({ message: "Schedule created" })
}

const read = async (req: Request, res: Response) => {

    const read = await schedulesService.read(req.params.id)

    return res.status(200).json(read)
}

export default { create, read }