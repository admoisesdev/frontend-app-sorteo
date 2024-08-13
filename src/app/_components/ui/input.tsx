import * as React from "react"
import { cn } from "../../_lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex h-9 w-full px-3 py-1 bg-transparent outline-none text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md border border-input",
        auth:
          "bg-transparent border-b border-l px-2 text-base placeholder:text-blue-dark-app-800",
        destructive: 
        "bg-transparent border-b border-red-500 text-red-500 border-l px-2 text-base placeholder:text-red-500", 
        raffle: "bg-transparent border-2 border-gray-500 px-2 text-base placeholder:text-gray-400 rounded-sm",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: VariantProps<typeof inputVariants>["variant"]
  }
  
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant,...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
