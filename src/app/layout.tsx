import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SchemaHead } from "@/components/seo/SchemaHead";
import { Header } from "@/components/layout/header";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kabbatec - Academias Personalizadas SP",
  description: "Engenharia premium para academias personalizadas em São Paulo. Projeto fiel, início imediato e entrega em 70 dias sem retrabalho.",
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
        url: "/next.svg",
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
    images: ["/next.svg"],
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <title>Kabbatec — Academias Personalizadas SP</title>
        <meta name="description" content="Engenharia premium para academias personalizadas em São Paulo. Projeto fiel, início imediato e entrega em 70 dias sem retrabalho." />
        <SchemaHead />
      </head>
      <body className="font-sans overflow-x-visible bg-black text-white antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md">Pular para conteúdo principal</a>
        <Header />
        {children}
      </body>
    </html>
  );
}
