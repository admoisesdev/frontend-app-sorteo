import { TypographyH3, TypographyP } from "../../shared/typography"

interface Props {
	title: string
	description: string
}

export const CardFullInfo = ({title,description}:Props) => {
	return (
		<article className="max-w-96 bg-hero-card rounded-md w-full">
			<div className="bg-black/20 rounded-md h-full backdrop-blur-sm flex flex-col gap-2 px-4 py-2">
				<TypographyH3 className="text-white">{title}</TypographyH3>
				<div className="bg-white/50 backdrop-blur-md rounded-md p-2">
					<TypographyP>{description}</TypographyP>
				</div>
			</div>
		</article>
	)
}
