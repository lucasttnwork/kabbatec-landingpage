import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  alternate?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, alternate = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-24 md:py-32", // OFF: respiro maior
          alternate && "bg-white/[0.02]",
          className,
        )}
        {...props}
      />
    );
  },
);
Section.displayName = "Section";

export { Section };
