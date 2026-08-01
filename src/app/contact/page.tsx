import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import {
  googleMapsEmbedUrl,
  googleReviewsUrl,
  phoneDisplay,
  phoneNumber,
  siteUrl,
  whatsappUrl,
} from "@/lib/site-data";

const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
  title: "Contact & Location – Dental Clinic in Lohegaon, Pune",
  description:
    "Contact Dr. Dhanshree's Dental Clinic, Lohegaon, Pune. Shop No. 2, Muktai Plaza, Wadgaon Shinde Road, opp. Eastern Royale Society. Open 10 AM–9 PM daily. Call +91 82751 72931 or book on WhatsApp.",
  keywords: [
    "dental clinic contact Lohegaon",
    "dentist phone number Lohegaon",
    "dental clinic address Wadgaon Shinde Road",
    "dentist near Eastern Royale Society",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Contact Dr. Dhanshree's Dental Clinic | Lohegaon, Pune",
    description:
      "Address, phone, WhatsApp booking and directions. Open 10 AM–9 PM every day.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Contact Dr. Dhanshree's Dental Clinic | Lohegaon, Pune",
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
        { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageShell activePath="/contact">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Contact</span>
        </nav>

        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">Lohegaon, Pune · Open 10 AM – 9 PM</span>
            <h1>Contact &amp; Location</h1>
            <p className="service-intro">
              The fastest way to reach us is WhatsApp — share your name, phone
              number, and what you need, and our team confirms a slot, often
              the same day. For dental pain, call us directly and we will fit
              you in as early as possible.
            </p>
            <div className="hero-actions">
              <a className="magnetic-btn primary" href={whatsappUrl()}>
                Book on WhatsApp
                <MessageCircle size={18} />
              </a>
              <a className="magnetic-btn ghost" href={`tel:${phoneNumber}`}>
                Call {phoneDisplay}
                <Phone size={18} />
              </a>
            </div>
          </div>
        </section>

        <article className="service-body">
          <section>
            <h2>Clinic address</h2>
            <p>
              <MapPin size={16} style={{ verticalAlign: "-2px", marginRight: 8 }} />
              Dr. Dhanshree&apos;s Dental Clinic, Shop No. 2, Muktai Plaza,
              Wadgaon Shinde Road, Opposite Eastern Royale Society, Pathare
              Wasti, Lohegaon, Pune, Maharashtra 411047.
            </p>
            <p>
              We serve patients from Lohegaon, Pathare Wasti, Dhanori,
              Vishrantwadi, and Viman Nagar. Parking is available near the
              clinic.
            </p>
          </section>
          <section>
            <h2>Hours &amp; contact details</h2>
            <p>
              <Clock size={16} style={{ verticalAlign: "-2px", marginRight: 8 }} />
              Open Monday to Sunday, 10:00 AM – 9:00 PM, including weekends and
              most holidays.
            </p>
            <p>
              Phone: <a href={`tel:${phoneNumber}`}>{phoneDisplay}</a>
              <br />
              Email:{" "}
              <a href="mailto:dr.dhanshreedentalclinic@gmail.com">
                dr.dhanshreedentalclinic@gmail.com
              </a>
            </p>
          </section>
        </article>

        <section className="service-faq">
          <h2>Find us on Google Maps</h2>
          <div className="reviews-map">
            <iframe
              title="Dr. Dhanshree's Dental Clinic location on Google Maps"
              src={googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="service-cta">
          <h2>Read what patients say first</h2>
          <p>
            We hold a 5.0 rating on Google from patients across Lohegaon and
            Pune. Read their reviews before you visit — then message us when
            you are ready.
          </p>
          <div className="hero-actions">
            <a
              className="magnetic-btn secondary"
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read Google Reviews
            </a>
          </div>
        </section>
      </PageShell>
    </>
  );
}
