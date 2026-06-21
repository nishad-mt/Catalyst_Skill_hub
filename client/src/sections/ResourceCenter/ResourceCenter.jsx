import React, { useState } from 'react';
import styles from './ResourceCenter.module.css';

const ResourceCenter = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/0CbYBYGmWGE/maxresdefault.jpg",
      videoId: "0CbYBYGmWGE",
      duration: "2:16"
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/VFroWFwDDR4/maxresdefault.jpg",
      videoId: "VFroWFwDDR4",
      duration: "8:21"
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/HTYaYyswixM/maxresdefault.jpg",
      videoId: "HTYaYyswixM",
      duration: "13:27"
    }
  ];

  return (
    <section className={styles.resourceSection}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>Resource Center</h2>

        <div className={`${styles.videoGrid} reveal-group`}>
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video.videoId)}
              className={styles.videoCard}
              style={{ display: 'block', cursor: 'pointer' }}
            >
              <img src={video.thumbnail} alt="Video thumbnail" className={styles.thumbnail} />
              <div className={styles.cardOverlay}>
                <span className={styles.viewBtn}>View Full Video</span>
                <span className={styles.duration}>{video.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.buttonContainer} reveal`}>
          <button className={styles.advisorBtn} onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: { type: 'callback' } }))}>Talk with an Advisor</button>
        </div>
      </div>

      {/* Full Screen YouTube Lightbox */}
      {selectedVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99999,
            backdropFilter: 'blur(8px)',
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <button
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100000
            }}
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>
          <div 
            style={{ width: '90%', maxWidth: '1000px', aspectRatio: '16/9', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResourceCenter;
