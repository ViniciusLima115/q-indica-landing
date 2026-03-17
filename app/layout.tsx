import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["700", "800"],
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
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png" }],
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
        className={`${inter.variable} ${sora.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
