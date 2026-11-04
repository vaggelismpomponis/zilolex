import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CookieConsent } from "@/components/CookieConsent";
import { LegalModal } from "@/components/LegalModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin", "greek"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zilolex.gr"),
  title: {
    default: "ZILOLEX | Συνδέουμε Ανθρώπους, Ευκαιρίες & Τόπους",
    template: "%s | ZILOLEX",
  },
  description:
    "Συντονισμός αναζήτησης και επιλογής προσωπικού, μετάκλησης, μετακίνηση και διαμονή εργαζομένων από τρίτες χώρες στην Ελλάδα. Εστίαση σε Κατασκευές, Βιομηχανία και Τουρισμό.",
  keywords: [
    "μετάκληση εργαζομένων",
    "τρίτες χώρες",
    "στελέχωση επιχειρήσεων",
    "προσωπικό κατασκευών",
    "προσωπικό τουρισμού",
    "στέγαση εργαζομένων",
    "συντονισμός μετεγκατάστασης",
    "zilolex",
  ],
  authors: [{ name: "ZILOLEX" }],
  creator: "ZILOLEX",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: ["en_US"],
    url: "https://zilolex.gr",
    title: "ZILOLEX | Συνδέουμε Ανθρώπους, Ευκαιρίες & Τόπους",
    description:
      "Συντονισμός αναζήτησης και επιλογής προσωπικού, μετάκλησης, μετακίνησης και διαμονής εργαζομένων από τρίτες χώρες στην Ελλάδα.",
    siteName: "ZILOLEX",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZILOLEX - Συνδέουμε Ανθρώπους, Ευκαιρίες & Τόπους",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZILOLEX | Συνδέουμε Ανθρώπους, Ευκαιρίες & Τόπους",
    description: "Συντονισμός αναζήτησης και επιλογής προσωπικού, μετάκλησης, μετακίνησης και διαμονής εργαζομένων στην Ελλάδα.",
    images: ["/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "ZILOLEX",
    description:
      "Συντονισμός αναζήτησης και επιλογής προσωπικού, μετάκλησης, μετακίνησης και διαμονής εργαζομένων από τρίτες χώρες στην Ελλάδα.",
    url: "https://zilolex.gr",
    telephone: "+30 210 9400000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Λεωφ. Αμφιθέας 77",
      addressLocality: "Παλαιό Φάληρο, Αθήνα",
      postalCode: "17564",
      addressCountry: "GR",
    },
    areaServed: "GR",
    serviceType: [
      "Αναζήτηση & Επιλογή Προσωπικού",
      "Συντονισμός Μετάκλησης & Διαδικασιών",
      "Οργάνωση Μετακίνησης & Άφιξης",
      "Εξεύρεση & Διαχείριση Στέγασης Εργαζομένων",
    ],
  };

  return (
    <html lang="el" suppressHydrationWarning className={`${inter.variable} ${manrope.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-dvh bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-950">
        <LanguageProvider>
          {children}
          <CookieConsent />
          <LegalModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
