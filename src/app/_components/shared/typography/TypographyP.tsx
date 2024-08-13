import { cn } from '../../../_lib/utils';
interface Props {
	children: React.ReactNode;
	className?: string;
}

export const TypographyP = ({ children, className }: Props) => {
	return <p className={cn('leading-6', className)}>{children}</p>;
};
