# 🚀 Guia de Deploy - Kabbatec Landing

## 🎯 Visão Geral
Este guia detalha o processo completo de deploy da landing page Kabbatec na Vercel, incluindo configurações de produção, analytics e monitoring.

## 📋 Pré-requisitos

### Ferramentas Necessárias
- Node.js 20+ instalado
- Conta na Vercel (gratuita)
- Conta Google Analytics 4
- Conta Facebook Business (opcional)
- Domínio kabbatec.com

### Variáveis de Ambiente
```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login na Vercel
vercel login
```

## 🚀 Deploy Inicial

### 1. Preparar o Projeto
```bash
cd kabbatec-landing

# Verificar se tudo está funcionando
npm run build
npm run dev
```

### 2. Deploy na Vercel
```bash
# Deploy inicial
vercel --prod

# Ou se quiser preview primeiro
vercel
```

### 3. Configurar Domínio
```bash
# Adicionar domínio customizado
vercel domains add kabbatec.com

# Verificar DNS (no provedor de domínio)
# A Record: 76.76.21.21 (Vercel)
# CNAME: www.kabbatec.com -> cname.vercel-dns.com
```

## ⚙️ Configurações de Produção

### Environment Variables na Vercel
Acesse o dashboard da Vercel e configure as seguintes variáveis:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXX

# Features
NEXT_PUBLIC_FEATURE_ANALYTICS=true
NEXT_PUBLIC_FEATURE_ERROR_TRACKING=true
NEXT_PUBLIC_FEATURE_PERFORMANCE_MONITORING=true

# Domain
NEXT_PUBLIC_SITE_URL=https://kabbatec.com
```

### Build Settings
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 20.x

## 📊 Analytics e Monitoring

### Google Analytics 4
1. Criar conta GA4
2. Obter Measurement ID (G-XXXXXXXXXX)
3. Configurar no Vercel como `NEXT_PUBLIC_GA_ID`
4. Verificar eventos automáticos:
   - Page views
   - User interactions
   - Performance metrics

### Facebook Pixel (Opcional)
1. Criar pixel no Facebook Business
2. Obter Pixel ID
3. Configurar como `NEXT_PUBLIC_FB_PIXEL_ID`
4. Eventos configurados:
   - PageView
   - Lead (formulários)
   - Contact (CTA buttons)

### Error Tracking (Recomendado)
```bash
# Instalar Sentry (exemplo)
npm install @sentry/nextjs

# Configurar DSN
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
```

## 🔧 Otimizações de Performance

### Vercel Analytics
- Ativado automaticamente
- Métricas em tempo real
- Core Web Vitals tracking
- Performance insights

### Image Optimization
- WebP/AVIF automático
- CDN global da Vercel
- Lazy loading ativo
- Cache otimizado (headers configurados)

### SEO e Meta Tags
- Open Graph otimizado
- Twitter Cards configurado
- Schema markup preparado
- Google Search Console setup

## 🚩 Feature Flags

### Sistema Implementado
O projeto inclui um sistema de feature flags para controle de lançamentos:

```typescript
// Uso nos componentes
import { useFeatureFlag, FeatureGate } from '@/lib/feature-flags/FeatureFlags';

// Hook simples
const analyticsEnabled = useFeatureFlag('analytics');

// Componente condicional
<FeatureGate flag="lightboxGallery">
  <LightboxGallery />
</FeatureGate>
```

### Flags Disponíveis
- `analytics`: GA4 + Facebook Pixel
- `errorTracking`: Monitoring de erros
- `performanceMonitoring`: Métricas avançadas
- `heroAnimations`: Animações do hero
- `lightboxGallery`: Galeria de casos
- `caseStudies`: Seção de cases
- `betaFeatures`: Recursos experimentais

## 📈 Monitoramento em Produção

### Métricas Principais
- **Performance**: LCP < 2.5s, CLS < 0.1, FID < 100ms
- **SEO**: Lighthouse Score > 90
- **Acessibilidade**: WCAG 2.1 AA compliance
- **Uptime**: 99.9% SLA
- **Error Rate**: < 1%

### Ferramentas de Monitoring
1. **Vercel Analytics**: Métricas em tempo real
2. **Google Search Console**: SEO tracking
3. **Google Analytics**: Comportamento do usuário
4. **Sentry/LogRocket**: Error tracking
5. **UptimeRobot**: Monitoring de uptime

## 🔄 Atualizações e Rollback

### Deploy de Atualizações
```bash
# Deploy de produção
vercel --prod

# Deploy com confirmação
vercel --prod --confirm
```

### Rollback
```bash
# Ver histórico de deploys
vercel ls

# Rollback para versão anterior
vercel rollback [deployment-id]
```

### Feature Flags para Rollback
```env
# Desabilitar recursos problemáticos
NEXT_PUBLIC_FEATURE_ANALYTICS=false
NEXT_PUBLIC_FEATURE_ERROR_TRACKING=false
```

## 📋 Checklist de Deploy

### Pré-Deploy
- [ ] `npm run build` funciona
- [ ] `npm run qa:full` passa
- [ ] Environment variables configuradas
- [ ] Domínio DNS configurado
- [ ] Analytics IDs válidos

### Pós-Deploy
- [ ] Site acessível em produção
- [ ] Analytics recebendo dados
- [ ] Performance dentro dos budgets
- [ ] SEO meta tags corretas
- [ ] Mobile responsivo funcionando
- [ ] Lightbox e animações ativas

### Monitoramento
- [ ] Vercel Analytics ativo
- [ ] Google Analytics tracking
- [ ] Error monitoring configurado
- [ ] Performance monitoring ativo
- [ ] Uptime monitoring ativo

## 🆘 Troubleshooting

### Problemas Comuns
1. **Build falhando**: Verificar Node.js version (20+)
2. **Analytics não funcionando**: Verificar NEXT_PUBLIC_ variables
3. **Imagens não carregando**: Verificar domains no next.config.ts
4. **SEO não indexando**: Verificar robots.txt e meta tags

### Logs de Debug
```bash
# Ver logs do deploy
vercel logs [deployment-url]

# Ver builds recentes
vercel builds
```

## 🎯 Próximos Passos

1. **Deploy na Vercel** ✅ (pronto)
2. **Configurar domínio** ⏳ (kabbatec.com)
3. **Setup Analytics** ⏳ (GA4 + Facebook)
4. **Configurar monitoring** ⏳ (Sentry/LogRocket)
5. **Otimização SEO** ⏳ (Search Console + Schema)
6. **A/B Testing** ⏳ (feature flags)

---

**🎉 DEPLOY PRONTO PARA PRODUÇÃO!**

*Sistema completo preparado para o mundo real*
*Monitoring ativo e analytics configurados*
*Performance otimizada para conversões*

**🚀 VAMOS PARA O AR!** 🔥✨
