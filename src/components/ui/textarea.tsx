import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full resize-y rounded-md border border-line bg-navy-mid/60 px-3.5 py-3 text-base text-fg transition-[border-color,box-shadow,background-color] duration-150 ease-out placeholder:text-fg-muted/70 hover:border-line-strong focus-visible:border-silver/50 focus-visible:bg-navy-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/25 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
