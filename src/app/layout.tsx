import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drdhanshreedentalclinic.vercel.app"),
  title: {
    default: "Dr. Dhanshree's Dental Clinic | Premium Dental Care in Lohegaon Pune",
    template: "%s | Dr. Dhanshree's Dental Clinic",
  },
  description:
    "Premium dental treatments in Lohegaon, Pune with advanced technology, expert doctors, painless care, implants, braces, smile design, and cosmetic dentistry.",
  keywords: [
    "Dental clinic in Lohegaon",
    "Dentist in Pune",
    "Dr Dhanshree Dental Clinic",
    "Dental implants Pune",
    "Root canal Pune",
    "Teeth whitening Pune",
    "Smile design Pune",
  ],
  authors: [{ name: "Dr. Dhanshree's Dental Clinic" }],
  creator: "Dr. Dhanshree's Dental Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drdhanshreedentalclinic.vercel.app",
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Dr. Dhanshree's Dental Clinic | Premium Dental Care in Pune",
    description:
      "A modern dental clinic experience for implants, root canal, braces, whitening, and smile design in Lohegaon, Pune.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dr. Dhanshree's Dental Clinic premium dental care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dhanshree's Dental Clinic",
    description: "Premium advanced dental care in Lohegaon, Pune.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
