import LuxuryDentalExperience from "../components/luxury-dental-experience";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Dhanshree's Dental Clinic",
  url: "https://drdhanshreedentalclinic.vercel.app",
  telephone: "+918275172931",
  email: "dr.dhanshreedentalclinic@gmail.com",
  priceRange: "$$",
  image: "https://drdhanshreedentalclinic.vercel.app/og-image.svg",
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
  sameAs: [
    "https://www.instagram.com/drdhanshree_dentalclinic2025/",
    "https://www.google.com/maps/place/Dr.+DHANSHREE%27S+Dental+Clinic/@18.6033058,73.9285482,17z",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <LuxuryDentalExperience />
    </>
  );
}
