import { z } from 'zod/v4'

export const signupSchema = z.object({
    username: z.string().min(4),
    email: z.email(),
    password: z.string().min(8)
})