'use client';
import { AuthButton, AuthLink, TextField } from '@/components/ui';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Register = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

	return (
		<section className='w-full h-full flex items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-6 text-[#20315C] bg-white pt-14 pb-4 px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
				<legend className='text-4xl font-bold'>Register</legend>

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
