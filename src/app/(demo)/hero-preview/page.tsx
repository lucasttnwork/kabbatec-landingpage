import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroPreviewPage() {
  return (
    <Section>
      <Container>
        <Grid
          left={
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-foreground">
                A diferença entre sua academia personalizada virar realidade
              </h1>
              <p className="text-lg text-muted-foreground">
                Como a Kabbatec executa projetos únicos de 600 a 1.000m² preservando cada detalhe personalizado em 70 dias.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-foreground">
                <li>✓ 5 academias premium entregues</li>
                <li>✓ 100% no prazo</li>
                <li>✓ Zero retrabalho</li>
                <li>✓ Metodologia aprovada por Raquel Kabbani</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-normal text-center">
                  QUERO MINHA ANÁLISE GRATUITA
                </Button>
                <Button variant="link">Ver casos de sucesso ↓</Button>
              </div>
            </div>
          }
          right={
            <Card>
              <CardHeader>
                <CardTitle>Visual Hero</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] w-full rounded bg-muted" />
              </CardContent>
            </Card>
          }
        />
      </Container>
    </Section>
  );
}


