import { TypographyH3 } from "../../shared/typography"

type variants = "variant-header-primary" | "variant-header-secondary"

interface Props {
	title:string
	variant:variants
}

export const CardHeader = ({title,variant}:Props) => {
	return (
		<header className={`rounded-md rounded-b-none px-4 py-1 text-center ${variant}`}>
			<TypographyH3>{title}</TypographyH3>
		</header>
	)
}
