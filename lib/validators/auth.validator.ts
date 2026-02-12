import { z } from "zod"

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
})

export type SignIn = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
  name: z
    .string()
    .min(6, "Name must be at least 6 characters"),
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters"),
}).superRefine((val, ctx) => {
  if (val.password !== val.confirmPassword) {
    ctx.addIssue({
      code: "custom",
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    })
  }
})

export type SignUp = z.infer<typeof signUpSchema>
