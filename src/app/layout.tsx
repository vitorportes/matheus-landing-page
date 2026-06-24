import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Cassiano | Advocacia e Consultoria Jurídica",
  description: "Segurança Jurídica e Defesa do Trabalhador. Especialista em Direito Trabalhista, Previdenciário e Consultoria para Sindicatos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${lora.variable} overflow-x-hidden w-full`}>
      <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
