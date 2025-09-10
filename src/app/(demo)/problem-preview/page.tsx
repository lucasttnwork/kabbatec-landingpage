import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function ProblemPreviewPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl px-4 space-y-8">
          <h2 className="text-3xl font-semibold text-foreground">
            O problema que ninguém conta
          </h2>

          <div className="space-y-4 text-lg text-foreground/90">
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

          <div className="rounded-md border bg-secondary p-4 text-foreground">
            <blockquote className="text-base text-muted-foreground">
              &ldquo;Elas ‘adaptam’ seu projeto para caber no molde antigo. Nós
              preservamos cada detalhe como foi concebido.&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-md border p-4">
              <div className="text-xl">🏗️</div>
              <div className="mt-2 font-medium text-foreground">
                Adaptações genéricas
              </div>
              <p className="text-sm text-muted-foreground">
                Forçam o projeto a caber em métodos antigos.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <div className="text-xl">⚠️</div>
              <div className="mt-2 font-medium text-foreground">
                Simplificação de detalhes
              </div>
              <p className="text-sm text-muted-foreground">
                Reduz qualidade e descaracteriza sua visão original.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <div className="text-xl">📉</div>
              <div className="mt-2 font-medium text-foreground">
                Retorno abaixo do esperado
              </div>
              <p className="text-sm text-muted-foreground">
                Impacta a performance e a percepção premium do espaço.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


