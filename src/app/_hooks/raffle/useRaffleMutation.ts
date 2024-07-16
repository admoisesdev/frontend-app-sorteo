import { useMutation } from "@tanstack/react-query"

import { createRaffleUsecase } from "@/core/use-cases/raffle"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { authStore } from "@/app/_context/authState"

export const useRaffleMutation = () => {
	const { user } = authStore()

	const createRaffleMutation = useMutation({
		mutationKey: ["raffle"],
		mutationFn: (body: Record<string,unknown>) => {
			return createRaffleUsecase(apiFetcher,body,user?.token ?? '')
		}
	})

	return {
		createRaffleMutation
	}
}