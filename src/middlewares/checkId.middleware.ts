import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/app.errror";
import { usersRep } from "../repositories";
import { verify } from "jsonwebtoken";

const checkId = async (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers.authorization
    const token = header?.split(" ")[1]


    if (!token) {
        throw new AppError("Missing bearer token", 401)
    }

    const decoded: any = verify(token!, process.env.SECRET_KEY!)


    const user = await usersRep.findOneBy({
        id: Number(req.params.id)
    })

    if (!user) {
        throw new AppError("Insufficient permission", 404)
    }


    next()
}


export default checkId