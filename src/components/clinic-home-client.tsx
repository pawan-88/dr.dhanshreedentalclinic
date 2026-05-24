"use client";

import dynamic from "next/dynamic";

const LuxuryDentalExperience = dynamic(
  () => import("./luxury-dental-experience"),
  { ssr: false },
);

export default function ClinicHomeClient() {
  return <LuxuryDentalExperience />;
}
