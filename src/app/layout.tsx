import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Gabriel González | Desarrollo de sistemas de gestión",
    template: "%s · Gabriel González",
  },
  description:
    "Desarrollo herramientas de gestión para gimnasios, financieras y distribuidoras. Procesos, cobros, clientes y reportes. Gabriel González, Córdoba, Argentina.",
  keywords: ["sistemas de gestión", "software a medida", "gestión de gimnasios", "desarrollo web", "automatización de procesos", "Córdoba Argentina"],
  authors: [{ name: "Gabriel González", url: BASE_URL }],
  creator: "Gabriel González",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Gabriel González",
    title: "Gabriel González | Sistemas de gestión",
    description: "Herramientas para gestionar mejor: clientes, cobros, inventario y reportes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel González | Sistemas de gestión",
    description: "Software para ordenar la operación de negocios reales.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`
          ${inter.variable} ${plexMono.variable}
          font-sans antialiased bg-[#0A0A0A] text-[#F5F5F3] min-h-screen
        `}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#6E9BFF] focus:text-black focus:p-4">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
