import { cn } from '../../../_lib/utils';

interface Props {
	children:React.ReactNode,
	className?:string
}

export const TypographyH3 = ({children, className}:Props) => {
	return (
		<h3 className={cn(
			"text-2xl font-semibold tracking-tight",
			className
		)}>
      {children}
    </h3>
	)
}
