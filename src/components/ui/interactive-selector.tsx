"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  metrics: {
    value: string;
    label: string;
  };
}

interface InteractiveSelectorProps {
  options: Option[];
  className?: string;
}

export function InteractiveSelector({ options, className }: InteractiveSelectorProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = async (option: Option) => {
    if (option.id === selectedOption.id) return;

    setIsAnimating(true);

    // Small delay for smooth transition
    await new Promise(resolve => setTimeout(resolve, 150));

    setSelectedOption(option);
    setIsAnimating(false);
  };

  return (
    <div ref={containerRef} className={cn("w-full max-w-6xl mx-auto", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Options Sidebar */}
        <div className="space-y-4">
          <h3 className="text-2xl font-inter font-light text-white mb-6">
            Escolha seu foco
          </h3>
          {options.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleOptionChange(option)}
              className={cn(
                "w-full text-left p-6 rounded-2xl border transition-all duration-300 group",
                selectedOption.id === option.id
                  ? "bg-white/10 border-white/20 text-white shadow-lg"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/8 hover:border-white/15"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                  selectedOption.id === option.id
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white/80"
                )}>
                  {option.icon}
                </div>
                <div>
                  <h4 className="font-inter font-medium text-lg mb-2">
                    {option.title}
                  </h4>
                  <p className="font-inter font-light text-sm text-white/60">
                    {option.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedOption.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/8 to-white/4 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center border border-blue-500/20">
                  {selectedOption.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-inter font-light text-white mb-3">
                    {selectedOption.title}
                  </h3>
                  <p className="text-white/70 font-inter font-light leading-relaxed">
                    {selectedOption.description}
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedOption.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-inter font-medium text-white text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-white/60 font-inter font-light text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Metrics */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 font-inter font-light">
                    {selectedOption.metrics.label}
                  </span>
                  <span className="text-2xl font-inter font-medium text-blue-400">
                    {selectedOption.metrics.value}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
