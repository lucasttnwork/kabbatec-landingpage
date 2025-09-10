import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { useHoverLift } from "@/lib/hooks/useHoverLift";

export function HeroSection() {
  // Scroll reveal para o conteúdo principal
  const contentReveal = useScrollReveal({ threshold: 0.3, delay: 200 });
  // Scroll reveal para os badges
  const badgesReveal = useScrollReveal({ threshold: 0.3, delay: 100 });
  // Scroll reveal para os botões
  const buttonsReveal = useScrollReveal({ threshold: 0.3, delay: 400 });

  // Hover lift para os botões
  const primaryButtonHover = useHoverLift({ liftAmount: "-translate-y-1" });
  const secondaryButtonHover = useHoverLift({ liftAmount: "-translate-y-1" });

  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image - Temporário até ter imagem real */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Scrim Gradiente para contraste AA */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      {/* Container Principal */}
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Conteúdo Esquerda */}
          <div
            ref={contentReveal.ref}
            className={`space-y-8 text-white ${contentReveal.className}`}
          >
            {/* Badges de Prova Social */}
            <div
              ref={badgesReveal.ref}
              className={`flex flex-wrap gap-3 ${badgesReveal.className}`}
            >
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Elite Core ✓
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                First Move ✓
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Two Ases ✓
              </Badge>
            </div>

            {/* Headline H1 - 56px */}
            <h1 className="text-h1 font-bold leading-tight">
              A diferença entre sua academia personalizada virar realidade e ser destruída por &ldquo;adaptações&rdquo; genéricas
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-white/90 leading-relaxed max-w-xl">
              Como a Kabbatec executa projetos únicos de 600 a 1.000m² preservando cada detalhe personalizado em 70 dias, enquanto construtoras tradicionais destroem visões customizadas tentando encaixar tudo no mesmo molde viciado de sempre.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsReveal.ref}
              className={`flex flex-col sm:flex-row gap-4 pt-4 ${buttonsReveal.className}`}
            >
              <Button
                size="lg"
                className={`bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#f6ae2e] hover:to-[#c76a05] text-white shadow-lg hover:shadow-xl transition-all duration-300 ${primaryButtonHover.className}`}
                onMouseEnter={primaryButtonHover.onMouseEnter}
                onMouseLeave={primaryButtonHover.onMouseLeave}
                isLoading={false}
              >
                QUERO MINHA ANÁLISE GRATUITA
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 ${secondaryButtonHover.className}`}
                onMouseEnter={secondaryButtonHover.onMouseEnter}
                onMouseLeave={secondaryButtonHover.onMouseLeave}
              >
                CONHECER CASES
              </Button>
            </div>
          </div>

          {/* Visual Direita - Placeholder até ter imagem real */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-12 h-96 lg:h-[500px] flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="text-6xl mb-4">🏗️</div>
                <p className="text-lg">Hero Image</p>
                <p className="text-sm opacity-75">Elite Core Academy</p>
              </div>

              {/* Elementos decorativos sutis */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/20 rounded-full blur-sm" />
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator sutil */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </Section>
  );
}
