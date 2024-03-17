'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useMutationRaffle } from '@/hooks/useMutationRaffle';

import { InputWithLabel } from '@/components/ui/InputWithLabel';
import { TextareaWithLabel } from '@/components/ui/TextareaWithLabel';
import { SelectRaffle } from '@/components/ui/SelectRaffle';
import { LinkRaffle } from '@/components/ui/LinkRaffle';
import { getCurrentDate } from '@/utils/utils';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useRouter } from 'next/navigation';
import { AxiosResponse } from 'axios';

const CrearSorteo = () => {
	const { mutationCreate, dateError } = useMutationRaffle();
	const { toast } = useToast();

	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (
			mutationCreate.data &&
			(mutationCreate.data as AxiosResponse).status === 400
		) {
			setError('createAt', { message: dateError.error });
		}
	}, [dateError, setError, mutationCreate]);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (Object.keys(errors).length > 0) return;

		mutationCreate.mutateAsync(data as RaffleCreate);

		toast({
			description: 'Sorteo se ha creado exitosamente.',
			style: {
				color: 'black',
				backgroundColor: 'yellow',
				border: 'none',
			},
		});
	};

	return (
		<section className='w-full min-h-screen flex items-center justify-center bg-hero-sorteos bg-cover bg-[80%_80%] overflow-y-hidden relative py-12 sm:py-0'>
			<LinkRaffle />

			<Toaster />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='p-4 w-full flex items-center flex-col justify-center'>
				<div className='w-[90%] min-[480px]:w-96 flex flex-col items-center gap-4 bg-blue-dark-app-500 py-5  px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
					<legend className='w-full text-center text-white text-4xl bg-white/30 backdrop-blur-sm rounded-md'>
						Crear Sorteo
					</legend>

					<div className='w-full flex flex-col gap-4'>
						<InputWithLabel
							labelText='title'
							name='name'
							type='text'
							placeholder='Digite el titulo'
							register={register}
							validacion={{
								required: 'Este campo es requerido',
								minLength: {
									value: 3,
									message: 'titulo debe tener más de 3 caracteres',
								},
								maxLength: {
									value: 50,
									message: 'titulo no debe tener más de 50 caracteres',
								},
							}}
							messageError={errors.name ? `${errors.name.message}` : ''}
						/>
						<TextareaWithLabel
							labelText='descripción del sorteo'
							name='description'
							placeholder='Describa el sorteo'
							register={register}
							validacion={{
								required: 'Este campo es requerido',
								minLength: {
									value: 50,
									message: 'descripción debe tener más de 50 caracteres',
								},
								maxLength: {
									value: 320,
									message: 'descripción no debe tener más de 320 caracteres',
								},
							}}
							messageError={
								errors.description ? `${errors.description.message}` : ''
							}
						/>
						<SelectRaffle
							labelText='Selecione el premio'
							name='prize'
							register={register}
							validacion={{
								required: 'Este campo es requerido',
							}}
							messageError={errors.prize ? `${errors.prize.message}` : ''}
						/>
						<InputWithLabel
							labelText='fecha de Inicio'
							name='createAt'
							type='date'
							register={register}
							defaultValue={getCurrentDate()}
							min={getCurrentDate()}
							validacion={{
								required: 'Este campo es requerido',
							}}
							messageError={errors.createAt ? `${errors.createAt.message}` : ''}
						/>
						<InputWithLabel
							labelText='fecha Finalizacion'
							name='endAt'
							type='date'
							register={register}
							min={getCurrentDate()}
							validacion={{
								required: 'Este campo es requerido',
							}}
							messageError={errors.endAt ? `${errors.endAt.message}` : ''}
						/>
					</div>
				</div>
				<footer className='flex gap-2 justify-end w-[90%] min-[480px]:w-96 mt-2'>
					<button
						className='px-4 py-2 bg-gradient-to-r from-[#FFC327] to-[#FFF500] text-blue-app-700 rounded-lg font-bold'
						type='submit'>
						Crear
					</button>
				</footer>
			</form>
		</section>
	);
};

export default CrearSorteo;
