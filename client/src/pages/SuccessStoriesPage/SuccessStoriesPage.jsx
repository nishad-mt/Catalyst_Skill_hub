import React, { useEffect } from 'react';
import styles from './SuccessStoriesPage.module.css';
import { alumni } from '../../data/siteData';

const SuccessStoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenModal = () => {
    window.dispatchEvent(new CustomEvent('openModal', { 
      detail: { type: 'callback' } 
    }));
  };

  const quotes = [
    "The hands-on projects helped me crack the technical interview with ease. The mentorship was invaluable.",
    "Transitioning into tech seemed daunting, but the structured curriculum made it possible.",
    "I learned more in 4 months here than in my entire college degree. Highly recommended!",
    "The placement assistance team went above and beyond to get my resume in front of top recruiters.",
    "Building real-world applications gave me the confidence to excel in my new role.",
  ];

  return (
    <div className={styles.page}>
      {/* Decorative Background Elements */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} reveal`}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.badgeGlow}></span>
              Alumni Network
            </span>
          </div>
          <h1 className={styles.heroTitle}>
            Voices of <span className={styles.gradientText}>Triumph</span>
          </h1>
          <p className={styles.heroDesc}>
            Discover how Catalyst Tech Hub has transformed careers and helped our students land their dream jobs at top tech companies worldwide.
          </p>
        </div>
      </section>

      {/* Stories Zig Zag */}
      <section className={styles.storiesSection}>
        <div className="container">
          <div className={styles.zigZagContainer}>
            {alumni.map((student, idx) => (
              <div key={student.id} className={`${styles.zigZagRow} ${idx % 2 !== 0 ? styles.rowReverse : ''} reveal`}>
                <div className={styles.imageCol}>
                  <div className={styles.imageGlow}></div>
                  <div className={styles.imageWrapper}>
                    <img src={student.img} alt={student.name} className={styles.studentImg} />
                    <div className={styles.imageOverlay}></div>
                  </div>
                </div>
                
                <div className={styles.textCol}>
                  <div className={styles.quoteMark}>"</div>
                  <p className={styles.quote}>
                    {quotes[idx % quotes.length]}
                  </p>
                  
                  <div className={styles.studentInfo}>
                    <h3 className={styles.studentName}>{student.name}</h3>
                    <div className={styles.studentRole}>{student.role}</div>
                  </div>
                  
                  <div className={styles.placementBadge}>
                    <span className={styles.companyLabel}>Hired by</span>
                    <span className={styles.companyName}>{student.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`${styles.ctaBox} reveal`}>
            <div className={styles.ctaGlow}></div>
            <div className={styles.ctaContent}>
              <h2>Ready to author your own success?</h2>
              <p>Join our upcoming cohort and get the cutting-edge skills, elite mentorship, and premium placement support to launch your tech career.</p>
              <button className={styles.ctaBtn} onClick={handleOpenModal}>
                Start Your Journey
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 19 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
