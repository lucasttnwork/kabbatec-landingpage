"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";
import { CaseBentoGrid } from "./case-bento-grid";
import { casesData } from "@/lib/data/case-data";

export function CasesSection() {
  const cases = casesData;

  return (
    <section id="cases" className="section py-16">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-lg text-white/60 font-inter font-light tracking-[3px] uppercase mb-[30px]">
              PORTIFÓLIO
            </p>
            <BlurText
              as="h2"
              text="Alguns resultados você não precisa explicar. Apenas existem."
              className="text-[44px] font-serif font-light text-white leading-[1.1] max-w-[40ch] tracking-[0.08em] uppercase mx-auto justify-center"
              animateBy="words"
              direction="top"
              delay={120}
            />
          </div>

          {/* Bento Grids - um por academia */}
          <div className="space-y-24 md:space-y-28 mb-20 md:mb-24">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="w-full">
                <CaseBentoGrid data={caseItem} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-10 max-w-4xl mx-auto">
            <BlurText
              as="h3"
              text="Pronto para criar sua referência?"
              className="text-[44px] font-serif font-light text-white leading-[1.1] max-w-[40ch] tracking-[0.08em] uppercase mx-auto justify-center"
              animateBy="words"
              direction="top"
              delay={120}
            />
            <Link href="#contato" className="inline-flex justify-center">
              <span className="relative inline-flex rounded-2xl p-[1px] bg-gradient-to-r from-white/15 to-white/8 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-500">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/90 text-black hover:bg-white hover:text-black border border-white/25 backdrop-blur-sm font-inter font-semibold tracking-wide px-7 py-3.5 text-sm rounded-[1rem] hover-lift shadow-[inset_0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform duration-300"
                >
                  VAMOS CONVERSAR
                </Button>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}