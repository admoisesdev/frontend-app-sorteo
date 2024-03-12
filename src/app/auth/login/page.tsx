'use client';

import { Discord, Email } from '@/components/icons/icons';
import { AuthButton } from '@/components/ui/AuthButton';
import { AuthLink } from '@/components/ui/AuthLink';
import { TextField } from '@/components/ui/TextField';
import { useForm } from '@/hooks/useForm';
import { FormEvent } from 'react';

const Login = () => {
	const { formValues, handleChange,reset } = useForm({
		email: '',
		password: '',
	});

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formValues);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-6 text-[#20315C] bg-white py-8 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
			<legend className='text-4xl font-bold'>Sorteo Login</legend>

			<div className='flex flex-col gap-4 w-full'>
				<TextField
					value={formValues.email}
					name='email'
					type='email'
					labelText='Correo'
					onInputChange={handleChange}
					placeholder='example@gmail.com'
				/>

				<TextField
					value={formValues.password}
					type='password'
					name='password'
					onInputChange={handleChange}
					labelText='contraseña'
					placeholder='contraseña'
				/>

				<AuthLink
					route='/auth/register'
					text='¿No tienes cuenta? registrate'
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
					moreclass='text-white bg-gradient-to-r from-[#2E3038] to-[#333436]'>
					<Discord /> Ingresar por discord
				</AuthButton>
			</div>
		</form>
	);
};

export default Login;
