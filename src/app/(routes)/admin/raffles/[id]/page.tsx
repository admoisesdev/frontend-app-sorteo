'use client'

import { RaffleItemPrimary } from "@/app/_components/raffles/raffle/RaffleItemPrimary"
import { WinnersItem } from "@/app/_components/raffles/raffle/WinnersItem"
import { useRaffle, useRaffleMutation } from "@/app/_hooks/raffle"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const RafflePage = ({ params }: Params) => {

	const { raffleQueryById } = useRaffle(params.id);
	const {selectWinnerRaffleMutation} = useRaffleMutation();

	const onSelectWinner = (userId:string) => {
		selectWinnerRaffleMutation.mutate({raffleId:params.id,userId})
	}

	return (
		<div className="w-11/12 max-w-3xl min-h-[calc(100vh-10rem)] 
			mx-auto grid md:grid-cols-2 gap-4">
				
			{
				(!raffleQueryById.isLoading && raffleQueryById.data) && (
					<>
						<RaffleItemPrimary raffle={raffleQueryById.data} />
						<WinnersItem 
							winner={raffleQueryById.data?.winner} 
							users={raffleQueryById.data?.users}
							onSelectWinner={onSelectWinner}
							/>	
					</>	
				)
			}
			
		</div>
	)
}

export default RafflePage