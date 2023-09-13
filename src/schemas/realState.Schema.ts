import { z } from "zod"

const address = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().int().positive(),
    city: z.string().max(20),
    state: z.string().max(2)
})
const realStateSchema = z.object({
    id: z.number().positive(),
    value: z.union([z.number(), z.string()]).default(0),
    size: z.number().positive(),
    address: address,
    categoryId: z.number().int(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),

})

const realStateCreate = realStateSchema.omit({ id: true, createdAt: true, updatedAt: true }).extend({ address: address })

export { realStateSchema, realStateCreate }