import { TypographyH4, TypographyP } from "../../shared/typography"
import { CardHeader } from "./CardHeader"

export const CardPremio = ({premio}:{premio: string}) => {
	return (
		<article className="max-w-96 w-full">
			<CardHeader
				title="Sorteo de Programación"
				variant="variant-header-secondary"
			/>

			<div className="bg-hero-card rounded-md rounded-t-none">
				<div className="bg-black/20 space-y-1 rounded-md rounded-t-none backdrop-blur-sm p-4">
					<TypographyH4 className="text-white">Premio</TypographyH4>
					<div className="bg-white/50 text-center backdrop-blur-md rounded-md">
						<TypographyP>{premio}</TypographyP>
					</div>
				</div>
			</div>
		</article>
	)
}
