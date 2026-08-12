import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-display text-sm font-medium tracking-tight transition-[transform,background-color,color,box-shadow,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-silver disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        silver:
          "bg-accent text-accent-fg shadow-sm hover:bg-silver-bright",
        navy: "bg-navy text-fg hover:bg-navy-mid",
        outline:
          "border border-line bg-transparent text-fg hover:border-line-strong hover:bg-fg/5",
        outlineInk:
          "border border-line-ink bg-transparent text-navy hover:bg-navy/5",
        ghost: "bg-transparent text-fg hover:bg-fg/8",
        ghostInk: "bg-transparent text-navy hover:bg-navy/6",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-sm",
        xl: "h-12 min-h-12 px-7 text-base",
        sm: "h-9 px-3.5 text-xs",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "silver",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
