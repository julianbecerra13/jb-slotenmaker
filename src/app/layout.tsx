import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jbslotenmaker.nl"),
  title: {
    default: "JB Slotenmaker Almere | 24/7 Noodslotenmaker | Bel 06 29 19 46 73",
    template: "%s | JB Slotenmaker Almere",
  },
  description:
    "Slotenmaker Almere 24/7 bereikbaar. Binnen 30 minuten ter plaatse. Deur openen vanaf €120. Slot vervangen, beveiliging. Geen voorrijkosten. Bel nu: 06 29 19 46 73",
  keywords: [
    "slotenmaker almere",
    "noodslotenmaker almere",
    "slotenmaker 24 uur almere",
    "deur openen almere",
    "slot vervangen almere",
    "buitengesloten almere",
    "slotenmaker flevoland",
    "locksmith almere",
    "slotenmaker almere buiten",
    "slotenmaker almere haven",
    "slotenmaker almere stad",
    "goedkope slotenmaker almere",
    "betrouwbare slotenmaker almere",
    "spoed slotenmaker almere",
  ],
  authors: [{ name: "JB Slotenmaker" }],
  creator: "JB Slotenmaker",
  publisher: "JB Slotenmaker",
  formatDetection: {
    telephone: true,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.jbslotenmaker.nl",
    siteName: "JB Slotenmaker Almere",
    title: "JB Slotenmaker Almere | 24/7 Noodslotenmaker",
    description:
      "Slotenmaker Almere 24/7 bereikbaar. Binnen 30 minuten ter plaatse. Deur openen vanaf €120. Geen voorrijkosten.",
    images: [
      {
        url: "/logo-jb.jpeg",
        width: 800,
        height: 800,
        alt: "JB Slotenmaker Almere - 24/7 Noodslotenmaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Slotenmaker Almere | 24/7 Noodslotenmaker",
    description:
      "Slotenmaker Almere 24/7 bereikbaar. Binnen 30 minuten ter plaatse. Bel: 06 29 19 46 73",
    images: ["/logo-jb.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "NL-FL",
    "geo.placename": "Almere",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.jbslotenmaker.nl/#business",
      name: "JB Slotenmaker",
      image: "https://www.jbslotenmaker.nl/logo-jb.jpeg",
      logo: "https://www.jbslotenmaker.nl/logo-jb.jpeg",
      telephone: "+31629194673",
      url: "https://www.jbslotenmaker.nl",
      priceRange: "€120 - €200",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Pin",
      areaServed: [
        { "@type": "City", name: "Almere" },
        { "@type": "City", name: "Almere Stad" },
        { "@type": "City", name: "Almere Buiten" },
        { "@type": "City", name: "Almere Haven" },
        { "@type": "City", name: "Almere Poort" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Slotenmaker Diensten",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Deur openen",
              description: "Professioneel deur openen zonder schade",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Slot vervangen",
              description: "SKG gecertificeerde sloten installeren",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Beveiliging",
              description: "Advies en installatie van beveiligingssystemen",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "89",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.jbslotenmaker.nl/#website",
      url: "https://www.jbslotenmaker.nl",
      name: "JB Slotenmaker Almere",
      description: "24/7 Noodslotenmaker in Almere",
      inLanguage: "nl-NL",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/logo-jb.jpeg" />
        <link rel="apple-touch-icon" href="/logo-jb.jpeg" />
        <meta name="theme-color" content="#facc15" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
