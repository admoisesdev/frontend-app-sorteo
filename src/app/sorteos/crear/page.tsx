'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import SorteosContainer from '@/components/ui/SorteosContainer';
import { InputWithLabel } from '@/components/ui/InputWithLabel';
import { TextareaWithLabel } from '@/components/ui/TextareaWithLabel';
import { SelectRaffle } from '@/components/ui/SelectRaffle';
import { useMutationRaffle } from '@/hooks/useMutationRaffle';
import { obtenerFechaActual } from '@/utils/utils';

const CrearSorteo = () => {
	const { mutationCreate } = useMutationRaffle();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (Object.keys(errors).length > 0) return;

		const raffle: RaffleCreate = {
			name: data.title,
			description: data.description,
			endAt: data.date,
			prize: data.select,
			createAt: obtenerFechaActual(),
		};

		mutationCreate.mutateAsync(raffle);

		reset();
	};
	return (
		<SorteosContainer moreClass='bg-hero-sorteos bg-cover bg-[80%_80%]'>
			<section className='w-full min-h-[100vh_-_5rem] flex items-center justify-center'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='p-4'>
					<div className='w-[90%] min-[480px]:w-96 min-h-96 flex flex-col items-center gap-4 bg-blue-dark-app-500 py-5  px-4 bg-opacity-50 rounded-md backdrop-blur-sm'>
						<legend className='w-full text-center text-white text-4xl bg-white/30 backdrop-blur-sm rounded-md'>
							Crear Sorteo
						</legend>

						<div className='w-full flex flex-col gap-4'>
							<InputWithLabel
								labelText='title'
								name='title'
								type='text'
								placeholder='Digite el titulo'
								register={register}
								validacion={{
									required: 'Este campo es requerido',
									minLength: {
										value: 3,
										message: 'titulo debe tener más de 3 caracteres',
									},
								}}
								messageError={errors.title ? `${errors.title.message}` : ''}
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
								}}
								messageError={
									errors.description ? `${errors.description.message}` : ''
								}
							/>
							<SelectRaffle
								labelText='Selecione el premio'
								name='select'
								register={register}
								validacion={{
									required: 'Este campo es requerido',
								}}
								messageError={errors.select ? `${errors.select.message}` : ''}
							/>
							<InputWithLabel
								labelText='fecha Finalizacion'
								name='date'
								type='date'
								register={register}
								validacion={{
									required: 'Este campo es requerido',
								}}
								messageError={errors.date ? `${errors.date.message}` : ''}
							/>
						</div>
					</div>
					<footer className='w-full flex gap-2 mt-2 justify-end'>
						<button
							className='p-2 bg-blue-app-400 text-white rounded-lg font-bold'
							onClick={() => reset()}>
							Limpiar
						</button>
						<button
							className='px-4 py-2 bg-gradient-to-r from-[#FFC327] to-[#FFF500] text-blue-app-700 rounded-lg font-bold'
							type='submit'>
							Crear
						</button>
					</footer>
				</form>
			</section>
		</SorteosContainer>
	);
};

export default CrearSorteo;
