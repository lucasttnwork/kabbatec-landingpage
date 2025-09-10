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

export function CaseCard({ caseData, onClick, index }: CaseCardProps) {
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
        return { variant: 'default' as const, text: '✅ Concluído', color: 'bg-green-100 text-green-800' };
      case 'ongoing':
        return { variant: 'secondary' as const, text: '🔄 Em Andamento', color: 'bg-blue-100 text-blue-800' };
      case 'upcoming':
        return { variant: 'outline' as const, text: '⏳ Em Breve', color: 'bg-gray-100 text-gray-800' };
      default:
        return { variant: 'outline' as const, text: 'Status', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const statusInfo = getStatusInfo(caseData.metrics.status);

  return (
    <Card
      className={`
        group cursor-pointer overflow-hidden border-0 shadow-md
        hover:shadow-xl transition-all duration-300
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
      <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
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
            className={`text-xs font-medium ${statusInfo.color} border-0 backdrop-blur-sm`}
          >
            {statusInfo.text}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-5" />

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
      <CardContent className="p-6">
        {/* Client & Title */}
        <div className="mb-3">
          <p className="text-sm text-slate-600 font-medium mb-1">{caseData.client}</p>
          <h3 className="text-lg font-semibold text-slate-900 leading-tight">
            {caseData.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {caseData.description}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span className="text-slate-400">📏</span>
            <span>{caseData.metrics.area}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-slate-400">⏱️</span>
            <span>{caseData.metrics.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {caseData.tags.map((tag, tagIndex) => (
            <Badge
              key={`${caseData.id}-tag-${tagIndex}`}
              variant="secondary"
              className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              #{tag}
            </Badge>
          ))}
        </div>

      </CardContent>
    </Card>
  );
}
