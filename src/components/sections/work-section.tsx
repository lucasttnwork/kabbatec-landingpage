"use client";

import { useState } from "react";

export function WorkSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: "elite-core",
      title: "Elite Core Academy",
      type: "Academia Premium • 800m²",
      description: "Academia premium com design arquitetônico moderno e equipamentos de alta performance. Entregue em 65 dias com acabamento impecável.",
      image: "https://picsum.photos/seed/work-elite-core/1280/720",
      tags: ["Arquitetura Moderna", "Equipamentos Premium", "Acabamento Luxo"],
      stats: "800m² • 65 dias • Centro/SP"
    },
    {
      id: "first-move",
      title: "First Move Fitness",
      type: "Studio Fitness • 600m²",
      description: "Studio fitness focado em treinamento funcional e bem-estar. Design clean e equipamentos especializados para experiência premium.",
      image: "https://picsum.photos/seed/work-first-move/1280/720",
      tags: ["Design Clean", "Treinamento Funcional", "Experiência Premium"],
      stats: "600m² • 58 dias • Vila Madalena/SP"
    },
    {
      id: "two-ases",
      title: "Two Ases Crossfit",
      type: "Box Crossfit • 900m²",
      description: "Box crossfit com infraestrutura completa para treinos intensos. Área dedicada para musculação, funcional e recuperação.",
      image: "https://picsum.photos/seed/work-two-ases/1280/720",
      tags: ["Crossfit", "Infraestrutura Completa", "Área de Recuperação"],
      stats: "900m² • 72 dias • Pinheiros/SP"
    }
  ];

  const showCaseStudy = (projectId: string) => {
    setActiveProject(projectId);

    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <span>Abrindo case study ${projectId}...</span>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  };

  return (
    <section id="work" className="relative sm:py-32 pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 scroll-reveal-stagger">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 scroll-reveal revealed">
            Projetos que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"> superam expectativas</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl scroll-reveal revealed font-inter font-light tracking-tighter">
            Cada projeto é uma oportunidade de criar espaços únicos que refletem a visão dos nossos clientes.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-reveal-stagger ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''} scroll-reveal revealed`}>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-400">
                      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path>
                      <path d="M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8V5Z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-400">{project.type}</span>
                </div>

                <h3 className="text-3xl font-bold text-white scroll-reveal revealed">{project.title}</h3>
                <p className="text-lg text-white/80 leading-relaxed scroll-reveal revealed font-inter font-light tracking-tighter">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 scroll-reveal revealed">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-white/60 scroll-reveal revealed font-inter font-light tracking-wider">
                  {project.stats}
                </div>

                <button
                  onClick={() => showCaseStudy(project.id)}
                  className="case-study-btn group inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 scroll-reveal revealed"
                >
                  <span>Ver Case Study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </button>
              </div>

              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} scroll-reveal revealed`}>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 group-hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-md hover:scale-105 transition-all duration-300 text-sm font-medium"
          >
            <span>Quero meu projeto personalizado</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button
            onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 text-white rounded-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            <span>Conhecer nossa metodologia</span>
          </button>
        </div>
      </div>
    </section>
  );
}
