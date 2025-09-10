import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SolutionPreviewPage() {
  return (
    <Section>
      <Container>
        <Grid
          left={
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">
                Como a Kabbatec resolve o problema
              </h2>
              <p className="text-lg text-muted-foreground">
                Execução fiel ao projeto original, zero vícios de mercado e prazo real
                de 70 dias para academias premium entre 600 e 1.000m².
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-foreground">
                <li>✓ 5 academias premium entregues</li>
                <li>✓ Zero retrabalho</li>
                <li>✓ Prazo de 70 dias</li>
                <li>✓ Padrão Grandes Redes</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-normal text-center">
                  QUERO MINHA ANÁLISE GRATUITA
                </Button>
                <Button variant="link">Entender metodologia ↓</Button>
              </div>
            </div>
          }
          right={
            <Card>
              <CardHeader>
                <CardTitle>Equipe Kabbatec</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="aspect-[4/3] w-full rounded bg-muted" />
                  <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                    <div className="rounded-md border bg-card p-3 text-xs">
                      Zero retrabalho
                    </div>
                    <div className="rounded-md border bg-card p-3 text-xs">
                      70 dias de obra
                    </div>
                    <div className="rounded-md border bg-card p-3 text-xs">
                      Fidelidade ao projeto
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          }
        />
      </Container>
    </Section>
  );
}


