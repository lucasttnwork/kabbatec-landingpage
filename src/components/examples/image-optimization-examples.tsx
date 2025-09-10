"use client";

import React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { CDNUtils } from "@/lib/config/cdn";
import { useImagePerformanceTracker } from "@/lib/hooks/useImagePerformance";

/**
 * Exemplos de uso das funcionalidades de otimização de imagem
 * Este componente demonstra todas as possibilidades implementadas
 */
export function ImageOptimizationExamples() {
  const { trackImage, getPerformanceReport } = useImagePerformanceTracker();

  const handleImageLoad = (src: string) => {
    // Simular tracking de performance
    trackImage({
      loadTime: Math.random() * 500 + 100, // Simulado
      size: Math.random() * 100000 + 50000, // Simulado
      format: 'webp',
      cached: Math.random() > 0.5,
      dimensions: { width: 800, height: 600 }
    });

    console.log(`✅ Image loaded: ${src}`);
  };

  const report = getPerformanceReport();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">🚀 Otimização de Imagens - Exemplos</h1>
        <p className="text-gray-600 mb-8">
          Demonstração completa das funcionalidades implementadas
        </p>

        {/* Performance Report */}
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <h3 className="font-semibold mb-2">📊 Performance Report</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>Total: <strong>{report.totalImages}</strong></div>
            <div>Carregadas: <strong>{report.loadedImages}</strong></div>
            <div>Tempo Médio: <strong>{report.averageLoadTime.toFixed(1)}ms</strong></div>
            <div>Taxa Sucesso: <strong>{report.successRate.toFixed(1)}%</strong></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Exemplo 1: Imagem Básica Otimizada */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">📸 Imagem Básica Otimizada</h2>
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border">
            <OptimizedImage
              src="/cases/elite-core.jpg"
              alt="Elite Core Academy - Exemplo básico"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            ✅ Lazy loading automático<br/>
            ✅ Blur-up effect<br/>
            ✅ Performance tracking<br/>
            ✅ WebP/AVIF automático
          </p>
        </div>

        {/* Exemplo 2: Imagem com CDN */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">🚀 Imagem com CDN</h2>
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border">
            <OptimizedImage
              src="/cases/first-move.jpg"
              alt="First Move Studio - Com CDN"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            ✅ CDN automático quando habilitado<br/>
            ✅ Fallback para URL original<br/>
            ✅ Cache otimizado<br/>
            ✅ Logs de CDN no console
          </p>
        </div>

        {/* Exemplo 3: Imagem Prioritária */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">⭐ Imagem Prioritária</h2>
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border">
            <OptimizedImage
              src="/cases/two-ases.jpg"
              alt="Two Ases Fitness - Prioritária"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            ✅ Carregamento prioritário<br/>
            ✅ Qualidade alta (90%)<br/>
            ✅ Acima da dobra otimizada<br/>
            ✅ Sem lazy loading
          </p>
        </div>

        {/* Exemplo 4: Imagem com Fallback */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">🔄 Imagem com Fallback</h2>
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border">
            <OptimizedImage
              src="/cases/elite-core.jpg"
              alt="Imagem com fallback"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            ✅ Fallback automático<br/>
            ✅ Tratamento de erro<br/>
            ✅ Loading states<br/>
            ✅ Error boundary
          </p>
        </div>
      </div>

      {/* CDN Status */}
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">🌐 Status do CDN</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🚀</div>
            <p className="font-medium">CDN Habilitado</p>
            <p className="text-sm text-gray-600">
              {CDNUtils.isCDNEnabled() ? '✅ Ativo' : '❌ Desabilitado'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📍</div>
            <p className="font-medium">Regiões</p>
            <p className="text-sm text-gray-600">
              {CDNUtils.getCDNRegions().length} regiões disponíveis
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚡</div>
            <p className="font-medium">Performance</p>
            <p className="text-sm text-gray-600">
              Otimizado para produção
            </p>
          </div>
        </div>
      </div>

      {/* Configuração de Uso */}
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">⚙️ Como Usar</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Para imagens básicas:</h4>
            <code className="block bg-gray-100 p-2 rounded text-sm">
              {`<OptimizedImage
  src="/caminho/para/imagem.jpg"
  alt="Descrição da imagem"
  width={800}
  height={600}
/>`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Para imagens com tracking:</h4>
            <code className="block bg-gray-100 p-2 rounded text-sm">
              {`<OptimizedImage
  src="/caminho/para/imagem.jpg"
  alt="Descrição da imagem"
  enablePerformanceTracking={true}
  useCDN={true}
/>`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Para imagens críticas:</h4>
            <code className="block bg-gray-100 p-2 rounded text-sm">
              {`<OptimizedImage
  src="/caminho/para/imagem.jpg"
  alt="Descrição crítica"
  priority={true}
  quality={95}
/>`}
            </code>
          </div>
        </div>
      </div>

      {/* Logs de Performance */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">📋 Logs de Performance</h3>
        <p className="text-sm text-gray-600 mb-4">
          Abra o console do navegador (F12) para ver os logs detalhados de carregamento das imagens,
          incluindo tempo de carregamento, formato, dimensões e status do CDN.
        </p>
        <div className="bg-black text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <div>📊 Image Performance - /cases/elite-core.jpg:</div>
          <div>&nbsp;&nbsp;Load Time: 245.32ms</div>
          <div>&nbsp;&nbsp;Dimensions: 800x600</div>
          <div>&nbsp;&nbsp;Format: webp</div>
          <div>&nbsp;&nbsp;Cached: false</div>
          <div>🚀 Image served via CDN: https://images.kabbatec.com/cases/elite-core.jpg</div>
        </div>
      </div>
    </div>
  );
}
