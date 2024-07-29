import { cn } from "@/app/_lib/utils"
import { TypographyH3, TypographyP } from "../../shared/typography"

interface Props {
	className?: string
	title: string
	describe: string
}

export const CardInfoDescribe = ({describe,title,className}:Props) => {
	return (
		<div className="space-y-2">
			<TypographyH3 className="text-xl lg:text-xl">{title}</TypographyH3>
			<div className={cn("p-2 rounded-md",className)}>
				<TypographyP className="text-sm lg:text-sm">{describe}</TypographyP>
			</div>
		</div>
	)
}
