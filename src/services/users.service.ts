import { AppDataSource } from "../data-source"
import{ User} from "../entities/users.entity"
import { user, userCreated } from "../interfaces/user.interfaces"
import { usersRep } from "../repositories";
import { userSchema } from "../schemas/user.shema"
import { hash } from "bcryptjs";



export const create = async (payload: any) => {

    const haskPassword = await hash(payload.password, 10)
    const userToSend = { ...payload, password: haskPassword }
    const usersRep = AppDataSource.getRepository(User)
    const createUser = usersRep.create(userToSend)
    return await usersRep.save(createUser)
}

export const read = async () => {

    const read = await usersRep.find()


    return read
}





export default { create,read }