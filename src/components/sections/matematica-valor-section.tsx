"use client";

export function MatematicaValorSection() {
  // Conteúdo textual autêntico segundo a copy oficial

  return (
    <section className="py-32 scroll-reveal">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-light text-white tracking-tight leading-tight text-balance">
              Quanto custa aceitar &quot;mais ou menos&quot;?
            </h2>
          </div>

          {/* Espaçamento */}
          <div className="h-24"></div>

          {/* Cumplicidade + Lista de custos específicos */}
          <div className="max-w-3xl mx-auto text-center mb-16 prose-read hyphenate">
            <p className="text-xl text-white/80 font-inter font-light tracking-tighter leading-relaxed mb-8">
              Você conhece o preço real:
            </p>
            <ul className="text-left space-y-4 mx-auto max-w-2xl list-disc list-inside">
              <li className="text-white/80 font-inter font-light tracking-tighter">
                Clientes que entram e não sentem a diferença
              </li>
              <li className="text-white/80 font-inter font-light tracking-tighter">
                Concorrentes que não se intimidam
              </li>
              <li className="text-white/80 font-inter font-light tracking-tighter">
                Reformas constantes porque &quot;ficou bom&quot; envelhece rápido
              </li>
              <li className="text-white/80 font-inter font-light tracking-tighter">
                A sensação permanente de &quot;poderia ter sido melhor&quot;
              </li>
            </ul>
          </div>

          {/* Espaçamento */}
          <div className="h-16"></div>

          {/* Reposicionamento: investimento vs custo */}
          <div className="max-w-4xl mx-auto text-center prose-read hyphenate">
            <div className="bg-white/5 border border-white/10 p-16 rounded-2xl">
              <p className="text-2xl lg:text-3xl text-white/80 font-inter font-light tracking-tighter mb-8 leading-relaxed">
                Um projeto Kabbatec não é um custo.
              </p>
              <p className="text-3xl lg:text-4xl font-inter font-medium text-white tracking-tight leading-tight mb-8">
                É o investimento em se tornar referência.
              </p>

              <p className="text-2xl lg:text-3xl font-inter font-medium text-white tracking-tight leading-tight mt-10">
                R$ 2 milhões bem investidos &gt; R$ 1 milhão desperdiçado em &quot;mais ou menos&quot;
              </p>

              <p className="text-lg text-white font-inter font-light tracking-tighter mt-12">
                E você sabe que é verdade.
              </p>
            </div>
          </div>

          {/* Espaçamento final */}
          <div className="h-24"></div>
        </div>
      </div>
    </section>
  );
}