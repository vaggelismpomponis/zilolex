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
  themeColor: "#34d399",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ZILOLEX.gr"),
  title: {
    default: "ZILOLEX | Μετάκληση Εργαζομένων από Τρίτες Χώρες",
    template: "%s | ZILOLEX",
  },
  description:
    "Ολοκληρωμένες υπηρεσίες νόμιμης μετάκλησης και στελέχωσης προσωπικού από τρίτες χώρες (Ν. 5038/2023). Κάλυψη αναγκών σε Τουρισμό, Αγροτικό Τομέα, Κατασκευές & Βιομηχανία.",
  keywords: [
    "μετάκληση εργαζομένων",
    "τρίτες χώρες",
    "εργάτες γης",
    "προσωπικό τουρισμού",
    "εργάτες κατασκευών",
    "βίζα εργασίας",
    "νόμος 5038 2023",
    "εύρεση προσωπικού ελλάδα",
    "workforce recruitment greece",
    "visa D greece",
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
    url: "https://ZILOLEX.gr",
    title: "ZILOLEX | Μετάκληση Εργαζομένων από Τρίτες Χώρες",
    description:
      "Αξιόπιστο & ελεγμένο προσωπικό από τρίτες χώρες για ελληνικές επιχειρήσεις. Πλήρης συμμόρφωση με τον Κώδικα Μετανάστευσης (Ν. 5038/2023).",
    siteName: "ZILOLEX",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZILOLEX - Μετάκληση Εργαζομένων",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZILOLEX | Μετάκληση Εργαζομένων",
    description: "Νόμιμη μετάκληση εργατικού δυναμικού για Τουρισμό, Γεωργία, Κατασκευές & Βιομηχανία στην Ελλάδα.",
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
      "Εξειδικευμένες υπηρεσίες νόμιμης μετάκλησης εργαζομένων από τρίτες χώρες (Ν. 5038/2023) για Τουρισμό, Αγροτικό Τομέα, Κατασκευές και Βιομηχανία.",
    url: "https://ZILOLEX.gr",
    telephone: "+30 210 0000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressCountry: "GR",
    },
    areaServed: "GR",
    serviceType: [
      "Μετάκληση Εργαζομένων Τρίτων Χωρών",
      "Εποχικοί Εργάτες Γης",
      "Προσωπικό Τουρισμού & Εστίασης",
      "Εργάτες Κατασκευών & Βιομηχανίας",
      "Διεκπεραίωση Visa D & ΟΠΣ Μετανάστευση",
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
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground antialiased selection:bg-slate-800 selection:text-white">
        <LanguageProvider>
          {children}
          <CookieConsent />
          <LegalModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
