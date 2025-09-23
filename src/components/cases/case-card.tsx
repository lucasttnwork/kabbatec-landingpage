"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseData } from "@/lib/data/case-data";
import { useHoverLift } from "@/lib/hooks/useHoverLift";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface CaseCardProps {
  caseData: CaseData;
  onClick: (caseData: CaseData) => void;
  index?: number;
}

export function CaseCard({ caseData, onClick }: CaseCardProps) {
  const hoverLift = useHoverLift({ liftAmount: "-translate-y-2", duration: "duration-300" });

  const handleClick = () => {
    onClick(caseData);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  // Status badge variant and text
  const getStatusInfo = (status: CaseData['metrics']['status']) => {
    switch (status) {
      case 'completed':
        return { variant: 'secondary' as const, text: 'Concluído', color: 'bg-white/10 text-zinc-200 border-white/20' };
      case 'ongoing':
        return { variant: 'secondary' as const, text: 'Em andamento', color: 'bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary))/0.2]' };
      case 'upcoming':
        return { variant: 'outline' as const, text: 'Em breve', color: 'bg-white/10 text-zinc-300 border-white/20' };
      default:
        return { variant: 'outline' as const, text: 'Status', color: 'bg-white/10 text-zinc-300 border-white/20' };
    }
  };

  const statusInfo = getStatusInfo(caseData.metrics.status);

  return (
    <Card
      className={`
        group cursor-pointer overflow-hidden border border-white/10 shadow-md
        hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-[hsl(var(--card))]/90
        ${hoverLift.className}
      `}
      onClick={handleClick}
      onMouseEnter={hoverLift.onMouseEnter}
      onMouseLeave={hoverLift.onMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do case ${caseData.title}`}
      data-testid="case-card"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
        {/* Optimized Image */}
        <OptimizedImage
          src={caseData.image.src}
          alt={caseData.image.alt}
          width={400}
          height={267}
          className="object-cover w-full h-full"
        />

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant={statusInfo.variant}
            className={`text-xs font-medium ${statusInfo.color} backdrop-blur-sm border`}
          >
            {statusInfo.text}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-white/10 transition-colors duration-300 z-5" />

        {/* Gallery Indicator */}
        {caseData.gallery && caseData.gallery.length > 0 && (
          <div className="absolute bottom-3 left-3 z-10">
            <Badge variant="outline" className="text-xs px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white border-white/30">
              📸 {caseData.gallery.length + 1} fotos
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-xl md:p-2xl">
        {/* Client & Title */}
        <div className="mb-sm">
          <p className="text-sm text-zinc-400 font-medium mb-1">{caseData.client}</p>
          <h3 className="text-lg md:text-xl font-semibold text-zinc-100 leading-tight">
            {caseData.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-lg line-clamp-2">
          {caseData.description}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-sm mb-lg text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <span className="text-zinc-400">📏</span>
            <span>{caseData.metrics.area}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-zinc-400">⏱️</span>
            <span>{caseData.metrics.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-xs">
          {caseData.tags.map((tag, tagIndex) => (
            <Badge
              key={`${caseData.id}-tag-${tagIndex}`}
              variant="secondary"
              className="text-xs px-2 py-0.5 bg-white/10 text-zinc-300 border border-white/15 hover:bg-white/15"
            >
              #{tag}
            </Badge>
          ))}
        </div>

      </CardContent>
    </Card>
  );
}
