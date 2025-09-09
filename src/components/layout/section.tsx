import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-20 lg:py-24", className)}
        {...props}
      />
    );
  },
);
Section.displayName = "Section";

export { Section };
