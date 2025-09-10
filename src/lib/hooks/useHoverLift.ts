"use client";

import { useState, useEffect } from "react";

interface HoverLiftOptions {
  liftAmount?: string;
  duration?: string;
  easing?: string;
}

export function useHoverLift(options: HoverLiftOptions = {}) {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const {
    liftAmount = "-translate-y-1",
    duration = "duration-300",
    easing = "ease-out",
  } = options;

  useEffect(() => {
    // Verificar preferência de movimento reduzido
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const className = isHovered && !prefersReducedMotion
    ? `transform-gpu ${liftAmount} ${duration} ${easing}`
    : `transform-gpu ${duration} ${easing}`;

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className,
    isHovered,
  };
}
