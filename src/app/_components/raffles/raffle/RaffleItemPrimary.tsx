import { TypographyH2, TypographyH3 } from "../../shared/typography"
import { CardInfoDate } from "./CardInfoDate"

import { CardInfoDescribe } from "./CardInfoDescribe"
import { RaffleEntity } from "@/core/entities/raffle.entity"

export const RaffleItemPrimary = ({raffle}:{raffle:RaffleEntity}) => {
	return (
		<article className="bg-gradient-to-b from-purple-ligth-100 
		to-purple-light-150 rounded-md p-4 space-y-2">

			<TypographyH2 className="text-2xl">¡Sorteo de programacion!</TypographyH2>

			<CardInfoDescribe
				title="Descripción del sorteo"
				describe={raffle.description}
				className="bg-blue-dark-app-900 text-white"
			/>

			<CardInfoDescribe
				title="Descripción del premio"
				describe={raffle.prize.description}
				className="variant-header-secondary text-blue-dark-app-900"
			/>

			<div className="space-y-2">
				<TypographyH3 className="text-xl lg:text-xl">Fecha del sorteo</TypographyH3>

				<div className="flex justify-between">
					<CardInfoDate
						title="Inicio"
						date={new Date(raffle.createAt)}
					/>

					<CardInfoDate
						title="Fin"
						date={new Date(raffle.endAt)}
					/>
				</div>
			</div>
		</article>
	)
}
