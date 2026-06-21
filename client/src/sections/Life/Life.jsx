import React from 'react';
import styles from './Life.module.css';

// Import images from assets/life
import img1 from '../../assets/life/cat4.png';
import img2 from '../../assets/life/dathub.png';
import img3 from '../../assets/life/crowd.jpeg';
import img4 from '../../assets/life/learning.png';
import img5 from '../../assets/life/trainee.png';
import img6 from '../../assets/life/catalyst.png';
import img7 from '../../assets/life/lady.jpeg';
import img8 from '../../assets/life/neeraj.jpeg';
import img9 from '../../assets/life/success.jpeg';

const Life = ({ navigate }) => {
  const [selectedImg, setSelectedImg] = React.useState(null);

  const images = [
    { id: 1, src: img1, className: styles.span1x1 },
    { id: 2, src: img2, className: styles.span1x1 },
    { id: 3, src: img3, className: styles.span1x1 },
    { id: 4, src: img4, className: styles.span1x2 },
    { id: 5, src: img5, className: styles.span1x2 },
    { id: 6, src: img6, className: styles.span1x2 },
    { id: 7, src: img7, className: styles.span1x2 },
    { id: 8, src: img8, className: styles.span1x1 },
    { id: 9, src: img9, className: styles.span2x1 },
  ];

  return (
    <section className={`section ${styles.lifeSection}`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} reveal`}>Life@Catalyst</h2>

        <div className={`${styles.masonryGrid} reveal-group`}>
          {images.map((img) => (
            <div
              key={img.id}
              className={`${styles.imageWrapper} ${img.className}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedImg(img.src)}
            >
              <img src={img.src} alt="Life at Catalyst" className={styles.gridImage} />
            </div>
          ))}
        </div>

        <div className={`${styles.buttonContainer} reveal`}>
          <button className={styles.viewAllBtn} onClick={() => navigate('/life')}>View All</button>
        </div>
      </div>

      {/* Full Screen Image Lightbox */}
      {selectedImg && (
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
          onClick={() => setSelectedImg(null)}
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
            onClick={() => setSelectedImg(null)}
          >
            ×
          </button>
          <img
            src={selectedImg}
            alt="Preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Life;
