"use client";

import { InteractiveSelector } from "@/components/ui/interactive-selector";

export function BenefitsSection() {
  const benefitsOptions = [
    {
      id: "fidelidade",
      title: "Fidelidade ao Projeto",
      description: "Executamos seguindo metodologia aprovada por Raquel Kabbani, preservando cada detalhe personalizado intacto.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ),
          title: "Zero Adaptações Genéricas",
          description: "Seu projeto único vira realidade exata"
        },
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Metodologia Comprovada",
          description: "Aprovada por Raquel Kabbani"
        },
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          title: "Equipe Especializada",
          description: "Fernando + Silvio: competência técnica"
        }
      ],
      metrics: {
        label: "Taxa de Sucesso",
        value: "100%"
      }
    },
    {
      id: "entrega",
      title: "Entrega Garantida",
      description: "Enquanto construtoras tradicionais têm filas de meses, garantimos início imediato e entrega em 70 dias.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "70 Dias de Prazo",
          description: "Entrega garantida em tempo recorde"
        },
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ),
          title: "Zero Retrabalhos",
          description: "Perfeito na primeira vez"
        },
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Início Imediato",
          description: "Sem filas de espera"
        }
      ],
      metrics: {
        label: "Projetos Entregues",
        value: "5/6"
      }
    },
    {
      id: "transparencia",
      title: "Transparência Total",
      description: "Documentação fotográfica completa de cada etapa. Você acompanha tudo em tempo real.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      benefits: [
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          title: "Acompanhamento Diário",
          description: "Fotos e relatórios diários"
        },
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Sem Surpresas",
          description: "Cronograma e orçamento fixos"
        },
        {
          icon: (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          ),
          title: "Confiança Total",
          description: "Transparência em cada detalhe"
        }
      ],
      metrics: {
        label: "Satisfação",
        value: "5.0★"
      }
    }
  ];
  return (
    <section className="relative bg-gray-950 py-32 scroll-reveal">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex gap-2 text-sm font-medium text-white bg-white/10 border-white/20 border rounded-full mb-6 px-4 py-2 items-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Por que escolher a Kabbatec
            </div>
            <h2 className="text-4xl sm:text-6xl mb-6 text-white tracking-tight">
              Tudo que você precisa para
              <span className="bg-clip-text block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 tracking-tight">
                construir academias premium
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-inter font-light tracking-tighter">
              Metodologia comprovada que transforma projetos únicos em realidade, preservando cada detalhe personalizado em 70 dias.
            </p>
          </div>

          {/* Interactive Selector */}
          <InteractiveSelector options={benefitsOptions} />
        </div>
        </div>
      </section>
  );
}

