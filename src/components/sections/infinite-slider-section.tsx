"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// 15 imagens quadradas (1:1) de placeholder opensource (Picsum)
const images = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  // Utiliza picsum.photos com seed para variabilidade e 1:1
  src: `https://picsum.photos/seed/kabbatec-${i + 1}/600/600`,
  alt: `Placeholder ${i + 1}`,
}));

export function InfiniteSliderSection() {
  return (
	    <section aria-label="Galeria em carrossel infinito" className="scroll-reveal bg-black">
	      <div className="w-full py-8">
	        <InfiniteSlider gap={16} duration={90} pauseOnHover className="py-1">
	          {images.map((img) => (
	            <div key={img.id} className="shrink-0">
	              <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-square overflow-hidden rounded-[10px] border border-white/10 bg-white/10">
	                <Image
	                  src={img.src}
	                  alt={img.alt}
	                  width={600}
	                  height={600}
	                  className="h-full w-full object-cover"
	                />
	              </div>
	            </div>
	          ))}
	        </InfiniteSlider>
	        <InfiniteSlider gap={16} duration={90} pauseOnHover reverse className="py-1">
	          {images.map((img) => (
	            <div key={`rev-${img.id}`} className="shrink-0">
	              <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-square overflow-hidden rounded-[10px] border border-white/10 bg-white/10">
	                <Image
	                  src={img.src}
	                  alt={img.alt}
	                  width={600}
	                  height={600}
	                  className="h-full w-full object-cover"
	                />
	              </div>
	            </div>
	          ))}
	        </InfiniteSlider>
	      </div>
	    </section>
  );
}


