import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const BASE_URL = "https://portfolio-alpha-lyart-95.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gabriel Gonzalez — Builder",
    template: "%s · Gabriel Gonzalez",
  },
  description:
    "Construyo productos con IA. Full-stack developer especializado en vibe coding — de la idea al deploy en tiempo récord.",
  keywords: ["vibe coding", "AI builder", "full-stack", "Next.js", "Supabase", "Córdoba Argentina"],
  authors: [{ name: "Gabriel Gonzalez", url: BASE_URL }],
  creator: "Gabriel Gonzalez",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Gabriel Gonzalez",
    title: "Gabriel Gonzalez — Builder",
    description: "Construyo productos con IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Gonzalez — Builder",
    description: "Construyo productos con IA.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`
          ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}
          font-sans antialiased bg-[#080808] text-[#f2f2f2] min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
