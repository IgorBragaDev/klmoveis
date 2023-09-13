import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";

const usersRep = AppDataSource.getRepository(User)
const categoryRep = AppDataSource.getRepository(Category)
const realStateRep = AppDataSource.getRepository(RealEstate)
const addressRep = AppDataSource.getRepository(Address)
const scheduleRep = AppDataSource.getRepository(Schedule)


export { usersRep, categoryRep, realStateRep, addressRep, scheduleRep }
