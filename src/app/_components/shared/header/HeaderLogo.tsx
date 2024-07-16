import Link from "next/link"
import { TypographyH2 } from "../typography"

export const HeaderLogo = ({role}:{role: string}) => {
	return (
		<Link href={role === "ADMIN_ROLE" ? "/admin/dashboard" : "/"}>
			<TypographyH2 className="uppercase text-white">Sorteo</TypographyH2>
		</Link>

	)
}
