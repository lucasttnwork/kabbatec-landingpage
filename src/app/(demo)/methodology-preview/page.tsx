import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function MethodologyPreviewPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl px-4 space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">
            Nossa metodologia em 4 pilares
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-md border bg-card p-4 text-card-foreground">
              <div className="text-2xl">🎯</div>
              <div className="mt-2 font-medium text-foreground">Fidelidade ao Projeto</div>
              <p className="text-sm text-muted-foreground">
                Execução fiel ao projeto original, sem atalhos que descaracterizam sua visão.
              </p>
            </div>
            <div className="rounded-md border bg-card p-4 text-card-foreground">
              <div className="text-2xl">🚀</div>
              <div className="mt-2 font-medium text-foreground">Início Imediato + 70 dias</div>
              <p className="text-sm text-muted-foreground">
                Cronograma realista com início imediato e entrega em 70 dias.
              </p>
            </div>
            <div className="rounded-md border bg-card p-4 text-card-foreground">
              <div className="text-2xl">♻️</div>
              <div className="mt-2 font-medium text-foreground">Zero Retrabalho</div>
              <p className="text-sm text-muted-foreground">
                Processos e validação contínua para evitar retrabalho.
              </p>
            </div>
            <div className="rounded-md border bg-card p-4 text-card-foreground">
              <div className="text-2xl">🏅</div>
              <div className="mt-2 font-medium text-foreground">Padrão Grandes Redes</div>
              <p className="text-sm text-muted-foreground">
                Padrões de qualidade e acabamento de redes líderes do setor.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


