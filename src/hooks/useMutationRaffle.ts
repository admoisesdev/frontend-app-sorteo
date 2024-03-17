import { useState } from 'react';
import useAuth from './useAuth';

import {
  createRaffle,
	deleteRaffle,
	updateRaffle,
} from '@/services/raffleServices';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

interface Error {
	error: string;
}

const initialDateError = {} as Error;

export const useMutationRaffle = () => {
	const { token } = useAuth();
	const [dateError, setDateError] = useState<Error>(initialDateError);

	const queryClient = useQueryClient();

	const mutationCreate = useMutation({
		mutationFn: (raffle: RaffleCreate) => {
			return createRaffle(raffle, token);
		},
		onSuccess: (raffle) => {
			const raffleError = raffle as AxiosResponse;

			if (raffleError.status === 400) {
				setDateError(raffleError.data);
			}

			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	const mutationUpdate = useMutation({
		mutationFn: ({ id, raffle }: { id: string; raffle: RaffleCreate }) => {
			return updateRaffle(id, raffle, token);
		},
		onSuccess: (raffle) => {

			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	const mutationDelete = useMutation({
		mutationFn: (id: string) => {
			return deleteRaffle(id, token);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	return {
		dateError,
		mutationCreate,
		mutationUpdate,
		mutationDelete,
	};
};
