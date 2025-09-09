import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GridPreviewPage() {
  return (
    <Section>
      <Container>
        <Grid
          left={
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Layout 60/40</h1>
              <p className="text-muted-foreground">
                Em desktop: 60% texto (esquerda) / 40% visual (direita). Em mobile: stack.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                CTA Laranja
              </Button>
            </div>
          }
          right={
            <Card>
              <CardHeader>
                <CardTitle>Visual de Exemplo</CardTitle>
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
