import { Response } from "express";
import { AppDataSource } from "../data-source"
import { User } from "../entities/users.entity"
import { AppError } from "../errors/app.errror";
import { user, userCreated, userUptade } from "../interfaces/user.interfaces"
import { usersRep } from "../repositories";
import { userRead, userReturn, userSchema } from "../schemas/user.shema"
import { hash } from "bcryptjs";



export const create = async (payload: any) => {

    const createUser = usersRep.create(payload)
    return await usersRep.save(createUser)
}

export const read = async () => {

    const read = await usersRep.find()


    return userRead.parse(read)
}

export const patch = async (id: number, payload: userUptade) => {

    const user = await usersRep.findOneBy({
        id: id
    })
    if (!user) {
        throw new AppError("User not found", 404)
    }


    // payload.uptadedAt = new Date()


    const patch = await usersRep.save({ ...user, ...payload })

    return patch
}

export const destroy = async (id: number) => {

    const checkid = await usersRep.findOneBy({
        id: id
    })
    if (!checkid) {
        throw new AppError("User not found", 404)
    }

    const user = await usersRep.softDelete({
        id: id
    })

    return user
}





export default { create, read, patch, destroy }