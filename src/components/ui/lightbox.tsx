"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseData } from "@/lib/data/case-data";
import { Badge } from "@/components/ui/badge";

interface LightboxProps {
  isOpen: boolean;
  currentCase: CaseData | undefined;
  currentIndex: number;
  totalCases: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoToCase: (index: number) => void;
}

export function Lightbox({
  isOpen,
  currentCase,
  currentIndex,
  totalCases,
  onClose,
  onNext,
  onPrev,
  onGoToCase,
}: LightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Reset image index when case changes
  useEffect(() => {
    if (currentCase) {
      setCurrentImageIndex(0);
      setIsZoomed(false);
      setZoomPosition({ x: 0, y: 0 });
    }
  }, [currentCase]);

  // Handle escape key and prevent scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'ArrowUp':
          handlePrevCase();
          break;
        case 'ArrowDown':
          handleNextCase();
          break;
        case ' ':
          event.preventDefault();
          handleNextImage();
          break;
      }
    };

    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen, onClose]);

  // Touch gesture handling
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;
    const minSwipeDistance = 50;

    // Horizontal swipe for image navigation
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    // Vertical swipe for case navigation
    else if (Math.abs(diffY) > minSwipeDistance) {
      if (diffY > 0 && totalCases > 1) {
        handleNextCase();
      } else if (diffY < 0 && totalCases > 1) {
        handlePrevCase();
      }
    }

    touchStartX.current = 0;
    touchStartY.current = 0;
  };

  // Mouse drag handling for zoomed images
  const handleMouseDown = (event: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    setDragStart({ x: event.clientX - zoomPosition.x, y: event.clientY - zoomPosition.y });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;
    setZoomPosition({
      x: event.clientX - dragStart.x,
      y: event.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom handling
  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
    if (!isZoomed) {
      setZoomPosition({ x: 0, y: 0 });
    }
  };

  const handleDoubleClick = (event: React.MouseEvent) => {
    if (!isZoomed) {
      const rect = imageRef.current?.getBoundingClientRect();
      if (rect) {
        setZoomPosition({
          x: event.clientX - rect.left - rect.width / 2,
          y: event.clientY - rect.top - rect.height / 2,
        });
      }
    }
    setIsZoomed(!isZoomed);
  };

  // Navigation handlers
  const handlePrevImage = () => {
    if (!currentCase?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : (currentCase.gallery?.length || 0)
    );
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleNextImage = () => {
    if (!currentCase?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev < (currentCase.gallery?.length || 0) ? prev + 1 : 0
    );
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handlePrevCase = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalCases - 1;
    onGoToCase(newIndex);
  };

  const handleNextCase = () => {
    const newIndex = currentIndex < totalCases - 1 ? currentIndex + 1 : 0;
    onGoToCase(newIndex);
  };

  // Get current image (main image or from gallery)
  const getCurrentImage = () => {
    if (!currentCase) return null;
    if (currentImageIndex === 0) {
      return currentCase.image;
    }
    const galleryImage = currentCase.gallery?.[currentImageIndex - 1];
    return galleryImage ? {
      src: galleryImage,
      alt: `${currentCase.title} - Imagem ${currentImageIndex}`,
    } : currentCase.image;
  };

  const currentImage = getCurrentImage();
  const totalImages = currentCase ? (currentCase.gallery?.length || 0) + 1 : 0;

  if (!isOpen || !currentCase || !currentImage) return null;

  return (
    <div
      ref={overlayRef}
      data-testid="lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={onClose}
        aria-label="Fechar galeria"
        data-testid="lightbox-close"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Case Navigation */}
      {totalCases > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 z-10 text-white hover:bg-white/20 transform -translate-y-1/2"
            onClick={handlePrevCase}
            aria-label="Caso anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 z-10 text-white hover:bg-white/20 transform -translate-y-1/2"
            onClick={handleNextCase}
            aria-label="Próximo caso"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full mx-4"
        data-testid="lightbox-modal"
      >
        <div
          className="relative overflow-hidden rounded-lg bg-black"
          style={{
            aspectRatio: isZoomed ? 'auto' : '16/10',
            maxHeight: '90vh'
          }}
        >
          <img
            ref={imageRef}
            src={currentImage.src}
            alt={currentImage.alt}
            className={`w-full h-full object-contain transition-transform duration-300 ${
              isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
            }`}
            style={{
              transform: isZoomed ? `scale(2) translate(${zoomPosition.x}px, ${zoomPosition.y}px)` : 'scale(1)',
              transformOrigin: 'center',
            }}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            draggable={false}
            data-testid="lightbox-image"
          />

          {/* Image Navigation */}
          {totalImages > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 z-10 text-white hover:bg-white/20 transform -translate-y-1/2"
                onClick={handlePrevImage}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 z-10 text-white hover:bg-white/20 transform -translate-y-1/2"
                onClick={handleNextImage}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Zoom Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={handleZoomToggle}
            aria-label={isZoomed ? "Diminuir zoom" : "Aumentar zoom"}
            data-testid="lightbox-zoom-button"
          >
            {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          </Button>
        </div>

        {/* Case Information */}
        <div className="mt-4 text-white" data-testid="lightbox-case-description">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-xl font-semibold" data-testid="lightbox-case-title">{currentCase.title}</h3>
              <p className="text-white/70">{currentCase.client}</p>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30" data-testid="lightbox-image-counter">
                {currentImageIndex + 1} / {totalImages}
              </Badge>
            </div>
          </div>

          {/* Image Thumbnails */}
          {totalImages > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2" data-testid="lightbox-thumbnails">
              {/* Main image thumbnail */}
              <button
                onClick={() => setCurrentImageIndex(0)}
                className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden ${
                  currentImageIndex === 0 ? 'border-white' : 'border-white/30'
                }`}
                aria-label="Imagem principal"
              >
                <img
                  src={currentCase.image.src}
                  alt="Thumbnail principal"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Gallery thumbnails */}
              {currentCase.gallery?.map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index + 1)}
                  className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden ${
                    currentImageIndex === index + 1 ? 'border-white' : 'border-white/30'
                  }`}
                  aria-label={`Imagem ${index + 2}`}
                >
                  <img
                    src={imageSrc}
                    alt={`Thumbnail ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Case Details */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" data-testid="lightbox-case-metrics">
            <div>
              <span className="text-white/70">Área:</span>
              <p className="font-medium">{currentCase.metrics.area}</p>
            </div>
            <div>
              <span className="text-white/70">Duração:</span>
              <p className="font-medium">{currentCase.metrics.duration}</p>
            </div>
            <div>
              <span className="text-white/70">Status:</span>
              <p className="font-medium">
                {currentCase.metrics.status === 'completed' ? '✅ Concluído' :
                 currentCase.metrics.status === 'ongoing' ? '🔄 Em Andamento' : '⏳ Em Breve'}
              </p>
            </div>
            <div>
              <span className="text-white/70">Tags:</span>
              <p className="font-medium">{currentCase.tags.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Touch Instructions */}
        <div className="mt-4 text-center text-white/50 text-sm" data-testid="lightbox-instructions">
          <p>💡 Use as setas do teclado ou arraste para navegar</p>
          <p>📱 Toque e arraste para navegar entre imagens e casos</p>
        </div>
      </div>
    </div>
  );
}
