'use client';

import { helpHttp } from '@/utils/helpHttp';
import { AxiosError, AxiosResponse } from 'axios';

export const getRaffles = async (token: string) => {
	const res = await helpHttp({
		url: '/raffle',
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if ((res as AxiosError).isAxiosError) {
		return res as AxiosError;
	}

	return (res as AxiosResponse).data as Raffle[];
};

export const getRaffle = async (raffleId: string, token: string) => {
	const res = await helpHttp({
		url: `/raffle/${raffleId}`,
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if ((res as AxiosError).isAxiosError) {
		return res as AxiosError;
	}

	return (res as AxiosResponse).data as Raffle;
};

export const createRaffle = async (raffle: Raffle, token: string) => {
	const res = await helpHttp({
		url: `/raffle/`,
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: raffle,
	});

	if ((res as AxiosError).isAxiosError) {
		return res as AxiosError;
	}

	return (res as AxiosResponse).data as Raffle;
};

export const updateRaffle = async (
	id: string,
	raffle: Raffle,
	token: string
) => {
	const res = await helpHttp({
		url: `/raffle/${id}`,
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: raffle,
	});

	if ((res as AxiosError).isAxiosError) {
		return res as AxiosError;
	}

	return (res as AxiosResponse).data as Raffle;
};

export const deleteRaffle = async (id: string, token: string) => {
	const res = await helpHttp({
		url: `/raffle/${id}`,
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if ((res as AxiosError).isAxiosError) {
		return res as AxiosError;
	}

	return (res as AxiosResponse).data as Raffle[];
};

export const addUserRaffle = async (raffleId: string, token: string) => {
  const res = await helpHttp({
    url: `/raffle/users/${raffleId}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if ((res as AxiosError).isAxiosError) {
    return res as AxiosError;
  }

  return (res as AxiosResponse).data as Raffle;

}
