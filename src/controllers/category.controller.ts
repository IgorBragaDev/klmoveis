import { Request, Response } from "express";
import categoriesService from "../services/categories.service";

const create = async (req: Request, res: Response) => {

    const create = await categoriesService.create(req.body)

    return res.status(201).json(create)
}

const read = async (req: Request, res: Response) => {

    const read = await categoriesService.read()

    return res.status(200).json(read)
}


export default { create, read }