"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagicBento } from "@/components/ui/magic-bento";
import { CTAOptimizations } from "@/components/ui/advanced-animations";
import BlurText from "@/components/ui/blur-text";
import { ScrollZoomGallery } from "@/components/ui/scroll-zoom-gallery";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export function CasesSection() {
  const cases = [
    {
      id: "elite-core",
      title: "Elite Core",
      image: "https://picsum.photos/seed/elite-core/1200/900",
      description: "“Não queria ser mais uma. Hoje é a única.” Quando conhecemos a visão da Elite Core, entendemos: isso não é sobre construir uma academia. É sobre estabelecer o novo padrão de Vila Olímpia. Cada centímetro curado. Cada material questionado. Cada detalhe elevado. Resultado: Referência absoluta. Ponto.",
      category: "Referência",
      features: [
        "Cada centímetro curado",
        "Materiais questionados",
        "Detalhes elevados",
        "Padrão Vila Olímpia",
        "Referência absoluta"
      ]
    },
    {
      id: "first-move",
      title: "First Move",
      image: "https://picsum.photos/seed/first-move/1200/900",
      description: "“Reinventou o conceito antes mesmo de abrir.” First Move tinha uma obsessão: criar algo que fizesse profissionais de alta performance pararem e pensarem “finalmente”. Não explicamos como fazer. Nós fizemos. Resultado: Vila Olímpia já considera o padrão.",
      category: "Reinvenção",
      features: [
        "Obcecado pelo 'finalmente'",
        "Alta performance",
        "Fizemos, não explicamos",
        "Padrão reconhecido"
      ]
    },
    {
      id: "two-ases",
      title: "Two Ases",
      image: "https://picsum.photos/seed/two-ases/1200/900",
      description: "“Nove alunos por horário. Moema entendeu.” Densidade premium não se explica, se sente. Two Ases precisava que cada detalhe justificasse o preço. E cada detalhe justifica. Resultado: Concorrentes mandam equipes para “entender como”.",
      category: "Densidade Premium",
      metrics: {
        label: "Alunos/Horário",
        value: "9"
      },
      features: [
        "Densidade premium",
        "Cada detalhe justifica",
        "Reconhecimento de Moema",
        "Concorrentes estudam"
      ]
    }
  ];

  return (
    <section id="cases" className="section">
      <div className="container">
        <div className="max-w-7xl mx-auto max-w-full">
          {/* Header */}
          <div className="text-center mb-2xl">
            <p className="text-lg text-white/60 font-inter font-light tracking-[3px] uppercase mb-[30px]">
              PORTIFÓLIO
            </p>
            <BlurText
              as="h2"
              text="Alguns resultados você não precisa explicar. Apenas existem."
              className="text-[44px] font-serif font-light text-white leading-[1.1] max-w-[40ch] tracking-[0.08em] uppercase mx-auto justify-center"
              animateBy="words"
              direction="top"
              delay={120}
            />
          </div>

          {/* Zoom Parallax Galleries (3 instâncias em sequência), seguindo o modelo da referência */}
          <div className="space-y-24">
            <ZoomParallax
              images={[
                { src: "https://picsum.photos/seed/elite-core-1/1200/900" },
                { src: "https://picsum.photos/seed/elite-core-2/1200/900" },
                { src: "https://picsum.photos/seed/elite-core-3/1200/900" },
                { src: "https://picsum.photos/seed/elite-core-4/1200/900" },
                { src: "https://picsum.photos/seed/elite-core-5/1200/900" },
                { src: "https://picsum.photos/seed/elite-core-6/1200/900" },
                { src: "https://picsum.photos/seed/elite-core-7/1200/900" },
              ]}
              centerIndex={1}
              centerOverlay={(
                <div className="mx-auto max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-4">
                    Elite Core
                  </h3>
                  <p className="text-white/90 font-inter text-base md:text-lg leading-relaxed">
                    “Não queria ser mais uma. Hoje é a única.” Cada centímetro curado,
                    cada material questionado, cada detalhe elevado. Referência absoluta
                    em Vila Olímpia.
                  </p>
                </div>
              )}
            />

            <ZoomParallax
              images={[
                { src: "https://picsum.photos/seed/first-move-1/1200/900" },
                { src: "https://picsum.photos/seed/first-move-2/1200/900" },
                { src: "https://picsum.photos/seed/first-move-3/1200/900" },
                { src: "https://picsum.photos/seed/first-move-4/1200/900" },
                { src: "https://picsum.photos/seed/first-move-5/1200/900" },
                { src: "https://picsum.photos/seed/first-move-6/1200/900" },
                { src: "https://picsum.photos/seed/first-move-7/1200/900" },
              ]}
              centerIndex={1}
              centerOverlay={(
                <div className="mx-auto max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-4">
                    First Move
                  </h3>
                  <p className="text-white/90 font-inter text-base md:text-lg leading-relaxed">
                    “Reinventou o conceito antes mesmo de abrir.” Obcecado pelo “finalmente”.
                    Fizemos, não explicamos. Vila Olímpia já considera o padrão.
                  </p>
                </div>
              )}
            />

            <ZoomParallax
              images={[
                { src: "https://picsum.photos/seed/two-ases-1/1200/900" },
                { src: "https://picsum.photos/seed/two-ases-2/1200/900" },
                { src: "https://picsum.photos/seed/two-ases-3/1200/900" },
                { src: "https://picsum.photos/seed/two-ases-4/1200/900" },
                { src: "https://picsum.photos/seed/two-ases-5/1200/900" },
                { src: "https://picsum.photos/seed/two-ases-6/1200/900" },
                { src: "https://picsum.photos/seed/two-ases-7/1200/900" },
              ]}
              centerIndex={1}
              centerOverlay={(
                <div className="mx-auto max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-4">
                    Two Ases
                  </h3>
                  <p className="text-white/90 font-inter text-base md:text-lg leading-relaxed">
                    “Nove alunos por horário. Moema entendeu.” Densidade premium não se explica,
                    se sente. Cada detalhe justifica.
                  </p>
                </div>
              )}
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-2xl">
            <div className="bg-white/5 border border-white/10 p-xl rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-inter font-light text-white mb-8 tracking-tight leading-tight">
                Pronto para criar sua referência?
              </h3>
              <p className="text-xl text-white/80 font-inter font-light tracking-tighter mb-12">
                Trabalhamos com 5 projetos por vez. Máximo.
              </p>

              <CTAOptimizations
                scarcityText="Apenas 5 projetos simultâneos"
              >
                <Link href="#contato">
                  <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90 font-inter font-medium tracking-tighter px-8 py-4 tap-target">
                    Vamos conversar
                  </Button>
                </Link>
              </CTAOptimizations>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}