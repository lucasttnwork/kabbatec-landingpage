import React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { className, left, right, leftClassName, rightClassName, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 gap-8 md:grid-cols-10", className)}
        {...props}
      >
        <div className={cn("md:col-span-6", leftClassName)}>{left}</div>
        <div className={cn("md:col-span-4", rightClassName)}>{right}</div>
      </div>
    );
  },
);
Grid.displayName = "Grid";

export { Grid };
