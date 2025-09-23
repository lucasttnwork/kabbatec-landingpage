/**
 * DESIGN SYSTEM - KABBATEC LANDING PAGE
 * Alinhado com tokens de Tailwind e globals.css
 */

// CORES PRINCIPAIS - usando novos brand/accent
export const colors = {
  // Backgrounds
  primary: 'bg-brand-base', // hsl(var(--background))
  secondary: 'bg-white/5',
  tertiary: 'bg-white/8',

  // Textos
  text: {
    primary: 'text-foreground',
    secondary: 'text-white/90',
    tertiary: 'text-white/70',
    quaternary: 'text-white/50',
    muted: 'text-white/30',
  },

  // Bordas
  border: {
    subtle: 'border-white/10',
    light: 'border-white/15',
    medium: 'border-white/20',
    strong: 'border-white/25',
  },

  // Gradientes
  gradient: {
    subtle: 'from-white/15 to-white/8',
    medium: 'from-white/20 to-white/10',
    strong: 'from-white/30 to-white/15',
  },

  // Acento dourado
  accent: {
    goldText: 'text-accent-primary',
    goldBorder: 'border-accent-primary/25',
    goldBgSubtle: 'bg-accent-primary/10',
  },
} as const;

// TIPOGRAFIA - consistente
export const typography = {
  fontFamily: 'font-sans', // var(--font-sans) Inter
  fontFamilySerif: 'font-serif', // Playfair

  // Tamanhos - usar custom se necessário
  sizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
  },

  weights: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extralight: 'font-extralight',
  },

  spacing: {
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
  },
} as const;

// ESPAÇAMENTOS - usando new Tailwind spacing
export const spacing = {
  // Verticais - map to new scale
  sections: {
    sm: 'py-xs sm:py-sm', // 0.75rem / 1rem
    md: 'py-sm sm:py-md', // 1rem / 1.5rem
    lg: 'py-md sm:py-lg', // 1.5rem / 2.5rem
    xl: 'py-lg sm:py-xl', // 2.5rem / 3.5rem
  },

  // Horizontais
  containers: {
    sm: 'px-xs',
    md: 'px-sm',
    lg: 'px-md',
    xl: 'px-lg',
  },

  // Entre elementos
  elements: {
    tight: 'space-y-xs',
    normal: 'space-y-sm',
    relaxed: 'space-y-md',
    loose: 'space-y-lg',
  },
} as const;

// EFEITOS VISUAIS - add motion
export const effects = {
  // Backdrop blur existing
  blur: {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  },

  // Sombras existing
  shadows: {
    inner: {
      subtle: 'shadow-[inset_0_0_15px_rgba(255,255,255,0.08)]',
      medium: 'shadow-[inset_0_0_20px_rgba(255,255,255,0.12)]',
      strong: 'shadow-[inset_0_0_40px_rgba(255,255,255,0.03)]',
    },
    outer: {
      subtle: 'shadow-[0_0_15px_rgba(255,255,255,0.08)]',
      medium: 'shadow-[0_0_20px_rgba(255,255,255,0.15)]',
      strong: 'shadow-[0_0_30px_rgba(255,255,255,0.06)]',
    },
    hover: {
      subtle: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]',
      medium: 'hover:shadow-[0_0_32px_rgba(255,255,255,0.5)]',
      strong: 'hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]',
    },
  },

  // Hover effects
  hover: {
    lift: 'hover:duration-200 hover:ease-premium hover:translate-y-[-2px] hover:scale-[1.02]',
    glow: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]',
    border: 'hover:border-white/25 hover:bg-white/8',
  },

  // Transições usando new durations
  transitions: {
    fast: 'transition-all duration-[var(--motion-duration-fast)] ease-in-out',
    normal: 'transition-all duration-[var(--motion-duration-normal)] ease-in-out',
    slow: 'transition-all duration-[var(--motion-duration-slow)] ease-in-out',
  },
} as const;

// LAYOUTS, COMPONENTS, SECTIONDEFAULTS - update to use new spacing/colors
export const layouts = {
  // Container
  container: 'container mx-auto max-w-7xl px-lg', // using lg spacing

  // Grid responsivo
  grid: {
    '1col': 'grid grid-cols-1',
    '2col': 'lg:grid lg:grid-cols-2 lg:items-center lg:gap-16',
    '3col': 'lg:grid lg:grid-cols-3 lg:gap-8',
  },

  // Flex layouts
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-center justify-start',
  },
} as const;

export const components = {
  // Badge
  badge: `${colors.secondary} ${colors.border.light} ${effects.blur.sm} ${effects.shadows.inner.subtle} px-5 py-2.5`,

  // Card
  card: `${colors.secondary} ${colors.border.subtle} ${effects.shadows.outer.subtle} ${effects.blur.sm} ${effects.transitions.fast}`,

  // Button
  button: {
    primary: `bg-accent-primary text-background ${effects.transitions.normal} ${typography.weights.semibold}`,
    secondary: `${colors.border.medium} ${colors.text.tertiary} hover:bg-white/3 hover:border-white/30 ${effects.hover.lift} ${effects.shadows.hover.subtle}`,
  },

  // Trust indicator
  trustIndicator: `${colors.secondary} ${colors.border.light} ${effects.shadows.inner.medium} ${typography.weights.light} ${typography.spacing.wide} ${effects.hover.border} ${effects.transitions.fast}`,
} as const;

export const sectionDefaults = {
  // Seção padrão
  section: `${spacing.sections.lg} ${spacing.containers.md}`, // using new

  // Título de seção (serif para headlines)
  sectionTitle: `text-4xl font-light font-serif tracking-wide text-foreground`,

  // Subtítulo de seção
  sectionSubtitle: `${typography.sizes.lg} ${typography.weights.normal} ${typography.fontFamily} ${colors.text.tertiary}`,

  // Texto de seção
  sectionText: `${typography.sizes.base} ${typography.weights.normal} ${typography.fontFamily} ${colors.text.secondary} leading-relaxed`,

  // Lista de seção
  sectionList: `${typography.sizes.base} ${typography.weights.normal} ${typography.fontFamily} ${colors.text.secondary} leading-relaxed space-y-2`,
} as const;

// EXPORTAÇÃO DO DESIGN SYSTEM COMPLETO
export const designSystem = {
  colors,
  typography,
  spacing,
  effects,
  layouts,
  components,
  sectionDefaults,
} as const;

export default designSystem;
