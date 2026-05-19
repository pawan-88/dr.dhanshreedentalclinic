"use client";

import dynamic from "next/dynamic";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Gem,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Quote,
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

const DentalScene = dynamic(() => import("./premium-dental-scene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loader" aria-label="Loading interactive 3D dental scene">
      <span />
      <p>Preparing smile studio</p>
    </div>
  ),
});

const phoneNumber = "+918275172931";
const whatsappNumber = "918275172931";
const whatsappIntro =
  "Hi Dr. Dhanshree's Dental Clinic, I would like to book an appointment.";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#appointment" },
];

const services = [
  {
    title: "Dental Implants",
    description: "Permanent, natural-feeling replacements designed with precision digital planning.",
    icon: ShieldCheck,
    accent: "#2563eb",
  },
  {
    title: "Teeth Whitening",
    description: "Clinical-grade brightening for a noticeably fresher smile in a short visit.",
    icon: Sparkles,
    accent: "#06b6d4",
  },
  {
    title: "Root Canal",
    description: "Comfort-first endodontic care that saves natural teeth with modern tools.",
    icon: HeartPulse,
    accent: "#6366f1",
  },
  {
    title: "Braces",
    description: "Metal, ceramic, and clear aligner options for aligned, confident smiles.",
    icon: Stethoscope,
    accent: "#14b8a6",
  },
  {
    title: "Smile Design",
    description: "Aesthetic planning for shape, shade, symmetry, and facial harmony.",
    icon: WandSparkles,
    accent: "#8b5cf6",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, polishing, and contouring for a premium finish.",
    icon: Gem,
    accent: "#0ea5e9",
  },
];

const stats = [
  { value: 5000, suffix: "+", label: "Happy Patients", icon: Star },
  { value: 10, suffix: "+", label: "Years Experience", icon: Award },
  { value: 100, suffix: "%", label: "Advanced Equipment", icon: Microscope },
  { value: 24, suffix: "h", label: "Fast WhatsApp Response", icon: Timer },
];

const testimonials = [
  {
    name: "Priya S.",
    treatment: "Smile Design",
    text: "The clinic feels premium and calm. The doctor explained every step and my smile makeover looks natural.",
  },
  {
    name: "Rahul K.",
    treatment: "Root Canal",
    text: "I was nervous about pain, but the treatment was comfortable and the follow-up care was excellent.",
  },
  {
    name: "Anjali M.",
    treatment: "Teeth Whitening",
    text: "Beautiful clinic, very hygienic, and the results were visible immediately. Highly recommended.",
  },
];

const doctorHighlights = [
  "Founder and Chief Dentist",
  "Advanced cosmetic and restorative dentistry",
  "Painless root canal and preventive care focus",
  "Personalized treatment planning for every patient",
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

  useEffect(() => {
    if (!nodeRef.current) return;

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: nodeRef.current,
        start: "top 85%",
      },
      onUpdate: () => {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${Math.round(counter.value)}${suffix}`;
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, [suffix, value]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(54);

  return (
    <div className="comparison-card reveal">
      <div className="comparison-toolbar">
        <span>Realistic Smile Preview</span>
        <span>{position}% after</span>
      </div>
      <div className="comparison-viewport">
        <div className="comparison-image before">
          <div className="smile-art">
            <span />
            <strong>Before</strong>
          </div>
        </div>
        <div
          className="comparison-image after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="smile-art polished">
            <span />
            <strong>After</strong>
          </div>
        </div>
        <div className="comparison-handle" style={{ left: `${position}%` }}>
          <ChevronRight size={18} />
          <ChevronRight size={18} />
        </div>
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

function AppointmentForm() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "Smile Design" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          placeholder="+91 mobile number"
          onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
        />
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
        Book Premium Consultation
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default function LuxuryDentalExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
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

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(interval);
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
          <span className="brand-mark">D</span>
          <span>
            <strong>Dr. Dhanshree</strong>
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
                Luxury smile studio in Lohegaon, Pune
              </div>
              <h1>
                <span>Crafting Beautiful Smiles</span>
                <span>with Advanced Dental Care</span>
              </h1>
              <p>
                Premium dental treatments with modern technology, expert doctors, and personalized care.
              </p>
              <div className="hero-actions">
                <MagneticButton href={whatsappUrl()} variant="primary">
                  Book Appointment
                  <CalendarCheck size={18} />
                </MagneticButton>
                <MagneticButton href="#services" variant="secondary">
                  Explore Services
                  <ArrowRight size={18} />
                </MagneticButton>
              </div>
              <div className="hero-trust-row">
                <div className="rating-card">
                  <div>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <strong>4.9 patient rating</strong>
                  <span>Comfort-first dental care</span>
                </div>
                <div className="mini-stat">
                  <strong>5000+</strong>
                  <span>Smiles cared for</span>
                </div>
                <div className="mini-stat">
                  <strong>10+</strong>
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
              <div className="scene-shell">
                <DentalScene />
              </div>
              <motion.div
                className="floating-badge top"
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck size={18} />
                Sterile Digital Care
              </motion.div>
              <motion.div
                className="floating-badge bottom"
                animate={{ y: [0, 10, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={18} />
                Smile Design Ready
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-blob blob-left" data-parallax="-10" />
          <SectionHeading
            eyebrow="Signature Treatments"
            title="High-precision dental care with a luxury patient journey"
            description="Every service card is designed around trust, comfort, clarity, and conversion so visitors can choose care with confidence."
          />
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="service-card gsap-reveal"
                  key={service.title}
                  style={{ "--accent": service.accent } as React.CSSProperties}
                  whileHover={{ y: -12, rotateX: 4, rotateY: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
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
              <h2>Designed for people who want advanced care without anxiety.</h2>
              <p>
                From the first WhatsApp message to the final smile check, the experience is built to feel clear,
                calm, hygienic, and premium.
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
            eyebrow="Smile Transformations"
            title="Interactive before and after storytelling"
            description="A tactile comparison module gives patients an immediate sense of aesthetic progress and clinical polish."
          />
          <div className="results-grid">
            <BeforeAfterSlider />
            <div className="results-copy gsap-reveal">
              <h3>Confidence is built visually and clinically.</h3>
              <p>
                The transformation section is crafted to showcase whitening, alignment, and smile design results
                with a premium comparison interaction that works smoothly on touch devices.
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
              <div className="doctor-avatar">
                <span>Dr</span>
              </div>
              <div className="doctor-nameplate">
                <strong>Dr. Dhanshree Ghuge (Sanap)</strong>
                <span>Founder & Chief Dentist</span>
              </div>
            </motion.div>
            <div className="doctor-copy gsap-reveal">
              <span className="eyebrow">Meet Your Dentist</span>
              <h2>Cinematic care, precise treatment, and a smile-first philosophy.</h2>
              <p>
                Dr. Dhanshree's approach combines advanced dental technology with gentle communication, helping
                patients feel informed, comfortable, and confident before every treatment.
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

        <section className="section testimonials-section">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Premium glass testimonials that move with quiet confidence"
            description="Auto-sliding cards reinforce trust without overwhelming the visitor."
          />
          <div className="testimonial-stage">
            {testimonials.map((testimonial, index) => (
              <motion.article
                className="testimonial-card"
                key={testimonial.name}
                animate={{
                  opacity: testimonialIndex === index ? 1 : 0,
                  scale: testimonialIndex === index ? 1 : 0.95,
                  y: testimonialIndex === index ? 0 : 20,
                  pointerEvents: testimonialIndex === index ? "auto" : "none",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Quote size={42} />
                <div className="stars" aria-label="Five star rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={18} fill="currentColor" />
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.treatment}</span>
                </footer>
              </motion.article>
            ))}
          </div>
          <div className="testimonial-dots" aria-label="Testimonial controls">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={testimonialIndex === index ? "active" : ""}
                onClick={() => setTestimonialIndex(index)}
              />
            ))}
          </div>
        </section>

        <section id="appointment" className="section appointment-section">
          <div className="appointment-shell">
            <div className="appointment-copy reveal">
              <span className="eyebrow">Book Your Visit</span>
              <h2>Your new smile can start with a 30-second WhatsApp booking.</h2>
              <p>
                Choose your treatment, share your phone number, and the clinic team can confirm your appointment
                quickly.
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
              <span className="brand-mark">D</span>
              <span>
                <strong>Dr. Dhanshree</strong>
                <small>Dental Clinic</small>
              </span>
            </a>
            <p>
              Premium dental care in Lohegaon, Pune with modern treatment planning, hygienic workflow, and a
              patient-first experience.
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/drdhanshree_dentalclinic2025/" aria-label="Instagram">
                <span>Ig</span>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <span>Fb</span>
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
          <span>Premium dental care for beautiful smiles.</span>
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
