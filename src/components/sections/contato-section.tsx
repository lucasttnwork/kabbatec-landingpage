"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContatoSection() {
  return (
    <section id="contato" className="section border-t border-zinc-800 bg-zinc-950">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center overflow-hidden max-w-full">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 mb-4">
            Pronto para o próximo nível
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Vamos construir sua referência em SP
          </h2>
          <p className="mt-4 text-zinc-300">
            Conte sua visão e receba uma proposta direta, sem rodeios.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-sm relative z-10">
            <Link href="mailto:contato@kabbatec.com?subject=Projeto%20Academia%20Personalizada">
              <Button variant="default" size="lg">Falar com especialista</Button>
            </Link>
            <Link href="#cases">
              <Button variant="secondary" size="lg">Ver padrões de execução</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


