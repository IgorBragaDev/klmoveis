import { scheduleRep } from "../repositories"

const create = async (payload: any) => {

    const create = scheduleRep.create(payload)

    const save = await scheduleRep.save(create)

    return create
}



export default {create}