import { usePrize } from '@/hooks/usePrize';
import { Label } from './label';
import { firtsLetterUppercase } from '@/utils/utils';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
	name: string;
	labelText: string;
	validacion: object;
	messageError: string;
	register: UseFormRegister<FieldValues>;
}

export const SelectRaffle = ({
	name,
	register,
	labelText,
	validacion,
	messageError,
}: Props) => {
	const { queryPrize } = usePrize();

	const { data } = queryPrize;

	return (
		<div className='grid w-full items-center gap-1.5'>
			<Label htmlFor={name}>{firtsLetterUppercase(labelText)}</Label>
			<select
				className={`h-10 w-full bg-transparent ${
					messageError !== '' ? 'border-red-500' : 'border-[#5B5E80]'
				} text-[#BABABA] rounded-md border-2  px-3 py-2`}
				id={name}
				{...register(name, validacion)}>
				<option
					value={''}
					defaultChecked>
					Selecciona un premio
				</option>
				{(data as Prize[])?.map((item) => (
					<option
						key={item.id}
						value={item.id}
						defaultChecked>
						{item.name}
					</option>
				))}
			</select>
			<span
				className={`font-bold ${
					messageError !== '' ? 'opacity-100 text-red-500' : 'opacity-0'
				}`}>
				{messageError}
			</span>
		</div>
	);
};
