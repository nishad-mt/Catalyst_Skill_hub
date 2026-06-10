// src/sections/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/techhub.png';


export default function Footer({ navigate }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <a
                href="/"
                className={styles.logoLink}
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
              >
                <img src={logo} alt="Logo" className={styles.logo} />
              </a>
            </div>
            <p className={styles.tagline}>
              Top-rated Tech institute in India guiding for a future in high-demand
            </p>
            
            <p className={styles.headOffice}>
              Head Office: 
            </p>
            <p className={styles.address}>
              Calicut-Happy Tower, Bypass Junction, mankave, Kozhikode, kerala 673007
            </p>
           
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://wa.me/918157860663" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className={styles.linkCols}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Courses</h4>
              <ul className={styles.colLinks}>
                <li><a href="/course/ethical-hacking" className={styles.colLink} onClick={(e) => { e.preventDefault(); navigate('/course/ethical-hacking'); }}>Ethical Hacking</a></li>
                <li><a href="/course/python-programming" className={styles.colLink} onClick={(e) => { e.preventDefault(); navigate('/course/python-programming'); }}>Python Developer</a></li>
                <li><a href="/course/data-science-ai" className={styles.colLink} onClick={(e) => { e.preventDefault(); navigate('/course/data-science-ai'); }}>Data Science</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>About Catalyst</h4>
              <ul className={styles.colLinks}>
                <li><a href="#" className={styles.colLink}>Life@catalyst</a></li>
                <li><a href="/#stories" className={styles.colLink}>Success Stories</a></li>
                <li><a href="/about" className={styles.colLink} onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About Catalyst</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Resources</h4>
              <ul className={styles.colLinks}>
                <li><a href="/life" className={styles.colLink} onClick={(e)=>{e.preventDefault();navigate('/life')}}>Life @ Catalyst</a></li>
                <li><a href="/blogs" className={styles.colLink} onClick={(e)=>{e.preventDefault();navigate('/blogs')}}>Blogs</a></li>
                <li><a href="#contact" className={styles.colLink}>Contact</a></li>
              </ul>
            </div>
            <div className={styles.info}>
              <h4 className={styles.infoTitle}>Contact us</h4>
              <ul className={styles.infoLinks}>
                <li>
                  <a href="mailto:hello@catalysthub.in" className={styles.infoLink}>
                    <span className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                    hello@catalysthub.in
                  </a>
                </li>
                <li>
                  <a href="tel:+918157860663" className={styles.infoLink}>
                    <span className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </span>
                    +91 8157860663
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918157860663" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                    <span className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </span>
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <h4 className={styles.campusTitle}>Campus</h4>
          <div className={styles.campusList}>
            <a href="/center/calicut" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/calicut'); }}>Calicut</a>
            <span className={styles.divider}>|</span>
            <a href="/center/kannur" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/kannur'); }}>Kannur</a>
            <span className={styles.divider}>|</span>
            <a href="/center/thrissur" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/thrissur'); }}>Thrissur</a>
            <span className={styles.divider}>|</span>
            <a href="/center/manjeri" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/manjeri'); }}>Manjeri</a>
            <span className={styles.divider}>|</span>
            <a href="/center/vadakara" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/vadakara'); }}>Vadakara</a>
            <span className={styles.divider}>|</span>
            <a href="/center/perinthalmanna" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/perinthalmanna'); }}>Perinthelmanna</a>
            <span className={styles.divider}>|</span>
            <a href="/center/edappal" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/edappal'); }}>Edappal</a>
            <span className={styles.divider}>|</span>
            <a href="/center/kottakkal" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/kottakkal'); }}>Kottakkal</a>
            <span className={styles.divider}>|</span>
            <a href="/center/ernakulam" className={styles.campusLink} onClick={(e) => { e.preventDefault(); navigate('/center/ernakulam'); }}>Ernakulam</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

