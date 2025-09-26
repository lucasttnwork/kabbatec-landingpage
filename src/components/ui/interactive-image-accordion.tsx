import React, { useState, useCallback, useMemo, useRef } from 'react';
import { OptimizedImage } from './optimized-image';

interface InteractiveImageAccordionProps {
  title: string;
  quote: string;
  description: string;
  result: string;
  gallery: string[];
  category: string;
  snippets: string[];
}

export function InteractiveImageAccordion({
  title,
  quote,
  description,
  result,
  gallery,
  category,
  snippets,
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(gallery.length - 1);
  const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

  // Prepare items for accordion panels
  const accordionItems = useMemo(() => (
    gallery.map((img, index) => ({
      id: index,
      title: snippets[index] || `Detalhe ${index + 1}`,
      imageUrl: img,
    }))
  ), [gallery, snippets]);

  const setActive = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const setActiveWithDelay = useCallback((index: number) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = setTimeout(() => setActive(index), 120);
  }, [setActive]);

  const AccordionItem = ({ item, isActive, index }: {
    item: { id: number; title: string; imageUrl: string };
    isActive: boolean;
    index: number;
  }) => {
    return (
      <div
        className={`
          relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
          min-w-[60px] flex-shrink-0 transform-gpu
          transition-all duration-700 ease-in-out
          ${isActive ? 'w-[400px]' : 'w-[60px]'}
        `}
        style={{
          willChange: 'width, transform'
        }}
        onMouseEnter={() => setActiveWithDelay(index)}
        onFocus={() => setActive(index)}
        onTouchStart={() => setActive(index)}
        onClick={() => setActive(index)}
        role="button"
        tabIndex={0}
        aria-label={`Mostrar detalhe ${index + 1}: ${item.title}`}
        aria-expanded={isActive}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setActive(index);
          if (e.key === 'ArrowRight') setActive(Math.min(index + 1, accordionItems.length - 1));
          if (e.key === 'ArrowLeft') setActive(Math.max(index - 1, 0));
        }}
        onMouseLeave={() => {
          if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
          }
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <OptimizedImage
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 60vw, 400px"
            className="object-cover pointer-events-none"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8Alt4p5s5U2aW9i0t7N0l5K1nU0g6m1u3Z0v1M1tL1f//Z"
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-black pointer-events-none" 
          style={{ opacity: isActive ? 0.4 : 0.6, transition: `opacity 360ms ${EASING}` }}
        />

        {/* Caption Text with category badge if active */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none" 
          style={{ transformOrigin: 'bottom center' }}
        >
          {isActive && (
            <span 
              className="block absolute bottom-[90px] px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs text-white border border-white/20 font-medium mb-2"
              style={{ opacity: 1, transition: `opacity 300ms ${EASING}` }}
            >
              {category}
            </span>
          )}
          <span
            className="absolute text-white text-lg font-semibold whitespace-nowrap"
            style={{
              bottom: isActive ? '1.5rem' : '6rem',
              left: '50%',
              transform: `translateX(-50%) ${isActive ? 'rotate(0deg)' : 'rotate(90deg)'}`,
              transition: `bottom 420ms ${EASING}, transform 420ms ${EASING}`
            }}
          >
            {item.title}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-8">
        {/* Left Side: Text Content - Reduced space */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-4">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight leading-tight">
            {title}
          </h3>
          <blockquote className="text-lg md:text-xl italic text-white/90 font-serif font-light border-l-4 border-white/20 pl-4">
            "{quote}"
          </blockquote>
          <p className="text-sm md:text-base text-white/80 font-inter font-light leading-relaxed line-clamp-3">
            {description}
          </p>
          <div className="pt-2 border-t border-white/10">
            <p className="text-base md:text-lg font-serif font-light text-white">
              <strong className="text-gold">Resultado:</strong> {result}
            </p>
          </div>
        </div>

        {/* Right Side: Image Accordion - Expanded space */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4 scrollbar-hide flex-nowrap">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
