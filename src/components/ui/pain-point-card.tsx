import * as React from "react";
import { cn } from "@/lib/utils";

export interface PainPointCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  variant?: "critical" | "warning" | "info";
  iconColor?: string;
}

export const PainPointCard = React.forwardRef<HTMLDivElement, PainPointCardProps>(
  ({ className, icon, title, description, variant = "warning", iconColor, ...props }, ref) => {
    const variantStyles = {
      critical: {
        borderColor: "border-red-500/40",
        borderLeftColor: "border-l-red-500/60",
        bgColor: "bg-red-500/5",
        hoverBgColor: "hover:bg-red-500/8",
        iconColor: iconColor || "text-red-400"
      },
      warning: {
        borderColor: "border-yellow-500/40",
        borderLeftColor: "border-l-yellow-500/60",
        bgColor: "bg-yellow-500/5",
        hoverBgColor: "hover:bg-yellow-500/8",
        iconColor: iconColor || "text-yellow-400"
      },
      info: {
        borderColor: "border-blue-500/40",
        borderLeftColor: "border-l-blue-500/60",
        bgColor: "bg-blue-500/5",
        hoverBgColor: "hover:bg-blue-500/8",
        iconColor: iconColor || "text-blue-400"
      }
    };

    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg border transition-colors",
          styles.borderColor,
          styles.bgColor,
          styles.hoverBgColor,
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex-shrink-0">
            {typeof icon === 'string' ? (
              <span className="text-lg">{icon}</span>
            ) : (
              React.cloneElement(icon as React.ReactElement<Record<string, unknown>>, {
                className: cn("h-5 w-5", styles.iconColor)
              })
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className={cn(
            "text-sm font-inter",
            variant === "critical" ? "text-white/90" :
            variant === "warning" ? "text-white/80" :
            "text-white/70"
          )}>
            {title}
          </span>
          {description && (
            <p className="text-xs text-white/60 mt-1 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

PainPointCard.displayName = "PainPointCard";
