// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { navLinks } from '../../data/siteData';
import styles from './Navbar.module.css';
import logo from '../../assets/Catalyst_logo.png'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#home" className={styles.logo}>
            <div className={styles.logo}>
            <img src={logo} alt="Catalyst Logo" />
          </div>
            Tech Hub
          </a>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#contact" className={styles.cta}>
            Contact Us
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu} className={styles.mobileLink}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className={styles.mobileCta}>
          Contact Us
        </a>
      </div>
    </>
  );
}
