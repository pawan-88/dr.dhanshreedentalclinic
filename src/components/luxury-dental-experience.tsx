"use client";

import dynamic from "next/dynamic";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  doctorHighlights,
  doctorName,
  faqs,
  googleMapsEmbedUrl,
  googleReviewsUrl,
  navLinks,
  phoneNumber,
  services,
  stats,
  whatsappUrl,
} from "@/lib/site-data";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const DentalScene = dynamic(() => import("./premium-dental-scene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loader" aria-label="Loading interactive dental scene">
      <span />
      <p>Preparing your smile preview</p>
    </div>
  ),
});

const marqueeItems = [
  "Smile Design",
  "Dental Implants",
  "Teeth Whitening",
  "Root Canal",
  "Braces & Aligners",
  "Cosmetic Dentistry",
];

function CtaLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <a href={href} className={`magnetic-btn ${variant} ${className}`}>
      {children}
    </a>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  center = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading scroll-reveal ${center ? "center" : ""}`}>
      <span className="eyebrow" data-index={index}>
        {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function MarqueeStrip() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) =>
          marqueeItems.map((item, index) => (
            <span className="marquee-item" key={`${copy}-${item}`}>
              {index % 2 === 0 ? <em>{item}</em> : item}
              <span className="sep">✦</span>
            </span>
          )),
        )}
      </div>
    </div>
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
    <div className="comparison-card scroll-reveal">
      <div className="comparison-toolbar">
        <span>Teeth Whitening Result</span>
        <span>Drag to compare</span>
      </div>
      <div className="comparison-viewport">
        <div className="comparison-image before">
          <img src="/images/Whitening.jpg" alt="Before teeth whitening treatment" />
        </div>
        <div
          className="comparison-image after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src="/images/Whitening.jpg" alt="After teeth whitening treatment" />
        </div>
        <div className="comparison-handle" style={{ left: `${position}%` }}>
          <ChevronRight size={16} />
          <ChevronRight size={16} />
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
      <div className="section-inner">
        <SectionHeading
          index="06"
          eyebrow="Common Questions"
          title="Answers before your first visit"
          description="Quick answers to the questions Lohegaon patients ask us most often about treatments, timings, and booking."
          center
        />
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                className={`faq-item scroll-reveal ${isOpen ? "open" : ""}`}
                key={item.question}
              >
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
    const normalizedPhone =
      digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;

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
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
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
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const finePointer = useMediaQuery("(pointer: fine)");
  const show3DScene = useMediaQuery("(min-width: 768px)") && !reducedMotion;

  useScrollReveal(reducedMotion);

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
      className="luxury-site"
      onPointerMove={
        finePointer
          ? (event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width;
              const y = (event.clientY - rect.top) / rect.height;
              event.currentTarget.style.setProperty("--cursor-x", `${x * 100}%`);
              event.currentTarget.style.setProperty("--cursor-y", `${y * 100}%`);
            }
          : undefined
      }
    >
      <div className="aurora aurora-a" aria-hidden="true" />
      <div className="aurora aurora-b" aria-hidden="true" />
      <div className="aurora aurora-c" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />
      {finePointer ? <div className="cursor-aura" aria-hidden="true" /> : null}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <header className="floating-nav">
        <a className="brand" href="#home" aria-label="Dr. Dhanshree's Dental Clinic home">
          <span className="brand-mark">
            <img src="/images/logo.jpeg" alt="" width={44} height={44} decoding="async" />
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

        <CtaLink href={whatsappUrl()} variant="primary" className="nav-cta">
          Book Visit
        </CtaLink>

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
        animate={
          menuOpen
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <motion.div
          className="mobile-menu-panel"
          initial={false}
          animate={menuOpen ? { y: 0, scale: 1 } : { y: -16, scale: 0.96 }}
          transition={{ duration: 0.28 }}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
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
        <section id="home" className="hero-section">
          <div className="hero-halo" aria-hidden="true" />

          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-kicker">
                <Sparkles size={15} />
                Lohegaon, Pune
              </div>
              <h1>
                <span className="line">Where every</span>
                <span className="line word-gradient">smile becomes</span>
                <span className="line">
                  a <span className="word-italic">masterpiece.</span>
                </span>
              </h1>
              <p>
                Modern treatments, a hygienic clinic environment, and {doctorName} guiding
                every step—from checkups and root canals to smile design and cosmetic
                dentistry.
              </p>
              <div className="hero-actions">
                <CtaLink href={whatsappUrl()} variant="primary">
                  Book Appointment
                  <CalendarCheck size={18} />
                </CtaLink>
                <CtaLink href={googleReviewsUrl} variant="secondary">
                  Google Reviews
                  <ExternalLink size={18} />
                </CtaLink>
              </div>
              <div className="hero-trust-row">
                <a
                  className="rating-card"
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
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
              <div className="scene-shell">
                {show3DScene ? (
                  <DentalScene />
                ) : (
                  <div className="scene-fallback" aria-hidden="true">
                    <div className="scene-fallback-tooth" />
                  </div>
                )}
              </div>
              <motion.div
                className="floating-badge top"
                animate={reducedMotion ? undefined : { y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck size={18} />
                Painless Care
              </motion.div>
              <motion.div
                className="floating-badge bottom"
                animate={reducedMotion ? undefined : { y: [0, 10, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={18} />
                Smile Design Ready
              </motion.div>
            </motion.div>
          </div>

          <div className="hero-scroll-hint">Scroll</div>
        </section>

        <MarqueeStrip />

        <section id="services" className="section services-section">
          <div className="section-inner">
            <SectionHeading
              index="01"
              eyebrow="Our Treatments"
              title="Complete dental care for every stage of your smile"
              description="From preventive checkups to advanced cosmetic work, each treatment is explained clearly so you know what to expect before you visit."
            />
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    className="service-card scroll-reveal"
                    key={service.title}
                    style={{ "--accent": service.accent } as React.CSSProperties}
                  >
                    <div className="service-photo">
                      <img
                        src={service.image}
                        alt={`${service.title} at Dr. Dhanshree's Dental Clinic`}
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={360}
                      />
                      <span className="service-index">0{index + 1}</span>
                    </div>
                    <div className="service-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href={whatsappUrl(`Hello, I want to know more about ${service.title}.`)}>
                      Book {service.title}
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-us" className="section why-section">
          <div className="section-inner">
            <div className="why-panel">
              <div className="why-copy scroll-reveal">
                <span className="eyebrow" data-index="02">
                  Why Choose Us
                </span>
                <h2>Advanced care with a calm, patient-first approach.</h2>
                <p>
                  Whether it is your first visit or a complex treatment plan, we focus on
                  clear communication, gentle chairside care, and a clean clinic experience
                  you can trust.
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
                    <div className="stat-card scroll-reveal" key={stat.label}>
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
          </div>
        </section>

        <section id="results" className="section results-section">
          <div className="section-inner">
            <SectionHeading
              index="03"
              eyebrow="Smile Results"
              title="See the difference professional dental care can make"
              description="Real treatment outcomes for whitening, alignment, and smile design—shown clearly so you can understand the kind of results we aim for."
            />
            <div className="results-grid">
              <BeforeAfterSlider />
              <div className="results-copy scroll-reveal">
                <h3>Natural-looking results, planned with care.</h3>
                <p>
                  Every cosmetic or restorative treatment starts with an honest conversation
                  about what will suit your teeth, face, and budget. We focus on healthy,
                  natural smiles—not exaggerated changes.
                </p>
                <div className="treatment-pills">
                  <span>Whitening</span>
                  <span>Veneers</span>
                  <span>Aligners</span>
                  <span>Cosmetic Bonding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="doctor" className="section doctor-section">
          <div className="section-inner">
            <div className="doctor-card">
              <div className="doctor-portrait scroll-reveal">
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
              </div>
              <div className="doctor-copy scroll-reveal">
                <span className="eyebrow" data-index="04">
                  Meet Your Dentist
                </span>
                <h2>Gentle care, precise treatment, and a smile-first philosophy.</h2>
                <p>
                  {doctorName} combines modern dental technology with clear, compassionate
                  communication—helping patients feel informed, comfortable, and confident
                  before every procedure.
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
          </div>
        </section>

        <section id="reviews" className="section testimonials-section">
          <div className="section-inner">
            <SectionHeading
              index="05"
              eyebrow="Find Us"
              title="Visit us on Google Maps"
              description="See our Lohegaon clinic location and read original patient reviews directly on Google."
              center
            />
            <div className="reviews-map scroll-reveal">
              <iframe
                title="Dr. Dhanshree's Dental Clinic on Google Maps"
                src={googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="reviews-cta">
              <CtaLink href={googleReviewsUrl} variant="secondary">
                Read Google Reviews
                <ExternalLink size={18} />
              </CtaLink>
            </div>
          </div>
        </section>

        <FaqSection />

        <section id="appointment" className="section appointment-section">
          <div className="section-inner">
            <div className="appointment-shell">
              <div className="appointment-copy scroll-reveal">
                <span className="eyebrow" data-index="07">
                  Book Your Visit
                </span>
                <h2>Book your dental visit in under a minute on WhatsApp.</h2>
                <p>
                  Share your name, phone number, and treatment. Our team will confirm your
                  appointment quickly—often the same day.
                </p>
                <div className="quick-actions">
                  <CtaLink href={whatsappUrl()} variant="primary">
                    WhatsApp Now
                    <MessageCircle size={18} />
                  </CtaLink>
                  <CtaLink href={`tel:${phoneNumber}`} variant="ghost">
                    Call Now
                    <Phone size={18} />
                  </CtaLink>
                </div>
              </div>
              <div className="form-card scroll-reveal">
                <AppointmentForm />
              </div>
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
                <img src="/images/logo.jpeg" alt="" width={44} height={44} decoding="async" />
              </span>
              <span>
                <strong>Dr. Dhanshree's</strong>
                <small>Dental Clinic</small>
              </span>
            </a>
            <p>
              Trusted dental care in Lohegaon, Pune—modern treatments, hygienic workflow,
              and compassionate care with {doctorName}.
            </p>
            <div className="socials">
              <a
                href="https://www.instagram.com/drdhanshree_dentalclinic2025/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
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
            <a href="mailto:dr.dhanshreedentalclinic@gmail.com">
              dr.dhanshreedentalclinic@gmail.com
            </a>
          </div>

          <div>
            <h3>Find Us</h3>
            <p className="footer-line">
              <MapPin size={16} />
              Shop No. 2, Muktai Plaza, Wadgaon Shinde Road, Lohegaon, Pune 411047
            </p>
            <iframe
              title="Dr. Dhanshree's Dental Clinic location"
              src={googleMapsEmbedUrl}
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
