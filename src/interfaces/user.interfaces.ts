import { z } from "zod";
import { sessionSchema, userSchema, userSchemaCreate } from "../schemas/user.shema";
import { DeepPartial, QueryResult } from "typeorm";
import { User } from "../entities";


type user = z.infer<typeof userSchema>
type userCreated = z.infer<typeof userSchemaCreate>
type userUptade = DeepPartial<User>
type login = z.infer<typeof sessionSchema>
type loginReturn = { token: string }
export { user, userCreated,login,loginReturn,userUptade }