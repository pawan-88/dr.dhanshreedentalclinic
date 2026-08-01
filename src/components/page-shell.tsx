import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import {
  doctorName,
  googleReviewsUrl,
  pageLinks,
  phoneDisplay,
  phoneNumber,
  whatsappUrl,
} from "@/lib/site-data";
import { servicePages } from "@/lib/service-pages";

/**
 * Shared shell for inner pages (/services, /about-dr-dhanshree, /contact, /faq).
 * Server component — no client JS beyond what the children bring.
 */
export default function PageShell({
  children,
  activePath,
}: {
  children: React.ReactNode;
  activePath?: string;
}) {
  return (
    <div className="luxury-site service-page">
      <div className="aurora aurora-a" aria-hidden="true" />
      <div className="aurora aurora-b" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />

      <header className="floating-nav">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <img
              src="/images/logo.jpeg"
              alt=""
              width={44}
              height={44}
              decoding="async"
            />
          </span>
          <span>
            <strong>Dr. Dhanshree&apos;s</strong>
            <small>Dental Clinic</small>
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={activePath === link.href ? "active" : ""}
              aria-current={activePath === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="magnetic-btn primary nav-cta" href={whatsappUrl()}>
          Book Visit
        </a>
      </header>

      <main>{children}</main>

      <footer className="premium-footer">
        <div className="footer-glow" />
        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-mark">
                <img
                  src="/images/logo.jpeg"
                  alt=""
                  width={44}
                  height={44}
                  decoding="async"
                />
              </span>
              <span>
                <strong>Dr. Dhanshree&apos;s</strong>
                <small>Dental Clinic</small>
              </span>
            </Link>
            <p>
              Trusted dental care in Lohegaon, Pune—modern treatments, hygienic
              workflow, and compassionate care with {doctorName}.
            </p>
          </div>

          <div>
            <h3>Pages</h3>
            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <h3>Treatments</h3>
            {servicePages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                {page.navLabel}
              </Link>
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
            <a href={`tel:${phoneNumber}`}>{phoneDisplay}</a>
            <a href="mailto:dr.dhanshreedentalclinic@gmail.com">
              dr.dhanshreedentalclinic@gmail.com
            </a>
          </div>

          <div>
            <h3>Find Us</h3>
            <address className="footer-address">
              <p className="footer-line">
                <MapPin size={16} />
                <span>
                  Dr. Dhanshree&apos;s Dental Clinic
                  <br />
                  Shop No. 2, Muktai Plaza, Wadgaon Shinde Road,
                  <br />
                  Opp. Eastern Royale Society, Pathare Wasti,
                  <br />
                  Lohegaon, Pune, Maharashtra 411047
                </span>
              </p>
            </address>
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
              Get directions on Google Maps
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Dr. Dhanshree&apos;s Dental Clinic. All rights reserved.
          </span>
          <span>Lohegaon, Pune · Open 10 AM – 9 PM daily</span>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Dr. Dhanshree's Dental Clinic"
        >
          <Phone size={20} />
        </a>
        <a
          href={whatsappUrl()}
          aria-label="WhatsApp Dr. Dhanshree's Dental Clinic"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
}
