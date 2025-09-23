"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { TextReveal, StaggerReveal } from "@/components/ui/advanced-animations";
import { Trophy, Target, Smile, Gem } from "lucide-react";

export function ProvaSocialSection() {
  const testimonials = [
    {
      quote: "Meus concorrentes estudam o que criamos juntos.",
      author: "Fundador",
      company: "Elite Core",
      Icon: Trophy,
      color: "blue",
    },
    {
      quote: "Finalmente o padrão que eu esperava encontrar.",
      author: "CEO",
      company: "First Move",
      Icon: Target,
      color: "green",
    },
    {
      quote: "Dormi tranquilo durante toda a obra. Primeira vez.",
      author: "Proprietário",
      company: "Two Ases",
      Icon: Smile,
      color: "purple",
    },
    {
      quote: "Cada detalhe pensado para impressionar. E impressiona.",
      author: "Sócio",
      company: "Projeto em andamento",
      Icon: Gem,
      color: "orange",
    },
  ];

  return (
    <section className="section scroll-reveal">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header Bento */}
          <div className="text-center mb-20">
            <BentoCard variant="outline" size="lg" className="max-w-4xl mx-auto">
              <TextReveal>
                <h2 className="text-display-xl font-serif font-light text-white mb-8 tracking-tight">
                  O que dizem quando pensam que não estamos ouvindo
                </h2>
              </TextReveal>
            </BentoCard>
          </div>

          {/* Testimonials Bento Grid */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <BentoCard
                key={index}
                variant={index % 2 === 0 ? "glass" : "gradient"}
                size="xl"
                delay={index}
                className="relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs text-white border border-white/20 font-inter font-medium">
                    Cliente
                  </span>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 flex-shrink-0">
                    <testimonial.Icon className="w-7 h-7 text-[oklch(var(--accent))]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <TextReveal delay={index * 0.1}>
                      <blockquote className="text-body-lg font-inter font-medium text-white mb-6 leading-relaxed tracking-tight">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </TextReveal>
                    <div>
                      <p className="text-body-sm font-inter font-medium text-white tracking-tighter">
                        — {testimonial.author}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </StaggerReveal>

          {/* Bottom Message Bento */}
          <div className="text-center">
            <BentoCard variant="glass" size="lg" className="max-w-3xl mx-auto" delay={4}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <TextReveal delay={0.6}>
                  <p className="text-body-lg text-white font-inter font-light tracking-tighter leading-relaxed">
                    Cada detalhe pensado para impressionar. E impressiona.
                  </p>
                </TextReveal>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}