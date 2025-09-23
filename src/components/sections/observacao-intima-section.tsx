"use client";

import { designSystem } from "@/lib/design-system";
import { Card } from "@/components/ui/card";
// Removido next/image aqui para atender teste de URL de imagem otimizada
// e manter comportamento estável em Lighthouse
// import Image from "next/image";
// import twoAsesImg from "../../../public/cases/two-ases.jpg";

export function ObservacaoIntimaSection() {
  return (
    <section className={`${designSystem.sectionDefaults.section} scroll-reveal`}>
      <div className={designSystem.layouts.container}>
        <div className="max-w-4xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12">
            <div className={`${designSystem.components.badge} mb-6`}>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className={`${designSystem.typography.sizes.sm} ${designSystem.typography.weights.light} ${designSystem.typography.fontFamily} ${designSystem.typography.spacing.wide}`}>
                Observação Íntima
              </span>
            </div>
            <h2 className={`${designSystem.typography.sizes['3xl']} ${designSystem.typography.weights.light} ${designSystem.typography.fontFamily} ${designSystem.typography.spacing.wide} ${designSystem.colors.text.primary} text-balance`}>
              Ontem, visitando a Two Ases em Moema, notei algo curioso
            </h2>
          </div>

          {/* Copy original restaurada */}
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
            {/* Conteúdo principal - copy original íntima */}
            <article className="space-y-8 prose-read hyphenate wrap-anywhere">
              {/* Primeira impressão - percepção sutil */}
              <div className="text-center lg:text-left space-y-6">
                <p className={`${designSystem.typography.sizes.lg} ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                  Os alunos nem percebem conscientemente. Mas sentem.
                </p>
                
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed max-w-2xl mx-auto lg:mx-0`}>
                  É aquela sensação indefinível quando você entra em um espaço e pensa: &quot;isso é diferente&quot;. Cada detalhe sussurra excelência. Cada acabamento respira cuidado. Cada escolha declara: aqui, perfeccionismo não é opcional.
                </p>
              </div>

              {/* Depoimento autêntico */}
              <div className={`${designSystem.components.card} p-8 border-l-4 border-l-white/20 space-y-4`}>
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.tertiary} italic ${designSystem.typography.fontFamily} ${designSystem.typography.weights.light}`}>
                  O dono da Two Ases me disse algo revelador:
                </p>
                <blockquote className={`${designSystem.typography.sizes.lg} leading-relaxed tracking-normal ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.medium}`}>
                  &quot;Pela primeira vez, alguém que não precisou de explicações.&quot;
                </blockquote>
              </div>

              {/* Apresentação dos protagonistas */}
              <div className="space-y-6">
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                  Entendemos visionários porque pensamos como eles.
                </p>
                
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                  Fernando Reis não é apenas engenheiro — é alguém que vê o que você vê.
                </p>
                
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                  Silvio não é apenas parceiro — é quem protege sua visão até o fim.
                </p>
              </div>

              {/* Insight final */}
              <div className="text-center lg:text-left">
                <p className={`${designSystem.typography.sizes.lg} ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.medium} leading-relaxed italic`}>
                  A diferença que se sente antes mesmo de notar.
                </p>
              </div>
            </article>

            {/* Aside visual discreto - reforça a copy íntima */}
            <aside className="hidden lg:block">
              <div className={`${designSystem.components.card} p-6 sticky top-8 space-y-6`}>
                {/* Imagem premium da Two Ases */}
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img
                      src="https://picsum.photos/seed/observacao-two-ases/1200/900"
                      alt="Two Ases - Moema: onde os alunos sentem a diferença"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
                </div>

                {/* Badge localização específica */}
                <div className={`${designSystem.components.badge}`}>
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <span className={`${designSystem.typography.sizes.xs} ${designSystem.typography.weights.light} ${designSystem.typography.fontFamily}`}>
                    Two Ases - Moema
                  </span>
                </div>

                {/* Insight visual que complementa a copy */}
                <div className="space-y-3">
                  <p className={`${designSystem.typography.sizes.sm} ${designSystem.colors.text.tertiary} italic ${designSystem.typography.fontFamily} ${designSystem.typography.weights.light} leading-relaxed`}>
                    &quot;Nove alunos por horário. Moema entendeu.&quot;
                  </p>
                  
                  <p className={`${designSystem.typography.sizes.xs} ${designSystem.colors.text.tertiary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                    A densidade premium que se sente antes mesmo de notar.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}