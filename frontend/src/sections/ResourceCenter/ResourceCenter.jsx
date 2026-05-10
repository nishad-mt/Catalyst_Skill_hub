import React from 'react';
import styles from './ResourceCenter.module.css';

const ResourceCenter = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/0CbYBYGmWGE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=0CbYBYGmWGE",
      duration: "2:16"
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/VFroWFwDDR4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=VFroWFwDDR4",
      duration: "8:21"
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/HTYaYyswixM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=HTYaYyswixM",
      duration: "13:27"
    }
  ];

  return (
    <section className={styles.resourceSection}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>Resource Center</h2>

        <div className={`${styles.videoGrid} reveal-group`}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoCard}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <img src={video.thumbnail} alt="Video thumbnail" className={styles.thumbnail} />
              <div className={styles.cardOverlay}>
                <span className={styles.viewBtn}>View Full Video</span>
                <span className={styles.duration}>{video.duration}</span>
              </div>
            </a>
          ))}
        </div>

        <div className={`${styles.buttonContainer} reveal`}>
          <button className={styles.advisorBtn}>Talk with an Advisor</button>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
