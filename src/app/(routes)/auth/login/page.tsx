'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"

import { TypographyH1 } from "@/app/_components/shared/typography"
import { FormLink } from "@/app/_components/auth"

import { loginSchema } from "@/app/_schemas/user.schema"
import { useLoginMutation } from "@/app/_hooks/auth"

const LoginPage = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
			password: ""
    },
  })

	const { loginMutation } = useLoginMutation();

	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		loginMutation.mutate(values);
  }

	return (
		<Form { ...form }>
			<form 
				onSubmit={form.handleSubmit(onSubmit)} 
				className="auth-form-blur">

				<TypographyH1 
					className="text-center">
					Login
				</TypographyH1>

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

				{
					loginMutation.error && (
						<FormMessage className="text-sm">
							{loginMutation.error?.message}
						</FormMessage>
					)
				}

				<FormLink
					to="/auth/register"
					textLink="registrate aqui"
					description="¿No tienes cuenta?"
				/>
				
				
				<Button
					variant="auth" 
					size="lg"
					type="submit"
					disabled={loginMutation.isPending}>
					Iniciar sesion
				</Button>
			</form>
		</Form>
	)
}

export default LoginPage