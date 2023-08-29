import { Request, Response } from "express";
import loginService from "../services/login.service";
import { login, loginReturn } from "../interfaces/user.interfaces";


const login = async (req: Request, res: Response) => {

    const query: loginReturn = await loginService.login(req.body)

    res.status(200).json(query)
}


export default { login }