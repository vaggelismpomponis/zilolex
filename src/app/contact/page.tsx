"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageBanner } from "@/components/PageBanner";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900 w-full antialiased">
      <Navbar />

      <main className="flex-1 w-full">
        <PageBanner
          tag={t.contact.tag}
          title={
            language === "el" ? (
              <>
                <span>Επικοινωνήστε </span>
                <span className="text-emerald-600">Μαζί μας</span>
              </>
            ) : (
              <>
                <span>Get in </span>
                <span className="text-emerald-600">Touch</span>
              </>
            )
          }
          subtitle={t.contact.subtitle}
          imageSrc="/images/hero-athens.jpg"
          imageAlt="Contact Zilolex Greece"
          objectPosition="object-[78%_22%] sm:object-[75%_28%] lg:object-right"
          primaryCta={{
            href: "#contact",
            text: language === "el" ? "Φόρμα Επικοινωνίας" : "Contact Form",
          }}
          secondaryCta={{
            href: `tel:${t.contact.directContact.phone.replace(/\s+/g, "")}`,
            text: t.contact.directContact.phone,
          }}
        />

        {/* Form and Contact Info */}
        <ContactFormSection />

        {/* FAQs */}
        <FaqSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
