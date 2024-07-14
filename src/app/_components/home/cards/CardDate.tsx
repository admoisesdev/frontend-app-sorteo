import { TypographyH4, TypographyP } from "../../shared/typography"

interface Props {
	title: string,
	date: Date
}

export const CardDate = ({title,date}:Props) => {
	return (
		<div className="space-y-1 text-center">
			<TypographyH4 className="text-white">{title}</TypographyH4>
			<div className="bg-white/50 backdrop-blur-md rounded-md">
				<TypographyP>{date.toLocaleDateString('es-ES')}</TypographyP>
			</div>
		</div>
	)
}
