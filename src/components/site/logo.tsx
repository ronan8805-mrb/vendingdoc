import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  imgClassName,
  showWord = false,
}: {
  className?: string;
  imgClassName?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src="/logo.jpg"
        alt="Vending Doc"
        width={160}
        height={160}
        className={cn(
          "rounded-full object-cover outline-none",
          imgClassName ?? "size-10",
        )}
      />
      {showWord ? (
        <span className="font-display text-sm font-medium tracking-[0.18em] text-fg uppercase">
          Vending Doc
        </span>
      ) : null}
    </span>
  );
}
