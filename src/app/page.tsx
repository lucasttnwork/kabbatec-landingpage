"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/sections/hero-section";
import { CasesSection } from "@/components/sections/cases-section";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { useHoverLift } from "@/lib/hooks/useHoverLift";

export default function Home() {
  // Scroll reveals para cada seção
  const problemReveal = useScrollReveal({ threshold: 0.2, delay: 100 });
  const solutionReveal = useScrollReveal({ threshold: 0.2, delay: 150 });
  const methodologyReveal = useScrollReveal({ threshold: 0.2, delay: 200 });

  // Hover lift para as cards da metodologia
  const cardHover1 = useHoverLift({ liftAmount: "-translate-y-2", duration: "duration-300" });
  const cardHover2 = useHoverLift({ liftAmount: "-translate-y-2", duration: "duration-300" });
  const cardHover3 = useHoverLift({ liftAmount: "-translate-y-2", duration: "duration-300" });
  const cardHover4 = useHoverLift({ liftAmount: "-translate-y-2", duration: "duration-300" });
  return (
    <>
      {/* Hero Section - Nova seção premium */}
      <HeroSection />

      {/* Problem Section */}
      <Section alternate>
        <Container>
          <div
            ref={problemReveal.ref}
            className={`mx-auto max-w-4xl px-4 space-y-8 ${problemReveal.className}`}
          >
            <h2 className="text-h2 font-semibold text-foreground">
              O problema que ninguém conta
            </h2>

            <div className="space-y-4 text-body text-foreground/90">
              <p>
                78% das construtoras tradicionais têm décadas de vícios. Elas
                &ldquo;adaptam&rdquo; seu projeto para encaixar nos métodos que sempre usaram.
              </p>
              <p>
                O resultado é a simplificação de detalhes críticos do seu
                projeto, transformando uma visão única em algo genérico e sem o
                retorno esperado.
              </p>
              <p>
                O que você precisa é de uma execução que preserve cada detalhe do
                projeto original, sem atalhos que destroem a sua visão.
              </p>
              <p>
                É aqui que a Kabbatec se diferencia: zero vícios antigos, foco em
                fidelidade absoluta ao projeto e prazo real.
              </p>
            </div>

            <div className="rounded-md border bg-secondary p-6 text-foreground">
              <blockquote className="text-base text-muted-foreground">
                &ldquo;Elas &apos;adaptam&apos; seu projeto para caber no molde antigo. Nós
                preservamos cada detalhe como foi concebido.&rdquo;
              </blockquote>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🏗️</div>
                  <div className="font-medium text-foreground mb-2">
                    Adaptações genéricas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Forçam o projeto a caber em métodos antigos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-yellow-200 bg-yellow-50/50">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">⚠️</div>
                  <div className="font-medium text-foreground mb-2">
                    Simplificação de detalhes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reduz qualidade e descaracteriza sua visão original.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-gray-50/50">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">📉</div>
                  <div className="font-medium text-foreground mb-2">
                    Retorno abaixo do esperado
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Impacta a performance e a percepção premium do espaço.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="#methodology"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B] text-white rounded-md hover:bg-[#D97706] transition-colors"
              >
                Ver Nossa Metodologia
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#1E40AF] text-[#1E40AF] rounded-md hover:bg-[#1E40AF] hover:text-white transition-colors"
              >
                Ver Cases de Sucesso
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Section */}
      <Section>
        <Container>
          <div
            ref={solutionReveal.ref}
            className={`mx-auto max-w-4xl px-4 space-y-8 ${solutionReveal.className}`}
          >
            <h2 className="text-h2 font-semibold text-foreground">
              Nós fazemos diferente
            </h2>

            <div className="space-y-4 text-body text-foreground/90">
              <p>
                Somos a Kabbatec: a construtora que não herda problemas antigos.
              </p>
              <p>
                Enquanto construtoras veteranas carregam décadas de &ldquo;jeitinhos&rdquo; e vícios, nós executamos com metodologia pura das grandes redes. Sem improvisação. Sem simplificação. Sem &ldquo;adaptações&rdquo; que destroem sua visão.
              </p>
              <p>
                Nossa promessa: Sua academia executada exatamente como foi projetada, preservando cada detalhe personalizado em 70 dias.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="text-h3 font-semibold text-foreground">Fernando + Silvio</h3>
                <p className="text-body text-muted-foreground">
                  Competência técnica especializada + relacionamentos estratégicos no mercado fitness.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span className="text-sm">Engenharia especializada em fitness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span className="text-sm">Rede de fornecedores premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span className="text-sm">Controle rigoroso de qualidade</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👥</div>
                    <p className="text-sm text-muted-foreground">Fernando & Silvio</p>
                    <p className="text-xs text-muted-foreground opacity-75">Líderes Kabbatec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Methodology Section */}
      <Section alternate id="methodology">
        <Container>
          <div
            ref={methodologyReveal.ref}
            className={`mx-auto max-w-5xl px-4 space-y-8 ${methodologyReveal.className}`}
          >
            <div className="text-center space-y-4">
              <h2 className="text-h2 font-semibold text-foreground">
                Nossa metodologia em 4 pilares
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                Aprovada por Raquel Kabbani, arquiteta das maiores redes fitness do Brasil
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card
                variant="methodology"
                className={`group hover:shadow-lg transition-all duration-300 ${cardHover1.className}`}
                onMouseEnter={cardHover1.onMouseEnter}
                onMouseLeave={cardHover1.onMouseLeave}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle className="text-h3">Fidelidade ao Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-muted-foreground">
                    Execução fiel ao projeto original, sem atalhos que destroem sua visão única.
                  </p>
                </CardContent>
              </Card>

              <Card
                variant="methodology"
                className={`group hover:shadow-lg transition-all duration-300 ${cardHover2.className}`}
                onMouseEnter={cardHover2.onMouseEnter}
                onMouseLeave={cardHover2.onMouseLeave}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">🚀</div>
                  <CardTitle className="text-h3">Início Imediato + 70 dias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-muted-foreground">
                    Cronograma realista com início imediato e entrega em 70 dias úteis.
                  </p>
                </CardContent>
              </Card>

              <Card
                variant="methodology"
                className={`group hover:shadow-lg transition-all duration-300 ${cardHover3.className}`}
                onMouseEnter={cardHover3.onMouseEnter}
                onMouseLeave={cardHover3.onMouseLeave}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">♻️</div>
                  <CardTitle className="text-h3">Zero Retrabalho</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-muted-foreground">
                    Processos validados e equipe especializada para evitar retrabalho custoso.
                  </p>
                </CardContent>
              </Card>

              <Card
                variant="methodology"
                className={`group hover:shadow-lg transition-all duration-300 ${cardHover4.className}`}
                onMouseEnter={cardHover4.onMouseEnter}
                onMouseLeave={cardHover4.onMouseLeave}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">🏅</div>
                  <CardTitle className="text-h3">Padrão Grandes Redes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-muted-foreground">
                    Acabamento e padrões equivalentes às maiores redes do setor fitness.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-white rounded-md hover:bg-[#D97706] transition-colors text-sm font-medium"
              >
                Ver Cases de Sucesso →
              </a>
              <a
                href="/design-system"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1E40AF] text-[#1E40AF] rounded-md hover:bg-[#1E40AF] hover:text-white transition-colors text-sm font-medium"
              >
                Sistema de Design
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cases Section */}
      <section id="cases">
        <CasesSection />
      </section>
    </>
  );
}
