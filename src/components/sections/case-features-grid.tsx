"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import type { CaseData } from "@/lib/data/case-data";

interface CaseFeaturesGridProps {
  data: CaseData;
}

/**
 * CaseFeaturesGrid
 * Grid de features inspirado no bloco Features 11 ([21st.dev](https://21st.dev/meschacirung/features-11/default)).
 * Renderiza um cabeçalho do case e um grid com cards de imagem e texto.
 */
export function CaseFeaturesGrid({ data }: CaseFeaturesGridProps) {
  // Coleção de imagens (galeria + placeholders)
  const gallery = (data.gallery && data.gallery.length > 0
    ? data.gallery
    : [data.image?.src].filter(Boolean)) as string[];

  // Imagens reais (Unsplash) para placeholders — melhor percepção visual
  const placeholders = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1571907480495-3b21f2b6b18f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1554344728-77cfb1d4e1bd?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1600&q=80",
  ];

  const getImageFromPool = (index: number) => {
    if (gallery && gallery.length > 0) {
      return gallery[index % gallery.length] ?? gallery[0];
    }
    return placeholders[index % placeholders.length];
  };

  const snippets = data.snippets ?? [];

  type FeatureItem = { title: string; description?: string; imageSrc: string };
  const items: FeatureItem[] = [];

  // 1) Card principal com título + citação
  items.push({
    title: data.title,
    description: data.quote ?? data.description,
    imageSrc: getImageFromPool(0),
  });

  // 2) Card com descrição/resultados
  if (data.description || data.result) {
    items.push({
      title: data.result ? data.result : data.title,
      description: data.description,
      imageSrc: getImageFromPool(1),
    });
  }

  // 3) Cards para cada snippet
  snippets.forEach((s, i) => {
    items.push({
      title: s,
      description: data.result ?? undefined,
      imageSrc: getImageFromPool(i + 2),
    });
  });

  // 4) Card com métricas/tags/categoria
  const detailsTextParts: string[] = [];
  if (data.category) detailsTextParts.push(`Categoria: ${data.category}`);
  if (data.metrics?.area) detailsTextParts.push(`Área: ${data.metrics.area}`);
  if (data.metrics?.duration) detailsTextParts.push(`Duração: ${data.metrics.duration}`);
  if (data.tags && data.tags.length) detailsTextParts.push(`#${data.tags.join(" #")}`);
  const detailsText = detailsTextParts.join(" · ");
  if (detailsText) {
    items.push({
      title: data.client ?? data.title,
      description: detailsText,
      imageSrc: getImageFromPool(items.length + 1),
    });
  }

  return (
    <section className="w-full">

      {/* Grid de features - cards consistentes: TEXTO em cima, IMAGEM abaixo (4:3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
        {items.map((item, idx) => (
          <div
            key={`feature-${idx}`}
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden h-full flex flex-col"
          >
            {/* Texto sempre no topo */}
            <div className="p-5 md:p-6 flex flex-col gap-2 min-h-[140px]">
              {idx === 0 ? (
                <div className="flex items-center gap-3 mb-2">
                  {data.category ? (
                    <Badge variant="secondary" className="bg-white/10 border-white/15 text-white">
                      {data.category}
                    </Badge>
                  ) : null}
                  <Badge variant="outline" className="border-white/20 text-white/70">
                    {data.metrics.status === "completed" ? "Concluído" : data.metrics.status === "ongoing" ? "Em andamento" : "Em breve"}
                  </Badge>
                </div>
              ) : null}
              <h4 className="font-semibold tracking-tight text-white text-lg md:text-xl">
                {item.title}
              </h4>
              {item.description ? (
                <p className="mt-1.5 text-white/75 leading-relaxed text-[13px] md:text-sm line-clamp-4">
                  {item.description}
                </p>
              ) : null}
            </div>

            {/* Imagem com proporção fixa */}
            {item.imageSrc ? (
              <div className="relative aspect-[16/9] bg-white/[0.04]">
                <OptimizedImage
                  src={item.imageSrc}
                  alt={item.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 ring-0" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseFeaturesGrid;


