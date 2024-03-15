'use client';

import { Discord, Email } from '@/components/icons';
import { AuthButton, AuthLink, TextField } from '@/components/ui';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTanStack } from '@/hooks/useTanStack';

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm();
	const { loginMutation } = useTanStack();

	const startLogin = async ({ email, password }: LoginUser) => {
		try {
			const userData = await loginMutation.mutateAsync({ email, password });

			localStorage.setItem('__usertoken__', userData.token);

			reset();
		} catch (error) {
			setError('email', { message: 'Error de inicio de sesión' });
			setError('password', { message: 'Error de inicio de sesión' });
		}
	};

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const { email, password } = data;

		if (Object.keys(errors).length > 0) return;

		startLogin({ email, password });

		reset();
	};

	return (
		<section className='w-full h-full flex items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				autoComplete='off'
				className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-4 text-blue-app-800 bg-white py-5 lg:py-10 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
				<legend className='text-4xl sm:text-5xl font-bold relative'>
					Login
				</legend>

				<div className='flex flex-col gap-2 w-full'>
					<TextField
						name='email'
						type='email'
						labelText='Correo'
						validacion={{
							required: 'Este campo es requerido',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: 'Email invalido',
							},
						}}
						register={register}
						placeholder='example@gmail.com'
						messageError={errors.email ? `${errors.email.message}` : ''}
					/>

					<TextField
						type='password'
						name='password'
						validacion={{
							required: 'Este campo es requerido',
							minLength: {
								value: 6,
								message: 'contraseña debe tener más de 6 caracteres',
							},
						}}
						labelText='contraseña'
						register={register}
						placeholder='******'
						messageError={errors.password ? `${errors.password.message}` : ''}
					/>

					<AuthLink
						route='/auth/register'
						text='¿No tienes cuenta? Registrate'
					/>
				</div>

				<div className='w-full flex flex-col items-center gap-2'>
					<AuthButton
						type='submit'
						moreclass='text-white bg-gradient-to-r from-blue-app-800 to-blue-app-600'>
						<Email /> Ingresar por correo
					</AuthButton>

					<span className='text-xl'>ó</span>

					<AuthButton
						type='button'
						moreclass='text-white bg-gradient-to-b from-blue-dark-app-200 to-blue-dark-app-900'>
						<Discord /> Ingresar por discord
					</AuthButton>
				</div>
			</form>
		</section>
	);
};

export default Login;
