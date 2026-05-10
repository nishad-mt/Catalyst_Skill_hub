import React from 'react';
import styles from './Mentors.module.css';

import { mentors } from '../../data/siteData';

const Mentors = () => {

  return (
    <section className={`section ${styles.mentorsSection}`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>Learn From the Best</h2>

        <div className={`${styles.mentorsGrid} reveal-group`}>
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={styles.mentorCard}
            >
              <div className={styles.imagePlaceholder}>
                <img src={mentor.image} alt={mentor.name} className={styles.mentorImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.mentorName}>{mentor.name}</h3>
                <p className={styles.mentorTitle}>{mentor.title}</p>
                <a href="#" className={styles.workAtLink}>Work @</a>
                <p className={styles.mentorDesc}>{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.buttonContainer} reveal`}>
          <button className={styles.talkBtn}>Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
