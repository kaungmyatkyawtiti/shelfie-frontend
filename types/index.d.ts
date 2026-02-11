import { z } from "zod"

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  stock: z.number(),
})

export type Product = z.infer<typeof productSchema>

export const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  productCount: z.number(),
  status: z.enum(["active", "inactive", "archived"]),
  createdAt: z.string(),
})

export type Category = z.infer<typeof categorySchema>
