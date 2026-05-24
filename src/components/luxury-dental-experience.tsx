"use client";

import {
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  Gem,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Timer,
  WandSparkles,
  X,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";

const phoneNumber = "+918275172931";
const whatsappNumber = "918275172931";
const doctorName = "Dr. Dhanshree Sanap (Ghuge)";
const googleReviewsUrl =
  "https://www.google.com/maps/place/Dr.+DHANSHREE%27S+Dental+Clinic/@18.6033058,73.9285482,17z/data=!4m8!3m7!1s0x3bc2c7a86d8f74af:0x6a9c3fab4620f1c3!8m2!3d18.6033058!4d73.9285482!9m1!1b1!16s%2Fg%2F11v0q8xq8x";
const whatsappIntro =
  "Hi Dr. Dhanshree's Dental Clinic, I would like to book an appointment.";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#appointment" },
];

const services = [
  {
    title: "Dental Implants",
    description: "Permanent tooth replacements planned digitally for a natural look, comfortable bite, and long-term confidence.",
    icon: ShieldCheck,
    accent: "#2563eb",
    image: "/images/Dental-Implants.jpg",
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening that lifts stains safely and gives you a brighter smile in a single comfortable visit.",
    icon: Sparkles,
    accent: "#06b6d4",
    image: "/images/teeth white.jpg",
  },
  {
    title: "Root Canal",
    description: "Gentle, pain-managed root canal treatment that saves your natural tooth and relieves infection quickly.",
    icon: HeartPulse,
    accent: "#6366f1",
    image: "/images/root canel.jpg",
  },
  {
    title: "Braces",
    description: "Metal, ceramic, and clear aligner options for children and adults who want straighter, healthier teeth.",
    icon: Stethoscope,
    accent: "#14b8a6",
    image: "/images/braces.jpg",
  },
  {
    title: "Smile Design",
    description: "Custom smile planning for shape, shade, and symmetry so your results look natural—not overdone.",
    icon: WandSparkles,
    accent: "#8b5cf6",
    image: "/images/Veneers.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, polishing, and contouring for a refined finish that suits your face and lifestyle.",
    icon: Gem,
    accent: "#0ea5e9",
    image: "/images/Clear Aligners.jpg",
  },
];

const stats = [
  { value: 1000, suffix: "+", label: "Happy Patients", icon: Star },
  { value: 6, suffix: "+", label: "Years Experience", icon: Award },
  { value: 100, suffix: "%", label: "Advanced Equipment", icon: Microscope },
  { value: 24, suffix: "h", label: "Fast WhatsApp Response", icon: Timer },
];

const testimonials = [
  {
    name: "Sneha Patil",
    treatment: "Root Canal Treatment",
    text: "I had severe tooth pain and was very nervous. Dr. Dhanshree explained every step clearly before starting. The root canal was painless, the clinic is spotless, and the follow-up care was excellent.",
  },
  {
    name: "Amit Deshmukh",
    treatment: "Dental Cleaning",
    text: "Very professional clinic near Eastern Royale Society. Scaling was done gently, staff is polite, and WhatsApp appointment booking is quick and easy. Highly recommended in Lohegaon.",
  },
  {
    name: "Pooja Kulkarni",
    treatment: "Teeth Whitening",
    text: "Got teeth whitening done here and noticed a visible difference after one session. The doctor is soft-spoken, caring, and the clinic feels modern, calm, and hygienic.",
  },
  {
    name: "Vikram Shinde",
    treatment: "Braces Consultation",
    text: "Visited for my daughter's braces consultation. Dr. Sanap explained metal, ceramic, and aligner options with clear guidance and no pressure. Very transparent and patient-friendly.",
  },
  {
    name: "Meera Joshi",
    treatment: "Smile Design",
    text: "Beautiful clinic with a reassuring atmosphere. My smile design looks natural, and the doctor checked on me after treatment. Truly patient-first dental care.",
  },
];

const faqs = [
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
];

const doctorHighlights = [
  "Founder & Chief Dentist with 6+ years of experience",
  "Cosmetic, restorative, and preventive dentistry",
  "Comfort-focused root canal and smile design care",
  "Clear treatment planning for every patient",
];

function whatsappUrl(message = whatsappIntro) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.3 });

  return (
    <motion.a
      href={href}
      className={`magnetic-btn ${variant} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="section-heading reveal"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const displayValue = `${value}${suffix}`;

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    node.textContent = displayValue;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1800;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = `${Math.round(value * eased)}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [displayValue, suffix, value]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(54);

  return (
    <div className="comparison-card reveal">
      <div className="comparison-toolbar">
        <span>Teeth Whitening Result</span>
        <span>Drag to compare</span>
      </div>
      <div className="comparison-viewport comparison-photo">
        <img
          className="comparison-image before"
          src="/images/Whitening.jpg"
          alt="Before teeth whitening treatment"
        />
        <div
          className="comparison-image after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src="/images/Whitening.jpg" alt="After teeth whitening treatment" />
        </div>
        <div className="comparison-handle" style={{ left: `${position}%` }}>
          <ChevronRight size={18} />
          <ChevronRight size={18} />
        </div>
        <div className="comparison-label before-label">Before</div>
        <div className="comparison-label after-label">After</div>
        <input
          aria-label="Drag to compare before and after dental results"
          className="comparison-range"
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq-section">
      <SectionHeading
        eyebrow="Common Questions"
        title="Answers before your first visit"
        description="Quick answers to the questions Lohegaon patients ask us most often about treatments, timings, and booking."
      />
      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article className={`faq-item gsap-reveal ${isOpen ? "open" : ""}`} key={item.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={20} />
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "Smile Design" });
  const [phoneError, setPhoneError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const digits = form.phone.replace(/\D/g, "");
    const normalizedPhone = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;

    if (normalizedPhone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setPhoneError("");
    const message = `Hello Dr. Dhanshree's Dental Clinic,\n\nI would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nTreatment: ${form.treatment}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          required
          value={form.name}
          placeholder="Your name"
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
        />
      </label>
      <label>
        <span>Phone</span>
        <input
          required
          type="tel"
          value={form.phone}
          placeholder="10-digit mobile number"
          pattern="[0-9+\s-]{10,14}"
          onChange={(event) => {
            setPhoneError("");
            setForm((current) => ({ ...current, phone: event.target.value }));
          }}
        />
        {phoneError ? <span className="form-error">{phoneError}</span> : null}
      </label>
      <label>
        <span>Treatment</span>
        <select
          value={form.treatment}
          onChange={(event) =>
            setForm((current) => ({ ...current, treatment: event.target.value }))
          }
        >
          <option>Smile Design</option>
          <option>Dental Implants</option>
          <option>Teeth Whitening</option>
          <option>Root Canal</option>
          <option>Braces Consultation</option>
          <option>Cosmetic Dentistry</option>
        </select>
      </label>
      <button type="submit">
        Book Consultation on WhatsApp
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default function LuxuryDentalExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);
  const heroX = useMotionValue(0);
  const heroY = useMotionValue(0);
  const parallaxX = useTransform(heroX, [-1, 1], [-18, 18]);
  const parallaxY = useTransform(heroY, [-1, 1], [18, -18]);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const revealItems = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
    revealItems.forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 48, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
          },
        },
      );
    });

    const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    parallaxItems.forEach((item) => {
      gsap.to(item, {
        yPercent: Number(item.dataset.parallax) || -8,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      className="luxury-site"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        event.currentTarget.style.setProperty("--cursor-x", `${x * 100}%`);
        event.currentTarget.style.setProperty("--cursor-y", `${y * 100}%`);
      }}
    >
      <div className="noise-layer" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <header className="floating-nav">
        <a className="brand" href="#home" aria-label="Dr. Dhanshree's Dental Clinic home">
          <span className="brand-mark">
            <img src="/images/logo.jpeg" alt="" />
          </span>
          <span>
            <strong>Dr. Dhanshree's</strong>
            <small>Dental Clinic</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton href={whatsappUrl()} variant="primary" className="nav-cta">
          Book Visit
        </MagneticButton>

        <button
          className="mobile-menu-trigger"
          aria-label="Open navigation menu"
          type="button"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </header>

      <motion.div
        className="mobile-menu"
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
      >
        <motion.div
          className="mobile-menu-panel"
          initial={false}
          animate={menuOpen ? { y: 0, scale: 1 } : { y: -16, scale: 0.96 }}
          transition={{ duration: 0.28 }}
        >
          <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <main>
        <section
          id="home"
          className="hero-section"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            heroX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
            heroY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
          }}
        >
          <div className="hero-gradient" aria-hidden="true" />
          <motion.div className="hero-orb orb-one" style={{ x: parallaxX, y: parallaxY }} />
          <motion.div className="hero-orb orb-two" style={{ x: parallaxY, y: parallaxX }} />

          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-kicker">
                <Sparkles size={16} />
                Trusted dental clinic in Lohegaon, Pune
              </div>
              <h1>
                <span>Healthy, Confident Smiles</span>
                <span>with Gentle Dental Care</span>
              </h1>
              <p>
                Modern treatments, a hygienic clinic environment, and {doctorName} guiding every step—from
                checkups and root canals to smile design and cosmetic dentistry.
              </p>
              <div className="hero-actions">
                <MagneticButton href={whatsappUrl()} variant="primary">
                  Book Appointment
                  <CalendarCheck size={18} />
                </MagneticButton>
                <MagneticButton href={googleReviewsUrl} variant="secondary">
                  Read Google Reviews
                  <ExternalLink size={18} />
                </MagneticButton>
              </div>
              <div className="hero-trust-row">
                <a className="rating-card google-rating-card" href={googleReviewsUrl} target="_blank" rel="noreferrer">
                  <div>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <strong>4.9 Google rating</strong>
                  <span>Read patient reviews</span>
                </a>
                <div className="mini-stat">
                  <strong>1000+</strong>
                  <span>Smiles cared for</span>
                </div>
                <div className="mini-stat">
                  <strong>6+</strong>
                  <span>Years expertise</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="scene-shell clinic-photo-shell">
                <img
                  className="clinic-hero-photo"
                  src="/images/page.jpg"
                  alt="Clean and modern dental clinic interior at Dr. Dhanshree's Dental Clinic, Lohegaon"
                />
                <div className="doctor-hero-card">
                  <img src="/images/Dr.ImgD.jpg" alt={doctorName} />
                  <div>
                    <strong>{doctorName}</strong>
                    <span>Founder & Chief Dentist</span>
                  </div>
                </div>
              </div>
              <motion.div
                className="floating-badge top"
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck size={18} />
                Hygienic Modern Clinic
              </motion.div>
              <motion.div
                className="floating-badge bottom"
                animate={{ y: [0, 10, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={18} />
                Same-Day Appointments
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-blob blob-left" data-parallax="-10" />
          <SectionHeading
            eyebrow="Our Treatments"
            title="Complete dental care for every stage of your smile"
            description="From preventive checkups to advanced cosmetic work, each treatment is explained clearly so you know what to expect before you visit."
          />
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="service-card gsap-reveal"
                  key={service.title}
                  style={{ "--accent": service.accent } as React.CSSProperties}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="service-photo">
                    <img src={service.image} alt={`${service.title} at Dr. Dhanshree's Dental Clinic`} loading="lazy" />
                  </div>
                  <span className="service-index">0{index + 1}</span>
                  <div className="service-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={whatsappUrl(`Hello, I want to know more about ${service.title}.`)}>
                    Book {service.title}
                    <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="why-us" className="section why-section">
          <div className="why-panel">
            <div className="why-copy reveal">
              <span className="eyebrow">Why Choose Us</span>
              <h2>Advanced care with a calm, patient-first approach.</h2>
              <p>
                Whether it is your first visit or a complex treatment plan, we focus on clear communication,
                gentle chairside care, and a clean clinic experience you can trust.
              </p>
              <ul>
                {[
                  "Transparent treatment guidance before procedures",
                  "Modern diagnostic and restorative workflow",
                  "Gentle chairside communication for every age",
                  "Central Lohegaon location with easy appointment flow",
                ].map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div className="stat-card gsap-reveal" key={stat.label}>
                    <Icon size={22} />
                    <strong>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </strong>
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="results" className="section results-section">
          <SectionHeading
            eyebrow="Smile Results"
            title="See the difference professional dental care can make"
            description="Real treatment outcomes for whitening, alignment, and smile design—shown clearly so you can understand the kind of results we aim for."
          />
          <div className="results-grid">
            <BeforeAfterSlider />
            <div className="results-copy gsap-reveal">
              <h3>Natural-looking results, planned with care.</h3>
              <p>
                Every cosmetic or restorative treatment starts with an honest conversation about what will suit
                your teeth, face, and budget. We focus on healthy, natural smiles—not exaggerated changes.
              </p>
              <div className="treatment-pills">
                <span>Whitening</span>
                <span>Veneers</span>
                <span>Aligners</span>
                <span>Cosmetic Bonding</span>
              </div>
            </div>
          </div>
        </section>

        <section id="doctor" className="section doctor-section">
          <div className="doctor-card">
            <motion.div
              className="doctor-portrait reveal"
              initial={{ clipPath: "inset(18% 18% 18% 18% round 32px)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 32px)", opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="portrait-glow" />
              <img
                className="doctor-photo"
                src="/images/Dr.ImgD.jpg"
                alt={`${doctorName}, Founder and Chief Dentist at Dr. Dhanshree's Dental Clinic`}
                loading="lazy"
                decoding="async"
              />
              <div className="doctor-nameplate">
                <strong>{doctorName}</strong>
                <span>Founder & Chief Dentist</span>
              </div>
            </motion.div>
            <div className="doctor-copy gsap-reveal">
              <span className="eyebrow">Meet Your Dentist</span>
              <h2>Gentle care, precise treatment, and a smile-first philosophy.</h2>
              <p>
                {doctorName} combines modern dental technology with clear, compassionate communication—helping
                patients feel informed, comfortable, and confident before every procedure.
              </p>
              <div className="doctor-highlights">
                {doctorHighlights.map((item) => (
                  <span key={item}>
                    <Check size={16} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section testimonials-section">
          <SectionHeading
            eyebrow="Google Reviews"
            title="What Lohegaon patients say about us"
            description="Real feedback from patients who visited our clinic for root canal, whitening, braces, and smile design treatments."
          />
          <div className="reviews-grid">
            {testimonials.map((testimonial) => (
              <article className="review-card gsap-reveal" key={testimonial.name}>
                <div className="review-card-top">
                  <div className="review-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.treatment}</span>
                  </div>
                  <span className="google-badge">Google</span>
                </div>
                <div className="stars" aria-label="Five star rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>{testimonial.text}</p>
              </article>
            ))}
          </div>
          <div className="reviews-cta">
            <MagneticButton href={googleReviewsUrl} variant="secondary">
              Read All Google Reviews
              <ExternalLink size={18} />
            </MagneticButton>
          </div>
        </section>

        <FaqSection />

        <section id="appointment" className="section appointment-section">
          <div className="appointment-shell">
            <div className="appointment-copy reveal">
              <span className="eyebrow">Book Your Visit</span>
              <h2>Book your dental visit in under a minute on WhatsApp.</h2>
              <p>
                Share your name, phone number, and treatment. Our team will confirm your appointment quickly—often
                the same day.
              </p>
              <div className="quick-actions">
                <MagneticButton href={whatsappUrl()} variant="primary">
                  WhatsApp Now
                  <MessageCircle size={18} />
                </MagneticButton>
                <MagneticButton href={`tel:${phoneNumber}`} variant="ghost">
                  Call Now
                  <Phone size={18} />
                </MagneticButton>
              </div>
            </div>
            <div className="form-card gsap-reveal">
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="premium-footer">
        <div className="footer-glow" />
        <div className="footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">
                <img src="/images/logo.jpeg" alt="" />
              </span>
              <span>
                <strong>Dr. Dhanshree's</strong>
                <small>Dental Clinic</small>
              </span>
            </a>
            <p>
              Trusted dental care in Lohegaon, Pune—modern treatments, hygienic workflow, and compassionate care
              with {doctorName}.
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/drdhanshree_dentalclinic2025/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <span>Ig</span>
              </a>
              <a href={googleReviewsUrl} aria-label="Google Reviews" target="_blank" rel="noreferrer">
                <span>Gr</span>
              </a>
              <a href={whatsappUrl()} aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h3>Clinic Hours</h3>
            <p className="footer-line">
              <Clock size={16} />
              Monday - Sunday
            </p>
            <p>10:00 AM - 9:00 PM</p>
            <h3>Contact</h3>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <a href="mailto:dr.dhanshreedentalclinic@gmail.com">dr.dhanshreedentalclinic@gmail.com</a>
          </div>

          <div>
            <h3>Find Us</h3>
            <p className="footer-line">
              <MapPin size={16} />
              Shop No. 2, Muktai Plaza, Wadgaon Shinde Road, Lohegaon, Pune 411047
            </p>
            <iframe
              title="Dr. Dhanshree's Dental Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.171178219932!2d73.9285482!3d18.6033058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a86d8f74af%3A0x6a9c3fab4620f1c3!2sDr.%20DHANSHREE'S%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1720606359574!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dr. Dhanshree's Dental Clinic. All rights reserved.</span>
          <span>Lohegaon, Pune · Open 10 AM – 9 PM daily</span>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a href={`tel:${phoneNumber}`} aria-label="Call Dr. Dhanshree's Dental Clinic">
          <Phone size={20} />
        </a>
        <a href={whatsappUrl()} aria-label="WhatsApp Dr. Dhanshree's Dental Clinic">
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
}
