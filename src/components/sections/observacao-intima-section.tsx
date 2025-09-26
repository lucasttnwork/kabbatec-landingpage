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
        <div className="max-w-6xl mx-auto">
          {/* Conteúdo principal */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
            <Card className="p-10 space-y-8 bg-white/[0.06] border-white/10">
              <h2 className={`${designSystem.typography.sizes['3xl']} ${designSystem.typography.weights.light} ${designSystem.typography.fontFamily} ${designSystem.typography.spacing.wide} ${designSystem.colors.text.primary} text-left`}>
                Depois que entregamos a obra da Elite Core, notamos algo curioso
              </h2>
              <div className="space-y-4 text-left">
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                  Ao cruzar a porta da Elite Core, tudo — aroma, acústica, iluminação — parecia coreografado para inspirar resultados extraordinários. Não há distrações, apenas uma sensação silenciosa de que você está exatamente onde deveria estar.
                </p>
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                  Eles não falam sobre excelência: eles a demonstram em cada detalhe que passa despercebido a olho nu, mas é sentido pelo corpo inteiro.
                </p>
                <p className={`${designSystem.typography.sizes.lg} ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.medium} leading-relaxed`}>
                  <strong>Essas são as histórias que nos orgulhamos de ajudar a construir.</strong>
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className={`${designSystem.typography.sizes.base} ${designSystem.colors.text.primary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.medium} leading-relaxed italic`}>
                  Quando a experiência é desenhada com precisão, a confiança nasce antes da primeira conversa.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/[0.04] border-white/10 space-y-6">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://picsum.photos/seed/observacao-two-ases/1200/900"
                  alt="Ambiente da Two Ases em Moema"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/20" />
              </div>

              <p className={`${designSystem.typography.sizes.sm} ${designSystem.colors.text.secondary} ${designSystem.typography.fontFamily} ${designSystem.typography.weights.normal} leading-relaxed`}>
                Espaços de alta performance não precisam de holofotes. Eles brilham na forma como cada pessoa se sente parte de algo raro.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}