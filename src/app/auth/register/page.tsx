'use client';
import { AuthButton } from '@/components/ui/AuthButton';
import { AuthLink } from '@/components/ui/AuthLink';
import { TextField } from '@/components/ui/TextField';
import { useForm } from '@/hooks/useForm';
import { FormEvent } from 'react';

const Register = () => {
	const { formValues, handleChange, reset } = useForm({
		name: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formValues);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-6 text-[#20315C] bg-white py-8 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
			<legend className='text-4xl font-bold'>Sorteo Register</legend>

			<div className='flex flex-col gap-4 w-full'>
				<TextField
					value={formValues.name}
					name='name'
					type='text'
					labelText='Nombre'
					placeholder='Juan Perez'
					onInputChange={handleChange}
				/>

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
					labelText='contraseña'
					placeholder='contraseña'
					onInputChange={handleChange}
				/>

				<AuthLink
					route='/auth/login'
					text='¿Ya tienes cuenta? ingresa'
				/>
			</div>

			<AuthButton
				type='submit'
				moreclass='text-white bg-gradient-to-r from-[#20315C] to-[#264085]'>
				Registrarse
			</AuthButton>
		</form>
	);
};

export default Register;
