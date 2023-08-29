import { AppDataSource } from "./data-source";
import { User } from "./entities";

const usersRep = AppDataSource.getRepository(User)



export { usersRep }
