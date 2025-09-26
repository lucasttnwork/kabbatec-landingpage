"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Card } from "@/components/ui/card";
import { designSystem } from "@/lib/design-system";

const pillars = [
  {
    title: "Execução fiel",
    highlight: "Ambientes entregues como foram concebidos, sem adaptações genéricas.",
    detail: undefined
  },
  {
    title: "Prazo blindado",
    highlight:
      "Cuidado excepcional com os prazos necessarios e cumprimento do combinado para inauguração sem dores de cabeça",
    detail: "Início imediato e zero retrabalho."
  },
  {
    title: "Transparência total",
    highlight:
      "Proximidade exclusiva com informações e relatórios do andamento completo da obra",
    detail: undefined
  },
  {
    title: "Metodologia Kabbatec",
    highlight: "Processo proprietário assinado por especialistas em academias premium.",
    detail: "Equipe dedicada do briefing à entrega."
  }
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "8%"]); 

  return (
    <section ref={sectionRef} className="scroll-reveal">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            aria-hidden="true"
            style={{ y }}
            className="absolute inset-0 bg-[url('/images/experience-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-70 filter saturate-[0.75] will-change-transform"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,22,38,0.9),_rgba(0,0,0,0.78))]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050b14] via-[#050b14]/40 to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-[#050b14] via-[#050b14]/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="text-center space-y-5">
            <div className={`${designSystem.components.badge} mx-auto w-fit`}>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className={`${designSystem.typography.sizes.sm} ${designSystem.typography.weights.light} ${designSystem.typography.fontFamily} ${designSystem.typography.spacing.wide}`}>
                Por que escolher a Kabbatec
              </span>
            </div>
            <h2 className={`${designSystem.typography.sizes['3xl']} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.light} text-white text-balance tracking-[0.12em] uppercase`}>
              Experiência arquitetada para visionários
            </h2>
            <p className={`${designSystem.typography.sizes.lg} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed max-w-2xl mx-auto`}>
              Combinação de método, ritmo e transparência que preserva sua visão até o último detalhe e entrega academias que se tornam referência.
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-[minmax(0,680px)_1fr] lg:gap-14">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="group relative overflow-hidden border-white/10 bg-white/[0.05] p-6 transition-all duration-500 hover:border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.42em] text-white/35">Pilar</p>
                    <h3 className={`${designSystem.typography.sizes['2xl']} ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.medium} tracking-wide`}>
                      {pillar.title}
                    </h3>
                    <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-snug`}>
                      {pillar.highlight}
                    </p>
                    {pillar.detail && (
                      <p className={`${designSystem.typography.sizes.sm} text-white/50 ${designSystem.typography.fontFamily} ${designSystem.typography.weights.light} leading-snug`}>
                        {pillar.detail}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

