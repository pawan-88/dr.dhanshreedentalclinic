import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import FaqAccordion from "@/components/faq-accordion";
import PageShell from "@/components/page-shell";
import {
  faqs,
  phoneDisplay,
  phoneNumber,
  siteUrl,
  whatsappUrl,
} from "@/lib/site-data";

const pageUrl = `${siteUrl}/faq`;

export const metadata: Metadata = {
  title: "Dental FAQs – Costs, Pain, Timings & Booking in Lohegaon",
  description:
    "Answers to the questions patients ask Dr. Dhanshree's Dental Clinic most: Is a root canal painful? What are the timings? How do I book? Do you treat children? Cost estimates before treatment.",
  keywords: [
    "dental FAQ Lohegaon",
    "root canal painful",
    "dentist timings Lohegaon",
    "dental treatment cost Pune",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Dental FAQs | Dr. Dhanshree's Dental Clinic, Lohegaon",
    description:
      "Root canal pain, booking, timings, children's dentistry and cost estimates — answered plainly.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Dental FAQs | Dr. Dhanshree's Dental Clinic, Lohegaon",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#clinic` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "FAQ", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      isPartOf: { "@id": `${pageUrl}/#webpage` },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageShell activePath="/faq">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>FAQ</span>
        </nav>

        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">Common Questions</span>
            <h1>Dental FAQs — Answered Plainly</h1>
            <p className="service-intro">
              The questions patients in Lohegaon ask us most, answered without
              jargon. Each treatment page also has its own detailed FAQ — for
              implants, root canal, braces, whitening, and smile design.
            </p>
          </div>
        </section>

        <section className="service-faq">
          <FaqAccordion faqs={faqs} />
        </section>

        <section className="service-cta">
          <h2>Have a question we haven&apos;t covered?</h2>
          <p>
            Message us on WhatsApp — a real person from the clinic replies,
            usually within the hour during opening times.
          </p>
          <div className="hero-actions">
            <a className="magnetic-btn primary" href={whatsappUrl()}>
              Ask on WhatsApp
              <MessageCircle size={18} />
            </a>
            <a className="magnetic-btn ghost" href={`tel:${phoneNumber}`}>
              Call {phoneDisplay}
              <Phone size={18} />
            </a>
          </div>
        </section>
      </PageShell>
    </>
  );
}
