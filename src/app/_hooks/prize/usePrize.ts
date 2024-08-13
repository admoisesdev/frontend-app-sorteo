import { getAllPrizeUsecase } from "@/core/use-cases/prize"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { authStore } from "@/app/_context/authState"
import { useQuery } from "@tanstack/react-query"

export const usePrize = () => {
	const { user } = authStore()
  const token = user?.token ?? ''

	const prizeQuery = useQuery({
		queryKey: ['prize',{ token }],
		queryFn: () => {
			return getAllPrizeUsecase(apiFetcher,token)
		}
	})

	return {
		prizeQuery
	}

}