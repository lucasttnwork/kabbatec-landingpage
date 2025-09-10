import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Otimização de imagens
    formats: ['image/webp', 'image/avif'],

    // Domínios permitidos para imagens externas
    domains: [
      'localhost',
      // Adicionar domínios de CDN quando implementado
      // 'cdn.kabbatec.com',
      // 'images.unsplash.com',
    ],

    // Tamanhos de imagem otimizados
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache de imagens
    minimumCacheTTL: 60,

    // Lazy loading por padrão
    unoptimized: false,
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
};

export default nextConfig;
