import type React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./ScrollToTop";
import Chatbot from "@/components/chatbot";
// import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Tandem Servicios - Tu Socio Estratégico en Transporte Corporativo",
  description:
    "Servicios profesionales de transporte para empresas. Traslado de personal, transporte ejecutivo, shuttle, logística corporativa y alquiler de vehículos. Cobertura nacional.",
  keywords:
    "transporte corporativo, transporte ejecutivo, shuttle empresarial, logística de viajes, traslado de personal, alquiler de buses, servicios empresariales",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Tandem Servicios - Transporte Profesional",
    description:
      "Soluciones completas de transporte y logística para tu negocio",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased overflow-x-hidden`}
        data-radix-scroll-lock-disabled
      >
        <ScrollToTop />
        {children}
        {/* <Analytics /> */}
        <Chatbot />
      </body>
    </html>
  );
}
