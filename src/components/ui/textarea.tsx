import * as React from 'react';

import { cn } from '@/utils/utils';

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'flex min-h-[80px] w-full rounded-md border-2 border-[#5B5E80] bg-transparent outline-none px-3 py-2 text-sm ring-offset-background placeholder:text-[#BABABA] disabled:cursor-not-allowed disabled:opacity-50 resize-none text-white',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Textarea.displayName = 'Textarea';

export { Textarea };
