import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
  className,
  as: Comp = "h2",
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        "font-headline font-bold tracking-tight text-foreground",
        Comp === "h1" && "text-4xl md:text-5xl lg:text-6xl",
        Comp === "h2" && "text-3xl md:text-4xl",
        Comp === "h3" && "text-2xl md:text-3xl",
        className
      )}
      {...props}
    />
  );
}

interface SubheadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
}

export function Subheading({
  className,
  as: Comp = "p",
  ...props
}: SubheadingProps) {
  return (
    <Comp
      className={cn(
        "max-w-prose text-base text-muted-foreground sm:text-lg",
        className
      )}
      {...props}
    />
  );
}
