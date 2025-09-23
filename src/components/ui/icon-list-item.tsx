import * as React from "react";
import { cn } from "@/lib/utils";

export interface IconListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  iconColor?: string;
}

export const IconListItem = React.forwardRef<HTMLDivElement, IconListItemProps>(
  ({ className, icon, title, description, iconColor = "text-blue-400", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/8 transition-colors",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex-shrink-0 mt-1">
            <div className={cn("w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center", iconColor)}>
              {typeof icon === 'string' ? (
                <span className="text-lg">{icon}</span>
              ) : (
                React.cloneElement(icon as React.ReactElement<Record<string, unknown>>, {
                  className: cn("h-4 w-4", iconColor)
                })
              )}
            </div>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-medium text-white mb-1">{title}</h4>
          {description && (
            <p className="text-sm text-white/70 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    );
  }
);

IconListItem.displayName = "IconListItem";
