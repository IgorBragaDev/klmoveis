import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/app.errror";

const checkName = async (req: Request, res: Response, next: NextFunction) => {


    const usersRep = AppDataSource.getRepository(User)

    const user = await usersRep.findOneBy({
        email: req.body.email
    })

    if (user) {
        throw new AppError("email already exists")
    }


    next()
}


export default checkName