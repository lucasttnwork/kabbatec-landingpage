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
    <section id="padrao" className="section py-24 md:py-32">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base text-white/60 font-inter font-light tracking-[0.35em] uppercase mb-6">
              Padrão Kabbatec
            </p>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-serif font-light text-white leading-[1.1] tracking-[0.08em] uppercase text-balance">
              Da visão à realidade, sem concessões
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 font-inter font-light leading-relaxed tracking-tight">
              O refinamento que você imagina se torna tangível com um processo minucioso, decisões transparentes e execução impecável. Cada detalhe importa — e permanece fiel ao que você idealizou.
            </p>
          </div>

          {/* Etapas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-white/12 bg-white/[0.05] p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
                  {typeof step.visual === "string" ? (
                    <span className="text-3xl">{step.visual}</span>
                  ) : (
                    step.visual
                  )}
                </div>
                <h3 className="mt-6 text-xl sm:text-2xl font-inter font-medium text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/70 font-inter font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <div className="rounded-[32px] border border-white/12 bg-white/[0.05] px-8 py-12 sm:px-12 sm:py-16 text-center backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-[0.05em] uppercase">
                Pronto para elevar seu padrão ao nível Kabbatec?
              </h3>
              <p className="mt-4 text-base sm:text-lg text-white/70 font-inter font-light leading-relaxed">
                Vamos transformar sua visão em uma experiência que expresse perfeccionismo em cada toque e superfície.
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="#contato">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-inter font-medium tracking-[0.08em] px-8 py-4 uppercase"
                  >
                    Vamos criar seu padrão
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}