import { Request, Response } from "express";
import usersService from "../services/users.service";
import { user } from "../interfaces/user.interfaces";
import { userRead, userReturn } from "../schemas/user.shema";

const create = async (req: Request, res: Response) => {

    const user = await usersService.create(req.body)

    return res.status(201).json(userReturn.parse(user))
}

const read = async (req: Request, res: Response) => {

    const user = await usersService.read()

    console.log(user)
    return res.status(200).json(user)
}

const patch = async (req: Request, res: Response) => {

    const id = Number(req.params.id)
    const user = await usersService.patch(id, req.body)

    res.status(200).json(userReturn.parse(user))
}


const destroy = async (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const user = await usersService.destroy(id)

    res.status(204).json(user)
}

export default { create, read, patch, destroy }