
// Schema.org markup para SEO avançado
type SchemaOrgValue = string | number | boolean | null | Record<string, unknown> | SchemaOrgValue[];
type SchemaOrgObject = Record<string, SchemaOrgValue>;
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kabbatec",
    "alternateName": "Kabbatec - Academias Personalizadas",
    "description": "Especialistas em projetos premium para academias personalizadas em São Paulo. Fidelidade total ao projeto, início imediato, zero retrabalho.",
    "url": "https://kabbatec.com",
    "logo": "https://kabbatec.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/kabbatec",
      "https://www.facebook.com/kabbatec",
      "https://www.linkedin.com/company/kabbatec"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Example, 123",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01234-567",
      "addressCountry": "BR"
    },
    "foundingDate": "2024",
    "areaServed": {
      "@type": "City",
      "name": "São Paulo",
      "addressCountry": "BR"
    },
    "serviceType": "Consultoria e Projetos para Academias",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Arquitetura para Academias",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Projeto Arquitetônico Premium",
            "description": "Projeto completo de arquitetura para academias personalizadas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria Especializada",
            "description": "Consultoria especializada em projetos fitness"
          }
        }
      ]
    }
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kabbatec - Academias Personalizadas SP",
    "alternateName": "Kabbatec Fitness Architecture",
    "url": "https://kabbatec.com",
    "description": "A diferença entre sua academia personalizada virar realidade e ser destruída por adaptações genéricas. Especialistas em projetos premium para academias em São Paulo.",
    "publisher": {
      "@type": "Organization",
      "name": "Kabbatec"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kabbatec.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

export function generateCaseStudySchema(caseData: {
  name: string;
  description: string;
  image: string;
  url: string;
  clientName: string;
  projectSize: string;
  completionDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": caseData.name,
    "description": caseData.description,
    "image": caseData.image,
    "url": caseData.url,
    "creator": {
      "@type": "Organization",
      "name": "Kabbatec"
    },
    "about": {
      "@type": "Thing",
      "name": "Arquitetura para Academias"
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Academias e Studios Fitness"
    },
    "provider": {
      "@type": "Organization",
      "name": "Kabbatec"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Cliente",
        "value": caseData.clientName
      },
      {
        "@type": "PropertyValue",
        "name": "Tamanho do Projeto",
        "value": caseData.projectSize
      },
      {
        "@type": "PropertyValue",
        "name": "Data de Conclusão",
        "value": caseData.completionDate
      }
    ]
  };
}

// Componente React para renderizar schemas
interface SchemaMarkupProps {
  schema: SchemaOrgObject;
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}

// Hook para gerar todos os schemas da página
export function usePageSchemas() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://kabbatec.com" }
  ]);

  return {
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
  };
}
