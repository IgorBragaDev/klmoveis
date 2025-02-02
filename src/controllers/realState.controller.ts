import { Request, Response } from "express";
import realStateService from "../services/realState.service";

const create = async (req: Request, res: Response) => {

    const create = await realStateService.create(req.body)

    return res.status(201).json(create)
}

const read = async (req: Request, res: Response) => {

    const read = await realStateService.read()

    console.log(read)
    res.status(200).json(read)
}

export default { create, read }