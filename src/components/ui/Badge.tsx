import { cn } from "@/lib/utils";

export type BadgeVariant = "crimson" | "white" | "neutral" | "gray" | "green" | "red" | "yellow" | "cyan";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  crimson: "bg-crimson/10 text-crimson-light border-crimson/30",
  red: "bg-crimson/10 text-crimson-light border-crimson/30",
  white: "bg-white/10 text-white border-white/20",
  neutral: "bg-white/[0.04] text-neutral-300 border-white/10",
  gray: "bg-white/[0.04] text-neutral-400 border-white/10",
  green: "bg-white/[0.06] text-neutral-200 border-white/15",
  yellow: "bg-neutral-800 text-neutral-300 border-neutral-700",
  cyan: "bg-crimson/10 text-crimson-light border-crimson/30",
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] sm:text-xs font-sans tracking-wider uppercase border",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}