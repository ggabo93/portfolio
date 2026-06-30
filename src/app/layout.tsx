import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
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
          ${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}
          font-sans antialiased bg-[#FAFAF8] text-[#1C1C1A] min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
