import { AppError } from "../errors/app.errror"
import { addressRep, categoryRep, realStateRep } from "../repositories"



const create = async (payload: any) => {

    const { address, categoryId, ...data } = payload
    const checkAdress = await addressRep.findOneBy({
        street: address.street,
        number: address.number
    })
    if (checkAdress) {
        throw new AppError("Address already exists", 409)
    }
    const createAddress = addressRep.create(payload.address)
    const saveAddress = await addressRep.save(createAddress)
    const category = await categoryRep.findOneBy({
        id: categoryId
    })

    const create = realStateRep.create({ ...data, address: saveAddress, category: category })

    const save = await realStateRep.save(create)

    return save

}

const read = async () => {

    const read = await realStateRep.find({ relations: { address: true } })

    
    return read
}


export default { create, read }