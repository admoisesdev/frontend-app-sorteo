import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createRaffleUsecase, deleteRaffleUsecase, editRaffleUsecase } from "@/core/use-cases/raffle"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { authStore } from "@/app/_context/authState"

export const useRaffleMutation = () => {
	const { user } = authStore();
  const token = user?.token ?? '';
	const queryClient = useQueryClient();

	const createRaffleMutation = useMutation({
		mutationKey: ["raffle",{ token }],
		mutationFn: (body: Record<string,unknown>) => {
			return createRaffleUsecase(apiFetcher,body,token)
		}
	})

	const editRaffleMutation = useMutation({
		mutationKey: ["raffle",{ token }],
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
		mutationKey: ['raffle',{ token }],
		mutationFn: (raffleId: string) => {
			return deleteRaffleUsecase(apiFetcher,token, raffleId)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	return {
		createRaffleMutation,
		editRaffleMutation,
		deleteRaffleMutation
	}
}