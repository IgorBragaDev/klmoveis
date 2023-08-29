import { Request, Response } from "express";
import usersService from "../services/users.service";
import { user } from "../interfaces/user.interfaces";
import { userReturn } from "../schemas/user.shema";

const create = async (req: Request, res: Response) => {

    const user: user[] = await usersService.create(req.body)

    return res.status(201).json(userReturn.parse(user))
}

const read = async (req: Request, res: Response) => {

    const user = await usersService.read()

    return res.status(200).json(user)
}



export default { create, read }