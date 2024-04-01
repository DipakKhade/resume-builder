import z from 'zod'

export const  userSchema=z.object({
    email:z.string().email().min(5),
    password:z.string().min(5, { message: "Must be 5 or more characters long" })
})