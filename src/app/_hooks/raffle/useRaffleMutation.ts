import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createRaffleUsecase, deleteRaffleUsecase, editRaffleUsecase } from "@/core/use-cases/raffle"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { authStore } from "@/app/_context/authState"
import { participateRaffleUsecase } from "@/core/use-cases/raffle/participe-raffle.use-case"
import { SelectWinnerRaffleUseCase } from "@/core/use-cases/raffle/select-winner-raffle.use-case"

export const useRaffleMutation = () => {
	const { user } = authStore();
  const token = user?.token ?? '';
	const queryClient = useQueryClient();

	const createRaffleMutation = useMutation({
		mutationKey: ["raffle-create",{ token }],
		mutationFn: (body: Record<string,unknown>) => {
			return createRaffleUsecase(apiFetcher,body,token)
		}
	})

	const editRaffleMutation = useMutation({
		mutationKey: ["raffle-edit",{ token }],
		mutationFn: ({body,raffleId}: {body:Record<string,unknown>, raffleId: string}) => {
			return editRaffleUsecase({
				body,
				raffleId,
				fetcher: apiFetcher,
				token: token,
			})
		}
	});

	const deleteRaffleMutation = useMutation({
		mutationKey: ['raffle-delete',{ token }],
		mutationFn: (raffleId: string) => {
			return deleteRaffleUsecase(apiFetcher,token, raffleId)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	const participateRaffleMutation = useMutation({
		mutationKey: ['raffle-participate',{ token }],
		mutationFn: (raffleId: string) => {
			return participateRaffleUsecase(apiFetcher,token, raffleId)
		}
	});

	const selectWinnerRaffleMutation = useMutation({
		mutationKey: ['raffle-select-winner',{ token }],
		mutationFn: ({raffleId,userId}: {raffleId: string, userId: string}) => {
			return SelectWinnerRaffleUseCase({
				fetcher: apiFetcher, 
				raffleId, 
				userId, 
				token
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffle',
			});
		},
	});

	return {
		createRaffleMutation,
		editRaffleMutation,
		deleteRaffleMutation,
		participateRaffleMutation,
		selectWinnerRaffleMutation
	}
}