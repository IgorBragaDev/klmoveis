import { compare } from "bcryptjs"
import { AppError } from "../errors/app.errror"
import { usersRep } from "../repositories"
import { sign } from "jsonwebtoken"
import { User } from "../entities"
import { login, loginReturn } from "../interfaces/user.interfaces"



const login = async (payload: login): Promise<loginReturn> => {

    const login: User | null = await usersRep.findOneBy({
        email: payload.email
    })


    if (!login) {
        throw new AppError("Invalid credentials", 401)

    }

    const comparePassword: boolean = await compare(payload.password, login.password)

    if (!comparePassword) {
        throw new AppError("Invalid credentials", 401)

    }

    const token: string = sign({ email: login.email, admin: login.admin },
        process.env.SECRET_KEY!,
        { subject: login.id.toString(), expiresIn: process.env.EXPIRES_IN! }

    )
    return { token }
}


export default { login }