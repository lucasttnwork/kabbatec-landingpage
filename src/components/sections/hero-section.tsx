"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";
import GlowText from "@/components/ui/glow-text";
import { LightBar } from "@/components/ui/light-bar";

export function HeroSection() {
  return (
    <section className="relative overflow-visible min-h-[80vh] flex items-center scroll-reveal pt-8 pb-6 bg-black">

      {/* Light Bar 2px abaixo do topo da hero (quase tocando a navbar) */}
      <div className="absolute left-0 top-[2px] w-full z-10 overflow-visible">
        <LightBar blur={false} overflow />
      </div>

      <div className="container relative z-30">
        <div className="max-w-7xl relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:mx-auto">
          <div className="space-y-8 sm:space-y-10 lg:pl-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/8 border border-white/15 backdrop-blur-sm shadow-[inset_0_0_15px_rgba(255,255,255,0.08)]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="text-xs text-white font-inter font-light tracking-wide">A diferença entre imaginar e fazer de verdade</span>
          </div>

          {/* Headline (H1 com efeito de blur por palavras) */}
          <BlurText
            as="h1"
            text="Para visionários que não aceitam 'mais ou menos'"
            className="text-[48px] font-serif font-light text-white leading-[calc(1.1em+10px)] max-w-[40ch] tracking-[0.08em] uppercase"
            animateBy="words"
            direction="top"
            delay={120}
          />

          <div className="mt-8 space-y-2">
            <BlurText
              text="Alguns controem academias."
              className="text-[16px] font-inter font-normal text-white/50 leading-relaxed"
              animateBy="words"
              direction="top"
              delay={1000}
            />
            <GlowText
              text="Nós criamos referencias."
              className="text-[44px] font-serif font-light text-white leading-[1.1] tracking-tight"
              animateBy="words"
              direction="top"
              delay={1000}
              glowType="static"
              glowColor="rgba(255, 255, 255, 0.8)"
              glowDelay={3000}
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-12 lg:pt-16">
            <Link href="#contato">
              <span className="relative inline-flex rounded-2xl p-[1px] bg-gradient-to-r from-white/15 to-white/8 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-500">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/90 text-black hover:bg-white hover:text-black border border-white/25 backdrop-blur-sm font-inter font-semibold tracking-wide px-7 py-3.5 text-sm rounded-[1rem] hover-lift shadow-[inset_0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform duration-300"
                >
                  Sua visão merece este cuidado
                </Button>
              </span>
            </Link>
            <Link href="#cases">
              <Button variant="outline" size="lg" className="border-white/20 text-white/90 hover:bg-white/3 hover:border-white/30 font-inter font-extralight tracking-wide px-7 py-3.5 text-sm rounded-2xl backdrop-blur-sm hover-lift shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
                Conheça o padrão reconhecido
              </Button>
            </Link>
          </div>

          </div>

          {/* Hero Portrait - Fernando */}
          <div className="hidden lg:flex justify-center items-center pt-6 lg:pt-0">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.06)] w-full max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] h-[480px] lg:h-[520px] xl:h-[560px]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/3 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)] rounded-[1.5rem]" />
              <Image
                src="/cases/elite-core-1.jpg"
                alt="Fernando - Kabbatec"
                width={720}
                height={920}
                priority
                loading="eager"
                className="w-full h-full object-cover mix-blend-lighten opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator fixado no limite inferior da hero */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 pointer-events-none">
        <div className="flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
        </div>
      </div>
    </section>
  );
}