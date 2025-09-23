"use client";

import { useState } from "react";

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de envio do formulário
    console.log('Form submitted:', formData);

    // Show success message
    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.');

    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };

  const showNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <span>${message}</span>
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
    <>
      {/* Contact Section */}
      <section id="contact" className="section border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-4xl lg:px-8 text-center mr-auto ml-auto pr-6 pl-6 max-w-full">
          <div className="flow scroll-reveal-stagger">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white scroll-reveal revealed">
              Vamos construir sua
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"> academia juntos</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto scroll-reveal revealed font-inter font-light tracking-tighter">
              Pronto para transformar sua visão em realidade? Nossa análise gratuita identifica oportunidades e apresenta um plano detalhado para seu projeto.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-sm pt-sm scroll-reveal revealed">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <style dangerouslySetInnerHTML={{
                  __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
                    @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                    @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                    @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
                    @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; }
                    .shiny-cta-contact { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1rem 1.5rem; font-size: 1.125rem; line-height: 1; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s, transform 0.2s ease-out; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; white-space: nowrap; transform: scale(1); }
                    .shiny-cta-contact:hover { transform: scale(1.02); }
                    .shiny-cta-contact:active { transform: translateY(1px); }
                    .shiny-cta-contact::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; }
                    .shiny-cta-contact::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; }
                    .shiny-cta-contact span { position: relative; z-index: 2; display: inline-block; }
                    .shiny-cta-contact span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; }
                    @keyframes border-spin { to { --gradient-angle: 360deg; } }
                    @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} }
                    @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
                  `
                }} />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="shiny-cta-contact relative z-10"
                >
                  <span>Agendar Análise Gratuita</span>
                </button>
              </div>
              <a
                href="mailto:contato@kabbatec.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 text-white px-6 py-4 text-lg font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span>contato@kabbatec.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      <div id="schedule-modal" className={`modal z-30 ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Agendar Análise Gratuita</h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 form-container">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2 font-inter tracking-tighter">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2 font-inter tracking-tighter">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-medium text-white/90 mb-2 font-inter tracking-tighter">Tipo de Projeto</label>
              <select
                id="project"
                name="project"
                required
                value={formData.project}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Selecione o tipo de projeto</option>
                <option value="academia-premium">Academia Premium (600-1000m²)</option>
                <option value="studio-fitness">Studio Fitness (400-600m²)</option>
                <option value="crossfit-box">Box Crossfit (800-1200m²)</option>
                <option value="reforma">Reforma de Academia Existente</option>
                <option value="consultoria">Consultoria de Projeto</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2 font-inter tracking-tighter">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                placeholder="Conte-nos um pouco sobre sua visão e necessidades..."
              />
            </div>

            <div style={{ position: 'relative', width: '100%', display: 'inline-block' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
                  @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                  @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                  @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
                  @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; }
                  .shiny-cta-submit { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 0.875rem 2rem; font-size: 1rem; line-height: 1; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s, transform 0.2s ease-out; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; width: 100%; white-space: nowrap; transform: scale(1); }
                  .shiny-cta-submit:hover { transform: scale(1.02); }
                  .shiny-cta-submit:active { transform: translateY(1px); }
                  .shiny-cta-submit::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; }
                  .shiny-cta-submit::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; }
                  .shiny-cta-submit span { position: relative; z-index: 2; display: inline-block; }
                  .shiny-cta-submit span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; }
                  @keyframes border-spin { to { --gradient-angle: 360deg; } }
                  @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} }
                  @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
                `
              }} />
              <button
                type="submit"
                className="shiny-cta-submit relative z-10"
              >
                <span>Enviar Mensagem</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
