import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://q-indica.com"),
  title: {
    default: "Q-Indica | Recomendações inteligentes para farmácias",
    template: "%s | Q-Indica",
  },
  description:
    "Software SaaS para farmácias que recomenda produtos complementares em tempo real para aumentar ticket médio e faturamento.",
  keywords: [
    "Q-Indica",
    "SaaS para farmacias",
    "cross sell farmacia",
    "recomendacao de produtos",
    "aumento de ticket medio",
    "software para drogaria",
  ],
  openGraph: {
    title: "Q-Indica | Recomendações inteligentes para farmácias",
    description:
      "Transforme cada atendimento em uma oportunidade de faturamento com recomendações farmacêuticas inteligentes.",
    url: "https://q-indica.com",
    siteName: "Q-Indica",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q-Indica | Recomendações inteligentes para farmácias",
    description:
      "A plataforma que ajuda farmácias a vender mais com segurança e consistência.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
