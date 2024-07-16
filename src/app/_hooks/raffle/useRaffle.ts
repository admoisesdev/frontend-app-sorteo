'use client'

import { getAllRafflesUseCase, getRaffleByIdUsecase } from "@/core/use-cases/raffle"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { authStore } from "@/app/_context/authState"

import { useQuery } from "@tanstack/react-query"

export const useRaffle = (id?: string) => {
	const { user } = authStore()

	const raffleQuery = useQuery({
		queryKey: ['raffle',{token: user?.token ?? ''}],
		queryFn: () => {
			return getAllRafflesUseCase(apiFetcher,user?.token ?? '')
		}
	})

	const raffleQueryById = useQuery({
		queryKey: ['raffleById',{token: user?.token ?? '', id}],
		queryFn: () => {
			return getRaffleByIdUsecase(apiFetcher,user?.token ?? '',id ?? '')
		}
	})

	return {
		raffleQuery,
		raffleQueryById
	}
}