"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type GalleryItem = {
  id: string;
  src: string;
  alt?: string;
};

interface ScrollZoomGalleryProps {
  items: GalleryItem[];
  /** index do item central que terá overlay de texto e blur */
  centerIndex?: number;
  /** Conteúdo a ser renderizado sobre o item central (ex.: nome da academia e textos) */
  centerOverlay?: React.ReactNode;
  /** Altura da galeria (px ou classe tailwind) */
  heightClassName?: string;
  /** Intensidade do zoom/parallax (0.05 a 0.4 recomendado) */
  zoomIntensity?: number;
  className?: string;
}

/**
 * Galeria com efeito de zoom/parallax ao rolar, inspirada em "Zoom Parallax".
 * - Renderiza uma coluna de imagens que escalam levemente conforme o scroll.
 * - O item central recebe blur e um overlay de texto.
 */
export function ScrollZoomGallery({
  items,
  centerIndex = Math.floor(items.length / 2),
  centerOverlay,
  heightClassName = "h-[80vh]",
  zoomIntensity = 0.18,
  className = "",
}: ScrollZoomGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Reduz movimento para usuários com preferências de acessibilidade
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduceMotion(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const scales = useMemo(() => {
    const base = zoomIntensity;
    // Cria uma escala diferente por item para dar leve variação
    return items.map((_, i) => {
      const variance = ((i % 3) - 1) * 0.04; // -0.04, 0, +0.04
      const from = 1 + Math.max(0, base + variance) * 0.25;
      const to = 1 + Math.max(0, base + variance);
      return { from, to };
    });
  }, [items, zoomIntensity]);

  return (
    <section ref={containerRef} className={`relative w-full ${heightClassName} overflow-hidden ${className}`} aria-label="Galeria com zoom e parallax">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/10" />

      <div className="relative h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 sm:gap-6 w-full max-w-6xl px-4">
          {items.map((item, idx) => {
            const isCenter = idx === centerIndex;
            const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [scales[idx].from, scales[idx].to]);

            return (
              <div key={item.id} className={`relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${isCenter ? "sm:scale-105" : ""}`}>
                <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
                  <Image
                    src={item.src}
                    alt={item.alt || "Imagem de portfólio"}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={`object-cover ${isCenter ? "blur-[2px]" : ""}`}
                    priority={isCenter}
                  />
                </motion.div>

                {isCenter && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
                    <div className="w-full max-w-[85%] text-center text-balance">
                      <div className="absolute inset-0 bg-black/35" />
                      <div className="relative">
                        {centerOverlay}
                      </div>
                    </div>
                  </div>
                )}

                {/* Vignette */}
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ScrollZoomGallery;


