'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AuthButton, AuthLink, TextField } from '@/components/ui';
import { useTanStack } from '@/hooks/useTanStack';

const Register = () => {
	const { register, handleSubmit, reset } = useForm();

	const { registerMutation } = useTanStack();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const { name, email, password } = data;
		registerMutation.mutate({ email, password, name });
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
						placeholder='Juan Perez'
					/>

					<TextField
						name='email'
						type='email'
						labelText='correo'
						register={register}
						placeholder='example@gmail.com'
					/>

					<TextField
						type='password'
						name='password'
						labelText='contraseña'
						register={register}
						placeholder='*******'
					/>

					<AuthLink
						route='/auth/login'
						text='¿Ya tienes cuenta? Ingresa'
					/>
				</div>

				<AuthButton
					type='submit'
					moreclass='text-white bg-gradient-to-r from-[#20315C] to-[#264085]'>
					Registrarse
				</AuthButton>
			</form>
		</section>
	);
};

export default Register;
