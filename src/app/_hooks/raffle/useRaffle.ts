'use client'

import { getAllRafflesUseCase, getRaffleByIdUsecase, getRaffleLatestUsecase } from "@/core/use-cases/raffle"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { authStore } from "@/app/_context/authState"

import { useQuery } from "@tanstack/react-query"

export const useRaffle = (id?: string) => {
	const { user } = authStore()
	const token = user?.token ?? ''

	const raffleQuery = useQuery({
		queryKey: ['raffles',{ token }],
		queryFn: () => {
			return getAllRafflesUseCase(apiFetcher,token)
		}
	})

	const raffleQueryById = useQuery({
		queryKey: ['raffle',{token, id}],
		queryFn: () => {
			return getRaffleByIdUsecase(apiFetcher,token,id ?? '')
		}
	})

	const raffleQueryLatest = useQuery({
		queryKey: ['raffle-latest',{token}],
		queryFn: () => {
			return getRaffleLatestUsecase(apiFetcher,token)
		}
	})

	return {
		raffleQuery,
		raffleQueryById,
		raffleQueryLatest
	}
}