"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useHoverLift } from "@/lib/hooks/useHoverLift";
import { useStaggeredAnimation } from "@/lib/hooks/useBentoAnimations";

export interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  hoverEffect?: boolean;
  animationType?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
}

const variants = {
  default: "bg-white/5 border border-white/10 backdrop-blur-sm",
  glass: "bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl",
  gradient: "bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-white/10 backdrop-blur-sm",
  outline: "border border-white/15 bg-transparent"
};

const sizes = {
  sm: "p-4 md:p-6",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-12",
  xl: "p-12 md:p-16"
};

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  }
};

export function BentoCard({
  children,
  className = "",
  variant = "glass",
  size = "md",
  delay = 0,
  hoverEffect = true,
  animationType = "fadeUp"
}: BentoCardProps) {
  const { onMouseEnter, onMouseLeave, className: hoverClassName, isHovered } = useHoverLift();
  const isAnimated = useStaggeredAnimation(delay, delay);

  const animation = animations[animationType];

  return (
    <motion.div
      initial={animation.initial}
      animate={isAnimated ? animation.animate : animation.initial}
      transition={{
        delay: delay * 0.1,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={`
        relative rounded-2xl md:rounded-3xl
        ${variants[variant]}
        ${sizes[size]}
        ${hoverEffect ? "hover-lift cursor-pointer" : ""}
        transition-all duration-300
        ${className}
      `}
      onMouseEnter={hoverEffect ? onMouseEnter : undefined}
      onMouseLeave={hoverEffect ? onMouseLeave : undefined}
    >
      {/* Subtle glow effect on hover */}
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
