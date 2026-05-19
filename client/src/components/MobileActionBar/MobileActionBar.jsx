import { useState, useEffect } from 'react';
import styles from './MobileActionBar.module.css';

/**
 * MobileActionBar - A sticky action bar that appears on mobile after scrolling.
 * Provides quick access to "View Courses" and "Contact".
 */
export default function MobileActionBar({ navigate, currentPage }) {
  const [isVisible, setIsVisible] = useState(false);
  const isCourseDetail = currentPage === 'course-detail';

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const scrolled = window.scrollY > 500;
      
      // Hide if we've reached the very bottom
      const nearBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;
      
      setIsVisible(scrolled && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show on mobile viewports
  return (
    <div className={`${styles.actionBar} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        {isCourseDetail ? (
          <button 
            className={styles.btnPrimary}
            onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'enroll' } }))}
          >
            Enroll Now
          </button>
        ) : (
          <button 
            className={styles.btnPrimary}
            onClick={() => navigate('/courses')}
          >
            View Courses
          </button>
        )}
        
        <button 
          className={styles.btnPrimary}
          onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }))}
        >
          Contact Now
        </button>
      </div>
    </div>
  );
}
