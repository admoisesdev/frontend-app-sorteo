'use client';

import { getPrizes } from '@/services/prizeServices';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

export const usePrize = () => {
	const { token } = useAuth();

	const queryPrize = useQuery({
		queryKey: ['prize', token],
		queryFn: () => getPrizes(token),
	});

	return {
		queryPrize,
	};
};
