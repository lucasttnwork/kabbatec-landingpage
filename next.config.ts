import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Otimização de imagens
    formats: ['image/webp', 'image/avif'],

    // Domínios permitidos para imagens externas
    domains: [
      'localhost',
      'picsum.photos',
      'images.unsplash.com',
      'plus.unsplash.com',
      'images.pexels.com',
      // Adicionar domínios de CDN quando implementado
      // 'cdn.kabbatec.com',
    ],

    // Tamanhos de imagem otimizados
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache de imagens
    minimumCacheTTL: 60,

    // Desabilita otimização de URL para manter extensão no src (compat com testes)
    unoptimized: true,
  },

  // Headers de cache para imagens
  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/cases/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Otimizações para produção
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        images: {
          test: /\.(png|jpe?g|gif|svg|webp|avif)$/,
          name: 'images',
          chunks: 'all',
          enforce: true,
        },
      };
    }

    return config;
  },

  outputFileTracingRoot: path.join(__dirname),

};

export default nextConfig;
