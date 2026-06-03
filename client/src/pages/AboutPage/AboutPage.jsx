import React from "react";
import styles from "./AboutPage.module.css";

function AboutPage() {
  const stats = [
    { number: "250+", text: "Expert Faculties" },
    { number: "250+", text: "Expert Faculties" },
    { number: "250+", text: "Expert Faculties" },
    { number: "250+", text: "Expert Faculties" },
  ];

  const features = [
    "Shaping the Generation",
    "Shaping the Generation",
    "Shaping the Generation",
    "Shaping the Generation",
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <h1>
            Shaping the <span>Next Generation of Tech</span> Professionals
          </h1>

          <p>
            Understand how SEO works across the complete customer journey and
            learn how to optimize content for awareness, consideration, and
            conversion stages to generate real business results.
          </p>

          <button>Learn More</button>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>IMAGE</div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        {stats.map((item, index) => (
          <div className={styles.statCard} key={index}>
            <h2>{item.number}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <h2 className={styles.secondheading}>
          Shaping the <span>Next Generation of Tech</span> Professionals
          Transforming Students into Industry-Ready Professionals
        </h2>

        <div className={styles.missionContainer}>
          <div
            className={`${styles.missionCard} ${styles.light}`}
          >
            <h3>Mission</h3>
            <p>
              Understand how SEO works across the complete customer journey and
              learn how to optimize content for awareness, consideration, and
              conversion stages to generate real business results.
            </p>
          </div>

          <div
            className={`${styles.missionCard} ${styles.dark}`}
          >
            <h3>Mission</h3>
            <p>
              Understand how SEO works across the complete customer journey and
              learn how to optimize content for awareness, consideration, and
              conversion stages to generate real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <h2 className={styles.heading}>
          Shaping the <span>Next Generation of Tech</span> Professionals
          Transforming Students into
        </h2>

        <div className={styles.featuresGrid}>
          {features.map((item, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.icon}>🎓</div>

              <h4>{item}</h4>

              <p>
                Understand how SEO works across the complete customer journey.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;