// Cases data for Kabbatec Landing Page
export interface CaseData {
  id: string;
  title: string;
  client: string;
  description: string;
  quote?: string;
  result?: string;
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
  category?: string;
  gallery?: string[]; // Additional images for lightbox
}

// Placeholder data for initial implementation
export const casesData: CaseData[] = [
  {
    id: 'elite-core',
    title: 'Elite Core',
    client: 'Elite Core',
    description: 'Quando conhecemos a visão da Elite Core, entendemos: isso não é sobre construir uma academia. É sobre estabelecer o novo padrão de Vila Olímpia. Cada centímetro curado. Cada material questionado. Cada detalhe elevado.',
    quote: 'Não queria ser mais uma. Hoje é a única.',
    result: 'Referência absoluta. Ponto.',
    image: {
      src: '/cases/elite-core.jpg',
      alt: 'Elite Core - Portfólio Kabbatec',
      // fallback de banco gratuito
      placeholder: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80'
    },
    metrics: {
      area: '600m²',
      duration: '70 dias',
      status: 'completed'
    },
    tags: ['Premium', 'Equipamentos', 'Fitness'],
    category: 'Referência',
    gallery: [
      '/cases/elite-core.jpg',
      '/cases/elite-core-1.jpg',
      '/cases/elite-core-2.jpg',
      '/cases/elite-core-3.jpg',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1583454110551-21f2fa02d14b?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'first-move',
    title: 'First Move',
    client: 'First Move',
    description: 'First Move tinha uma obsessão: criar algo que fizesse profissionais de alta performance pararem e pensarem “finalmente”. Não explicamos como fazer. Nós fizemos.',
    quote: 'Reinventou o conceito antes mesmo de abrir.',
    result: 'Vila Olímpia já considera o padrão.',
    image: {
      src: '/cases/first-move.jpg',
      alt: 'First Move - Portfólio Kabbatec',
      placeholder: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80'
    },
    metrics: {
      area: '450m²',
      duration: '65 dias',
      status: 'completed'
    },
    tags: ['Moderno', 'Funcional', 'Personalizado'],
    category: 'Reinvenção',
    gallery: [
      '/cases/first-move.jpg',
      '/cases/first-move-1.jpg',
      '/cases/first-move-2.jpg',
      'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'two-ases',
    title: 'Two Ases',
    client: 'Two Ases',
    description: 'Densidade premium não se explica, se sente. Two Ases precisava que cada detalhe justificasse o preço. E cada detalhe justifica.',
    quote: 'Nove alunos por horário. Moema entendeu.',
    result: 'Concorrentes mandam equipes para “entender como”.',
    image: {
      src: '/cases/two-ases.jpg',
      alt: 'Two Ases - Portfólio Kabbatec',
      placeholder: 'https://images.unsplash.com/photo-1571907480495-3b21f2b6b18f?auto=format&fit=crop&w=1600&q=80'
    },
    metrics: {
      area: '800m²',
      duration: '75 dias',
      status: 'completed'
    },
    tags: ['Rede', 'Premium', 'Identidade'],
    category: 'Densidade Premium',
    gallery: [
      '/cases/two-ases.jpg',
      '/cases/two-ases-1.jpg',
      '/cases/two-ases-2.jpg',
      '/cases/two-ases-3.jpg',
      '/cases/two-ases-4.jpg',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80'
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
