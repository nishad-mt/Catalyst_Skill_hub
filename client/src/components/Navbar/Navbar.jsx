import { useState, useEffect } from 'react';
import { navLinks } from '../../data/siteData';
import styles from './Navbar.module.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import logo from '../../assets/logo.png';

export default function Navbar({ searchQuery, setSearchQuery, navigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { 
      document.body.style.overflow = originalStyle === 'hidden' ? '' : originalStyle; 
    };
  }, [menuOpen]);


  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    
    // If not on courses page and user starts typing, redirect to courses page
    if (val.trim() !== '' && currentPage !== 'courses' && currentPage !== 'home') {
      navigate('/courses');
    }
  };

  const showTopBar = ['home', 'courses', 'course-detail', 'center-detail'].includes(currentPage);

  return (
    <>
    {showTopBar && (
      <div
        className={`${styles.topBar} ${
          scrolled ? styles.topBarHidden : ''
        }`}
      >
        Hurry Up! New Batch Starts June 6th. Limited Seats Available.
      </div>
    )}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${!showTopBar ? styles.navNoTopBar : ''}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <a
            href="/"
            className={styles.logoLink}
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
          >
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>

          {/* SEARCH — hidden on mobile, shown ≥ 680px */}
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
              aria-label="Search"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>

            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.label} className={link.subLinks ? styles.hasDropdown : ''}>
                  <a 
                    href={link.href} 
                    className={styles.link}
                    onClick={(e) => {
                      if (link.subLinks) {
                        e.preventDefault();
                      } else if (link.href.startsWith('/')) {
                        e.preventDefault();
                        navigate(link.href);
                      }
                    }}
                  >
                    {link.label}
                    {link.subLinks && <FiChevronDown className={styles.chevron} />}
                  </a>

                  {link.subLinks && (
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownInner}>
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className={styles.dropdownItem}
                            onClick={(e) => {
                              if (sub.href.startsWith('/')) {
                                e.preventDefault();
                                navigate(sub.href);
                              }
                            }}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>


            {/* CTA — desktop only */}
            <button 
              className={styles.cta}
              onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }))}
            >
              Talk With Expert
            </button>

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
            onChange={handleSearchChange}
            className={styles.mobileSearchInput}
            aria-label="Search"
          />
        </div>

        <div className={styles.mobileDivider} />

        {navLinks.map((link) => (
          <div key={link.label} className={styles.mobileLinkContainer}>
            {link.subLinks ? (
              <>
                <button
                  onClick={() => toggleMobileDropdown(link.label)}
                  className={`${styles.mobileLink} ${styles.mobileDropdownBtn} ${activeDropdown === link.label ? styles.active : ''}`}
                >
                  {link.label}
                  <FiChevronDown className={`${styles.mobileChevron} ${activeDropdown === link.label ? styles.rotate : ''}`} />
                </button>
                <div className={`${styles.mobileSubLinks} ${activeDropdown === link.label ? styles.show : ''}`}>
                  {link.subLinks.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => {
                        closeMenu();
                        if (sub.href.startsWith('/')) {
                          e.preventDefault();
                          navigate(sub.href);
                        }
                      }}
                      className={styles.mobileSubLink}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a
                href={link.href}
                onClick={(e) => {
                  closeMenu();
                  if (link.href.startsWith('/')) {
                    e.preventDefault();
                    navigate(link.href);
                  }
                }}
                className={styles.mobileLink}
              >
                {link.label}
              </a>
            )}
          </div>
        ))}


        {/* CTA */}
        <button 
          onClick={() => {
            closeMenu();
            window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }));
          }} 
          className={styles.mobileCta}
        >
          Talk With Expert
        </button>
      </div>
    </>
  );
}