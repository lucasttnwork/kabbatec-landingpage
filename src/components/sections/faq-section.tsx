"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqItems: FAQItem[] = [
    {
      id: "services",
      question: "Quais serviços vocês oferecem?",
      answer: "Oferecemos construção completa de academias premium, desde o projeto arquitetônico até a entrega final. Incluímos consultoria especializada, gestão de fornecedores, coordenação técnica e acompanhamento completo do processo construtivo."
    },
    {
      id: "timeline",
      question: "Quanto tempo leva para construir uma academia?",
      answer: "Nossos projetos são executados em até 70 dias úteis, dependendo da complexidade. Este prazo inclui desde a aprovação final do projeto até a entrega das chaves, sempre respeitando os mais altos padrões de qualidade."
    },
    {
      id: "differentiation",
      question: "O que diferencia vocês das outras construtoras?",
      answer: "Somos especializados exclusivamente em academias, não herdamos vícios antigos do mercado imobiliário. Nossa equipe combina expertise técnica com conhecimento profundo do mercado fitness, garantindo resultados superiores."
    },
    {
      id: "size",
      question: "Qual o tamanho mínimo/máximo de projeto que vocês fazem?",
      answer: "Trabalhamos com projetos de 400m² a 1.500m². Nossa especialidade está em academias de médio e grande porte, onde conseguimos otimizar melhor nossa metodologia e expertise técnica."
    },
    {
      id: "revisions",
      question: "Vocês oferecem revisões durante o projeto?",
      answer: "Sim, incluímos revisões estruturadas em cada fase do projeto. Trabalhamos com iterações colaborativas para garantir que o resultado final supere suas expectativas."
    },
    {
      id: "location",
      question: "Vocês trabalham apenas em São Paulo?",
      answer: "Atualmente focamos em São Paulo e Grande São Paulo, onde temos nossa rede de fornecedores e equipe técnica estabelecida. Esta concentração nos permite garantir a máxima qualidade em cada projeto."
    },
    {
      id: "start",
      question: "Como funciona o processo de início de um projeto?",
      answer: "Começamos com uma análise gratuita do seu projeto. Avaliamos viabilidade técnica, timeline e orçamento. Se houver interesse mútuo, formalizamos o contrato e iniciamos imediatamente a execução."
    },
    {
      id: "equipment",
      question: "Vocês também fornecem equipamentos para academia?",
      answer: "Trabalhamos em parceria com os melhores fornecedores de equipamentos fitness do Brasil. Podemos indicar e coordenar a instalação dos equipamentos como parte do projeto completo."
    }
  ];

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl md:py-28 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
      <div className="mb-8 scroll-reveal revealed">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="inline-block size-2 rounded-full bg-amber-400"></span> FAQ
        </span>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start">
        {/* Left column */}
        <div className="scroll-reveal-stagger">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl scroll-reveal revealed">
            Perguntas
            <span className="ml-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/70 scroll-reveal revealed">
            Tire suas dúvidas sobre nossos processos, metodologias e como podemos ajudar a construir sua academia dos sonhos.
          </p>

          {/* Testimonial card */}
          <div className="mt-8 rounded-2xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] scroll-reveal revealed">
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/faq-avatar/96/96" alt="Cliente satisfeito" loading="lazy" decoding="async" className="h-12 w-12 rounded-full ring-2 ring-white/10 object-cover" />
              <div>
                <p className="text-sm font-medium">Carlos Eduardo</p>
                <p className="text-xs text-white/60">Elite Core Academy</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-amber-300">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/80">
              &quot;A Kabbatec transformou nossa visão em realidade. Processo transparente, qualidade excepcional e prazo cumprido. Superou todas as expectativas!&quot;
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-4 scroll-reveal">
            <button
              onClick={() => scrollToSection('work')}
              className="group inline-flex items-center gap-2 px-4 py-3 border border-white/10 bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-white/10 nav-link"
            >
              Ver Projetos
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
                  @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                  @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                  @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
                  @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; }
                  .shiny-cta-faq { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 0.75rem 1rem; font-size: 0.875rem; line-height: 1; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s, transform 0.2s ease-out; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; white-space: nowrap; transform: scale(1); }
                  .shiny-cta-faq:hover { transform: scale(1.02); }
                  .shiny-cta-faq:active { transform: translateY(1px); }
                  .shiny-cta-faq::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; }
                  .shiny-cta-faq::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; }
                  .shiny-cta-faq span { position: relative; z-index: 2; display: inline-block; }
                  .shiny-cta-faq span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; }
                  @keyframes border-spin { to { --gradient-angle: 360deg; } }
                  @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} }
                  @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
                `
              }} />
              <button
                onClick={() => scrollToSection('contact')}
                className="shiny-cta-faq"
              >
                <span>Falar com Especialista</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Accordion */}
        <div className="space-y-4 scroll-reveal-stagger" id="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal revealed"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.has(item.id)}
              >
                <span className="text-base font-medium text-white/90">{item.question}</span>
                <span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition">
                  <svg
                    className={`transition-transform w-[16px] h-[16px] ${openItems.has(item.id) ? 'rotate-45' : 'rotate-0'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  openItems.has(item.id)
                    ? 'grid-template-rows-[1fr] opacity-100'
                    : 'grid-template-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden text-white/70">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
