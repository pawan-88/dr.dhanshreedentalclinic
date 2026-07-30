import ClinicHomeClient from "@/components/clinic-home-client";
import { doctorName, faqs, services, siteUrl } from "@/lib/site-data";

const clinicId = `${siteUrl}/#clinic`;
const doctorId = `${siteUrl}/#dentist`;
const websiteId = `${siteUrl}/#website`;
const webpageId = `${siteUrl}/#webpage`;

// addressLocality must be the city Google recognises ("Pune"); the neighbourhood
// belongs in streetAddress. Previously "Lohegaon, Pune" sat in addressLocality,
// which makes the address harder for Google to match to the Business Profile.
const address = {
  "@type": "PostalAddress",
  streetAddress:
    "Shop No. 2, Muktai Plaza, Wadgaon Shinde Road, Opp. Eastern Royale Society, Pathare Wasti, Lohegaon",
  addressLocality: "Pune",
  addressRegion: "Maharashtra",
  postalCode: "411047",
  addressCountry: "IN",
};

const mapUrl =
  "https://www.google.com/maps/place/Dr.+DHANSHREE%27S+Dental+Clinic/@18.6033058,73.9285482,17z";

const whatsappBookingUrl = "https://wa.me/918275172931";

const clinicSchema = {
  "@type": "Dentist",
  "@id": clinicId,
  name: "Dr. Dhanshree's Dental Clinic",
  alternateName: "Dr. Dhanshree Dental Clinic Lohegaon",
  description:
    "Dental clinic in Lohegaon, Pune offering painless root canal treatment, dental implants, braces and clear aligners, teeth whitening, smile design, and cosmetic dentistry. Open daily 10 AM to 9 PM.",
  url: siteUrl,
  telephone: "+918275172931",
  email: "dr.dhanshreedentalclinic@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  isAcceptingNewPatients: true,
  knowsLanguage: ["en-IN", "hi-IN", "mr-IN"],
  image: [
    `${siteUrl}/images/logo.jpeg`,
    `${siteUrl}/images/Dental-Implants.jpg`,
    `${siteUrl}/images/braces.jpg`,
    `${siteUrl}/images/Whitening.jpg`,
  ],
  logo: `${siteUrl}/images/logo.jpeg`,
  hasMap: mapUrl,
  founder: { "@id": doctorId },
  employee: { "@id": doctorId },
  areaServed: [
    "Lohegaon",
    "Pathare Wasti",
    "Wadgaon Shinde Road",
    "Vishrantwadi",
    "Dhanori",
    "Viman Nagar",
    "Pune",
  ].map((name) => ({ "@type": "Place", name })),
  address,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.6033058",
    longitude: "73.9285482",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  medicalSpecialty: [
    "Dental implants",
    "Cosmetic dentistry",
    "Root canal treatment",
    "Orthodontics",
    "Teeth whitening",
    "Pediatric dentistry",
  ],
  availableService: services.map((service) => ({
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    procedureType: "https://schema.org/NoninvasiveProcedure",
  })),
  // Offer catalog gives Google an explicit service list it can surface as
  // sitelinks / service chips alongside the business listing.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental treatments in Lohegaon, Pune",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
      },
    })),
  },
  potentialAction: {
    "@type": "ReserveAction",
    name: "Book a dental appointment",
    target: {
      "@type": "EntryPoint",
      urlTemplate: whatsappBookingUrl,
      inLanguage: "en-IN",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Dental appointment at Dr. Dhanshree's Dental Clinic",
    },
  },
  sameAs: [
    "https://www.instagram.com/drdhanshree_dentalclinic2025/",
    mapUrl,
  ],
};

const dentistSchema = {
  "@type": "Person",
  "@id": doctorId,
  name: doctorName,
  jobTitle: "Founder & Chief Dentist",
  image: `${siteUrl}/images/Dr.ImgD.jpg`,
  url: siteUrl,
  worksFor: { "@id": clinicId },
  workLocation: { "@id": clinicId },
  address,
  knowsAbout: [
    "Dental implants",
    "Root canal treatment",
    "Smile design",
    "Cosmetic dentistry",
    "Orthodontics",
    "Preventive dentistry",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: "Dr. Dhanshree's Dental Clinic",
  inLanguage: "en-IN",
  publisher: { "@id": clinicId },
};

const webpageSchema = {
  "@type": "WebPage",
  "@id": webpageId,
  url: siteUrl,
  name: "Dr. Dhanshree's Dental Clinic | Best Dentist in Lohegaon, Pune",
  description:
    "Trusted dental clinic in Lohegaon, Pune. Painless root canal, dental implants, braces, teeth whitening and smile design by Dr. Dhanshree Sanap.",
  isPartOf: { "@id": websiteId },
  about: { "@id": clinicId },
  primaryImageOfPage: `${siteUrl}/images/logo.jpeg`,
  inLanguage: "en-IN",
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  isPartOf: { "@id": webpageId },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// One graph beats five loose blobs: entities can cross-reference by @id and
// Google reconciles them into a single knowledge record for the clinic.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    clinicSchema,
    dentistSchema,
    websiteSchema,
    webpageSchema,
    faqSchema,
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClinicHomeClient />
    </>
  );
}
