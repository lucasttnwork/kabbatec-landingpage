"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-2xl font-medium font-inter">Kabbatec</span>
              </Link>

              <p className="text-body-sm text-gray-400 mb-4 max-w-md">
                Engenharia premium para visionários que não aceitam &quot;mais ou menos&quot;.
                Criamos referências que seus concorrentes estudam.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="#contato"
                  className="btn-primary bg-white text-gray-900 hover:bg-gray-50"
                >
                  Conversa Seletiva
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-heading-lg font-inter font-medium mb-4" id="footer-nav-label">
                Navegação
              </h4>
              <ul className="space-y-2" aria-labelledby="footer-nav-label">
                <li>
                  <Link
                    href="#observacao"
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Nossa Abordagem
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cases"
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="#padrao"
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Padrão
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-heading-lg font-inter font-medium mb-4">
                Contato
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:visionarios@kabbatec.com.br"
                    className="text-body-sm text-gray-400 hover:text-white transition-colors"
                  >
                    visionarios@kabbatec.com.br
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-body-sm text-gray-400">
                    WhatsApp Seletivo
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-body-sm text-gray-400">
                    São Paulo, SP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Signature */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-body font-inter font-medium">Fernando Reis & Silvio</span>
                </div>
                <span className="text-gray-600">•</span>
                <span className="text-body-sm text-gray-400">
                  Onde perfeccionistas se encontram
                </span>
              </div>

              <div className="flex items-center gap-6 text-body-sm text-gray-400">
                <span>Elite Core • First Move • Two Ases</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-body-sm text-gray-400">
                © {currentYear} Kabbatec. O padrão que perfeccionistas reconhecem.
              </p>

              <div className="flex items-center gap-6 text-body-sm text-gray-400">
                <span>Padrão Kabbani</span>
                <span>•</span>
                <span>5+ anos de excelência</span>
                <span>•</span>
                <span>50+ projetos realizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}