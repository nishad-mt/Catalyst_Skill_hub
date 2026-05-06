import React from 'react';
import styles from './Mentors.module.css';

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "James Alex",
      title: "CMA USA CMA India",
      description: "cyber security skills with hands-on training. Learn ethical hacking and protect real-world systems.",
      image: "https://i.pravatar.cc/300?img=11"
    },
    {
      id: 2,
      name: "James Alex",
      title: "CMA USA CMA India",
      description: "cyber security skills with hands-on training. Learn ethical hacking and protect real-world systems.",
      image: "https://i.pravatar.cc/300?img=12"
    },
    {
      id: 3,
      name: "James Alex",
      title: "CMA USA CMA India",
      description: "cyber security skills with hands-on training. Learn ethical hacking and protect real-world systems.",
      image: "https://i.pravatar.cc/300?img=13"
    },
    {
      id: 4,
      name: "James Alex",
      title: "CMA USA CMA India",
      description: "cyber security skills with hands-on training. Learn ethical hacking and protect real-world systems.",
      image: "https://i.pravatar.cc/300?img=14"
    }
  ];

  return (
    <section className={styles.mentorsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Learn From the Best</h2>
        
        <div className={styles.mentorsGrid}>
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

        <div className={styles.buttonContainer}>
          <button className={styles.talkBtn}>Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
