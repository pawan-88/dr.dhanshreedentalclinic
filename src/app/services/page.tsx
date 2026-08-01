import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import { servicePages } from "@/lib/service-pages";
import { phoneDisplay, phoneNumber, siteUrl, whatsappUrl } from "@/lib/site-data";

const pageUrl = `${siteUrl}/services`;

export const metadata: Metadata = {
  title: "Dental Treatments in Lohegaon, Pune – All Services",
  description:
    "All dental treatments at Dr. Dhanshree's Dental Clinic, Lohegaon, Pune: dental implants, painless root canal, braces & clear aligners, teeth whitening and smile design. Open 10 AM–9 PM daily.",
  keywords: [
    "dental treatments Lohegaon",
    "dental services Pune",
    "dentist services near me Lohegaon",
    "dental clinic treatments list Pune",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Dental Treatments in Lohegaon, Pune | Dr. Dhanshree's Dental Clinic",
    description:
      "Dental implants, root canal, braces & aligners, whitening and smile design in Lohegaon, Pune.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Dental Treatments in Lohegaon, Pune | Dr. Dhanshree's Dental Clinic",
      description:
        "Every treatment offered at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune, with a dedicated guide for each.",
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
        { "@type": "ListItem", position: 2, name: "Treatments", item: pageUrl },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#treatments`,
      name: "Dental treatments at Dr. Dhanshree's Dental Clinic",
      itemListElement: servicePages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.navLabel,
        url: `${siteUrl}/${page.slug}`,
      })),
    },
  ],
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageShell activePath="/services">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Treatments</span>
        </nav>

        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">Lohegaon, Pune · Open 10 AM – 9 PM</span>
            <h1>Dental Treatments in Lohegaon, Pune</h1>
            <p className="service-intro">
              Every treatment at Dr. Dhanshree&apos;s Dental Clinic starts the
              same way: an examination, an honest explanation of your options,
              and a written cost estimate before anything begins. Each guide
              below explains what the treatment involves, what it can and
              cannot do, and answers the questions patients ask us most.
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

        <section className="service-related">
          <h2>Choose a treatment guide</h2>
          <div className="related-grid">
            {servicePages.map((page) => (
              <Link className="related-card" key={page.slug} href={`/${page.slug}`}>
                <strong>{page.navLabel}</strong>
                <span>{page.metaTitle}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </section>

        <section className="service-cta">
          <h2>Not sure which treatment you need?</h2>
          <p>
            That is normal — most patients arrive with a symptom, not a
            diagnosis. Message us on WhatsApp describing what is bothering you,
            and we will tell you what an examination is likely to involve and
            book you a slot, often the same day.
          </p>
          <div className="hero-actions">
            <a className="magnetic-btn primary" href={whatsappUrl()}>
              WhatsApp Now
              <MessageCircle size={18} />
            </a>
          </div>
        </section>
      </PageShell>
    </>
  );
}
