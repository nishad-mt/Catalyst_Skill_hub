// src/sections/Hero/Hero.jsx

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import bgImage from '../../assets/image.png'; // ✅ correct path

export default function Hero() {
  const statsRef = useRef(null);

  const [counts, setCounts] = useState({
    students: 0,
    placement: 0,
    courses: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount("students", 1000, 2000);
          animateCount("placement", 95, 2500);
          animateCount("courses", 20, 3000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCount = (key, target, duration) => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // smooth easing
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(easeOut * target);

      setCounts((prev) => ({ ...prev, [key]: value }));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return (
    <section
      className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className="container">
        {/* Center Content */}
        <div className={styles.centerContent}>
          <h1 className={styles.title}>
            Build Your <span>Tech Future</span>
          </h1>

          <p className={styles.desc}>
            Industry-level training, real-world projects, and guaranteed career growth.
          </p>

          <div className={styles.ctaRow}>
            <button className="btn-primary">Get Free Consultation</button>
            <button className="btn-outline">Explore Courses</button>
          </div>
        </div>

        {/* Animated Stats */}
        <div className={styles.floatingStats} ref={statsRef}>
          <div className={styles.card}>
            <strong>{counts.students}+</strong>
            <span>Students</span>
          </div>

          <div className={styles.card}>
            <strong>{counts.placement}%</strong>
            <span>Placement</span>
          </div>

          <div className={styles.card}>
            <strong>{counts.courses}+</strong>
            <span>Courses</span>
          </div>
        </div>

      </div>
    
    </section>
  );
}