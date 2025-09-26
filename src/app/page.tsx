"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { QuotesSection } from "@/components/sections/quotes-section";
import { InfiniteSliderSection } from "@/components/sections/infinite-slider-section";
import { ObservacaoIntimaSection } from "@/components/sections/observacao-intima-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CasesSection } from "@/components/sections/cases-section";
import { PadraoKabbatecSection } from "@/components/sections/padrao-kabbatec-section";
import { MatematicaValorSection } from "@/components/sections/matematica-valor-section";
import { ConviteSeletivoSection } from "@/components/sections/convite-seletivo-section";
import { ContatoSection } from "@/components/sections/contato-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  useEffect(() => {
    // Initialize scroll reveal functionality
    const scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            scrollRevealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Apply scroll reveal to all elements with scroll-reveal class
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      scrollRevealObserver.observe(el);
    });

    return () => {
      scrollRevealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main id="main-content" role="main">
        {/* Hero Section */}
        <HeroSection />

        {/* Infinite Slider (logo abaixo da hero) */}
        <InfiniteSliderSection />

        {/* Cases de Referência */}
        <h2 className="sr-only">Cases de referência</h2>
        <CasesSection />

        {/* Quotes de Destaque */}
        <QuotesSection />

        {/* Observação Íntima */}
        <ObservacaoIntimaSection />

        {/* Problemas - Seção que será redesenhada na task 3 */}
        <ProblemSection />

        {/* Por que escolher a Kabbatec */}
        <BenefitsSection />

        {/* Padrão Kabbatec */}
        <h2 className="sr-only">Padrão Kabbatec</h2>
        <PadraoKabbatecSection />

        {/* Matemática do Valor */}
        <h2 className="sr-only">Matemática do Valor</h2>
        <MatematicaValorSection />

        {/* Convite Seletivo */}
        <h2 className="sr-only">Convite Seletivo</h2>
        <ConviteSeletivoSection />

        {/* Contato */}
        <h2 className="sr-only">Contato</h2>
        <ContatoSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
