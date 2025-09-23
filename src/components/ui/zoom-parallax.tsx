"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useMemo, useRef } from "react";

interface ZoomImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: ZoomImage[]; // ideal 7 imagens ou mais
  /**
   * Índice do cartão central (terá overlay/blur, mas participa do parallax).
   * Por padrão usa o segundo item (1), similar ao exemplo de referência.
   */
  centerIndex?: number;
  /** Conteúdo de overlay para o card central (nome e descrição da academia) */
  centerOverlay?: React.ReactNode;
  /** Escala máxima do card central ao final do scroll (não ocupar tela inteira) */
  centerMaxScale?: number; // ex.: 2.2 a 2.8
}

export function ZoomParallax({ images, centerIndex = 1, centerOverlay, centerMaxScale = 2.4 }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  // Mapeia sequências de escala conforme o exemplo de referência
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const centerScale = useTransform(scrollYProgress, [0, 1], [1, centerMaxScale]);
  const scales = useMemo(() => [scale4, scale5, scale6, scale5, scale6, scale8, scale9], [scale4, scale5, scale6, scale8, scale9]);

  return (
    <div ref={container} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const scale = index === centerIndex ? centerScale : scales[index % scales.length];

          // Classes posicionais conforme exemplo original, adaptadas para Next/Image
          const positional =
            // Card central menor e visível desde o início. Não ocupa a tela ao dar zoom.
            `${index === centerIndex ? "[&>div]:!top-[10vh] [&>div]:!left-[34vw] [&>div]:!h-[30vh] [&>div]:!w-[22vw]" : ""} ` +
            `${index === 2 ? "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]" : ""} ` +
            `${index === 3 ? "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]" : ""} ` +
            `${index === 4 ? "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]" : ""} ` +
            `${index === 5 ? "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]" : ""} ` +
            `${index === 6 ? "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]" : ""}`;

          const isCenter = index === centerIndex;

          return (
            <motion.div key={index} style={{ scale }} className={`absolute top-0 flex h-full w-full items-center justify-center ${positional}`}>
              <div className={`relative h-[25vh] w-[25vw] ${isCenter ? "z-20" : "z-10"}`}>
                <img src={src} alt={alt || `Parallax image ${index + 1}`} className={`h-full w-full object-cover ${isCenter ? "blur-[2px]" : ""}`} />

                {isCenter && centerOverlay && (
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="relative px-6 text-center text-white max-w-[28rem] mx-auto pointer-events-auto">
                      {centerOverlay}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ZoomParallax;


