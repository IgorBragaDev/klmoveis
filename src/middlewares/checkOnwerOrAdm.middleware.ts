import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.errror";
import { verify } from "jsonwebtoken";
import { usersRep } from "../repositories";

const checkOnwerOrAdm = async (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers.authorization
    const token = header?.split(" ")[1]
    const checkid = await usersRep.findOneBy({
        id: Number(req.params.id)
    })
    if (!checkid) {
        throw new AppError("User not found", 404)
    }


    if (!token) {
        throw new AppError("Missing bearer token", 401)
    }

    const decoded: any = verify(token!, process.env.SECRET_KEY!)

    if(req.params.id == decoded.sub){
        return next()
    }

    if (decoded.admin == false) {
        throw new AppError("Insufficient permission", 403)
    }


    next()
}


export default checkOnwerOrAdm