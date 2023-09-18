import { z } from "zod";
import { sessionSchema, userReturn, userSchema, userSchemaCreate } from "../schemas/user.shema";
import { DeepPartial, QueryResult } from "typeorm";
import { User } from "../entities";


type user = z.infer<typeof userSchema>
type userToCreated = z.infer<typeof userSchemaCreate>
type userCreate = Partial<userToCreated>
type userUptade = DeepPartial<User>
type userReturn = z.infer<typeof userReturn>
type login = z.infer<typeof sessionSchema>
type loginReturn = { token: string }
export { user, userToCreated, login, loginReturn, userUptade, userCreate, userReturn }