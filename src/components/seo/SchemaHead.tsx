'use client';

import { SchemaMarkup, usePageSchemas } from "@/lib/seo/SchemaMarkup";

export function SchemaHead() {
  const { organizationSchema, websiteSchema, breadcrumbSchema } = usePageSchemas();

  return (
    <>
      <SchemaMarkup schema={organizationSchema} />
      <SchemaMarkup schema={websiteSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
    </>
  );
}
