import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-line bg-navy-mid/60 px-3.5 text-base text-fg shadow-none transition-[border-color,box-shadow,background-color] duration-150 ease-out placeholder:text-fg-muted/70 hover:border-line-strong focus-visible:border-silver/50 focus-visible:bg-navy-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/25 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
