import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terraza-diamante.vercel.app"),
  title: "Terraza Diamante | Salón de Fiestas Infantiles en Querétaro",
  description:
    "El mejor salón para fiestas infantiles en Querétaro. Inflables, decoración y más. ¡Haz tu fiesta inolvidable!",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://terraza-diamante.vercel.app",
    siteName: "Terraza Diamante",
    title: "Terraza Diamante | Salón de Fiestas Infantiles en Querétaro",
    description:
      "El mejor salón para fiestas infantiles en Querétaro. Terraza techada, inflables, decoración y más.",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 800,
        alt: "Terraza Diamante - Salón de Fiestas Infantiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraza Diamante | Salón de Fiestas Infantiles en Querétaro",
    description:
      "El mejor salón para fiestas infantiles en Querétaro. Terraza techada, inflables, decoración y más.",
    images: ["/Logo.png"],
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
