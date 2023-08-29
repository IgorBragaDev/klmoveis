import { z } from "zod"

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().max(45),
    password: z.string(),
    admin: z.boolean().optional(),
    createdAt: z.date(),
    uptadedAt: z.date(),
    deletedAt: z.date()
})


const userSchemaCreate = userSchema.omit({ id: true, createdAt: true, uptadedAt: true, deletedAt: true })
const userReturn = userSchema.omit({ password: true, deletedAt: true })

const sessionSchema = userSchema.pick({ email: true, password: true })





export { userSchema, userSchemaCreate, userReturn,sessionSchema }