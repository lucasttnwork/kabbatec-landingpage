"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  metrics?: {
    label: string;
    value: string;
  };
  features: string[];
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
}

export function MagicBento({ items, className }: MagicBentoProps) {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a masonry-like layout
  const getGridCols = () => {
    if (items.length <= 3) return "grid-cols-1 md:grid-cols-3";
    if (items.length <= 6) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  };

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div className={cn("grid gap-6", getGridCols())}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-white/8 to-white/4 border border-white/10 backdrop-blur-sm",
              selectedItem?.id === item.id ? "ring-2 ring-blue-400/50" : ""
            )}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            {/* Image Container */}
            <div className="aspect-[4/3] relative overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredItem === item.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs text-white border border-white/20 font-inter font-medium">
                  {item.category}
                </span>
              </div>

              {/* Metrics Badge */}
              {item.metrics && (
                <div className="absolute top-4 right-4">
                  <div className="bg-black/40 backdrop-blur rounded-xl px-3 py-2 border border-white/10">
                    <div className="text-sm font-inter font-medium text-white">
                      {item.metrics.value}
                    </div>
                    <div className="text-xs text-white/60 font-inter font-light">
                      {item.metrics.label}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-inter font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 font-inter font-light leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {item.features.slice(0, 3).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10 font-inter font-light"
                  >
                    {feature}
                  </span>
                ))}
                {item.features.length > 3 && (
                  <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/40 border border-white/5 font-inter font-light">
                    +{item.features.length - 3} mais
                  </span>
                )}
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              layoutId={selectedItem.id}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm text-white border border-white/20 font-inter font-medium">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl font-inter font-medium text-white mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-white/70 font-inter font-light leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              {/* All Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-2 bg-white/5 rounded-full text-sm text-white/80 border border-white/10 font-inter font-light"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-inter font-medium transition-colors"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
