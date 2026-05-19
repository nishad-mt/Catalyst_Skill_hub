import React, { useEffect } from 'react';
import styles from './LifePage.module.css';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80", title: "Collaborative Workspaces", type: "large" },
  { id: 2, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", title: "Team Building", type: "normal" },
  { id: 3, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", title: "Hackathons", type: "tall" },
  { id: 4, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", title: "Project Discussions", type: "normal" },
  { id: 5, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", title: "Expert Workshops", type: "normal" },
  { id: 6, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80", title: "Annual Tech Fest", type: "large" },
];

const culturePoints = [
  { icon: "💡", title: "Innovation First", desc: "We encourage creative problem solving and out-of-the-box thinking in everything we do." },
  { icon: "🤝", title: "Collaborative Spirit", desc: "Learn from peers, mentors, and industry experts in a highly supportive environment." },
  { icon: "🚀", title: "Career Focused", desc: "Our curriculum and culture are designed solely to make you job-ready and competitive." },
  { icon: "🎉", title: "Work-Life Balance", desc: "We believe in working hard and celebrating our wins together through events and meetups." }
];

export default function LifePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={`${styles.badge} reveal`}>Behind the Scenes</span>
          <h1 className={`${styles.heroTitle} reveal`}>
            Life @ <span className={styles.gradientText}>Catalyst</span>
          </h1>
          <p className={`${styles.heroDesc} reveal`}>
            More than just a tech institute. We are a community of learners, innovators, and future tech leaders. Discover what makes learning at Catalyst unique.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <h2>A Glimpse into Our Campus</h2>
          </div>
          <div className={`${styles.galleryGrid} reveal-group`}>
            {galleryImages.map(img => (
              <div key={img.id} className={`${styles.galleryItem} ${styles[img.type]}`}>
                <img src={img.src} alt={img.title} className={styles.galleryImage} />
                <div className={styles.galleryOverlay}>
                  <h3>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cultureSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <h2>Our Core Culture</h2>
          </div>
          <div className={`${styles.cultureGrid} reveal-group`}>
            {culturePoints.map((point, idx) => (
              <div key={idx} className={styles.cultureCard}>
                <div className={styles.iconWrap}>{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
