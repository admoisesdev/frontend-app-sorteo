'use client';

import { getRaffle, getRaffles } from '@/services/raffleServices';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import { AxiosError } from 'axios';

export const useRaffle = (raffleId = '') => {
	const { token } = useAuth();

	const queryRaffles = useQuery<Raffle[] | AxiosError>({
		queryKey: ['raffles', token],
		queryFn: () => getRaffles(token),
	});


	const queryRaffle = useQuery<Raffle | AxiosError>({
		queryKey: ['raffles', raffleId, token],
		queryFn: async () => await getRaffle(raffleId, token),
	});

	return {
		queryRaffles,
		queryRaffle,
	};
};
