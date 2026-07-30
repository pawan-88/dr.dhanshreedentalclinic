// NOTE: This component is intentionally NOT lazy-loaded with `ssr: false`.
// Doing so shipped an empty <body> to crawlers and left the site effectively
// invisible to Google. The component below is a client component, which Next.js
// still pre-renders to static HTML at build time — that HTML is what gets indexed.
import LuxuryDentalExperience from "./luxury-dental-experience";

export default function ClinicHomeClient() {
  return <LuxuryDentalExperience />;
}
