'use client';

import { helpHttp } from '@/utils/helpHttp';
import { AxiosError, AxiosResponse } from 'axios';

export const getPrizes = async (token: string) => {
	const res = await helpHttp({
		url: '/prize',
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if ((res as AxiosError).isAxiosError) {
		return res as AxiosError;
	}

	return (res as AxiosResponse).data as Prize[];
};
