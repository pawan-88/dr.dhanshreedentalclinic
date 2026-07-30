"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  doctorName,
  googleReviewsUrl,
  phoneDisplay,
  phoneNumber,
  whatsappUrl,
} from "@/lib/site-data";
// Type-only import. Importing the `servicePages` array itself would pull every
// page's full prose into the client bundle of every service page.
import type { ServicePage } from "@/lib/service-pages";

function ServiceFaqs({ faqs }: { faqs: ServicePage["faqs"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article
            className={`faq-item ${isOpen ? "open" : ""}`}
            key={item.question}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown size={20} />
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function ServicePageView({
  page,
  related,
}: {
  page: ServicePage;
  related: ServicePage[];
}) {
  return (
    <div className="luxury-site service-page">
      <div className="aurora aurora-a" aria-hidden="true" />
      <div className="aurora aurora-b" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />

      <header className="floating-nav service-nav">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <img
              src="/images/logo.jpeg"
              alt=""
              width={44}
              height={44}
              decoding="async"
            />
          </span>
          <span>
            <strong>Dr. Dhanshree&apos;s</strong>
            <small>Dental Clinic</small>
          </span>
        </Link>

        <a className="magnetic-btn primary nav-cta" href={whatsappUrl()}>
          Book Visit
        </a>
      </header>

      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{page.navLabel}</span>
        </nav>

        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">Lohegaon, Pune · Open 10 AM – 9 PM</span>
            <h1>{page.h1}</h1>
            <p className="service-intro">{page.intro}</p>
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

          <div className="service-hero-media">
            <img
              src={page.image}
              alt={page.imageAlt}
              width={960}
              height={640}
              decoding="async"
            />
          </div>
        </section>

        <section className="service-highlights">
          {page.highlights.map((item) => (
            <div className="stat-card" key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <article className="service-body">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>
                      <Check size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        <section className="service-faq">
          <h2>Frequently asked questions</h2>
          <ServiceFaqs faqs={page.faqs} />
        </section>

        <section className="service-cta">
          <h2>Book your consultation in Lohegaon</h2>
          <p>
            Message us on WhatsApp with your name and what you need, and our team
            will confirm a slot — often the same day. {doctorName} will assess
            your case and explain the options and costs before anything begins.
          </p>
          <div className="hero-actions">
            <a className="magnetic-btn primary" href={whatsappUrl()}>
              WhatsApp Now
              <MessageCircle size={18} />
            </a>
            <a className="magnetic-btn secondary" href={googleReviewsUrl}>
              Read Google Reviews
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="service-related">
            <h2>Related treatments</h2>
            <div className="related-grid">
              {related.map((item) => (
                <Link
                  className="related-card"
                  key={item.slug}
                  href={`/${item.slug}`}
                >
                  <strong>{item.navLabel}</strong>
                  <span>{item.metaTitle}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="service-back">
          <Link href="/">
            <ArrowLeft size={16} />
            Back to Dr. Dhanshree&apos;s Dental Clinic
          </Link>
        </div>
      </main>

      <footer className="premium-footer">
        <div className="footer-glow" />
        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-mark">
                <img
                  src="/images/logo.jpeg"
                  alt=""
                  width={44}
                  height={44}
                  decoding="async"
                />
              </span>
              <span>
                <strong>Dr. Dhanshree&apos;s</strong>
                <small>Dental Clinic</small>
              </span>
            </Link>
            <p>
              Trusted dental care in Lohegaon, Pune—modern treatments, hygienic
              workflow, and compassionate care with {doctorName}.
            </p>
          </div>

          <div>
            <h3>Treatments</h3>
            <Link href="/dental-implants-lohegaon">Dental Implants</Link>
            <Link href="/root-canal-treatment-lohegaon">Root Canal</Link>
            <Link href="/braces-and-aligners-lohegaon">Braces &amp; Aligners</Link>
            <Link href="/teeth-whitening-lohegaon">Teeth Whitening</Link>
            <Link href="/smile-design-lohegaon">Smile Design</Link>
          </div>

          <div>
            <h3>Clinic Hours</h3>
            <p className="footer-line">
              <Clock size={16} />
              Monday - Sunday
            </p>
            <p>10:00 AM - 9:00 PM</p>
            <h3>Contact</h3>
            <a href={`tel:${phoneNumber}`}>{phoneDisplay}</a>
            <a href="mailto:dr.dhanshreedentalclinic@gmail.com">
              dr.dhanshreedentalclinic@gmail.com
            </a>
          </div>

          <div>
            <h3>Find Us</h3>
            <address className="footer-address">
              <p className="footer-line">
                <MapPin size={16} />
                <span>
                  Dr. Dhanshree&apos;s Dental Clinic
                  <br />
                  Shop No. 2, Muktai Plaza, Wadgaon Shinde Road,
                  <br />
                  Opp. Eastern Royale Society, Pathare Wasti,
                  <br />
                  Lohegaon, Pune, Maharashtra 411047
                </span>
              </p>
            </address>
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
              Get directions on Google Maps
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Dr. Dhanshree&apos;s Dental Clinic. All rights reserved.
          </span>
          <span>Lohegaon, Pune · Open 10 AM – 9 PM daily</span>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Dr. Dhanshree's Dental Clinic"
        >
          <Phone size={20} />
        </a>
        <a
          href={whatsappUrl()}
          aria-label="WhatsApp Dr. Dhanshree's Dental Clinic"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
}
