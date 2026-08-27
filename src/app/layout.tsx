import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/layout/Cursor";

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

const BASE_URL = "https://portfolio-alpha-lyart-95.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gabriel González — Product Developer",
    template: "%s · Gabriel González",
  },
  description:
    "Construyo productos con IA. Vibe coder full-stack — de la idea al deploy en producción, con clientes reales.",
  keywords: ["vibe coding", "AI builder", "full-stack", "Next.js", "Supabase", "Córdoba Argentina"],
  authors: [{ name: "Gabriel González", url: BASE_URL }],
  creator: "Gabriel González",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Gabriel González",
    title: "Gabriel González — Product Developer",
    description: "Construyo productos con IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel González — Product Developer",
    description: "Construyo productos con IA.",
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
        {children}
        <Cursor />
      </body>
    </html>
  );
}
