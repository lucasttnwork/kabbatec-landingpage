"use client";

const painPoints = [
  "Clientes que entram e não sentem a diferença",
  "Concorrentes que não se intimidam",
  "Reformas constantes porque \"ficou bom\" envelhece rápido",
  "A sensação permanente de \"poderia ter sido melhor\"",
];

export function MatematicaValorSection() {
  return (
    <section id="matematica" className="section pt-[100px] pb-28 md:pb-32 scroll-reveal">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,14,14,0.92),_rgba(0,0,0,0.95))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute -right-24 top-[-140px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-[-220px] h-[360px] w-[360px] rounded-full bg-white/6 blur-3xl" />

        <div className="relative">
          <div className="container pt-16 md:pt-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16 lg:gap-24 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
                <div className="space-y-12">
                  <div className="space-y-7">
                    <p className="text-xs sm:text-sm text-white/60 font-inter tracking-[0.35em] uppercase">
                      Matemática do valor
                    </p>
                    <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-serif font-light text-white leading-[1.08] tracking-[0.08em] uppercase text-balance">
                      Quanto custa aceitar "mais ou menos"?
                    </h2>
                    <div className="space-y-4 text-base sm:text-lg text-white/75 font-inter leading-relaxed">
                      <p>Você conhece o preço real:</p>
                      <ul className="space-y-4">
                        {painPoints.map((item) => (
                          <li
                            key={item}
                            className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/25 hover:bg-white/[0.05]"
                          >
                            <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[10px] font-inter tracking-[0.18em] text-white/70">
                              •
                            </span>
                            <p className="text-sm sm:text-base text-white/80 font-inter leading-relaxed">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]" />
                    <div className="relative space-y-4 text-sm sm:text-base text-white/70 font-inter leading-relaxed italic">
                      <p className="text-white/75">Cada concessão afasta você da referência que sua marca merece ser. O custo não é só financeiro, é reputacional.</p>
                      <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <p className="text-white/60">Você sente quando um espaço não entrega tudo que prometeu. Seus clientes também.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/12 bg-gradient-to-br from-black/70 via-black/50 to-emerald-500/15 p-12 backdrop-blur-md shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
                    <div className="pointer-events-none absolute inset-0 border border-white/5" />
                    <div className="pointer-events-none absolute -right-20 top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
                    <div className="relative space-y-6 text-center lg:text-left">
                      <p className="text-xs uppercase tracking-[0.45em] text-white/60">A lógica real do investimento</p>
                      <h3 className="text-[30px] sm:text-[38px] font-serif font-light text-white leading-[1.1] tracking-[0.06em]">
                        Um projeto Kabbatec não é um custo.
                      </h3>
                      <p className="text-lg sm:text-xl text-white/80 font-inter leading-relaxed">
                        É o investimento em se tornar referência.
                      </p>
                      <div className="mx-auto lg:mx-0 h-px w-28 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                      <p className="text-sm text-white/60 font-inter leading-relaxed">
                        Blindamos visão, ritmo e entrega para que cada metro quadrado conte uma história inquestionável.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[36px] border border-emerald-400/30 bg-black/45 p-10 text-center lg:text-left shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                    <div className="pointer-events-none absolute inset-0 border border-emerald-400/10" />
                    <div className="relative">
                      <p className="text-lg sm:text-2xl font-serif font-light text-white tracking-[0.08em]">
                        <span className="block text-sm uppercase tracking-[0.38em] text-emerald-200/80">Comparativo honesto</span>
                        <span className="mt-4 block text-[30px] sm:text-[36px] font-light">
                          R$ 2 milhões bem investidos &gt; R$ 1 milhão desperdiçado em "mais ou menos".
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="text-center lg:text-left text-white/75 font-inter text-base italic">
                    E você sabe que é verdade.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}