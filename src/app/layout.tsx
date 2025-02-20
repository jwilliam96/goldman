import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOLDMAN GROUP",
  description: "Te ayudamos a mejorar tus ingresos por medio de nuestra asesoría de inversion con muestra criptomonedas Goldman",
  keywords: ["goldman", "goldman group", "criptomoneda goldman", "criptomonedas"],
  openGraph: {
    title: "Goldman Group",
    description: "Te ayudamos a mejorar tus ingresos por medio de nuestra asesoría de inversion",
    url: "https://www.goldman-mu.shop",
    images: "/image/plansFs.png"
  },
  other: {
    "google-site-verification": "gh6bQOqso5stOcanP6ZzbYHOgPgseNGx0OVUS2mV08k",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
