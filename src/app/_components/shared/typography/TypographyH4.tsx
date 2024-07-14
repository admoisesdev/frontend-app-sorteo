import { cn } from "@/app/_lib/utils"

interface Props {
	children:React.ReactNode,
	className?:string
}

export const TypographyH4 = ({children, className}:Props) => {
	return (
		<h4 className={cn(
			"scroll-m-20 text-xl font-semibold tracking-tight",
			className
		)}>
      {children}
    </h4>
	)
}
