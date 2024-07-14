'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"

import { TypographyH1 } from "@/app/_components/shared/typography"
import { FormLink } from "@/app/_components/auth"

import { registerSchema } from "@/app/_schemas/user.schema"

const RegisterPage = () => {

	const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
			name: "",
      email: "",
			password: ""
    },
  })

	const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values)
  }

	return (
		<Form { ...form }>
			<form 
				onSubmit={form.handleSubmit(onSubmit)} 
				className="auth-form-blur">

				<TypographyH1 
					className="text-center">
					Register
				</TypographyH1>

				<FormField
					control={ form.control }
					name="name"
					render={({ field,formState: {errors} }) => (
						<FormItem>
							<FormLabel>Nombre</FormLabel>
							<FormControl>
								<Input
									variant={errors.email ? "destructive" : "auth"} 
									placeholder="John Doe" 
									{ ...field } />
							</FormControl>
							<FormMessage className="text-sm" />
						</FormItem>
					) }
				/>

				<FormField
					control={ form.control }
					name="email"
					render={({ field,formState: {errors} }) => (
						<FormItem>
							<FormLabel>Correo</FormLabel>
							<FormControl>
								<Input
									type="email" 
									variant={errors.email ? "destructive" : "auth"} 
									placeholder="example@gmail.com" 
									{ ...field } />
							</FormControl>
							<FormMessage className="text-sm" />
						</FormItem>
					) }
				/>

				<FormField
					control={ form.control }
					name="password"
					render={({ field,formState: {errors} }) => (
						<FormItem>
							<FormLabel>Contraseña</FormLabel>
							<FormControl>
								<Input
									type="password" 
									variant={errors.password ? "destructive" : "auth"} 
									placeholder="********" 
									{ ...field } />
							</FormControl>
							<FormMessage className="text-sm" />
						</FormItem>
					) }
				/>

				<FormLink
					to="/auth/login"
					textLink="Ingresa aqui"
					description="¿Ya tienes cuenta?"
				/>

				<Button
					variant="auth" 
					size="lg"
					type="submit">
					Registrarse
				</Button>
			</form>
		</Form>
	)
}

export default RegisterPage