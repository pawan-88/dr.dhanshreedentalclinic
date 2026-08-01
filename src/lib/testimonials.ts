// Patient stories — video testimonials and photo reviews.
//
// HOW TO ADD CONTENT (no code knowledge needed beyond copy-paste):
//
// 1. VIDEOS — put the .mp4 file in  public/videos/  (create the folder).
//    Keep each clip short (30–90 seconds) and compressed: 720p, H.264,
//    ideally under 10 MB (HandBrake's "Web" preset does this in one click).
//    Add a poster image (a still frame) in public/images/testimonials/.
//
// 2. PHOTOS — put review photos in  public/images/testimonials/.
//    Use the patient's photo, or a photo of them at the clinic.
//
// 3. Copy one of the commented templates below, fill it in, done.
//    The page and homepage preview update automatically.
//
// IMPORTANT — CONSENT: publish a patient's face, name, or video ONLY with
// their written consent (a simple signed line or a clear WhatsApp message
// saying they agree to appear on the website and social media). Keep a copy.

export type VideoTestimonial = {
  /** Path under /public, e.g. "/videos/sneha-root-canal.mp4" */
  src: string;
  /**
   * Poster/thumbnail image shown before play (optional but recommended —
   * without it the player loads the video's first frame instead).
   */
  poster?: string;
  name: string;
  treatment: string;
  /** One-line summary shown under the video. */
  caption: string;
  /** ISO date the video was recorded/uploaded, e.g. "2026-08-01". */
  uploadDate: string;
};

export type PhotoReview = {
  /** Path under /public, e.g. "/images/testimonials/amit.jpg" */
  image: string;
  name: string;
  treatment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  // TODO: replace the name/treatment/caption placeholders below with each
  // real patient's details (with their written consent).
  {
    src: "/videos/1.mp4",
    name: "Patient Story 1",
    treatment: "Dental Treatment",
    caption: "A patient shares their experience at our Lohegaon clinic.",
    uploadDate: "2026-08-01",
  },
  {
    src: "/videos/2.mp4",
    name: "Patient Story 2",
    treatment: "Dental Treatment",
    caption: "A patient shares their experience at our Lohegaon clinic.",
    uploadDate: "2026-08-01",
  },
  {
    src: "/videos/3.mp4",
    name: "Patient Story 3",
    treatment: "Dental Treatment",
    caption: "A patient shares their experience at our Lohegaon clinic.",
    uploadDate: "2026-08-01",
  },
];

export const photoReviews: PhotoReview[] = [
  // {
  //   image: "/images/testimonials/amit.jpg",
  //   name: "Amit Deshmukh",
  //   treatment: "Dental Cleaning",
  //   rating: 5,
  //   text: "Very professional clinic near Eastern Royale Society. Scaling was done gently and booking on WhatsApp was quick.",
  // },
];

export type GoogleReview = {
  name: string;
  /** What the review was about, shown as the subtitle. */
  context: string;
  /** Relative time as shown on Google when the review was captured. */
  timeAgo: string;
  text: string;
};

/**
 * Real reviews copied verbatim from the clinic's Google Maps profile
 * (5.0 rating, 24 reviews at time of capture — August 2026). These are a
 * static snapshot: when new reviews arrive on Google, add them here.
 */
export const googleReviews: GoogleReview[] = [
  {
    name: "Ravya Prakash",
    context: "Root Canal & Crown",
    timeAgo: "3 months ago",
    text: "Doctor is friendly, skilled and professional. My mom had toothache and dental abrasion which was explained and with proper care and treatment she had a root canal procedure and restored with dental crown. We are really satisfied and overall had a very good experience.",
  },
  {
    name: "Pramod Jamnik",
    context: "Wisdom Tooth Extraction",
    timeAgo: "3 months ago",
    text: "I had my wisdom tooth extraction at Dr. Dhanshree dental clinic. Treatment was very smooth and almost painless experience. Dr. Dhanshree was professional and explained everything clearly. Highly recommended.",
  },
  {
    name: "Snehal Mangale",
    context: "Cleaning, Scaling & Polishing",
    timeAgo: "5 months ago",
    text: "Went in for cleaning, scaling, and polishing. The procedure was smooth, painless, and done with great attention to detail. Very happy with the results. Highly recommended.",
  },
  {
    name: "Sachin Malekar",
    context: "Cleaning, Scaling & Polishing",
    timeAgo: "5 months ago",
    text: "Had an amazing experience with cleaning, scaling, and polishing. The procedure was gentle, painless, and done with great care. Teeth look noticeably cleaner and brighter. Highly recommended.",
  },
  {
    name: "Tiri Mogle",
    context: "Root Canal Treatment",
    timeAgo: "8 months ago",
    text: "I had a root canal done by Dr. Dhanshree at Dr. Dhanshree's Dental Clinic, and the experience was excellent! The treatment was completely painless, and she explained everything clearly and made me feel very comfortable throughout. Highly recommend her for anyone looking for expert and gentle dental care.",
  },
  {
    name: "Dhananjay Kingre",
    context: "Root Canal Treatment",
    timeAgo: "a year ago",
    text: "I had a root canal done and I'm truly impressed with the care and expertise of Dr. Dhanshree. The procedure was painless, smooth, and professionally handled. The doctor explained everything clearly and made me feel completely at ease. Highly recommended for anyone looking for a skilled and caring dentist!",
  },
];
