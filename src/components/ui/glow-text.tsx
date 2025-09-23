"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

interface GlowTextProps {
  text?: string;
  delay?: number;
  className?: string;
  glowType?: 'subtle' | 'pulse' | 'glow' | 'static';
  glowColor?: string;
  glowDelay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  style?: React.CSSProperties;
}

const GlowText = ({
  text = '',
  delay = 200,
  className = '',
  glowType = 'glow',
  glowColor = 'rgba(245, 158, 11, 0.6)', // Default amber glow
  glowDelay = 0,
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  style
}: GlowTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (inView && glowDelay > 0 && glowType === 'static') {
      const timer = setTimeout(() => {
        setShowGlow(true);
      }, glowDelay);
      return () => clearTimeout(timer);
    } else if (inView && glowType !== 'static') {
      setShowGlow(true);
    }
  }, [inView, glowDelay, glowType]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot: Record<string, string | number> = animationFrom ?? defaultFrom;
  const toSnapshots: Array<Record<string, string | number>> = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  const getGlowClass = () => {
    switch (glowType) {
      case 'subtle':
        return showGlow ? 'glow-text-subtle' : '';
      case 'pulse':
        return showGlow ? 'glow-text-pulse' : '';
      case 'glow':
        return showGlow ? 'glow-text' : '';
      case 'static':
        return showGlow ? 'glow-text-static glow-text-smooth' : '';
      default:
        return showGlow ? 'glow-text' : '';
    }
  };

  return (
    <p ref={ref} className={`glow-text-container ${className} flex flex-wrap`} style={style}>
      {elements.map((segment, index) => {
        const animateKeyframes = {
          ...fromSnapshot,
          ...toSnapshots[0],
          ...toSnapshots[1]
        };

        const spanTransition: { duration: number; times: number[]; delay: number; ease?: (t: number) => number } = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className={`inline-block will-change-[transform,filter,opacity] ${getGlowClass()}`}
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{
              textShadow: glowType === 'static' ?
                (showGlow ?
                  `0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.6), 0 0 24px rgba(255, 255, 255, 0.4)` :
                  '0 0 8px rgba(255, 255, 255, 0), 0 0 16px rgba(255, 255, 255, 0), 0 0 24px rgba(255, 255, 255, 0)'
                ) :
                glowType === 'subtle' ?
                  (showGlow ? `0 0 8px ${glowColor}, 0 0 16px ${glowColor.replace('0.6', '0.2')}` : 'none') :
                  undefined,
              transition: glowType === 'static' ? 'text-shadow 1.5s ease-out' : undefined
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default GlowText;
