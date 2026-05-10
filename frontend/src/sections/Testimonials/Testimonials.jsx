import React from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '../../data/siteData';

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#cc0000" stroke="#cc0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const triple = (arr) => [...arr, ...arr, ...arr];

  const renderCard = (item, suffix) => {
    if (item.isVideo) {
      return (
        <div key={`${item.id}-${suffix}`} className={styles.videoCard}>
          <PlayIcon />
          <span className={styles.videoText}>Watch Success Story</span>
        </div>
      );
    }
    return (
      <div key={`${item.id}-${suffix}`} className={styles.card}>
        <div className={styles.cardHeader}>
          {item.image ? (
            <img src={item.image} alt={item.name} className={styles.avatar} />
          ) : (
            <div className={styles.avatarPlaceholder}>{item.initials}</div>
          )}
          <div className={styles.userInfo}>
            <h4 className={styles.userName}>{item.name}</h4>
            <p className={styles.userRole}>{item.role}</p>
          </div>
        </div>
        <p className={styles.cardText}>{item.text}</p>
      </div>
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Our Alumni Says</h2>
      </div>

      <div className={styles.marqueeContainer}>
        {isMobile ? (
          /* Mobile: Single row with all items */
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {triple(testimonials).map((item, idx) => renderCard(item, `mob-${idx}`))}
            </div>
          </div>
        ) : (
          /* Desktop/Tablet: Dual rows */
          <>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {triple(testimonials.slice(0, 4)).map((item, idx) => renderCard(item, `r1-${idx}`))}
              </div>
            </div>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {triple(testimonials.slice(4, 8)).map((item, idx) => renderCard(item, `r2-${idx}`))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
