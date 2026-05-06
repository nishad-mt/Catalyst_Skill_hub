import { useState, useEffect } from 'react';
import { navLinks } from '../../data/siteData';
import styles from './Navbar.module.css';
import { FiSearch } from 'react-icons/fi';

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          {/* Logo removed as per request */}

          {/* SEARCH — hidden on mobile, shown ≥ 993px */}
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>

            {/* LINKS — desktop only */}
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA — desktop only */}
            <a href="#contact" className={styles.cta}>
              Talk With Expert
            </a>

            {/* HAMBURGER — mobile/tablet only */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </div>
      </nav>

      {/* BACKDROP — tap outside to close */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}

      {/* MOBILE MENU — slides in from right */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Mobile search bar */}
        <div className={styles.mobileSearchBox}>
          <FiSearch className={styles.mobileSearchIcon} />
          <input
            type="text"
            placeholder="What do you want to learn?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.mobileSearchInput}
            aria-label="Search"
          />
        </div>

        <div className={styles.mobileDivider} />

        {/* Nav links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={styles.mobileLink}
          >
            {link.label}
          </a>
        ))}

        {/* CTA */}
        <a href="#contact" onClick={closeMenu} className={styles.mobileCta}>
          Talk With Expert
        </a>
      </div>
    </>
  );
}