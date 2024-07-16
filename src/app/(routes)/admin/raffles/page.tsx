'use client'

import { TypographyH1 } from "@/app/_components/shared/typography";

import { DataTable } from "../../../_components/raffles/DataTable";
import { columns } from "../../../_components/raffles/columns";

import { useRaffle } from "@/app/_hooks/raffle/useRaffle";

const RafflesPage = ()  => {
	const { raffleQuery } = useRaffle()

	return (
		<main className="w-full flex items-center justify-center p-2">
			<section className="max-w-5xl w-full space-y-6 bg-blue-dark-app-300/80
			p-4 rounded-md">
				<TypographyH1 className="lg:text-4xl text-white">Lista de sorteos</TypographyH1>
				{
					!raffleQuery.isLoading && <DataTable columns={columns} data={raffleQuery.data || []} />
				}
			</section>
		</main>
	)
}

export default RafflesPage