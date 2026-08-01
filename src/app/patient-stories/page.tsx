import type { Metadata } from "next";
import { ExternalLink, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import ReviewsCarousel from "@/components/reviews-carousel";
import VideosCarousel from "@/components/videos-carousel";
import {
  googleReviews,
  photoReviews,
  videoTestimonials,
} from "@/lib/testimonials";
import { googleReviewsUrl, siteUrl, whatsappUrl } from "@/lib/site-data";

const pageUrl = `${siteUrl}/patient-stories`;

export const metadata: Metadata = {
  title: "Patient Stories & Reviews – Real Results in Lohegaon, Pune",
  description:
    "Video testimonials, photos and reviews from real patients of Dr. Dhanshree's Dental Clinic, Lohegaon, Pune — root canal, implants, braces, whitening and smile design experiences, in their own words.",
  keywords: [
    "dental clinic reviews Lohegaon",
    "dentist patient testimonials Pune",
    "Dr Dhanshree clinic reviews",
    "best rated dentist Lohegaon",
  ],
  alternates: { canonical: "/patient-stories" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Patient Stories & Reviews | Dr. Dhanshree's Dental Clinic",
    description:
      "Real patients share their treatment experiences at our Lohegaon, Pune clinic.",
  },
};

// NOTE: deliberately no Review/AggregateRating structured data here — Google
// ignores "self-serving" review markup on a business's own site and it can
// attract a manual action. Video markup is legitimate and included below.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Patient Stories & Reviews | Dr. Dhanshree's Dental Clinic",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Patient Stories",
          item: pageUrl,
        },
      ],
    },
    ...videoTestimonials.map((video) => ({
      "@type": "VideoObject",
      name: `${video.name} — ${video.treatment} at Dr. Dhanshree's Dental Clinic`,
      description: video.caption,
      ...(video.poster
        ? { thumbnailUrl: new URL(video.poster, siteUrl).toString() }
        : {}),
      contentUrl: new URL(video.src, siteUrl).toString(),
      uploadDate: video.uploadDate,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#clinic` },
    })),
  ],
};

function Stars() {
  return (
    <div className="stars" aria-label="Five star rating">
      {[...Array(5)].map((_, index) => (
        <Star key={index} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function PatientStoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageShell activePath="/patient-stories">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Patient Stories</span>
        </nav>

        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">Real Patients · Real Results</span>
            <h1>Patient Stories &amp; Reviews</h1>
            <p className="service-intro">
              Nothing we write about ourselves is as convincing as what
              patients say in their own words. Here are experiences from people
              who came to our Lohegaon clinic for root canals, implants,
              braces, whitening, and smile design — shared with their
              permission.
            </p>
          </div>
        </section>

        {videoTestimonials.length > 0 ? (
          <section className="service-related stories-section">
            <h2>Video testimonials</h2>
            <VideosCarousel videos={videoTestimonials} />
          </section>
        ) : null}

        {photoReviews.length > 0 ? (
          <section className="service-related stories-section">
            <h2>Patient photos &amp; reviews</h2>
            <div className="photo-review-grid">
              {photoReviews.map((review) => (
                <article className="photo-review-card" key={review.name}>
                  <img
                    src={review.image}
                    alt={`${review.name} — ${review.treatment} patient at Dr. Dhanshree's Dental Clinic`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.treatment}</span>
                    <Stars />
                    <p>{review.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="service-related stories-section">
          <h2>What patients say on Google</h2>
          <p className="stories-note">
            Real reviews from our{" "}
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
              Google profile
            </a>{" "}
            — 5.0 rating from 24 reviews, reproduced here word for word.
          </p>
          <ReviewsCarousel reviews={googleReviews} />
        </section>

        <section className="service-cta">
          <h2>Read every review, unedited, on Google</h2>
          <p>
            We hold a 5.0 rating on Google. Reviews there are written and
            published by patients directly — we cannot edit or remove them,
            which is exactly why they are worth reading.
          </p>
          <div className="hero-actions">
            <a
              className="magnetic-btn secondary"
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read Google Reviews
              <ExternalLink size={18} />
            </a>
            <a className="magnetic-btn primary" href={whatsappUrl()}>
              Book Your Visit
              <MessageCircle size={18} />
            </a>
          </div>
        </section>
      </PageShell>
    </>
  );
}
