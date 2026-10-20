import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B192C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hellasworkforce.gr"),
  title: {
    default: "HellasWorkforce Solutions | Μετάκληση Εργαζομένων από Τρίτες Χώρες",
    template: "%s | HellasWorkforce Solutions",
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
  authors: [{ name: "HellasWorkforce Solutions" }],
  creator: "HellasWorkforce Solutions",
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: ["en_US"],
    url: "https://hellasworkforce.gr",
    title: "HellasWorkforce Solutions | Μετάκληση Εργαζομένων από Τρίτες Χώρες",
    description:
      "Αξιόπιστο & ελεγμένο προσωπικό από τρίτες χώρες για ελληνικές επιχειρήσεις. Πλήρης συμμόρφωση με τον Κώδικα Μετανάστευσης (Ν. 5038/2023).",
    siteName: "HellasWorkforce Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "HellasWorkforce Solutions | Μετάκληση Εργαζομένων",
    description: "Νόμιμη μετάκληση εργατικού δυναμικού για Τουρισμό, Γεωργία, Κατασκευές & Βιομηχανία στην Ελλάδα.",
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
    name: "HellasWorkforce Solutions",
    description:
      "Εξειδικευμένες υπηρεσίες νόμιμης μετάκλησης εργαζομένων από τρίτες χώρες (Ν. 5038/2023) για Τουρισμό, Αγροτικό Τομέα, Κατασκευές και Βιομηχανία.",
    url: "https://hellasworkforce.gr",
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
    <html lang="el" className={`${inter.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-slate-800 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
