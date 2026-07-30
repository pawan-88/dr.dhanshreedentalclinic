import { ImageResponse } from "next/og";

// Generates a real 1200x630 social card at build time. Previously the OG image
// pointed at a small square logo.jpeg, which most platforms crop badly or refuse
// to render as a large card.
// Required with `output: "export"` — the metadata-route loader does not inject
// this for generated image routes, and the build throws E301 without it.
export const dynamic = "force-static";

export const alt =
  "Dr. Dhanshree's Dental Clinic — dental clinic in Lohegaon, Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #04060e 0%, #0a1428 55%, #04121c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e7c873",
          }}
        >
          Lohegaon, Pune · Open 10 AM – 9 PM
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 74,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Dr. Dhanshree&apos;s Dental Clinic
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 34,
            lineHeight: 1.4,
            color: "#a9c8e2",
          }}
        >
          Dental Implants · Painless Root Canal · Braces &amp; Aligners ·
          Whitening · Smile Design
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 30,
            fontWeight: 600,
            color: "#67e8f9",
          }}
        >
          Book on WhatsApp: +91 82751 72931
        </div>
      </div>
    ),
    size,
  );
}
