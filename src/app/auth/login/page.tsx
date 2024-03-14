'use client';

import { Discord, Email } from '@/components/icons';
import { AuthButton, AuthLink, TextField } from '@/components/ui';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Login = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

	return (
		<section className='w-full h-full flex items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-4 text-[#20315C] bg-white pt-14 pb-4 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
				<legend className='text-4xl font-bold relative'>Login</legend>

				<div className='flex flex-col gap-2 w-full'>
					<TextField
						name='email'
						type='email'
						labelText='Correo'
						register={register}
						placeholder='example@gmail.com'
					/>

					<TextField
						type='password'
						name='password'
						labelText='contraseña'
						register={register}
						placeholder='******'
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
