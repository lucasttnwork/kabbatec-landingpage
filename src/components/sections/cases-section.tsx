"use client";

import React from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CaseCard } from "@/components/cases/case-card";
import { CaseData, casesData } from "@/lib/data/case-data";
import { useLightbox } from "@/lib/hooks/useLightbox";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { Lightbox } from "@/components/ui/lightbox";

interface CasesSectionProps {
  title?: string;
  subtitle?: string;
  cases?: CaseData[];
}

export function CasesSection({
  title = "Cases de Sucesso",
  subtitle = "Projetos executados com excelência e fidelidade aos detalhes",
  cases = casesData
}: CasesSectionProps) {
  // Lightbox state management
  const lightbox = useLightbox();

  // Scroll reveal for the section
  const sectionReveal = useScrollReveal({ threshold: 0.2, delay: 100 });

  // Individual card reveals with stagger - must be called at component level
  const cardReveal1 = useScrollReveal({ threshold: 0.2, delay: 250 });
  const cardReveal2 = useScrollReveal({ threshold: 0.2, delay: 400 });
  const cardReveal3 = useScrollReveal({ threshold: 0.2, delay: 550 });

  const cardReveals = [cardReveal1, cardReveal2, cardReveal3];

  const handleCaseClick = (caseData: CaseData) => {
    lightbox.openLightbox(caseData, cases);
  };

  return (
    <>
      <Section className="bg-slate-50" data-testid="cases-section">
        <Container>
          {/* Section Header */}
          <div
            ref={sectionReveal.ref}
            className={`text-center mb-12 ${sectionReveal.className}`}
          >
            <h2 className="text-h2 font-semibold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cases.map((caseData, index) => (
              <div
                key={caseData.id}
                ref={cardReveals[index].ref}
                className={cardReveals[index].className}
              >
                <CaseCard
                  caseData={caseData}
                  onClick={handleCaseClick}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {cases.filter(c => c.metrics.status === 'completed').length}
                </div>
                <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(cases.reduce((acc, c) => {
                    const area = parseInt(c.metrics.area.replace('m²', ''));
                    return acc + area;
                  }, 0) / cases.length)}m²
                </div>
                <p className="text-sm text-muted-foreground">Área Média</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(cases.reduce((acc, c) => {
                    const duration = parseInt(c.metrics.duration.replace(' dias', ''));
                    return acc + duration;
                  }, 0) / cases.length)}
                </div>
                <p className="text-sm text-muted-foreground">Dias Médios</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightbox.isOpen}
        currentCase={lightbox.currentCase}
        currentIndex={lightbox.currentIndex}
        totalCases={lightbox.totalCases}
        onClose={lightbox.closeLightbox}
        onNext={lightbox.nextImage}
        onPrev={lightbox.prevImage}
        onGoToCase={lightbox.goToImage}
      />
    </>
  );
}
