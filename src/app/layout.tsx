import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drdhanshreedentalclinic.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "Dr. Dhanshree's Dental Clinic | Best Dentist in Lohegaon, Pune – Implants, Braces & Smile Design",
    template: "%s | Dr. Dhanshree's Dental Clinic",
  },
  description:
    "Trusted dental clinic in Lohegaon, Pune (Wadgaon Shinde Road). Painless root canal, dental implants, braces, teeth whitening & smile design by Dr. Dhanshree Sanap. Open 10 AM–9 PM daily. Book on WhatsApp: +91 82751 72931.",
  keywords: [
    "Dental clinic in Lohegaon",
    "Best dentist in Lohegaon Pune",
    "Dentist near me Lohegaon",
    "Dentist in Pune",
    "Dr Dhanshree Dental Clinic",
    "Dental clinic Wadgaon Shinde Road",
    "Dental clinic Pathare Wasti",
    "Dental implants Pune",
    "Root canal treatment Lohegaon",
    "Painless root canal Pune",
    "Teeth whitening Pune",
    "Braces and aligners Pune",
    "Clear aligners Lohegaon",
    "Smile design Pune",
    "Cosmetic dentist Pune",
    "Kids dentist Lohegaon",
  ],
  category: "healthcare",
  authors: [{ name: "Dr. Dhanshree's Dental Clinic" }],
  creator: "Dr. Dhanshree's Dental Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drdhanshreedentalclinic.vercel.app",
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Dr. Dhanshree's Dental Clinic | Best Dentist in Lohegaon, Pune",
    description:
      "Painless root canal, implants, braces, whitening & smile design in Lohegaon, Pune. Open 10 AM–9 PM daily. Book on WhatsApp.",
    images: [
      {
        url: "/images/logo.jpeg",
        alt: "Dr. Dhanshree's Dental Clinic — dental care in Lohegaon, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dhanshree's Dental Clinic | Dentist in Lohegaon, Pune",
    description:
      "Painless root canal, implants, braces, whitening & smile design. Open 10 AM–9 PM daily.",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "M9Hysbs4q_cShLY97zmeS5tMJ3K3lC2NPdGKS33uR8w",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#04060e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
