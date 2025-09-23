"use client";

import { useEffect, useState } from "react";

export function AboutExperienceSection() {
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      const progressLine = document.getElementById('timeline-progress');

      if (!section || !progressLine) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Calculate when the experience section starts to be visible
      const sectionStart = sectionTop - viewportHeight + 200; // Start a bit before fully visible
      const sectionEnd = sectionTop + sectionHeight - 200;

      // Calculate progress based on scroll position
      let progress = 0;

      if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
        const scrollProgress = (scrollTop - sectionStart) / (sectionEnd - sectionStart);
        progress = Math.min(Math.max(scrollProgress, 0), 1);
      } else if (scrollTop > sectionEnd) {
        progress = 1;
      }

      // Update the timeline progress bar height
      const progressHeight = progress * 100;
      progressLine.style.height = `${progressHeight}%`;

      // Add glow effect when fully visible
      if (progress > 0.1) {
        progressLine.style.filter = 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))';
      } else {
        progressLine.style.filter = 'none';
      }

      // Highlight current experience item
      const experienceItems = document.querySelectorAll('.experience-item');
      experienceItems.forEach((item) => {
        const itemRect = (item as HTMLElement).getBoundingClientRect();
        const isInView = itemRect.top < viewportHeight * 0.7 && itemRect.bottom > viewportHeight * 0.3;

        const dot = item.querySelector('.timeline-dot') as HTMLElement;
        if (dot) {
          if (isInView) {
            dot.style.transform = 'scale(1.2)';
            dot.style.filter = 'drop-shadow(0 0 8px currentColor)';
          } else {
            dot.style.transform = 'scale(1)';
            dot.style.filter = 'none';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" className="section relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="flow">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white scroll-reveal revealed">
                Sobre a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"> Kabbatec</span>
              </h2>

              <div className="flow text-lg text-white/80 leading-relaxed scroll-reveal revealed font-inter font-light tracking-tighter">
                <p>
                  Somos uma construtora especializada em academias premium, fundada com a missão de transformar projetos personalizados em realidade sem os vícios tradicionais do mercado.
                </p>
                <p className="scroll-reveal revealed">
                  Nossa equipe combina expertise técnica em construção com profundo conhecimento do mercado fitness, garantindo que cada detalhe do seu projeto seja executado com perfeição.
                </p>
                <p className="scroll-reveal revealed">
                  Desde 2020, já entregamos mais de 15 academias premium em São Paulo, sempre respeitando prazos e superando expectativas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-sm scroll-reveal revealed">
                <div className="flow">
                  <h4 className="font-semibold text-white">Especialidade</h4>
                  <p className="text-white/80 flex items-center gap-2 font-inter font-light tracking-tighter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-400">
                      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path>
                      <path d="M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8V5Z"></path>
                    </svg>
                    Academias Premium
                  </p>
                </div>
                <div className="flow">
                  <h4 className="font-semibold text-white">Experiência</h4>
                  <p className="text-white/80 flex items-center gap-2 font-inter font-light tracking-tighter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-400">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    4+ Anos
                  </p>
                </div>
              </div>
            </div>

            <div className="relative scroll-reveal revealed">
              <div className="grid grid-cols-2 gap-md">
                <div className="flow">
                  <img src="https://picsum.photos/seed/experience-elite-core-1/800/600" alt="Construção em andamento" loading="lazy" decoding="async" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl max-w-full" />
                  <img src="https://picsum.photos/seed/experience-first-move-1/800/600" alt="Equipe trabalhando" loading="lazy" decoding="async" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl max-w-full" />
                </div>
                <div className="flow pt-sm">
                  <img src="https://picsum.photos/seed/experience-two-ases-1/800/600" alt="Detalhes de acabamento" loading="lazy" decoding="async" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl max-w-full" />
                  <img src="https://picsum.photos/seed/experience-elite-core-2/800/600" alt="Projeto finalizado" loading="lazy" decoding="async" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section relative bg-white/5">
        <div className="max-w-6xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
          <div className="mb-16 flow scroll-reveal-stagger">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4 scroll-reveal revealed">
              Nossa
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"> trajetória</span>
            </h2>
            <p className="text-xl text-white/80 scroll-reveal revealed font-inter font-light tracking-tighter">
              De empreendedores visionários a especialistas em academias premium.
            </p>
          </div>

          <div className="relative timeline-container overflow-hidden">
            {/* Static Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600/30 via-gray-600/20 to-gray-600/10"></div>

            {/* Dynamic Progress line */}
            <div
              id="timeline-progress"
              className="absolute left-8 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 transition-all duration-300 ease-out"
              style={{ height: '0%' }}
            ></div>

            <div className="flow px-20" id="experience-container">
              {/* 2024 - Crescimento */}
              <div className="group relative space-y-16 experience-item scroll-reveal revealed">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-6 top-8 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20 group-hover:ring-8 transition-all duration-300 z-10"></div>

                <div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
                  <div className="flex flex-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">2024</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Expansão e Inovação</h3>
                        <p className="text-blue-400 font-medium">Crescimento Estratégico</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-white/70 font-inter tracking-wider">2024 - Presente</span>
                      <p className="text-xs text-white/60 font-inter font-light tracking-wider">1 ano</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4 font-inter font-light tracking-tighter">
                    Expandimos nossa capacidade técnica e equipe especializada. Implementamos metodologias avançadas de gestão de projetos e conquistamos parcerias estratégicas com os melhores fornecedores do mercado fitness.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Gestão Avançada</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Parcerias Estratégicas</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Tecnologia BIM</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Equipe Especializada</span>
                  </div>
                </div>
              </div>

              {/* 2022-2023 - Consolidação */}
              <div className="group relative space-y-16 experience-item scroll-reveal revealed">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-6 top-8 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20 group-hover:ring-8 transition-all duration-300 z-10"></div>

                <div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">2022</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Consolidação no Mercado</h3>
                        <p className="text-purple-400 font-medium">Reconhecimento e Crescimento</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-white/70 font-inter tracking-wider">2022 - 2023</span>
                      <p className="text-xs text-white/60 font-inter font-light tracking-wider">2 anos</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4 font-inter font-light tracking-tighter">
                    Período de consolidação onde conquistamos a confiança do mercado através de projetos de alta qualidade. Recebemos reconhecimento da indústria fitness e expandimos nossa carteira de clientes premium.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Qualidade Premium</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Reconhecimento</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Carteira Premium</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Reputação</span>
                  </div>
                </div>
              </div>

              {/* 2020-2021 - Fundação */}
              <div className="group relative space-y-16 experience-item scroll-reveal revealed">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-6 top-8 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 group-hover:ring-8 transition-all duration-300 z-10"></div>

                <div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-indigo-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">2020</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Fundação e Primeiros Projetos</h3>
                        <p className="text-indigo-400 font-medium">Início da Jornada</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-white/70 font-inter tracking-wider">2020 - 2021</span>
                      <p className="text-xs text-white/60 font-inter font-light tracking-wider">2 anos</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4 font-inter font-light tracking-tighter">
                    Fundação da Kabbatec com a visão de revolucionar a construção de academias no Brasil. Primeiro projeto entregue com sucesso, estabelecendo as bases da nossa metodologia diferenciada.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Fundação</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Primeiro Projeto</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Metodologia</span>
                    <span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Visão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
