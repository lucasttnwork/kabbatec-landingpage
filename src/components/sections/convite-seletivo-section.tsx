"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAOptimizations, ProgressIndicator } from "@/components/ui/advanced-animations";

export function ConviteSeletivoSection() {
  return (
    <section className="py-32 scroll-reveal">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Espaçamento superior */}
          <div className="h-32"></div>

          {/* "Não é para todos" */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-inter font-light text-white tracking-tight leading-tight">
              Nem todo visionário está pronto
            </h2>
          </div>

          {/* Espaçamento */}
          <div className="h-24"></div>

          {/* Explicação curta e elegante */}
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="text-2xl lg:text-3xl text-white font-inter font-light leading-relaxed tracking-tighter">
              Trabalhamos com 5 projetos por vez. Máximo.
            </p>

            <p className="text-xl text-white/80 font-inter font-light leading-relaxed tracking-tighter">
              Porque excelência não escala fácil. Se escalasse, não seria excelência.
            </p>

            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <p className="text-lg text-white/90 font-inter font-light tracking-tighter mb-6">Se você:</p>
              <ul className="text-lg text-white/80 font-inter font-light tracking-tighter space-y-2 mb-6 list-disc list-inside">
                <li>Aceita que &quot;bom&quot; é suficiente</li>
                <li>Precisa do &quot;mais barato&quot;</li>
                <li>Tem pressa incompatível com perfeição</li>
              </ul>
              <p className="text-lg text-white/70 font-inter font-light tracking-tighter">Existem ótimas construtoras no mercado.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <p className="text-lg text-white/90 font-inter font-light tracking-tighter mb-6">Mas se você:</p>
              <ul className="text-lg text-white/80 font-inter font-light tracking-tighter space-y-2 list-disc list-inside">
                <li>Sabe a diferença que faz diferença</li>
                <li>Entende que referências não nascem de concessões</li>
                <li>Quer dormir tranquilo sabendo que sua visão está protegida</li>
              </ul>
            </div>
          </div>

          {/* Espaçamento */}
          <div className="h-20"></div>

          {/* CTA refinado */}
          <div className="text-center">
            <div className="bg-white/5 border border-white/10 p-16 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-inter font-light text-white mb-8 tracking-tight leading-tight">
                Se você entende a diferença, clique aqui
              </h3>

              {/* Progress Indicator */}
              <div className="mb-8">
                <ProgressIndicator current={3} total={5} />
              </div>

              <CTAOptimizations
                urgencyText="Processo seletivo rigoroso"
                scarcityText="Apenas 5 projetos por vez"
              >
                <Link href="#contato">
                  <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90 font-inter font-medium tracking-tighter px-8 py-4">
                    Conversa Seletiva
                  </Button>
                </Link>
              </CTAOptimizations>
            </div>
          </div>

          {/* Fechamento de posicionamento */}
          <div className="max-w-4xl mx-auto text-center mt-16 space-y-4">
            <p className="text-xl text-white/90 font-inter font-light tracking-tighter italic">
              Alguns constroem. Nós criamos referências.
            </p>
            <p className="text-lg text-white/80 font-inter font-light tracking-tighter italic">
              A diferença? Você sente, seus clientes admiram, seus concorrentes estudam.
            </p>
          </div>

          {/* Espaçamento final */}
          <div className="h-32"></div>
        </div>
      </div>
    </section>
  );
}