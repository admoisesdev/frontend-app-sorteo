import { firtsLetterUppercase } from '@/lib/utils';
import { ChangeEvent } from 'react';

type TypeInput = 'text' | 'password' | 'email';

interface Props {
	name: string;
	type: TypeInput;
	value: string;
	placeholder: string;
	labelText: string;
	onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
	name,
	type,
	value,
	labelText,
	placeholder,
	onInputChange,
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
				name={name}
				value={value}
				onChange={onInputChange}
				placeholder={placeholder}
				className='text-black bg-transparent placeholder:text-[#3C3C3C] border-2 border-t-0 border-r-0 p-2 outline-none'
			/>
		</div>
	);
};
