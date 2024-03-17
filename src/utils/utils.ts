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

export const formatearFecha = (fechaIso: string): string => {
	const fecha = new Date(fechaIso);
	const dia = fecha.getDate().toString().padStart(2, '0');
	const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
	const anio = fecha.getFullYear().toString();

	return `${dia}/${mes}/${anio}`;
};

export const getCurrentDate = () => {
	const today = new Date();
	const year = today.getFullYear();
	let month: number | string = today.getMonth() + 1;
	let day: number | string = today.getDate();

	// Añadir un cero delante si el mes o el día son menores que 10
	if (month < 10) {
		month = `0${month}`;
	}
	if (day < 10) {
		day = `0${day}`;
	}

	return `${year}-${month}-${day}`;
};
