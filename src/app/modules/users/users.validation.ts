import { z } from 'zod';

export const userValidationSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    password: z.string().min(6, "Password is required!"),
    email: z.string().email("Invalid email format!"),
    photoURL: z.string().url().optional(),
    role: z.enum(["user", "admin"]).default("user"),
    createdAt: z.date().optional()
});


// Define the validation schema for the role
export const roleValidationSchema = z.object({
    role: z.enum(["user", "admin"]).default("user")
});