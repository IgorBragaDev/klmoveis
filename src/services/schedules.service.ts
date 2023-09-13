import { date } from "zod"
import { realStateRep, scheduleRep } from "../repositories"
import { AppError } from "../errors/app.errror"

const create = async (payload: any, userId: any) => {

    const { realEstateId, ...data } = payload

    const formatDate = new Date(`${payload.date} ${payload.hour}`)
    if (formatDate.getHours() < 8 || formatDate.getHours() > 18) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    if (formatDate.getDay() === 0 || formatDate.getDay() === 6) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }



    const findTimeConflict = await scheduleRep.findOneBy({
        realEstate: realEstateId,
        date: payload.date,
        hour: payload.hour
    })

    if (findTimeConflict) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }


    const findRealState = await realStateRep.findOneBy({
        id: realEstateId
    })

    if (!findRealState) {
        throw new AppError("RealEstate not found", 404)
    }


    const create = scheduleRep.create({ ...data, realEstate: { id: realEstateId }, user: { id: userId } })

    const save = await scheduleRep.save(create)

    return create
}

const read = async (id: any) => {

    const checkRealState = await realStateRep.findOneBy({
        id: id
    })
    if (!checkRealState) {
        throw new AppError("RealEstate not found", 404)
    }

    const read = await realStateRep.find({
        where: {
            id: id

        },
        relations: {
            address: true,
            category: true,
            schedules: { user: true },

        }

    })

    return read[0]
}


export default { create, read }