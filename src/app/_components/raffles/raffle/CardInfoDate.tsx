import { TypographyH4, TypographyP } from "../../shared/typography"

interface Props {
	title: string,
	date: Date
}

export const CardInfoDate = ({date,title}:Props) => {
	return (
		<div className="flex flex-col gap-2 items-center">
			<TypographyH4>{title}</TypographyH4>
			<div className="bg-gradient-to-l from-blue-app-light-800 to-purple-app-200 
				rounded-md text-center w-full px-4 py-1 text-white
				font-semibold">
				<TypographyP>{date.toLocaleDateString('es-ES')}</TypographyP>
			</div>
		</div>
	)
}
