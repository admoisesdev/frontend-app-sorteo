import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const firtsLetterUppercase = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

export const cutText = (text: string) => {
	return text.length < 14 ? text : text.slice(0, 14) + '...';
};

export const obtenerFechaActual = () => {
	let fechaActual = new Date();
	let year = fechaActual.getFullYear();

	let month: number | string = fechaActual.getMonth() + 1;
	month = month < 10 ? '0' + month : month;

	let day: number | string = fechaActual.getDate();
	day = day < 10 ? '0' + day : day;

	let fechaFormateada = year + '-' + month + '-' + day;

	return fechaFormateada;
};
