import {z} from "zod";

export const loginSchema = z.object({

    firstName: z.string().min(1).max(20), 
    lastName: z.string().min(1).max(20), 
    email: z.string().email(),
    password: z.string().min(8).max(30),

    
})

