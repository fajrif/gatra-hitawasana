import { z } from 'zod'

export const adminSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    full_name: z.string().min(1, 'Full name is required'),
    phone: z.string().optional(),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
            /[^A-Za-z0-9]/,
            'Password must contain at least one special character'
        ),
})

export const adminUpdateSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    full_name: z.string().min(1, 'Full name is required'),
    phone: z.string().optional(),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(
            /[^A-Za-z0-9]/,
            'Password must contain at least one special character'
        )
        .optional(),
})

export type AdminFormData = z.infer<typeof adminSchema>
export type AdminUpdateData = z.infer<typeof adminUpdateSchema>
