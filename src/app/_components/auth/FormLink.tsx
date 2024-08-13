import Link from "next/link"

import { cn } from "@/app/_lib/utils"
import { TypographyP } from "../shared/typography"

interface Props {
	description:string
	textLink:string
	to:string
	className?: string
}

export const FormLink = ({description,textLink,to,className}: Props) => {
	return (
		<div className={cn("bg-white/30 backdrop-blur-md py-1 rounded-md text-center",className)}>
			<TypographyP>
				{description} 
				<Link href={to} className="ml-2">{textLink}</Link>
			</TypographyP>
		</div>
	)
}
