import React from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '../../data/siteData';
import successVideo from '../../assets/videos/success.mp4';
import parthivVideo from '../../assets/videos/parthiv.mp4';
import adithVideo from '../../assets/videos/adith.mp4';

const PlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const videoTestimonials = [
  {
    id: 'v1',
    name: "Success Story",
    role: "Placed Student Interview",
    isVideo: true,
    videoUrl: successVideo
  },
  {
    id: 'v2',
    name: "Parthiv's Success Journey",
    role: "Placed MERN Graduate",
    isVideo: true,
    videoUrl: parthivVideo
  },
  {
    id: 'v3',
    name: "Adith's Success Journey",
    role: "Placed Python Developer",
    isVideo: true,
    videoUrl: adithVideo
  }
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allTestimonials = [
    videoTestimonials[0],
    ...testimonials.slice(0, 3),
    videoTestimonials[1],
    ...testimonials.slice(3, 6),
    videoTestimonials[2],
    ...testimonials.slice(6)
  ];

  const triple = (arr) => [...arr, ...arr, ...arr];

  const renderCard = (item, suffix) => {
    if (item.isVideo) {
      return (
        <div key={`${item.id}-${suffix}`} className={styles.videoCard} onClick={() => setSelectedVideo(item.videoUrl)} style={{ cursor: 'pointer' }}>
          <div className={styles.videoThumbnailContainer}>
            <video src={item.videoUrl} preload="metadata" className={styles.cardVideoThumbnail} muted />
            <div className={styles.videoCardOverlay}>
              <PlayIcon />
            </div>
          </div>
          <div className={styles.videoCardInfo}>
            <h4 className={styles.videoCardName}>{item.name}</h4>
            <p className={styles.videoCardRole}>{item.role}</p>
          </div>
        </div>
      );
    }
    return (
      <div key={`${item.id}-${suffix}`} className={styles.card}>
        <div className={styles.cardHeader}>
          {item.image ? (
            <img src={item.image} alt={item.name} className={styles.avatar} />
          ) : (
            <div className={styles.avatarPlaceholder}>{item.initials}</div>
          )}
          <div className={styles.userInfo}>
            <h4 className={styles.userName}>{item.name}</h4>
            <p className={styles.userRole}>{item.role}</p>
          </div>
        </div>
        <p className={styles.cardText}>{item.text}</p>
      </div>
    );
  };
 
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>What Our Alumni Says</h2>
      </div>
 
      <div className={`${styles.marqueeContainer} reveal`}>
        {isMobile ? (
          /* Mobile: Single row with all items */
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {triple(allTestimonials).map((item, idx) => renderCard(item, `mob-${idx}`))}
            </div>
          </div>
        ) : (
          /* Desktop/Tablet: Dual rows */
          <>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {triple(allTestimonials.slice(0, 6)).map((item, idx) => renderCard(item, `r1-${idx}`))}
              </div>
            </div>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {triple(allTestimonials.slice(6, 11)).map((item, idx) => renderCard(item, `r2-${idx}`))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className={styles.videoModalOverlay} onClick={() => setSelectedVideo(null)}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.videoModalClose} onClick={() => setSelectedVideo(null)}>×</button>
            <video src={selectedVideo} controls autoPlay className={styles.modalVideoPlayer} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;