import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, User } from "./entities";

const usersRep = AppDataSource.getRepository(User)
const categoryRep = AppDataSource.getRepository(Category)
const realStateRep = AppDataSource.getRepository(RealEstate)
const addressRep = AppDataSource.getRepository(Address)


export { usersRep, categoryRep, realStateRep,addressRep }
