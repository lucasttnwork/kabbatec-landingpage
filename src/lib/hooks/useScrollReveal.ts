"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<T>(null);

  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  useEffect(() => {
    // Respeitar prefers-reduced-motion: revelar sem animações
    const prefersReducedMotion = typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasTriggered(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (triggerOnce && hasTriggered) return;

          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) setHasTriggered(true);
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  // Verificar se o usuário prefere movimento reduzido
  const prefersReducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const transitionClass = prefersReducedMotion
    ? "transition-opacity duration-300"
    : "transition-all duration-600 ease-out";

  return {
    ref: elementRef,
    isVisible,
    className: isVisible
      ? `opacity-100 ${prefersReducedMotion ? '' : 'translate-y-0'} ${transitionClass}`
      : `opacity-0 ${prefersReducedMotion ? '' : 'translate-y-8'} ${transitionClass}`,
  };
}
