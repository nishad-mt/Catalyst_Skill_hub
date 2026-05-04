// src/sections/Hero/Hero.jsx
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const statsRef = useRef(null);

  const [counts, setCounts] = useState({
    students: 0,
    placement: 0,
    courses: 0
  });
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount("students", 1000, 2200);
          animateCount("placement", 95, 3200);
          animateCount("courses", 20, 3600);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

   const animateCount = (key, target, duration) => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      setCounts(prev => ({ ...prev, [key]: value }));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };
  return (
  <section id="home" className={styles.hero}>
    <div className={`${styles.blob} ${styles.blobA}`} />
    <div className={`${styles.blob} ${styles.blobB}`} />

    <div className="container">
      <div className={styles.grid}>

        {/* ---- Left: Text content ---- */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            #1 Tech Institution in Kozhikode
          </div>

          <h1 className={styles.title}>
            Launch Your{' '}
            <span className={styles.accent}>Tech Career</span>{' '}
            With Confidence
          </h1>

          <p className={styles.desc}>
            Learn from industry experts, get hands-on training, and land your dream
            job in tech. Catalyst Tech Hub has trained 1000+ students who are now
            thriving across India.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className="btn-primary">
              Contact Us →
            </a>
            <a href="#courses" className="btn-outline">
              Explore Courses
            </a>
          </div>

          {/* ✅ Stats strip (ONLY THIS PART needed change) */}
          <div className={styles.stats} ref={statsRef}>
            <div className={styles.stat}>
              <strong>{counts.students}+</strong>
              <span>Students Trained</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <strong>{counts.placement}%</strong>
              <span>Placement Rate</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <strong>{counts.courses}+</strong>
              <span>Expert Courses</span>
            </div>
          </div>
        </div>

        {/* ---- Right: Image ---- */}
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Students collaborating at Catalyst Tech Hub"
            className={styles.image}
            loading="lazy"
          />
        </div>

      </div>
    </div>
  </section>
);
}
