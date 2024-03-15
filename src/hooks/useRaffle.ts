'use client';

//getRaffles, getRaffle

import { getRaffle, getRaffles } from '@/services/raffleServices';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

export const useRaffle = () => {
	const { token } = useAuth();

	console.log(token);

	const queryRaffles = useQuery({
		queryKey: ['raffles', token],
		queryFn: () => getRaffles(token),
	});

	/*
const queryRaffle = useQuery({
		queryKey: ['raffles', raffleId],
		queryFn: async () => await getRaffle(raffleId),
	});


	*/
	return {
		queryRaffles,
	};
};
