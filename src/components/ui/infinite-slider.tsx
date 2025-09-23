"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion, type AnimationPlaybackControls } from "framer-motion";
import { useState, useEffect, useRef, type PropsWithChildren } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = PropsWithChildren<{
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}>;

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  pauseOnHover = false,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
		const pathLength = Math.abs(to - from) || 1; // evita divisão por zero

    // Se estiver pausado, interrompe animação atual e não inicia nova
    if (paused) {
      controlsRef.current?.stop();
      return;
    }

		if (isTransitioning) {
			controls = animate(translation, [translation.get(), to], {
				ease: "linear",
				duration:
					currentDuration * Math.abs((translation.get() - to) / pathLength),
				onComplete: () => {
					setIsTransitioning(false);
					setKey((prevKey) => prevKey + 1);
				},
			});
		} else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    controlsRef.current = controls ?? null;
    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
    paused,
  ]);

  const hoverProps = pauseOnHover
    ? {
        onHoverStart: () => {
          setPaused(true);
        },
        onHoverEnd: () => {
          setPaused(false);
          setIsTransitioning(true);
        },
      }
    : durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}


