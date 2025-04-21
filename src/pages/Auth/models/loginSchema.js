import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email("El formato del correo electrónico es incorrecto.").min(5, "El correo electrónico es obligatorio."),
    password: z.string().min(8, "La contraseña debe tener 8 caracteres o más.")
})