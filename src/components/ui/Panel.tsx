import { cn } from "@/lib/utils";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  accent?: "crimson" | "white" | "green" | "cyan" | "red" | "yellow" | "none";
}

const accentClasses: Record<string, string> = {
  crimson: "border-t-crimson",
  red: "border-t-crimson",
  white: "border-t-white",
  green: "border-t-neutral-400",
  cyan: "border-t-crimson",
  yellow: "border-t-neutral-500",
  none: "",
};

export function Panel({ children, className, title, subtitle, accent = "none" }: PanelProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-white/10 rounded-none relative overflow-hidden",
        accent !== "none" && `border-t-2 ${accentClasses[accent]}`,
        className
      )}
    >
      {title && (
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans text-neutral-400 uppercase tracking-widest font-medium">
              {title}
            </span>
            {subtitle && (
              <span className="text-[10px] font-sans text-neutral-500 tracking-wider">
                {subtitle}
              </span>
            )}
          </div>
          <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
        </div>
      )}
      {children}
    </div>
  );
}