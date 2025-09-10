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
          "py-16 md:py-24", // 64px / 96px conforme design system
          alternate && "bg-[#F9FAFB]",
          className,
        )}
        {...props}
      />
    );
  },
);
Section.displayName = "Section";

export { Section };
