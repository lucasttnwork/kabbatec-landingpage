"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck, ListCheck, Infinity } from "lucide-react";

export function PadraoKabbatecSection() {
  const processSteps = [
    {
      title: "Curadoria Pessoal",
      description: "Fernando e Silvio em cada projeto. Sem intermediários. Sem telefone sem fio. Sua visão, protegida.",
      visual: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Padrão Inegociável",
      description: '"Mais ou menos" não existe no nosso vocabulário. Se não está perfeito, refazemos.',
      visual: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
      title: "Você Sabe Tudo. Sempre.",
      description: "Transparência absoluta. Cada decisão. Cada mudança. Cada detalhe. Como deve ser.",
      visual: <ListCheck className="w-8 h-8 text-white" />
    },
    {
      title: "Continuidade Kabbani",
      description: "O mesmo padrão que criou as referências que você admira. De Raquel Kabbani à Kabbatec.",
      visual: <Infinity className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="padrao" className="py-32 scroll-reveal">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-light text-white tracking-tight leading-tight mb-8 text-balance">
              Da visão à realidade, sem concessões
            </h2>
            <p className="text-xl text-white/80 font-inter font-light tracking-tighter max-w-3xl mx-auto leading-relaxed prose-read hyphenate">
              <span>Existe um padrão que perfeccionistas reconhecem.</span><br />
              <span>Não é sobre materiais caros — é sobre os materiais certos.</span><br />
              <span>Não é sobre fazer rápido — é sobre fazer uma vez, perfeito.</span><br />
              <span>Não é sobre impressionar — é sobre o resultado falar por si.</span>
            </p>
          </div>

          {/* Espaçamento */}
          <div className="h-20"></div>

          {/* 4 elementos em diagonal (não grid) */}
          <div className="relative space-y-16">
            {processSteps.map((step, index) => {
              // Layout diagonal alternado
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'} justify-center`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {typeof step.visual === 'string' ? (
                        <span className="text-3xl">{step.visual}</span>
                      ) : (
                        step.visual
                      )}
                    </div>
                  </div>

                  <div className="flex-1 max-w-lg">
                    <h3 className="text-2xl lg:text-3xl font-inter font-medium text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-white/80 font-inter font-light tracking-tighter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Espaçamento */}
          <div className="h-24"></div>

          {/* CTA elegante */}
          <div className="text-center">
            <div className="bg-white/5 border border-white/10 p-16 rounded-2xl max-w-4xl mx-auto">
              <p className="text-2xl text-white/80 font-inter font-light tracking-tighter mb-12 leading-relaxed">
                Não é sobre fazer rápido — é sobre fazer uma vez, perfeito.
              </p>

              <Link href="#contato">
                <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90 font-inter font-medium tracking-tighter px-8 py-4">
                  Vamos criar seu padrão
                </Button>
              </Link>
            </div>
          </div>

          {/* Espaçamento final */}
          <div className="h-24"></div>
        </div>
      </div>
    </section>
  );
}