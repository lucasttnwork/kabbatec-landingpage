"use client";

import BlurText from "@/components/ui/blur-text";
import { designSystem } from "@/lib/design-system";
import {
  Clock3,
  Layers,
  Orbit,
  PanelsTopLeft
} from "lucide-react";

export function ProblemSection() {
  const cards = [
    {
      title: "Execução diluída",
      description: "Briefings fortes voltam genéricos.",
      icon: Orbit
    },
    {
      title: "Visão desalinhada",
      description: "A essência se perde no layout.",
      icon: PanelsTopLeft
    },
    {
      title: "Tempo desperdiçado",
      description: "Refação vira rotina da equipe.",
      icon: Clock3
    },
    {
      title: "Experiência inconsistente",
      description: "Cada ponto conta outra história.",
      icon: Layers
    }
  ];

  return (
    <section className="scroll-reveal">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,26,45,0.85),_rgba(0,0,0,0.9))]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div
          className={`${designSystem.layouts.container} relative py-20 sm:py-28 lg:py-36`}
        >
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
            <div className="space-y-10 text-left">
              <BlurText
                as="h2"
                text='"Por que algumas academias viram referência e outras passam despercebidas?"'
                className="text-[42px] sm:text-[48px] font-serif font-light text-white leading-[1.1] max-w-[20ch] tracking-[0.1em] uppercase"
                animateBy="words"
                direction="top"
                delay={120}
              />

              <div className="space-y-4">
                <p className="text-base tracking-[0.28em] uppercase text-white/50">O Problema Real</p>

                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                O que impede espaços visionários de atingirem o status que merecem não é esforço. É a soma de decisões medianas que se acumulam até que o resultado final pareça familiar demais.
                </p>
              </div>

              <div className="grid gap-6 md:gap-7 sm:grid-cols-2">
                {cards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-white/10 bg-[#0B111D]/75 px-8 py-8 shadow-[0_30px_70px_-40px_rgba(5,12,20,0.9)] flex flex-col gap-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="h-12 w-12 rounded-[20px] bg-white/8 border border-white/12 flex items-center justify-center text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/6 flex items-center justify-center text-white/30">
                          <Icon className="h-4 w-4" strokeWidth={1.4} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[19px] font-semibold text-white tracking-[0.015em]">{item.title}</h3>
                        <p className="text-sm text-white/70 leading-snug">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-7 lg:min-h-[520px]">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] shadow-[0_24px_70px_-45px_rgba(0,0,0,0.85)]">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80"
                      alt="Detalhe de equipamentos em academia moderna"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">Referência</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur flex flex-col gap-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">Ouvimos de quem lidera</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    "Precisamos de uma presença que transforme intuição em detalhamento tangível."
                  </p>
                </div>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.04] shadow-[0_32px_100px_-45px_rgba(0,0,0,0.85)]">
                <img
                  src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1600&q=80"
                  alt="Visão ampla de uma academia com janelas iluminadas"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.45em] text-white/40">Elite Core · São Paulo</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-[38ch]">
                    Um ambiente que traduz disciplina visual em experiência cotidiana para quem busca performance elevada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}