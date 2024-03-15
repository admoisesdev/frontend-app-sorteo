import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const firtsLetterUppercase = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};


export const cutText = (text:string) => {
	return text.slice(0, 14) + "..."; 
}