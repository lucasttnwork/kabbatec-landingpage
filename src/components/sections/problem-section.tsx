"use client";

import BlurText from "@/components/ui/blur-text";

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 px-8 scroll-reveal">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Headline principal */}
          <header className="text-center mb-2xl">
            <BlurText
              as="h2"
              text='"Por que algumas academias viram referência e outras passam despercebidas?"'
              className="text-[44px] font-serif font-light text-white leading-[1.1] max-w-[40ch] tracking-[0.08em] uppercase mx-auto justify-center"
              animateBy="words"
              direction="top"
              delay={120}
            />
          </header>

          {/* Scroll snapping integrado à página: cada slide é uma seção de viewport */}
          {[
            'Você já sabe a resposta.',
            'É a diferença entre aceitar "vai ficar bom" e exigir "como deveria ser sempre".',
            'Entre fornecedores que fazem o combinado e parceiros que entendem o não-dito.',
            'Entre construir um espaço e criar um padrão.',
            'Quantas vezes você explicou sua visão e recebeu de volta... uma versão diluída?',
            'Quantas concessões você fez porque "assim também funciona"?',
            'Quantas noites você pensou: "não era bem isso que eu imaginava"?',
            'Visionários merecem mais que promessas. Merecem parceiros que protegem sua visão como se fosse deles.',
            'Porque no final, seus concorrentes vão estudar o que você criou. Ou vão ignorar. A escolha acontece agora.'
          ].map((line, idx) => (
            <section key={idx} className="psn-section">
              <div className="psn-content">
                <p className="psn-text psn-caret text-2xl sm:text-3xl font-inter font-light text-white/90 leading-relaxed text-center px-6">
                  {line}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}