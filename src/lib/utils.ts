import { helpHttp } from '@/services/helpHttp';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const firtsLetterUppercase = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

//Fetching

export const loginAuth = async (user: LoginUser) => {
	console.log(user);

	try {
		const res = await helpHttp({
			url: '/auth/login',
			method: 'POST',
			data: user,
		});

		return res.data;
	} catch (error: any) {
		console.log(error);
	}
};

export const registerAuth = async (user: RegisterUser) => {
	try {
		const res = await helpHttp({
			url: '/auth/register',
			method: 'POST',
			data: user,
		});

		console.log(res.data);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
