'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AuthButton, AuthLink, TextField } from '@/components/ui';
import { useTanStack } from '@/hooks/useTanStack';

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setError,
	} = useForm();

	const { registerMutation } = useTanStack();

	const startRegister = async ({ email, password, name }: RegisterUser) => {
		try {
			await registerMutation.mutateAsync({ email, password, name });
			reset();
		} catch (error) {
			setError('email', { message: 'Error de inicio de sesión' });
			setError('password', { message: 'Error de inicio de sesión' });
		}
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const { name, email, password } = data;

		if (Object.keys(errors).length > 0) return;

		startRegister({ name, email, password });

		reset();
	};

	return (
		<section className='w-full h-full flex items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-6 text-[#20315C] bg-white py-5 lg:py-10 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
				<legend className='text-4xl sm:text-5xl font-bold relative'>
					Register
				</legend>

				<div className='flex flex-col gap-4 w-full'>
					<TextField
						name='name'
						type='text'
						labelText='nombre'
						register={register}
						validacion={{
							required: 'Este campo es requerido',
							minLength: {
								value: 1,
								message: 'nombre debe tener al menos 1 caracter',
							},
						}}
						messageError={errors.name ? `${errors.name.message}` : ''}
						placeholder='Juan Perez'
					/>

					<TextField
						name='email'
						type='email'
						labelText='correo'
						register={register}
						validacion={{
							required: 'Este campo es requerido',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: 'Email invalido',
							},
						}}
						placeholder='example@gmail.com'
						messageError={errors.email ? `${errors.email.message}` : ''}
					/>

					<TextField
						type='password'
						name='password'
						labelText='contraseña'
						register={register}
						validacion={{
							required: 'Este campo es requerido',
							minLength: {
								value: 6,
								message: 'contraseña debe tener más de 6 caracteres',
							},
						}}
						messageError={errors.password ? `${errors.password.message}` : ''}
						placeholder='*******'
					/>

					<AuthLink
						route='/auth/login'
						text='¿Ya tienes cuenta? Ingresa'
					/>
				</div>

				<AuthButton
					type='submit'
					moreclass='text-white bg-gradient-to-r from-blue-app-800 to-blue-app-600'>
					Registrarse
				</AuthButton>
			</form>
		</section>
	);
};

export default Register;
