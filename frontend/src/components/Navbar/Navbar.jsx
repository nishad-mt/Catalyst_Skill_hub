// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { navLinks } from '../../data/siteData';
import styles from './Navbar.module.css';
import logo from '../../assets/Catalyst_logo.png'
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState(''); // ✅ ADD THIS

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

          {/* ✅ Search Bar */}
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />

            <input
              type="text"
              placeholder="What do you want to learn?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {/* Links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className={styles.cta}>
            Talk With Expert
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
