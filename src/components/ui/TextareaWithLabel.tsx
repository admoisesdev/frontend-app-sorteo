import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { firtsLetterUppercase } from '@/utils/utils';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
	name: string;
	labelText: string;
	validacion: object;
	placeholder: string;
	messageError: string;
	register: UseFormRegister<FieldValues>;
}

export function TextareaWithLabel({
	name,
	register,
	labelText,
	validacion,
	messageError,
	placeholder,
}: Props) {
	return (
		<div className='grid w-full gap-1.5'>
			<Label htmlFor={name}>{firtsLetterUppercase(labelText)}</Label>
			<Textarea
				{...register(name, validacion)}
				placeholder={placeholder}
				id={name}
				className={`${
					messageError !== '' ? 'border-red-500' : 'border-[#5B5E80]'
				}`}
			/>
			<span
				className={`font-bold ${
					messageError !== '' ? 'opacity-100 text-red-500' : 'opacity-0'
				}`}>
				{messageError}
			</span>
		</div>
	);
}
