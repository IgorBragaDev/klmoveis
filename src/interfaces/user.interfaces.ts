import { z } from "zod";
import { sessionSchema, userSchema, userSchemaCreate } from "../schemas/user.shema";
import { QueryResult } from "typeorm";


type user = z.infer<typeof userSchema>
type userCreated = z.infer<typeof userSchemaCreate>

type login = z.infer<typeof sessionSchema>
type loginReturn = { token: string }
export { user, userCreated,login,loginReturn }