import { firtsLetterUppercase } from '@/lib/utils';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type TypeInput = 'text' | 'password' | 'email';

interface Props {
	name: string;
	type: TypeInput;
	labelText: string;
	placeholder: string;

	register: UseFormRegister<FieldValues>;
}

export const TextField = ({
	name,
	type,
	register,
	labelText,
	placeholder,
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
				{...register(name)}
				placeholder={placeholder}
				className='text-black bg-transparent placeholder:text-[#3C3C3C] border-[1.5px] border-t-0 border-r-0 p-2 outline-none'
			/>
		</div>
	);
};
