import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srankmedialab.nl"),

  title: {
    default: "Srank Media Lab | Cinematic FPV & Drone Filmmaking",
    template: "%s | Srank Media Lab",
  },

  description:
    "Srank Media Lab creates cinematic FPV drone videos, commercial visuals, social media content, and dynamic storytelling for brands, events, and creative campaigns.",

  keywords: [
    "Srank Media Lab",
    "FPV drone",
    "cinematic FPV",
    "drone filmmaking",
    "drone videography",
    "FPV pilot",
    "commercial drone content",
    "social media content creator",
    "cinematic drone video",
    "drone cinematography",
    "Netherlands drone filmmaker",
    "brand collaborations",
    "product video",
    "event coverage",
    "FPV filming",
  ],

  authors: [{ name: "Srank Media Lab" }],
  creator: "Srank Media Lab",
  publisher: "Srank Media Lab",

  alternates: {
    canonical: "https://srankmedialab.nl",
  },

  openGraph: {
    title: "Srank Media Lab | Cinematic FPV & Drone Filmmaking",
    description:
      "Cinematic FPV visuals, drone storytelling, and modern content creation for brands, events, and campaigns.",
    url: "https://srankmedialab.nl",
    siteName: "Srank Media Lab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Srank Media Lab cinematic FPV and drone filmmaking",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Srank Media Lab | Cinematic FPV & Drone Filmmaking",
    description:
      "Cinematic FPV visuals, drone storytelling, and modern content creation for brands, events, and campaigns.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Srank Media Lab",
    url: "https://srankmedialab.nl",
    logo: "https://srankmedialab.nl/favicon.ico",
    sameAs: [
      "https://instagram.com/",
      "https://tiktok.com/",
      "https://youtube.com/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@srankmedialab.nl",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}