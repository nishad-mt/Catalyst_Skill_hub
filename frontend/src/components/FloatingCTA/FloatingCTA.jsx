// src/components/FloatingCTA/FloatingCTA.jsx
import { useState, useEffect } from 'react';
import styles from './FloatingCTA.module.css';

/**
 * Floating "Contact Us" button — visible on mobile after scrolling 300px.
 * Hides when the user is near the #contact section.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contactEl = document.getElementById('contact');
      const contactTop = contactEl ? contactEl.getBoundingClientRect().top : Infinity;
      setVisible(window.scrollY > 300 && contactTop > 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      aria-label="Contact Us"
    >
      📞 Contact Us
    </a>
  );
}
