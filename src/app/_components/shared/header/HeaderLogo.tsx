import Link from "next/link"
import { TypographyH2 } from "../typography"

export const HeaderLogo = () => {
	return (
		<Link href="/">
			<TypographyH2 className="uppercase text-white">Sorteo</TypographyH2>
		</Link>

	)
}
