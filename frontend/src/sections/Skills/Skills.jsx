import React from 'react';
import styles from './Skills.module.css';

import { skills } from '../../data/siteData';

const IconPlaceholder = () => (

  return (
    <section className={`section ${styles.skillsSection}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Learn the Skills That Actually Get You Hired</h2>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
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
