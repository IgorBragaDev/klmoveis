import { AppError } from "../errors/app.errror"
import { categoryRep } from "../repositories"

const create = async (payload: any) => {

    const checkName = await categoryRep.findOneBy({
        name: payload.name
    })
    if (checkName) {
        throw new AppError("Category already exists", 409)
    }
    const Category = categoryRep.create(payload)

    const createCategory = await categoryRep.save(Category)

    return createCategory
}

const read = async () => {

    const read = await categoryRep.find()


    return read
}


export default { create,read }