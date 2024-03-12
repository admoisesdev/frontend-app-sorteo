import React from 'react';

type TypeButton = 'submit' | 'button'

interface Props {
	type: TypeButton
	moreclass: string
	children: React.ReactNode
}

export const AuthButton = ({ children,moreclass,type }: Props) => {
	return (
		<button type={type} className={`w-full p-3 text-lg rounded-md hover:opacity-90 transition-all duration-300 flex justify-center items-center gap-2 ${moreclass}`}>
			{children}
		</button>
	);
};

