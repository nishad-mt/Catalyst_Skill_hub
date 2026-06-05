import { useState, useEffect, useRef } from 'react';
import { navLinks, blogs, centers } from '../../data/siteData';
import styles from './Navbar.module.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import techhub from '../../assets/techhub.png';
import { courses } from '../../data/courses';

// Build a flat list of searchable suggestion objects
const buildSuggestions = () => {
  const list = [];
  
  courses.forEach((c) => {
    list.push({ 
      label: c.title, 
      href: `/course/${c.slug}`, 
      type: 'Course',
      keywords: [c.title, c.desc, ...(c.tools?.map(t=>t.name) || []), ...(c.whatYouWillLearn?.map(w=>w.title) || [])].join(' ').toLowerCase()
    });
  });

  blogs.forEach((b) => {
    list.push({ 
      label: b.title, 
      href: `/blogs/${b.id}`, 
      type: 'Blog',
      keywords: [b.title, b.description].join(' ').toLowerCase()
    });
  });

  centers.forEach((center) => {
    list.push({ 
      label: center.name + " Center", 
      href: `/center/${center.slug}`, 
      type: 'Center',
      keywords: [center.name, center.fullName, center.desc, center.address].join(' ').toLowerCase()
    });
  });

  navLinks.forEach((link) => {
    if (link.href !== "#" && !link.href.startsWith("/#")) {
      list.push({ 
        label: link.label, 
        href: link.href, 
        type: 'Page',
        keywords: link.label.toLowerCase()
      });
    }
    if (link.subLinks) {
      link.subLinks.forEach((sub) => {
        list.push({ 
          label: sub.label, 
          href: sub.href, 
          type: 'Page',
          keywords: sub.label.toLowerCase()
        });
      });
    }
  });

  return list;
};

const ALL_SUGGESTIONS = buildSuggestions();
const DEFAULT_SUGGESTIONS = courses.slice(0, 5).map(c => ({
  label: c.title,
  href: `/course/${c.slug}`,
  type: 'Course'
}));

export default function Navbar({ searchQuery, setSearchQuery, navigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuDirection, setMenuDirection] = useState('left'); // 'left' or 'right'
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Autocomplete state
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [mobileSuggestions, setMobileSuggestions] = useState([]);
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false);
  const [activeMobileSuggestion, setActiveMobileSuggestion] = useState(-1);
  const desktopBlurTimer = useRef(null);
  const mobileBlurTimer = useRef(null);

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

  const getSuggestions = (val) => {
    if (!val.trim()) return [];
    const lower = val.toLowerCase();
    
    const seen = new Set();
    const results = [];
    
    for (const item of ALL_SUGGESTIONS) {
      if (item.keywords.includes(lower) && !seen.has(item.label)) {
        seen.add(item.label);
        results.push(item);
        if (results.length >= 7) break;
      }
    }
    return results;
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (!val.trim()) {
      setSuggestions(DEFAULT_SUGGESTIONS);
      setShowSuggestions(true);
    } else {
      const filtered = getSuggestions(val);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    }
    setActiveSuggestion(-1);
  };

  const handleDesktopKeyDown = (e) => {
    if (!showSuggestions) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && activeSuggestion >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeSuggestion]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (item) => {
    setSearchQuery('');
    setShowSuggestions(false);
    setSuggestions([]);
    setActiveSuggestion(-1);
    navigate(item.href);
  };

  const handleDesktopFocus = () => {
    clearTimeout(desktopBlurTimer.current);
    if (!searchQuery.trim()) {
      setSuggestions(DEFAULT_SUGGESTIONS);
      setShowSuggestions(true);
    } else if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleMobileSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (!val.trim()) {
      setMobileSuggestions(DEFAULT_SUGGESTIONS);
      setShowMobileSuggestions(true);
    } else {
      const filtered = getSuggestions(val);
      setMobileSuggestions(filtered);
      setShowMobileSuggestions(filtered.length > 0);
    }
    setActiveMobileSuggestion(-1);
  };

  const handleMobileKeyDown = (e) => {
    if (!showMobileSuggestions) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveMobileSuggestion((prev) => Math.min(prev + 1, mobileSuggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveMobileSuggestion((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && activeMobileSuggestion >= 0) {
      e.preventDefault();
      selectMobileSuggestion(mobileSuggestions[activeMobileSuggestion]);
    } else if (e.key === 'Escape') {
      setShowMobileSuggestions(false);
    }
  };

  const selectMobileSuggestion = (item) => {
    setSearchQuery('');
    setShowMobileSuggestions(false);
    setMobileSuggestions([]);
    setActiveMobileSuggestion(-1);
    closeMenu();
    navigate(item.href);
  };

  const handleMobileFocus = () => {
    clearTimeout(mobileBlurTimer.current);
    if (!searchQuery.trim()) {
      setMobileSuggestions(DEFAULT_SUGGESTIONS);
      setShowMobileSuggestions(true);
    } else if (mobileSuggestions.length > 0) {
      setShowMobileSuggestions(true);
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

          {/* HAMBURGER — mobile/tablet only */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => {
              setMenuDirection('left');
              setMenuOpen((prev) => !prev);
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Logo */}
          <a
            href="/"
            className={styles.logoLink}
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
          >
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>

          {/* SEARCH — hidden on mobile, shown ≥ 680px */}
          <div className={styles.searchBox} style={{ position: 'relative' }}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleDesktopKeyDown}
              onFocus={handleDesktopFocus}
              onBlur={() => {
                desktopBlurTimer.current = setTimeout(() => setShowSuggestions(false), 150);
              }}
              className={styles.searchInput}
              aria-label="Search"
              autoComplete="off"
            />
            {showSuggestions && (
              <div className={`${styles.suggestionList} ${searchQuery.trim() ? styles.suggestionListTyped : ''}`} role="listbox">
                {!searchQuery.trim() && <div className={styles.trendSearchHeader}>Trend Search</div>}
                <ul className={!searchQuery.trim() ? styles.suggestionGrid : ''} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {suggestions.map((s, i) => (
                    <li
                      key={`${s.label}-${i}`}
                      role="option"
                      aria-selected={i === activeSuggestion}
                      className={`${searchQuery.trim() ? styles.suggestionItemTyped : styles.suggestionItem} ${
                        i === activeSuggestion ? styles.suggestionActive : ''
                      }`}
                      onMouseDown={() => selectSuggestion(s)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FiSearch className={styles.suggestionIcon} />
                        <span>{s.label}</span>
                      </div>
                      {s.type !== 'Course' && (
                        <span className={styles.suggestionTypeBadge}>{s.type}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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

            {/* Mobile Search Toggle Icon */}
            <button
              className={styles.mobileSearchToggle}
              onClick={() => {
                setMenuDirection('right');
                setMenuOpen(true);
                setTimeout(() => {
                  const input = document.querySelector(`.${styles.mobileSearchInput}`);
                  if (input) input.focus();
                }, 300);
              }}
              aria-label="Search"
            >
              <FiSearch />
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
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''} ${
          menuDirection === 'left' ? styles.slideLeft : styles.slideRight
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Techhub logo at top */}
        <div className={styles.mobilePanelHeader}>
          <img src={techhub} alt="TechHub" className={styles.mobilePanelLogo} />
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {menuDirection === 'right' ? (
          /* Mobile search bar */
          <div className={styles.mobileSearchBox}>
            <FiSearch className={styles.mobileSearchIcon} />
            <input
              type="text"
              placeholder="What do you want to learn?"
              value={searchQuery}
              onChange={handleMobileSearchChange}
              onKeyDown={handleMobileKeyDown}
              onFocus={handleMobileFocus}
              onBlur={() => {
                mobileBlurTimer.current = setTimeout(() => setShowMobileSuggestions(false), 150);
              }}
              className={styles.mobileSearchInput}
              aria-label="Search"
              autoComplete="off"
            />
            {showMobileSuggestions && (
              <div className={styles.mobileSuggestionList} role="listbox">
                {!searchQuery.trim() && <div className={styles.trendSearchHeader} style={{ color: '#94a3b8' }}>Trend Search</div>}
                <ul className={!searchQuery.trim() ? styles.suggestionGrid : ''} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {mobileSuggestions.map((s, i) => (
                    <li
                      key={`${s.label}-${i}`}
                      role="option"
                      aria-selected={i === activeMobileSuggestion}
                      className={`${styles.mobileSuggestionItem} ${
                        i === activeMobileSuggestion ? styles.mobileSuggestionActive : ''
                      }`}
                      onMouseDown={() => {
                        selectMobileSuggestion(s);
                      }}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FiSearch className={styles.mobileSuggestionIcon} style={{ marginRight: '8px' }} />
                        <span>{s.label}</span>
                      </div>
                      {s.type !== 'Course' && (
                        <span style={{ fontSize: '0.75rem', color: '#ccc', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>{s.type}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          /* Mobile navigation links */
          <>
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
          </>
        )}
      </div>
    </>
  );
}