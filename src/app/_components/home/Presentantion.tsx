'use client'

import Link from "next/link"
import { CardDateInfo, CardPremio, CardFullInfo } from "./cards"
import { useRaffle } from "@/app/_hooks/raffle"

export const Presentantion = () => {

	const { raffleQueryLatest: { data, isLoading } } = useRaffle();

	return (
		<main className="text-blue-dark-app-900 w-11/12 max-w-3xl 
		mx-auto flex flex-col items-center gap-4 py-4">
			{
				!isLoading && data && (
					<>
						<CardPremio
							premio={data.prize.name}
						/>

						<div className="grid md:grid-cols-2 place-items-center 
			w-full gap-4">
							<CardFullInfo
								title="Descripción del sorteo"
								description={ data.description }
							/>

							<CardFullInfo
								title="Descripción del premio"
								description={ data.prize.description }
							/>
						</div>

						<CardDateInfo
							dateStart={ new Date(data.createAt) }
							dateEnd={ new Date(data.endAt) }
						/>

						<Link
							href="/auth/login"
							className='variant-header-secondary px-4 py-2 rounded-md text-2xl'>
							Participar
						</Link>
					</>
				)
			}

		</main>
	)
}
