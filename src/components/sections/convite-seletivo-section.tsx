"use client";

import Link from "next/link";

const disqualifiers = [
  "Aceita que \"bom\" é suficiente",
  "Precisa do \"mais barato\"",
  "Tem pressa incompatível com perfeição",
];

const qualifiers = [
  "Entende que excelência faz toda a diferença",
  "Entende que referências não nascem de concessões",
  "Quer dormir tranquilo sabendo que sua visão está protegida",
];

export function ConviteSeletivoSection() {
  return (
    <section id="convite" className="section pt-[100px] pb-28 md:pb-32 scroll-reveal">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(8,8,8,0.95),_rgba(0,0,0,0.88))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute -right-36 top-[-120px] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative">
          <div className="container pt-16 md:pt-24">
            <div className="max-w-6xl mx-auto">
              {/* Cabeçalho da seção - centralizado */}
              <div className="text-center space-y-7 mb-16">
                <p className="text-xs sm:text-sm text-white/60 font-inter tracking-[0.35em] uppercase">
                  Convite especial
                </p>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-serif font-light text-white leading-[1.05] tracking-[0.08em] uppercase">
                  "Nem todo visionário está pronto"
                </h2>
                <div className="space-y-3 text-base sm:text-lg text-white/75 font-inter leading-relaxed">
                  <p>Trabalhamos com 5 projetos por vez. Máximo.</p>
                  <p>Porque excelência não escala fácil. Se escalasse, não seria excelência.</p>
                </div>
              </div>

              {/* Grid de 2 colunas - Cards comparativos */}
              <div className="grid gap-10 lg:grid-cols-2 mb-12">
                {/* Card "Se você:" - Esquerda */}
                <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.04] p-10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div className="pointer-events-none absolute inset-0 border border-white/5" />
                  <div className="relative space-y-6">
                    <p className="text-base font-inter text-white/70">Se você:</p>
                    <ul className="space-y-5">
                      {disqualifiers.map((item) => (
                        <li
                          key={item}
                          className="group flex gap-5 rounded-3xl border border-white/10 bg-black/40 p-5 transition duration-300 hover:border-white/30 hover:bg-black/30"
                        >
                          <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[10px] font-inter tracking-[0.18em] text-white/70">
                            •
                          </span>
                          <p className="text-sm sm:text-base text-white/80 font-inter leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-white/70 font-inter leading-relaxed">
                      Existem ótimas construtoras no mercado.
                    </p>
                  </div>
                </div>

                {/* Card "Mas se você:" - Direita */}
                <div className="relative overflow-hidden rounded-[36px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-black/40 to-black/70 p-10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                  <div className="pointer-events-none absolute inset-0 border border-emerald-400/10" />
                  <div className="relative space-y-6">
                    <p className="text-base font-inter text-emerald-100">Mas se você:</p>
                    <ul className="space-y-5">
                      {qualifiers.map((item) => (
                        <li
                          key={item}
                          className="group flex gap-5 rounded-3xl border border-emerald-400/20 bg-black/30 p-5 transition duration-300 hover:border-emerald-300/50 hover:bg-black/20"
                        >
                          <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-emerald-200/50 bg-emerald-500/15 text-[10px] font-inter tracking-[0.18em] text-emerald-100">
                            •
                          </span>
                          <p className="text-sm sm:text-base text-white/85 font-inter leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card com CTA - Centralizado */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.06] p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(255,255,255,0))] opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  <div className="relative space-y-6">
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                    <Link
                      href="#contato"
                      className="inline-flex items-center justify-center rounded-full bg-black/80 px-8 py-4 text-base font-inter text-white tracking-[0.06em] shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:bg-black/60"
                    >
                      Se você entende a diferença, clique aqui
                    </Link>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Textos finais - Centralizados */}
              <div className="space-y-2 text-center text-white/75 font-inter italic leading-relaxed">
                <p>Alguns constroem. Nós criamos referências.</p>
                <p>A diferença? Você sente, seus clientes admiram, seus concorrentes estudam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}