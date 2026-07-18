import {
  Award,
  Gem,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Timer,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

export const phoneNumber = "+918275172931";
export const whatsappNumber = "918275172931";
export const doctorName = "Dr. Dhanshree Sanap (Ghuge)";
export const siteUrl = "https://drdhanshreedentalclinic.vercel.app";
export const googleReviewsUrl =
  "https://www.google.com/maps/place/Dr.+DHANSHREE%27S+Dental+Clinic/@18.6033058,73.9285482,17z/data=!4m8!3m7!1s0x3bc2c7a86d8f74af:0x6a9c3fab4620f1c3!8m2!3d18.6033058!4d73.9285482!9m1!1b1!16s%2Fg%2F11v0q8xq8x";
export const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.171178219932!2d73.9285482!3d18.6033058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a86d8f74af%3A0x6a9c3fab4620f1c3!2sDr.%20DHANSHREE'S%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1720606359574!5m2!1sen!2sin";
export const whatsappIntro =
  "Hi Dr. Dhanshree's Dental Clinic, I would like to book an appointment.";

export function whatsappUrl(message = whatsappIntro) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Location", href: "#reviews" },
  { label: "Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#appointment" },
] as const;

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  image: string;
};

export const services: ServiceItem[] = [
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacements planned digitally for a natural look, comfortable bite, and long-term confidence.",
    icon: ShieldCheck,
    accent: "#2563eb",
    image: "/images/Dental-Implants.jpg",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening that lifts stains safely and gives you a brighter smile in a single comfortable visit.",
    icon: Sparkles,
    accent: "#06b6d4",
    image: "/images/teeth white.jpg",
  },
  {
    title: "Root Canal",
    description:
      "Gentle, pain-managed root canal treatment that saves your natural tooth and relieves infection quickly.",
    icon: HeartPulse,
    accent: "#6366f1",
    image: "/images/root canel.jpg",
  },
  {
    title: "Braces",
    description:
      "Metal, ceramic, and clear aligner options for children and adults who want straighter, healthier teeth.",
    icon: Stethoscope,
    accent: "#14b8a6",
    image: "/images/braces.jpg",
  },
  {
    title: "Smile Design",
    description:
      "Custom smile planning for shape, shade, and symmetry so your results look natural—not overdone.",
    icon: WandSparkles,
    accent: "#8b5cf6",
    image: "/images/Veneers.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Veneers, bonding, polishing, and contouring for a refined finish that suits your face and lifestyle.",
    icon: Gem,
    accent: "#0ea5e9",
    image: "/images/Clear Aligners.jpg",
  },
];

export const stats = [
  { value: 1000, suffix: "+", label: "Happy Patients", icon: Star },
  { value: 6, suffix: "+", label: "Years Experience", icon: Award },
  { value: 100, suffix: "%", label: "Advanced Equipment", icon: Microscope },
  { value: 24, suffix: "h", label: "Fast WhatsApp Response", icon: Timer },
] as const;

export const faqs = [
  {
    question: "Is root canal treatment painful?",
    answer:
      "Most patients feel little to no pain during treatment. We use modern anesthesia and gentle techniques, and Dr. Dhanshree explains each step before starting so you feel calm and informed.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "The fastest way is WhatsApp. Tap Book Visit, share your name, phone number, and treatment, and our team will confirm your slot. You can also call us directly at +91 82751 72931.",
  },
  {
    question: "What are your clinic timings?",
    answer: "We are open Monday to Sunday, 10:00 AM to 9:00 PM, including weekends and most holidays.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "Shop No. 2, Muktai Plaza, Wadgaon Shinde Road, opposite Eastern Royale Society, Pathare Wasti, Lohegaon, Pune 411047. Google Maps directions are available in the footer.",
  },
  {
    question: "Do you treat children and families?",
    answer:
      "Yes. We offer gentle dental care for children and adults, including checkups, fillings, extractions, braces consultations, and preventive care for the whole family.",
  },
  {
    question: "Can I get a treatment cost estimate before starting?",
    answer:
      "Yes. We believe in transparent guidance. After examination, we explain recommended options, expected outcomes, and estimated costs so you can decide comfortably.",
  },
] as const;

export const doctorHighlights = [
  "Founder & Chief Dentist with 6+ years of experience",
  "Cosmetic, restorative, and preventive dentistry",
  "Comfort-focused root canal and smile design care",
  "Clear treatment planning for every patient",
] as const;
