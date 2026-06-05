import React from 'react';
import styles from './Skills.module.css';
import { skills } from '../../data/siteData';

const IconPlaceholder = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const Skills = () => {
  return (
    <section className={`section ${styles.skillsSection}`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>Learn the Skills That Actually Get You Hired</h2>
        <p className={styles.subHeading}>
          From learning new skills to landing rewarding careers.
          Our placement records highlight the success journeys of our students.
          </p>

        <div className={`${styles.skillsGrid} reveal-group`}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={styles.skillCard}
            >
              <div className={styles.iconWrapper}>
                <IconPlaceholder />
              </div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDesc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
