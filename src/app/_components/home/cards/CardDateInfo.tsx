import { CardDate } from "./CardDate"
import { CardHeader } from "./CardHeader"

interface Props {
	dateStart: Date
	dateEnd: Date
}

export const CardDateInfo = ({dateStart,dateEnd}:Props) => {
	return (
		<article className="max-w-96 w-full">
			<CardHeader
				title="Fecha del sorteo"
				variant="variant-header-primary"
			/>

			<div className="bg-hero-card rounded-md rounded-t-none flex items-center gap-4">
				<div className="bg-black/20 rounded-md rounded-t-none backdrop-blur-sm p-4 
					w-full grid grid-cols-2 gap-4">
					<CardDate
						title="Fecha inicio"
						date={ dateStart }
					/>

					<CardDate
						title="Fecha final"
						date={ dateEnd }
					/>
				</div>
			</div>
		</article>
	)
}
