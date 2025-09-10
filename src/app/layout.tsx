import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { GoogleAnalytics, FacebookPixel } from "@/components/analytics/GoogleAnalytics";
import { ErrorBoundary } from "@/components/monitoring/ErrorBoundary";
import { FeatureFlagsProvider } from "@/lib/feature-flags/FeatureFlags";
import { SchemaHead } from "@/components/seo/SchemaHead";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kabbatec - Academias Personalizadas SP",
  description: "A diferença entre sua academia personalizada virar realidade e ser destruída por adaptações genéricas. Especialistas em projetos premium para academias em São Paulo.",
  keywords: "academia personalizada, projeto academia, arquitetura academia, consultoria academia, São Paulo",
  authors: [{ name: "Kabbatec" }],
  creator: "Kabbatec",
  publisher: "Kabbatec",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kabbatec.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kabbatec - Academia Personalizada Sem Dor de Cabeça",
    description: "Especialistas em projetos premium para academias em São Paulo. Fidelidade ao projeto, início imediato, zero retrabalho.",
    url: "https://kabbatec.com",
    siteName: "Kabbatec",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kabbatec - Especialistas em Academias Personalizadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabbatec - Academia Personalizada Sem Dor de Cabeça",
    description: "Especialistas em projetos premium para academias em São Paulo.",
    creator: "@kabbatec",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <SchemaHead />
      </head>
      <body className="font-sans">
        <ErrorBoundary>
          <FeatureFlagsProvider>
            {children}
            <Suspense fallback={null}>
              <GoogleAnalytics />
            </Suspense>
            <Suspense fallback={null}>
              <FacebookPixel />
            </Suspense>
          </FeatureFlagsProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
