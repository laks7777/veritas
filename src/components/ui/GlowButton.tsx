import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "crimson" | "white" | "ghost" | "outline" | "surface" | "green" | "cyan" | "red";
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-crimson text-white hover:bg-crimson-light border-crimson/50 shadow-sm",
  crimson:
    "bg-crimson text-white hover:bg-crimson-light border-crimson/60 shadow-sm",
  white:
    "bg-white text-black hover:bg-neutral-200 border-white font-medium",
  outline:
    "bg-transparent text-neutral-200 hover:text-white border-white/20 hover:border-white/50 hover:bg-white/[0.04]",
  ghost:
    "bg-transparent text-neutral-400 hover:text-white border-transparent hover:bg-white/[0.05]",
  surface:
    "bg-surface-100 text-neutral-200 hover:text-white border-white/10 hover:border-white/25",
  // Backward compatibility
  green:
    "bg-white text-black hover:bg-neutral-200 border-white font-medium",
  cyan:
    "bg-crimson text-white hover:bg-crimson-light border-crimson/60",
  red:
    "bg-crimson/20 text-crimson-light hover:bg-crimson/30 border-crimson/40",
};

const sizeClasses = {
  sm: "px-3.5 py-1.5 text-xs tracking-wider",
  md: "px-5 py-2.5 text-xs md:text-sm tracking-wider",
  lg: "px-7 py-3.5 text-xs md:text-sm tracking-widest font-semibold uppercase",
};

export function GlowButton({
  children,
  variant = "white",
  size = "md",
  className,
  disabled,
  ...props
}: GlowButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 font-sans uppercase rounded-none border",
        "transition-all duration-300 cursor-pointer text-center",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        variantClasses[variant] || variantClasses.white,
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
}