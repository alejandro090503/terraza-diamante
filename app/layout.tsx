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
  title: "Salón de Fiestas Infantiles en Querétaro | Terraza Diamante",
  description:
    "Salón de fiestas infantiles en Querétaro con terraza techada, inflables y estacionamiento. Paquetes desde $5,200 MXN. Aparta tu fecha con solo $1,000.",
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
  "@type": ["EventVenue", "LocalBusiness"],
  name: "Terraza Diamante",
  description:
    "Salón de fiestas infantiles en Querétaro con terraza techada, inflables, mobiliario completo y estacionamiento. Ideal para cumpleaños infantiles, XV años, graduaciones y baby showers.",
  url: "https://terraza-diamante.vercel.app",
  telephone: "+52-442-111-8867",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Diamante 6",
    addressLocality: "Santiago de Querétaro",
    addressRegion: "Querétaro",
    postalCode: "76030",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.5888,
    longitude: -100.3899,
  },
  hasMap: "https://maps.google.com/?q=Calle+Diamante+6,+El+Tepetate,+Santiago+de+Queretaro,+Qro",
  image: "https://terraza-diamante.vercel.app/Logo.png",
  priceRange: "$$",
  currenciesAccepted: "MXN",
  paymentAccepted: "Cash, Bank Transfer",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "28",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paquetes Terraza Diamante",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Paquete Básico",
        price: "5200",
        priceCurrency: "MXN",
        description: "Terraza techada, mobiliario para 50 personas, 8 horas de evento, estacionamiento",
      },
      {
        "@type": "Offer",
        name: "Paquete Diamante",
        price: "5700",
        priceCurrency: "MXN",
        description: "Terraza techada, mobiliario para 80 personas, 8 horas de evento, estacionamiento",
      },
      {
        "@type": "Offer",
        name: "Paquete Premium",
        price: "6800",
        priceCurrency: "MXN",
        description: "Terraza techada, mobiliario para 100 personas, 8 horas de evento, inflable incluido, invitación digital",
      },
    ],
  },
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
    "https://www.facebook.com/TerrazaDiamante6/",
    "https://www.instagram.com/terraza.diamante/",
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
        text: "¡Sí! Puedes instalar toda tu decoración un día antes del evento y dejarla lista. Así el día de la fiesta llegas con todo listo para disfrutar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen equipo de sonido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No contamos con equipo de sonido propio. El cliente puede traer su propio equipo o contratar un servicio externo de DJ o sonido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo traer mi propio servicio de comida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "¡Claro que sí! Contamos con espacio disponible para servicios externos como taquizas, carnitas, bufet y más. Tú eliges el servicio de comida de tu preferencia.",
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
    {
      "@type": "Question",
      name: "¿Qué colores de cubremanteles tienen disponibles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tenemos una amplia variedad de colores en cubremanteles. Tú eliges el color que combine con tu evento, ¡incluso puedes combinar varios colores!",
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
