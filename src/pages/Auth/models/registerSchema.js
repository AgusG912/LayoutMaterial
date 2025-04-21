import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email("El formato del correo electrónico es incorrecto.").min(5, "El correo electrónico es obligatorio."),
    password: z.string().min(8, "La contraseña debe tener más de 8 caracteres."),
    confirmPassword: z.string().min(8, "La contraseña debe tener más de 8 caracteres.")
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ['confirmPassword']
})