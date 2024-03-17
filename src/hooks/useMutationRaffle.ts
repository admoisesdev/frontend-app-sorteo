import {
	useMutation,
	useQueryClient,
} from '@tanstack/react-query';
import {
	createRaffle,
	deleteRaffle,
	updateRaffle,
} from '@/services/raffleServices';
import useAuth from './useAuth';

export const useMutationRaffle = () => {
	const { token } = useAuth();

	const queryClient = useQueryClient();

	const mutationCreate = useMutation({
		mutationFn: (raffle: RaffleCreate) => {
			return createRaffle(raffle, token);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	const mutationUpdate = useMutation({
		mutationFn: ({ id, raffle }: { id: string; raffle: RaffleCreate }) => {
			return updateRaffle(id, raffle, token);
		},
		onSuccess: () => {
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
		mutationCreate,
		mutationUpdate,
		mutationDelete,
	};
};
