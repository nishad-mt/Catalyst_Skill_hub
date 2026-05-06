import React from 'react';
import styles from './ResourceCenter.module.css';

const ResourceCenter = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/seed/vid1/600/350",
      duration: "2:16"
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/seed/vid2/600/350",
      duration: "8:21"
    },
    {
      id: 3,
      thumbnail: "https://picsum.photos/seed/vid3/600/350",
      duration: "13:27"
    }
  ];

  return (
    <section className={styles.resourceSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Resource Center</h2>
        
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <img src={video.thumbnail} alt="Video thumbnail" className={styles.thumbnail} />
              <div className={styles.cardOverlay}>
                <button className={styles.viewBtn}>View Full Video</button>
                <span className={styles.duration}>{video.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.advisorBtn}>Talk with an Advisor</button>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
