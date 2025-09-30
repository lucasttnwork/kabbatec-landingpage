"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CasePortfolioGridProps {
  images: string[];
  tags: string[];
  metrics: {
    area?: string;
    duration?: string;
    status?: string;
  };
}

interface PortfolioCardProps {
  image: string;
  badges: string[];
  variant: "large" | "small";
}

function PortfolioCard({ image, badges, variant }: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.05] backdrop-blur-sm transition-all duration-500",
        "hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]",
        variant === "large" ? "min-h-[320px]" : "min-h-[220px]",
      )}
      data-case-card
    >
      <div
        className={cn(
          "relative w-full h-full",
          variant === "large" ? "aspect-[5/4]" : "aspect-[4/5] md:aspect-square",
        )}
      >
        <Image
          src={image}
          alt="Case highlight"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBmaWxsPSIjMTExMTExIj48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcvPjwvc3ZnPg=="
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-85" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 rounded-[32px] border border-white/10 opacity-0 transition group-hover:opacity-40" />
          <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-40" />
        </div>
      </div>
    </div>
  );
}

export function CasePortfolioGrid({ images, tags, metrics }: CasePortfolioGridProps) {
  const fallbackImages = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1571907480495-3b21f2b6b18f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1594737625785-90bc1c33df52?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1562771242-0a8a2e66b19d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526402468533-87b01cc2ebcb?auto=format&fit=crop&w=1600&q=80",
  ];

  const normalizedImages = Array.from(
    new Set([...images.filter(Boolean), ...fallbackImages]),
  );

  const imageAt = (index: number) => normalizedImages[index % normalizedImages.length];

  const metricBadges = [metrics.status, metrics.area, metrics.duration].filter(
    Boolean,
  ) as string[];

  const tagBadges = tags.length > 0 ? tags : metricBadges;

  const badgeSequence = (tagBadges.length > 0 ? tagBadges : metricBadges).filter(
    Boolean,
  );

  const buildSmallBadges = (slot: number) => {
    if (badgeSequence.length === 0) {
      return [];
    }

    const first = badgeSequence[slot % badgeSequence.length];
    const second = badgeSequence[(slot + 1) % badgeSequence.length];

    return Array.from(new Set([first, second].filter(Boolean)));
  };

  const primaryLargeBadges = (metricBadges.length > 0 ? metricBadges : badgeSequence).slice(
    0,
    3,
  );

  const secondaryLargeBadges = (badgeSequence.length > 0 ? badgeSequence : metricBadges).slice(
    0,
    3,
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <PortfolioCard image={imageAt(1)} badges={buildSmallBadges(0)} variant="small" />
          <PortfolioCard image={imageAt(2)} badges={buildSmallBadges(1)} variant="small" />
        </div>
        <PortfolioCard image={imageAt(0)} badges={primaryLargeBadges} variant="large" />
      </div>

      <div className="grid gap-6">
        <PortfolioCard image={imageAt(3)} badges={secondaryLargeBadges} variant="large" />
        <div className="grid gap-6 sm:grid-cols-2">
          <PortfolioCard image={imageAt(4)} badges={buildSmallBadges(2)} variant="small" />
          <PortfolioCard image={imageAt(5)} badges={buildSmallBadges(3)} variant="small" />
        </div>
      </div>
    </div>
  );
}

export default CasePortfolioGrid;

