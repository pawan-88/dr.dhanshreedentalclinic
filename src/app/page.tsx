import ClinicHomeClient from "@/components/clinic-home-client";
import { doctorName, faqs, siteUrl } from "@/lib/site-data";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}/#clinic`,
  name: "Dr. Dhanshree's Dental Clinic",
  url: siteUrl,
  telephone: "+918275172931",
  email: "dr.dhanshreedentalclinic@gmail.com",
  priceRange: "$$",
  image: `${siteUrl}/images/logo.jpeg`,
  logo: `${siteUrl}/images/logo.jpeg`,
  hasMap:
    "https://www.google.com/maps/place/Dr.+DHANSHREE%27S+Dental+Clinic/@18.6033058,73.9285482,17z",
  founder: {
    "@type": "Person",
    name: doctorName,
    jobTitle: "Founder & Chief Dentist",
  },
  areaServed: ["Lohegaon", "Pathare Wasti", "Wadgaon Shinde Road", "Pune"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 2, Muktai Plaza, Wadgaon Shinde Road, Opp. Eastern Royale Society, Pathare Wasti",
    addressLocality: "Lohegaon, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411047",
    addressCountry: "IN",
  },
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
  ],
  availableService: [
    "Dental Implants",
    "Teeth Whitening",
    "Root Canal Treatment",
    "Braces & Clear Aligners",
    "Smile Design",
    "Cosmetic Dentistry",
  ].map((name) => ({
    "@type": "MedicalProcedure",
    name,
  })),
  sameAs: [
    "https://www.instagram.com/drdhanshree_dentalclinic2025/",
    "https://www.google.com/maps/place/Dr.+DHANSHREE%27S+Dental+Clinic/@18.6033058,73.9285482,17z",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClinicHomeClient />
    </>
  );
}
