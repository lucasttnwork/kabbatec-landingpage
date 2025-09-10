"use client";

import { useState, useEffect, useCallback } from "react";
import { CaseData } from "@/lib/data/case-data";

interface UseLightboxOptions {
  initialIndex?: number;
  enableKeyboardNavigation?: boolean;
}

export function useLightbox(options: UseLightboxOptions = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(options.initialIndex || 0);
  const [cases, setCases] = useState<CaseData[]>([]);

  const { enableKeyboardNavigation = true } = options;

  // Open lightbox with specific case
  const openLightbox = useCallback((caseData: CaseData, allCases: CaseData[]) => {
    const index = allCases.findIndex(c => c.id === caseData.id);
    if (index !== -1) {
      setCurrentIndex(index);
      setCases(allCases);
      setIsOpen(true);
    }
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setCurrentIndex(0);
    setCases([]);
  }, []);

  // Navigate to next image
  const nextImage = useCallback(() => {
    if (cases.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % cases.length);
    }
  }, [cases.length]);

  // Navigate to previous image
  const prevImage = useCallback(() => {
    if (cases.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    }
  }, [cases.length]);

  // Go to specific index
  const goToImage = useCallback((index: number) => {
    if (index >= 0 && index < cases.length) {
      setCurrentIndex(index);
    }
  }, [cases.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ': // Space
          event.preventDefault();
          nextImage();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevImage();
          break;
        case 'Escape':
          event.preventDefault();
          closeLightbox();
          break;
        case 'Home':
          event.preventDefault();
          goToImage(0);
          break;
        case 'End':
          event.preventDefault();
          goToImage(cases.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, enableKeyboardNavigation, nextImage, prevImage, closeLightbox, goToImage, cases.length]);

  // Current case data
  const currentCase = cases[currentIndex];

  return {
    isOpen,
    currentIndex,
    currentCase,
    cases,
    totalCases: cases.length,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    goToImage,
  };
}
