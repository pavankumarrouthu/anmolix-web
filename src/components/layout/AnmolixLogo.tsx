import { cn } from "@/lib/utils";

export default function AnmolixLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-sans text-2xl font-bold text-primary tracking-tighter",
        className
      )}
    >
      anmolix
    </div>
  );
}
