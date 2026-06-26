import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EVJF Île de Ré | Sortie en mer, Bateau, Huîtres & Expériences",
  description:
    "Organisez votre EVJF inoubliable en mer sur l'Île de Ré et La Rochelle. Croisières privées, dégustation d'huîtres, coucher de soleil en bateau, skippers professionnels. L'expérience EVJF nautique de luxe en Charente-Maritime.",
  keywords: [
    "EVJF île de ré",
    "enterrement de vie de jeune fille la rochelle",
    "EVJF bateau",
    "sortie en mer EVJF",
    "EVJF huîtres champagne",
    "croisière privée enterrement vie jeune fille",
    "EVJF charente-maritime",
    "skipper EVJF",
    "activité EVJF mer",
    "EVJF luxe atlantique",
  ],
  authors: [{ name: "La Dernière Escale" }],
  creator: "La Dernière Escale",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://evjfiledere.fr",
    siteName: "La Dernière Escale – EVJF Île de Ré",
    title: "EVJF Île de Ré | Sortie en mer, Bateau, Huîtres & Expériences",
    description:
      "Croisières privées, huîtres & champagne, coucher de soleil en mer. L'EVJF nautique de luxe sur l'Île de Ré et La Rochelle.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "EVJF en mer Île de Ré – La Dernière Escale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVJF Île de Ré | Sortie en mer, Bateau & Huîtres",
    description:
      "L'EVJF nautique de luxe sur l'Île de Ré et La Rochelle. Croisières privées, huîtres & champagne.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--cream)]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
