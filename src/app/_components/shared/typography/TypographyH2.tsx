import { cn } from "@/app/_lib/utils"

interface Props {
	children:React.ReactNode,
	className?:string
}

export const TypographyH2 = ({children, className}:Props) => {
	return (
		<h2 className={cn(
			"scroll-m-20 text-3xl font-semibold tracking-tight",
			className
		)}>
      {children}
    </h2>
	)
}
