import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site-data";
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
  // Single source of truth for the site origin — swap `siteUrl` in
  // src/lib/site-data.ts when the custom domain goes live and every canonical,
  // OG tag, sitemap entry and JSON-LD @id updates with it.
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  applicationName: "Dr. Dhanshree's Dental Clinic",
  appleWebApp: {
    capable: true,
    title: "Dr. Dhanshree's Dental Clinic",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
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
    url: siteUrl,
    siteName: "Dr. Dhanshree's Dental Clinic",
    title: "Dr. Dhanshree's Dental Clinic | Best Dentist in Lohegaon, Pune",
    description:
      "Painless root canal, implants, braces, whitening & smile design in Lohegaon, Pune. Open 10 AM–9 PM daily. Book on WhatsApp.",
    // Image intentionally omitted here — src/app/opengraph-image.tsx generates a
    // proper 1200x630 card at build time and Next injects it automatically.
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dhanshree's Dental Clinic | Dentist in Lohegaon, Pune",
    description:
      "Painless root canal, implants, braces, whitening & smile design. Open 10 AM–9 PM daily.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html
      lang="en-IN"
      // The inline script below mutates this className before hydration, which
      // React would otherwise flag as a mismatch.
      suppressHydrationWarning
      className={`no-js ${inter.variable} ${fraunces.variable}`}
    >
      <head>
        {/* The Google Maps embed is the heaviest third-party request on the
            page; warming these connections shaves handshake time off LCP. */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        {/* Strips the `no-js` class the instant JS runs. Until then, CSS keyed on
            `.no-js` keeps scroll-reveal content visible, so a crawler that does
            not execute scripts still sees fully rendered copy. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');`,
          }}
        />
        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4CGLQ18XR0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CGLQ18XR0');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
