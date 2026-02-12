import z from "zod"

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
})

export type Product = z.infer<typeof productSchema>
