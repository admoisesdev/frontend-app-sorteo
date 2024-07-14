import { z } from "zod"
 
export const registerSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener minimo 2 caracteres",
  }),
	email: z.string().email({
		message: "Por favor, ingrese un correo valido",
	}),
	password: z.string().min(6, {
		message: "La contraseña debe tener minimo 6 caracteres",
	}),
})

export const loginSchema = z.object({
	email: z.string().email({
		message: "Por favor, ingrese un correo valido",
	}),
	password: z.string().min(6, {
		message: "Contraseña debe tener minimo 6 caracteres",
	}),
})