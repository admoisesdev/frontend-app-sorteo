import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { VariantProps } from "class-variance-authority"

interface Props extends VariantProps<typeof buttonVariants> {
	to: string
	text: string
}

export const DashBoardLink = ({size, variant,to,text}:Props) => {
	return (
		<Button
			size={size}
			variant={variant}>
			<Link
				href={to}>
				{text}
			</Link>
		</Button>
	)
}
