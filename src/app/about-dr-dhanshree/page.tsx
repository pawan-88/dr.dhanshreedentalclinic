import type { Metadata } from "next";
import { Check, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import {
  doctorHighlights,
  doctorName,
  phoneDisplay,
  phoneNumber,
  siteUrl,
  whatsappUrl,
} from "@/lib/site-data";

const pageUrl = `${siteUrl}/about-dr-dhanshree`;

export const metadata: Metadata = {
  title: "About Dr. Dhanshree Sanap (Ghuge) – Dentist in Lohegaon, Pune",
  description:
    "Meet Dr. Dhanshree Sanap (Ghuge), founder and chief dentist at Dr. Dhanshree's Dental Clinic, Lohegaon, Pune. 6+ years of experience in cosmetic, restorative and preventive dentistry with a comfort-first approach.",
  keywords: [
    "Dr Dhanshree Sanap dentist",
    "dentist Lohegaon Pune",
    "best dentist near me Lohegaon",
    "lady dentist Lohegaon",
  ],
  alternates: { canonical: "/about-dr-dhanshree" },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: `About ${doctorName} | Dentist in Lohegaon, Pune`,
    description:
      "Founder and chief dentist at Dr. Dhanshree's Dental Clinic, Lohegaon — cosmetic, restorative and preventive dentistry.",
    images: [{ url: "/images/Dr.ImgD.jpg", alt: doctorName }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: `About ${doctorName} | Dr. Dhanshree's Dental Clinic`,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#dentist` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      primaryImageOfPage: `${siteUrl}/images/Dr.ImgD.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "About Doctor", item: pageUrl },
      ],
    },
  ],
};

export default function AboutDoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageShell activePath="/about-dr-dhanshree">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>About Doctor</span>
        </nav>

        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">Founder &amp; Chief Dentist</span>
            <h1>About {doctorName}</h1>
            <p className="service-intro">
              {doctorName} founded Dr. Dhanshree&apos;s Dental Clinic in
              Lohegaon, Pune with a simple conviction: patients make good
              decisions when things are explained properly. Every treatment at
              the clinic — from a routine filling to a full smile design —
              starts with an examination and a clear conversation about
              options, timelines, and costs before anything begins.
            </p>
            <div className="hero-actions">
              <a className="magnetic-btn primary" href={whatsappUrl()}>
                Book a Consultation
                <MessageCircle size={18} />
              </a>
              <a className="magnetic-btn ghost" href={`tel:${phoneNumber}`}>
                Call {phoneDisplay}
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="service-hero-media">
            <img
              src="/images/Dr.ImgD.jpg"
              alt={`${doctorName}, Founder and Chief Dentist at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune`}
              width={960}
              height={1200}
              decoding="async"
            />
          </div>
        </section>

        <section className="service-highlights">
          {doctorHighlights.map((item) => (
            <div className="stat-card" key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <article className="service-body">
          <section>
            <h2>A comfort-first approach to dentistry</h2>
            <p>
              Dental anxiety is real, common, and nothing to be embarrassed
              about — a large share of our patients arrive nervous, often after
              years of postponing treatment. The clinic is built around that
              reality: every step is explained before it happens, anaesthesia
              is given time to work fully, and you can pause a procedure at any
              point simply by raising a hand. Most patients tell us afterwards
              that the anticipation was worse than the visit.
            </p>
          </section>
          <section>
            <h2>Areas of focus</h2>
            <p>
              Dr. Dhanshree practises across cosmetic, restorative, and
              preventive dentistry — root canal treatment, dental implants,
              braces and clear aligners, teeth whitening, and smile design.
              Rather than pushing the most expensive option, the clinic&apos;s
              approach is to lay out what each option costs, how long it lasts,
              and what she would choose in your position — then let you decide.
            </p>
          </section>
          <section>
            <h2>For families in and around Lohegaon</h2>
            <p>
              The clinic treats children and adults, and is open every day of
              the week from 10 AM to 9 PM — including Sundays — because dental
              pain does not check the calendar. We are located on Wadgaon
              Shinde Road, opposite Eastern Royale Society, serving Lohegaon,
              Pathare Wasti, Dhanori, Vishrantwadi, and Viman Nagar.
            </p>
          </section>
        </article>

        <section className="service-cta">
          <h2>Meet the doctor before deciding anything</h2>
          <p>
            Book a consultation — no commitment to treatment. You will leave
            with a clear picture of your dental health and a written plan you
            can think over at home.
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
