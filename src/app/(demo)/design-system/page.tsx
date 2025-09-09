import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function DesignSystemPage() {
  const swatches = [
    { name: "Primary", className: "bg-primary text-primary-foreground" },
    { name: "Accent", className: "bg-accent text-accent-foreground" },
    { name: "Foreground", className: "bg-foreground text-background" },
    { name: "Muted", className: "bg-muted text-foreground" },
    { name: "Secondary", className: "bg-secondary text-foreground" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Design System Preview</h1>
        <p className="text-muted-foreground">Tokens de marca, tipografia e componentes base.</p>
      </section>

      <Separator />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {swatches.map((s) => (
          <Card key={s.name}>
            <CardHeader>
              <CardTitle>{s.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`h-16 w-full rounded ${s.className}`} />
            </CardContent>
          </Card>
        ))}
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Tipografia</h2>
        <div className="space-y-2">
          <div className="text-5xl font-bold">Heading H1 - 56px</div>
          <div className="text-4xl font-semibold">Heading H2 - 36px</div>
          <div className="text-3xl font-semibold">Heading H3 - 30px</div>
          <div className="text-2xl font-medium">Heading H4 - 24px</div>
          <p className="text-lg">Body Large - 18px</p>
          <p className="text-base text-muted-foreground">Body - 16px</p>
          <p className="text-sm text-muted-foreground">Caption - 14px</p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Componentes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>
    </main>
  );
}
