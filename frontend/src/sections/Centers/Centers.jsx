// src/sections/Centers/Centers.jsx
import { centers } from '../../data/siteData';
import styles from './Centers.module.css';

export default function Centers() {
  return (
    <section id="centers" className={styles.section}>
      <div className="container">

        {/* Split intro */}
        <div className={`${styles.intro} reveal`}>
          <div className={styles.introText}>
            <div className="section-tag">Our Presence</div>
            <h2 className="section-title">Centers Across the Region</h2>
            <p className="section-sub">
              We're strategically located where students are — with state-of-the-art
              facilities and experienced faculty at every center.
            </p>
            <a href="#contact" className={`btn-primary ${styles.introCta}`}>
              Find Nearest Center →
            </a>
          </div>

          <div className={styles.introImage}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern learning lab at Catalyst Tech Hub"
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.imageOverlay}>
              <span className={styles.overlayBadge}>🏆 Best-in-Class Facilities</span>
            </div>
          </div>
        </div>

        {/* Centers grid */}
        <div className={styles.grid}>
          {centers.map((center, i) => (
            <div
              key={center.id}
              className={`${styles.card} reveal reveal-d${(i % 3) + 1}`}
            >
              <div className={styles.icon}>{center.icon}</div>
              <h3 className={styles.cardTitle}>{center.name}</h3>
              <p className={styles.cardDesc}>{center.desc}</p>
              <span className={styles.badge}>{center.badge}</span>
              <a href="#contact" className={styles.cardCta}>
                Enquire at this Center →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
