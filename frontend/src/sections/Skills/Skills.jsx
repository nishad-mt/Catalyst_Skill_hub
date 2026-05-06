import React from 'react';
import styles from './Skills.module.css';

const IconPlaceholder = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Expert Mentorship",
      desc: "Learn from experienced trainers who bring real industry knowledge into every session."
    },
    {
      id: 2,
      title: "Hands-on Training",
      desc: "Work directly with tools, platforms, and workflows used in real job roles."
    },
    {
      id: 3,
      title: "Industry-Relevant Curriculum",
      desc: "Stay updated with skills and concepts aligned to current market demands."
    },
    {
      id: 4,
      title: "Live Project Experience",
      desc: "Learn from experienced trainers who bring real industry knowledge into every session."
    },
    {
      id: 5,
      title: "Placement support",
      desc: "Learn from experienced trainers who bring real industry knowledge into every session."
    },
    {
      id: 6,
      title: "Portfolio Development",
      desc: "Create a strong portfolio that showcases your skills and work to employers."
    },
    {
      id: 7,
      title: "Continuous Support",
      desc: "Get regular guidance, feedback, and doubt-clearing throughout your learning journey."
    },
    {
      id: 8,
      title: "Flexible Learning Structure",
      desc: "Structured programs, designed to help you learn effectively."
    },
    {
      id: 9,
      title: "Career-Focused Approach",
      desc: "Everything you learn is aligned with what companies expect from job-ready candidates."
    },
    {
      id: 10,
      title: "Flexible learning",
      desc: "Learn from experienced trainers who bring real industry knowledge into every session."
    }
  ];

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
