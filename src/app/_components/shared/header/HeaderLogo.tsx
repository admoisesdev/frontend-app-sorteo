'use client'

import Link from "next/link"
import { TypographyH2 } from "../typography"
import { useEffect, useState } from "react";

export const HeaderLogo = ({role}:{role: string}) => {

	const [href, setHref] = useState("/");

	useEffect(() => {
		if (role === "ADMIN_ROLE") {
			setHref("/admin/dashboard");
		}
	}, [role]);

	return (
		<Link href={href}>
			<TypographyH2 className="uppercase text-white">Sorteo</TypographyH2>
		</Link>

	)
}	
