// src/sections/Trust/Trust.jsx
import { stats, testimonials } from '../../data/siteData';
import styles from './Trust.module.css';

function StarRating({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Trust() {
  return (
    <section id="trust" className={styles.section}>
      <div className="container">

        {/* Heading */}
        <div className={`${styles.heading} reveal`}>
          <div className="section-tag">Why Catalyst</div>
          <h2 className="section-title">Trusted by Thousands</h2>
          <p className="section-sub">
            Real outcomes from real students who chose to build their careers with us.
          </p>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.statCard} reveal reveal-d${(i % 4) + 1}`}
            >
              <span className={styles.num}>{s.num}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.testiCard} reveal reveal-d${i + 1}`}
            >
              <StarRating count={t.stars} />
              <p className={styles.quote}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <strong className={styles.authorName}>{t.name}</strong>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA box */}
        <div className={`${styles.ctaBox} reveal`}>
          <h3 className={styles.ctaTitle}>Ready to Start Your Journey?</h3>
          <p className={styles.ctaDesc}>
            Join hundreds of students who transformed their careers at Catalyst Tech Hub.
          </p>
          <a href="#contact" className="btn-primary">
            Get in Touch Today →
          </a>
        </div>

      </div>
    </section>
  );
}
