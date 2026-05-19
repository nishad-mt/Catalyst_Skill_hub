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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={`${styles.heroContent} reveal`}>
          <span className={styles.badge}>Alumni Network</span>
          <h1 className={styles.heroTitle}>
            Inspiring <span className={styles.gradientText}>Success Stories</span>
          </h1>
          <p className={styles.heroDesc}>
            Discover how Catalyst Tech Hub has transformed careers and helped our students land their dream jobs at top tech companies worldwide.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className={styles.storiesSection}>
        <div className="container">
          <div className={`${styles.grid} reveal-group`}>
            {alumni.map((student, idx) => (
              <div key={student.id} className={styles.storyCard}>
                <div className={styles.cardHeader}>
                  <img src={student.img} alt={student.name} className={styles.studentImg} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.studentName}>{student.name}</h3>
                  <div className={styles.studentRole}>{student.role}</div>
                  <p className={styles.quote}>
                    "{quotes[idx % quotes.length]}"
                  </p>
                  <div className={styles.cardFooter}>
                    <span className={styles.companyLabel}>Placed at</span>
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
            <h2>Ready to write your own success story?</h2>
            <p>Join our upcoming batch and get the skills, mentorship, and placement support you need to launch your tech career.</p>
            <button className={styles.ctaBtn} onClick={handleOpenModal}>
              Talk to our Career Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
