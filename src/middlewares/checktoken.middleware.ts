import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.errror";
import { verify } from "jsonwebtoken";
import { usersRep } from "../repositories";

const checktoken = async (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers.authorization
    const token = header?.split(" ")[1]


    if (!token) {
        throw new AppError("Missing bearer token", 401)
    }

    const decoded: any = verify(token!, process.env.SECRET_KEY!)


    res.locals = { ...res.locals, decoded }

    next()
}


export default checktoken