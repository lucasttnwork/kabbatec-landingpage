// Cases data for Kabbatec Landing Page
export interface CaseData {
  id: string;
  title: string;
  client: string;
  description: string;
  image: {
    src: string;
    alt: string;
    placeholder?: string;
  };
  metrics: {
    area: string;
    duration: string;
    status: 'completed' | 'ongoing' | 'upcoming';
  };
  tags: string[];
  gallery?: string[]; // Additional images for lightbox
}

// Placeholder data for initial implementation
export const casesData: CaseData[] = [
  {
    id: 'elite-core',
    title: 'Elite Core Academy',
    client: 'Elite Core',
    description: 'Academia premium executada com acabamento de alto padrão, equipamentos especializados e layout otimizado para experiência fitness completa.',
    image: {
      src: '/cases/elite-core.jpg',
      alt: 'Elite Core Academy - Academia premium executada pela Kabbatec'
    },
    metrics: {
      area: '600m²',
      duration: '70 dias',
      status: 'completed'
    },
    tags: ['Premium', 'Equipamentos', 'Fitness'],
    gallery: [
      '/cases/elite-core-1.jpg',
      '/cases/elite-core-2.jpg',
      '/cases/elite-core-3.jpg'
    ]
  },
  {
    id: 'first-move',
    title: 'First Move Studio',
    client: 'First Move',
    description: 'Estúdio moderno com conceito inovador de treinamento funcional, executado com materiais premium e design arquitetônico personalizado.',
    image: {
      src: '/cases/first-move.jpg',
      alt: 'First Move Studio - Estúdio moderno executado pela Kabbatec'
    },
    metrics: {
      area: '450m²',
      duration: '65 dias',
      status: 'completed'
    },
    tags: ['Moderno', 'Funcional', 'Personalizado'],
    gallery: [
      '/cases/first-move-1.jpg',
      '/cases/first-move-2.jpg'
    ]
  },
  {
    id: 'two-ases',
    title: 'Two Ases Fitness',
    client: 'Two Ases',
    description: 'Rede de academias premium com identidade visual forte, executadas com padrão de qualidade excepcional e atenção aos detalhes.',
    image: {
      src: '/cases/two-ases.jpg',
      alt: 'Two Ases Fitness - Rede premium executada pela Kabbatec'
    },
    metrics: {
      area: '800m²',
      duration: '75 dias',
      status: 'completed'
    },
    tags: ['Rede', 'Premium', 'Identidade'],
    gallery: [
      '/cases/two-ases-1.jpg',
      '/cases/two-ases-2.jpg',
      '/cases/two-ases-3.jpg',
      '/cases/two-ases-4.jpg'
    ]
  }
];

// Utility functions for case management
export const getCaseById = (id: string): CaseData | undefined => {
  return casesData.find(caseItem => caseItem.id === id);
};

export const getCasesByStatus = (status: CaseData['metrics']['status']): CaseData[] => {
  return casesData.filter(caseItem => caseItem.metrics.status === status);
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  casesData.forEach(caseItem => {
    caseItem.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};
