import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-background h-10 px-4 py-2",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2",
        ghost: "text-foreground hover:bg-accent/20",
        link: "text-foreground underline decoration-accent/60 decoration-2 underline-offset-4 hover:decoration-accent",
        premium: "border border-gold/50 bg-transparent text-white hover:bg-gold/10 hover:border-gold/70 font-medium tracking-wide shadow-sm hover:shadow-glow transition-all duration-300 [&_svg]:text-gold/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
