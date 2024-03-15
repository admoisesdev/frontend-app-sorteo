'use client';

import { Discord, Email } from '@/components/icons';
import { AuthButton, AuthLink, TextField } from '@/components/ui';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTanStack } from '@/hooks/useTanStack';

const Login = () => {
	const {
		register,
		trigger,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { loginMutation } = useTanStack();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const { email, password } = data;

		if (Object.keys(errors).length > 0) return;

		console.log('Todo pasa correctamente');

		//loginMutation.mutate({ email, password });
	};

	const handleChange = (name: string) => {
		trigger(name);
		console.log(name);
	};

	return (
		<section className='w-full h-full flex items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-4 text-[#20315C] bg-white py-5 lg:py-10 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
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
						onChange={handleChange}
						placeholder='example@gmail.com'
						messageError={errors.email ? `${errors.email.message}` : ''}
					/>

					<TextField
						type='password'
						name='password'
						onChange={handleChange}
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
						moreclass='text-white bg-gradient-to-r from-[#20315C] to-[#264085]'>
						<Email /> Ingresar por correo
					</AuthButton>

					<span className='text-xl'>ó</span>

					<AuthButton
						type='button'
						moreclass='text-white bg-gradient-to-b from-[#2E3038] to-[#131E3A]'>
						<Discord /> Ingresar por discord
					</AuthButton>
				</div>
			</form>
		</section>
	);
};

export default Login;
