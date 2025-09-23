"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800" role="banner">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.08)]">
              <span className="text-[13px] font-serif font-semibold text-white/95 tracking-tight">K</span>
            </div>
            <span className="text-xl font-serif font-light tracking-tight text-zinc-100">Kabbatec</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Primária">
            <Link
              href="#observacao"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Nossa Abordagem
            </Link>
            <Link
              href="#cases"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Cases
            </Link>
            <Link
              href="#padrao"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Padrão
            </Link>
            <Link
              href="#contato"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#contato">
              <Button variant="outline" size="lg">Conversa Seletiva</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-zinc-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95" id="mobile-menu">
            <div className="container py-4">
              <nav className="flex flex-col gap-4" aria-label="Primária móvel">
                <Link
                  href="#observacao"
                  className="text-zinc-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nossa Abordagem
                </Link>
                <Link
                  href="#cases"
                  className="text-zinc-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cases
                </Link>
                <Link
                  href="#padrao"
                  className="text-zinc-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Padrão
                </Link>
                <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                  <Button size="lg" className="mt-4">Conversa Seletiva</Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}