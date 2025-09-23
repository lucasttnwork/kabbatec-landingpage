import * as React from "react";
import { cn } from "@/lib/utils";

export interface FinalProblemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string;
  illustration?: React.ReactNode;
  variant?: "default" | "highlight";
}

export const FinalProblemCard = React.forwardRef<HTMLDivElement, FinalProblemCardProps>(
  ({ className, title, content, illustration, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/5 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.08)] backdrop-blur-sm p-8 rounded-2xl transition-all duration-300",
          // Dimensões padronizadas responsivas
          "max-w-md md:max-w-lg lg:max-w-xl",
          // Espaçamento interno padronizado
          "gap-3 md:gap-4",
          // Tipografia com clamp
          "[&>p:first-of-type]:text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] [&>p:first-of-type]:font-light [&>p:first-of-type]:text-white [&>p:first-of-type]:leading-relaxed",
          "[&>p:nth-of-type(2)]:text-[clamp(0.95rem,0.9rem+0.5vw,1.125rem)] [&>p:nth-of-type(2)]:text-white/70 [&>p:nth-of-type(2)]:font-normal",
          "[&>p:nth-of-type(3)]:text-[clamp(0.875rem,0.8rem+0.4vw,1rem)] [&>p:nth-of-type(3)]:text-white/50 [&>p:nth-of-type(3)]:font-light",
          className
        )}
        {...props}
      >
        {title && (
          <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
        )}

        <div className="space-y-3">
          <p>{content}</p>

          {illustration && (
            <div className="flex justify-center mt-6">
              <div className="w-full max-w-xs aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                {illustration}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

FinalProblemCard.displayName = "FinalProblemCard";
