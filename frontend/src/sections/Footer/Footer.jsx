// src/sections/Footer/Footer.jsx
import { navLinks } from '../../data/siteData';
import styles from './Footer.module.css';

const quickLinks = navLinks;

const contactLinks = [
  { label: '📞 +91 98765 43210', href: 'tel:+919876543210' },
  { label: '✉️ info@catalysttechhub.in', href: 'mailto:info@catalysttechhub.in' },
  { label: '📍 Kozhikode, Kerala', href: '#centers' },
  { label: '⏰ Mon–Sat, 9am–6pm', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoDot} />
              Catalyst Tech Hub
            </a>
            <p className={styles.tagline}>
              Empowering the next generation of tech professionals in Kerala and
              beyond. Your career transformation starts here.
            </p>
            <a href="#contact" className={styles.footerCta}>
              Contact Us →
            </a>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colLinks}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.colLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.colLinks}>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.colLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Catalyst Tech Hub. All rights reserved.</span>
          <span>Built with ❤️ in Kerala</span>
        </div>

      </div>
    </footer>
  );
}
