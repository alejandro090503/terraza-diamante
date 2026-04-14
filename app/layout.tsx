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
    "Salón de fiestas en Querétaro con terraza techada, inflables y decoración. Hasta 100 personas. Aparta tu fecha con $1,000. ¡Contáctanos por WhatsApp!",
  alternates: {
    canonical: "https://terraza-diamante.vercel.app/",
  },
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Terraza Diamante",
  description:
    "Salón de fiestas en Querétaro con terraza techada, inflables, mobiliario completo y decoración. Ideal para fiestas infantiles, XV años, graduaciones y más.",
  url: "https://terraza-diamante.vercel.app",
  telephone: "+52-442-111-8867",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago de Querétaro",
    addressRegion: "Querétaro",
    addressCountry: "MX",
  },
  image: "https://terraza-diamante.vercel.app/Logo.png",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "15:00",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "23:30",
    },
  ],
  sameAs: [
    "https://www.facebook.com/terrazadiamante",
    "https://www.instagram.com/terrazadiamante",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuáles son los horarios de la terraza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunes a Viernes de 3:00 PM a 11:30 PM. Sábados y Domingos de 7:00 AM a 11:30 PM. Cada evento tiene una duración de 8 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo decorar el día antes de mi evento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "¡Sí! Puedes instalar toda tu decoración un día antes del evento y dejarla lista.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo aparto mi fecha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con solo $1,000 de anticipo apartamos tu fecha. El saldo restante se liquida 15 días antes del evento. Para reservar, escríbenos por WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "¿Solo hacen eventos infantiles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Terraza Diamante es para todo tipo de celebraciones: cumpleaños infantiles y de adultos, XV años, reuniones familiares, graduaciones, baby showers y más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen inflable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, contamos con inflable. Viene incluido en el Paquete Premium y disponible como servicio adicional para otros paquetes.",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
