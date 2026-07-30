import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageView from "@/components/service-page-view";
import {
  getServicePage,
  servicePages,
  type ServicePage,
} from "@/lib/service-pages";
import { siteUrl } from "@/lib/site-data";

// Only the slugs listed below are generated. Anything else 404s rather than
// rendering an empty shell — soft 404s get indexed as duplicate content.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    // Each service page must declare its own canonical. Without this they all
    // inherit the root canonical and Google collapses them into one result.
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: `${siteUrl}/${page.slug}`,
      siteName: "Dr. Dhanshree's Dental Clinic",
      title: `${page.metaTitle} | Dr. Dhanshree's Dental Clinic`,
      description: page.metaDescription,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) notFound();

  const pageUrl = `${siteUrl}/${page.slug}`;

  // Resolved here rather than in the client component so the full content
  // array stays on the server.
  const related = page.related
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((item): item is ServicePage => Boolean(item));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${page.metaTitle} | Dr. Dhanshree's Dental Clinic`,
        description: page.metaDescription,
        inLanguage: "en-IN",
        // Points back at the clinic entity declared on the homepage so Google
        // treats these as one business rather than five unrelated pages.
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#clinic` },
        // new URL() percent-encodes — some image filenames contain spaces, and
        // raw string concatenation produces a URL structured-data parsers reject.
        primaryImageOfPage: new URL(page.image, siteUrl).toString(),
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.navLabel,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${pageUrl}/#procedure`,
        name: page.procedureName,
        description: page.intro,
        url: pageUrl,
        procedureType: `https://schema.org/${page.procedureType}`,
        // No `performer` / `availableService` here: neither is a valid property
        // of MedicalProcedure. The clinic-to-procedure link is already declared
        // by `availableService` on the Dentist entity in src/app/page.tsx.
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        isPartOf: { "@id": `${pageUrl}/#webpage` },
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageView page={page} related={related} />
    </>
  );
}
