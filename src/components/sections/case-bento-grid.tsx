"use client";

import type { CaseData } from "@/lib/data/case-data";
import { CasePortfolioGrid } from "@/components/ui/case-portfolio-grid";

interface CaseBentoGridProps {
  data: CaseData;
}

export function CaseBentoGrid({ data }: CaseBentoGridProps) {
  const statusLabel =
    data.metrics.status === "completed"
      ? "Concluído"
      : data.metrics.status === "ongoing"
        ? "Em andamento"
        : "Em breve";

  const metricBadges = [data.metrics.area, data.metrics.duration].filter(
    Boolean,
  ) as string[];

  return (
    <section className="w-full">
      <div className="mb-10 space-y-6">
        <h3 className="text-2xl md:text-3xl font-inter font-light tracking-tight text-white">
          {data.client}
        </h3>

        <div className="space-y-4 text-white/80">
          {data.quote && (
            <p className="text-lg md:text-xl font-inter italic leading-relaxed max-w-3xl">
              “{data.quote}”
            </p>
          )}

          {data.result && (
            <p className="text-2xl md:text-[28px] font-serif font-light uppercase tracking-[0.2em] text-white">
              {data.result}
            </p>
          )}

          <p className="text-base md:text-lg font-inter font-light leading-relaxed text-white/70 max-w-3xl">
            {data.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[statusLabel, ...metricBadges].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs uppercase tracking-[0.2em] text-white/70"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <CasePortfolioGrid
        images={data.gallery ?? [data.image.src, data.image.placeholder ?? data.image.src]}
        tags={data.tags}
        metrics={{
          area: data.metrics.area,
          duration: data.metrics.duration,
          status: statusLabel,
        }}
      />
    </section>
  );
}

export default CaseBentoGrid;



