import { z } from "zod"

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(125),
    admin: z.boolean().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.date().nullish()
})



const userSchemaCreate = userSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
const userReturn = userSchema.omit({ password: true })
const userRead = userReturn.array()

const sessionSchema = userSchema.pick({ email: true, password: true })

const userUpdateSchema = userSchema.omit({ id: true, admin: true }).partial()



export { userSchema, userSchemaCreate, userReturn, sessionSchema, userUpdateSchema,userRead }