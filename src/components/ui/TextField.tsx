import { firtsLetterUppercase } from '@/lib/utils';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type TypeInput = 'text' | 'password' | 'email';

interface Props {
	name: string;
	type: TypeInput;
	labelText: string;
	validacion: object;
	placeholder: string;
	messageError: string;
	register: UseFormRegister<FieldValues>;
	onChange: (name: string) => void;
}

export const TextField = ({
	name,
	type,
	register,
	labelText,
	validacion,
	messageError,
	placeholder,
	onChange,
}: Props) => {
	return (
		<div className={`flex flex-col gap-2`}>
			<label
				htmlFor={name}
				className='text-lg font-bold'>
				{firtsLetterUppercase(labelText)}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, validacion)}
				onChange={() => onChange(name)}
				className={`text-black bg-transparent placeholder:text-[#3C3C3C] border-[1.5px] border-t-0 border-r-0 p-2 outline-none ${
					messageError !== '' ? 'border-red-500' : 'border-white'
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
};
