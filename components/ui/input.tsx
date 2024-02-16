import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "flex md:h-[56px] w-3/4 rounded-lg bg-background px-3 py-2 text-lg font-medium ring-offset-background border-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        outline: "flex h-[36px] w-3/4 rounded-lg bg-background px-3 py-2 text-lg font-medium ring-offset-background border-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        secondary: "flex h-[44px] text-white  w-full rounded-lg bg-black px-3 py-2 text-md font-light bg-black placeholder:text-neutral-500 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-50",
        tertiary: "flex h-[44px] text-white  w-32 roundedmd bg-black px-3 py-2 text-md font-light placeholder:text-neutral-500 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-50",
        textArea: "flex h-[70px] text-white  w-full rounded-lg bg-black px-3 py-2 text-md font-light placeholder:text-neutral-500 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
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

export { Input, inputVariants }