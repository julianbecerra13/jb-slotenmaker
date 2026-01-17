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
  metadataBase: new URL("https://jbslotenmaker.nl"),
  title: {
    default: "JB Slotenmaker | Noodslotenmaker 24/7 Almere",
    template: "%s | JB Slotenmaker",
  },
  description:
    "Professionele slotenmaker in Almere. 24/7 beschikbaar voor noodgevallen. Deur openen, sloten vervangen, sleutels bijmaken. Bel nu: 06 29 19 46 73",
  keywords: [
    "slotenmaker",
    "noodslotenmaker",
    "Almere",
    "24 uur service",
    "deur openen",
    "slot vervangen",
    "sleutel bijmaken",
    "locksmith",
    "noodsloten",
  ],
  authors: [{ name: "JB Slotenmaker" }],
  creator: "JB Slotenmaker",
  publisher: "JB Slotenmaker",
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
    url: "https://jbslotenmaker.nl",
    siteName: "JB Slotenmaker",
    title: "JB Slotenmaker | Noodslotenmaker 24/7 Almere",
    description:
      "Professionele slotenmaker in Almere. 24/7 beschikbaar voor noodgevallen.",
    images: [
      {
        url: "/logo-jb.jpeg",
        width: 800,
        height: 800,
        alt: "JB Slotenmaker Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Slotenmaker | Noodslotenmaker 24/7 Almere",
    description:
      "Professionele slotenmaker in Almere. 24/7 beschikbaar voor noodgevallen.",
    images: ["/logo-jb.jpeg"],
  },
  alternates: {
    canonical: "https://jbslotenmaker.nl",
  },
  verification: {
    google: "google-site-verification-code",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "JB Slotenmaker",
              image: "/logo-jb.jpeg",
              telephone: "+31629194673",
              email: "info@jbslotenmaker.nl",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Almere",
                addressCountry: "NL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.3508,
                longitude: 5.2647,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "€€",
              areaServed: "Almere en omgeving",
              serviceType: [
                "Slotenmaker",
                "Noodslotenmaker",
                "Deur openen",
                "Slot vervangen",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
